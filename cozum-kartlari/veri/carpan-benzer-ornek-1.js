// MEB örnek sorularına benzer, yeni yazılmış sorular (Çarpanlar ve Katlar). Her soru aynı numaralı örnek sorunun mantığını izler.
// Sorular carpan-benzer-ornek-1.js … 4.js dosyalarında window.CK_BENZER_ORNEK dizisine eklenir. 1–20:
window.CK_BENZER_ORNEK = window.CK_BENZER_ORNEK || [];
window.CK_KONU = window.CK_KONU || { CA: 'Bir doğal sayının çarpanları', EB: 'EBOB ve EKOK', AA: 'Aralarında asal sayılar' };
(function () {
  const { CA, EB, AA } = CK_KONU;

  CK_BENZER_ORNEK.push(
  {
    no: 1, konu: CA,
    q: `<p>Kare bir kâğıt, kenarları doğal sayı olan üç bölgeye ayrılıyor: solda dikey bir A şeridi, sağ üstte B şeridi, sağ altta C karesi. A'nın alanı 48 cm²'dir.</p><p class="ask">B'nin alanı hangisi <u>olamaz</u>?</p>`,
    opts: ['12', '32', '39', '40'], ans: 3,
    hints: [`Kâğıdın kenarı s, A'nın eni a: s · a = 48; B = (s − a) · a.`],
    steps: [`(s, a): (48, 1), (24, 2), (16, 3), (12, 4), (8, 6)`, `B: 47, 44, 39, 32, 12`, `<b>40</b> yok`],
    answer: `Cevap: <b>D</b>`
  },
  {
    no: 2, konu: CA,
    q: `<p>Her birinin alanı 96 cm² olan, kenarları doğal sayı eş dikdörtgenlerle iki şekil yapılıyor: birincide yatay dikdörtgen, altındaki iki dikey dikdörtgenden geniş; ikincide altındaki üç dikey dikdörtgenden dar.</p><p class="ask">Bir dikdörtgenin çevresi kaç santimetredir?</p>`,
    opts: ['44', '46', '48', '52'], ans: 0,
    hints: [`Kısa kenar k: 2k < 96/k < 3k.`],
    steps: [`32 < k² < 48 → k = 6 → uzun kenar 16 (12 < 16 < 18 ✓)`, `Çevre 2(6 + 16) = <b>44</b>`],
    answer: `Cevap: <b>A</b>`
  },
  {
    no: 3, konu: CA,
    q: `<p>Ahmet ve Deniz'in oyununda söylenen sayı kadar puan söyleyene, sayının kendisi hariç bölenlerinin toplamı kadar puan rakibe yazılıyor. Ahmet 16 diyor.</p><p class="ask">Deniz hangisini söylerse kazanır?</p>`,
    opts: ['21', '24', '28', '30'], ans: 0,
    hints: [`Ahmet 16 → Deniz'e 1 + 2 + 4 + 8 = 15 puan.`],
    steps: [`21: Deniz 15 + 21 = 36, Ahmet 16 + 11 = 27 ✓`, `24: 39 – 52 · 28: 43 – 44 · 30: 45 – 58 ✗`],
    answer: `Cevap: <b>A</b>`
  },
  {
    no: 4, konu: CA,
    q: `<p>Kenarları 50 cm'den kısa, doğal sayı olan dikdörtgen bir kartonun bir kenarının farklı asal çarpanlarının toplamı 5, diğerininki 9'dur.</p><p class="ask">Çevre <u>en fazla</u> kaç santimetredir?</p>`,
    opts: ['120', '136', '144', '152'], ans: 3,
    hints: [`Toplam 5: {2, 3}. Toplam 9: {2, 7}.`],
    steps: [`{2, 3}: 50'den küçük en büyüğü 48 · {2, 7}: 14, 28 → 28`, `Çevre 2(48 + 28) = <b>152</b>`],
    answer: `Cevap: <b>D</b>`
  },
  {
    no: 5, konu: CA,
    q: `<p>Yalnızca 2, 3 ve 5 yazan asal çarpan kartları ve beyaz kartlar var. 2'den başlayarak yazılan her sayının altına asal çarpan kartları konuyor; asal çarpanı kartlarda yoksa (7, 11, …) bir beyaz kart konuyor.</p><p class="ask">Beyaz kart sayısı 2 ise en fazla kaç asal çarpan kartı kullanılmıştır?</p>`,
    opts: ['17', '18', '19', '20'], ans: 0,
    hints: [`Beyazlar 7 ve 11 için; 13 yazılırsa 3. beyaz gelir → en fazla 12'ye kadar.`],
    steps: [`2:1, 3:1, 4:2, 5:1, 6:2, 8:3, 9:2, 10:2, 12:3`, `Toplam <b>17</b>`],
    answer: `Cevap: <b>A</b>`
  },
  {
    no: 6, konu: CA,
    q: `<p>3 × 3'lük tablonun sol üst ve sağ alt kareleri boyalı. Diğer 7 kareye 1–7 sayıları yazılacak. 1. satırın çarpımı 30, 2. satırınki 24, 3. satırınki b; 1. sütununki a, 2. sütununki 24, 3. sütununki 10'dur.</p><p class="ask">a + b kaçtır?</p>`,
    opts: ['21', '24', '28', '35'], ans: 2,
    hints: [`30 = 5 · 6, 10 = 5 · 2 → ortak kare 5.`],
    steps: [`1. satır 6, 5; 3. sütun 5, 2`, `2. satır x · y · 2 = 24 → 3 ve 4; 2. sütun 6 · y · z = 24 → y = 4, z = 1 → x = 3`, `Kalan 7 sol altta: a = 3 · 7 = 21, b = 7 · 1 = 7 → <b>28</b>`],
    answer: `Cevap: <b>C</b>`
  },
  {
    no: 7, konu: CA,
    q: `<p>Kartlar: 23, 64, 49, 12, 50, 72, 42, 66 ve ters çevrilmiş bir kart. Tek asal çarpanlılar siyah, iki asal çarpanlılar mavi, üç asal çarpanlılar kırmızı kutuya atılıyor ve kutularda eşit sayıda kart oluyor.</p><p class="ask">Ters kartta hangisi yazıyor olabilir?</p>`,
    opts: ['105', '98', '100', '121'], ans: 0,
    hints: [`Kutulara dağıt: hangisinde eksik var?`],
    steps: [`Siyah: 23, 64, 49 · Mavi: 12, 50, 72 · Kırmızı: 42, 66`, `105 = 3 · 5 · 7 → 3 asal çarpan ✓ (98, 100 → 2; 121 → 1)`],
    answer: `Cevap: <b>A</b>`
  },
  {
    no: 8, konu: CA,
    q: `<p>50 katlı bir binada 2–10 numaralı asansörler, numaralarının katı olan katlarda durmuyor. Erdem 40. katta çalışıyor. Onur'un katında duran asansör sayısı Erdem'inkinden fazla.</p><p class="ask">Onur'un katı hangisi olabilir?</p>`,
    opts: ['24', '30', '36', '45'], ans: 3,
    hints: [`Duran asansör = 9 − (2–10 arasındaki bölen sayısı).`],
    steps: [`40: 2, 4, 5, 8, 10 → 4 asansör durur`, `24 → 4 · 30 → 4 · 36 → 4 · 45: 3, 5, 9 → <b>6</b> ✓`],
    answer: `Cevap: <b>D</b>`
  },
  {
    no: 9, konu: CA,
    q: `<p>Bir öğretmen ayın 1'inden 12'sine kadar her gün, o günün tarihindeki sayının asal çarpan sayısı kadar ders yapıyor.</p><p class="ask">Bu 12 günde toplam kaç ders yapmıştır?</p>`,
    opts: ['13', '14', '15', '16'], ans: 1,
    hints: [`1'in asal çarpanı yok; 6, 10, 12 iki asal çarpanlı.`],
    steps: [`0 + 1 + 1 + 1 + 1 + 2 + 1 + 1 + 1 + 2 + 1 + 2 = <b>14</b>`],
    answer: `Cevap: <b>B</b>`
  },
  {
    no: 10, konu: CA,
    q: `<p>Beşer şekerlemelik paketlerde etiket numarası ürün kodlarının çarpımı (şeker 2, çikolata 3, lokum 5), fiyat birim fiyatların toplamıdır (şeker 1, çikolata 3, lokum 2 TL).</p><p class="ask">Etiketleri 120 ve 450 olan iki paketin fiyatları toplamı kaç TL'dir?</p>`,
    opts: ['16', '17', '18', '19'], ans: 3,
    hints: [`Asal çarpanlarına ayır.`],
    steps: [`120 = 2³ · 3 · 5 → 3 + 3 + 2 = 8 TL`, `450 = 2 · 3² · 5² → 1 + 6 + 4 = 11 TL`, `Toplam <b>19</b>`],
    answer: `Cevap: <b>D</b>`
  },
  {
    no: 11, konu: EB,
    q: `<p>20 çikolata kırmızı paketlere, 42 şeker mavi paketlere, her pakette eşit sayıda ve 3'ten fazla olacak biçimde konuyor; toplam 12 paket oluyor. Kuzey'in aldığı paketlerdeki çikolata sayısı şeker sayısına eşit.</p><p class="ask">Kuzey kaç paket şeker almıştır?</p>`,
    opts: ['1', '2', '3', '4'], ans: 1,
    hints: [`Kırmızı paket sayısı 20'nin, mavi paket sayısı 42'nin böleni.`],
    steps: [`3'ten fazla: kırmızı 5 paket (4'er), mavi 7 paket (6'şar) → 12 ✓`, `4r = 6m → r = 3, m = 2 → <b>2</b> paket şeker`],
    answer: `Cevap: <b>B</b>`
  },
  {
    no: 12, konu: EB,
    q: `<p>A kutusunda 50 kalemin % 20'si, B kutusunda 40 kalemin % 40'ı kırmızı. A 100 TL, B 150 TL. Hangisi seçilse seçilsin mevcudu 300'den fazla olan okulda her öğrenciye bir kırmızı kalem artmadan veriliyor.</p><p class="ask">Ödenen tutar <u>en az</u> kaç TL'dir?</p>`,
    opts: ['2400', '2600', '2800', '3000'], ans: 3,
    hints: [`A'da 10, B'de 16 kırmızı kalem.`],
    steps: [`EKOK(10, 16) = 80 → 320 öğrenci`, `A: 32 · 100 = 3200, B: 20 · 150 = 3000 → <b>3000</b>`],
    answer: `Cevap: <b>D</b>`
  },
  {
    no: 13, konu: EB,
    q: `<p>Özdeş iki karton, biri 4 cm, diğeri 6 cm genişliğinde parçalara artıksız kesiliyor. Parça sayıları farkı 8'den az.</p><p class="ask">Kartonun uzunluğu <u>en fazla</u> kaç santimetredir?</p>`,
    opts: ['84', '96', '108', '120'], ans: 0,
    hints: [`Uzunluk 12'nin katı; fark L/12.`],
    steps: [`L/12 < 8 → L < 96`, `En büyük 12 katı <b>84</b>`],
    answer: `Cevap: <b>A</b>`
  },
  {
    no: 14, konu: EB,
    q: `<p>230 kırmızı ve 150 yeşil elma var. Kırmızıların bir kısmı 4'erli ve 6'şarlı paketlere, iki tür pakete eşit sayıda elma girecek biçimde konuyor. Kalan elmalar tek renk ve eşit sayıda elmalı paketlere konuyor.</p><p class="ask">Yeşil elma paketlerinin sayısı <u>en az</u> kaçtır?</p>`,
    opts: ['5', '10', '15', '25'], ans: 2,
    hints: [`4'erli ve 6'şarlıya giden elmalar 12k'şar → toplam 24k.`],
    steps: [`Kalan kırmızı 230 − 24k; EBOB(kalan, 150) en büyük olmalı`, `k = 5 → 110 → EBOB 10 (diğerleri 2)`, `Yeşil: 150 / 10 = <b>15</b> paket`],
    answer: `Cevap: <b>C</b>`
  },
  {
    no: 15, konu: EB,
    q: `<p>Bir yolda şehirler arası uzaklıklar: K–L 120, L–M 200, M–N 180, N–P 150 km. K'den yola çıkan iki otobüsten biri 80 km'de, diğeri 120 km'de bir mola veriyor.</p><p class="ask">İlk kez aynı tesiste mola verdikleri yer hangi iki şehir arasındadır?</p>`,
    opts: ['L ve M', 'K ve L', 'M ve N', 'N ve P'], ans: 0,
    hints: [`EKOK(80, 120) = 240.`],
    steps: [`L 120. km'de, M 320. km'de → 240 km <b>L ile M</b> arasında`],
    answer: `Cevap: <b>A</b>`
  },
  {
    no: 16, konu: EB,
    q: tablo([['Film', 'Süre (dk)', 'İlk gösterim'], ['A', '50', '10.00'], ['B', '70', '10.20']]) + `<p>Her gösterimden sonra 10 dakika ara verilip film tekrar başlıyor. Saat 14.30'da gelen iki arkadaş, iki filmin aynı anda başladığı bir seansta girmek istiyor.</p><p class="ask">En az kaç dakika beklerler?</p>`,
    opts: ['120', '150', '180', '210'], ans: 1,
    hints: [`A her 60, B her 80 dakikada başlıyor.`],
    steps: [`10.00'dan itibaren A: 0, 60, 120, 180 … B: 20, 100, 180 … → ilk ortak 13.00, sonra her 240 dk → 17.00`, `14.30'dan 17.00'ye <b>150</b> dk`],
    answer: `Cevap: <b>B</b>`
  },
  {
    no: 17, konu: EB,
    q: `<p>Bir istasyona A yönünden 5, B yönünden 9 dakikada bir metro geliyor. Metrolar 7.15'te birlikte gelmiş. Beren geldiğinde iki yönden de metroya 4'er dakika kaldığını görüyor.</p><p class="ask">Beren hangi saatte gelmiş olabilir?</p>`,
    opts: ['08.41', '09.11', '09.41', '10.01'], ans: 0,
    hints: [`Ortak geliş 7.15 + 45k; Beren 4 dk önce.`],
    steps: [`Beren: 7.11 + 45k`, `08.41 → 90 dk = 45 · 2 ✓; diğerleri 120, 150, 170 dk → 45'e bölünmez`],
    answer: `Cevap: <b>A</b>`
  },
  {
    no: 18, konu: EB,
    q: `<p>Ali A ürününe 90 TL, B ürününe 77 TL; Can A ürününe 126 TL ve B ürününe bir miktar ödüyor. Kg fiyatları doğal sayı, ikisinin aldığı toplam kütleler eşit ve ikisinin toplamı 30 kg'dan az.</p><p class="ask">Can B ürününe kaç TL ödemiştir?</p>`,
    opts: ['44', '55', '66', '77'], ans: 1,
    hints: [`A'nın fiyatı 90 ve 126'nın ortak böleni; her biri 15 kg'dan az almış.`],
    steps: [`A'nın fiyatı 18, 9, 6, 3, 2 veya 1 TL olabilir. 6 TL ve altında Can'ın A'sı 15 kg'ı geçer; 9 TL'de eşitlik sağlanamaz → 18 TL: Ali 5 kg, Can 7 kg A almış`, `5 + 77/b < 15 → b > 7,7; b, 77'yi böler → 11 veya 77. Can: 7 + x/b = 5 + 77/b → x = 77 − 2b > 0 → b = 11`, `x = <b>55</b> TL (ikisi de 12 kg)`],
    answer: `Cevap: <b>B</b>`
  },
  {
    no: 19, konu: EB,
    q: `<p>120 L bal ve 84 L pekmez Ahmet ile Mustafa arasında eşit paylaşılıyor. Mustafa en az sayıda eşit hacimli kap kullanıyor; Ahmet de eşit hacimli (doğal sayı litre) kaplar kullanıyor. Toplam 51 kap kullanılıyor.</p><p class="ask">Ahmet kaç litrelik kap kullanmıştır?</p>`,
    opts: ['1', '2', '3', '6'], ans: 2,
    hints: [`Her biri 60 L bal, 42 L pekmez alır.`],
    steps: [`Mustafa: EBOB(60, 42) = 6 → 10 + 7 = 17 kap`, `Ahmet 34 kap → 102 / d = 34 → d = <b>3</b>`],
    answer: `Cevap: <b>C</b>`
  },
  {
    no: 20, konu: EB,
    q: `<p>Gamze 20 cm'lik, Melis 14 cm'lik çubukları 6 cm'lik bağlantı parçalarıyla birleştiriyor; her çubuğun 2'şer cm'si bağlantı içinde kalıyor ve zincirler bağlantıyla başlayıp bağlantıyla bitiyor. İki zincir eşit ve 1,5 metreden uzun.</p><p class="ask">Toplam bağlantı sayısı <u>en az</u> kaçtır?</p>`,
    opts: ['19', '21', '23', '25'], ans: 1,
    hints: [`n çubuk: 6(n + 1) + görünen çubuk uzunlukları.`],
    steps: [`Gamze: 6(n + 1) + 16n = 22n + 6. Melis: 6(m + 1) + 10m = 16m + 6`, `22n = 16m → n = 8, m = 11 → uzunluk 182 cm ✓`, `Bağlantı 9 + 12 = <b>21</b>`],
    answer: `Cevap: <b>B</b>`
  }
  );
})();
