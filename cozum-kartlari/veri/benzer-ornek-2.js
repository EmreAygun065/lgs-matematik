// MEB örnek sorularına benzer, yeni yazılmış sorular 21–40.
(function () {
  const T = 'Temel kurallar';
  const karo = svg(300, 250, (() => {
    const counts = [1, 2, 3, 4, 5, 5, 4, 3, 2, 1], w = 48, h = 24, cx = 150; let g = '';
    counts.forEach((n, r) => { for (let k = 0; k < n; k++) g += `<rect x="${cx - n * w / 2 + k * w}" y="${5 + r * h}" width="${w}" height="${h}" fill="#b5352f" stroke="#7a7a7a"/>`; });
    return g;
  })(), 'Karo deseni: 10 sıra, en geniş sırada 5 karo');

  BENZER_ORNEK.push(
  {
    no: 21, konu: T,
    q: `<p>Kablo uzunlukları ve bir makaraya sarılabilecek miktarlar (cm):</p>`
      + tablo([['Kablo', 'Uzunluk', 'Makara başı'], ['Enerji', '8<sup>4</sup>', '4<sup>5</sup>'], ['Telefon', '9<sup>5</sup>', '27<sup>3</sup>'], ['İnternet', '25<sup>3</sup>', '5<sup>5</sup>'], ['Televizyon', '32<sup>3</sup>', '4<sup>6</sup>']])
      + `<p class="ask">Hangi kablo için <u>en az</u> makara kullanılır?</p>`,
    opts: ['Enerji', 'İnternet', 'Televizyon', 'Telefon'], ans: 3,
    hints: [`Her satırı tek tabana çevirip böl.`],
    steps: [`Enerji 2<sup>12</sup>/2<sup>10</sup> = 4 · Telefon 3<sup>10</sup>/3<sup>9</sup> = <b>3</b>`, `İnternet 5<sup>6</sup>/5<sup>5</sup> = 5 · TV 2<sup>15</sup>/2<sup>12</sup> = 8`],
    answer: `Telefon (3 makara). Cevap: <b>D</b>`
  },
  {
    no: 22, konu: T,
    q: `<p>Bir yolda özdeş direklerin her birinde 3 lamba vardır. Direk boyu 10 m, ardışık direkler arası direk boyunun 4 katıdır. İlk ve son direk arası 10<sup>4</sup> m'dir.</p><p class="ask">Toplam lamba sayısı kaçtır?</p>`,
    opts: ['750', '753', '1000', '1004'], ans: 1,
    hints: [`Direk sayısı = aralık sayısı + 1`],
    steps: [`Aralık 40 m → 10<sup>4</sup> / 40 = 250 aralık → 251 direk`, `251 · 3 = <b>753</b>`],
    answer: `Cevap: <b>B</b>`
  },
  {
    no: 23, konu: T,
    q: `<p>Uzun kenarı 5<sup>5</sup> mm olan dikdörtgen bir kâğıt, uzun kenarlarına paralel olarak üstten ve alttan 2<sup>5</sup> mm'lik şeritler hâlinde katlanıyor. Ortada görünen beyaz bölgenin alanı, görünen mavi şeritlerden birinin alanının 2 katıdır.</p><p class="ask">Kâğıdın katlanmadan önceki bir yüzünün alanı kaç mm²'dir?</p>`,
    opts: ['3 · 10<sup>5</sup>', '4 · 10<sup>5</sup>', '6 · 10<sup>5</sup>', '1,2 · 10<sup>6</sup>'], ans: 2,
    hints: [`Açık kâğıt, katlanmış hâlinden 2 · 2<sup>5</sup> daha uzundur.`],
    steps: [`Beyaz yükseklik 2<sup>6</sup>; katlanmış: 2<sup>5</sup> + 2<sup>6</sup> + 2<sup>5</sup> = 2<sup>7</sup>; açık: 2<sup>7</sup> + 2<sup>6</sup> = 3 · 2<sup>6</sup>`, `Alan: 5<sup>5</sup> · 3 · 2<sup>6</sup> = 3 · 2 · 10<sup>5</sup> = <b>6 · 10<sup>5</sup></b>`],
    answer: `Cevap: <b>C</b>`
  },
  {
    no: 24, konu: T,
    q: `<p>3<sup>−3</sup>, 3<sup>−2</sup>, 3<sup>−1</sup>, 3<sup>1</sup>, 3<sup>2</sup>, 3<sup>3</sup> yazılı kartlardan yeterince vardır. Her adımda bir pozitif ve bir negatif kuvvetli kart türü seçilip değerler toplanıyor. 1. adımda bir 3<sup>1</sup> ve üç 3<sup>−1</sup> seçiliyor. Her adımın toplamı bir öncekinin 3 katıdır ve bir kart türü yalnız bir adımda kullanılabilir.</p><p class="ask">2. ve 3. adımda seçilen kart sayısı toplamı <u>en az</u> kaçtır?</p>`,
    opts: ['110', '164', '200', '272'], ans: 1,
    hints: [`1. adım toplamı 4 → 2. adım 12, 3. adım 36.`],
    steps: [`3<sup>3</sup> = 27 > 12 olduğu için 2. adımda pozitif kart 3<sup>2</sup>, 3. adımda 3<sup>3</sup>`, `{9, ${F(1, 9)}} + {27, ${F(1, 27)}}: (1 + 27) + (1 + 243) = 272`, `{9, ${F(1, 27)}} + {27, ${F(1, 9)}}: (1 + 81) + (1 + 81) = <b>164</b>`],
    answer: `En az 164. Cevap: <b>B</b>`
  },
  {
    no: 25, konu: T,
    q: `<p>A makinesi 1 m² halıyı 2<sup>8</sup> saniyede, B makinesi 4<sup>5</sup> saniyede dokuyor. Her halı 8 m²'dir. İki makine aynı anda başlıyor.</p><p class="ask">İlk halı bittiğinde diğer makinede kaç m² halı dokunmuştur?</p>`,
    opts: ['2<sup>−3</sup>', '2<sup>−1</sup>', '2<sup>0</sup>', '2<sup>1</sup>'], ans: 3,
    hints: [`4<sup>5</sup> = 2<sup>10</sup>`],
    steps: [`A halıyı 8 · 2<sup>8</sup> = 2<sup>11</sup> sn'de bitirir`, `B: 2<sup>11</sup> / 2<sup>10</sup> = <b>2<sup>1</sup> m²</b>`],
    answer: `Cevap: <b>D</b>`
  },
  {
    no: 26, konu: T,
    q: `<p>Bir oyun haritasında A ile B arasında 4 özdeş çubuk vardır ve AB = 2<sup>12</sup> km'dir. BC uzaklığı AB'nin dörtte biridir. BC ve CA arasındaki çubuk sayılarının toplamı 7'dir.</p><p class="ask">CA kaç km'dir?</p>`,
    opts: ['3 · 2<sup>11</sup>', '6 · 2<sup>11</sup>', '2<sup>13</sup>', '3 · 2<sup>10</sup>'], ans: 0,
    hints: [`Bir çubuk 2<sup>12</sup> / 4 km.`],
    steps: [`Çubuk 2<sup>10</sup> km; BC = 2<sup>10</sup> → 1 çubuk; CA 6 çubuk`, `6 · 2<sup>10</sup> = <b>3 · 2<sup>11</sup></b>`],
    answer: `Cevap: <b>A</b>`
  },
  {
    no: 27, konu: T,
    q: `<p>4<sup>8</sup> sayfanın yarısı 12'li, yarısı 16'lı gruplanıyor. 12'li gruba 3, 16'lı gruba 4 zımba teli kullanılıyor. Bir kutuda 2<sup>8</sup> tel var.</p><p class="ask">Kaç kutu tel kullanılır?</p>`,
    opts: ['8<sup>2</sup>', '2<sup>8</sup>', '4<sup>4</sup>', '2<sup>5</sup>'], ans: 0,
    hints: [`Her iki grupta da 4 sayfaya 1 tel düşüyor.`],
    steps: [`Tel: 4<sup>8</sup> / 4 = 4<sup>7</sup> = 2<sup>14</sup>`, `Kutu: 2<sup>14</sup> / 2<sup>8</sup> = 2<sup>6</sup> = <b>8<sup>2</sup></b>`],
    answer: `Cevap: <b>A</b>`
  },
  {
    no: 28, konu: T,
    q: `<p>6 satır, 6 sütunlu bir tabloda satır numarası taban, sütun numarası üstür; 1–3. satırlarda üsler pozitif, 4–6. satırlarda negatiftir. Yeşil kareler 2. satır 5. sütun ve 4. satır 1. sütundur. Yeşil karelerdeki ifadeler çarpılıyor.</p><p class="ask">Elde edilen ifade tabloda hangi sütunda bulunur?</p>`,
    opts: ['1. sütun', '3. sütun', '4. sütun', '6. sütun'], ans: 1,
    hints: [`4. satırda üs negatif: 4<sup>−1</sup>.`],
    steps: [`2<sup>5</sup> · 4<sup>−1</sup> = 2<sup>5</sup> · 2<sup>−2</sup> = 2<sup>3</sup>`, `2<sup>3</sup>: 2. satır <b>3. sütun</b> (8 = 8<sup>1</sup> olamaz, 8. satır yok)`],
    answer: `Cevap: <b>B</b>`
  },
  {
    no: 29, konu: T,
    q: `<p>2 atölyede 4'er makine var. 128 metresi 250 g olan iplikten 4 kg, makinelere eşit paylaştırılıyor.</p><p class="ask">Bir makinedeki iplik kaç metredir?</p>`,
    opts: ['4<sup>4</sup>', '2<sup>6</sup>', '8<sup>3</sup>', '16<sup>3</sup>'], ans: 0,
    hints: [`4000 g = 16 · 250 g`],
    steps: [`Toplam iplik 16 · 128 = 2<sup>11</sup> m; makine 8 = 2<sup>3</sup>`, `2<sup>11</sup> / 2<sup>3</sup> = 2<sup>8</sup> = <b>4<sup>4</sup></b>`],
    answer: `Cevap: <b>A</b>`
  },
  {
    no: 30, konu: T,
    q: `<p>Elma suyu tanesi 3 TL (12'li koli), portakal suyu tanesi 4 TL (6'lı koli). Ayşe'nin her iki tür için ödediği tutarlar 6'nın doğal sayı kuvvetidir.</p><p class="ask">Ayşe <u>en az</u> kaç koli almıştır?</p>`,
    opts: ['7', '8', '9', '10'], ans: 3,
    hints: [`Elma kolisi 36 TL, portakal kolisi 24 TL.`],
    steps: [`36 = 6<sup>2</sup> → 1 koli`, `24a = 6<sup>n</sup>: 2<sup>3</sup> gerektiği için n = 3 → 216 / 24 = 9 koli → toplam <b>10</b>`],
    answer: `Cevap: <b>D</b>`
  },
  {
    no: 31, konu: T,
    q: `<p>Sepetler: 1. {−2, 1, 3, 4} · 2. {−1, 2, −3, 5} · 3. {−2, −1, −4, 3}. Yunus ve Gamze her sepetten bir top alıyor; en büyük sayı taban, en küçük üs, diğeri oluşan ifadenin üssü oluyor ve iki ifade denk çıkıyor.</p><p class="ask">Yunus 1. sepetten 3, 2. sepetten −1, 3. sepetten −2 almıştır. Buna göre Gamze'nin sayılarının toplamı kaçtır?</p>`,
    opts: ['6', '4', '2', '−1'], ans: 0,
    hints: [`Yunus: (3<sup>−2</sup>)<sup>−1</sup> = 9`],
    steps: [`Yunus 1. sepetten 3, 3. sepetten −2, 2. sepetten −1 aldı. Gamze'nin değeri 9 olmalı.`, `Taban 3 (3. sepetten), üsler çarpımı 2: 1. sepetten 1, 2. sepetten 2 → (3<sup>1</sup>)<sup>2</sup> = 9`, `Toplam 3 + 1 + 2 = <b>6</b>`],
    answer: `Cevap: <b>A</b>`
  },
  {
    no: 32, konu: T,
    q: `<p>A tahtası 3<sup>−1</sup> dm kalınlıkta, 3'lü paketlenir. B tahtası 2<sup>−3</sup> dm, 8'li paketlenir. Depoya 3 sıra hâlinde tavana kadar B paketi konduğunda 3 · 2<sup>9</sup> tahta sığıyor.</p><p class="ask">Aynı şekilde en fazla kaç A paketi sığar?</p>`,
    opts: ['3 · 2<sup>6</sup>', '2<sup>6</sup>', '3 · 2<sup>9</sup>', '2<sup>9</sup>'], ans: 0,
    hints: [`Her iki paket de 1 dm.`],
    steps: [`B paketi: 3 · 2<sup>9</sup> / 8 = 3 · 2<sup>6</sup>`, `A paketi de 1 dm → aynı sayı: <b>3 · 2<sup>6</sup></b>`],
    answer: `Cevap: <b>A</b>`
  },
  {
    no: 33, konu: T,
    q: `<p>Turuncu kartta 2 ve 3, mor kartta 2, 2, 2, mavi kartta 3 ve 3 yazılıdır. Elif seçtiği kartlardaki tüm rakamları çarpınca 12'nin pozitif tam sayı kuvvetini elde ediyor.</p><p class="ask">Seçilen kart sayısı <u>en az</u> kaçtır?</p>`,
    opts: ['1', '2', '3', '4'], ans: 3,
    hints: [`12<sup>n</sup> = 2<sup>2n</sup> · 3<sup>n</sup>`],
    steps: [`x turuncu, y mor, z mavi: x + 3y = 2n, x + 2z = n`, `n = 3: x = 3, y = 1, z = 0 → 2<sup>6</sup> · 3<sup>3</sup> = 12<sup>3</sup> → <b>4 kart</b> (n = 1, 2 çözümsüz)`],
    answer: `Cevap: <b>D</b>`
  },
  {
    no: 34, konu: T,
    q: `<p>Her biri 2<sup>2</sup> mm genişliğinde 3 şeritten oluşan bir desen, AB boyunca boşluksuz tekrarlanıyor. AB = 6<sup>5</sup> mm'dir.</p><p class="ask">Kaç desen kullanılmıştır?</p>`,
    opts: ['216', '324', '648', '1296'], ans: 2,
    hints: [`Bir desen 3 · 2<sup>2</sup> = 12 mm.`],
    steps: [`6<sup>5</sup> = 2<sup>5</sup> · 3<sup>5</sup>; desen 2<sup>2</sup> · 3`, `2<sup>3</sup> · 3<sup>4</sup> = <b>648</b>`],
    answer: `Cevap: <b>C</b>`
  },
  {
    no: 35, konu: T,
    q: `<p>Nüfusları eşit iki şehirden A'nın nüfusu 20 yılda, B'ninki 30 yılda bir 2 katına çıkıyor.</p><p class="ask">Kaç yıl sonra A'nın nüfusu B'ninkinin 32 katı olur?</p>`,
    opts: ['60', '100', '150', '300'], ans: 3,
    hints: [`2<sup>t/20 − t/30</sup> = 2<sup>5</sup>`],
    steps: [`t/20 − t/30 = t/60 = 5 → <b>t = 300</b>`],
    answer: `Cevap: <b>D</b>`
  },
  {
    no: 36, konu: T,
    q: `<p>Kırmızı yüzü 2<sup>4</sup> cm × 2<sup>3</sup> cm olan karolarla aşağıdaki desen yapılmıştır.</p><div class="fig">${karo}</div><p class="ask">Desenin çevresi kaç cm'dir?</p>`,
    opts: ['160', '240', '320', '400'], ans: 2,
    hints: [`Basamaklı şeklin çevresi = çevreleyen dikdörtgenin çevresi.`],
    steps: [`Genişlik 5 · 16 = 80, yükseklik 10 · 8 = 80`, `Çevre 2 · (80 + 80) = <b>320</b>`],
    answer: `Cevap: <b>C</b>`
  },
  {
    no: 37, konu: T,
    q: `<p>Kartlar: (−${F(1, 2)})<sup>−3</sup>, (−${F(1, 4)})<sup>−2</sup>, (${F(1, 8)})<sup>−1</sup>, (−${F(1, 2)})<sup>5</sup>. Üç kart Mete'ye, bir kart Bartu'ya veriliyor.</p><p class="ask">Mete'nin kartlarının çarpımının Bartu'nun kartına oranı <u>en çok</u> kaçtır?</p>`,
    opts: ['2<sup>10</sup>', '2<sup>15</sup>', '2<sup>20</sup>', '2<sup>25</sup>'], ans: 1,
    hints: [`Dört kartın çarpımı P ise oran P / x<sup>2</sup>.`],
    steps: [`−2<sup>3</sup>, 2<sup>4</sup>, 2<sup>3</sup>, −2<sup>−5</sup> → P = 2<sup>5</sup>`, `x = −2<sup>−5</sup>: 2<sup>5</sup> / 2<sup>−10</sup> = <b>2<sup>15</sup></b>`],
    answer: `Cevap: <b>B</b>`
  },
  {
    no: 38, konu: T,
    q: `<p>Yapboz parçaları: 1: (−3)<sup>4</sup> · 2: (3<sup>4</sup>)<sup>−1</sup> · 3: (−9)<sup>2</sup> · 4: (−${F(1, 9)})<sup>−2</sup> · 5: (−81)<sup>1</sup> · 6: 9<sup>2</sup>.</p><p class="ask">Değerleri eşit dört parça hangileridir?</p>`,
    opts: ['1, 3, 4, 6', '1, 2, 3, 6', '1, 3, 5, 6', '2, 3, 4, 6'], ans: 0,
    hints: [`Hepsini ±3<sup>k</sup> yap.`],
    steps: [`1: 3<sup>4</sup> · 2: 3<sup>−4</sup> · 3: 3<sup>4</sup> · 4: 9<sup>2</sup> = 3<sup>4</sup> · 5: −3<sup>4</sup> · 6: 3<sup>4</sup>`, `Eşit dörtlü: <b>1, 3, 4, 6</b>`],
    answer: `Cevap: <b>A</b>`
  },
  {
    no: 39, konu: T,
    q: `<p>2<sup>−2</sup>, 2<sup>−1</sup>, 2<sup>1</sup>, 2<sup>2</sup>, 2<sup>3</sup>, 2<sup>4</sup> ifadeleri mavi kutulara yerleştirilecek.</p>`
      + izgara([['x:', 'b:', 'b:', 'b:'], ['b:', '', 'E', ''], ['b:', '', '', ''], ['b:', 'B', '', 'A']])
      + `<p>E, B, A kutularındaki ifadeler, aynı sütundaki mavi ifadenin aynı satırdaki mavi ifadeye bölümüdür.</p><p class="ask">E · B · A en çok kaçtır?</p>`,
    opts: ['2<sup>12</sup>', '2<sup>13</sup>', '2<sup>14</sup>', '2<sup>15</sup>'], ans: 2,
    hints: [`B ve A aynı satırda.`],
    steps: [`Üs = s1 + s2 + s3 − r1 − 2·r3`, `r3 = −2 (+4), r1 = −1 (+1), sütunlar 4, 3, 2 (9) → 9 + 1 + 4 = <b>14</b>`],
    answer: `Cevap: <b>C</b>`
  },
  {
    no: 40, konu: T,
    q: `<p>1. tablet: −2, 3, 1, −3 · 2. tablet: 3, 2, −2, 5. Aynı sayılar yanarsa sayının karesi; farklı sayılar yanarsa küçük taban, büyük üs olan ifade hesaplanır. İlk basışta aynı, ikincide farklı sayılar yanıyor.</p><p class="ask">Değerlerin çarpımı <u>en çok</u> kaçtır?</p>`,
    opts: ['3<sup>6</sup>', '3<sup>7</sup>', '2<sup>8</sup> · 3', '12<sup>3</sup>'], ans: 1,
    hints: [`Ortak sayılar −2 ve 3.`],
    steps: [`Aynı: 3<sup>2</sup> = 9 (en büyük)`, `Farklı: 3 ile 5 → 3<sup>5</sup> = 243 (en büyük)`, `9 · 243 = <b>3<sup>7</sup></b>`],
    answer: `Cevap: <b>B</b>`
  }
  );
})();
