// MEB örnek sorularına benzer, yeni yazılmış sorular 1–20. Her soru aynı numaralı örnek sorunun mantığını izler.
window.BENZER_ORNEK = [];
BENZER_ORNEK.push(
  {
    no: 1, konu: 'Tam sayı kuvvetleri',
    q: `<p>Sarı ip 96 cm, mavi ip 270 cm, kırmızı ip 250 cm'dir. Her ip kendi içinde eş parçalara bölünecek; sarının parçaları 2'nin, mavinin parçaları 3'ün, kırmızının parçaları 5'in pozitif tam sayı kuvveti uzunluğunda olacaktır.</p><p class="ask">Toplam <u>en az</u> kaç parça elde edilir?</p>`,
    opts: ['5', '10', '12', '15'], ans: 3,
    hints: [`Her ip için ipi tam bölen en büyük kuvveti bul.`],
    steps: [`96 = 2<sup>5</sup> · 3 → 32 cm'lik 3 parça`, `270 = 3<sup>3</sup> · 10 → 27 cm'lik 10 parça · 250 = 5<sup>3</sup> · 2 → 125 cm'lik 2 parça`, `Toplam 3 + 10 + 2 = <b>15</b>`],
    answer: `En az 15 parça. Cevap: <b>D</b>`
  },
  {
    no: 2, konu: 'Tam sayı kuvvetleri',
    q: `<p>Üç haneli bir şifrede ilk haneye bir rakam, son iki haneye bu rakamın küpü yazılıyor (küp tek basamaklıysa başına 0 konuyor).</p><p class="ask">Şifrenin son rakamı 7 olduğuna göre ilk rakamı kaçtır?</p>`,
    opts: ['1', '2', '3', '4'], ans: 2,
    hints: [`Küpü iki basamağa sığan rakamlar: 1, 2, 3, 4.`],
    steps: [`1 → 01 · 2 → 08 · 3 → <b>27</b> · 4 → 64`, `Son rakamı 7 olan: <b>3</b> (şifre 327)`],
    answer: `İlk rakam 3. Cevap: <b>C</b>`
  },
  {
    no: 3, konu: 'Tam sayı kuvvetleri',
    q: `<p>5 haneli barkodlarda rakamlar (0 veya 1) <b>sağdan sola</b> sırasıyla 2<sup>0</sup>, 2<sup>1</sup>, 2<sup>2</sup>, 2<sup>3</sup>, 2<sup>4</sup> ile çarpılıp toplanarak takip numarası bulunuyor.</p><p class="ask">Takip numarası 22 olan barkod hangisidir?</p>`,
    opts: ['1 1 0 1 0', '1 0 1 0 1', '1 0 1 1 0', '0 1 1 1 0'], ans: 2,
    hints: [`22'yi 16, 8, 4, 2, 1'in toplamı olarak yaz.`],
    steps: [`22 = 16 + 4 + 2 → 2<sup>4</sup>, 2<sup>2</sup>, 2<sup>1</sup>`, `Soldan: 2<sup>4</sup>→1, 2<sup>3</sup>→0, 2<sup>2</sup>→1, 2<sup>1</sup>→1, 2<sup>0</sup>→0 → <b>1 0 1 1 0</b>`],
    answer: `Cevap: <b>C</b>`
  },
  {
    no: 4, konu: 'Tam sayı kuvvetleri',
    q: `<p>Bir oyuncağın yarıçapları küçükten büyüğe K, L, M olan üç tekeri vardır. M tekeri 1 tur attığında diğer tekerlerin tur sayıları 3'ün doğal sayı kuvvetidir.</p><p class="ask">K tekeri 3<sup>6</sup> tur attığında M tekerinin tur sayısı <u>en fazla</u> kaçtır?</p>`,
    opts: ['9', '27', '81', '243'], ans: 2,
    hints: [`L, M'den çok; K, L'den çok döner.`],
    steps: [`M 1 tur → L en az 3, K en az 9 tur → K, M'nin en az 3<sup>2</sup> katı döner`, `M en fazla 3<sup>6</sup> / 3<sup>2</sup> = 3<sup>4</sup> = <b>81</b>`],
    answer: `81 tur. Cevap: <b>C</b>`
  },
  {
    no: 5, konu: 'Tam sayı kuvvetleri',
    q: `<p>Kenarı 50 cm'den kısa kare bir karton yatay olarak 2 kez, dikey olarak 1 kez kesilerek eş dikdörtgenler elde ediliyor. Dikdörtgenlerin bir kenarı 2'nin, diğer kenarı 6'nın pozitif tam sayı kuvvetidir.</p><p class="ask">Bir dikdörtgenin çevresi kaç cm'dir?</p>`,
    opts: ['10', '12', '16', '20'], ans: 3,
    hints: [`2 yatay kesim 3 sıra, 1 dikey kesim 2 sütun yapar.`],
    steps: [`Dikdörtgen s/3 × s/2. s/2 = 6<sup>m</sup>, s/3 = 2<sup>n</sup> → 2 · 6<sup>m</sup> = 3 · 2<sup>n</sup> → m = 1, n = 2 → s = 12`, `Dikdörtgen 4 × 6 → çevre <b>20</b>`],
    answer: `20 cm. Cevap: <b>D</b>`
  },
  {
    no: 6, konu: 'Tam sayı kuvvetleri',
    q: `<p>Kenarı 2<sup>4</sup> cm olan kare bir kartonun üstünden ve altından kısa kenarı 2'nin pozitif tam sayı kuvveti olan iki eş şerit kesiliyor. Eş şeritler ve ortadaki parça ayrı ayrı, kenarı en büyük olan eş karelere bölünüyor.</p><p class="ask">Şeritlerden elde edilen bir karenin kenarı ile ortadaki parçadan elde edilen bir karenin kenarının toplamı hangisi olabilir?</p>`,
    opts: ['8', '10', '12', '14'], ans: 2,
    hints: [`Şerit kalınlığı h = 2 veya 4 olabilir.`],
    steps: [`h = 2: orta 16 × 12 → EBOB 4 → 2 + 4 = 6`, `h = 4: orta 16 × 8 → EBOB 8 → 4 + 8 = <b>12</b>`],
    answer: `12 olabilir. Cevap: <b>C</b>`
  },
  {
    no: 7, konu: 'Tam sayı kuvvetleri',
    q: `<p>Kırmızı boncuklar 3 g, beyaz boncuklar 9 g'dır. 1 metresi 4 g olan ipten 50 cm kullanılarak 110 g'lık bir kolye yapılıyor. Kırmızı boncukların toplam kütlesi 3'ün, beyaz boncukların toplam kütlesi 9'un pozitif tam sayı kuvvetidir.</p><p class="ask">Kolyede kaç boncuk vardır?</p>`,
    opts: ['12', '18', '24', '36'], ans: 1,
    hints: [`Boncukların toplam kütlesi 110 − 2 = 108 g.`],
    steps: [`3<sup>a</sup> + 9<sup>b</sup> = 108: 9<sup>b</sup> = 81 → 3<sup>a</sup> = 27 ✓ (9<sup>b</sup> = 9 → 99 olmaz)`, `27 / 3 = 9 kırmızı, 81 / 9 = 9 beyaz → <b>18</b>`],
    answer: `18 boncuk. Cevap: <b>B</b>`
  },
  {
    no: 8, konu: 'Tam sayı kuvvetleri',
    q: `<p>−2, −1, 0, 1, 2 sayılarından ikisi biri taban biri üs olacak şekilde seçilerek üslü ifadeler oluşturuluyor. Emir −1 ve 2 ile bir ifade oluşturuyor. Tuna değeri Emir'inkinden büyük olan ifadeleri oluşturuyor.</p><p class="ask">Tuna'nın oluşturabileceği ifade sayısı <u>en az</u> kaçtır?</p>`,
    opts: ['5', '4', '3', '2'], ans: 3,
    hints: [`Emir'in ifadesi 2<sup>−1</sup> ya da (−1)<sup>2</sup>.`],
    steps: [`Emir: 2<sup>−1</sup> = ${F(1, 2)} veya (−1)<sup>2</sup> = 1 → en az için Emir = 1`, `1'den büyük: 2<sup>1</sup> = 2, (−2)<sup>2</sup> = 4 → <b>2</b> ifade`],
    answer: `En az 2. Cevap: <b>D</b>`
  },
  {
    no: 9, konu: 'Tam sayı kuvvetleri',
    q: `<p>Kartlar: −4, −2, +3, 0, −1, +2. En küçük değerli üslü ifade oluşacak şekilde 2 kart seçiliyor; kalan kartlardan biri taban, biri üs olacak şekilde bir ifade daha oluşturuluyor.</p><p class="ask">İkinci ifadenin değerinin 1 olduğu kaç durum vardır?</p>`,
    opts: ['3', '4', '5', '6'], ans: 2,
    hints: [`En küçük ifade (−4)<sup>3</sup>.`],
    steps: [`(−4)<sup>3</sup> = −64 → kalan −2, 0, −1, 2`, `(−2)<sup>0</sup>, (−1)<sup>0</sup>, 2<sup>0</sup>, (−1)<sup>2</sup>, (−1)<sup>−2</sup> → <b>5</b>`],
    answer: `5 durum. Cevap: <b>C</b>`
  },
  {
    no: 10, konu: 'Tam sayı kuvvetleri',
    q: `<p>Doğal sayı kodlamasında A = 2<sup>0</sup>, B = 2<sup>1</sup>, C = 2<sup>2</sup>, Ç = 2<sup>3</sup>, D = 2<sup>4</sup>, E = 2<sup>5</sup>, F = 2<sup>6</sup>, G = 2<sup>7</sup>'dir. Toplamları 150 olan iki sayıdan birinin kodu “BDE”dir.</p><p class="ask">Diğer sayının kodu hangisidir?</p>`,
    opts: ['CEF', 'CDF', 'BEF', 'CEG'], ans: 0,
    hints: [`BDE = 2 + 16 + 32`],
    steps: [`BDE = 50 → diğeri 100 = 64 + 32 + 4`, `2<sup>2</sup> → C, 2<sup>5</sup> → E, 2<sup>6</sup> → F → <b>CEF</b>`],
    answer: `Cevap: <b>A</b>`
  },
  {
    no: 11, konu: 'Tam sayı kuvvetleri',
    q: `<p>Üst üste duran iki cetvelde sarı cetveldeki sayı taban, hizasındaki mavi cetveldeki sayı üs olarak alınıyor. Şu an oluşan ifadeler 0<sup>1</sup>, 1<sup>2</sup>, 2<sup>3</sup>, 3<sup>4</sup>, 4<sup>5</sup>'tir. Cetvellerden biri sola, diğeri sağa 1'er cm kaydırılıp yeni ifadeler oluşturuluyor.</p><p class="ask">Hangi sayı yeni ifadelerden birine eşit olabilir?</p>`,
    opts: ['27', '16', '64', '81'], ans: 2,
    hints: [`Cetveller birbirine göre 2 cm kayar; iki yönü de dene.`],
    steps: [`Şimdi sarı k ↔ mavi k + 1. Kayınca: sarı k ↔ mavi k + 3 (0<sup>3</sup>, 1<sup>4</sup>, 2<sup>5</sup> = 32 …) veya sarı k ↔ mavi k − 1 (1<sup>0</sup>, 2<sup>1</sup>, 3<sup>2</sup>, <b>4<sup>3</sup> = 64</b>, 5<sup>4</sup>)`, `Şıklarda olan: <b>64</b> (81 = 3<sup>4</sup> eski konumda)`],
    answer: `64. Cevap: <b>C</b>`
  },
  {
    no: 12, konu: 'Tam sayı kuvvetleri',
    q: `<p>Yalnız 1 TL'lik madenî para alan ve en fazla 30 para alabilen bir kumbara, içindeki para 2'nin pozitif tam sayı kuvveti olduğunda 1 sarı, 3'ün pozitif tam sayı kuvveti olduğunda 1 mavi top veriyor. Kumbara boşken para atılmaya başlanıyor.</p><p class="ask">Sarı top sayısı mavi top sayısından 2 fazla olduğuna göre kumbaradaki para <u>en çok</u> kaç TL'dir?</p>`,
    opts: ['8', '16', '24', '26'], ans: 3,
    hints: [`Sarı: 2, 4, 8, 16. Mavi: 3, 9, 27.`],
    steps: [`Mavi 2, sarı 4 → para 16 ile 26 arası (27'de 3. mavi düşer)`, `Mavi 3 için sarı 5 gerekir (32 TL, sığmaz) → en çok <b>26</b>`],
    answer: `26 TL. Cevap: <b>D</b>`
  },
  {
    no: 13, konu: 'Tam sayı kuvvetleri',
    q: `<p>Bir tabela açıldıktan sonra 1 dakika yanıyor; ardından 5'er dakikalık aralarla 2, 4, 8, … dakika (2'nin kuvvetleri) yanmaya devam ediyor. Tabela 20.00'de açılıp 02.00'de kapatılıyor.</p><p class="ask">Tabela toplam kaç dakika yanmıştır?</p>`,
    opts: ['300', '310', '320', '330'], ans: 2,
    hints: [`20.00–02.00 = 360 dakika.`],
    steps: [`1 + 2 + … + 128 = 255 dakika yanma + 7 · 5 = 35 dakika ara → 290. dakika`, `5 dakika ara → 295'te 256'lık yanma başlar, 360'ta kesilir: 65 dakika`, `Toplam 255 + 65 = <b>320</b>`],
    answer: `320 dakika. Cevap: <b>C</b>`
  },
  {
    no: 14, konu: 'Tam sayı kuvvetleri',
    q: `<p>Altı katlı bir otelde oda numaraları 1. kat 101–125, 2. kat 201–225, …, 6. kat 601–625'tir. İki misafirin oda numaraları aynı doğal sayının farklı pozitif tam sayı kuvvetleridir.</p><p class="ask">Oda numaraları arasındaki fark kaçtır?</p>`,
    opts: ['384', '400', '500', '512'], ans: 2,
    hints: [`5'in kuvvetlerini dene.`],
    steps: [`125 = 5<sup>3</sup> ve 625 = 5<sup>4</sup> ikisi de oda numarası`, `Fark 625 − 125 = <b>500</b>`],
    answer: `500. Cevap: <b>C</b>`
  },
  {
    no: 15, konu: 'Tam sayı kuvvetleri',
    q: `<p>7 g'lık bir zincire 2<sup>3</sup> g'lık 3 boncuk ve 2<sup>−2</sup> g'lık 4 boncuk takılıyor.</p><p class="ask">Kolyenin kütlesi kaç gramdır?</p>`,
    opts: ['2<sup>5</sup>', '2<sup>4</sup> · 3', '5<sup>2</sup>', '2<sup>6</sup>'], ans: 0,
    hints: [`2<sup>−2</sup> = ${F(1, 4)}`],
    steps: [`7 + 3 · 8 + 4 · ${F(1, 4)} = 7 + 24 + 1 = 32`, `32 = <b>2<sup>5</sup></b>`],
    answer: `Cevap: <b>A</b>`
  },
  {
    no: 16, konu: 'Temel kurallar',
    q: `<p>2×2 tabloda aynı satırdaki ifadelerin kuvvetleri, aynı sütundaki ifadelerin tabanları eşittir. Sol üstte 3<sup>5</sup>, sağ altta 2<sup>3</sup> yazılıdır.</p><p class="ask">Boş bölmelere yazılacak ifadelerin çarpımı hangisidir?</p>`,
    opts: ['6<sup>8</sup>', '6<sup>3</sup> · 2<sup>2</sup>', '6<sup>5</sup>', '6<sup>3</sup> · 3<sup>2</sup>'], ans: 1,
    hints: [`Sağ üst: 1. satırın kuvveti, 2. sütunun tabanı.`],
    steps: [`Sağ üst 2<sup>5</sup>, sol alt 3<sup>3</sup>`, `2<sup>5</sup> · 3<sup>3</sup> = 2<sup>2</sup> · (2 · 3)<sup>3</sup> = <b>6<sup>3</sup> · 2<sup>2</sup></b>`],
    answer: `Cevap: <b>B</b>`
  },
  {
    no: 17, konu: 'Temel kurallar',
    q: `<p>3 m × 4 m'lik levhalar 3 × 3'lük kare ve 3 × 1'lik dikdörtgen olarak kesiliyor. 6 kare ve 12 dikdörtgen satılıyor; 1 m² fiyatı 48 TL'dir.</p><p class="ask">Gelir hangisidir?</p>`,
    opts: ['2<sup>5</sup> · 3<sup>3</sup> · 5', '2<sup>4</sup> · 3<sup>3</sup> · 5', '2<sup>5</sup> · 3<sup>2</sup> · 5', '2<sup>6</sup> · 3<sup>3</sup>'], ans: 0,
    hints: [`Satılan alan: 6 · 9 + 12 · 3`],
    steps: [`54 + 36 = 90 m² = 2 · 3<sup>2</sup> · 5 · 48 = 2<sup>4</sup> · 3`, `Gelir: 2<sup>5</sup> · 3<sup>3</sup> · 5 (= 4320 TL)`],
    answer: `Cevap: <b>A</b>`
  },
  {
    no: 18, konu: 'Temel kurallar',
    q: `<p class="ask">${F('12<sup>3</sup> · 3<sup>−2</sup>', '2<sup>−1</sup> · 4<sup>2</sup>')} işleminin sonucu hangisidir?</p>`,
    opts: ['2<sup>3</sup> · 3', '2<sup>5</sup> · 3', '2<sup>3</sup> · 3<sup>−1</sup>', '2<sup>9</sup> · 3'], ans: 0,
    hints: [`12<sup>3</sup> = 2<sup>6</sup> · 3<sup>3</sup>`],
    steps: [`Pay: 2<sup>6</sup> · 3<sup>3</sup> · 3<sup>−2</sup> = 2<sup>6</sup> · 3 · Payda: 2<sup>−1</sup> · 2<sup>4</sup> = 2<sup>3</sup>`, `Sonuç: <b>2<sup>3</sup> · 3</b> = 24`],
    answer: `Cevap: <b>A</b>`
  },
  {
    no: 19, konu: 'Temel kurallar',
    q: `<p class="ask">${F('27<sup>5</sup> · 9<sup>2</sup>', '81<sup>3</sup>')} işleminin sonucu hangisidir?</p>`,
    opts: ['3<sup>4</sup>', '3<sup>5</sup>', '3<sup>6</sup>', '3<sup>7</sup>'], ans: 3,
    hints: [`Hepsini 3'ün kuvveti yap.`],
    steps: [`3<sup>15</sup> · 3<sup>4</sup> / 3<sup>12</sup> = <b>3<sup>7</sup></b>`],
    answer: `Cevap: <b>D</b>`
  },
  {
    no: 20, konu: 'Temel kurallar',
    q: `<p>Alanı 4<sup>7</sup> m² olan bir arazi 16 eş dikdörtgen parçaya ayrılıyor. Her parçanın uzun kenarı 16<sup>2</sup> m'dir.</p><p class="ask">Kısa kenar kaç metredir?</p>`,
    opts: ['2<sup>2</sup>', '2<sup>3</sup>', '2<sup>4</sup>', '2<sup>6</sup>'], ans: 0,
    hints: [`4<sup>7</sup> = 2<sup>14</sup>, 16<sup>2</sup> = 2<sup>8</sup>`],
    steps: [`Bir parça: 2<sup>14</sup> / 2<sup>4</sup> = 2<sup>10</sup>`, `Kısa kenar: 2<sup>10</sup> / 2<sup>8</sup> = <b>2<sup>2</sup></b>`],
    answer: `Cevap: <b>A</b>`
  }
);
