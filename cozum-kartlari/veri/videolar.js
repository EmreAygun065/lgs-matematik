// Konu anlatım videoları. Sayfa: video.html?unite=uslu (ya da yedi)
// Videolar ve kapakları: cozum-kartlari/videolar/
// Yeni video eklemek için listeye bir satır eklenir; ana sayfadaki bağlantı da eklenir.
window.VIDEOLAR = {
  uslu: {
    ad: 'Üslü İfadeler',
    sinif: 8,
    ozet: 'ozet.html?unite=uslu',
    test: 'test.html?test=cikmis',
    videolar: [
      {
        id: 'uslu-1',
        ad: 'Üs ne demek? Sıfırıncı ve negatif kuvvet',
        aciklama: 'Taban ve üs, tekrarlı çarpma, negatif tabanda parantez, sıfırıncı kuvvet ve negatif üs.',
        konular: ['2³ ≠ 2 · 3', '(−2)⁴ ile −2⁴', '2⁰ = 1', '2⁻³ = 1/8'],
        dosya: 'videolar/uslu-1.mp4', kapak: 'videolar/uslu-1.jpg', sure: '2:37'
      },
      {
        id: 'uslu-2',
        ad: 'Üslü ifadelerle işlemler',
        aciklama: 'Aynı tabanda çarpma ve bölme, üssün üssü, tabanları farklı ifadeler.',
        konular: ['2³ · 2² = 2⁵', '2⁵ : 2² = 2³', '(2³)² = 2⁶', '2³ · 5³ = 10³'],
        dosya: 'videolar/uslu-2.mp4', kapak: 'videolar/uslu-2.jpg', sure: '2:31'
      },
      {
        id: 'uslu-3',
        ad: '10\'un kuvvetleri ve bilimsel gösterim',
        aciklama: '10\'un kuvvetleri, ondalık sayıları çözümleme, çok büyük ve çok küçük sayıları bilimsel gösterimle yazma.',
        konular: ['10⁻³ = 0,001', '345,27 çözümleme', '1,5 · 10⁸', '7 · 10⁻⁶'],
        dosya: 'videolar/uslu-3.mp4', kapak: 'videolar/uslu-3.jpg', sure: '2:20'
      }
    ]
  },
  yedi: {
    ad: 'Tam Sayılar ve Rasyonel Sayılar',
    sinif: 7,
    ozet: 'ozet.html?unite=yedi',
    test: 'test.html?test=yedi-tanima',
    videolar: [
      {
        id: 'yedi-rasyonel-siralama',
        ad: 'Rasyonel sayıları sıralama',
        aciklama: 'Sayı doğrusu, paydaları eşitleme, ondalık gösterimle kontrol ve negatif kesirleri sıralama.',
        konular: ['1/3 > 1/4', '2/3 > 3/5', '−1/3 > −1/2', '0,6̅'],
        dosya: 'videolar/yedi-rasyonel-siralama.mp4', kapak: 'videolar/yedi-rasyonel-siralama.jpg', sure: '3:33'
      }
    ]
  }
};
