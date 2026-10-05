// MEB örnek sorularına benzer, yeni yazılmış sorular 61–80.
(function () {
  const T4 = "10'un kuvvetleri", T5 = 'Bilimsel gösterim';
  BENZER_ORNEK.push(
  {
    no: 61, konu: T4,
    q: kartlar(['(−3)<sup>4</sup>', '81<sup>1</sup>', '(−9)<sup>2</sup>', '(−81)<sup>1</sup>']) + `<p>Birbirine denk ifadelerin yazılı olduğu kartlar kutuya atılıyor.</p><p class="ask">Kutuya <u>atılmayan</u> kart hangisidir?</p>`,
    opts: ['(−3)<sup>4</sup>', '81<sup>1</sup>', '(−9)<sup>2</sup>', '(−81)<sup>1</sup>'], ans: 3,
    hints: [`Negatif tabanın tek kuvveti negatiftir.`],
    steps: [`(−3)<sup>4</sup> = 81 · 81<sup>1</sup> = 81 · (−9)<sup>2</sup> = 81 · (−81)<sup>1</sup> = <b>−81</b>`],
    answer: `Cevap: <b>D</b>`
  },
  {
    no: 62, konu: T4,
    q: `<p>1,6 · 10<sup>5</sup> kabın her birinde 0,25 · 10<sup>3</sup> mL sıvı var. Sıvılar, 5 eş bölmeli 2 mL'lik tüplere, her tüpün 4 bölmesi dolacak şekilde paylaştırılıyor.</p><p class="ask">Kaç tüp kullanılır?</p>`,
    opts: ['2,5 · 10<sup>6</sup>', '5<sup>2</sup> · 10<sup>6</sup>', '2<sup>5</sup> · 10<sup>6</sup>', '5<sup>3</sup> · 10<sup>6</sup>'], ans: 1,
    hints: [`Bir tüpe 2 · ${F(4, 5)} = 1,6 mL konur.`],
    steps: [`Toplam 1,6 · 10<sup>5</sup> · 250 = 4 · 10<sup>7</sup> mL`, `4 · 10<sup>7</sup> / 1,6 = 2,5 · 10<sup>7</sup> = <b>5<sup>2</sup> · 10<sup>6</sup></b>`],
    answer: `Cevap: <b>B</b>`
  },
  {
    no: 63, konu: T4,
    q: `<p>Çevresi 0,36 · 10<sup>3</sup> mm olan düzgün altıgen kutular, köşeleri çakışacak biçimde bir rafa yan yana diziliyor. Baştaki ve sondaki kutunun köşeleri rafın kenarlarına değiyor.</p><p class="ask">25 kutu dizilen rafın uzunluğu kaç mm'dir?</p>`,
    opts: ['5 · 10<sup>2</sup>', '10<sup>3</sup>', '1,5 · 10<sup>3</sup>', '3 · 10<sup>3</sup>'], ans: 3,
    hints: [`Köşeden köşeye genişlik = 2 kenar.`],
    steps: [`Kenar 360 / 6 = 60 mm → genişlik 120 mm`, `25 · 120 = 3000 = <b>3 · 10<sup>3</sup></b>`],
    answer: `Cevap: <b>D</b>`
  },
  {
    no: 64, konu: T4,
    q: `<p>Dört yazıcının bir sayfa için harcadığı mürekkep (L): A 32 · 10<sup>−7</sup>, B 0,3 · 10<sup>−5</sup>, C 305 · 10<sup>−8</sup>, D 0,031 · 10<sup>−4</sup>. Eşit mürekkeple başlayıp eşit sayıda sayfa basıyorlar; kalan mürekkepler a, b, c, d'dir.</p><p class="ask">Doğru sıralama hangisidir?</p>`,
    opts: ['b > c > d > a', 'a > d > c > b', 'c > b > d > a', 'b > d > c > a'], ans: 0,
    hints: [`Hepsini · 10<sup>−6</sup> biçimine getir.`],
    steps: [`A 3,2 · B 3 · C 3,05 · D 3,1 (× 10<sup>−6</sup>)`, `Az harcayanda çok kalır: <b>b > c > d > a</b>`],
    answer: `Cevap: <b>A</b>`
  },
  {
    no: 65, konu: T4,
    q: `<p class="ask">Çözünürlüğü 1600 × 900 olan bir ekrandaki piksel sayısı hangisidir?</p>`,
    opts: ['1,44 · 10<sup>5</sup>', '1,44 · 10<sup>6</sup>', '1,44 · 10<sup>7</sup>', '1,6 · 10<sup>6</sup>'], ans: 1,
    hints: [`16 · 9 = 144`],
    steps: [`1600 · 900 = 1 440 000 = <b>1,44 · 10<sup>6</sup></b>`],
    answer: `Cevap: <b>B</b>`
  },
  {
    no: 66, konu: T4,
    q: `<p>Bir güneş paneli üzerine düşen enerjinin ${F(1, 4)}'ünü elektriğe çeviriyor. Lamba saatte 2,4 · 10<sup>4</sup> J harcıyor. Bölgede günlük cm² başına 4,8 · 10<sup>2</sup> J güneş enerjisi düşüyor.</p><p class="ask">Lambanın 10 saat yanması için panel alanı kaç cm² olmalıdır?</p>`,
    opts: ['500', '1000', '2000', '4000'], ans: 2,
    hints: [`Gereken güneş enerjisi, elektriğin 4 katı.`],
    steps: [`Elektrik 2,4 · 10<sup>5</sup> J → güneş 9,6 · 10<sup>5</sup> J`, `9,6 · 10<sup>5</sup> / 4,8 · 10<sup>2</sup> = 2 · 10<sup>3</sup> = <b>2000</b>`],
    answer: `Cevap: <b>C</b>`
  },
  {
    no: 67, konu: T4,
    q: `<p>Bir barajda 2,4 milyar m³ su vardır. Bu suyun %5'i içme suyu olarak ayrılmış, içme suyunun %0,5'i bir ilçeye verilmiştir.</p><p class="ask">İlçeye verilen su kaç litredir? (1 m³ = 10<sup>3</sup> L)</p>`,
    opts: ['6 · 10<sup>5</sup>', '6 · 10<sup>8</sup>', '1,2 · 10<sup>7</sup>', '6 · 10<sup>6</sup>'], ans: 1,
    hints: [`2,4 milyar = 2,4 · 10<sup>9</sup>`],
    steps: [`2,4 · 10<sup>9</sup> · 5 · 10<sup>−2</sup> · 5 · 10<sup>−3</sup> = 6 · 10<sup>5</sup> m³`, `= <b>6 · 10<sup>8</sup> L</b>`],
    answer: `Cevap: <b>B</b>`
  },
  {
    no: 68, konu: T4,
    q: tablo([['', 'Gerçek (mm)', 'Görülen (mm)'], ['A', '2 · 10<sup>−2</sup>', '3'], ['B', '5 · 10<sup>−3</sup>', '2'], ['C', '4 · 10<sup>−4</sup>', '0,8'], ['D', '1,5 · 10<sup>−1</sup>', '4,5']]) + `<p class="ask">Hangisinde büyütme oranı <u>en büyüktür</u>?</p>`,
    opts: ['A', 'B', 'C', 'D'], ans: 2,
    hints: [`Oran = görülen / gerçek`],
    steps: [`A 150 · B 400 · C <b>2000</b> · D 30`],
    answer: `Cevap: <b>C</b>`
  },
  {
    no: 69, konu: T4,
    q: `<p>Bir oyunda 1 altın = 4 gümüş, 1 elmas = 5 altın, 1 taç = 2 elmas değerindedir.</p><p class="ask">2<sup>6</sup> taçlık bir ödül kaç gümüşe eşittir?</p>`,
    opts: ['2,56 · 10<sup>3</sup>', '1,28 · 10<sup>5</sup>', '2,56 · 10<sup>4</sup>', '1,28 · 10<sup>3</sup>'], ans: 0,
    hints: [`1 taç kaç gümüş?`],
    steps: [`1 taç = 2 · 5 · 4 = 40 gümüş`, `64 · 40 = 2560 = <b>2,56 · 10<sup>3</sup></b>`],
    answer: `Cevap: <b>A</b>`
  },
  {
    no: 70, konu: T4,
    q: `<p>Yarıçapları 0,032 · 10<sup>2</sup>, 0,00335 · 10<sup>3</sup> ve 0,0003 · 10<sup>4</sup> cm olan üç top ısıtılınca yarıçapları %10 artıyor. Isıtmadan önce üçü de daire biçimli bir boşluktan geçebiliyor; ısıtınca yalnız biri geçebiliyor.</p><p class="ask">Boşluğun çapı kaç cm olabilir?</p>`,
    opts: ['6,5', '6,8', '7,2', '7,5'], ans: 1,
    hints: [`Önce çapları bul.`],
    steps: [`Çaplar 6,4 · 6,7 · 6 → ısınınca 7,04 · 7,37 · 6,6`, `Önce: d > 6,7 · Sonra yalnız biri: 6,6 &lt; d &lt; 7,04 → <b>6,8</b>`],
    answer: `Cevap: <b>B</b>`
  },
  {
    no: 71, konu: T4,
    q: tablo([['Harita', 'Ölçülen', 'Gerçek (km)'], ['1', '4 cm', '0,2 · 10<sup>4</sup>'], ['2', '3 cm', '1,2 · 10<sup>3</sup>'], ['3', '5 cm', '0,05 · 10<sup>5</sup>'], ['4', '2 cm', '4 · 10<sup>2</sup>']]) + `<p class="ask">Ölçeği <u>en büyük</u> olan harita hangisidir? (1 km = 10<sup>5</sup> cm)</p>`,
    opts: ['1. Harita', '2. Harita', '3. Harita', '4. Harita'], ans: 3,
    hints: [`Ölçek = ölçülen / gerçek (aynı birimde).`],
    steps: [`1: 4 / 2·10<sup>8</sup> = 1/(5·10<sup>7</sup>) · 2: 3 / 1,2·10<sup>8</sup> = 1/(4·10<sup>7</sup>)`, `3: 5 / 5·10<sup>8</sup> = 1/10<sup>8</sup> · 4: 2 / 4·10<sup>7</sup> = <b>1/(2·10<sup>7</sup>)</b>`],
    answer: `Cevap: <b>D</b>`
  },
  {
    no: 72, konu: T4,
    q: `<p>Direnç renk kodu: Kırmızı = 2, Mor = 7, Turuncu çarpanı = 10<sup>3</sup>, Altın tolerans = %5. Şeritleri soldan sağa kırmızı, mor, turuncu, altın olan bir direnç var.</p><p class="ask">Direncin değeri hangisi olabilir?</p>`,
    opts: ['2,5 · 10<sup>4</sup>', '2,6 · 10<sup>4</sup>', '2,9 · 10<sup>4</sup>', '2,7 · 10<sup>5</sup>'], ans: 1,
    hints: [`27 · 10<sup>3</sup> ± %5`],
    steps: [`27 000 ohm, sapma 1350 → 25 650 ile 28 350 arası`, `Yalnız <b>2,6 · 10<sup>4</sup></b> aralıkta`],
    answer: `Cevap: <b>B</b>`
  },
  {
    no: 73, konu: T4,
    q: `<p>A sahası 30 m × 20 m (12 oyuncu), B sahası 18 m × 9 m (6 oyuncu), C sahası 24 m × 11 m (4 oyuncu). Oyuncu başına düşen alanlar cm² olarak hesaplanıyor. (1 m² = 10<sup>4</sup> cm²)</p><p class="ask">Hangisi bulunan değerlerden biri <u>değildir</u>?</p>`,
    opts: ['5 · 10<sup>5</sup>', '2,7 · 10<sup>5</sup>', '6,6 · 10<sup>5</sup>', '1,62 · 10<sup>6</sup>'], ans: 3,
    hints: [`Alanı oyuncu sayısına bölmeyi unutma.`],
    steps: [`A 600/12 = 50 m² · B 162/6 = 27 m² · C 264/4 = 66 m²`, `cm²: 5 · 10<sup>5</sup>, 2,7 · 10<sup>5</sup>, 6,6 · 10<sup>5</sup> → 1,62 · 10<sup>6</sup> (B'nin tüm alanı) bulunmaz`],
    answer: `Cevap: <b>D</b>`
  },
  {
    no: 74, konu: T4,
    q: `<p>60 yıl önce kişi başı tarım alanı 3,2 · 10<sup>6</sup> m²'ydi. Nüfus her 20 yılda 2 katına çıkarken tarım alanı her 30 yılda yarıya inmiştir.</p><p class="ask">Bugün kişi başı tarım alanı kaç m²'dir?</p>`,
    opts: ['10<sup>5</sup>', '2 · 10<sup>5</sup>', '4 · 10<sup>5</sup>', '8 · 10<sup>5</sup>'], ans: 0,
    hints: [`Nüfus ×8, alan ×${F(1, 4)}`],
    steps: [`Kişi başı ×${F(1, 32)}`, `3,2 · 10<sup>6</sup> / 32 = <b>10<sup>5</sup></b>`],
    answer: `Cevap: <b>A</b>`
  },
  {
    no: 75, konu: T4,
    q: `<p>Her birinde 10 bilye olan 5 küre, ×10<sup>1</sup>, ×10<sup>0</sup>, ×10<sup>−1</sup>, ×10<sup>−2</sup>, ×10<sup>−3</sup> etiketli kutulara en fazla 10'ar bilye düşürüyor. Bilye sayıları katsayı olarak yazılıp toplanınca 10,1 elde ediliyor.</p><p class="ask">Düşen bilye sayısı <u>en fazla</u> kaçtır?</p>`,
    opts: ['20', '29', '38', '47'], ans: 2,
    hints: [`Küçük basamaklara 10 bilye koymak bir üst basamağa 1 eklemektir.`],
    steps: [`10<sup>−3</sup>: 10 · 10<sup>−2</sup>: 9 · 10<sup>−1</sup>: 10 · 10<sup>0</sup>: 9 · 10<sup>1</sup>: 0`, `0,01 + 0,09 + 1 + 9 = 10,1 ✓ → <b>38</b>`],
    answer: `Cevap: <b>C</b>`
  },
  {
    no: 76, konu: T5,
    q: `<p>Uzun kenarı 3 ile 4 m arasında olan bir tarlaya iki boru döşeniyor: birinde 30 cm, diğerinde 45 cm arayla damlatıcı var; uçlarda damlatıcı yok. Her damlatıcı 20 saniyede 0,1 L su akıtıyor.</p><p class="ask">1 saatte akan su kaç mL'dir?</p>`,
    opts: ['3,24 · 10<sup>5</sup>', '3,96 · 10<sup>5</sup>', '1,8 · 10<sup>4</sup>', '3,24 · 10<sup>3</sup>'], ans: 0,
    hints: [`EKOK(30, 45) = 90`],
    steps: [`Boru boyu 360 cm → 11 + 7 = 18 damlatıcı`, `Saatte 180 · 0,1 = 18 L → 18 · 18 = 324 L = <b>3,24 · 10<sup>5</sup> mL</b>`],
    answer: `Cevap: <b>A</b>`,
    trap: `Uçları da sayarsan 22 damlatıcı → 3,96 · 10<sup>5</sup> (B).`
  },
  {
    no: 77, konu: T5,
    q: `<p>A = 3015 · 10<sup>x</sup>, B = 0,4 · 10<sup>x+3</sup>. Ali ve Ege B'den büyük, A'dan küçük birer sayı seçiyor. Ali'nin sayısı 3 · 10<sup>15</sup>'tir.</p><p class="ask">Ege'nin sayısı hangisi olabilir?</p>`,
    opts: ['3,02 · 10<sup>15</sup>', '35 · 10<sup>14</sup>', '0,5 · 10<sup>15</sup>', '3,9 · 10<sup>14</sup>'], ans: 2,
    hints: [`A = 3,015 · 10<sup>x+3</sup>, B = 4 · 10<sup>x+2</sup>`],
    steps: [`B &lt; 3 · 10<sup>15</sup> &lt; A → x = 12: A = 3,015 · 10<sup>15</sup>, B = 4 · 10<sup>14</sup>`, `0,5 · 10<sup>15</sup> = 5 · 10<sup>14</sup> arada ✓ (3,02 · 10<sup>15</sup> > A)`],
    answer: `Cevap: <b>C</b>`
  },
  {
    no: 78, konu: T5,
    q: `<p>Mavi = magenta + cyan, kırmızı = magenta + sarı, yeşil = cyan + sarı, siyah = magenta + sarı + cyan (eşit hacimler). 6 m × 6 m duvar: solda A (3 × 6), sağ üstte kare B (1 × 1) ve yanında C (2 × 1), altında D (3 × 5). Her bölge farklı renge, m² başına 2 · 10<sup>−7</sup> m³ boyayla boyanacak.</p><p class="ask">En az sarı boya kullanılırsa sarı boya kaç m³ olur?</p>`,
    opts: ['1,3 · 10<sup>−6</sup>', '2,6 · 10<sup>−6</sup>', '1,8 · 10<sup>−6</sup>', '3,9 · 10<sup>−6</sup>'], ans: 0,
    hints: [`Mavide sarı yok; siyahta ${F(1, 3)}, kırmızı ve yeşilde ${F(1, 2)}.`],
    steps: [`Alanlar: A 18, B 1, C 2, D 15`, `A mavi, D siyah, B ve C kırmızı/yeşil: 15/3 + 3/2 = 6,5 m²`, `6,5 · 2 · 10<sup>−7</sup> = <b>1,3 · 10<sup>−6</sup></b>`],
    answer: `Cevap: <b>A</b>`
  },
  {
    no: 79, konu: T5,
    q: `<p>Bir ağaç saatte ortalama 2,4 kg karbondioksit emiyor. 5 milyon ağaç bir günde (24 saat) kaç ton emer? (1 ton = 10<sup>3</sup> kg)</p>`,
    opts: ['2,88 · 10<sup>5</sup>', '2,88 · 10<sup>8</sup>', '1,2 · 10<sup>4</sup>', '2,88 · 10<sup>4</sup>'], ans: 0,
    hints: [`5 milyon = 5 · 10<sup>6</sup>`],
    steps: [`5 · 10<sup>6</sup> · 2,4 · 24 = 2,88 · 10<sup>8</sup> kg`, `= <b>2,88 · 10<sup>5</sup> ton</b>`],
    answer: `Cevap: <b>A</b>`
  },
  {
    no: 80, konu: T5,
    q: `<p>Dikdörtgenler prizması biçimli bir buzdağının su üstündeki kısmı 800 m × 500 m × 40 m'dir ve buzdağının %10'unu oluşturur.</p><p class="ask">Buzdağının tamamının hacmi kaç m³'tür?</p>`,
    opts: ['1,6 · 10<sup>7</sup>', '1,6 · 10<sup>8</sup>', '8 · 10<sup>7</sup>', '1,6 · 10<sup>9</sup>'], ans: 1,
    hints: [`Görünen kısım tamamın ${F(1, 10)}'u.`],
    steps: [`Görünen: 800 · 500 · 40 = 1,6 · 10<sup>7</sup>`, `Tamamı: 10 katı = <b>1,6 · 10<sup>8</sup></b>`],
    answer: `Cevap: <b>B</b>`
  }
  );
})();
