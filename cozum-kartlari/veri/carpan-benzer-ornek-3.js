// MEB örnek sorularına benzer yeni sorular 41–60 (Çarpanlar ve Katlar)
(function () {
  const { CA, EB, AA } = CK_KONU;

  CK_BENZER_ORNEK.push(
  {
    no: 41, konu: EB,
    q: `<p>Basamak yüksekliği 20 cm'yi geçmemeli. Zeminden 180 cm'lik birinci duvara, oradan 252 cm'lik ikinci duvarın üstüne eş basamaklı bir merdiven yapılıyor.</p><p class="ask">Basamak yüksekliği tam sayı ise merdiven <u>en az</u> kaç basamaktır?</p>`,
    opts: ['10', '12', '13', '14'], ans: 3,
    hints: [`Basamak 180'i ve 72'yi böler.`],
    steps: [`EBOB(180, 72) = 36 → 20'yi geçmeyen en büyük böleni 18`, `252 / 18 = <b>14</b>`],
    answer: `Cevap: <b>D</b>`
  },
  {
    no: 42, konu: EB,
    q: `<p>25 kuruşlukların kütlesi 3500 mg, 1 TL'lerinki 8200 mg. Kerem tüm 25 kuruşlukları ve tüm 1 TL'leri ayrı ayrı tartıyor; sonuçlar eşit.</p><p class="ask">Kerem'in parası <u>en az</u> kaç TL'dir?</p>`,
    opts: ['45', '50,5', '55,5', '60'], ans: 2,
    hints: [`3500a = 8200b → 35a = 82b.`],
    steps: [`a = 82 tane 25 kuruş, b = 35 tane 1 TL`, `20,5 + 35 = <b>55,5</b> TL`],
    answer: `Cevap: <b>C</b>`
  },
  {
    no: 43, konu: EB,
    q: `<p>50 cm genişliğindeki koltuklar aralarında 30 cm boşlukla (sonda da 30 cm) dizilmişti. Boşluklar 20 cm yapılınca (sonda da 20 cm) daha çok koltuk sığıyor.</p><p class="ask">En az kaç koltuk eklenmiştir?</p>`,
    opts: ['1', '2', '3', '4'], ans: 0,
    hints: [`Koltuk + boşluk: 80 ve 70 cm.`],
    steps: [`EKOK(80, 70) = 560 → 7 ve 8 koltuk`, `En az <b>1</b>`],
    answer: `Cevap: <b>A</b>`
  },
  {
    no: 44, konu: EB,
    q: `<p>Tam bilet 18 TL, indirimli bilet 12 TL. Tam biletlere ödenen toplam, indirimlilere ödenene eşit.</p><p class="ask">En az kaç bilet alınmıştır?</p>`,
    opts: ['5', '6', '7', '10'], ans: 0,
    hints: [`18a = 12b.`],
    steps: [`EKOK 36 → 2 tam + 3 indirimli = <b>5</b>`],
    answer: `Cevap: <b>A</b>`
  },
  {
    no: 45, konu: EB,
    q: `<p>A balı 500 g'lık kavanozda 120 TL, B balı 750 g'lık kavanozda 150 TL. Bir haftada iki baldan eşit gelir elde ediliyor.</p><p class="ask">Toplam satış <u>en az</u> kaç kilogramdır?</p>`,
    opts: ['4,5', '5', '5,5', '6'], ans: 2,
    hints: [`120a = 150b → 4a = 5b.`],
    steps: [`5 kavanoz A (2,5 kg), 4 kavanoz B (3 kg)`, `<b>5,5</b> kg`],
    answer: `Cevap: <b>C</b>`
  },
  {
    no: 46, konu: EB,
    q: `<p>Makine 90 ml çay ya da 60 ml kahve koyuyor. Bir günde toplam 200 bardak alınıyor ve çay ile kahve miktarları eşit.</p><p class="ask">Kaç bardak çay alınmıştır?</p>`,
    opts: ['40', '50', '60', '80'], ans: 3,
    hints: [`90ç = 60k → 3ç = 2k.`],
    steps: [`ç = 2u, k = 3u → 5u = 200 → u = 40`, `Çay <b>80</b>`],
    answer: `Cevap: <b>D</b>`
  },
  {
    no: 47, konu: EB,
    q: tablo([['', 'Maliyet', 'Satış'], ['A', '3000', '3600'], ['B', '4100', '5000']]) + `<p>A ve B telefonlarından elde edilen toplam kârlar eşit.</p><p class="ask">Satılan telefon sayısı <u>en az</u> kaçtır?</p>`,
    opts: ['5', '6', '7', '8'], ans: 0,
    hints: [`Kârlar 600 ve 900 TL.`],
    steps: [`600a = 900b → a = 3, b = 2 → <b>5</b>`],
    answer: `Cevap: <b>A</b>`
  },
  {
    no: 48, konu: EB,
    q: `<p>Kalın demir 40 kg, ince demir 24 kg. Paketlerin kütleleri eşit ve her pakette tek çeşit demir var. 10 ton taşıyan bir tıra en çok 8 paket yüklenebiliyor.</p><p class="ask">İnce demir paketindeki demir sayısı ile kalın demir paketindeki sayının farkı kaçtır?</p>`,
    opts: ['10', '16', '20', '25'], ans: 2,
    hints: [`Paket kütlesi EKOK(40, 24) = 120'nin katı.`],
    steps: [`8m ≤ 10 000 < 9m → 1111 < m ≤ 1250 → m = 1200`, `İnce 50, kalın 30 → fark <b>20</b>`],
    answer: `Cevap: <b>C</b>`
  },
  {
    no: 49, konu: EB,
    q: `<p>250 ml'lik kolonya 12 TL, 400 ml'lik 18 TL. Gün sonunda iki boy şişeye eşit miktar kolonya dolduruluyor ve gelir 1000 TL'den fazla.</p><p class="ask">Gelir <u>en az</u> kaç TL'dir?</p>`,
    opts: ['1023', '1116', '1209', '1302'], ans: 1,
    hints: [`EKOK(250, 400) = 2000 ml.`],
    steps: [`Her 2000 ml: 8 · 12 + 5 · 18 = 186 TL`, `186k > 1000 → k = 6 → <b>1116</b>`],
    answer: `Cevap: <b>B</b>`
  },
  {
    no: 50, konu: EB,
    q: `<p>A yağı 1 litrelik, B yağı 1,5 litrelik şişede; şişe fiyatları eşit ve tam sayı. Bir günde A'dan 180 TL, B'den 150 TL gelir elde ediliyor.</p><p class="ask">Satılan B yağı, A yağından <u>en az</u> kaç litre fazladır?</p>`,
    opts: ['0,5', '1', '1,5', '3'], ans: 2,
    hints: [`Fark: 1,5 · 150/p − 180/p = 45/p.`],
    steps: [`p en büyük: EBOB(180, 150) = 30`, `45 / 30 = <b>1,5</b> litre`],
    answer: `Cevap: <b>C</b>`
  },
  {
    no: 51, konu: EB,
    q: `<p>40 × 40 × 90 cm'lik koliler herhangi bir yüzü üzerinde üst üste konarak, yüksekliği 4 m'den az bir depoya tavana kadar boşluksuz diziliyor.</p><p class="ask">Aynı depoda hangi koli ile de bu yapılabilir?</p>`,
    opts: ['45 × 45 × 80', '30 × 30 × 100', '60 × 60 × 120', '50 × 50 × 120'], ans: 2, long: true,
    hints: [`Depo EKOK(40, 90) = 360 cm.`],
    steps: [`360'ı iki ölçüsü de bölen koli: 60 ve 120 ✓`, `80, 100 ve 50 bölmez`],
    answer: `Cevap: <b>C</b>`
  },
  {
    no: 52, konu: EB,
    q: `<p>240 m'lik paralel iki kaldırıma 12 m arayla kedi, 20 m arayla köpek mama kabı konuyor (baş ve sonda karşılıklı birer tane). Karşılıklı aynı hizadaki kapların yanına birer su kabı konuyor.</p><p class="ask">Kaç su kabı konmuştur?</p>`,
    opts: ['4', '6', '8', '10'], ans: 3,
    hints: [`Karşılıklılar EKOK(12, 20) = 60 m'de bir.`],
    steps: [`0, 60, 120, 180, 240 → 5 çift → <b>10</b> su kabı`],
    answer: `Cevap: <b>D</b>`
  },
  {
    no: 53, konu: EB,
    q: tablo([['İp', 'Tahta başına (m)', 'Metre fiyatı (TL)'], ['Mavi', '10', '6'], ['Pembe', '8', '5']]) + `<p>İki renkten eşit uzunlukta ip kullanılmış, toplam maliyet 1000 ile 1500 TL arasında.</p><p class="ask">Kaç tahta yapılmıştır?</p>`,
    opts: ['21', '24', '27', '30'], ans: 2,
    hints: [`Her renkten L = 40k metre.`],
    steps: [`Maliyet 6L + 5L = 440k → k = 3, L = 120`, `Mavi 12, pembe 15 → <b>27</b>`],
    answer: `Cevap: <b>C</b>`
  },
  {
    no: 54, konu: EB,
    q: tablo([['', 'Peşinat', 'Aylık taksit'], ['Ahmet', '% 25', '300 TL'], ['Beyza', '% 20', '450 TL']]) + `<p>Taksitle ödenecek toplamlar eşit; bilgisayarların fiyatları 4000 ile 5000 TL arasında.</p><p class="ask">İkisi toplam kaç TL ödeyecek?</p>`,
    opts: ['8700', '9000', '9300', '9600'], ans: 2,
    hints: [`Taksit toplamı 900'ün katı.`],
    steps: [`R = 3600 → Ahmet 3600 / 0,75 = 4800, Beyza 3600 / 0,8 = 4500`, `Toplam <b>9300</b>`],
    answer: `Cevap: <b>C</b>`
  },
  {
    no: 55, konu: EB,
    q: `<p>Kare biçimli eş iki pencerenin tüllerinin orta kısmı birinde kenarın ${F(1, 5)}'i, diğerinde ${F(1, 8)}'i kadar ve bu genişlikler tam sayı.</p><p class="ask">Bir pencerenin alanı hangisi olabilir?</p>`,
    opts: ['1600', '1764', '1936', '2025'], ans: 0,
    hints: [`Kenar 40'ın katı.`],
    steps: [`Kenar 40 → alan <b>1600</b>`],
    answer: `Cevap: <b>A</b>`
  },
  {
    no: 56, konu: EB,
    q: `<p>8 metreden kısa eşit iki rafa çapı 80 cm lastikler ve 50 cm jantlar boşluksuz diziliyor.</p><p class="ask">Lastik ve jant sayıları farkı <u>en çok</u> kaçtır?</p>`,
    opts: ['2', '3', '4', '5'], ans: 1,
    hints: [`Raf EKOK(80, 50) = 400'ün katı.`],
    steps: [`800'den kısa → 400 cm → 5 lastik, 8 jant`, `Fark <b>3</b>`],
    answer: `Cevap: <b>B</b>`
  },
  {
    no: 57, konu: EB,
    q: `<p>Uzunluğu 250 ile 300 cm arasında olan bir doğru parçasına 5 cm'lik ve 9 cm'lik kareler ayrı ayrı boşluksuz ve taşmadan dizilebiliyor.</p><p class="ask">Hangi kareler de boşluk ve taşma olmadan dizilebilir?</p>`,
    opts: ['18 cm', '20 cm', '25 cm', '40 cm'], ans: 0,
    hints: [`Uzunluk 45'in katı.`],
    steps: [`250–300 arası: 270 = 2 · 3³ · 5`, `270'i bölen: <b>18</b>`],
    answer: `Cevap: <b>A</b>`
  },
  {
    no: 58, konu: EB,
    q: tablo([['Otobüs', 'İlk', 'Son', 'Sıklık'], ['A', '06.00', '22.00', '80 dk'], ['B', '06.40', '23.00', '60 dk']]) + `<p class="ask">Bir günde A ve B otobüsleri kaç kez aynı anda kalkar?</p>`,
    opts: ['3', '4', '5', '6'], ans: 1,
    hints: [`İlk ortak saati bul; sonra EKOK(80, 60) = 240 dk'da bir.`],
    steps: [`A: 06.00, 07.20, 08.40 … B: 06.40, 07.40, 08.40 … → ilk ortak 08.40`, `08.40, 12.40, 16.40, 20.40 → <b>4</b>`],
    answer: `Cevap: <b>B</b>`
  },
  {
    no: 59, konu: EB,
    q: `<p>A gübresi 40 kg'lık torbada % 25 azot, 90 TL; B gübresi 40 kg'lık torbada % 35 azot, 130 TL. Hangisi alınırsa alınsın ihtiyaç tam karşılanıyor; çiftçi ucuz olanı alıp 1000 TL'den az ödüyor.</p><p class="ask">Diğerini alsaydı kaç TL fazla öderdi?</p>`,
    opts: ['5', '10', '15', '20'], ans: 3,
    hints: [`Torba başına azot 10 ve 14 kg.`],
    steps: [`İhtiyaç EKOK(10, 14) = 70k → A: 7k torba 630k TL, B: 5k torba 650k TL`, `630k < 1000 → k = 1 → fark <b>20</b>`],
    answer: `Cevap: <b>D</b>`
  },
  {
    no: 60, konu: EB,
    q: tablo([['Saksı çapı', 'Fiyat'], ['15 cm', '9 TL'], ['25 cm', '15 TL']]) + `<p>Eşit iki rafa saksılar boşluksuz diziliyor (her rafa bir çeşit). Rafların saksı fiyatları eşit ve 100 ile 150 TL arasında.</p><p class="ask">Saksılı bölüm kaç santimetredir?</p>`,
    opts: ['150', '225', '300', '375'], ans: 1,
    hints: [`Uzunluk 75'in katı; santimetre başına 0,6 TL.`],
    steps: [`100 < 0,6L < 150 → 167 < L < 250`, `L = <b>225</b>`],
    answer: `Cevap: <b>B</b>`
  }
  );
})();
