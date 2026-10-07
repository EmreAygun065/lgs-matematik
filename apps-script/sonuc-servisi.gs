// Emre Hoca · Online test ve deneme sonuç servisi + öğretmen paneli verisi
// Bu kod Google E-Tablo'nun "Uzantılar → Apps Script" bölümüne yapıştırılır (eski kodun yerine).
// Öğrenci testi ya da denemeyi bitirdiğinde site sonucu buraya gönderir:
//   online testler → "Sonuçlar" sayfası, denemeler → "Denemeler" sayfası (yoksa kendiliğinden açılır).
// Öğretmen paneli (cozum-kartlari/panel.html) aşağıdaki şifreyle sonuçları okur.

// ↓↓↓ Panel şifreni tırnakların arasına yaz (en az 6 karakter). Boş kalırsa panel açılmaz, sonuçlar yine kaydedilir.
const PANEL_SIFRE = '';

const TEST_SAYFASI = 'Sonuçlar';
const DENEME_SAYFASI = 'Denemeler';
const TEST_BASLIKLAR = ['Tarih', 'Ad Soyad', 'Sınıf', 'Test', 'Doğru', 'Yanlış', 'Boş', 'Puan', 'Soru Sayısı', 'Cevaplar', 'Süre', 'Süre Doldu', 'Sayfadan Çıkma', 'Dışarıda Geçen Süre', 'Test Kodu'];
const DENEME_BASLIKLAR = ['Tarih', 'Ad Soyad', 'Sınıf', 'Deneme', 'Doğru', 'Yanlış', 'Boş', 'Net', 'Çarpanlar ve Katlar Neti', 'Üslü İfadeler Neti',
  'Puan', 'Soru Sayısı', 'Süre', 'Süre Doldu', 'Sayfadan Çıkma', 'Dışarıda Geçen Süre', 'Cevaplar', 'Soru Süreleri', 'Deneme Kodu'];

function doPost(e) {
  const v = JSON.parse(e.postData.contents);
  const deneme = /^deneme-/.test(String(v.testId || ''));
  const satir = {
    'Tarih': new Date(),
    'Ad Soyad': temiz(v.ad, 60),
    'Sınıf': temiz(v.sinif, 20),
    [deneme ? 'Deneme' : 'Test']: temiz(v.test, 120),
    'Doğru': sayi(v.dogru), 'Yanlış': sayi(v.yanlis), 'Boş': sayi(v.bos), 'Puan': sayi(v.puan), 'Soru Sayısı': sayi(v.soruSayisi),
    'Süre': temiz(v.sure, 20),
    'Süre Doldu': temiz(v.sureDoldu, 10),
    'Cevaplar': temiz(v.cevaplar, 4000),
    [deneme ? 'Deneme Kodu' : 'Test Kodu']: temiz(v.testId, 40)
  };
  if (deneme) {
    satir['Net'] = sayi(v.net);
    satir['Soru Süreleri'] = temiz(v.soruSureleri, 4000);
    // Her ünitenin neti ayrı sütuna yazılır; yeni bir ünite gelirse sütunu sona eklenir.
    const netler = v.uniteNetleri || {};
    Object.keys(netler).slice(0, 10).forEach(u => { satir[temiz(u, 40) + ' Neti'] = sayi(netler[u]); });
  }
  // Sitenin gönderdiği ek bilgiler (ör. sayfadan çıkma) kendi sütunlarına yazılır; yeni bir bilgi gelirse sütunu sona eklenir.
  // Böylece sitede yeni bir bilgi eklendiğinde bu kodu değiştirmek gerekmez.
  const ek = v.ekBilgi || {};
  Object.keys(ek).slice(0, 10).forEach(k => {
    const ad = temiz(k, 40);
    if (ad in satir) return;   // asıl sütunların üstüne yazılmaz
    satir[ad] = typeof ek[k] === 'number' ? sayi(ek[k]) : temiz(ek[k], 200);
  });
  // Aynı anda gelen sonuçlar birbirinin üstüne yazılmasın diye sırayla eklenir.
  const kilit = LockService.getScriptLock();
  kilit.waitLock(20000);
  try {
    satirEkle(sayfaGetir(deneme ? DENEME_SAYFASI : TEST_SAYFASI, deneme ? DENEME_BASLIKLAR : TEST_BASLIKLAR), satir);
  } finally {
    kilit.releaseLock();
  }
  return ContentService.createTextOutput('ok');
}

