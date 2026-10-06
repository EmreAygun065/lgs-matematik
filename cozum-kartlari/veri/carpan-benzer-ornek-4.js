// MEB örnek sorularına benzer yeni sorular 61–78 (Çarpanlar ve Katlar)
(function () {
  const { CA, EB, AA } = CK_KONU;
  const izgara3 = h => `<table class="grid">${h.map(r => `<tr>${r.map(([c, t]) => `<td class="${c}">${t}</td>`).join('')}</tr>`).join('')}</table>`;

  CK_BENZER_ORNEK.push(
  {
    no: 61, konu: EB,
    q: `<p>Kerem'e 150, 120 ve 60 cm; Ahmet'e 200, 72 ve 90 cm'lik tahtalar veriliyor. Her biri, yan tahtaları ve basamakları tek parça, 1 m yüksekliğinde, parça artmayan ve basamak sayısı en az bir merdiven yapıyor.</p><p class="ask">Basamak sayıları farkı kaçtır?</p>`,
    opts: ['1', '2', '3', '4'], ans: 3,
    hints: [`Önce iki tane 100 cm'lik yan tahta ayır.`],
    steps: [`Kerem: 150 → 100 + 50, 120 → 100 + 20; kalan 50, 20, 60 → EBOB 10 → 5 + 2 + 6 = 13`, `Ahmet: 200 → 2 × 100; kalan 72, 90 → EBOB 18 → 4 + 5 = 9`, `Fark <b>4</b>`],
    answer: `Cevap: <b>D</b>`
  },
  {
    no: 62, konu: EB,
    q: `<p>Damlama sulama, fıskiyeye göre % 25 su tasarrufu sağlıyor. Alanları farklı doğal sayı dönüm olan iki tarladan biri fıskiyeyle, diğeri damlamayla sulanıyor ve iki tarlaya eşit su harcanıyor.</p><p class="ask">Toplam alan hangisi olabilir?</p>`,
    opts: ['10', '12', '13', '14'], ans: 3,
    hints: [`Damlama dönüm başına 0,75 birim su harcar.`],
    steps: [`f = 0,75d → 4f = 3d → f = 3k, d = 4k`, `Toplam 7k → <b>14</b>`],
    answer: `Cevap: <b>D</b>`
  },
  {
    no: 63, konu: EB,
    q: `<p>Kermeste 20 TL'lik romanlar ve 35 TL'lik tişörtler satılıyor; iki üründen eşit gelir elde ediliyor. Gelirin tamamıyla 1000 TL'lik tekerlekli sandalyeler alınıyor.</p><p class="ask">Satılan tişört sayısı <u>en az</u> kaçtır?</p>`,
    opts: ['100', '125', '140', '175'], ans: 0,
    hints: [`Her ürün geliri R, 140'ın katı; 2R, 1000'in katı.`],
    steps: [`280a = 1000b → 7a = 25b → a = 25 → R = 3500`, `Tişört: 3500 / 35 = <b>100</b>`],
    answer: `Cevap: <b>A</b>`
  },
  {
    no: 64, konu: EB,
    q: `<p>Kenarları 15 cm'den büyük tam sayı olan eş iki çerçeve aynı yükseklikteki çivilere aynı biçimde asılıyor. Üst kenar ile ipler arasındaki üçgenlerin alanları 90 ve 120 cm².</p><p class="ask">Çerçevelerin yerden yükseklikleri farkının alabileceği <u>en büyük</u> tam sayı değeri kaçtır?</p>`,
    opts: ['1', '2', '3', '4'], ans: 2,
    hints: [`Fark = (240 − 180)/a = 60/a.`],
    steps: [`a > 15 ve 60/a tam sayı → a = 20, 30, 60`, `En büyük fark 60 / 20 = <b>3</b>`],
    answer: `Cevap: <b>C</b>`
  },
  {
    no: 65, konu: AA,
    q: `<p>Bir sayacın ilk iki hanesinde sabit 23, son iki hanesinde 10'dan 99'a kadar birer artan sayılar görünüyor.</p><p class="ask">Son iki hanedeki sayılardan kaçı 23 ile aralarında asal <u>değildir</u>?</p>`,
    opts: ['4', '5', '6', '7'], ans: 0,
    hints: [`23'ün katlarını say.`],
    steps: [`23, 46, 69, 92 → <b>4</b>`],
    answer: `Cevap: <b>A</b>`
  },
  {
    no: 66, konu: AA,
    q: `<p>Altı bilyeden beşinde 6, 35, 10, 21, 33 yazıyor; altıncısı mavi. Bilyeler, her ikilideki sayılar aralarında asal olacak biçimde üç ikiliye ayrılıyor; her ikiliden biri A'ya, diğeri B'ye konuyor ve kutulardaki toplamlar eşit oluyor.</p><p class="ask">Mavi bilyede hangi sayı yazar?</p>`,
    opts: ['51', '61', '67', '73'], ans: 3,
    hints: [`6'nın tek uygun eşi 35; 21'in kalan tek eşi 10.`],
    steps: [`İkililer: (6, 35), (10, 21), (33, x)`, `A = {35, 21, 33} = 89, B = {6, 10, x} → x = 73 (33 ile aralarında asal ✓)`, `Diğer dağılımlar 51 veya 15 verir; ikisi de 33 ile aralarında asal değil → <b>73</b>`],
    answer: `Cevap: <b>D</b>`
  },
  {
    no: 67, konu: AA,
    q: `<p>Kenarları 20 cm'den kısa doğal sayı olan özdeş iki dikdörtgen kâğıttan biri uzun kenarları, diğeri kısa kenarları çakışacak biçimde ortadan katlanıyor. İki durumda da oluşan dikdörtgenin kenarları aralarında asal.</p><p class="ask">Kâğıdın çevresi <u>en fazla</u> kaçtır?</p>`,
    opts: ['56', '60', '64', '68'], ans: 2,
    hints: [`Kenarlar 2 · tek sayı: 2, 6, 10, 14, 18.`],
    steps: [`18 × 14: EBOB(18, 7) = 1, EBOB(9, 14) = 1 ✓`, `Çevre 2(18 + 14) = <b>64</b>`],
    answer: `Cevap: <b>C</b>`
  },
  {
    no: 68, konu: AA,
    q: `<p>Beş tahta uzundan kısaya dizili: en uzunu 20 cm, sonra A, B, C, en kısası 10 cm (hepsi doğal sayı). B ile C aralarında asal, A ile B aralarında asal değil. A ve C, 1'den büyük eşit uzunlukta parçalara artıksız bölünüyor.</p><p class="ask">A ve C'den elde edilen toplam parça sayısı hangisi olabilir?</p>`,
    opts: ['9', '11', '13', '15'], ans: 1,
    hints: [`20 > A > B > C > 10 üçlülerini dene.`],
    steps: [`(18, 15, 14): parça 2 → 16. (18, 16, 15): parça 3 → 11`, `Seçeneklerde <b>11</b>`],
    answer: `Cevap: <b>B</b>`
  },
  {
    no: 69, konu: AA,
    q: `<p>Alanları 72 ve 50 cm² olan kenarları tam sayı iki dikdörtgenin kısa kenarları çakıştırılıyor. Oluşan dikdörtgenin kenarları aralarında asal.</p><p class="ask">Çevresi <u>en az</u> kaçtır?</p>`,
    opts: ['126', '130', '246', '250'], ans: 0,
    hints: [`Ortak kısa kenar s, EBOB(72, 50) = 2'yi böler.`],
    steps: [`s = 2 → 2 × 61 ✓ → 126. s = 1 → 1 × 122 → 246`, `En az <b>126</b>`],
    answer: `Cevap: <b>A</b>`
  },
  {
    no: 70, konu: AA,
    q: `<p>I. kutuda 3, 5, 3, 2 yazılı 4 asal sayılı top; II. kutuda görünmeyen 3 asal sayılı top var. Kutulardan birer top yer değiştiriyor; I. kutunun çarpımı K, II.'ninki L ve K ile L aralarında asal.</p><p class="ask">K + L <u>en az</u> kaçtır?</p>`,
    opts: ['143', '161', '179', '225'], ans: 0,
    hints: [`I. kutuda iki tane 3 var; 3 verilemez.`],
    steps: [`2 verilip 3 alınırsa K = 3 · 5 · 3 · 3 = 135; II.: 2 ve iki tane 2 → L = 8 → 143`, `5 verilirse en iyi K = 36, L = 5 · 5 · 5 = 125 → 161`, `En az <b>143</b>`],
    answer: `Cevap: <b>A</b>`
  },
  {
    no: 71, konu: AA,
    q: `<p>3 × 3 tabloda köşeler ve merkez sarı, diğerleri mor. Mor karelere, komşu sarı karelerdeki sayılarla aralarında asal ve iki asal çarpanlı en küçük doğal sayı yazılacak.</p>`
      + izgara3([[['y', '24'], ['r', 'M'], ['y', '35']], [['r', 'M'], ['y', '40'], ['r', 'M']], [['y', '63'], ['r', 'M'], ['y', '22']]]) + `<p class="ask">Mor karelere yazılan sayıların toplamı kaçtır?</p>`,
    opts: ['486', '516', '546', '576'], ans: 2,
    hints: [`Her mor karenin üç sarı komşusu var (biri merkez).`],
    steps: [`Üst (24, 35, 40): 11 · 13 = 143 · Sol (24, 40, 63): 143`, `Sağ (35, 40, 22): 3 · 13 = 39 · Alt (63, 40, 22): 13 · 17 = 221`, `Toplam <b>546</b>`],
    answer: `Cevap: <b>C</b>`
  },
  {
    no: 72, konu: AA,
    q: `<p>3 × 3 tabloda köşeler sarı, kenar ortaları mavi, merkez kırmızı. Mavi karelere iki sarı komşusuyla aralarında asal ve iki asal çarpanlı en küçük sayı, kırmızıya mavilerin toplamı yazılacak.</p>`
      + izgara3([[['y', '18'], ['b', 'M'], ['y', '55']], [['b', 'M'], ['r', 'K'], ['b', 'M']], [['y', '14'], ['b', 'M'], ['y', '39']]]) + `<p class="ask">Kırmızı kareye hangi sayı yazılır?</p>`,
    opts: ['170', '185', '200', '215'], ans: 3,
    hints: [`Komşu sayıların asal çarpanlarını kullanma.`],
    steps: [`Üst (18, 55): 7 · 13 = 91 · Sol (18, 14): 5 · 11 = 55`, `Sağ (55, 39): 2 · 7 = 14 · Alt (14, 39): 5 · 11 = 55`, `Toplam <b>215</b>`],
    answer: `Cevap: <b>D</b>`
  },
  {
    no: 73, konu: AA,
    q: `<p>Klasörlerin etiket numaraları 51'den 90'a kadar. İki öğrenci, numaraları iki asal çarpanlı ve aralarında asal olan birer klasör alıyor.</p><p class="ask">Numaralar farkı <u>en çok</u> kaçtır?</p>`,
    opts: ['33', '35', '37', '39'], ans: 2,
    hints: [`En küçük iki asal çarpanlı sayı 51 = 3 · 17.`],
    steps: [`51 ile 88 = 2³ · 11 aralarında asal ✓ → 37`, `Daha büyük fark veren uygun çift yok → <b>37</b>`],
    answer: `Cevap: <b>C</b>`
  },
  {
    no: 74, konu: AA,
    q: `<p>Boyları 30 ve 40 cm olan iki yaya cisim asılıyor; uzama miktarları aralarında asal doğal sayılar. I. yay 52 cm oluyor.</p><p class="ask">II. yayın son boyu hangisi olabilir?</p>`,
    opts: ['62', '65', '66', '68'], ans: 1,
    hints: [`I. yay 22 cm uzamış.`],
    steps: [`II. yayın uzaması: 22, 25, 26, 28`, `Yalnızca 25, 22 ile aralarında asal → <b>65</b>`],
    answer: `Cevap: <b>B</b>`
  },
  {
    no: 75, konu: AA,
    q: `<p>Bir videonun 12 dk 35 sn'si izlenmiş, 05.25 kalmış.</p><p class="ask">Kalan süre hangisi olduğunda izlenen sürenin dakika ve saniye değerleri aralarında asal olur?</p>`,
    opts: ['05.50', '06.24', '08.30', '03.36'], ans: 1,
    hints: [`Toplam süre 18.00.`],
    steps: [`İzlenen: 12.10 ✗ · <b>11.36</b> ✓ · 09.30 ✗ · 14.24 ✗`],
    answer: `Cevap: <b>B</b>`
  },
  {
    no: 76, konu: AA,
    q: `<p>Bir kilit, ilk iki ve son iki rakamın oluşturduğu sayılar aralarında asalsa açılıyor. Yiğit son iki haneye, ilk iki hanedeki sayının asal çarpanlarını küçükten büyüğe yazıyor ve kilit açılıyor. İlk haneye 2 yazmış.</p><p class="ask">İkinci haneye hangisini yazmış olabilir?</p>`,
    opts: ['0', '4', '5', '6'], ans: 1,
    hints: [`2X'in tam iki tane tek basamaklı asal çarpanı olmalı.`],
    steps: [`20 → 25: EBOB 5 ✗ · 24 = 2³ · 3 → 23: EBOB 1 ✓`, `25 → tek asal çarpan ✗ · 26 = 2 · 13 → 13 iki basamaklı ✗ → <b>4</b>`],
    answer: `Cevap: <b>B</b>`
  },
  {
    no: 77, konu: AA,
    q: `<p>Ortadaki kare dört dış kareye, dış kareler de halka biçiminde komşularına bağlı. Karelere 5, 7, 11, 13, 15 farklı biçimde yazılıyor; bağlı iki karedeki sayılar aralarında asal.</p><p class="ask">Ortadaki kareye yazılabilecek sayıların toplamı kaçtır?</p>`,
    opts: ['24', '27', '29', '31'], ans: 3,
    hints: [`Aralarında asal olmayan tek çift 5 ve 15.`],
    steps: [`Orta kare herkese bağlı → 5 veya 15 olamaz`, `7 + 11 + 13 = <b>31</b> (5 ve 15 halkada karşılıklı)`],
    answer: `Cevap: <b>D</b>`
  },
  {
    no: 78, konu: AA,
    q: `<p>4A ve B9 iki basamaklı sayılar. 4 ile A aralarında asal, B ile 9 aralarında asal ve 4A < B9.</p><p class="ask">Kaç farklı A + B değeri vardır?</p>`,
    opts: ['9', '11', '13', '15'], ans: 2,
    hints: [`A ∈ {1, 3, 5, 7, 9}; B ∈ {4, 5, 7, 8} (B9 > 4A).`],
    steps: [`B = 4 iken A ≤ 7; B = 5, 7, 8 iken A her tek rakam`, `Toplamlar 5'ten 17'ye kadar her değeri alır → <b>13</b>`],
    answer: `Cevap: <b>C</b>`
  }
  );
})();
