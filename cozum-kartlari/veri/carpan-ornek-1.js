// MEB LGS örnek soruları (Çarpanlar ve Katlar). Sorular carpan-ornek-1.js … 4.js dosyalarında window.CK_ORNEK dizisine eklenir.
window.CK_ORNEK = window.CK_ORNEK || [];
window.CK_KONU = { CA: 'Bir doğal sayının çarpanları', EB: 'EBOB ve EKOK', AA: 'Aralarında asal sayılar' };
// Sorular 1–20
(function () {
  const { CA, EB, AA } = CK_KONU;
  const ST = 'stroke="var(--fig-stroke)"';
  const rect = (x, y, w, h, fill, extra = '') => `<rect x="${x}" y="${y}" width="${w}" height="${h}" fill="${fill}" ${ST} stroke-width="1.5" ${extra}/>`;
  const txt = (x, y, t, extra = '') => `<text x="${x}" y="${y}" text-anchor="middle" font-size="14" ${extra}>${t}</text>`;

  const kare1 = svg(220, 200, rect(20, 10, 40, 180, 'var(--card)') + rect(60, 10, 140, 40, 'var(--card)') + rect(60, 50, 140, 140, 'var(--card)')
    + txt(40, 105, 'A') + txt(130, 35, 'B') + txt(130, 125, 'C'), 'Kare kâğıt: solda dikey A şeridi, sağ üstte B şeridi, sağ altta C karesi');

  const sekil2 = svg(360, 150, rect(20, 10, 100, 40, 'var(--fig-blue)') + rect(30, 50, 40, 90, 'var(--fig-blue)') + rect(70, 50, 40, 90, 'var(--fig-blue)')
    + rect(220, 10, 90, 40, 'var(--fig-blue)') + rect(200, 50, 44, 90, 'var(--fig-blue)') + rect(244, 50, 44, 90, 'var(--fig-blue)') + rect(288, 50, 44, 90, 'var(--fig-blue)'),
    'Birinci şekilde yatay dikdörtgen iki dikey dikdörtgenden geniş; ikincide üç dikey dikdörtgenden dar');

  const bulmaca6 = `<table class="grid"><tr><td class="r"></td><td></td><td></td><td class="x">42</td></tr><tr><td></td><td></td><td></td><td class="x">24</td></tr><tr><td></td><td></td><td class="r"></td><td class="x">b</td></tr><tr><td class="x">a</td><td class="x">24</td><td class="x">14</td><td class="x"></td></tr></table>`;

  const takvim9 = tablo([['Pzt', 'Sal', 'Çar', 'Per', 'Cum', 'Cmt', 'Paz'], ['', '1', '2', '3', '4', '5', '6'], ['7', '8', '9', '10', '11', '12', '13'], ['14', '15', '16', '17', '18', '19', '20'], ['21', '22', '23', '24', '25', '26', '27'], ['28', '29', '30', '', '', '', '']]);

  const kartonlar13 = svg(440, 80, (() => {
    let g = rect(20, 30, 180, 20, 'var(--fig-yellow)') + rect(240, 30, 180, 20, 'var(--fig-blue)');
    for (let i = 1; i < 6; i++) g += `<line x1="${20 + i * 30}" y1="30" x2="${20 + i * 30}" y2="50" ${ST} stroke-dasharray="3 2"/>`;
    for (let i = 1; i < 4; i++) g += `<line x1="${240 + i * 45}" y1="30" x2="${240 + i * 45}" y2="50" ${ST} stroke-dasharray="3 2"/>`;
    return g + txt(110, 22, 'Sarı: 6 cm\'lik parçalar', 'font-size="12"') + txt(330, 22, 'Mavi: 10 cm\'lik parçalar', 'font-size="12"') + txt(110, 70, 'eni 2 cm', 'font-size="11"') + txt(330, 70, 'eni 2 cm', 'font-size="11"');
  })(), 'Özdeş sarı ve mavi kartonlar; sarı 6 cm, mavi 10 cm uzunluğunda parçalara kesiliyor');

  const yol15 = svg(460, 70, (() => {
    const x = km => 20 + km * 0.52;
    let g = `<line x1="${x(0)}" y1="35" x2="${x(810)}" y2="35" ${ST} stroke-width="2"/>`;
    [[0, 'K'], [150, 'L'], [420, 'M'], [670, 'N'], [810, 'P']].forEach(([k, t]) => g += `<circle cx="${x(k)}" cy="35" r="4" fill="var(--fig-stroke)"/>` + txt(x(k), 25, t));
    [[75, '150 km'], [285, '270 km'], [545, '250 km'], [740, '140 km']].forEach(([k, t]) => g += txt(x(k), 55, t, 'font-size="11"'));
    return g;
  })(), 'K–L 150 km, L–M 270 km, M–N 250 km, N–P 140 km');

  CK_ORNEK.push(
  {
    no: 1, konu: CA, sayfa: 1,
    q: `<p>Kare şeklindeki bir kâğıt, kenarlarının uzunlukları santimetre cinsinden birer doğal sayı olan üç bölgeye aşağıdaki gibi ayrılmıştır. Bu bölgelerden C bölgesi karesel, diğerleri ise dikdörtgensel bölgelerdir.</p><div class="fig">${kare1}</div>`
      + `<p class="ask">A bölgesinin alanı 36 cm<sup>2</sup> olduğuna göre, B bölgesinin alanının santimetrekare cinsinden değeri aşağıdakilerden hangisi <u>olamaz</u>?</p>`,
    opts: ['20', '27', '30', '35'], ans: 2,
    hints: [`Kâğıdın kenarı s, A'nın eni a: s · a = 36. C kare olduğundan B'nin yüksekliği de a.`],
    steps: [`B = (s − a) · a. s · a = 36 ve s > a: (36, 1), (18, 2), (12, 3), (9, 4)`, `B: 35 · 1 = 35, 16 · 2 = 32, 9 · 3 = 27, 5 · 4 = 20`, `<b>30</b> yok`],
    answer: `Cevap: <b>C</b>`
  },
  {
    no: 2, konu: CA, sayfa: 1,
    q: `<p>Kenarlarının uzunlukları santimetre cinsinden birer doğal sayı ve her birinin alanı 180 cm<sup>2</sup> olan eş dikdörtgenler, kenarları boyunca çakıştırıldığında aşağıdaki iki şekil elde edilmiştir.</p><div class="fig">${sekil2}</div>`
      + `<p>Birinci şekilde üstteki dikdörtgen, alttaki iki dikdörtgenden daha geniştir; ikinci şekilde ise alttaki üç dikdörtgenden daha dardır.</p><p class="ask">Verilenlere göre bu dikdörtgenlerden birinin çevresinin uzunluğu kaç santimetredir?</p>`,
    opts: ['52', '54', '56', '58'], ans: 3,
    hints: [`Kısa kenar k, uzun kenar u: 2k < u < 3k ve k · u = 180.`],
    steps: [`2k² < 180 < 3k² → 60 < k² < 90 → k = 8 veya 9`, `k = 8 → u = 22,5 (doğal değil). k = 9 → u = 20 ✓`, `Çevre: 2(9 + 20) = <b>58</b>`],
    answer: `Cevap: <b>D</b>`
  },
  {
    no: 3, konu: CA, sayfa: 2,
    q: `<p>Ahmet ile Deniz sırasıyla birer pozitif tam sayı söyledikleri bir oyun oynuyorlar. Oyuncunun söylediği sayı kadar puan kendisine, söylediği sayının kendisi hariç pozitif tam sayı bölenlerinin toplamı kadar puan rakibine yazılıyor. Toplam puanı fazla olan oyuncu oyunu kazanıyor.</p>`
      + `<p>Örneğin Ahmet 10, Deniz 12 derse: Ahmet 10 + (1 + 2 + 3 + 4 + 6) = 26, Deniz (1 + 2 + 5) + 12 = 20 puan alır ve Ahmet kazanır.</p>`
      + `<p class="ask">Buna göre Ahmet'in 14 sayısını söylediği oyunda, Deniz aşağıdaki sayılardan hangisini söylerse oyunu kazanır?</p>`,
    opts: ['18', '20', '25', '36'], ans: 2,
    hints: [`Ahmet 14 → Ahmet 14, Deniz 1 + 2 + 7 = 10 puan alır.`],
    steps: [`18: Deniz 28, Ahmet 14 + 21 = 35 ✗ · 20: Deniz 30, Ahmet 14 + 22 = 36 ✗`, `25: Deniz 35, Ahmet 14 + 6 = 20 ✓ · 36: Deniz 46, Ahmet 14 + 55 = 69 ✗`],
    answer: `Cevap: <b>C</b>`
  },
  {
    no: 4, konu: CA, sayfa: 2,
    q: `<p>Kenar uzunlukları santimetre cinsinden birer doğal sayı ve her bir kenar uzunluğu 60 cm'den kısa olan dikdörtgen şeklinde bir karton vardır. Bu kartonun kenarlarından birinin uzunluğunun farklı asal çarpanlarının toplamı 10, diğer kenarının uzunluğunun farklı asal çarpanlarının toplamı 15'tir.</p>`
      + `<p class="ask">Buna göre bu kartonun çevresinin uzunluğu <u>en fazla</u> kaç santimetredir?</p>`,
    opts: ['112', '146', '164', '188'], ans: 2,
    hints: [`Toplamı 10 olan farklı asallar: {3, 7} veya {2, 3, 5}. Toplamı 15: {2, 13} veya {3, 5, 7}.`],
    steps: [`Toplam 10: 21 (3 · 7) veya 30 (2 · 3 · 5); 60'tan küçük en büyüğü 30`, `Toplam 15: 2 · 13 = 26, 52; 3 · 5 · 7 = 105 çok büyük → en büyüğü 52`, `Çevre: 2(30 + 52) = <b>164</b>`],
    answer: `Cevap: <b>C</b>`
  },
  {
    no: 5, konu: CA, sayfa: 3,
    q: `<p>Bir beyaz kart ve birer yüzlerinde 2, 3, 5 ve 7 asal sayılarının yazılı olduğu asal çarpan kartlarından yeterli sayıda vardır.</p>`
      + `<p>Bir kartona 2'den başlayarak doğal sayılar sırasıyla yazılıyor. Her sayının altına asal çarpanları kartlarda varsa bu kartlar (örneğin 4 için iki tane 2), yoksa bir adet beyaz kart yerleştiriliyor (örneğin 11 için).</p>`
      + tablo([['Sayı', '2', '3', '4', '…', '11', '…'], ['Kartlar', '2', '3', '2, 2', '…', 'Beyaz', '…']])
      + `<p class="ask">Bu kartona yerleştirilen beyaz kart sayısı 3 olduğuna göre, <u>en fazla</u> kaç adet asal çarpan kartı yerleştirilmiştir?</p>`,
    opts: ['26', '29', '34', '38'], ans: 1,
    hints: [`Beyaz kartlar 11, 13 ve 17 için. 19 yazılırsa 4. beyaz gelir → en fazla 18'e kadar.`],
    steps: [
      `2'den 18'e (11, 13, 17 hariç) asal çarpan kartları: 2:1, 3:1, 4:2, 5:1, 6:2, 7:1, 8:3, 9:2, 10:2`,
      `12:3, 14:2, 15:2, 16:4, 18:3`,
      `Toplam: <b>29</b>`
    ],
    answer: `Cevap: <b>B</b>`
  },
  {
    no: 6, konu: CA, sayfa: 3,
    q: `<p>Aşağıdaki sayı bulmacasında boyalı olmayan karelere 1'den 7'ye kadar (1 ve 7 dâhil) olan doğal sayıların tümü yazılacaktır. Karelerin dışında verilen sayılar bulunduğu satırdaki ya da sütundaki sayıların çarpımıdır.</p>${bulmaca6}`
      + `<p class="ask">Buna göre a + b kaçtır?</p>`,
    opts: ['9', '15', '20', '40'], ans: 2,
    hints: [`İlk satır 42 = 6 · 7, üçüncü sütun 14 = 7 · 2. Ortak kare hangisi?`],
    steps: [
      `1. satır (2 kare) 42 → 6 ve 7. 3. sütun (2 kare) 14 → 7 ve 2 → ortak kare 7; 1. satır: 6, 7; 3. sütun altında 2`,
      `2. satır: x · y · 2 = 24 → x · y = 12 → 3 ve 4. 2. sütun: 6 · y · z = 24 → y · z = 4 → y = 4, z = 1 → x = 3`,
      `Kalan sayı 5 → sol alt kare. a = 3 · 5 = 15, b = 5 · 1 = 5 → a + b = <b>20</b>`
    ],
    answer: `Cevap: <b>C</b>`
  },
  {
    no: 7, konu: CA, sayfa: 4,
    q: `<p>Birer yüzlerinde farklı doğal sayıların yazılı olduğu 9 kart vardır: 19, 81, 105, 96, 24, 18, 128, 30 ve ters çevrilmiş bir kart.</p>`
      + `<p>Mehmet bu kartlardan sadece 1 tane asal çarpanı olanları siyah kutuya, 2 tane asal çarpanı olanları mavi kutuya, 3 tane asal çarpanı olanları ise kırmızı kutuya atmıştır. Son durumda başlangıçta boş olan bu kutuların her birinde eşit sayıda kart bulunmaktadır.</p>`
      + `<p class="ask">Buna göre ters çevrilen kartta yazan doğal sayı aşağıdakilerden hangisi olabilir?</p>`,
    opts: ['90', '121', '144', '196'], ans: 0,
    hints: [`Her kartın farklı asal çarpanlarını say.`],
    steps: [`1 asal çarpan: 19, 81, 128 → 3 · 2 asal çarpan: 96, 24, 18 → 3 · 3 asal çarpan: 105, 30 → 2`, `Ters kart 3 asal çarpanlı olmalı: 90 = 2 · 3² · 5 ✓`, `121 → 1, 144 → 2, 196 → 2`],
    answer: `Cevap: <b>A</b>`
  },
  {
    no: 8, konu: CA, sayfa: 4,
    q: `<p>50 katlı bir iş yerinde, 2'den 10'a kadar numaralandırılmış 9 tane asansör vardır. Bu asansörlerin her biri zemin kat hariç, kat numarası asansör numarasının pozitif tam sayı katı olan katlarda durmamaktadır. Örneğin 9 numaralı asansör 9, 18, 27, 36 ve 45. katlarda durmamaktadır.</p>`
      + `<p>Onur ve Erdem bu iş yerinin farklı katlarında çalışmaktadırlar. Onur'un çalıştığı katta duran asansör sayısı, Erdem'in çalıştığı katta duran asansör sayısından daha fazladır.</p>`
      + `<p class="ask">Erdem'in çalıştığı katın kat numarası 30 olduğuna göre Onur'un çalıştığı katın kat numarası aşağıdakilerden hangisi olabilir?</p>`,
    opts: ['48', '42', '36', '24'], ans: 1,
    hints: [`Bir katta duran asansör sayısı = 9 − (kat numarasının 2–10 arasındaki bölen sayısı).`],
    steps: [`30: bölenler 2, 3, 5, 6, 10 → 4 asansör durur`, `48: 2, 3, 4, 6, 8 → 4 · 42: 2, 3, 6, 7 → <b>5</b> · 36: 2, 3, 4, 6, 9 → 4 · 24: 2, 3, 4, 6, 8 → 4`, `Daha fazla: <b>42</b>`],
    answer: `Cevap: <b>B</b>`
  },
  {
    no: 9, konu: CA, sayfa: 5,
    q: `<p>Canan Öğretmen, eylül ayı boyunca tüm derslerini hafta içi yapmıştır. Aşağıda 2020 eylül ayına ait takvim yaprağı verilmiştir.</p>${takvim9}`
      + `<p>Canan Öğretmenin bir günde yaptığı ders sayısı o günün tarihine karşılık gelen doğal sayının asal çarpan sayısına eşittir.</p><p class="ask">Buna göre Canan Öğretmen eylül ayı boyunca toplam kaç ders yapmıştır?</p>`,
    opts: ['29', '30', '31', '32'], ans: 2,
    hints: [`Hafta içi günler: 1–4, 7–11, 14–18, 21–25, 28–30. 1'in asal çarpanı yok.`],
    steps: [`1–4: 0 + 1 + 1 + 1 = 3 · 7–11: 1 + 1 + 1 + 2 + 1 = 6`, `14–18: 2 + 2 + 1 + 1 + 2 = 8 · 21–25: 2 + 2 + 1 + 2 + 1 = 8`, `28–30: 2 + 1 + 3 = 6 → toplam <b>31</b>`],
    answer: `Cevap: <b>C</b>`,
    trap: `Asal çarpanları tekrarlı saymak (8 için 3 ders gibi). Asal çarpan sayısı farklı asalların sayısıdır.`
  },
  {
    no: 10, konu: CA, sayfa: 5,
    q: `<p>Bir şekerleme fabrikasında şeker, çikolata ve lokum üretilmektedir. Rastgele seçilen beş şekerleme bir pakete konuyor. Paketin etiket numarası içindeki şekerlemelerin ürün kodlarının çarpımı, satış fiyatı ise birim fiyatlarının toplamıdır.</p>`
      + tablo([['Çeşit', 'Şeker', 'Çikolata', 'Lokum'], ['Ürün kodu', '2', '3', '5'], ['Birim fiyatı (TL)', '1', '3', '2']])
      + `<p>Örneğin ikişer şeker ve çikolata, bir lokum bulunan paketin etiket numarası 2 · 2 · 3 · 3 · 5 = 180, satış fiyatı 1 + 1 + 3 + 3 + 2 = 10 TL'dir.</p>`
      + `<p class="ask">Buna göre etiket numaraları 270 ve 300 olan iki paketin satış fiyatlarının toplamı kaç TL'dir?</p>`,
    opts: ['21', '22', '23', '24'], ans: 0,
    hints: [`Etiket numarasını asal çarpanlarına ayır.`],
    steps: [`270 = 2 · 3³ · 5 → 1 şeker, 3 çikolata, 1 lokum → 1 + 9 + 2 = 12 TL`, `300 = 2² · 3 · 5² → 2 şeker, 1 çikolata, 2 lokum → 2 + 3 + 4 = 9 TL`, `Toplam <b>21</b> TL`],
    answer: `Cevap: <b>A</b>`
  },
  {
    no: 11, konu: EB, sayfa: 6,
    q: `<p>Bir marketteki 35 adet çikolatanın tamamı, her birinde eşit sayıda çikolata olacak şekilde kırmızı paketlere; 54 adet şekerin tamamı ise her birinde eşit sayıda şeker olacak şekilde mavi paketlere yerleştirilmiştir. Bu şekilde toplam 16 paket elde edilmiştir. Mavi ve kırmızı paketlerden satın alan Kuzey'in aldığı paketlerdeki toplam çikolata sayısı, toplam şeker sayısına eşittir.</p>`
      + `<p class="ask">Buna göre, Kuzey kaç paket şeker almıştır?</p>`,
    opts: ['1', '2', '4', '5'], ans: 3,
    hints: [`Kırmızı paket sayısı 35'in, mavi paket sayısı 54'ün bir böleni; toplam 16.`],
    steps: [`Kırmızı paket sayıları: 1, 5, 7, 35. Mavi: 1, 2, 3, 6, 9, 18, 27, 54. Toplamı 16: 7 + 9`, `Kırmızı pakette 5 çikolata, mavi pakette 6 şeker`, `5r = 6m → en küçük r = 6, m = 5 (r ≤ 7, m ≤ 9) → <b>5</b> paket şeker`],
    answer: `Cevap: <b>D</b>`
  },
  {
    no: 12, konu: EB, sayfa: 6,
    q: `<p>İçinde 80 kalem bulunan A kutusundaki kalemlerin % 15'i kırmızı, 60 kalem bulunan B kutusundaki kalemlerin ise % 30'u kırmızıdır. A kutusu 150 TL, B kutusu 170 TL'dir.</p>`
      + `<p>Bu kutulardan sadece A kutusundan veya sadece B kutusundan hangisi tercih edilirse edilsin, mevcudu 550'den fazla olan bir okuldaki her bir öğrenciye 1 adet kırmızı kalem verilebilmekte ve geriye kırmızı kalem artmamaktadır.</p>`
      + `<p class="ask">Buna göre, tercih edilen kutu için ödenen toplam tutar <u>en az</u> kaç Türk lirasıdır?</p>`,
    opts: ['4800', '5440', '7200', '8160'], ans: 1,
    hints: [`A'da 12, B'de 18 kırmızı kalem var. Öğrenci sayısı hem 12'nin hem 18'in katı.`],
    steps: [`EKOK(12, 18) = 36 → 550'den büyük en küçük kat 576`, `A: 576 / 12 = 48 kutu → 7200 TL. B: 576 / 18 = 32 kutu → 5440 TL`, `En az <b>5440</b> TL`],
    answer: `Cevap: <b>B</b>`
  },
  {
    no: 13, konu: EB, sayfa: 7,
    q: `<p>Renkleri dışında özdeş, dikdörtgen şeklinde sarı ve mavi kartonlar vardır. Sarı kartonun tamamı bir kenarı 6 cm, mavi kartonun tamamı bir kenarı 10 cm olan dikdörtgenlere şekildeki gibi kesilerek ayrıldığında her iki kartondan da parça artmamıştır.</p><div class="fig">${kartonlar13}</div>`
      + `<p class="ask">Elde edilen sarı dikdörtgen sayısı ile mavi dikdörtgen sayısı arasındaki fark 10'dan az olduğuna göre, kartonlardan birinin uzun kenarının uzunluğu <u>en fazla</u> kaç santimetredir?</p>`,
    opts: ['120', '240', '360', '480'], ans: 0,
    hints: [`Uzunluk L hem 6'nın hem 10'un katı: 30'un katı.`],
    steps: [`Fark: L/6 − L/10 = L/15 < 10 → L < 150`, `150'den küçük en büyük 30 katı: <b>120</b>`],
    answer: `Cevap: <b>A</b>`
  },
  {
    no: 14, konu: EB, sayfa: 7,
    q: `<p>Bir manavda bulunan 275 adet kırmızı ve 135 adet yeşil elma paketlenecektir. Önce kırmızı elmaların bir kısmı; 5'erli paketlenen elmaların sayısı, 8'erli paketlenen elmaların sayısına eşit olacak biçimde paketlenmiştir. Kalan elmaların tamamı ise her bir pakette tek renk ve eşit sayıda elma olacak biçimde paketlere konulacaktır.</p>`
      + `<p class="ask">Buna göre, yeşil elmaların konulduğu paketlerin sayısı <u>en az</u> kaçtır?</p>`,
    opts: ['45', '27', '9', '5'], ans: 2,
    hints: [`5'erli ve 8'erli paketlenen elmalar eşit → her biri 40'ın katı → toplam 80m.`],
    steps: [`Kalan kırmızı: 275 − 80m (m ≥ 1): 195, 115, 35`, `Paket boyu EBOB(kalan, 135): EBOB(195, 135) = 15, EBOB(115, 135) = 5, EBOB(35, 135) = 5`, `En büyük paket 15 → yeşil paket 135 / 15 = <b>9</b>`],
    answer: `Cevap: <b>C</b>`
  },
  {
    no: 15, konu: EB, sayfa: 8,
    q: `<div class="fig">${yol15}</div><p>K şehrinden P şehrine doğru hareket eden iki otobüsten biri her 100 km'de bir, diğeri ise her 120 km'de bir mola vermektedir. Bir süre sonra her iki otobüs de bu yol üzerinde bulunan aynı dinlenme tesisinde mola vermiştir.</p>`
      + `<p class="ask">Buna göre, bu dinlenme tesisi hangi iki şehir arasındadır?</p>`,
    opts: ['M ve N', 'L ve M', 'N ve P', 'K ve L'], ans: 0,
    hints: [`Ortak mola noktası EKOK(100, 120)'nin katı.`],
    steps: [`EKOK = 600 km`, `Şehirlerin K'ye uzaklığı: L 150, M 420, N 670, P 810`, `600 km, M ile N arasında`],
    answer: `Cevap: <b>A</b>`
  },
  {
    no: 16, konu: EB, sayfa: 8,
    q: tablo([['Film', 'Süre (dk)', 'Başlama saati'], ['A', '70', '09.40'], ['B', '90', '09.20']])
      + `<p>Her filmin bitiminden sonra 10 dakika ara verilmekte ve verilen aradan sonra aynı salonda aynı filmin gösterimi tekrar başlamaktadır. Bu sinema salonuna saat 16.00'da gelen Sedat A, Fatma ise B filmini izlemek istiyor.</p>`
      + `<p class="ask">Sedat ve Fatma her iki filmin başlama saatleri aynı olduğunda salonlara girmek istediklerine göre <u>en az</u> kaç dakika beklemeleri gerekir?</p>`,
    opts: ['160', '110', '100', '80'], ans: 2,
    hints: [`A her 80 dk'da, B her 100 dk'da bir başlıyor.`],
    steps: [`09.20'den itibaren: A 20, 100, 180, … dk'da; B 0, 100, 200, … dk'da başlar`, `İlk ortak başlangıç 100. dk (11.00); sonra her EKOK(80, 100) = 400 dk'da → 17.40`, `16.00'dan 17.40'a <b>100</b> dk`],
    answer: `Cevap: <b>C</b>`
  },
  {
    no: 17, konu: EB, sayfa: 9,
    q: `<p>Bir metro istasyonuna A yönünden 6 dakikada bir, B yönünden ise 8 dakikada bir metro gelmektedir. Metrolar saat 8.40'ta aynı anda bu istasyona gelmişlerdir. Beren bu istasyona geldiğinde A ve B yönünden gelecek metroların istasyona ulaşmalarına 5'er dakika kaldığını görüyor.</p>`
      + `<p class="ask">Buna göre Beren'in bu istasyona geldiği saat aşağıdakilerden hangisi olabilir?</p>`,
    opts: ['15.35', '16.45', '18.35', '19.45'], ans: 2,
    hints: [`Metrolar her EKOK(6, 8) = 24 dakikada birlikte gelir.`],
    steps: [`Ortak geliş: 8.40 + 24k. Beren 5 dk önce: 8.35 + 24k`, `18.35 − 8.35 = 600 dk = 24 · 25 ✓`, `Diğerleri: 420, 490, 670 dk → 24'e bölünmez`],
    answer: `Cevap: <b>C</b>`
  },
  {
    no: 18, konu: EB, sayfa: 9,
    q: `<p>Başak ve Pınar 1 kg fiyatları TL cinsinden birer doğal sayı olan A ve B ürünlerini satın almışlardır. Başak A ürünü için 120 TL, B ürünü için 70 TL; Pınar ise A ürünü için 165 TL ve B ürünü için belirli bir miktar ödeme yapmıştır. Başak ve Pınar'ın aldıkları ürünlerin toplam kütleleri birbirine eşittir.</p>`
      + `<p class="ask">Başak ve Pınar'ın aldıkları ürünlerin kütleleri toplamı 30 kg'dan az olduğuna göre Pınar, B ürünü için kaç Türk lirası ödemiştir?</p>`,
    opts: ['14', '28', '35', '42'], ans: 1,
    hints: [`A'nın kg fiyatı 120 ile 165'in ortak böleni olmalı.`],
    steps: [
      `A'nın fiyatı 15'i böler. 15 TL → Başak 8 kg, Pınar 11 kg A almış (5 TL veya daha az olursa kütle 30'u geçer)`,
      `Her biri 15 kg'dan az: 8 + 70/b < 15 → b > 10; b, 70'i böler → 14, 35, 70`,
      `Eşitlik: 8 + 70/b = 11 + x/b → x = 70 − 3b > 0 → b = 14 → x = <b>28</b> TL (ikisi de 13 kg)`
    ],
    answer: `Cevap: <b>B</b>`
  },
  {
    no: 19, konu: EB, sayfa: 10,
    q: `<p>Ahmet ve Mustafa ürettikleri 150 litre bal ile 90 litre pekmezi her birinde eşit miktarda bal ve pekmez olacak biçimde paylaşmışlardır. Mustafa, <u>en az</u> sayıda kap kullanarak, kendine ait bal ve pekmezi birbirine karıştırmadan ölçüsü litre cinsinden doğal sayı olan eşit hacimdeki kaplara tamamen dolduruyor. Ahmet ise kendine ait bal ve pekmezi karıştırmadan ölçüsü litre cinsinden doğal sayı olan eşit hacimdeki kaplara tamamen dolduruyor. Bu iş için Ahmet ve Mustafa'nın kullandığı toplam kap sayısı 32'dir.</p>`
      + `<p class="ask">Buna göre, Ahmet kaç litrelik kaplar kullanmıştır?</p>`,
    opts: ['3', '5', '9', '15'], ans: 1,
    hints: [`Her biri 75 L bal, 45 L pekmez alır.`],
    steps: [`Mustafa: EBOB(75, 45) = 15 L → 5 + 3 = 8 kap`, `Ahmet: 32 − 8 = 24 kap → 120 / d = 24 → d = <b>5</b> L`],
    answer: `Cevap: <b>B</b>`
  },
  {
    no: 20, konu: EB, sayfa: 10,
    q: `<p>Uzunluğu 22 cm ve 16 cm olan oyun çubuklarından ve uzunluğu 8 cm olan bağlantı parçasından yeterli sayıda vardır. Gamze 22 cm'lik, Melis ise 16 cm'lik oyun çubuklarını, her birinin 3'er cm'lik kısımları bağlantı parçasının içinde kalacak biçimde uç uca birleştirmişlerdir. Her iki zincir de bir bağlantı parçasıyla başlayıp bir bağlantı parçasıyla bitmektedir.</p>`
      + `<p class="ask">Gamze'nin elde ettiği uzunluk, Melis'in elde ettiği uzunluğa eşit ve 1 metreden fazladır. Buna göre, Gamze ve Melis'in kullandığı toplam bağlantı parçasının sayısı <u>en az</u> kaçtır?</p>`,
    opts: ['16', '12', '9', '7'], ans: 0,
    hints: [`n çubuk için n + 1 bağlantı. Görünen çubuk: 22 − 6 = 16 ve 16 − 6 = 10.`],
    steps: [`Gamze: 8(n + 1) + 16n = 24n + 8. Melis: 8(m + 1) + 10m = 18m + 8`, `24n = 18m → n = 3t, m = 4t; uzunluk 72t + 8 > 100 → t = 2`, `n = 6, m = 8 → bağlantı 7 + 9 = <b>16</b>`],
    answer: `Cevap: <b>A</b>`
  }
  );
})();