// Adres tarayıcıda şifresiz açılırsa kurulumun çalıştığını gösterir; panel şifreyle sonuçları ister.
function doGet(e) {
  const p = (e && e.parameter) || {};
  if (!p.sifre) return ContentService.createTextOutput('Emre Hoca test sonuç servisi çalışıyor.');
  if (String(PANEL_SIFRE).length < 6) return json({ hata: 'Panel şifresi henüz ayarlanmadı. Apps Script kodunun başındaki PANEL_SIFRE satırına şifreni yazıp yeni sürümü dağıt.' });
  if (p.sifre !== PANEL_SIFRE) {
    Utilities.sleep(1500);   // tahmin denemelerini yavaşlatır
    return json({ hata: 'Şifre yanlış.' });
  }
  return json({ testler: oku(TEST_SAYFASI), denemeler: oku(DENEME_SAYFASI), zaman: new Date().toISOString() });
}

function sayfaGetir(ad, basliklar) {
  const tablo = SpreadsheetApp.getActiveSpreadsheet();
  const sayfa = tablo.getSheetByName(ad) || tablo.insertSheet(ad);
  const mevcut = sayfa.getLastColumn() ? sayfa.getRange(1, 1, 1, sayfa.getLastColumn()).getValues()[0].map(String) : [];
  const eksik = basliklar.filter(b => mevcut.indexOf(b) < 0);
  if (eksik.length) {
    sayfa.getRange(1, mevcut.length + 1, 1, eksik.length).setValues([eksik]).setFontWeight('bold');
    sayfa.setFrozenRows(1);
  }
  return sayfa;
}

// Satırı başlık adlarına göre yerleştirir; sütunların sırası değişse de doğru yere yazar.
function satirEkle(sayfa, satir) {
  const basliklar = sayfa.getRange(1, 1, 1, sayfa.getLastColumn()).getValues()[0].map(String);
  const yeni = Object.keys(satir).filter(k => basliklar.indexOf(k) < 0);
  if (yeni.length) {
    sayfa.getRange(1, basliklar.length + 1, 1, yeni.length).setValues([yeni]).setFontWeight('bold');
    yeni.forEach(k => basliklar.push(k));
  }
  const degerler = basliklar.map(b => (b in satir ? satir[b] : ''));
  // Metinler metin olarak yazılır (ör. "8-1" sınıfı tarihe dönüşmesin).
  const bicimler = degerler.map(d => d instanceof Date ? 'dd.mm.yyyy hh:mm' : typeof d === 'number' ? (Number.isInteger(d) ? '0' : '0.00') : '@');
  sayfa.getRange(sayfa.getLastRow() + 1, 1, 1, degerler.length).setNumberFormats([bicimler]).setValues([degerler]);
}

function oku(ad) {
  const sayfa = SpreadsheetApp.getActiveSpreadsheet().getSheetByName(ad);
  if (!sayfa || sayfa.getLastRow() < 2) return [];
  const veri = sayfa.getDataRange().getValues();
  const basliklar = veri[0].map(String);
  return veri.slice(1)
    .filter(r => r.some(x => x !== ''))
    .map(r => {
      const o = {};
      basliklar.forEach((b, i) => { if (b) o[b] = r[i] instanceof Date ? r[i].toISOString() : r[i]; });
      return o;
    });
}

function json(o) {
  return ContentService.createTextOutput(JSON.stringify(o)).setMimeType(ContentService.MimeType.JSON);
}

// Öğrencinin yazdığı metni kısaltır; "=" gibi işaretlerle başlıyorsa formül olarak çalışmasın diye başına ' ekler.
function temiz(metin, enFazla) {
  let s = String(metin == null ? '' : metin).slice(0, enFazla);
  if (/^[=+\-@]/.test(s)) s = "'" + s;
  return s;
}

// "-0,67" gibi Türkçe yazılmış sayıları da kabul eder.
function sayi(x) {
  if (x === '' || x == null) return '';
  const n = Number(String(x).replace(',', '.'));
  return isFinite(n) ? n : '';
}
