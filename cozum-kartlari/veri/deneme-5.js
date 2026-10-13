// Deneme 5 · denemeye özel sorular (Çarpanlar ve Katlar + Üslü İfadeler).
// Bu sorular sitenin başka hiçbir sayfasında (çözüm kartı, çalışma kâğıdı, test) yer almaz.
// MEB örnek sorularının mantığıyla yazılmış yeni sorular ve özgün sorulardan oluşur; her sorunun cevabı hesapla doğrulanmıştır.
// Yayındaki bir denemenin sorularını ya da sırasını değiştirmeyin: öğretmen paneli eski sonuçları bu sıraya göre eşler.
window.DENEME_SORULARI = window.DENEME_SORULARI || {};
window.DENEME_SORULARI['deneme-5'] = [
 {
  "no": 1,
  "unite": "Üslü İfadeler",
  "konu": "Tam sayı kuvvetleri",
  "q": "<p class=\"ask\">(−1)<sup>1</sup> + (−1)<sup>2</sup> + (−1)<sup>3</sup> + … + (−1)<sup>n</sup> = −1 olduğuna göre n aşağıdakilerden hangisi olabilir?</p>",
  "opts": [
   "50",
   "76",
   "98",
   "99"
  ],
  "ans": 3,
  "steps": [
   "Ardışık her iki terimin toplamı (−1) + 1 = 0'dır",
   "n çift ise terimlerin hepsi ikişer ikişer eşleşir ve toplam 0 olur",
   "n tek ise son terim (−1) eşsiz kalır ve toplam −1 olur → seçeneklerdeki tek sayı <b>99</b>"
  ],
  "answer": "Cevap: <b>D</b>"
 },
 {
  "no": 2,
  "unite": "Çarpanlar ve Katlar",
  "konu": "Bir doğal sayının çarpanları",
  "q": "<p>Bir bahçıvan 72 fidanı, her sırada eşit sayıda fidan olacak biçimde sıralar hâlinde dikecektir. Her sırada en az 4 fidan bulunacak ve sıra sayısı 3'ten fazla olacaktır.</p><p class=\"ask\">Buna göre bahçıvan kaç farklı dikim planı yapabilir?</p>",
  "opts": [
   "6",
   "7",
   "8",
   "9"
  ],
  "ans": 0,
  "steps": [
   "Sıra sayısı ile bir sıradaki fidan sayısının çarpımı 72'dir",
   "Sıra sayısı 3'ten fazla: 4, 6, 8, 9, 12, 18, 24, 36, 72",
   "Her sırada en az 4 fidan olması için sıra sayısı en çok 18 olabilir: 4, 6, 8, 9, 12, 18 → <b>6</b> plan"
  ],
  "answer": "Cevap: <b>A</b>"
 },
 {
  "no": 3,
  "unite": "Çarpanlar ve Katlar",
  "konu": "EBOB ve EKOK",
  "q": "<p>Bir manav 156 kg elma, 108 kg armut ve 84 kg ayvayı birbirine karıştırmadan kasalara dolduracaktır. Bütün kasalarda eşit kütlede meyve bulunacak ve bir kasaya en fazla 10 kg meyve konulabilecektir.</p><p class=\"ask\">Buna göre manav <u>en az</u> kaç kasa kullanır?</p>",
  "opts": [
   "58",
   "87",
   "116",
   "174"
  ],
  "ans": 0,
  "steps": [
   "Bir kasadaki kütle 156, 108 ve 84'ün ortak böleni olmalı: EBOB = 12 → ortak bölenler 1, 2, 3, 4, 6, 12",
   "Kasa sayısının en az olması için kütle en büyük olmalı; ama 10 kg'ı geçmemeli → 6 kg",
   "(156 + 108 + 84) ÷ 6 = 348 ÷ 6 = <b>58</b> kasa"
  ],
  "answer": "Cevap: <b>A</b>",
  "trap": "12 kg alınırsa 29 kasa bulunur; ama bir kasaya en fazla 10 kg konulabilir."
 },
 {
  "no": 4,
  "unite": "Üslü İfadeler",
  "konu": "Temel kurallar",
  "q": "<p>Bir kenarı 2<sup>6</sup> cm olan kare biçimindeki bir kartondan, kenar uzunlukları 2<sup>2</sup> cm ve 2<sup>3</sup> cm olan dikdörtgen biçiminde kartlar, karton hiç artmayacak biçimde kesilecektir.</p><p class=\"ask\">Buna göre bu kartondan kaç kart elde edilir?</p>",
  "opts": [
   "2<sup>5</sup>",
   "2<sup>6</sup>",
   "2<sup>7</sup>",
   "2<sup>9</sup>"
  ],
  "ans": 2,
  "steps": [
   "Kartonun alanı (2<sup>6</sup>)<sup>2</sup> = 2<sup>12</sup> cm², bir kartın alanı 2<sup>2</sup> · 2<sup>3</sup> = 2<sup>5</sup> cm²",
   "2<sup>6</sup>, hem 2<sup>2</sup>'ye hem 2<sup>3</sup>'e bölündüğü için karton artmadan kesilebilir",
   "Kart sayısı: 2<sup>12</sup> ÷ 2<sup>5</sup> = <b>2<sup>7</sup></b>"
  ],
  "answer": "Cevap: <b>C</b>"
 },
 {
  "no": 5,
  "unite": "Üslü İfadeler",
  "konu": "Tam sayı kuvvetleri",
  "q": "<p>a ve b tam sayılardır. a<sup>3</sup> = −27, b<sup>2</sup> = 16 ve a · b &gt; 0'dır.</p><p class=\"ask\">Buna göre (a − b)<sup>b</sup> ifadesinin değeri kaçtır?</p>",
  "opts": [
   "−1",
   "<span class=\"frac\"><span>1</span><span>2401</span></span>",
   "1",
   "2401"
  ],
  "ans": 2,
  "steps": [
   "a<sup>3</sup> = −27 → a = −3 (küpü negatif olan sayı negatiftir)",
   "b<sup>2</sup> = 16 → b = 4 ya da b = −4; a · b &gt; 0 olduğundan b = −4",
   "a − b = −3 − (−4) = 1 → 1<sup>−4</sup> = <b>1</b>"
  ],
  "answer": "Cevap: <b>C</b>",
  "trap": "b = 4 alınırsa a − b = −7 bulunur; ama a · b &gt; 0 koşulu b'nin negatif olmasını gerektirir."
 },
 {
  "no": 6,
  "unite": "Çarpanlar ve Katlar",
  "konu": "Bir doğal sayının çarpanları",
  "q": "<p>1'den 100'e kadar (1 ve 100 dâhil) olan doğal sayılardan, pozitif bölenlerinin sayısı tek olanlar seçiliyor.</p><p class=\"ask\">Buna göre seçilen sayılardan kaç tanesi çift sayıdır?</p>",
  "opts": [
   "5",
   "6",
   "9",
   "10"
  ],
  "ans": 0,
  "steps": [
   "Bir sayının bölenleri ikişer ikişer eşleşir (d ile sayı ÷ d); bölen sayısı yalnızca tam kare sayılarda tektir",
   "100'e kadar tam kareler: 1, 4, 9, 16, 25, 36, 49, 64, 81, 100 → 10 sayı",
   "Bunlardan çift olanlar 4, 16, 36, 64, 100 → <b>5</b> tane"
  ],
  "answer": "Cevap: <b>A</b>",
  "trap": "10, bölen sayısı tek olan bütün sayıların sayısıdır; soru yalnızca çift olanları soruyor."
 },
 {
  "no": 7,
  "unite": "Üslü İfadeler",
  "konu": "Temel kurallar",
  "q": "<p class=\"ask\">(9<sup>4</sup> · 27<sup>−2</sup>) ÷ 3<sup>5</sup> = (<span class=\"frac\"><span>1</span><span>3</span></span>)<sup>x</sup> olduğuna göre x kaçtır?</p>",
  "opts": [
   "−3",
   "−1",
   "1",
   "3"
  ],
  "ans": 3,
  "steps": [
   "9<sup>4</sup> = 3<sup>8</sup>, 27<sup>−2</sup> = 3<sup>−6</sup> → 3<sup>8 − 6 − 5</sup> = 3<sup>−3</sup>",
   "(<span class=\"frac\"><span>1</span><span>3</span></span>)<sup>x</sup> = 3<sup>−x</sup> olduğundan −x = −3",
   "x = <b>3</b>"
  ],
  "answer": "Cevap: <b>D</b>",
  "trap": "Taban <span class=\"frac\"><span>1</span><span>3</span></span> olduğu için üssün işareti değişir; x = −3 değil, 3'tür."
 },
 {
  "no": 8,
  "unite": "Çarpanlar ve Katlar",
  "konu": "EBOB ve EKOK",
  "q": "<p>Dairesel bir koşu pistinde Ali bir turu 48 saniyede, Veli 60 saniyede, Can ise 80 saniyede koşmaktadır. Üçü başlangıç çizgisinden aynı anda ve aynı yönde koşmaya başlıyor.</p><p class=\"ask\">Koşuya başladıktan sonra üçü başlangıç çizgisinde ilk kez aynı anda bulunduğunda Ali kaç tur koşmuş olur?</p>",
  "opts": [
   "3",
   "4",
   "5",
   "6"
  ],
  "ans": 2,
  "steps": [
   "Üçünün başlangıç çizgisinde buluşması için geçen süre, her birinin tur süresinin katı olmalı: EKOK(48, 60, 80) = 240 saniye",
   "Ali: 240 ÷ 48 = <b>5</b> tur (Veli 4, Can 3 tur)"
  ],
  "answer": "Cevap: <b>C</b>"
 },
 {
  "no": 9,
  "unite": "Üslü İfadeler",
  "konu": "Ondalık çözümleme",
  "q": "<p>A sayısının çözümlenmiş hâli 6 · 10<sup>1</sup> + 4 · 10<sup>−1</sup> + 9 · 10<sup>−3</sup>, B sayısının çözümlenmiş hâli ise 5 · 10<sup>1</sup> + 8 · 10<sup>0</sup> + 6 · 10<sup>−2</sup> biçimindedir.</p><p class=\"ask\">Buna göre A − B kaçtır?</p>",
  "opts": [
   "2,343",
   "2,349",
   "2,439",
   "12,349"
  ],
  "ans": 1,
  "steps": [
   "A = 60 + 0,4 + 0,009 = 60,409",
   "B = 50 + 8 + 0,06 = 58,06",
   "A − B = 60,409 − 58,060 = <b>2,349</b>"
  ],
  "answer": "Cevap: <b>B</b>",
  "trap": "A'da birler ve yüzde birler basamakları, B'de onda birler basamağı 0'dır; basamaklar hizalanarak çıkarılmalıdır."
 },
 {
  "no": 10,
  "unite": "Çarpanlar ve Katlar",
  "konu": "EBOB ve EKOK",
  "q": "<p>Bir duraktan A hattının otobüsleri 12 dakikada bir, B hattının otobüsleri 18 dakikada bir kalkmaktadır. İki hattın ilk otobüsleri saat 06.30'da birlikte kalkıyor. Seferler saat 22.00'yi geçmeyecek biçimde devam ediyor.</p><p class=\"ask\">Buna göre gün boyunca iki hattın otobüsleri kaç kez birlikte kalkar?</p>",
  "opts": [
   "25",
   "26",
   "27",
   "52"
  ],
  "ans": 1,
  "steps": [
   "Birlikte kalkışlar EKOK(12, 18) = 36 dakikada bir tekrarlanır",
   "06.30 ile 22.00 arası 15 saat 30 dakika = 930 dakikadır; 930 ÷ 36 = 25, kalan 30",
   "06.30'daki ilk kalkış da sayılınca 25 + 1 = <b>26</b>"
  ],
  "answer": "Cevap: <b>B</b>",
  "trap": "25 aralık 26 kalkış demektir; 06.30'daki ilk kalkış unutulmamalı."
 },
 {
  "no": 11,
  "unite": "Üslü İfadeler",
  "konu": "Temel kurallar",
  "q": "<p class=\"ask\">5<sup>x</sup> = a olduğuna göre 25<sup>x + 1</sup> ifadesinin a türünden eşiti hangisidir?</p>",
  "opts": [
   "5a<sup>2</sup>",
   "25a",
   "25a<sup>2</sup>",
   "625a<sup>2</sup>"
  ],
  "ans": 2,
  "steps": [
   "25<sup>x + 1</sup> = 25<sup>x</sup> · 25",
   "25<sup>x</sup> = (5<sup>2</sup>)<sup>x</sup> = (5<sup>x</sup>)<sup>2</sup> = a<sup>2</sup>",
   "Sonuç: <b>25a<sup>2</sup></b>"
  ],
  "answer": "Cevap: <b>C</b>"
 },
 {
  "no": 12,
  "unite": "Çarpanlar ve Katlar",
  "konu": "EBOB ve EKOK",
  "q": "<p>a ve b iki basamaklı birer doğal sayıdır. Bu sayıların en büyük ortak böleni 6, en küçük ortak katı 72'dir.</p><p class=\"ask\">Buna göre a + b kaçtır?</p>",
  "opts": [
   "42",
   "48",
   "78",
   "84"
  ],
  "ans": 0,
  "steps": [
   "a = 6m ve b = 6n yazılırsa m ile n aralarında asaldır ve EKOK = 6 · m · n = 72 → m · n = 12",
   "Aralarında asal (m, n) ikilileri: (1, 12) → 6 ve 72; (3, 4) → 18 ve 24",
   "İkisi de iki basamaklı olan 18 ve 24 → 18 + 24 = <b>42</b>"
  ],
  "answer": "Cevap: <b>A</b>",
  "trap": "6 ve 72 de EBOB = 6, EKOK = 72 koşulunu sağlar ama 6 tek basamaklıdır."
 },
 {
  "no": 13,
  "unite": "Üslü İfadeler",
  "konu": "Bilimsel gösterim",
  "q": "<p>Bir virüsün boyu 1,25 · 10<sup>−7</sup> metredir. Bu virüslerden bir kısmı uç uca dizilerek 1 milimetre uzunluğunda bir sıra oluşturulacaktır.</p><p class=\"ask\">Buna göre bu sıra için kaç virüs gerekir?</p>",
  "opts": [
   "8 · 10<sup>2</sup>",
   "8 · 10<sup>3</sup>",
   "1,25 · 10<sup>4</sup>",
   "8 · 10<sup>4</sup>"
  ],
  "ans": 1,
  "steps": [
   "1 mm = 10<sup>−3</sup> m",
   "Virüs sayısı: 10<sup>−3</sup> ÷ (1,25 · 10<sup>−7</sup>) = (1 ÷ 1,25) · 10<sup>4</sup> = 0,8 · 10<sup>4</sup>",
   "0,8 · 10<sup>4</sup> = <b>8 · 10<sup>3</sup></b>"
  ],
  "answer": "Cevap: <b>B</b>",
  "trap": "Milimetre metreye çevrilmeden işlem yapılırsa sonuç 1000 kat büyük çıkar."
 },
 {
  "no": 14,
  "unite": "Çarpanlar ve Katlar",
  "konu": "EBOB ve EKOK",
  "q": "<p>60 çikolata, 84 şeker ve 108 lokum, hiçbiri artmayacak biçimde hediye paketlerine dağıtılacaktır. Her pakette eşit sayıda çikolata, eşit sayıda şeker ve eşit sayıda lokum bulunacak ve paket sayısı olabildiğince fazla olacaktır.</p><p class=\"ask\">Buna göre bir pakette toplam kaç tatlı bulunur?</p>",
  "opts": [
   "21",
   "24",
   "36",
   "42"
  ],
  "ans": 0,
  "steps": [
   "Her pakette eşit sayıda tatlı olacağından paket sayısı 60, 84 ve 108'in ortak böleni olmalı; en fazla paket için EBOB = 12",
   "Bir pakette 60 ÷ 12 = 5 çikolata, 84 ÷ 12 = 7 şeker, 108 ÷ 12 = 9 lokum bulunur",
   "5 + 7 + 9 = <b>21</b> tatlı"
  ],
  "answer": "Cevap: <b>A</b>",
  "trap": "12 paket sayısıdır; soru bir paketteki tatlı sayısını soruyor."
 },
 {
  "no": 15,
  "unite": "Üslü İfadeler",
  "konu": "Temel kurallar",
  "q": "<p>Bir bulut depolama hesabının kapasitesi 2<sup>35</sup> bayttır. Hesapta her biri 2<sup>22</sup> bayt olan 2<sup>10</sup> fotoğraf ve her biri 2<sup>28</sup> bayt olan 2<sup>5</sup> video bulunmaktadır.</p><p class=\"ask\">Buna göre kalan boş alana her biri 2<sup>22</sup> bayt olan fotoğraflardan <u>en fazla</u> kaç tane daha yüklenebilir?</p>",
  "opts": [
   "3 · 2<sup>10</sup>",
   "5 · 2<sup>10</sup>",
   "2<sup>13</sup>",
   "5 · 2<sup>13</sup>"
  ],
  "ans": 1,
  "steps": [
   "Fotoğraflar: 2<sup>22</sup> · 2<sup>10</sup> = 2<sup>32</sup> bayt; videolar: 2<sup>28</sup> · 2<sup>5</sup> = 2<sup>33</sup> = 2 · 2<sup>32</sup> bayt",
   "Dolu alan 3 · 2<sup>32</sup>; kapasite 2<sup>35</sup> = 8 · 2<sup>32</sup> → boş alan 5 · 2<sup>32</sup>",
   "5 · 2<sup>32</sup> ÷ 2<sup>22</sup> = <b>5 · 2<sup>10</sup></b> fotoğraf"
  ],
  "answer": "Cevap: <b>B</b>",
  "trap": "2<sup>32</sup> + 2<sup>33</sup> toplamı 2<sup>65</sup> değildir; ortak çarpan parantezine alınarak toplanır."
 },
 {
  "no": 16,
  "unite": "Çarpanlar ve Katlar",
  "konu": "Aralarında asal sayılar",
  "q": "<p><span class=\"frac\"><span>a</span><span>36</span></span> kesri sadeleştirilemeyen bir kesirdir ve 1 &lt; <span class=\"frac\"><span>a</span><span>36</span></span> &lt; 2'dir.</p><p class=\"ask\">Buna göre a doğal sayısı kaç farklı değer alabilir?</p>",
  "opts": [
   "10",
   "12",
   "18",
   "35"
  ],
  "ans": 1,
  "steps": [
   "1 &lt; <span class=\"frac\"><span>a</span><span>36</span></span> &lt; 2 → 36 &lt; a &lt; 72, yani a = 37, 38, …, 71",
   "Kesrin sadeleşmemesi için a ile 36 aralarında asal olmalı; 36 = 2<sup>2</sup> · 3<sup>2</sup> olduğundan a, 2'ye ve 3'e bölünmemeli",
   "37, 41, 43, 47, 49, 53, 55, 59, 61, 65, 67, 71 → <b>12</b> değer"
  ],
  "answer": "Cevap: <b>B</b>",
  "trap": "35, 37 ile 71 arasındaki (37 ve 71 dâhil) bütün doğal sayıların sayısıdır; bunlardan sadeleşebilen kesirleri verenler çıkarılmalıdır."
 },
 {
  "no": 17,
  "unite": "Üslü İfadeler",
  "konu": "10'un kuvvetleri",
  "q": "<p class=\"ask\">0,0036 · 10<sup>a</sup> = 3,6 · 10<sup>5</sup> olduğuna göre a kaçtır?</p>",
  "opts": [
   "2",
   "7",
   "8",
   "9"
  ],
  "ans": 2,
  "steps": [
   "0,0036 = 3,6 · 10<sup>−3</sup>",
   "3,6 · 10<sup>−3</sup> · 10<sup>a</sup> = 3,6 · 10<sup>5</sup> → −3 + a = 5",
   "a = <b>8</b>"
  ],
  "answer": "Cevap: <b>C</b>"
 },
 {
  "no": 18,
  "unite": "Çarpanlar ve Katlar",
  "konu": "Bir doğal sayının çarpanları",
  "q": "<p>A sayısının asal çarpanları yalnızca 2 ve 3'tür. A, 8'in katıdır ve A'nın tam olarak 12 pozitif böleni vardır.</p><p class=\"ask\">A sayısı 1000'den küçük olduğuna göre A'nın alabileceği <u>en büyük</u> değer kaçtır?</p>",
  "opts": [
   "48",
   "72",
   "84",
   "96"
  ],
  "ans": 3,
  "steps": [
   "A = 2<sup>a</sup> · 3<sup>b</sup> biçimindedir; 8'in katı olduğundan a ≥ 3, 3 çarpanı bulunduğundan b ≥ 1",
   "Bölen sayısı (a + 1) · (b + 1) = 12 → (a, b) = (3, 2) ya da (5, 1)",
   "2<sup>3</sup> · 3<sup>2</sup> = 72, 2<sup>5</sup> · 3 = 96 → en büyük <b>96</b>"
  ],
  "answer": "Cevap: <b>D</b>",
  "trap": "48 = 2<sup>4</sup> · 3 sayısının 10 böleni vardır; 84 = 2<sup>2</sup> · 3 · 7 sayısında ise 7 asal çarpanı bulunur."
 },
 {
  "no": 19,
  "unite": "Üslü İfadeler",
  "konu": "Bilimsel gösterim",
  "q": "<p>Bir ülkenin nüfusu 8,4 · 10<sup>7</sup> kişidir. Bu ülkedeki bir şehrin nüfusu ise 2,1 · 10<sup>6</sup> kişidir.</p><p class=\"ask\">Buna göre ülkenin nüfusu, şehrin nüfusunun kaç katıdır?</p>",
  "opts": [
   "0,4",
   "4",
   "6,3",
   "40"
  ],
  "ans": 3,
  "steps": [
   "\"Kaç katı\" sorusu bölme ile çözülür: (8,4 · 10<sup>7</sup>) ÷ (2,1 · 10<sup>6</sup>)",
   "8,4 ÷ 2,1 = 4 ve 10<sup>7</sup> ÷ 10<sup>6</sup> = 10",
   "4 · 10 = <b>40</b>"
  ],
  "answer": "Cevap: <b>D</b>",
  "trap": "Katsayıları çıkarmak (8,4 − 2,1 = 6,3) ya da 10'un kuvvetlerini unutmak yanlış sonuç verir."
 },
 {
  "no": 20,
  "unite": "Çarpanlar ve Katlar",
  "konu": "Aralarında asal sayılar",
  "q": "<p class=\"ask\">Ardışık iki doğal sayı için aşağıdakilerden hangisi <u>her zaman</u> doğrudur?</p>",
  "opts": [
   "Biri asal sayıdır.",
   "İkisi de tek sayıdır.",
   "En küçük ortak katları toplamlarına eşittir.",
   "Aralarında asaldırlar."
  ],
  "ans": 3,
  "long": true,
  "steps": [
   "n ve n + 1'i bölen bir sayı, aralarındaki farkı yani 1'i de böler → ortak bölenleri yalnızca 1'dir",
   "Örnek: 8 ve 9 sayılarının ikisi de asal değildir, biri çifttir; EKOK'ları 72, toplamları 17'dir",
   "Her zaman doğru olan: <b>aralarında asaldırlar</b>"
  ],
  "answer": "Cevap: <b>D</b>"
 }
];
