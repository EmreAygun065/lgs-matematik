// Emre Hoca · Online test ve deneme sonuç servisi + öğretmen paneli verisi
// Bu kod Google E-Tablo'nun "Uzantılar → Apps Script" bölümüne yapıştırılır (eski kodun yerine).
// Öğrenci testi ya da denemeyi bitirdiğinde site sonucu buraya gönderir:
//   online testler → "Sonuçlar" sayfası, denemeler → "Denemeler" sayfası (yoksa kendiliğinden açılır).
// Öğretmen paneli (cozum-kartlari/panel.html) aşağıdaki şifreyle sonuçları okur.

// ↓↓↓ Panel şifreni tırnakların arasına yaz (en az 6 karakter). Boş kalırsa panel açılmaz, sonuçlar yine kaydedilir.
const PANEL_SIFRE = '';

// Sonuç gönderebilecek sınıflar. Yeni şube açılırsa buraya ve sitedeki ortak/ayarlar.js dosyasına ekle.
const SINIFLAR = ['8-A', '8-B', '8-C', '8-D', '8-E'];

// Tabloya yazılabilecek ek bilgiler ve ünite adları: sadece bu listedekiler kabul edilir, dışarıdan yeni sütun açılamaz.
const EK_BILGILER = ['Sayfadan Çıkma', 'Dışarıda Geçen Süre'];
const UNITELER = ['Çarpanlar ve Katlar', 'Üslü İfadeler', 'Kareköklü İfadeler', 'Veri Analizi', 'Basit Olayların Olma Olasılığı',
  'Cebirsel İfadeler ve Özdeşlikler', 'Doğrusal Denklemler', 'Eşitsizlikler', 'Üçgenler', 'Eşlik ve Benzerlik', 'Dönüşüm Geometrisi', 'Geometrik Cisimler'];

const TEST_SAYFASI = 'Sonuçlar';
const RED_SAYFASI = 'Reddedilenler';
const DENEME_SAYFASI = 'Denemeler';
const TEST_BASLIKLAR = ['Tarih', 'Ad Soyad', 'Sınıf', 'Test', 'Doğru', 'Yanlış', 'Boş', 'Puan', 'Soru Sayısı', 'Cevaplar', 'Süre', 'Süre Doldu', 'Sayfadan Çıkma', 'Dışarıda Geçen Süre', 'Test Kodu'];
const DENEME_BASLIKLAR = ['Tarih', 'Ad Soyad', 'Sınıf', 'Deneme', 'Doğru', 'Yanlış', 'Boş', 'Net', 'Çarpanlar ve Katlar Neti', 'Üslü İfadeler Neti',
  'Puan', 'Soru Sayısı', 'Süre', 'Süre Doldu', 'Sayfadan Çıkma', 'Dışarıda Geçen Süre', 'Cevaplar', 'Soru Süreleri', 'Deneme Kodu'];

function doPost(e) {
  let v;
  try { v = JSON.parse(e.postData.contents); } catch (x) { return ContentService.createTextOutput('reddedildi'); }
  // "8 A", "8a", "8/A" gibi yazımlar "8-A" yapılır (sınıf listesinden önce açılmış denemeler bu biçimde gelebilir).
  if (v && typeof v === 'object') v.sinif = sinifDuzelt(v.sinif);
  // Siteden gelmeyen ya da tutarsız sonuçlar tabloya yazılmaz; ayrı bir sayfaya kısa bir not düşülür.
  const sebep = dogrula(v);
  if (sebep) {
    reddedileniYaz(v, sebep);
    return ContentService.createTextOutput('reddedildi');
  }
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
    // Her ünitenin neti ayrı sütuna yazılır (sadece UNITELER listesindeki üniteler); sütunu yoksa sona eklenir.
    const netler = v.uniteNetleri || {};
    Object.keys(netler).slice(0, 10).forEach(u => { satir[temiz(u, 40) + ' Neti'] = sayi(netler[u]); });
  }
  // Sitenin gönderdiği ek bilgiler (ör. sayfadan çıkma) kendi sütunlarına yazılır; sadece EK_BILGILER listesindekiler kabul edilir.
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

// ---------- Gelen sonucun denetimi ----------
// Sitenin gönderdiği gerçek bir sonuç bu kontrollerin hepsinden geçer; elle uydurulmuş kayıtlar takılır.
const KOTU_KELIMELER = ['amk', 'aq', 'oç', 'oc', 'sik', 'sikik', 'sikerim', 'siktir', 'yarak', 'yarrak', 'piç', 'pic', 'orospu', 'göt', 'got', 'gavat',
  'pezevenk', 'kahpe', 'ibne', 'annen', 'anan', 'ananı', 'salak', 'aptal', 'gerizekalı', 'mal', 'test', 'xss', 'asd', 'asdf', 'qwe', 'deneme', 'admin', 'script'];

// Kelimenin içinde geçmesi bile yetecek kökler (harf eklenmiş/oynanmış halleri de yakalanır).
const KOTU_KOKLER = ['yarra', 'yarak', 'orosp', 'sikt', 'siker', 'sikim', 'sikiş', 'amcı', 'amına', 'amina', 'pezeven', 'gavat', 'kahpe', 'ibne', 'göte', 'piçl'];

