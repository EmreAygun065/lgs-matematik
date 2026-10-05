// MEB örnek sorularına benzer, yeni yazılmış sorular 41–60.
(function () {
  const T2 = 'Temel kurallar', T3 = 'Ondalık çözümleme', T4 = "10'un kuvvetleri";
  const ekran = (gise, sira) => {
    const hane = c => `<span class="seg ${c === '_' ? 'off' : ''}">${c === '_' ? '8' : c}</span>`;
    return `<span class="ekran"><small>Gişe</small>${[...gise].map(hane).join('')}<small>Sıra</small>${[...sira].map(hane).join('')}</span>`;
  };

  BENZER_ORNEK.push(
  {
    no: 41, konu: T2,
    q: `<p>Aylık bir derginin her sayısı 2<sup>7</sup> MB'tır. İki yıllık sayıların tamamı 4 GB'lık boş bir belleğe yükleniyor. (1 GB = 2<sup>10</sup> MB)</p><p class="ask">Bellekte kaç MB boş alan kalır?</p>`,
    opts: ['2<sup>7</sup>', '2<sup>8</sup>', '2<sup>9</sup>', '2<sup>10</sup>'], ans: 3,
    hints: [`2 yıl = 24 sayı = 3 · 2<sup>3</sup>`],
    steps: [`Dergiler: 3 · 2<sup>3</sup> · 2<sup>7</sup> = 3 · 2<sup>10</sup>; bellek 2<sup>12</sup> = 4 · 2<sup>10</sup>`, `Boş: 4 · 2<sup>10</sup> − 3 · 2<sup>10</sup> = <b>2<sup>10</sup></b>`],
    answer: `Cevap: <b>D</b>`
  },
  {
    no: 42, konu: T2,
    q: `<p>5×5 kartonun sol üst köşesi sarı, diğer üç köşesi mavidir. Sarıya 6<sup>8</sup> yazılıyor. 1. satırda tabanlar aynı, üsler soldan sağa ardışık azalıyor. Diğer karelerde her sütunda üsler aynı, tabanlar yukarıdan aşağı ardışık azalıyor.</p><p class="ask">Mavi karelerdeki ifadelerin çarpımı hangisidir?</p>`,
    opts: ['48<sup>4</sup>', '12<sup>8</sup>', '24<sup>4</sup>', '6<sup>16</sup>'], ans: 0,
    hints: [`Sağ üst: 6<sup>4</sup>. Sütunlarda taban 6'dan 2'ye iner.`],
    steps: [`Sağ üst 6<sup>4</sup>, sol alt 2<sup>8</sup>, sağ alt 2<sup>4</sup>`, `6<sup>4</sup> · 2<sup>12</sup> = 2<sup>16</sup> · 3<sup>4</sup> = (2<sup>4</sup> · 3)<sup>4</sup> = <b>48<sup>4</sup></b>`],
    answer: `Cevap: <b>A</b>`
  },
  {
    no: 43, konu: T2,
    q: tablo([['Saat', 'İş', '1 dakikada tüketim (mAh)'], ['09.00 – 10.04', 'Video', '2<sup>2</sup>'], ['10.04 – 11.08', 'Bekleme', '2<sup>1</sup>'], ['11.08 – 11.40', 'Oyun', '2<sup>2</sup>']])
      + `<p>Tablet tam doluyken başlayıp tamamen boşalana kadar yukarıdaki işler yapılmıştır.</p><p class="ask">Batarya kapasitesi kaç mAh'tir?</p>`,
    opts: ['2<sup>8</sup>', '2<sup>9</sup>', '2<sup>10</sup>', '2<sup>22</sup>'], ans: 1,
    hints: [`Süreler 64, 64 ve 32 dakika.`],
    steps: [`Video: 2<sup>6</sup> dk · 2<sup>2</sup> = 2<sup>8</sup><br>Bekleme: 2<sup>6</sup> dk · 2<sup>1</sup> = 2<sup>7</sup><br>Oyun: 2<sup>5</sup> dk · 2<sup>2</sup> = 2<sup>7</sup>`,`2<sup>8</sup> + 2<sup>7</sup> + 2<sup>7</sup> = 2<sup>8</sup> + 2<sup>8</sup> = <b>2<sup>9</sup></b>`],
    answer: `Cevap: <b>B</b>`
  },
  {
    no: 44, konu: T2,
    q: `<p>a<sup>−4</sup>, a<sup>−2</sup>, a<sup>1</sup>, a<sup>3</sup>, a<sup>5</sup>, a<sup>7</sup> ifadeleri, 3 satır ve 3 sütun başındaki mavi hücrelere yazılıyor. Köşegendeki A, B, C hücreleri, kendi satır ve sütunundaki mavi ifadelerin çarpımıdır. A · B = a<sup>6</sup>'dır.</p><p class="ask">C hücresindeki ifade hangisidir?</p>`,
    opts: ['a', 'a<sup>2</sup>', 'a<sup>3</sup>', 'a<sup>4</sup>'], ans: 3,
    hints: [`A · B · C tüm mavi ifadelerin çarpımıdır.`],
    steps: [`Tüm maviler: a<sup>−4 − 2 + 1 + 3 + 5 + 7</sup> = a<sup>10</sup>`, `C = a<sup>10</sup> / a<sup>6</sup> = <b>a<sup>4</sup></b>`],
    answer: `Cevap: <b>D</b>`
  },
  {
    no: 45, konu: T2,
    q: `<p>Bir etkinlikte 5000'den az adım atanlar için her 5<sup>3</sup> adımda, 5000'den fazla atanlar için her 5<sup>2</sup> adımda bir paket bağışlanıyor. Esra 3000 adım atmış; Başak 5000'den fazla adım atmıştır.</p><p class="ask">Başak adına yapılan bağış Esra'nınkinin 10 katı ise Başak <u>en az</u> kaç adım atmıştır?</p>`,
    opts: ['2<sup>4</sup> · 3 · 5<sup>3</sup>', '2<sup>3</sup> · 3 · 5<sup>3</sup>', '2<sup>4</sup> · 3 · 5<sup>4</sup>', '2<sup>5</sup> · 3 · 5<sup>3</sup>'], ans: 0,
    hints: [`Esra: 3000 / 125 paket.`],
    steps: [`Esra 24 paket → Başak 240 paket`, `240 · 25 = 6000 = <b>2<sup>4</sup> · 3 · 5<sup>3</sup></b>`],
    answer: `Cevap: <b>A</b>`
  },
  {
    no: 46, konu: T2,
    q: `<p>İki tüpten birine 2<sup>8</sup>, diğerine 4<sup>5</sup> bakteri konuyor. Bir saatte I. tüpteki bakteri 2 katına, II. tüpteki 16 katına çıkıyor. Sonra I. tüpün yarısı, II. tüpün ${F(1, 8)}'i alınıyor.</p><p class="ask">II. tüpten alınan, I. tüpten alınanın <u>en az</u> kaç katıdır?</p>`,
    opts: [F(1, 8), F(1, 4), F(1, 2), '8'], ans: 2,
    hints: [`Hangi tüpe hangisinin konduğu belli değil.`],
    steps: [`I: ×2 · ${F(1, 2)} = ×1 · II: ×16 · ${F(1, 8)} = ×2`, `I = 2<sup>8</sup>, II = 2<sup>10</sup> → oran 2<sup>11</sup>/2<sup>8</sup> = 8 · I = 2<sup>10</sup>, II = 2<sup>8</sup> → 2<sup>9</sup>/2<sup>10</sup> = <b>${F(1, 2)}</b>`],
    answer: `En az ${F(1, 2)}. Cevap: <b>C</b>`
  },
  {
    no: 47, konu: T2,
    q: `<p>3×3 kartın kareleri: 1. satır 4<sup>6</sup>, 9<sup>5</sup>, 8<sup>4</sup> · 2. satır 3<sup>9</sup>, 6<sup>5</sup>, 2<sup>7</sup> · 3. satır 5<sup>6</sup>, 7<sup>2</sup>, 25<sup>3</sup>. Üzerine, 3×2'lik dikdörtgenin bir uzun kenarının ortasına bir kare eklenmiş 7 karelik bir kart konuyor; sadece iki ifade görünüyor.</p><p class="ask">Görünen ifadelerin çarpımı <u>en çok</u> kaçtır?</p>`,
    opts: ['2<sup>24</sup>', '5<sup>12</sup>', '3<sup>18</sup>', '10<sup>12</sup>'], ans: 1,
    hints: [`Açıkta kalanlar her zaman bir kenarın iki köşesidir.`],
    steps: [`Köşeler: 4<sup>6</sup> = 2<sup>12</sup>, 8<sup>4</sup> = 2<sup>12</sup>, 5<sup>6</sup>, 25<sup>3</sup> = 5<sup>6</sup>`, `Üst 2<sup>24</sup> ≈ 1,7 · 10<sup>7</sup> · alt <b>5<sup>12</sup></b> ≈ 2,4 · 10<sup>8</sup> · yanlar 2<sup>12</sup> · 5<sup>6</sup> = 6,4 · 10<sup>7</sup>`],
    answer: `Cevap: <b>B</b>`
  },
  {
    no: 48, konu: T2,
    q: `<p>28 soruluk bir sınavda puan = 5 · (doğru − yanlış / 4). Ali'nin doğru, yanlış ve boş sayılarının her biri 2'nin doğal sayı kuvvetidir.</p><p class="ask">Ali'nin puanı <u>en çok</u> kaçtır?</p>`,
    opts: ['3 · 5<sup>2</sup>', '2 · 5 · 7', '2<sup>4</sup> · 5', '2<sup>2</sup> · 3 · 5'], ans: 0,
    hints: [`Toplamı 28 olan üç 2 kuvveti: 16 + 8 + 4`],
    steps: [`D = 16, Y = 4: 5 · (16 − 1) = 75`, `75 = <b>3 · 5<sup>2</sup></b> (D = 16, Y = 8 → 70)`],
    answer: `Cevap: <b>A</b>`
  },
  {
    no: 49, konu: T2,
    q: `<p>2<sup>5</sup> kâğıt üst üste konup ortadan katlanarak defter yapılıyor. Sayfalara dıştan başlayarak 1, 2, 2<sup>2</sup>, 2<sup>3</sup>, … numaraları veriliyor.</p><p class="ask">Ortadaki kâğıdın 4 sayfa numarasının çarpımı hangisidir?</p>`,
    opts: ['4<sup>127</sup>', '4<sup>128</sup>', '2<sup>256</sup>', '8<sup>85</sup>'], ans: 0,
    hints: [`32 kâğıt → 64 yaprak → 128 sayfa.`],
    steps: [`Ortadaki kâğıt: 63, 64, 65, 66. sayfalar → 2<sup>62</sup>, 2<sup>63</sup>, 2<sup>64</sup>, 2<sup>65</sup>`, `2<sup>254</sup> = <b>4<sup>127</sup></b>`],
    answer: `Cevap: <b>A</b>`
  },
  {
    no: 50, konu: T2,
    q: `<p>Yaş koza kururken kütlesinin %75'ini kaybediyor; kuru kozanın %50'si iplik oluyor. Fabrika 2<sup>10</sup> kg yaş ve 2<sup>8</sup> kg kuru koza alıp hepsini ipliğe çeviriyor ve ipliğin kilosunu 2<sup>12</sup> TL'den satıyor.</p><p class="ask">Gelir kaç TL'dir?</p>`,
    opts: ['16<sup>5</sup>', '8<sup>6</sup>', '4<sup>9</sup>', '2<sup>18</sup>'], ans: 0,
    hints: [`%75 kaybedilirse ${F(1, 4)}'ü kalır.`],
    steps: [`2<sup>10</sup> / 4 = 2<sup>8</sup> kuru; + 2<sup>8</sup> = 2<sup>9</sup>; iplik 2<sup>8</sup> kg`, `2<sup>8</sup> · 2<sup>12</sup> = 2<sup>20</sup> = <b>16<sup>5</sup></b>`],
    answer: `Cevap: <b>A</b>`
  },
  {
    no: 51, konu: T2,
    q: `<p>Kenarı 5 · 10<sup>−2</sup> m, kalınlığı 2 · 10<sup>−4</sup> m olan kare kâğıtlardan 4 · 10<sup>−2</sup> m yüksekliğinde bir bloknot yapılıyor. Kâğıdın 1 m²'si 64 g'dır.</p><p class="ask">Bloknot kaç gramdır?</p>`,
    opts: ['2<sup>4</sup>', '2<sup>5</sup>', '2<sup>6</sup>', '2<sup>7</sup>'], ans: 1,
    hints: [`Kâğıt sayısı = yükseklik / kalınlık`],
    steps: [`200 kâğıt · 25 · 10<sup>−4</sup> m² = 0,5 m²`, `0,5 · 64 = 32 = <b>2<sup>5</sup></b>`],
    answer: `Cevap: <b>B</b>`
  },
  {
    no: 52, konu: T2,
    q: `<p>Her çubuğunda 8 boncuk olan 4 çubuklu bir abaküste, soldaki boncuk sayısının −1 katı taban, sağdaki boncuk sayısı üs olacak şekilde, değeri negatif 4 farklı ifade oluşturuluyor.</p><p class="ask">En küçük ve en büyük ifadenin çarpımı hangisidir?</p>`,
    opts: ['5<sup>3</sup>', '3<sup>5</sup>', '7<sup>3</sup>', '15<sup>3</sup>'], ans: 1,
    hints: [`(−L)<sup>8 − L</sup> negatif → L tek.`],
    steps: [`(−1)<sup>7</sup> = −1 · (−3)<sup>5</sup> = −243 · (−5)<sup>3</sup> = −125 · (−7)<sup>1</sup> = −7`, `(−243) · (−1) = 243 = <b>3<sup>5</sup></b>`],
    answer: `Cevap: <b>B</b>`
  },
  {
    no: 53, konu: T2,
    q: `<p>1. ünitede şişe dolumu 11 sn, şişe değişimi 4 sn; 2. ünitede dolum 14 sn, değişim 6 sn sürüyor. İki üniteye aynı anda şişe giriyor.</p><p class="ask">Bundan sonra 64. kez aynı anda şişe girene kadar kaç dakika geçer?</p>`,
    opts: ['2<sup>3</sup>', '2<sup>4</sup>', '2<sup>5</sup>', '4<sup>3</sup>'], ans: 3,
    hints: [`Döngüler 15 sn ve 20 sn.`],
    steps: [`EKOK(15, 20) = 60 sn = 1 dakika`, `64 dakika = <b>4<sup>3</sup></b>`],
    answer: `Cevap: <b>D</b>`
  },
  {
    no: 54, konu: T3,
    q: tablo([['Boncuk', 'Kütle (g)'], ['Mavi', '2·10<sup>0</sup> + 5·10<sup>−1</sup>'], ['Yeşil', '1·10<sup>0</sup> + 2·10<sup>−1</sup> + 5·10<sup>−2</sup>'], ['Sarı', '7·10<sup>−1</sup> + 5·10<sup>−2</sup>'], ['Turuncu', '5·10<sup>−1</sup>']])
      + `<p>Her renkten en az bir boncukla 20 g'lık bir kolye yapılıyor.</p><p class="ask">Boncuk sayısı <u>en az</u> kaçtır?</p>`,
    opts: ['8', '10', '12', '14'], ans: 1,
    hints: [`Birer tane: 2,5 + 1,25 + 0,75 + 0,5 = 5 g`],
    steps: [`Kalan 15 g, en ağır boncuk 2,5 g → 6 mavi tam 15 g`, `4 + 6 = <b>10</b>`],
    answer: `Cevap: <b>B</b>`
  },
  {
    no: 55, konu: T3,
    q: `<p>Perde 3·10<sup>0</sup> + 4·10<sup>−1</sup> m, masa örtüsü 1·10<sup>0</sup> + 8·10<sup>−1</sup> + 5·10<sup>−2</sup> m, yastık 6·10<sup>−1</sup> m kumaş gerektiriyor. 2 perde, 1 masa örtüsü ve 4 yastık için 20 m kumaş alınıyor.</p><p class="ask">Kalan kumaşın çözümlenmiş hâli hangisidir?</p>`,
    opts: ['8·10<sup>0</sup> + 9·10<sup>−1</sup> + 5·10<sup>−2</sup>', '9·10<sup>0</sup> + 5·10<sup>−2</sup>', '8·10<sup>0</sup> + 5·10<sup>−1</sup> + 9·10<sup>−2</sup>', '1·10<sup>1</sup> + 1·10<sup>−1</sup>'], ans: 0, long: true,
    hints: [`Kullanılan: 6,8 + 1,85 + 2,4`],
    steps: [`Kullanılan 11,05 m → kalan 8,95 m`, `8,95 = <b>8·10<sup>0</sup> + 9·10<sup>−1</sup> + 5·10<sup>−2</sup></b>`],
    answer: `Cevap: <b>A</b>`
  },
  {
    no: 56, konu: T3,
    q: `<p>Eşit sayıda sütlü (3,056 g yağ) ve fındıklı (1,307 g yağ) gofret var. Yağ miktarını doğru çözümleyen öğrenciye o gofretten 1 tane veriliyor.</p><p>• 10 öğrenci: 3·10<sup>0</sup> + 5·10<sup>−2</sup> + 6·10<sup>−3</sup><br>• 7 öğrenci: 3·10<sup>0</sup> + 5·10<sup>−1</sup> + 6·10<sup>−2</sup><br>• 9 öğrenci: 1·10<sup>0</sup> + 3·10<sup>−1</sup> + 7·10<sup>−3</sup><br>• 5 öğrenci: 1·10<sup>0</sup> + 3·10<sup>−1</sup> + 7·10<sup>−2</sup></p><p class="ask">Sütlü gofretten 15 tane kaldığına göre kaç fındıklı gofret kalmıştır?</p>`,
    opts: ['14', '15', '16', '18'], ans: 2,
    hints: [`3,056'da onda birler basamağı 0.`],
    steps: [`Sütlü doğru: 10 öğrenci → başta 25 · Fındıklı doğru: 9 öğrenci`, `25 − 9 = <b>16</b>`],
    answer: `Cevap: <b>C</b>`
  },
  {
    no: 57, konu: T3,
    q: `<p>Sıramatik ekranında ondalık gösterimin tam kısmı gişe (2 hane), ondalık kısmı sıra (3 hane) numarasıdır. Arıza nedeniyle bazı haneler yanmıyor (gri). Sisteme 2·10<sup>1</sup> + 4·10<sup>−1</sup> + 1·10<sup>−3</sup> işleniyor.</p><p class="ask">Ekran görüntüsü hangisi olabilir?</p>`,
    opts: [ekran('_0', '41_'), ekran('_2', '4_1'), ekran('2_', '4_1'), ekran('2_', '_10')], ans: 2, long: true,
    hints: [`Sayı: 20,401`],
    steps: [`Gişe 20, sıra 401`, `C: gişe 2_, sıra 4_1 ✓ · A: sıra 41_ ✗ · B: gişe _2 ✗ · D: sıra _10 ✗`],
    answer: `Cevap: <b>C</b>`
  },
  {
    no: 58, konu: T3,
    q: tablo([['1. Bölge', '2. Bölge', '3. Bölge', '4. Bölge'], ['10<sup>0</sup> + 5·10<sup>−2</sup>', '10<sup>0</sup> + 4·10<sup>−2</sup> + 9·10<sup>−3</sup>', '10<sup>0</sup> + 5·10<sup>−3</sup>', '10<sup>0</sup> + 5·10<sup>−2</sup> + 1·10<sup>−3</sup>']])
      + `<p class="ask">Sinyal gücü en fazla olan bölge hangisidir?</p>`,
    opts: ['1. Bölge', '2. Bölge', '3. Bölge', '4. Bölge'], ans: 3,
    hints: [`Ondalık sayıya çevir.`],
    steps: [`1,05 · 1,049 · 1,005 · <b>1,051</b>`],
    answer: `Cevap: <b>D</b>`
  },
  {
    no: 59, konu: T3,
    q: `<p>150 TL ve üzeri alışverişte kargo ücretsizdir. Selin'in aldığı üç ürünün fiyatları (TL):</p>` + tablo([['Ürün', 'Fiyat (TL)'], ['1. ürün', '4·10<sup>1</sup> + 5·10<sup>0</sup> + 2·10<sup>−1</sup>'], ['2. ürün', '3·10<sup>1</sup> + 9·10<sup>−1</sup> + 9·10<sup>−2</sup>'], ['3. ürün', '5·10<sup>1</sup> + 2·10<sup>0</sup> + 5·10<sup>−2</sup>']]) + `<p> Bir ürün daha alıp kargo ödemiyor.</p><p class="ask">Dördüncü ürün <u>en az</u> kaç TL'dir?</p>`,
    opts: ['20,76', '21,24', '21,76', '22,24'], ans: 2,
    hints: [`İkinci üründe birler basamağı 0.`],
    steps: [`45,2 + 30,99 + 52,05 = 128,24`, `150 − 128,24 = <b>21,76</b>`],
    answer: `Cevap: <b>C</b>`
  },
  {
    no: 60, konu: T4,
    q: `<p>64 · 10<sup>x</sup> ile 125 · 10<sup>3</sup>'ün çarpımı 800'dür.</p><p class="ask">x kaçtır?</p>`,
    opts: ['−2', '−3', '−4', '−5'], ans: 2,
    hints: [`64 · 125 = 8000`],
    steps: [`8 · 10<sup>3</sup> · 10<sup>x + 3</sup> = 8 · 10<sup>2</sup>`, `x + 6 = 2 → <b>x = −4</b>`],
    answer: `Cevap: <b>C</b>`
  }
  );
})();
