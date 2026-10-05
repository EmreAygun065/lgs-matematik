// LGS çıkmış sorulara benzer, yeni yazılmış sorular (Üslü İfadeler). Her soru aynı numaralı çıkmış sorunun mantığını izler.
window.BENZER_CIKMIS = (function () {
  const yil = { 1: 2026, 2: 2026, 3: 2025, 4: 2025, 5: 2024, 6: 2024, 7: 2023, 8: 2023, 9: 2023, 10: 2023, 11: 2022, 12: 2022, 13: 2021, 14: 2021, 15: 2020, 16: 2020, 17: 2020, 18: 2019, 19: 2019, 20: 2018, 21: 2018 };

  const firildak = svg(300, 290, (() => {
    const k = 6, o = 30, R = (x, y, w, h) => `<rect x="${o + x * k}" y="${o + y * k}" width="${w * k}" height="${h * k}" fill="var(--fig-blue)" stroke="var(--fig-stroke)" stroke-width="1.5"/>`;
    return R(0, 0, 32, 8) + R(32, 0, 8, 32) + R(8, 32, 32, 8) + R(0, 8, 8, 32)
      + `<rect x="${o + 8 * k}" y="${o + 8 * k}" width="${24 * k}" height="${24 * k}" fill="var(--card)" stroke="var(--fig-stroke)" stroke-dasharray="5 4"/>`
      + `<text x="${o + 20 * k}" y="${o + 21 * k}" text-anchor="middle" font-size="15">boşluk</text>`
      + `<text x="${o + 16 * k}" y="${o - 8}" text-anchor="middle" font-size="14">2⁵ cm</text><text x="${o - 6}" y="${o + 4 * k + 5}" text-anchor="end" font-size="14">2³</text>`;
  })(), 'Dört özdeş dikdörtgen ortada kare boşluk bırakacak biçimde birleştirilmiş');

  const kare6 = svg(420, 360, (() => {
    const o = 20, S = 320, a = 80, h = 40;
    const R = (x, y, w, hh, c) => `<rect x="${o + x}" y="${o + y}" width="${w}" height="${hh}" fill="${c}" stroke="var(--fig-stroke)" stroke-width="1.2"/>`;
    let g = R(0, 0, a, a, 'var(--fig-red)') + R(a, 0, S - a, h, 'var(--fig-blue)') + R(a, h, S - a, h, 'var(--fig-red)');
    g += R(0, a, h, S - a, 'var(--fig-blue)') + R(h, a, h, S - a, 'var(--fig-red)');
    for (let i = 0; i < 6; i++) g += R(a, a + i * h, S - a, h, 'var(--fig-blue)');
    g += `<line x1="${o + S + 14}" y1="${o}" x2="${o + S + 14}" y2="${o + S}" stroke="var(--red)" stroke-width="1.5"/><text x="${o + S + 20}" y="${o + S / 2}" font-size="16">2⁶ cm</text>`;
    return g;
  })(), 'Kare kâğıt: 1 kırmızı kare ve 10 eş dikdörtgen, 2 dikdörtgen kırmızı');

  const S = [
  {
    no: 1,
    q: `<p>1 kg uranyumdan elde edilen enerji ile 2,5 · 10<sup>6</sup> kg kömürden elde edilen enerji birbirine eşittir. 10<sup>4</sup> kg kömürden elde edilen enerji ile 40 evin bir aylık enerji ihtiyacı karşılanmaktadır.</p>`
      + `<p class="ask">Buna göre 250 evin bir aylık enerji ihtiyacını karşılamak için kaç kilogram uranyum gerekir?</p>`,
    opts: ['2,5 · 10<sup>−2</sup>', '2,5 · 10<sup>−1</sup>', '4 · 10<sup>−2</sup>', '4 · 10<sup>1</sup>'], ans: 0,
    hints: [`Önce 250 ev için gereken kömürü bul.`],
    steps: [
      `250 ev: ${F(250, 40)} · 10<sup>4</sup> = 6,25 · 10<sup>4</sup> kg kömür`,
      `Uranyum: ${F('6,25 · 10<sup>4</sup>', '2,5 · 10<sup>6</sup>')} = 2,5 · 10<sup>−2</sup> kg`
    ],
    answer: `<b>2,5 · 10<sup>−2</sup> kg</b> uranyum. Cevap: <b>A</b>`,
    trap: `Bölmeyi ters yapıp 4 · 10<sup>1</sup> bulmak.`
  },
  {
    no: 2,
    q: `<p>Bir pankartın her satırına, kelimelerin ilk harfleri büyük olacak biçimde <b>“Haydi Türkiye”</b> ifadesi birer kez yazılmıştır. İçinde 2<sup>3</sup> mL mürekkep bulunan kalemle her büyük harf için 2<sup>−2</sup> mL, her küçük harf için 2<sup>−3</sup> mL mürekkep harcanmış ve 5. satır yazılırken mürekkep bitmiştir.</p>`
      + `<p class="ask">Buna göre aşağıdaki harflerden hangisinin yazımı tamamlandığında kalemdeki mürekkep bitmiştir?</p>`,
    opts: ['ü', 'i', 'T', 'H'], ans: 2,
    hints: [`Bir satırda kaç büyük, kaç küçük harf var? Her şeyi ${F(1, 8)} mL birimiyle düşün.`],
    steps: [
      `Büyük harf: H, T → 2 tane · Küçük harf: a, y, d, i, ü, r, k, i, y, e → 10 tane`,
      `Bir satır: 2 · ${F(2, 8)} + 10 · ${F(1, 8)} = ${F(14, 8)} mL. 4 satır: ${F(56, 8)} = 7 mL → kalan <b>1 mL = ${F(8, 8)}</b>`,
      `5. satır: H (${F(2, 8)}) → kalan ${F(6, 8)} · a, y, d, i (${F(4, 8)}) → kalan ${F(2, 8)} · T (${F(2, 8)}) → <b>0</b>`
    ],
    answer: `Mürekkep <b>T</b> harfinde biter. Cevap: <b>C</b>`,
    trap: `T'yi küçük harf gibi saymak; o zaman mürekkep “ü”de biter gibi görünür.`
  },
  {
    no: 3,
    q: `<p>Bir ayrıtının uzunluğu 2<sup>3</sup> cm olan 8 özdeş küp birleştirilerek büyük bir küp oluşturulmuştur.</p>`
      + `<p class="ask">Buna göre büyük küpün hacmi kaç santimetreküptür?</p>`,
    opts: ['2<sup>6</sup>', '2<sup>9</sup>', '2<sup>10</sup>', '2<sup>12</sup>'], ans: 3,
    hints: [`Bir küçük küpün hacmi (2<sup>3</sup>)<sup>3</sup>.`],
    steps: [
      `Küçük küp: (2<sup>3</sup>)<sup>3</sup> = 2<sup>9</sup> cm³`,
      `8 küp: 2<sup>3</sup> · 2<sup>9</sup> = <b>2<sup>12</sup></b> cm³`
    ],
    answer: `Hacim <b>2<sup>12</sup> cm³</b>. Cevap: <b>D</b>`,
    trap: `Tek bir küpün hacmini (2<sup>9</sup>) cevap sanmak.`
  },
  {
    no: 4,
    q: `<p>Deposunda 1024 litre su bulunan bir arazözün 16 hortumunun her birinden dakikada 2<sup>3</sup> litre su akmaktadır. Arazöz 3 dakika çalıştığında 24 m² alan yıkanmıştır.</p>`
      + `<p class="ask">Depoda kalan suyla aynı şekilde devam edilirse kaç m² alan daha yıkanabilir?</p>`,
    opts: ['2<sup>5</sup>', '3 · 2<sup>4</sup>', '2<sup>6</sup>', '5 · 2<sup>3</sup>'], ans: 3,
    hints: [`Dakikada toplam kaç litre su harcanıyor?`],
    steps: [
      `Dakikada 16 · 2<sup>3</sup> = 128 L → 3 dakikada 384 L → 24 m²`,
      `Kalan su: 1024 − 384 = 640 L → ${F(640, 384)} · 24 = <b>40 m²</b> = 5 · 2<sup>3</sup>`
    ],
    answer: `<b>5 · 2<sup>3</sup> = 40 m²</b>. Cevap: <b>D</b>`,
    trap: `Depodaki suyun tamamıyla (64 m²) hesaplamak.`
  },
  {
    no: 5,
    q: `<p>Kenar uzunlukları 2<sup>3</sup> cm ve 2<sup>5</sup> cm olan 4 özdeş dikdörtgen aşağıdaki gibi birleştirilerek ortasında kare biçiminde bir boşluk bulunan büyük bir kare oluşturulmuştur.</p>`
      + `<div class="fig">${firildak}</div>`
      + `<p class="ask">Buna göre ortadaki kare boşluğun çevresi kaç santimetredir?</p>`,
    opts: ['3 · 2<sup>5</sup>', '2<sup>7</sup>', '5 · 2<sup>5</sup>', '3 · 2<sup>6</sup>'], ans: 0,
    hints: [`Boşluğun kenarı, uzun kenarla kısa kenarın farkıdır.`],
    steps: [
      `Boşluğun kenarı: 2<sup>5</sup> − 2<sup>3</sup> = 32 − 8 = 24 = 3 · 2<sup>3</sup>`,
      `Çevre: 4 · 3 · 2<sup>3</sup> = 3 · 2<sup>5</sup> = <b>96 cm</b>`
    ],
    answer: `Çevre <b>3 · 2<sup>5</sup> cm</b>. Cevap: <b>A</b>`,
    trap: `Büyük karenin çevresini (4 · 40 = 5 · 2<sup>5</sup>) bulmak.`
  },
  {
    no: 6,
    q: `<p>Bir rüzgâr santralinin 25 yılda 15 · 10<sup>9</sup> kWh elektrik enerjisi üretmesi beklenmektedir.</p>`
      + `<p class="ask">Bu santralin 1 yılda üreteceği enerjinin <u>Wh</u> cinsinden bilimsel gösterimi hangisidir? (1 kWh = 10<sup>3</sup> Wh)</p>`,
    opts: ['6 · 10<sup>8</sup>', '6 · 10<sup>11</sup>', '60 · 10<sup>10</sup>', '6 · 10<sup>12</sup>'], ans: 1,
    hints: [`Önce yıllık üretimi kWh olarak bul.`],
    steps: [
      `1 yıl: ${F('15 · 10<sup>9</sup>', 25)} = 0,6 · 10<sup>9</sup> = 6 · 10<sup>8</sup> kWh`,
      `Wh: 6 · 10<sup>8</sup> · 10<sup>3</sup> = <b>6 · 10<sup>11</sup></b>`
    ],
    answer: `<b>6 · 10<sup>11</sup> Wh</b>. Cevap: <b>B</b>`,
    trap: `Birim çevirmeyi unutmak (A). 60 · 10<sup>10</sup> değer olarak doğru ama bilimsel gösterim değil.`
  },
  {
    no: 7,
    q: `<p>Sayı doğrusu −10 ile −5 arası kırmızı, −5 ile 0 arası mavi, 0 ile 5 arası yeşil, 5 ile 10 arası mor renkli parçalara ayrılmıştır.</p>`
      + `<p>−2<sup>2</sup>, (−3)<sup>0</sup>, (−2)<sup>−1</sup>, (−2)<sup>3</sup> ve 2<sup>3</sup> ifadeleri değerlerine karşılık gelen noktalara yerleştirilecektir.</p>`
      + `<p class="ask">Buna göre hangi renkteki parça üzerine <u>en fazla</u> sayıda ifade yerleştirilir?</p>`,
    opts: ['Kırmızı', 'Mavi', 'Yeşil', 'Mor'], ans: 1,
    hints: [`(−3)<sup>0</sup> ile −3<sup>0</sup> farklı. Negatif üs sayının tersini alır.`],
    steps: [
      `−2<sup>2</sup> = −4 (mavi) · (−3)<sup>0</sup> = 1 (yeşil) · (−2)<sup>−1</sup> = −${F(1, 2)} (mavi)`,
      `(−2)<sup>3</sup> = −8 (kırmızı) · 2<sup>3</sup> = 8 (mor) → mavi: <b>2 ifade</b>`
    ],
    answer: `Mavi parçaya 2 ifade gelir. Cevap: <b>B</b>`,
    trap: `−2<sup>2</sup>'yi 4 sanmak ya da (−2)<sup>−1</sup>'i pozitif yapmak.`
  },
  {
    no: 8,
    q: `<p>Dört bisikletin TL cinsinden fiyatları asal çarpanlarına ayrılmış olarak verilmiştir: K = a<sup>4</sup> · b<sup>2</sup>, L = a<sup>3</sup> · b<sup>3</sup>, M = a<sup>2</sup> · b<sup>4</sup>, N = a<sup>5</sup> · b. Burada a, b'den küçük bir asal sayıdır.</p>`
      + `<p class="ask">Bisikletlerden birinin fiyatı 2500 TL olduğuna göre en ucuz bisiklet hangisidir?</p>`,
    opts: ['K', 'L', 'M', 'N'], ans: 3,
    hints: [`2500'ü asal çarpanlarına ayır.`],
    steps: [
      `2500 = 2<sup>2</sup> · 5<sup>4</sup> → M bisikleti, a = 2, b = 5`,
      `K = 16 · 25 = 400 · L = 8 · 125 = 1000 · M = 2500 · N = 32 · 5 = <b>160</b>`
    ],
    answer: `En ucuz <b>N</b> (160 TL). Cevap: <b>D</b>`,
    trap: `a ile b'yi karıştırmak.`
  },
  {
    no: 9,
    q: `<p>Bir fabrikadaki 8 makinenin her biri 20 saniyede 2<sup>6</sup> adet vida üretmektedir. Bir vidanın kütlesi 2<sup>−3</sup> gramdır.</p>`
      + `<p class="ask">Bu makineler 40 dakikada toplam kaç gram vida üretir?</p>`,
    opts: ['15 · 2<sup>9</sup>', '15 · 2<sup>12</sup>', '15 · 2<sup>6</sup>', '30 · 2<sup>9</sup>'], ans: 0,
    hints: [`40 dakikada kaç tane 20 saniye var?`],
    steps: [
      `40 dk = 2400 sn = 120 tane 20 sn = 15 · 2<sup>3</sup>`,
      `Vida: 2<sup>3</sup> · 15 · 2<sup>3</sup> · 2<sup>6</sup> = 15 · 2<sup>12</sup> → kütle 15 · 2<sup>12</sup> · 2<sup>−3</sup> = <b>15 · 2<sup>9</sup> g</b>`
    ],
    answer: `<b>15 · 2<sup>9</sup> g</b>. Cevap: <b>A</b>`,
    trap: `Kütleyle çarpmayı unutmak (B).`
  },
  {
    no: 10,
    q: `<p>Bir manavda başlangıçta <u>eşit kütlelerde</u> elma, armut, ayva ve nar vardır. Satıştan sonra kalan kütleler (kg): elma 3250 · 10<sup>−3</sup>, armut 0,0412 · 10<sup>3</sup>, ayva 528000 · 10<sup>−4</sup>, nar 0,0049 · 10<sup>4</sup>.</p>`
      + `<p class="ask">Buna göre başlangıçta bu meyvelerden birinin kilogram cinsinden kütlesi aşağıdakilerden hangisi olabilir?</p>`,
    opts: ['0,0000531 · 10<sup>6</sup>', '4900 · 10<sup>−2</sup>', '0,52 · 10<sup>2</sup>', '5,12 · 10<sup>1</sup>'], ans: 0, long: true,
    hints: [`Kalanların en büyüğünü bul.`],
    steps: [
      `Kalanlar: elma 3,25 · armut 41,2 · ayva <b>52,8</b> · nar 49`,
      `Başlangıç ≥ 52,8. Şıklar: A) 53,1 ✓ · B) 49 · C) 52 · D) 51,2`
    ],
    answer: `53,1 kg olabilir. Cevap: <b>A</b>`,
    trap: `528000 · 10<sup>−4</sup>'ü 5,28 okumak.`
  },
  {
    no: 11,
    q: izgara([['49<sup>0</sup>', '16<sup>3</sup>', '9<sup>4</sup>'], ['2<sup>12</sup>', '3<sup>8</sup>', '1<sup>7</sup>'], ['7<sup>1</sup>', '125<sup>2</sup>', '5<sup>6</sup>']])
      + `<p>Yukarıdaki kutulardan birbirine denk ifadelerin bulunduğu kutular aynı renge boyanacaktır.</p>`
      + `<p class="ask">Buna göre <u>boyanmayan</u> kutudaki ifade hangisidir?</p>`,
    opts: ['16<sup>3</sup>', '49<sup>0</sup>', '7<sup>1</sup>', '5<sup>6</sup>'], ans: 2,
    hints: [`16 = 2<sup>4</sup>, 9 = 3<sup>2</sup>, 125 = 5<sup>3</sup>`],
    steps: [
      `49<sup>0</sup> = 1 = 1<sup>7</sup> · 16<sup>3</sup> = 2<sup>12</sup> · 9<sup>4</sup> = 3<sup>8</sup> · 125<sup>2</sup> = 5<sup>6</sup>`,
      `Eşi olmayan: <b>7<sup>1</sup></b>`
    ],
    answer: `Boyanmayan 7<sup>1</sup>. Cevap: <b>C</b>`,
    trap: `49<sup>0</sup>'ı 7<sup>1</sup> ile eşleştirmek (49 = 7<sup>2</sup> ama üs 0!).`
  },
  {
    no: 12,
    q: `<p>Bir şehirde üç günde düşen yağış miktarları (mm): 0,034 · 10<sup>3</sup>, 0,6 · 10<sup>2</sup>, 0,0006 · 10<sup>5</sup>.</p>`
      + `<p class="ask">Toplam yağış miktarının bilimsel gösterimi hangisidir?</p>`,
    opts: ['1,54 · 10<sup>3</sup>', '6,634 · 10<sup>10</sup>', '1,54 · 10<sup>1</sup>', '1,54 · 10<sup>2</sup>'], ans: 3,
    hints: [`Önce her birini normal sayıya çevir.`],
    steps: [`34 + 60 + 60 = 154`, `154 = <b>1,54 · 10<sup>2</sup></b>`],
    answer: `<b>1,54 · 10<sup>2</sup> mm</b>. Cevap: <b>D</b>`,
    trap: `Üsleri toplamak (10<sup>10</sup>).`
  },
  {
    no: 13,
    q: `<p>Bir koşu parkurunun yanında bitiş çizgisinden başlayarak sırasıyla N (2<sup>2</sup> m), M (3<sup>2</sup> m), L (2<sup>3</sup> m) ve K (5<sup>2</sup> m) tribünleri vardır. Tribünler arasında 3'er metre boşluk vardır ve N tribününün bir kenarı bitiş çizgisiyle aynı hizadadır.</p>`
      + `<p>Bitişe doğru koşan iki sporcudan arkadaki K tribünü karşısından geçerken öndeki sporcuyla arasında 37 m vardır.</p>`
      + `<p class="ask">Buna göre öndeki sporcunun konumu ile ilgili aşağıdakilerden hangisi <u>kesinlikle yanlıştır</u>?</p>`,
    opts: ['Bitiş çizgisini geçmiştir.', 'L tribününün karşısındadır.', 'M tribününün karşısındadır.', 'M ile L tribünleri arasındadır.'], ans: 1, long: true,
    hints: [`Her tribünün bitişe uzaklığını yaz.`],
    steps: [
      `N: 0–4 · M: 7–16 · L: 19–27 · K: 30–55 (bitişe uzaklık, m)`,
      `Arkadaki 30–55 arasında → öndeki 30 − 37 = −7 ile 55 − 37 = 18 arasında`,
      `L (19–27) bu aralıkta değil → <b>imkânsız</b>; diğerleri mümkün`
    ],
    answer: `Öndeki sporcu L karşısında olamaz. Cevap: <b>B</b>`,
    trap: `Arkadaki sporcu için K'nın tek bir noktasını almak.`
  },
  {
    no: 14,
    q: `<p>A şehrini 0,36 · 10<sup>6</sup>, B şehrini 2,4 · 10<sup>5</sup>, C şehrini x · 10<sup>8</sup> turist ziyaret etmiştir. C'yi ziyaret eden turist sayısı A'dan az, B'den fazladır.</p>`
      + `<p class="ask">Buna göre x aşağıdakilerden hangisi olabilir?</p>`,
    opts: ['3 · 10<sup>−2</sup>', '2 · 10<sup>−3</sup>', '3 · 10<sup>−3</sup>', '4 · 10<sup>−3</sup>'], ans: 2,
    hints: [`A = 360 000, B = 240 000`],
    steps: [
      `Şıklar × 10<sup>8</sup>: A) 3 000 000 · B) 200 000 · C) <b>300 000</b> · D) 400 000`,
      `240 000 &lt; 300 000 &lt; 360 000 ✓`
    ],
    answer: `x = 3 · 10<sup>−3</sup>. Cevap: <b>C</b>`,
    trap: `x'i doğrudan turist sayısı sanmak.`
  },
  {
    no: 15,
    q: `<p>Bir kenarı 2<sup>6</sup> cm olan kare kâğıda 1 kare ve 10 eş dikdörtgen çizilmiştir. Kare ve 2 dikdörtgen kırmızıya boyanmıştır.</p>`
      + `<div class="fig">${kare6}</div>`
      + `<p class="ask">Kırmızı bölgelerin alanları toplamı kaç santimetrekaredir?</p>`,
    opts: ['2<sup>9</sup>', '3 · 2<sup>8</sup>', '2<sup>10</sup>', '2<sup>11</sup>'], ans: 2,
    hints: [`Karenin kenarı a ise dikdörtgenin kısa kenarı a/2. Sağ kenarı topla.`],
    steps: [
      `Sağ kenar: 2 + 6 = 8 dikdörtgen → 8 · a/2 = 4a = 2<sup>6</sup> → a = 2<sup>4</sup> = 16`,
      `Dikdörtgen: 8 × (64 − 16) = 8 × 48 = 384 = 3 · 2<sup>7</sup>`,
      `Kırmızı: 2<sup>8</sup> + 2 · 3 · 2<sup>7</sup> = 2<sup>8</sup> + 3 · 2<sup>8</sup> = 4 · 2<sup>8</sup> = <b>2<sup>10</sup></b>`
    ],
    answer: `<b>2<sup>10</sup> cm²</b>. Cevap: <b>C</b>`,
    trap: `2<sup>8</sup> + 3 · 2<sup>8</sup>'i 3 · 2<sup>16</sup> yapmak.`
  },
  {
    no: 16,
    q: `<p>Küçük bir koli 4<sup>4</sup> g, büyük bir koli 2<sup>10</sup> g'dır. A aracında eşit sayıda küçük ve büyük koli, B aracında 4 küçük ve 2 büyük koli vardır. İki araçtaki kolilerin toplam kütlesi 2<sup>13</sup> g'dır.</p>`
      + `<p class="ask">Buna göre A aracında toplam kaç koli vardır?</p>`,
    opts: ['4', '8', '10', '12'], ans: 1,
    hints: [`Her şeyi “… · 2<sup>8</sup>” olarak yaz.`],
    steps: [
      `Küçük 2<sup>8</sup>, büyük 4 · 2<sup>8</sup>. B: 4 + 8 = 12 · 2<sup>8</sup>. Toplam 2<sup>13</sup> = 32 · 2<sup>8</sup>`,
      `A: 20 · 2<sup>8</sup> = x · 2<sup>8</sup> + 4x · 2<sup>8</sup> → 5x = 20 → x = 4 → toplam <b>8</b> koli`
    ],
    answer: `A aracında 8 koli. Cevap: <b>B</b>`,
    trap: `x = 4'ü cevap sanmak (A).`
  },
  {
    no: 17,
    q: `<p>Beş öğrencinin boyları (cm): Ali 1·10<sup>2</sup> + 5·10<sup>1</sup> + 9·10<sup>0</sup> + 8·10<sup>−1</sup> · Bora 1·10<sup>2</sup> + 6·10<sup>1</sup> + 2·10<sup>−1</sup> · Can 1·10<sup>2</sup> + 5·10<sup>1</sup> + 7·10<sup>0</sup> · Deniz 1·10<sup>2</sup> + 6·10<sup>1</sup> + 1·10<sup>0</sup> + 5·10<sup>−1</sup> · Efe 1·10<sup>2</sup> + 4·10<sup>1</sup> + 9·10<sup>0</sup> + 9·10<sup>−1</sup>.</p>`
      + `<p class="ask">Boyu 160 cm'den uzun olan kaç öğrenci vardır?</p>`,
    opts: ['0', '1', '2', '3'], ans: 2,
    hints: [`Bora'da birler basamağı yok!`],
    steps: [`Ali 159,8 · Bora <b>160,2</b> · Can 157 · Deniz <b>161,5</b> · Efe 149,9`, `160'tan uzun: Bora, Deniz → <b>2</b>`],
    answer: `2 öğrenci. Cevap: <b>C</b>`,
    trap: `Bora'yı 162 okumak.`
  },
  {
    no: 18,
    q: `<p>Bir yolcu, kütlesi 23 kg'dan az olan bavulu ek ücret ödemeden uçağa verebilmektedir. Bavul 24,15 kg'dır. Eşyalar (kg): laptop 1·10<sup>0</sup> + 1·10<sup>−1</sup> + 9·10<sup>−3</sup> · ayakkabı 1·10<sup>0</sup> + 1·10<sup>−1</sup> + 5·10<sup>−2</sup> · kitap 9·10<sup>−1</sup> + 9·10<sup>−2</sup> · şemsiye 1·10<sup>0</sup> + 2·10<sup>−1</sup>.</p>`
      + `<p class="ask">Hangi eşyayı çıkarırsa bavulunu ek ücret ödemeden verebilir?</p>`,
    opts: ['Laptop', 'Ayakkabı', 'Kitap', 'Şemsiye'], ans: 3,
    hints: [`24,15 − 23 = 1,15. Çıkarılan eşya bundan <b>ağır</b> olmalı.`],
    steps: [`Laptop 1,109 · Ayakkabı 1,15 · Kitap 0,99 · Şemsiye <b>1,2</b>`, `1,15'ten ağır tek eşya şemsiye (24,15 − 1,2 = 22,95 &lt; 23)`],
    answer: `Şemsiye. Cevap: <b>D</b>`,
    trap: `Ayakkabıyı seçmek: 24,15 − 1,15 = 23, “23'ten az” değil!`
  },
  {
    no: 19,
    q: `<p>Mavi kartlar: 3<sup>−1</sup>, 3<sup>2</sup>, 3<sup>−3</sup>, 3<sup>4</sup>. Kırmızı kartlar: 9<sup>−2</sup>, 81<sup>1</sup>, 27<sup>−1</sup>, 9<sup>1</sup>. Her mavi kart, kendisine denk olmayan her kırmızı kartla çarpılıyor.</p>`
      + `<p class="ask">Elde edilen ifadelerden ikisinin oranı <u>en çok</u> kaçtır?</p>`,
    opts: ['3<sup>11</sup>', '3<sup>13</sup>', '3<sup>15</sup>', '3<sup>14</sup>'], ans: 1,
    hints: [`Kırmızıları 3'ün kuvveti yap: 3<sup>−4</sup>, 3<sup>4</sup>, 3<sup>−3</sup>, 3<sup>2</sup>.`],
    steps: [
      `Denk çiftler (çarpılamaz): 3<sup>4</sup>–81<sup>1</sup>, 3<sup>−3</sup>–27<sup>−1</sup>, 3<sup>2</sup>–9<sup>1</sup>`,
      `En büyük: 3<sup>4</sup> · 3<sup>2</sup> = 3<sup>6</sup> (3<sup>4</sup> · 3<sup>4</sup> yasak) · En küçük: 3<sup>−3</sup> · 3<sup>−4</sup> = 3<sup>−7</sup>`,
      `Oran: 3<sup>6 − (−7)</sup> = <b>3<sup>13</sup></b>`
    ],
    answer: `<b>3<sup>13</sup></b>. Cevap: <b>B</b>`,
    trap: `Yasak çifti kullanıp 3<sup>8</sup> / 3<sup>−7</sup> = 3<sup>15</sup> bulmak.`
  },
  {
    no: 20,
    q: `<p>0,0045 · 10<sup>a</sup> ifadesinin değeri 100'den büyüktür.</p><p class="ask">a'nın alabileceği <u>en küçük</u> tam sayı değeri kaçtır?</p>`,
    opts: ['3', '4', '5', '6'], ans: 2,
    hints: [`0,0045 = 4,5 · 10<sup>−3</sup>`],
    steps: [`4,5 · 10<sup>a − 3</sup> > 100`, `a = 4: 45 ✗ · a = 5: <b>450</b> ✓`],
    answer: `a = 5. Cevap: <b>C</b>`,
    trap: `4,5 · 10<sup>2</sup> > 100 olduğunu görmeyip a ≥ 6 demek.`
  },
  {
    no: 21,
    q: `<p>300 metrelik bir pistte başlangıca uzaklıkları 3'ün pozitif tam sayı kuvvetleri olan noktalara olabildiğince çok engel konuyor. 6 atletin koştuğu yarışta biri 30. metrede, biri 100. metrede yarışı bırakıyor; diğerleri yarışı tamamlıyor.</p>`
      + `<p class="ask">Atletlerin atladığı engel sayılarının toplamı kaçtır?</p>`,
    opts: ['25', '27', '30', '29'], ans: 1,
    hints: [`3, 9, 27, … 300'e kadar.`],
    steps: [`Engeller: 3, 9, 27, 81, 243 → 5 engel`, `30 m: 3 engel · 100 m: 4 engel · 4 atlet × 5 = 20 → toplam <b>27</b>`],
    answer: `27 engel. Cevap: <b>B</b>`,
    trap: `3<sup>0</sup> = 1'i engel saymak.`
  }
  ];
  S.forEach(s => s.etiket = `Çıkmış ${s.no} (${yil[s.no]}) benzeri`);
  return S;
})();