function sinifDuzelt(sinif) {
  return String(sinif == null ? '' : sinif).trim().toLocaleUpperCase('tr').replace(/\s+/g, '').replace(/[\/._]/g, '-')
    .replace(/^(\d+)-?([A-ZÇĞİÖŞÜ])$/, '$1-$2');
}

function adHatasi(ad) {
  const a = String(ad || '').trim();
  if (a.length < 5 || a.length > 40) return 'ad uzunluğu';
  if (!/^[A-Za-zÇĞİÖŞÜÂÎÛçğıöşüâîû' ]+$/.test(a)) return 'adda harf dışı karakter';
  const kelimeler = a.split(/\s+/);
  if (kelimeler.length < 2 || kelimeler.length > 4 || kelimeler.some(k => k.length < 2)) return 'ad soyad biçimi';
  if (kelimeler.some(k => /(.)\1\1/i.test(k))) return 'aynı harf tekrarı';
  const kucuk = kelimeler.map(k => k.toLocaleLowerCase('tr'));
  if (kucuk.some(k => KOTU_KELIMELER.indexOf(k) >= 0)) return 'uygunsuz kelime';
  const bitisik = kucuk.join('');
  if (KOTU_KOKLER.some(k => bitisik.indexOf(k) >= 0)) return 'uygunsuz kelime';
  return '';
}

function dogrula(v) {
  if (!v || typeof v !== 'object') return 'veri yok';
  const h = adHatasi(v.ad); if (h) return h;
  if (SINIFLAR.length && SINIFLAR.indexOf(String(v.sinif)) < 0) return 'listede olmayan sınıf';
  const kod = String(v.testId || '');
  if (!/^[a-z0-9-]{2,30}$/.test(kod)) return 'sınav kodu';
  const n = Number(v.soruSayisi), d = Number(v.dogru), y = Number(v.yanlis), b = Number(v.bos);
  if (![n, d, y, b].every(x => Number.isInteger(x) && x >= 0) || n < 5 || n > 40 || d + y + b !== n) return 'doğru/yanlış/boş tutmuyor';
  if (Number(v.puan) !== Math.round(d / n * 100)) return 'puan tutmuyor';
  // Cevap listesi: "1:C✓ 2:A✗(B) 3:-" biçiminde, soru sayısı kadar ve sayılarla uyumlu olmalı
  const parca = String(v.cevaplar || '').split(' ');
  if (parca.length !== n) return 'cevap sayısı';
  let dd = 0, bb = 0;
  for (let i = 0; i < n; i++) {
    const m = /^(\d+):([A-D]✓|[A-D]✗\([A-D]\)|-)$/.exec(parca[i]);
    if (!m || Number(m[1]) !== i + 1) return 'cevap biçimi';
    if (m[2] === '-') bb++; else if (m[2].indexOf('✓') > 0) dd++;
  }
  if (dd !== d || bb !== b) return 'cevaplar sayılarla tutmuyor';
  if (!/^\d{1,3}:\d{2} \/ \d{1,3}:\d{2}$/.test(String(v.sure || ''))) return 'süre biçimi';
  if (['Evet', 'Hayır'].indexOf(v.sureDoldu) < 0) return 'süre doldu alanı';
  // Okumadan işaretleme: cevaplanan soru başına 8 saniyeden az süre gerçekçi değil.
  const sm = /^(\d+):(\d{2})/.exec(String(v.sure));
  const gecen = Number(sm[1]) * 60 + Number(sm[2]), cevaplanan = n - b;
  if (cevaplanan >= 3 && gecen < cevaplanan * 8) return 'rastgele işaretleme (çok kısa süre)';
  if (/^deneme-/.test(kod)) {
    if (Math.abs(Number(v.net) - (d - y / 3)) > 0.02) return 'net tutmuyor';
    const sureler = String(v.soruSureleri || '').split(' ');
    if (sureler.length !== n || sureler.some((x, i) => !new RegExp('^' + (i + 1) + ':\\d{1,3}:\\d{2}$').test(x))) return 'soru süreleri';
    const netler = v.uniteNetleri || {};
    if (typeof netler !== 'object' || Object.keys(netler).some(k => UNITELER.indexOf(k) < 0 || !(Math.abs(Number(netler[k])) <= 40))) return 'ünite netleri';
  }
  const ek = v.ekBilgi || {};
  if (typeof ek !== 'object' || Object.keys(ek).some(k => EK_BILGILER.indexOf(k) < 0 || !(typeof ek[k] === 'number' ? Math.abs(ek[k]) < 100000 : /^\d{1,4}:\d{2}$/.test(String(ek[k]))))) return 'ek bilgi';
  return '';
}

// Reddedilen gönderimler: zamanı, sebebi ve yazılan ad/sınıf (kısaltılmış). Sayfa en çok 1000 satır tutar.
function reddedileniYaz(v, sebep) {
  try {
    const kilit = LockService.getScriptLock();
    kilit.waitLock(10000);
    try {
      const sayfa = sayfaGetir(RED_SAYFASI, ['Tarih', 'Sebep', 'Ad Soyad', 'Sınıf', 'Sınav Kodu']);
      if (sayfa.getLastRow() > 1000) return;
      satirEkle(sayfa, { 'Tarih': new Date(), 'Sebep': sebep, 'Ad Soyad': temiz(v && v.ad, 60), 'Sınıf': temiz(v && v.sinif, 20), 'Sınav Kodu': temiz(v && v.testId, 40) });
    } finally {
      kilit.releaseLock();
    }
  } catch (x) {}
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
