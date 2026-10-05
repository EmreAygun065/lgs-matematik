// MEB örnek soruları 1–20
(function () {
  const T1 = 'Tam sayıların tam sayı kuvvetleri', T2 = 'Temel kurallar';

  const kesimKare = svg(300, 290, (() => {
    let g = `<rect x="20" y="20" width="250" height="250" fill="var(--fig-yellow)" stroke="var(--fig-stroke)" stroke-width="1.5"/>`;
    for (let i = 1; i < 4; i++) g += `<line x1="20" y1="${20 + i * 62.5}" x2="270" y2="${20 + i * 62.5}" stroke="var(--accent)" stroke-dasharray="5 4" stroke-width="1.5"/>`;
    for (let j = 1; j < 9; j++) g += `<line x1="${20 + j * 250 / 9}" y1="20" x2="${20 + j * 250 / 9}" y2="270" stroke="var(--accent)" stroke-dasharray="5 4" stroke-width="1.5"/>`;
    return g + `<text x="145" y="288" text-anchor="middle" font-size="14">yatay 3 kesim, dikey 8 kesim</text>`;
  })(), 'Kare karton, yatay 3 ve dikey 8 kesim çizgisi');

  const seritKare = svg(300, 250, `
    <text x="150" y="16" text-anchor="middle" font-size="15">2⁵ cm</text>
    <rect x="50" y="25" width="200" height="40" fill="#c8956a" stroke="var(--fig-stroke)"/>
    <rect x="50" y="70" width="200" height="120" fill="#c8956a" stroke="var(--fig-stroke)"/>
    <rect x="50" y="195" width="200" height="40" fill="#c8956a" stroke="var(--fig-stroke)"/>
    <text x="40" y="70" text-anchor="end" font-size="20">✂</text><text x="40" y="196" text-anchor="end" font-size="20">✂</text>`,
    'Kare karton, üstten ve alttan iki eş şerit kesilmiş');

  const cetveller = svg(460, 140, (() => {
    const u = 52, y0 = 60;
    let g = `<text x="230" y="16" text-anchor="middle" font-size="14">Sol ⟵ ⟶ Sağ</text>`;
    g += `<rect x="${70 + u - 25}" y="25" width="${5 * u + 50}" height="36" fill="#86b8de" stroke="var(--fig-stroke)"/>`;
    g += `<rect x="45" y="${y0 + 2}" width="${5 * u + 50}" height="36" fill="#f6ec7c" stroke="var(--fig-stroke)"/>`;
    for (let k = 0; k <= 5; k++) {
      g += `<line x1="${70 + u * (k + 1)}" y1="25" x2="${70 + u * (k + 1)}" y2="35" stroke="#1f2328"/><text x="${70 + u * (k + 1)}" y="52" text-anchor="middle" font-size="15" style="fill:#1f2328">${k}</text>`;
      g += `<line x1="${70 + u * k}" y1="${y0 + 2}" x2="${70 + u * k}" y2="${y0 + 12}" stroke="#1f2328"/><text x="${70 + u * k}" y="${y0 + 30}" text-anchor="middle" font-size="15" style="fill:#1f2328">${k}</text>`;
    }
    return g + `<text x="400" y="45" font-size="13">mavi</text><text x="360" y="${y0 + 26}" font-size="13">sarı</text>`;
  })(), 'Üst üste iki cetvel: mavi cetvel sarı cetvele göre 1 cm sağda');

  ORNEK.push(
  {
    no: 1, konu: T1, sayfa: 1,
    q: `<p>Zeynep'in elinde sarı (300 cm), mavi (405 cm) ve kırmızı (600 cm) olmak üzere üç farklı renkte ip bulunmaktadır.</p>`
      + `<p>Zeynep bu ipleri her biri kendi içinde eş olan parçalara bölecektir. Sarı ipin her bir parçası 2'nin pozitif tam sayı kuvveti, mavi ipin her bir parçası 3'ün pozitif tam sayı kuvveti, kırmızı ipin her bir parçası 5'in pozitif tam sayı kuvveti uzunluğunda olacaktır.</p>`
      + `<p class="ask">Buna göre Zeynep üç ipten <u>en az</u> kaç parça elde eder?</p>`,
    opts: ['82', '95', '104', '125'], ans: 2,
    hints: [`En az parça için her parça mümkün olduğunca <b>uzun</b> olmalı.`, `Parça uzunluğu ipin uzunluğunu tam bölmeli. 300'ü bölen en büyük 2 kuvveti hangisi?`],
    steps: [
      `Sarı: 300 = 2<sup>2</sup> · 75 → 300'ü bölen en büyük 2 kuvveti <b>4</b> → 300 / 4 = <b>75 parça</b>`,
      `Mavi: 405 = 3<sup>4</sup> · 5 → en uzun parça <b>81</b> → 405 / 81 = <b>5 parça</b>`,
      `Kırmızı: 600 = 5<sup>2</sup> · 24 → en uzun parça <b>25</b> → 600 / 25 = <b>24 parça</b>`,
      `Toplam: 75 + 5 + 24 = <b>104</b>`
    ],
    answer: `En az <b>104</b> parça. Cevap: <b>C</b>`,
    trap: `300'ü 2<sup>3</sup> = 8'e bölmeye çalışmak: 300 / 8 = 37,5 tam değil. Parça uzunluğu ipi tam bölmeli.`
  },
  {
    no: 2, konu: T1, sayfa: 1,
    q: `<p>Eylül Hanım, kredi kartı için her hanesinde bir rakam olan dört haneli bir şifre belirleyecektir. Bunun için soldan sağa doğru ilk haneye yazdığı rakamın karesini ikinci haneye ve ikinci haneye yazdığı rakamın karesini son iki haneye yazarak şifresini oluşturuyor.</p>`
      + `<p class="ask">Eylül Hanım'ın oluşturduğu şifrenin son rakamı 6 olduğuna göre ilk rakamı kaçtır?</p>`,
    opts: ['1', '2', '3', '4'], ans: 1,
    hints: [`İkinci hanedeki sayı tek bir rakam olmalı. İlk rakam en fazla kaç olabilir?`],
    steps: [
      `İlk rakam a ise ikinci hane a<sup>2</sup> → tek rakam olması için a ≤ 3.`,
      `Son iki hane (a<sup>2</sup>)<sup>2</sup> = a<sup>4</sup>: a = 1 → 01 · a = 2 → <b>16</b> · a = 3 → 81`,
      `Son rakamı 6 olan a = 2 → şifre <b>2416</b>`
    ],
    answer: `İlk rakam <b>2</b>. Cevap: <b>B</b>`,
    trap: `a = 4 alıp 4<sup>2</sup> = 16 demek: 16 iki basamaklı olduğu için ikinci haneye sığmaz.`
  },
  {
    no: 3, konu: T1, sayfa: 2,
    q: `<p>Bir marketteki ürünlere 6 haneli barkodlar veriliyor. Bilgisayar, barkoddaki numaraları <b>sağdan sola</b> doğru sırasıyla 3'ün doğal sayı kuvvetleriyle çarpıyor ve elde edilen sayıların toplamını bu ürünün takip numarası olarak belirliyor.</p>`
      + `<p>Örneğin 0 1 2 2 1 1 barkodlu ürünün takip numarası 1·3<sup>0</sup> + 1·3<sup>1</sup> + 2·3<sup>2</sup> + 2·3<sup>3</sup> + 1·3<sup>4</sup> + 0·3<sup>5</sup> = 157 şeklinde hesaplanıyor.</p>`
      + `<p class="ask">Buna göre bu markette aşağıdaki barkoda sahip ürünlerden hangisinin takip numarası 37'dir?</p>`,
    opts: ['0 1 1 2 1 0', '0 0 1 2 0 1', '0 0 1 1 0 1', '0 1 0 1 0 0'], ans: 2,
    hints: [`37'yi 3'ün kuvvetlerinin toplamı olarak yaz: 1, 3, 9, 27, 81…`],
    steps: [
      `37 = 27 + 9 + 1 = 1·3<sup>3</sup> + 1·3<sup>2</sup> + 0·3<sup>1</sup> + 1·3<sup>0</sup>`,
      `Sağdan sola rakamlar: 3<sup>0</sup>→1, 3<sup>1</sup>→0, 3<sup>2</sup>→1, 3<sup>3</sup>→1, 3<sup>4</sup>→0, 3<sup>5</sup>→0 → barkod <b>0 0 1 1 0 1</b>`,
      `Kontrol: A = 129, B = 46, D = 90 çıkar.`
    ],
    answer: `Takip numarası 37 olan barkod <b>0 0 1 1 0 1</b>. Cevap: <b>C</b>`,
    trap: `Rakamları soldan sağa 3<sup>0</sup>, 3<sup>1</sup>… ile çarpmak. Örnekte olduğu gibi en sağdaki rakam 3<sup>0</sup> ile çarpılır.`
  },
  {
    no: 4, konu: T1, sayfa: 2,
    q: `<p>Bir oyuncak kamyonun dört tekeri, yarıçap uzunluklarına göre küçükten büyüğe doğru K, L, M ve N biçiminde sıralanmıştır. Bu kamyon, doğrusal bir yol boyunca hareket ettikten bir süre sonra N tekeri 1 tur attığında diğer tekerlerin tur sayıları 2'nin doğal sayı kuvveti şeklinde yazılabilmektedir.</p>`
      + `<p class="ask">Buna göre, K tekeri 10<sup>4</sup> tur attığında N tekerinin tur sayısı <u>en fazla</u> kaçtır?</p>`,
    opts: ['50', '250', '1250', '6250'], ans: 2,
    hints: [`Küçük teker aynı yolda daha çok tur atar. N 1 tur atarken M, L ve K'nin turları farklı ve gittikçe artıyor.`],
    steps: [
      `Aynı yol için küçük teker daha çok döner. N 1 tur → M: 2<sup>a</sup>, L: 2<sup>b</sup>, K: 2<sup>c</sup> tur ve 1 &lt; 2<sup>a</sup> &lt; 2<sup>b</sup> &lt; 2<sup>c</sup>`,
      `En küçük değerler: a = 1, b = 2, c = 3 → K, N'nin en az <b>8 katı</b> tur atar.`,
      `N'nin turu en fazla: 10<sup>4</sup> / 8 = <b>1250</b>`
    ],
    answer: `N tekeri en fazla <b>1250</b> tur atar. Cevap: <b>C</b>`,
    trap: `M'nin tur sayısını 2<sup>0</sup> = 1 almak: M, N'den küçük olduğu için N'den fazla döner.`
  },
  {
    no: 5, konu: T1, sayfa: 3,
    q: `<p>Bir kenarının uzunluğu 200 cm'den küçük olan kare şeklindeki bir karton, aşağıdaki gibi yatay olarak 3 kez, dikey olarak 8 kez kesilerek eş dikdörtgenler elde ediliyor.</p>`
      + `<div class="fig">${kesimKare}</div>`
      + `<p>Elde edilen dikdörtgenlerin bir kenarının santimetre cinsinden uzunluğu 2'nin bir pozitif tam sayı kuvvetine, diğer kenarının santimetre cinsinden uzunluğu ise 6'nın bir pozitif tam sayı kuvvetine eşittir.</p>`
      + `<p class="ask">Buna göre, elde edilen dikdörtgenlerden birinin çevresinin uzunluğu kaç santimetredir?</p>`,
    opts: ['26', '52', '72', '104'], ans: 3,
    hints: [`3 yatay kesim kâğıdı kaç sıraya, 8 dikey kesim kaç sütuna ayırır?`],
    steps: [
      `Karenin kenarı s olsun. 3 yatay kesim → <b>4 sıra</b>, 8 dikey kesim → <b>9 sütun</b>. Dikdörtgen: s/9 × s/4`,
      `s/4 = 6<sup>m</sup> ve s/9 = 2<sup>n</sup> olmalı (s/4 = 2<sup>n</sup> olursa s, 9'un katı olamaz). 4 · 6<sup>m</sup> = 9 · 2<sup>n</sup> → m = 2, n = 4 → <b>s = 144</b> (&lt; 200 ✓)`,
      `Dikdörtgen 144/9 = <b>16</b> cm ve 144/4 = <b>36</b> cm → çevre 2 · (16 + 36) = <b>104</b>`
    ],
    answer: `Çevre <b>104 cm</b>. Cevap: <b>D</b>`,
    trap: `3 kesimi 3 parça sanmak. n kesim, n + 1 parça oluşturur.`
  },
  {
    no: 6, konu: T1, sayfa: 3,
    q: `<p>Bir kenar uzunluğu 2<sup>5</sup> cm olan kare şeklindeki bir kartondan kısa kenar uzunlukları santimetre cinsinden 2'nin pozitif tam sayı kuvveti olan dikdörtgen şeklindeki iki eş parça aşağıdaki gibi kesilerek ayrılıyor.</p>`
      + `<div class="fig">${seritKare}</div>`
      + `<p>Yağmur, elde edilen iki eş parçayı kenar uzunluğu en büyük olan eş karelere bölüyor. Diğer parçayı da Eda kenar uzunluğu en büyük olan eş karelere bölüyor.</p>`
      + `<p class="ask">Buna göre Eda'nın oluşturduğu karelerden biri ile Yağmur'un oluşturduğu karelerden birinin birer kenar uzunlukları toplamı aşağıdakilerden hangisi <u>olamaz</u>?</p>`,
    opts: ['6', '12', '18', '24'], ans: 2,
    hints: [`Eş parçaların kısa kenarı h = 2, 4 veya 8 olabilir. Her durum için ortadaki parçanın boyutlarını yaz.`],
    steps: [
      `Eş parçalar 32 × h (h = 2<sup>k</sup>), ortadaki parça 32 × (32 − 2h). h &lt; 16 olmalı → h = 2, 4 veya 8.`,
      `Yağmur'un karesinin kenarı <b>h</b>. Eda'nınki 32 ile 32 − 2h'nin en büyük ortak böleni.`,
      `h = 2: orta 28 → EBOB 4 → 2 + 4 = <b>6</b><br>h = 4: orta 24 → EBOB 8 → 4 + 8 = <b>12</b><br>h = 8: orta 16 → EBOB 16 → 8 + 16 = <b>24</b>`
    ],
    answer: `Toplam 6, 12 veya 24 olabilir; <b>18 olamaz</b>. Cevap: <b>C</b>`,
    trap: `h = 1 almak: 1 = 2<sup>0</sup>, “pozitif” tam sayı kuvveti değildir.`
  },
  {
    no: 7, konu: T1, sayfa: 4,
    q: `<p>Çağla her birinin kütlesi 2 g olan mavi boncuklar ve her birinin kütlesi 4 g olan sarı boncuklar ile 100 metresinin kütlesi 200 g olan ipi kullanarak toplam kütlesi 81 g olan bir kolye yapmıştır.</p>`
      + `<p>Kolyede kullanılan mavi boncukların toplam kütlesi gram cinsinden 2'nin bir pozitif tam sayı kuvvetine, sarı boncukların toplam kütlesi ise gram cinsinden 4'ün bir pozitif tam sayı kuvvetine eşittir.</p>`
      + `<p class="ask">Bu kolyedeki ipin uzunluğu 0,5 metre olduğuna göre <u>en az</u> kaç tane boncuk kullanılmıştır?</p>`,
    opts: ['12', '24', '36', '48'], ans: 1,
    hints: [`0,5 m ip kaç gram? Boncukların toplam kütlesi kaç gram kalır?`],
    steps: [
      `100 m ip 200 g → 1 m 2 g → 0,5 m ip <b>1 g</b>. Boncuklar: 81 − 1 = <b>80 g</b>`,
      `Mavi toplam 2<sup>a</sup>, sarı toplam 4<sup>b</sup>, toplamları 80: <b>64 + 16</b> (2<sup>6</sup> + 4<sup>2</sup>) veya <b>16 + 64</b> (2<sup>4</sup> + 4<sup>3</sup>)`,
      `1. durum: 64/2 = 32 mavi + 16/4 = 4 sarı = 36 · 2. durum: 16/2 = 8 mavi + 64/4 = 16 sarı = <b>24</b>`
    ],
    answer: `En az <b>24</b> boncuk. Cevap: <b>B</b>`,
    trap: `İlk bulunan durumu (36) cevap sanmak. “En az” soruluyor, iki durumu da denemek gerekir.`
  },
  {
    no: 8, konu: T1, sayfa: 4,
    q: `<p>Emir ve Tuna −3, −2, −1, 0, 1, 2, 3 sayılarından birini taban diğerini kuvvet olacak şekilde kullanarak üslü ifadeler elde ediyorlar.</p>`
      + `<p>Emir, 1 ve 2 sayılarını kullanarak bir üslü ifade elde edip değerini hesaplıyor. Tuna ise değeri, Emir'in elde ettiği üslü ifadenin değerinden daha büyük olan üslü ifadeler elde ederek değerlerini hesaplıyor.</p>`
      + `<p class="ask">Buna göre, Tuna'nın elde edebileceği üslü ifadelerin sayısı <u>en az</u> kaçtır?</p>`,
    opts: ['4', '5', '6', '7'], ans: 1,
    hints: [`Emir'in ifadesi 1<sup>2</sup> ya da 2<sup>1</sup> olabilir. Tuna'nın en az ifade bulması için Emir'inki büyük olmalı.`],
    steps: [
      `Emir: 1<sup>2</sup> = 1 veya 2<sup>1</sup> = 2. “En az” için Emir'in değeri <b>2</b> olmalı.`,
      `Taban ve üs farklı sayılar. 2'den büyük olanlar: 3<sup>1</sup> = 3, 3<sup>2</sup> = 9, 2<sup>3</sup> = 8, (−2)<sup>2</sup> = 4, (−3)<sup>2</sup> = 9`,
      `Diğerleri (negatif üsler, (−2)<sup>3</sup>, 0 ve ±1 tabanlar) 2'yi geçemez → <b>5 ifade</b>`
    ],
    answer: `Tuna en az <b>5</b> ifade elde eder. Cevap: <b>B</b>`,
    trap: `(−2)<sup>2</sup> ve (−3)<sup>2</sup>'yi unutmak: negatif tabanın çift kuvveti pozitiftir.`
  },
  {
    no: 9, konu: T1, sayfa: 5,
    q: `<p>Aşağıda ön yüzünde birer tam sayı yazılı olan kartlar verilmiştir.</p>`
      + kartlar(['−6', '−2', '+1', '−1', '0', '−3'])
      + `<p>Bu kartlardan, en küçük değere sahip üslü ifade oluşacak şekilde 2 kart seçiliyor. Daha sonra kalan kartlardan biri üs diğeri taban olacak şekilde 2 kart seçilerek bir üslü ifade oluşturuluyor.</p>`
      + `<p class="ask">Buna göre, oluşturulan üslü ifadenin değerinin 1'e eşit olduğu kaç farklı olası durum vardır?</p>`,
    opts: ['3', '4', '5', '6'], ans: 1,
    hints: [`En küçük değer için negatif bir tabanı tek (pozitif) bir üsle kullan.`, `Bir ifade ne zaman 1 olur? (Üs 0 ise ya da taban −1 ve üs çift ise.)`],
    steps: [
      `En küçük ifade: (−6)<sup>+1</sup> = <b>−6</b>. Kalan kartlar: −2, −1, 0, −3`,
      `Üs 0 olursa: (−2)<sup>0</sup>, (−1)<sup>0</sup>, (−3)<sup>0</sup> → 3 durum`,
      `Taban −1, üs çift: (−1)<sup>−2</sup> = 1 → 1 durum. Toplam <b>4</b>`
    ],
    answer: `<b>4</b> farklı durum. Cevap: <b>B</b>`,
    trap: `(−1)<sup>−2</sup>'yi unutmak ya da 0<sup>0</sup>'ı saymak (0 kartı bir kez var, hem taban hem üs olamaz).`
  },
  {
    no: 10, konu: T1, sayfa: 5,
    q: `<p>Doğal sayı kodlama tekniğinde harfler A = 2<sup>0</sup>, B = 2<sup>1</sup>, C = 2<sup>2</sup>, Ç = 2<sup>3</sup>, D = 2<sup>4</sup>, E = 2<sup>5</sup>, F = 2<sup>6</sup>, G = 2<sup>7</sup>, Ğ = 2<sup>8</sup>, H = 2<sup>9</sup>, … şeklinde 2'nin kuvvetlerine karşılık gelir.</p>`
      + `<p>Kodlanacak doğal sayı 2'nin doğal sayı kuvvetlerinin toplamı şeklinde yazılır, her kuvvete karşılık gelen harf bulunur ve harfler alfabetik sırayla yazılır. Örneğin 85 = 2<sup>6</sup> + 2<sup>4</sup> + 2<sup>2</sup> + 2<sup>0</sup> olduğundan “ACDF” şeklinde kodlanır.</p>`
      + `<p>Doruk bu tekniği kullanarak toplamları 200 olan iki doğal sayıyı kodlamıştır.</p>`
      + `<p class="ask">Doruk'un bulduğu kodlardan biri “ABC” olduğuna göre diğeri aşağıdakilerden hangisidir?</p>`,
    opts: ['AFH', 'ADG', 'AFG', 'CDF'], ans: 2,
    hints: [`ABC hangi sayının kodu?`],
    steps: [
      `ABC = 2<sup>0</sup> + 2<sup>1</sup> + 2<sup>2</sup> = 1 + 2 + 4 = <b>7</b>`,
      `Diğer sayı: 200 − 7 = <b>193</b> = 128 + 64 + 1 = 2<sup>7</sup> + 2<sup>6</sup> + 2<sup>0</sup>`,
      `2<sup>0</sup> → A, 2<sup>6</sup> → F, 2<sup>7</sup> → G → <b>AFG</b>`
    ],
    answer: `Diğer kod <b>AFG</b>. Cevap: <b>C</b>`,
    trap: `Türk alfabesindeki Ç ve Ğ harflerini atlamak: F = 2<sup>6</sup>, G = 2<sup>7</sup>, H = 2<sup>9</sup>'dur.`
  },
  {
    no: 11, konu: T1, sayfa: 6,
    q: `<p>Elif Öğretmen, santimetre cinsinden eşit aralıklarla bölmelendirilmiş aynı uzunluktaki iki cetveli üst üste koyup, aynı hizadaki sarı cetvel üzerindeki tam sayı taban, mavi cetvel üzerindeki tam sayı ise kuvvet olacak şekilde üslü ifadeler oluşturmuştur.</p>`
      + `<div class="fig">${cetveller}</div>`
      + `<p>Elif Öğretmen'in cetvelleri yukarıdaki gibi yerleştirdiğinde oluşturduğu üslü ifadeler 1<sup>0</sup>, 2<sup>1</sup>, 3<sup>2</sup>, 4<sup>3</sup> ve 5<sup>4</sup>'tür. Elif Öğretmen yukarıdaki konumda duran cetvellerden birini sola diğerini sağa doğru 1'er cm hareket ettirip aynı şekilde yeni üslü ifadeler oluşturmuştur.</p>`
      + `<p class="ask">Buna göre aşağıdaki sayılardan hangisi bu üslü ifadelerden birine eşit olabilir?</p>`,
    opts: ['8', '27', '64', '125'], ans: 0,
    hints: [`Biri sola, diğeri sağa 1 cm kayarsa cetveller birbirine göre kaç cm kayar?`],
    steps: [
      `Şu an sarı k, mavi k − 1 ile hizalı. Cetveller birbirine göre <b>2 cm</b> kayar (iki yöne de olabilir).`,
      `1. durum: sarı k ↔ mavi k + 1 → 0<sup>1</sup>, 1<sup>2</sup>, <b>2<sup>3</sup> = 8</b>, 3<sup>4</sup>, 4<sup>5</sup>`,
      `2. durum: sarı k ↔ mavi k − 3 → 3<sup>0</sup>, 4<sup>1</sup>, 5<sup>2</sup>`,
      `Şıklardan yalnızca <b>8</b> bu ifadeler arasında.`
    ],
    answer: `8 = 2<sup>3</sup> olabilir. Cevap: <b>A</b>`,
    trap: `Sadece bir cetveli 1 cm kaydırmak: iki cetvel zıt yönlere gidince aradaki kayma 2 cm olur.`
  },
  {
    no: 12, konu: T1, sayfa: 6,
    q: `<p>Can'ın sadece 50 kuruşla çalışan kumbarasına en fazla 200 adet madenî para atılabilmektedir. Bu kumbara; içindeki paranın TL cinsinden miktarı 2'nin bir pozitif tam sayı kuvvetine eşit olduğunda 1 sarı top, 3'ün bir pozitif tam sayı kuvvetine eşit olduğunda 1 mavi top vermektedir.</p>`
      + `<p>Can, kumbarası boş iken para atmaya başlamış ve bir süre sonra kumbaradaki para miktarını, bu süre boyunca kumbaranın verdiği top sayısına göre hesaplamak istemiştir.</p>`
      + `<p class="ask">Kumbaranın verdiği sarı top sayısı mavi top sayısının 2 katı olduğuna göre, Can'ın kumbarasındaki para miktarı <u>en çok</u> kaç Türk Lirası olabilir?</p>`,
    opts: ['27', '64,5', '80,5', '81'], ans: 2,
    hints: [`Kumbarada en fazla kaç TL olabilir? (200 · 0,5)`, `Sarı toplar 2, 4, 8, … TL'de; mavi toplar 3, 9, 27, … TL'de düşer.`],
    steps: [
      `En fazla 200 · 0,5 = <b>100 TL</b>. Sarı: 2, 4, 8, 16, 32, 64 · Mavi: 3, 9, 27, 81`,
      `Sarı = 2 · mavi: mavi 3 ise sarı 6 → para 64 TL'ye ulaşmış ama 81'e ulaşmamış: 64 ≤ x &lt; 81`,
      `Mavi 4 olsaydı sarı 8 gerekirdi (256 TL, imkânsız). Para 0,5'in katı → en çok <b>80,5 TL</b>`
    ],
    answer: `En çok <b>80,5 TL</b>. Cevap: <b>C</b>`,
    trap: `81'i seçmek: 81 TL olunca 4. mavi top düşer ve oran bozulur.`
  },
  {
    no: 13, konu: T1, sayfa: 7,
    q: `<p>Bir firmanın ışıklı tabelasının ışıklandırma sistemi açıldıktan sonra 1 dakika boyunca tabelayı aydınlatmakta, ardından 10 dakikalık aralıklarla önce 2 dakika, sonra 4 dakika, sonra 8 dakika şeklinde her defasında dakika cinsinden 2'nin tam sayı kuvvetlerine eşit artan süreler boyunca tabelayı aynı şekilde aydınlatmaya devam etmektedir.</p>`
      + `<p>Akşam 19.00'da açılan bu tabela ertesi gün sabah 06.00'a kadar açık kalmıştır.</p>`
      + `<p class="ask">Buna göre bu sürede toplam kaç dakika boyunca tabela aydınlatılmıştır?</p>`,
    opts: ['470', '480', '560', '570'], ans: 3,
    hints: [`19.00 – 06.00 arası kaç dakika?`, `Işık süreleri: 1, 2, 4, 8, … Aradaki her karanlık 10 dakika.`],
    steps: [
      `19.00 – 06.00 = 11 saat = <b>660 dakika</b>`,
      `Işık–karanlık: 1, (10), 2, (10), 4, (10), 8, (10), 16, (10), 32, (10), 64, (10), 128, (10), 256 → 256'lık yanma <b>591. dakikada</b> biter (511 ışık + 80 karanlık).`,
      `10 dakika karanlık → 601. dakikada 512 dakikalık yanma başlar ama 660'ta kapanır: <b>59 dakika</b>`,
      `Toplam ışık: 511 + 59 = <b>570 dakika</b>`
    ],
    answer: `Tabela <b>570 dakika</b> aydınlatılmıştır. Cevap: <b>D</b>`,
    trap: `Son yanmayı tamamen saymak ya da hiç saymamak. Sistem 06.00'da kapandığı için 512 dakikalık yanmanın sadece 59 dakikası gerçekleşir.`
  },
  {
    no: 14, konu: T1, sayfa: 7,
    q: `<p>Bir otelin odalarına yüzler basamağındaki rakam kat numarasını gösterecek şekilde oda numaraları verilmiştir: 1. kat 101–140, 2. kat 201–240, 3. kat 301–340, 4. kat 401–440, 5. kat 501–540.</p>`
      + `<p>Bu otelde kalan Onur ve Turgut'un oda numaraları aynı doğal sayının farklı pozitif tam sayı kuvvetleridir.</p>`
      + `<p class="ask">Buna göre Onur ve Turgut'un kaldığı odaların numaraları arasındaki fark kaçtır?</p>`,
    opts: ['256', '324', '384', '404'], ans: 2,
    hints: [`Oda numaralarının arasındaki kuvvetleri dene: 2'nin, 3'ün, 5'in kuvvetleri…`],
    steps: [
      `Aralıklardaki kuvvetler: 121 = 11<sup>2</sup>, 125 = 5<sup>3</sup>, <b>128 = 2<sup>7</sup></b>, <b>512 = 2<sup>9</sup></b> …`,
      `Aynı tabanın iki farklı kuvveti oda numarası olan tek ikili: <b>2<sup>7</sup> = 128</b> ve <b>2<sup>9</sup> = 512</b>`,
      `Fark: 512 − 128 = <b>384</b>`
    ],
    answer: `Fark <b>384</b>. Cevap: <b>C</b>`,
    trap: `2<sup>8</sup> = 256'yı oda sanmak: 2. katta odalar 201–240 arasında.`
  },
  {
    no: 15, konu: T1, sayfa: 8,
    q: `<p>Kütlesi 5 gram olan bir zincire, kütlesi 2<sup>2</sup> gram olan boncuklardan 4 adet; kütlesi 2<sup>−1</sup> gram olan boncuklardan ise 8 adet takılarak bir kolye yapılmıştır.</p>`
      + `<p class="ask">Buna göre, bu kolyenin toplam kütlesi kaç gramdır?</p>`,
    opts: ['5 · 2<sup>2</sup>', '5<sup>2</sup>', '2<sup>5</sup>', '2 · 5<sup>2</sup>'], ans: 1,
    hints: [`2<sup>−1</sup> = ${F(1, 2)}`],
    steps: [
      `Zincir 5 g + 4 · 2<sup>2</sup> = 16 g + 8 · 2<sup>−1</sup> = 4 g`,
      `Toplam: 5 + 16 + 4 = 25 = <b>5<sup>2</sup></b>`
    ],
    answer: `Kolye <b>5<sup>2</sup> g</b>. Cevap: <b>B</b>`,
    trap: `2<sup>−1</sup>'i −2 sanmak. Negatif üs, sayının tersini alır.`
  },
  {
    no: 16, konu: T2, sayfa: 8,
    q: `<p>İki satır ve iki sütundan oluşan aşağıdaki tablonun her bir bölmesine; aynı satırda bulunan üslü ifadelerin kuvvetleri birbirine eşit, aynı sütunda bulunan üslü ifadelerin ise tabanları birbirine eşit olacak şekilde birer üslü ifade yazılacaktır.</p>`
      + izgara([['x:', 'x:1. sütun', 'x:2. sütun'], ['x:1. satır', '2<sup>4</sup>', ''], ['x:2. satır', '', '3<sup>2</sup>']])
      + `<p class="ask">Buna göre, tablonun boş bırakılan bölmelerine yazılacak üslü ifadelerin çarpımı kaçtır?</p>`,
    opts: ['18<sup>4</sup>', '12<sup>4</sup>', '18<sup>2</sup>', '12<sup>2</sup>'], ans: 2,
    hints: [`Sağ üst bölme: 1. satırın kuvveti, 2. sütunun tabanı.`],
    steps: [
      `1. satırın kuvveti 4, 2. sütunun tabanı 3 → sağ üst: <b>3<sup>4</sup></b>`,
      `2. satırın kuvveti 2, 1. sütunun tabanı 2 → sol alt: <b>2<sup>2</sup></b>`,
      `Çarpım: 3<sup>4</sup> · 2<sup>2</sup> = 81 · 4 = 324 = <b>18<sup>2</sup></b> (çünkü 3<sup>4</sup> · 2<sup>2</sup> = (3<sup>2</sup> · 2)<sup>2</sup>)`
    ],
    answer: `Çarpım <b>18<sup>2</sup></b>. Cevap: <b>C</b>`,
    trap: `Kuvvetleri farklı ifadeleri “tabanları çarp, üsleri koru” diye 6<sup>4</sup> ya da 6<sup>6</sup> yapmak.`
  },
  {
    no: 17, konu: T2, sayfa: 8,
    q: `<p>Bir imalathanede, bir kenarının uzunluğu 4 m ve diğer kenarının uzunluğu 5 m olan dikdörtgen şeklinde çelik levhalar üretilmektedir. Daha sonra her bir levha kesilerek bir kare (4 m × 4 m) ve bir dikdörtgen (4 m × 1 m) parça elde edilmektedir.</p>`
      + `<p>Kare şeklindeki parçalardan 8 adet, dikdörtgen şeklindeki parçalardan ise 16 adet satılmıştır.</p>`
      + `<p class="ask">Bu levhaların 1 m<sup>2</sup> fiyatı 96 Türk lirası olduğuna göre, bu satıştan elde edilen toplam gelirin Türk lirası cinsinden üslü ifade biçiminde gösterimi aşağıdakilerden hangisidir?</p>`,
    opts: ['2<sup>11</sup>·3<sup>2</sup>', '2<sup>11</sup>·3<sup>3</sup>', '2<sup>10</sup>·3<sup>3</sup>', '2<sup>10</sup>·3<sup>2</sup>'], ans: 0,
    hints: [`Satılan toplam alanı bul, sonra hem alanı hem 96'yı asal çarpanlarına ayır.`],
    steps: [
      `Kareler: 8 · 16 = 128 m² · Dikdörtgenler: 16 · 4 = 64 m² → toplam <b>192 m²</b>`,
      `192 = 2<sup>6</sup> · 3 ve 96 = 2<sup>5</sup> · 3`,
      `Gelir: 2<sup>6</sup> · 3 · 2<sup>5</sup> · 3 = <b>2<sup>11</sup> · 3<sup>2</sup></b>`
    ],
    answer: `Gelir <b>2<sup>11</sup> · 3<sup>2</sup> TL</b>. Cevap: <b>A</b>`,
    trap: `Dikdörtgen parçanın alanını 5 m² sanmak: kesilen parça 4 × 1 = 4 m²'dir.`
  },
  {
    no: 18, konu: T2, sayfa: 9,
    q: `<p class="ask">${F('42<sup>4</sup> · 2<sup>−4</sup>', '7<sup>−2</sup> · 3<sup>6</sup>')} işleminin sonucu aşağıdakilerden hangisidir?</p>`,
    opts: ['7<sup>2</sup> · 3<sup>−2</sup>', F('7<sup>6</sup>', '3<sup>−2</sup>'), '7<sup>2</sup> · 3<sup>2</sup>', F('7<sup>6</sup>', '3<sup>2</sup>')], ans: 3,
    hints: [`42<sup>4</sup> · 2<sup>−4</sup> = (42/2)<sup>4</sup>`],
    steps: [
      `Pay: 42<sup>4</sup> · 2<sup>−4</sup> = (42 / 2)<sup>4</sup> = 21<sup>4</sup> = 3<sup>4</sup> · 7<sup>4</sup>`,
      `${F('3<sup>4</sup> · 7<sup>4</sup>', '7<sup>−2</sup> · 3<sup>6</sup>')} = 7<sup>4 − (−2)</sup> · 3<sup>4 − 6</sup> = 7<sup>6</sup> · 3<sup>−2</sup> = <b>${F('7<sup>6</sup>', '3<sup>2</sup>')}</b>`
    ],
    answer: `Sonuç ${F('7<sup>6</sup>', '3<sup>2</sup>')}. Cevap: <b>D</b>`,
    trap: `B şıkkı: ${F('7<sup>6</sup>', '3<sup>−2</sup>')} = 7<sup>6</sup> · 3<sup>2</sup>'dir, işaret tuzağı. 4 − (−2) = 6'yı 2 sanmak da A'ya götürür.`
  },
  {
    no: 19, konu: T2, sayfa: 9,
    q: `<p class="ask">${F('125<sup>4</sup> · 25<sup>3</sup>', '625<sup>2</sup>')} işleminin sonucu aşağıdakilerden hangisine eşittir?</p>`,
    opts: ['5<sup>10</sup>', '5<sup>7</sup>', '5<sup>4</sup>', '5'], ans: 0,
    hints: [`125, 25 ve 625'i 5'in kuvveti olarak yaz.`],
    steps: [
      `125<sup>4</sup> = (5<sup>3</sup>)<sup>4</sup> = 5<sup>12</sup> · 25<sup>3</sup> = 5<sup>6</sup> · 625<sup>2</sup> = (5<sup>4</sup>)<sup>2</sup> = 5<sup>8</sup>`,
      `${F('5<sup>12</sup> · 5<sup>6</sup>', '5<sup>8</sup>')} = 5<sup>12 + 6 − 8</sup> = <b>5<sup>10</sup></b>`
    ],
    answer: `Sonuç <b>5<sup>10</sup></b>. Cevap: <b>A</b>`,
    trap: `Üssün kuvvetini toplamak: (5<sup>3</sup>)<sup>4</sup> = 5<sup>3·4</sup> = 5<sup>12</sup>'dir, 5<sup>7</sup> değil.`
  },
  {
    no: 20, konu: T2, sayfa: 9,
    q: `<p>Bir emlakçı toplam alanı 8<sup>5</sup> metrekare olan dikdörtgen biçimindeki bir araziyi dikdörtgen biçiminde 8 eş parçaya ayırıp satmak istiyor.</p>`
      + `<p>Dikdörtgen biçimindeki bu parçaların her birinin uzun kenarı 4<sup>4</sup> metredir.</p>`
      + `<p class="ask">Buna göre bu parçaların kısa kenarlarının uzunluğu metre cinsinden aşağıdakilerden hangisine eşittir?</p>`,
    opts: ['2<sup>3</sup>', '2<sup>4</sup>', '2<sup>5</sup>', '2<sup>6</sup>'], ans: 1,
    hints: [`Her şeyi 2'nin kuvveti olarak yaz.`],
    steps: [
      `Toplam alan 8<sup>5</sup> = 2<sup>15</sup> → bir parça 2<sup>15</sup> / 2<sup>3</sup> = <b>2<sup>12</sup></b> m²`,
      `Uzun kenar 4<sup>4</sup> = 2<sup>8</sup> → kısa kenar 2<sup>12</sup> / 2<sup>8</sup> = <b>2<sup>4</sup></b> m`
    ],
    answer: `Kısa kenar <b>2<sup>4</sup> m</b>. Cevap: <b>B</b>`,
    trap: `8 parçaya bölmeyi unutup 2<sup>15</sup> / 2<sup>8</sup> = 2<sup>7</sup> bulmak.`
  }
  );
})();
