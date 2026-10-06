// MEB örnek soruları 21–40 (Çarpanlar ve Katlar)
(function () {
  const { CA, EB, AA } = CK_KONU;

  CK_ORNEK.push(
  {
    no: 21, konu: EB, sayfa: 11,
    q: `<p>Kırmızı (K), mavi (M) ve yeşil (Y) renkte 5'er adet boncuk vardır. Farklı renkteki boncuklar, farklı asal sayıları temsil etmektedir. Boncuklar üç çubuğa yerleştiriliyor:</p>`
      + tablo([['', '1. çubuk', '2. çubuk', '3. çubuk'], ['Boncuklar', 'M, K, Y, Y', 'K, M, M, M, Y, Y', 'Kalan boncukların tamamı'], ['Altındaki kart', '150', 'A', 'B']])
      + `<p>Çubukların altındaki kartlarda yazan sayılar o çubuktaki boncukların temsil ettiği asal sayıların tamamı çarpılarak elde edilmiştir.</p><p class="ask">Buna göre, aşağıdakilerden hangisi <u>kesinlikle</u> doğrudur?</p>`,
    opts: ['A = 2 · 3³ · 5²', 'B = 2 · 3³ · 5', 'A ile B\'nin en küçük ortak katı 900', 'A ile B\'nin en büyük ortak böleni 30'], ans: 3, long: true,
    hints: [`150 = 2 · 3 · 5². Hangi renk iki kez kullanılmış?`],
    steps: [
      `1. çubukta Y iki kez → Y = 5; K ve M ise 2 ile 3 (hangisinin hangisi olduğu belli değil)`,
      `3. çubuk: 3 K, 1 M, 1 Y. A = K · M³ · 5², B = K³ · M · 5`,
      `K = 2, M = 3: A = 2 · 3³ · 5², B = 2³ · 3 · 5. K = 3, M = 2: A = 2³ · 3 · 5², B = 2 · 3³ · 5`,
      `İki durumda da EBOB = 2 · 3 · 5 = <b>30</b>; EKOK = 5400`
    ],
    answer: `Cevap: <b>D</b>`
  },
  {
    no: 22, konu: EB, sayfa: 11,
    q: `<p>Bir tiyatro grubu yaptığı 48 günlük plana göre A salonunda 2 günde bir, B salonunda ise 3 günde bir gösteri yapacaktır. Bu plana göre, bu tiyatro grubu aynı günde iki salonda da gösterileri olduğunda, bu salonların sadece birinde gösteri yapacaktır.</p>`
      + `<p class="ask">Bu tiyatro grubu A salonunda 17 gösteri yaptığına göre, B salonunda kaç gösteri yapmıştır?</p>`,
    opts: ['12', '14', '15', '17'], ans: 2,
    hints: [`A'da 24, B'de 16 gösteri günü var; 6'nın katı olan 8 gün çakışıyor.`],
    steps: [`A: 24 gün, B: 16 gün, ortak 8 gün`, `A'da 17 gösteri → 24 − 8 = 16 tek A günü + 1 ortak gün`, `B: 16 − 8 = 8 tek B günü + 7 ortak gün = <b>15</b>`],
    answer: `Cevap: <b>C</b>`
  },
  {
    no: 23, konu: EB, sayfa: 12,
    q: `<p>Uzunlukları 160 cm ve 96 cm olan sarı ve mavi renkli iki demir çubuk, oluşan tüm parçaların uzunlukları birbirine eşit olacak biçimde kesilmiştir. Elde edilen sarı parçaların 4'er tanesi uç uca birleştirilerek sarı çerçeveler, mavi parçaların 4'er tanesi uç uca birleştirilerek mavi çerçeveler oluşturuluyor.</p>`
      + `<p class="ask">Bu işlem sonunda hiç parça artmadığına göre, sarı çerçeve sayısı ile mavi çerçeve sayısı arasındaki fark <u>en az</u> kaçtır?</p>`,
    opts: ['10', '8', '2', '1'], ans: 2,
    hints: [`Bir çerçeve 4d uzunluk ister; 4d hem 160'ı hem 96'yı bölmeli.`],
    steps: [`4d, EBOB(160, 96) = 32'yi böler → en büyük 4d = 32`, `Sarı: 160 / 32 = 5, mavi: 96 / 32 = 3 → fark <b>2</b>`],
    answer: `Cevap: <b>C</b>`
  },
  {
    no: 24, konu: EB, sayfa: 12,
    q: `<p>648 adet yumurtanın tamamı, her biri 30'dan az ve eşit sayıda yumurta alan kolilere konularak satışa sunulmuştur. Belirli sayıda koli satıldıktan sonra satılmayan yumurta sayısının 360 olduğu görülmüştür.</p><p class="ask">Buna göre <u>en az</u> kaç koli yumurta satılmıştır?</p>`,
    opts: ['12', '11', '10', '9'], ans: 0,
    hints: [`Koli büyüklüğü 648'i ve 360'ı böler.`],
    steps: [`EBOB(648, 360) = 72 → 30'dan küçük en büyük böleni 24`, `Satılan 288 yumurta → 288 / 24 = <b>12</b> koli`],
    answer: `Cevap: <b>A</b>`
  },
  {
    no: 25, konu: EB, sayfa: 13,
    q: tablo([['Kurs', 'Öğrenci sayısı'], ['A', '48'], ['B', '32'], ['C', '60']])
      + `<ul><li>Sınıflardaki öğrenci sayısı 10'dan fazla, 20'den azdır.</li><li>İki kursun sınıfları okulun alt katında, diğer kursun sınıfları ise üst katındadır.</li><li>Alt katta bulunan tüm sınıflardaki öğrenci sayıları birbirine eşit, üst katta bulunan sınıflardaki öğrenci sayıları birbirine eşittir.</li></ul>`
      + `<p class="ask">Öğrencilerin tamamı sınıflara yerleştirildiğine göre, kurslar için açılan sınıf sayısı <u>en az</u> kaçtır?</p>`,
    opts: ['7', '8', '9', '11'], ans: 2,
    hints: [`Alttaki iki kurs, EBOB'larının 10–20 arasındaki bir böleni kadar mevcutlu sınıflara bölünür.`],
    steps: [`A–B altta: EBOB 16 → 3 + 2 = 5 sınıf; C üstte 15'er → 4 sınıf → 9`, `A–C altta: 12'şer → 4 + 5 = 9; B üstte 16 → 2 → 11 · B–C: EBOB 4 → olmaz`, `En az <b>9</b>`],
    answer: `Cevap: <b>C</b>`
  },
  {
    no: 26, konu: EB, sayfa: 13,
    q: `<p>Renkleri dışında özdeş mavi, kırmızı ve yeşil flamalar doğrusal bir yol üzerinde, başlangıç noktasından itibaren önce maviler, sonra kırmızılar, sonra yeşiller olacak biçimde dizilmiştir. Başlangıç noktasında bir mavi, bitiş noktasında bir yeşil flama vardır.</p>`
      + `<p>Ardışık her iki flama arasındaki uzaklık birbirine eşit ve metre cinsinden bir doğal sayıdır. Başlangıç noktasından ilk kırmızı flamaya uzaklık 900 m, ilk yeşil flamaya uzaklık ise 1485 m'dir.</p>`
      + `<p class="ask">Bu yol üzerine yerleştirilen kırmızı flama sayısı, yeşil flama sayısından 3 fazla olduğuna göre, başlangıç ve bitiş noktaları arasındaki uzaklık <u>en az</u> kaç metredir?</p>`,
    opts: ['1620', '1705', '1890', '1985'], ans: 2,
    hints: [`Aralık d, hem 900'ü hem 585'i böler.`],
    steps: [
      `d, EBOB(900, 585) = 45'i böler. Kırmızı sayısı 585 / d, yeşil sayısı 585/d − 3`,
      `Bitiş: 1485 + (yeşil − 1) · d = 1485 + 585 − 4d = 2070 − 4d`,
      `En az için d en büyük: d = 45 → <b>1890</b> m`
    ],
    answer: `Cevap: <b>C</b>`
  },
  {
    no: 27, konu: EB, sayfa: 14,
    q: `<p>Kısa kenar uzunluğu 4 cm olan dikdörtgen şeklinde iki eş çıta (yeşil ve turuncu) vardır. Bu çıtaların her biri kısa kenarlarına paralel kesilerek elde edilen parçalarla çerçeveler yapılıyor: yeşil çerçevede dört parça iç karenin kenarlarına tam oturuyor; turuncu çerçevede dört parça fırıldak biçiminde, her biri bir kenar ve bir köşeyi kaplayacak biçimde diziliyor.</p>`
      + `<p>Elde edilen her bir çerçevenin iç bölgesi, çevresinin uzunluğu 56 cm olan bir karedir.</p><p class="ask">Çıtalardan parça artmadığına göre, <u>en az</u> kaç tane çerçeve yapılmıştır?</p>`,
    opts: ['7', '12', '16', '18'], ans: 2,
    hints: [`İç kare kenarı 14. Yeşil parça 14 cm, turuncu parça 14 + 4 = 18 cm.`],
    steps: [`Yeşil çerçeve 4 · 14 = 56 cm çıta, turuncu çerçeve 4 · 18 = 72 cm çıta`, `Çıta uzunluğu EKOK(56, 72) = 504'ün katı`, `504 / 56 = 9 yeşil + 504 / 72 = 7 turuncu = <b>16</b>`],
    answer: `Cevap: <b>C</b>`
  },
  {
    no: 28, konu: EB, sayfa: 14,
    q: `<p>Belediye görevlileri, uzunluğu 30 metreden az olan düz bir kaldırımda iki sıra gri taşın arasına görme engelliler için kare biçimli sarı taşları bir sıra hâlinde yerleştirmiştir. Gri taşların uzunluğu 70 cm, sarı taşların bir kenarı 40 cm'dir. Taşlar bölünmeden, üst üste gelmeden ve boşluk kalmadan kaldırımın başından sonuna dizilmiştir.</p>`
      + `<p class="ask">Bu kaldırıma yerleştirilen sarı renkli taşların sayısı <u>en çok</u> kaçtır?</p>`,
    opts: ['40', '44', '70', '74'], ans: 2,
    hints: [`Kaldırım uzunluğu hem 70'in hem 40'ın katı.`],
    steps: [`EKOK(70, 40) = 280 cm → uzunluk 280'in katı ve 3000'den küçük → en çok 2800`, `Sarı taş: 2800 / 40 = <b>70</b>`],
    answer: `Cevap: <b>C</b>`
  },
  {
    no: 29, konu: EB, sayfa: 15,
    q: `<p>Bir kırtasiyede 640 adet kırmızı ve 520 adet mavi bilye vardır. Bu bilyelerin tamamı, her kutuda eşit sayıda ve aynı renkte bilyeler olmak üzere <u>en az</u> sayıda kutuya konularak satılacaktır. 1 kırmızı bilye kutusu 60 TL, 1 futbol topu 75 TL'dir.</p>`
      + `<p>Bu kırtasiyede gün sonunda kırmızı bilye kutusu ile futbol topu satışından elde edilen gelir birbirine eşit ve satılmayan mavi bilye kutusu sayısı, satılmayan kırmızı bilye kutusu sayısının 3 katıdır.</p>`
      + `<p class="ask">Aynı günün sonunda bu üç ürünün satışından elde edilen toplam gelir 2500 TL olduğuna göre, 1 mavi bilye kutusunun fiyatı kaç TL'dir?</p>`,
    opts: ['40', '50', '60', '70'], ans: 3,
    hints: [`EBOB(640, 520) = 40 → 16 kırmızı, 13 mavi kutu.`],
    steps: [
      `60r = 75f → r, 5'in katı. Satılmayan mavi = 3 · satılmayan kırmızı → 13 − b = 3(16 − r) → b = 3r − 35 ≥ 0 → r ≥ 12 → r = 15`,
      `r = 15 → f = 12, b = 10. Gelir: 900 + 900 + 10p = 2500 → p = <b>70</b>`
    ],
    answer: `Cevap: <b>D</b>`
  },
  {
    no: 30, konu: CA, sayfa: 15,
    q: `<p>Dikdörtgen biçimindeki bir iş yerinin kat planı üç sıradan oluşuyor:</p>`
      + tablo([['Üst sıra', 'Toplantı odası 24 m²', 'Arşiv ?', 'Kütüphane 21 m²'], ['Orta sıra', 'Koridor 32 m² (boydan boya)', '', ''], ['Alt sıra', 'Yönetici odası 30 m²', 'Mutfak ?', 'Çalışma ofisleri 35 m²']])
      + `<p>Bu iş yerindeki dikdörtgen biçimindeki bölümlerin her birinin kenar uzunlukları metre cinsinden birer doğal sayıdır.</p><p class="ask">Buna göre planda alanları verilmeyen arşiv ve mutfak bölümlerinin alanları toplamı <u>en az</u> kaç metrekaredir?</p>`,
    opts: ['12', '18', '21', '24'], ans: 1,
    hints: [`Üst sıra yüksekliği 24 ve 21'i, alt sıra yüksekliği 30 ve 35'i böler. Plan genişliği 32'yi böler.`],
    steps: [`Üst yükseklik 3 → genişlikler 8 ve 7. Alt yükseklik 5 → genişlikler 6 ve 7`, `Genişlik W ≥ 16, 32'yi böler → W = 16`, `Arşiv: (16 − 15) · 3 = 3. Mutfak: (16 − 13) · 5 = 15 → toplam <b>18</b>`],
    answer: `Cevap: <b>B</b>`
  },
  {
    no: 31, konu: EB, sayfa: 16,
    q: `<p>Beren'in her birinde yalnızca madenî 1 TL'lerin bulunduğu iki kumbarası vardır. Bu kumbaralardan birinde 150 adet, diğerinde 90 adet madenî para bulunmaktadır.</p>`
      + `<p>Beren her gün bu kumbaraların birinden diğer kumbaradaki para kadar alıp harcadığında bir süre sonra kumbaralarda kalan para sayıları eşitleniyor.</p>`
      + `<p class="ask">Buna göre son durumda bir kumbarada kalan para sayısı ile ilgili;<br>I. Herhangi bir günün sonunda kumbaralarda kalan para sayılarının toplamını tam böler.<br>II. Herhangi bir günün sonunda kumbaralarda kalan para sayılarının çarpımını tam böler.<br>III. Herhangi bir günün sonunda kumbaralarda kalan para sayılarının EBOB'udur.<br>ifadelerinden hangileri doğrudur?</p>`,
    opts: ['Yalnız III', 'I ve II', 'II ve III', 'I, II ve III'], ans: 3,
    hints: [`Büyükten küçüğü çıkarmak EBOB'u değiştirmez.`],
    steps: [`150, 90 → 60, 90 → 60, 30 → 30, 30. Son durum 30 = EBOB(150, 90)`, `Her gün iki sayının EBOB'u 30 kalır → 30 her iki sayıyı böler`, `Toplamı ve çarpımı da böler; EBOB'a eşittir → <b>I, II ve III</b>`],
    answer: `Cevap: <b>D</b>`
  },
  {
    no: 32, konu: EB, sayfa: 16,
    q: `<p>Bir kırtasiyede 60 adet kırmızı kalem, 72 adet mavi kalem ve 42 adet kalem kutusu bulunmaktadır. Bu kalemlerin tamamı her biri en fazla 15 kalem alan bu kutulara, her birinde eşit sayıda ve yalnızca bir renkten kalemler bulunmak şartıyla yerleştiriliyor. Daha sonra bu kalemler kalem kutuları ile birlikte satışa sunuluyor.</p>`
      + `<p class="ask">Buna göre satışa sunulan kalem kutusu sayısı <u>en fazla</u> kaçtır?</p>`,
    opts: ['11', '22', '33', '39'], ans: 2,
    hints: [`Kutudaki kalem sayısı d, 60 ve 72'yi böler; kutu sayısı 132 / d ≤ 42.`],
    steps: [`d, EBOB(60, 72) = 12'yi böler: 1, 2, 3, 4, 6, 12`, `132 / d ≤ 42 → d ≥ 4 → en küçük d = 4 → <b>33</b> kutu`],
    answer: `Cevap: <b>C</b>`
  },
  {
    no: 33, konu: EB, sayfa: 17,
    q: tablo([['Traktör', '1 dekar için yakıt (TL)'], ['A', '15'], ['B', '20'], ['C', '16'], ['D', '24']])
      + `<p>A ve B marka traktörler, 50 dekardan küçük bir araziyi birlikte sürerek TL cinsinden eşit tutarlarda yakıt tüketmişlerdir. C ve D marka traktörler ise 120 dekardan küçük bir araziyi birlikte sürerek TL cinsinden eşit tutarlarda yakıt tüketmişlerdir. Her bir traktörün sürdüğü arazinin alanı dekar cinsinden birer doğal sayıdır.</p>`
      + `<p class="ask">Buna göre bu traktörlerin tükettikleri yakıtların toplam tutarı <u>en fazla</u> kaç Türk lirasıdır?</p>`,
    opts: ['3144', '3048', '2412', '2348'], ans: 1,
    hints: [`15a = 20b → a = 4k, b = 3k. 16c = 24d → c = 3m, d = 2m.`],
    steps: [`A–B: 7k < 50 → k = 7 → her biri 15 · 28 = 420 → 840`, `C–D: 5m < 120 → m = 23 → her biri 16 · 69 = 1104 → 2208`, `Toplam <b>3048</b> TL`],
    answer: `Cevap: <b>B</b>`
  },
  {
    no: 34, konu: EB, sayfa: 17,
    q: `<p>10 kg domatesten 1 kg domates salçası, 6 kg biberden 1 kg biber salçası elde edilmektedir. Ayşe, domates ve biber salçası yapmak için 150 kg domates ile 120 kg biber almıştır. Ayşe, aldığı domateslerin ve biberlerin tamamını kullanarak salçalarını yapmıştır. Ayşe, bu iki tür salçayı birbirine karışmayacak ve hiç artmayacak şekilde ölçüsü kilogram cinsinden doğal sayı olan, eşit büyüklükteki kavanozlara dolduracaktır.</p>`
      + `<p class="ask">Buna göre Ayşe bu iş için <u>en az</u> kaç kavanoz kullanır?</p>`,
    opts: ['5', '7', '9', '11'], ans: 1,
    hints: [`15 kg domates salçası, 20 kg biber salçası.`],
    steps: [`EBOB(15, 20) = 5 kg'lık kavanoz`, `3 + 4 = <b>7</b> kavanoz`],
    answer: `Cevap: <b>B</b>`
  },
  {
    no: 35, konu: EB, sayfa: 18,
    q: `<p>Bir parkta üç koşu parkurunun başlangıç noktası A'dır. Ali 1, Eren 2, Mehmet 3 numaralı parkurda aynı anda koşmaya başlayarak 1 saat boyunca koşuyorlar. Ali bir turu 120 saniyede, Eren 50 saniyede, Mehmet ise 40 saniyede tamamlamaktadır. İlk yarım saatten sonra Ali hızını azaltarak bundan sonraki her bir turu 150 saniyede tamamlamıştır.</p>`
      + `<p class="ask">Ali'nin Eren ve Mehmet ile A noktasında karşılaşma durumları ile ilgili aşağıdaki ifadelerden hangisi doğrudur?</p>`,
    opts: ['Mehmet ile 1 saatlik koşu süresince toplam 15 kez karşılaşmıştır.', 'Eren ile 1 saatlik koşu süresince Mehmet\'e göre daha fazla sayıda karşılaşmıştır.', 'Eren ile ilk yarım saatte, ikinci yarım saate göre daha fazla sayıda karşılaşmıştır.', 'Mehmet ile ikinci yarım saatte, ilk yarım saate göre daha az sayıda karşılaşmıştır.'], ans: 3, long: true,
    hints: [`İlk yarım saat: EKOK(120, 50) = 600, EKOK(120, 40) = 120. İkinci yarım saat Ali 1800 + 150k'da A'da.`],
    steps: [
      `İlk yarım saat (1800 sn): Eren ile 600, 1200, 1800 → 3 kez; Mehmet ile her 120 sn → 15 kez`,
      `İkinci yarım saat: Ali 1800 + 150k (k = 1…12). Eren (50'nin katı) → 12 kez; Mehmet (40'ın katı) → k = 4, 8, 12 → 3 kez`,
      `Mehmet ile ikinci yarıda 3 < 15 → <b>D</b> doğru (A: 18 kez, B: Eren 15 < Mehmet 18, C: 3 < 12)`
    ],
    answer: `Cevap: <b>D</b>`
  },
  {
    no: 36, konu: EB, sayfa: 18,
    q: `<p>A ve B radyolarında saat 10.00'da başlayan müzik programları yayınlanmaktadır. A radyosunda her 12 dakikalık müzik yayınının ardından 4 dakikalık reklam, B radyosunda ise her 16 dakikalık müzik yayınının ardından 4 dakikalık reklam yayını yapılmaktadır. Bu programlar başladıktan bir süre sonra Banu aynı anda A ve B radyolarını açtığında her iki radyoda da reklam yayını vardır.</p>`
      + `<p class="ask">Her iki program da müzik ile yayına başladığına göre Banu'nun radyoları açtığı saat aşağıdakilerden hangisi olabilir?</p>`,
    opts: ['11.15', '11.18', '11.21', '11.23'], ans: 1,
    hints: [`A'da reklam: 16'ya bölümden kalan 12–15. B'de: 20'ye bölümden kalan 16–19.`],
    steps: [`11.18 = 78. dakika: 78'in 16'ya bölümünden kalan 14 (reklam) ✓, 20'ye bölümünden kalan 18 (reklam) ✓`, `11.15 → 75: kalan 11 (müzik) · 11.21 → 81: kalan 1 · 11.23 → 83: kalan 3`],
    answer: `Cevap: <b>B</b>`
  },
  {
    no: 37, konu: EB, sayfa: 19,
    q: tablo([['Şeker', 'Sütlü', 'Meyveli', 'Çikolatalı', 'Naneli'], ['Adet', '45', '54', '60', '72']])
      + `<p>Verilen bu dört kutu, her grupta iki kutu olacak şekilde gruplara ayrılıyor. Önce bu gruplardan birindeki şekerlerin tamamı her bir poşette eşit sayıda ve tek tür şeker olacak şekilde poşetlere dolduruluyor. Sonra da diğer gruptaki şekerlerin tamamı her poşette eşit sayıda ve tek tür şeker olacak şekilde poşetlere dolduruluyor.</p>`
      + `<p class="ask">Bu poşetlerin her birinde 3'ten fazla şeker bulunduğuna göre, farklı türde şeker bulunan iki poşetteki şeker sayıları arasındaki fark <u>en fazla</u> kaçtır?</p>`,
    opts: ['5', '9', '13', '15'], ans: 2,
    hints: [`Bir gruptaki poşet sayısı, iki kutunun ortak böleni ve 3'ten büyük.`],
    steps: [`{45, 60} → 5 veya 15; {54, 72} → 6, 9 veya 18`, `Bu eşleşmede 18 − 5 = <b>13</b>`, `Diğer eşleşmeler: {45, 54}–{60, 72} → en çok 9 − 4 = 5; {45, 72}–{54, 60} → 9 − 6 = 3`],
    answer: `Cevap: <b>C</b>`
  },
  {
    no: 38, konu: EB, sayfa: 19,
    q: `<p>Mehmet, tekerlerinin merkezlerinin yere olan uzaklıkları 30 cm ile 40 cm olan iki bisikleti aynı mesafede sürerek deniyor. Her iki bisikletin de tekerleklerinin tam tur atarak mesafeyi tamamladığını görüyor.</p><p class="ask">Buna göre Mehmet'in bisikletleri denediği mesafe <u>en az</u> kaç santimetredir? (π yerine 3 alınız.)</p>`,
    opts: ['400', '420', '700', '720'], ans: 3,
    hints: [`Teker çevresi 2πr: 180 ve 240 cm.`],
    steps: [`Çevreler: 2 · 3 · 30 = 180, 2 · 3 · 40 = 240`, `EKOK(180, 240) = <b>720</b> cm`],
    answer: `Cevap: <b>D</b>`
  },
  {
    no: 39, konu: CA, sayfa: 20,
    q: `<p>Bir okulun her katındaki sınıflar 1'den 5'e kadar numaralandırılmıştır. Bir sınav için 1, 2 ve 3. katlardaki tüm sınıflara önce sınıfın bulunduğu kat numarası, sonra sınıfa verilen numara yazılarak salon numaraları oluşturulmuştur (örneğin 1. kattaki 4. sınıf: 14).</p>`
      + `<p>Eylül ve Zeynep bu okulda salon numarası asal olmayan farklı sınıflarda sınava girmişlerdir. Sınava girdikleri bu sınıfların salon numaralarının yalnızca bir tane asal çarpanı vardır.</p><p class="ask">Buna göre bu salon numaralarının en küçük ortak katı kaçtır?</p>`,
    opts: ['100', '300', '600', '800'], ans: 3,
    hints: [`Salon numaraları: 11–15, 21–25, 31–35. Asal olmayan ama tek asal çarpanlı: asal kuvvetleri.`],
    steps: [`Uygun numaralar: 25 = 5² ve 32 = 2⁵`, `EKOK(25, 32) = <b>800</b>`],
    answer: `Cevap: <b>D</b>`
  },
  {
    no: 40, konu: EB, sayfa: 20,
    q: `<p>Maraton, 42 195 metrelik bir koşu yarışıdır. Bir maratonda yolun sol tarafına eşit aralıklarla su istasyonları, sağ tarafına ise eşit aralıklarla gıda istasyonları kurulacaktır. Yarışın bittiği noktada her iki istasyonun da karşılıklı birer tane olması istenmektedir.</p>`
      + `<p class="ask">Bu istasyonların aralarındaki mesafeler aşağıdaki seçeneklerin hangisindeki gibi olursa karşılıklı istasyon sayısı <u>en az</u> olur? (Su – Gıda)</p>`,
    opts: ['2,5 km – 3,5 km', '2,5 km – 4,5 km', '3 km – 4 km', '3 km – 4,5 km'], ans: 1, long: true,
    hints: [`Karşılıklı istasyonlar bitişten geriye EKOK aralıklarla dizilir. EKOK büyük olursa sayı azalır.`],
    steps: [`EKOK: A) 17,5 · B) 22,5 · C) 12 · D) 9 km`, `Karşılıklı sayısı (bitiş dâhil): A) 3 · B) 2 · C) 4 · D) 5`, `En az: <b>B</b>`],
    answer: `Cevap: <b>B</b>`
  }
  );
})();
