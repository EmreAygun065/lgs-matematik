// Test sonuçlarının gönderileceği Google Apps Script adresi (Google E-Tablo kurulumundan sonra doldurulur).
// Boş bırakılırsa öğrenci puanını görür ama sonuç öğretmene gönderilmez.
window.SONUC_ADRESI = 'https://script.google.com/macros/s/AKfycbwPY-1trXWVWZOwpjPU2BUsqzniUhPTMiImY_ohoeY80oKYP9FHXN1NAhe1xvxA4roy/exec';

// Sonuç gönderebilecek sınıflar: öğrenci girişte bu listeden seçer.
// Yeni şube açılırsa buraya ve Apps Script kodundaki SINIFLAR satırına ekle.
window.SINIFLAR = ['8-A', '8-B', '8-C', '8-D', '8-E'];

// Ad soyad denetimi (Apps Script'teki denetimle aynı kurallar). Sorun yoksa boş metin döner.
window.adHatasi = function (ad) {
  const a = String(ad || '').trim();
  const kelimeler = a.split(/\s+/);
  if (kelimeler.length < 2 || kelimeler.some(k => k.length < 2)) return 'Lütfen adını ve soyadını tam yaz.';
  if (a.length > 40 || kelimeler.length > 4) return 'Ad soyad çok uzun.';
  if (!/^[A-Za-zÇĞİÖŞÜÂÎÛçğıöşüâîû' ]+$/.test(a)) return 'Ad soyadda sadece harf kullan.';
  if (kelimeler.some(k => /(.)\1\1/i.test(k))) return 'Ad soyadını doğru yaz.';
  const kotu = ['amk', 'aq', 'oç', 'oc', 'sik', 'sikik', 'sikerim', 'siktir', 'yarak', 'yarrak', 'piç', 'pic', 'orospu', 'göt', 'got', 'gavat',
    'pezevenk', 'kahpe', 'ibne', 'annen', 'anan', 'ananı', 'salak', 'aptal', 'gerizekalı', 'mal', 'test', 'xss', 'asd', 'asdf', 'qwe', 'deneme', 'admin', 'script'];
  if (kelimeler.some(k => kotu.includes(k.toLocaleLowerCase('tr')))) return 'Lütfen gerçek adını ve soyadını yaz.';
  const bitisik = kelimeler.join('').toLocaleLowerCase('tr');
  if (['yarra', 'yarak', 'orosp', 'sikt', 'siker', 'sikim', 'sikiş', 'amcı', 'amına', 'amina', 'pezeven', 'gavat', 'kahpe', 'ibne', 'göte', 'piçl'].some(k => bitisik.includes(k))) return 'Lütfen gerçek adını ve soyadını yaz.';
  return '';
};
