// Öğrencinin çözdüğü test ve denemeler bu cihazda (localStorage) saklanır; "Yanlışlarım" sayfası buradan okur.
// Sorular kaydedilmez, sadece hangi sınavın kaçıncı sorusu olduğu ve öğrencinin cevabı (asıl şık numarası) tutulur.
(function () {
  const ANAHTAR = 'gecmis', EN_FAZLA = 80;
  window.gecmisOku = () => { try { const g = JSON.parse(localStorage.getItem(ANAHTAR) || '[]'); return Array.isArray(g) ? g : []; } catch (e) { return []; } };
  // kayit: { kod, tur: 'test' | 'deneme', baslik, ogrenci, tarih, cevaplar: [asıl şık numarası | null], dogru, yanlis, bos, net? , puan? }
  window.gecmiseEkle = kayit => {
    try { localStorage.setItem(ANAHTAR, JSON.stringify([...gecmisOku(), kayit].slice(-EN_FAZLA))); } catch (e) {}
  };
  // "Öğrendim" denen sorular listeden çıkar: anahtar "sınavKodu#soruSırası"
  window.ogrenilenler = () => { try { return new Set(JSON.parse(localStorage.getItem('ogrenilen') || '[]')); } catch (e) { return new Set(); } };
  window.ogrenildiYap = (anahtar, evet) => {
    const s = ogrenilenler(); evet ? s.add(anahtar) : s.delete(anahtar);
    try { localStorage.setItem('ogrenilen', JSON.stringify([...s])); } catch (e) {}
  };
})();
