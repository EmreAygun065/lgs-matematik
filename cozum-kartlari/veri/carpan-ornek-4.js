// MEB örnek soruları 61–78 (Çarpanlar ve Katlar)
(function () {
  const { CA, EB, AA } = CK_KONU;
  const izgara3 = (h, bos = '') => `<table class="grid">${h.map(r => `<tr>${r.map(([c, t]) => `<td class="${c}">${t || bos}</td>`).join('')}</tr>`).join('')}</table>`;

  CK_ORNEK.push(
  {
    no: 61, konu: EB, sayfa: 31,
    q: `<p>Bir marangoz ustası, yanında çalışan Kerem ve Ahmet'e genişlikleri ve kalınlıkları aynı, uzunlukları farklı 3'er tahta verir.</p>`
      + tablo([['Kerem\'in tahtaları', 'Ahmet\'in tahtaları'], ['160 cm, 100 cm, 80 cm', '200 cm, 90 cm, 60 cm']])
      + `<p>Usta, çıraklarından sadece verdiği tahtaları kullanarak, hiç parça artırmadan basamak sayısı mümkün olduğu kadar az ve hem yan tahtaları hem de basamakları tek parça olan 1'er metre yüksekliğinde birer merdiven yapmalarını istiyor.</p>`
      + `<p class="ask">Buna göre çırakların yaptığı merdivenlerin basamak sayıları arasındaki fark kaçtır?</p>`,
    opts: ['1', '2', '3', '4'], ans: 1,
    hints: [`Önce iki tane 100 cm'lik yan tahta ayır; kalan parçalar eşit basamaklara bölünecek.`],
    steps: [
      `Kerem: yanlar 100 ve 160'tan kesilen 100 → kalan 60 ve 80 → basamak EBOB = 20 cm → 3 + 4 = 7 basamak`,
      `Ahmet: yanlar 200'den 2 × 100 → kalan 90 ve 60 → EBOB = 30 cm → 3 + 2 = 5 basamak`,
      `Fark <b>2</b>`
    ],
    answer: `Cevap: <b>B</b>`
  },
  {
    no: 62, konu: EB, sayfa: 32,
    q: `<p>Bir tarla, fıskiye sistemi yerine damlama sistemi ile sulandığında % 40 oranında su tasarrufu sağlanmaktadır. Hasan Amca alanları dönüm cinsinden farklı birer doğal sayıya eşit olan iki tarlasından birini fıskiye, diğerini damlama sistemini kullanarak sulamaktadır.</p>`
      + `<p>Hasan Amca tarlalarını sulamak için harcadığı toplam suyun yarısını fıskiye sistemi, diğer yarısını ise damlama sistemi ile suladığı tarlaları için kullanmaktadır.</p>`
      + `<p class="ask">Buna göre Hasan Amca'nın bu tarlalarının alanları toplamı dönüm cinsinden aşağıdakilerden hangisi olabilir?</p>`,
    opts: ['10', '12', '14', '16'], ans: 3,
    hints: [`Damlama dönüm başına 0,6 birim su harcar.`],
    steps: [`f · 1 = d · 0,6 → 5f = 3d → f = 3k, d = 5k`, `Toplam 8k → seçeneklerden <b>16</b>`],
    answer: `Cevap: <b>D</b>`
  },
  {
    no: 63, konu: EB, sayfa: 32,
    q: `<p>Bir kermeste her biri 25 TL olan romanlar ve her biri 30 TL olan tişörtlerden satılmıştır. Elde edilen gelirin tamamı ile tanesi 1250 TL olan tekerlekli sandalyeler alınmıştır. Kermes sonunda tişörtlerin ve romanların satışından elde edilen toplam gelirler birbirine eşittir.</p>`
      + `<p class="ask">Bu kermesteki satışlardan elde edilen gelirin tamamı ile tekerlekli sandalye alındığına göre kermeste satılan tişört sayısı <u>en az</u> kaçtır?</p>`,
    opts: ['100', '125', '150', '175'], ans: 1,
    hints: [`Her ürünün geliri R, 150'nin katı; toplam 2R, 1250'nin katı.`],
    steps: [`R = 150a ve 300a, 1250'nin katı → 6a = 25b → a = 25 → R = 3750`, `Tişört: 3750 / 30 = <b>125</b>`],
    answer: `Cevap: <b>B</b>`
  },
  {
    no: 64, konu: EB, sayfa: 33,
    q: `<p>Serdar Bey; çocuklarının yaptığı iki resmi, kenar uzunlukları santimetre cinsinden 20'den büyük birer tam sayı olan dikdörtgen şeklindeki eş çerçevelere koymuştur. Daha sonra bu çerçeveleri, köşelerine bağladığı farklı uzunluktaki iplerden odanın zemininden yükseklikleri eşit olan iki çiviye aynı biçimde (üst kenarları yatay) asmıştır.</p>`
      + `<p>Duvarda, çerçevelerin üst çıtaları ile ipler arasında oluşan üçgensel bölgelerin alanları 120 ve 150 cm<sup>2</sup> dir.</p>`
      + `<p class="ask">Buna göre çerçevelerin, odanın zemininden yükseklikleri arasındaki farkın santimetre cinsinden alabileceği <u>en büyük</u> tam sayı değeri kaçtır?</p>`,
    opts: ['1', '2', '3', '4'], ans: 1,
    hints: [`Üçgenlerin tabanı çerçevenin üst kenarı a. Yükseklikler 240/a ve 300/a.`],
    steps: [`Fark = ${F(300, 'a')} − ${F(240, 'a')} = ${F(60, 'a')}, a > 20`, `Fark tam sayı ise a, 60'ı böler: a = 30 → 2, a = 60 → 1`, `En büyük <b>2</b>`],
    answer: `Cevap: <b>B</b>`
  },
  {
    no: 65, konu: AA, sayfa: 34,
    q: `<p>Dört haneli bir sayaç vardır. Sayaç çalıştığında ilk iki bölmenin oluşturduğu 19 sayısı sabit kalıyor, son iki bölmenin oluşturduğu 12 sayısı ise birer birer artarak 99'a kadar ilerliyor.</p>`
      + `<p class="ask">Buna göre, son iki bölmenin oluşturduğu iki basamaklı sayılardan kaç tanesi, 19 ile aralarında asal <u>değildir</u>?</p>`,
    opts: ['3', '4', '5', '6'], ans: 2,
    hints: [`19 asal: 19 ile aralarında asal olmayanlar 19'un katlarıdır.`],
    steps: [`12 ile 99 arasında 19'un katları: 19, 38, 57, 76, 95`, `<b>5</b> tane`],
    answer: `Cevap: <b>C</b>`
  },
  {
    no: 66, konu: AA, sayfa: 34,
    q: `<p>Üzerlerinde birer doğal sayı yazan 6 bilyenin 5 tanesinin üzerindeki sayılar 15, 33, 55, 35 ve 21'dir; altıncısı mavi bilyedir.</p>`
      + `<p>Bu bilyeler, her gruptaki iki bilyenin üzerinde yazan sayılar aralarında asal olacak şekilde üç gruba ayrılıyor. Daha sonra her gruptaki bilyelerden biri A kutusuna, diğeri B kutusuna atılıyor. Son durumda A kutusu ile B kutusundaki bilyelerde yazan sayıların toplamı birbirine eşit olmaktadır.</p>`
      + `<p class="ask">Buna göre, mavi bilyenin üzerinde yazan sayı kaçtır?</p>`,
    opts: ['37', '43', '47', '51'], ans: 2,
    hints: [`15 = 3 · 5, diğer dört sayıyla ortak çarpanı var → mavi ile eşleşir.`],
    steps: [`Kalan eşleşmeler: 33–35 ve 55–21`, `A = {33, 55, 15} = 103, B = {35, 21, x} → x = 47`, `47 ile 15 aralarında asal ✓ → <b>47</b>`],
    answer: `Cevap: <b>C</b>`
  },
  {
    no: 67, konu: AA, sayfa: 35,
    q: `<p>Kenar uzunlukları santimetre cinsinden birer doğal sayı ve her bir kenarının uzunluğu 30 cm'den kısa olan dikdörtgen şeklinde özdeş iki kâğıt vardır. Bu kâğıtlardan biri uzun kenarları çakışacak biçimde (Şekil I), diğeri ise kısa kenarları çakışacak biçimde (Şekil II) ortadan katlanıyor.</p>`
      + `<p>Her iki şekilde de elde edilen dikdörtgenin kenarlarının uzunlukları santimetre cinsinden birer doğal sayı ve aralarında asaldır.</p><p class="ask">Buna göre, başlangıçtaki kâğıtlardan birinin çevresinin uzunluğu <u>en fazla</u> kaç santimetredir?</p>`,
    opts: ['102', '100', '96', '92'], ans: 2,
    hints: [`Kâğıt a × b: Şekil I a × b/2, Şekil II a/2 × b. İkisi de aralarında asal.`],
    steps: [`a ve b çift; a/2 ve b/2 tek olmalı → a, b ∈ {2, 6, 10, 14, 18, 22, 26}`, `a = 26, b = 22: EBOB(26, 11) = 1, EBOB(13, 22) = 1 ✓`, `Çevre 2(26 + 22) = <b>96</b>`],
    answer: `Cevap: <b>C</b>`
  },
  {
    no: 68, konu: AA, sayfa: 35,
    q: `<p>Uzunlukları santimetre cinsinden doğal sayı olan beş tahta uzundan kısaya doğru dizilmiştir: en uzunu 15 cm, sonra A, B, C ve en kısası 7 cm.</p>`
      + `<p>B ve C'nin uzunlukları aralarında asal, A ve B'nin uzunlukları ise aralarında asal değildir. A ve C tahtaları, elde edilecek tüm parçaların uzunluğu birbirine eşit ve 1'den büyük doğal sayı olacak şekilde parçalara ayrılıyor.</p>`
      + `<p class="ask">Buna göre, A ve C tahtalarından elde edilen toplam parça sayısı aşağıdakilerden hangisi <u>olamaz</u>?</p>`,
    opts: ['5', '7', '9', '10'], ans: 2,
    hints: [`15 > A > B > C > 7. Uygun üçlüleri listele.`],
    steps: [`(A, B, C) = (12, 9, 8): parça 2 → 10, parça 4 → 5`, `(12, 10, 9): parça 3 → 7`, `Başka üçlü yok → <b>9</b> olamaz`],
    answer: `Cevap: <b>C</b>`
  },
  {
    no: 69, konu: AA, sayfa: 36,
    q: `<p>Kenar uzunlukları santimetre cinsinden birer tam sayı ve alanları sırasıyla 72 cm<sup>2</sup> ve 60 cm<sup>2</sup> olan dikdörtgen şeklinde iki kâğıdın kısa kenarları çakıştırılarak bir dikdörtgen elde ediliyor.</p>`
      + `<p class="ask">Elde edilen bu dikdörtgenin uzun kenar uzunluğu ile kısa kenar uzunluğu aralarında asal olduğuna göre, çevresinin uzunluğu <u>en az</u> kaç santimetredir?</p>`,
    opts: ['46', '56', '74', '94'], ans: 2,
    hints: [`Ortak kısa kenar s, 72 ve 60'ı böler; yeni dikdörtgen s × 132/s.`],
    steps: [`s ∈ {1, 2, 3, 4, 6} (iki kâğıtta da kısa kenar)`, `s = 3 → 3 × 44 ✓ → 94. s = 4 → 4 × 33 ✓ → 74. s = 2, 6 → aralarında asal değil. s = 1 → 266`, `En az <b>74</b>`],
    answer: `Cevap: <b>C</b>`
  },
  {
    no: 70, konu: AA, sayfa: 36,
    q: `<p>Üzerlerinde birer asal sayı yazılı toplar iki kutuya konmuştur. I. kutuda 2, 7, 3, 2 yazılı 4 top; II. kutuda üzerindeki sayılar görünmeyen 3 top vardır.</p>`
      + `<p>Kutuların her birinden aynı anda bir top alınıp birbiri ile yer değiştiriliyor. Sonra I. kutudaki 4 top üzerinde yazan sayılar çarpılarak K, II. kutudaki 3 top üzerinde yazan sayılar çarpılarak L elde ediliyor.</p>`
      + `<p class="ask">K ile L aralarında asal sayılar olduğuna göre, K + L <u>en az</u> kaçtır?</p>`,
    opts: ['54', '83', '94', '101'], ans: 1,
    hints: [`I. kutuda iki tane 2 var; birini verse bile 2 kalır. Hangi top verilmeli?`],
    steps: [
      `I. kutudan 2 verilirse II. kutuda 2 olur ve I.'de de 2 kalır → olmaz. 3 ya da 7 verilmeli`,
      `3 verilsin, I.'ye 2 gelsin: K = 2 · 7 · 2 · 2 = 56. II.: 3 ve kalan iki top 2 ve 7 olamaz → en küçük 3, 3 → L = 27`,
      `K + L = <b>83</b> (7 verilirse en az 24 + 7 · 5 · 5 = 199)`
    ],
    answer: `Cevap: <b>B</b>`
  },
  {
    no: 71, konu: AA, sayfa: 37,
    q: `<p>9 eş kareden oluşan bir tabloda köşeler ve merkez sarı (S), diğer kareler mor (M) renklidir. Sarı karelere 27, 28 (üst köşeler), 36 (merkez), 88, 60 (alt köşeler) yazılmıştır.</p>`
      + izgara3([[['y', '27'], ['r', 'M'], ['y', '28']], [['r', 'M'], ['y', '36'], ['r', 'M']], [['y', '88'], ['r', 'M'], ['y', '60']]])
      + `<p>Mor karelere, kendisiyle ortak kenarı olan sarı karelerdeki sayılar ile aralarında asal ve iki tane asal çarpanı olan en küçük doğal sayılar yazılacaktır.</p><p class="ask">Buna göre mor karelere yazılması gereken doğal sayıların toplamı kaçtır?</p>`,
    opts: ['284', '324', '380', '434'], ans: 1,
    hints: [`Her mor kare için komşu sayıların asal çarpanlarını kullanma.`],
    steps: [`Üst (27, 28, 36): 2, 3, 7 yasak → 5 · 11 = 55 · Sol (27, 36, 88): 2, 3, 11 yasak → 5 · 7 = 35`, `Sağ (28, 36, 60): 2, 3, 5, 7 yasak → 11 · 13 = 143 · Alt (88, 36, 60): 2, 3, 5, 11 yasak → 7 · 13 = 91`, `Toplam <b>324</b>`],
    answer: `Cevap: <b>B</b>`
  },
  {
    no: 72, konu: AA, sayfa: 37,
    q: `<p>9 eş kareden oluşan tabloda köşeler sarı (S), kenar ortaları mavi (M), merkez kırmızı (K) renklidir. Sarı karelere 32, 45 (üst), 66, 91 (alt) yazılmıştır.</p>`
      + izgara3([[['y', '32'], ['b', 'M'], ['y', '45']], [['b', 'M'], ['r', 'K'], ['b', 'M']], [['y', '66'], ['b', 'M'], ['y', '91']]])
      + `<p>Mavi karelerin her birine ortak kenarı olan sarı karelerdeki sayılar ile aralarında asal ve iki tane asal çarpanı olan en küçük doğal sayı, kırmızı kareye ise mavi karelere yazılan sayıların toplamı yazılacaktır.</p><p class="ask">Buna göre kırmızı kareye yazılması gereken doğal sayı kaçtır?</p>`,
    opts: ['219', '234', '250', '284'], ans: 0,
    hints: [`Mavi karelerin komşuları yalnızca iki sarı karedir.`],
    steps: [`Üst (32, 45): 2, 3, 5 yasak → 7 · 11 = 77 · Sol (32, 66): 2, 3, 11 yasak → 5 · 7 = 35`, `Sağ (45, 91): 3, 5, 7, 13 yasak → 2 · 11 = 22 · Alt (66, 91): 2, 3, 7, 11, 13 yasak → 5 · 17 = 85`, `Toplam <b>219</b>`],
    answer: `Cevap: <b>A</b>`
  },
  {
    no: 73, konu: AA, sayfa: 38,
    q: `<p>2 raflı bir dolabın raflarındaki klasörlere 11'den 50'ye kadar etiket numaraları verilmiştir. Ece ve Melis bu dolaptan birer tane klasör almışlardır. Aldıkları bu klasörlerin etiket numaraları, iki tane asal çarpanı olan aralarında asal doğal sayılardır.</p>`
      + `<p class="ask">Buna göre bu iki klasörün etiket numaraları arasındaki fark <u>en çok</u> kaçtır?</p>`,
    opts: ['38', '37', '33', '31'], ans: 3,
    hints: [`İki asal çarpanlı sayılar: 12, 14, 15, 18, 20, 21, 22, … 44, 45, 46, 48, 50.`],
    steps: [`Uçlardan dene: 12 ile 50, 46, 45, 44 … ortak çarpanlı. 14 ile 45 ✓ → 31. 15 ile 46 ✓ → 31`, `Daha büyük fark veren aralarında asal çift yok → <b>31</b>`],
    answer: `Cevap: <b>D</b>`
  },
  {
    no: 74, konu: AA, sayfa: 38,
    q: `<p>Boyları 25 cm (I. yay) ve 35 cm (II. yay) olan iki yaya birer cisim asılmıştır. Bu yaylarda gerçekleşen uzamaların santimetre cinsinden değerleri aralarında asal iki doğal sayıdır.</p>`
      + `<p class="ask">I. yayın son durumdaki uzunluğu 45 santimetre olduğuna göre II. yayın son durumdaki uzunluğunun santimetre cinsinden değeri aşağıdakilerden hangisi olabilir?</p>`,
    opts: ['60', '61', '65', '68'], ans: 3,
    hints: [`I. yay 20 cm uzamış.`],
    steps: [`II. yayın uzaması e, 20 ile aralarında asal: 60 → 25 ✗, 61 → 26 ✗, 65 → 30 ✗`, `68 → 33 ✓ (EBOB(20, 33) = 1)`],
    answer: `Cevap: <b>D</b>`
  },
  {
    no: 75, konu: AA, sayfa: 39,
    q: `<p>Bir video izleme uygulamasının ekranında sol altta 10.21 (videonun 10 dakika 21 saniyelik kısmı izlendi), sağ altta 06.19 (geriye 6 dakika 19 saniye kaldı) yazmaktadır.</p>`
      + `<p class="ask">Buna göre bu videonun kalan kısmının süresi aşağıdakilerden hangisi olduğunda izlenen kısmın süresinin dakika ve saniye değerleri aralarında asal sayılar olur?</p>`,
    opts: ['05.55', '11.15', '12.55', '13.51'], ans: 3,
    hints: [`Videonun tamamı 10.21 + 06.19 = 16.40.`],
    steps: [`İzlenen = 16.40 − kalan: A) 10.45 → EBOB 5 · B) 05.25 → 5 · C) 03.45 → 3`, `D) 02.49 → EBOB(2, 49) = 1 ✓`],
    answer: `Cevap: <b>D</b>`
  },
  {
    no: 76, konu: AA, sayfa: 39,
    q: `<p>4 hanesindeki rakamlar çevrilerek şifre oluşturulabilen bir kilit, soldan ilk iki rakamı ve son iki rakamı iki basamaklı birer doğal sayı olarak kabul eder. Bu iki sayı aralarında asal ise şifre aktif duruma geçer.</p>`
      + `<p>Yiğit; ilk iki hanede oluşturduğu iki basamaklı sayının asal çarpanları, küçükten büyüğe sırayla son iki hanedeki rakamlar olacak şekilde şifre oluşturuyor. Kilit, Yiğit'in oluşturduğu şifreyi aktif duruma getirmiştir.</p>`
      + `<p class="ask">Yiğit, en soldaki hanede 1 rakamını hizaladığına göre yanındaki hanede aşağıdaki rakamlardan hangisini hizalamış olabilir?</p>`,
    opts: ['0', '5', '6', '8'], ans: 3,
    hints: [`1X sayısının tam olarak iki tane tek basamaklı asal çarpanı olmalı.`],
    steps: [`10 = 2 · 5 → 25; EBOB(10, 25) = 5 ✗ · 15 = 3 · 5 → 35; EBOB 5 ✗ · 16 = 2⁴ → tek asal çarpan ✗`, `18 = 2 · 3² → 23; EBOB(18, 23) = 1 ✓ → <b>8</b>`],
    answer: `Cevap: <b>D</b>`
  },
  {
    no: 77, konu: AA, sayfa: 40,
    q: `<p>Ortada boyalı bir kare ve onun çevresinde dört kare vardır. Boyalı kare dört karenin her birine; dış kareler de yanlarındaki iki dış kareye birer doğru parçasıyla bağlıdır (dış kareler bir halka oluşturur). Karelerin her birinin içine farklı bir sayı gelecek şekilde 3, 5, 7, 9, 11 sayılarından biri yazılıyor.</p>`
      + `<p class="ask">Bir doğru parçası ile birbirine bağlanan iki karenin içindeki sayılar aralarında asal olduğuna göre boyalı karenin içine yazılabilecek sayıların toplamı kaçtır?</p>`,
    opts: ['12', '16', '23', '26'], ans: 2,
    hints: [`Bu sayılardan aralarında asal olmayan tek çift 3 ve 9'dur.`],
    steps: [`Boyalı kare dördüne de bağlı → 3 veya 9 olamaz`, `3 ve 9 dış halkada karşılıklı köşelere yazılabilir`, `Boyalı kare: 5, 7, 11 → toplam <b>23</b>`],
    answer: `Cevap: <b>C</b>`
  },
  {
    no: 78, konu: AA, sayfa: 40,
    q: `<p>6A ve B8 iki basamaklı sayılardır.</p><ul><li>6 ile A aralarında asaldır.</li><li>B ile 8 aralarında asaldır.</li><li>6A sayısı B8 sayısından küçüktür.</li></ul><p class="ask">Bu şartları sağlayan kaç farklı A + B değeri vardır?</p>`,
    opts: ['3', '5', '6', '8'], ans: 1,
    hints: [`A ∈ {1, 5, 7}; B tek rakam ve B8 > 6A → B = 7 veya 9.`],
    steps: [`A ∈ {1, 5, 7}, B ∈ {7, 9}`, `A + B: 8, 12, 14, 10, 14, 16 → farklı değerler 8, 10, 12, 14, 16`, `<b>5</b> tane`],
    answer: `Cevap: <b>B</b>`
  }
  );
})();
