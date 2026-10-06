// Online testlerin ve denemelerin soru listeleri.
// test.html, deneme.html ve panel.html aynı listeyi kullanır; öğretmen paneli gelen cevapları bu sıraya göre sorulara eşler.
// Not: Yayındaki bir testin/denemenin sorularını ya da sırasını değiştirmek eski sonuçların panelde yanlış soruya eşlenmesine yol açar;
// değişiklik gerekirse yeni bir id ile yeni test/deneme ekleyin.
// Önce veri dosyaları (benzer-*, carpan-benzer-*, karekok-benzer-*) yüklenmiş olmalı.
(function () {
  const CARPAN = 'Çarpanlar ve Katlar', USLU = 'Üslü İfadeler', KAREKOK = 'Kareköklü İfadeler';
  const varsa = ad => window[ad] || [];
  const BO = varsa('BENZER_ORNEK');
  // Üslü İfadeler çıkmış-benzeri sorularının konuları (öğretmen panelindeki konu analizi için).
  const USLU_CIKMIS_KONU = { 1: "10'un kuvvetleri", 2: 'Temel kurallar', 3: 'Temel kurallar', 4: 'Temel kurallar', 5: 'Temel kurallar', 6: 'Bilimsel gösterim',
    7: 'Tam sayı kuvvetleri', 8: 'Temel kurallar', 9: 'Temel kurallar', 10: "10'un kuvvetleri", 11: 'Temel kurallar', 12: 'Bilimsel gösterim',
    13: 'Tam sayı kuvvetleri', 14: "10'un kuvvetleri", 15: 'Temel kurallar', 16: 'Temel kurallar', 17: 'Ondalık çözümleme', 18: 'Ondalık çözümleme',
    19: 'Temel kurallar', 20: "10'un kuvvetleri", 21: 'Tam sayı kuvvetleri' };
  const BC = varsa('BENZER_CIKMIS').map(q => (q.konu ? q : { ...q, konu: USLU_CIKMIS_KONU[q.no] }));
  const CKO = varsa('CK_BENZER_ORNEK'), CKC = varsa('CK_BENZER_CIKMIS');
  const KKO = varsa('KK_BENZER_ORNEK'), KKC = varsa('KK_BENZER_CIKMIS');

  const araliktan = (a, b) => BO.filter(q => q.no >= a && q.no <= b);
  const kkKonu = (...konular) => KKO.filter(q => konular.includes(q.konu));
  const kkYaklasik = KKO.filter(q => q.konu === 'Karekökün yaklaşık değeri');
  const ckKonu = (...konular) => CKO.filter(q => konular.includes(q.konu));
  const ckEbob = ckKonu('EBOB ve EKOK');

  // Her test sorusuna ünitesi eklenir (öğretmen panelindeki ünite/konu analizi için).
  const test = (id, unite, ad, sorular) => ({ id, unite, ad, sorular: () => sorular().map(q => ({ ...q, unite })) });
  window.TESTLER = [
    test('ck-karma', CARPAN, 'LGS tarzı karma test', () => CKC),
    test('ck-carpan', CARPAN, 'Bir doğal sayının çarpanları', () => ckKonu('Bir doğal sayının çarpanları')),
    test('ck-ebob-1', CARPAN, 'EBOB ve EKOK – 1', () => ckEbob.slice(0, 18)),
    test('ck-ebob-2', CARPAN, 'EBOB ve EKOK – 2', () => ckEbob.slice(18, 36)),
    test('ck-ebob-3', CARPAN, 'EBOB ve EKOK – 3', () => ckEbob.slice(36)),
    test('ck-asal', CARPAN, 'Aralarında asal sayılar', () => ckKonu('Aralarında asal sayılar')),
    test('cikmis', USLU, 'LGS tarzı karma test', () => BC),
    test('tam-sayi', USLU, 'Tam sayıların kuvvetleri', () => araliktan(1, 15)),
    test('kurallar-1', USLU, 'Temel kurallar – 1', () => araliktan(16, 34)),
    test('kurallar-2', USLU, 'Temel kurallar – 2', () => araliktan(35, 53)),
    test('ondalik', USLU, "Ondalık çözümleme ve 10'un kuvvetleri", () => araliktan(54, 75)),
    test('bilimsel', USLU, 'Bilimsel gösterim', () => araliktan(76, 80)),
    test('kk-karma-1', KAREKOK, 'LGS tarzı karma test – 1', () => KKC.slice(0, 16)),
    test('kk-karma-2', KAREKOK, 'LGS tarzı karma test – 2', () => KKC.slice(16)),
    test('kk-temel', KAREKOK, 'Tam kareler, ondalık sayılar, gerçek sayılar', () => kkKonu('Tam kare sayılar', 'Ondalık sayıların karekökü', 'Gerçek sayılar')),
    test('kk-yaklasik-1', KAREKOK, 'Karekökün yaklaşık değeri – 1', () => kkYaklasik.slice(0, 20)),
    test('kk-yaklasik-2', KAREKOK, 'Karekökün yaklaşık değeri – 2', () => kkYaklasik.slice(20)),
    test('kk-carpma', KAREKOK, 'Çarpma ve bölme', () => kkKonu('Çarpma ve bölme')),
    test('kk-toplama', KAREKOK, 'Toplama ve çıkarma', () => kkKonu('Toplama ve çıkarma'))
  ];

  // Her deneme: her üniteden 5 çıkmış-benzeri + 5 MEB-benzeri soru. Denemeler birbirinden farklı sorulardan oluşur.
  // Sorular karışık sıradadır; sıra her deneme için sabittir (bütün öğrenciler aynı sırayı görür).
  const sec = (dizi, adet, baslangic, adim) => Array.from({ length: adet }, (_, i) => dizi[(baslangic + i * adim) % dizi.length]);
  const etiketle = (q, unite) => ({ ...q, unite });
  const karistir = (dizi, tohum) => {
    let t = tohum;
    const rastgele = () => { t = (t * 1103515245 + 12345) % 2147483648; return t / 2147483648; };
    const a = [...dizi];
    for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(rastgele() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; }
    return a;
  };
  window.DENEMELER = CKC.length && BC.length ? [1, 2, 3].map(n => {
    const k = n - 1;
    const carpan = [...CKC.slice(k * 5, k * 5 + 5), ...sec(CKO, 5, k * 5 + 2, 15)].map(q => etiketle(q, CARPAN));
    const uslu = [...BC.slice(k * 5, k * 5 + 5), ...sec(BO, 5, k * 5 + 3, 16)].map(q => etiketle(q, USLU));
    return { id: 'deneme-' + n, ad: `Deneme ${n}`, kapsam: `${CARPAN} + ${USLU}`, sorular: karistir([...carpan, ...uslu], 2026 + n * 97) };
  }) : [];
})();
