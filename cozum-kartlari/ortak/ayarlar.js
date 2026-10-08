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
  if (kelimeler.some(k => !/[aeıioöuüâîûAEIİOÖUÜÂÎÛ]/.test(k))) return 'Ad soyadını doğru yaz.';
  const sadelestir = t => String(t).toLocaleLowerCase('tr').replace(/[şçğöüâîû]/g, h => ({ ş: 's', ç: 'c', ğ: 'g', ö: 'o', ü: 'u', â: 'a', î: 'i', û: 'u' }[h]));
  const kotu = ['amk', 'amq', 'aq', 'mq', 'oc', 'sik', 'sikik', 'sikerim', 'siktir', 'yarak', 'yarrak', 'pic', 'orospu', 'got', 'gavat', 'pezevenk', 'kahpe', 'ibne', 'annen', 'anan', 'ananı', 'salak', 'aptal', 'gerizekalı', 'mal', 'am', 'amcık', 'tasak', 'yavsak', 'pust', 'kasar', 'fahise', 'surtuk', 'dangalak', 'serefsiz', 'kancık', 'godos', 'sapık', 'meme', 'penis', 'vajina', 'seks', 'sex', 'porno', 'pipi', 'popo', 'kıc', 'osur', 'embesil', 'hıyar', 'dallama', 'keriz', 'lavuk', 'test', 'xss', 'asd', 'asdf', 'qwe', 'deneme', 'admin', 'script', 'evil', 'payload', 'null', 'undefined'];
  const kokler = ['yarra', 'yarak', 'orosp', 'orosb', 'siktir', 'sikerim', 'sikeyim', 'sikis', 'amcık', 'amına', 'amınak', 'aminak', 'pezeven', 'gavat', 'kahpe', 'ibne', 'gote', 'picl', 'yavsa', 'fahis', 'surtu', 'serefsiz', 'dalyara', 'porno', 'godos', 'oglanc', 'tasag', 'tasak', 'kancık'];
  const kucuk = kelimeler.map(sadelestir);
  if (kucuk.some(k => kotu.includes(k)) || kokler.some(k => kucuk.join('').includes(k))) return 'Lütfen gerçek adını ve soyadını yaz.';
  return '';
};
