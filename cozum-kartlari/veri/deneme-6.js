// Deneme 6 · denemeye özel sorular (Çarpanlar ve Katlar + Üslü İfadeler).
// Bu sorular sitenin başka hiçbir sayfasında (çözüm kartı, çalışma kâğıdı, test) yer almaz.
// MEB örnek sorularının mantığıyla yazılmış yeni sorular ve özgün sorulardan oluşur; her sorunun cevabı hesapla doğrulanmıştır.
// Yayındaki bir denemenin sorularını ya da sırasını değiştirmeyin: öğretmen paneli eski sonuçları bu sıraya göre eşler.
window.DENEME_SORULARI = window.DENEME_SORULARI || {};
window.DENEME_SORULARI['deneme-6'] = [
 {
  "no": 1,
  "unite": "Çarpanlar ve Katlar",
  "konu": "Bir doğal sayının çarpanları",
  "q": "<p class=\"ask\">360 sayısının pozitif bölenlerinden kaç tanesi 6'nın katıdır?</p>",
  "opts": [
   "6",
   "8",
   "10",
   "12"
  ],
  "ans": 3,
  "steps": [
   "6'nın katı olan bir bölen 6 · k biçimindedir; 6 · k sayısı 360'ı bölüyorsa k da 360 ÷ 6 = 60'ı böler",
   "60 = 2<sup>2</sup> · 3 · 5 → bölen sayısı (2 + 1) · (1 + 1) · (1 + 1) = 12",
   "Yani 360'ın 6'nın katı olan <b>12</b> böleni vardır"
  ],
  "answer": "Cevap: <b>D</b>",
  "trap": "24, 360'ın bütün bölenlerinin sayısıdır."
 },
 {
  "no": 2,
  "unite": "Üslü İfadeler",
  "konu": "Tam sayı kuvvetleri",
  "q": "<p class=\"ask\">n bir doğal sayı olmak üzere (−1)<sup>2n</sup> − (−1)<sup>2n + 1</sup> + (−1)<sup>n² + n</sup> ifadesinin değeri kaçtır?</p>",
  "opts": [
   "−1",
   "1",
   "2",
   "3"
  ],
  "ans": 3,
  "steps": [
   "2n her zaman çifttir → (−1)<sup>2n</sup> = 1; 2n + 1 her zaman tektir → (−1)<sup>2n + 1</sup> = −1",
   "n² + n = n · (n + 1) ardışık iki sayının çarpımıdır, her zaman çifttir → (−1)<sup>n² + n</sup> = 1",
   "1 − (−1) + 1 = <b>3</b>"
  ],
  "answer": "Cevap: <b>D</b>",
  "trap": "n² + n'nin tek mi çift mi olduğu n'ye bağlı sanılabilir; ama ardışık iki sayıdan biri mutlaka çifttir."
 },
 {
  "no": 3,
  "unite": "Çarpanlar ve Katlar",
  "konu": "EBOB ve EKOK",
  "q": "<p>Uzunlukları 18 cm, 24 cm ve 30 cm olan üç tel, birbirine eklenmeden ve hiç artmayacak biçimde eşit uzunlukta parçalara ayrılacaktır. Parçaların uzunluğu santimetre cinsinden bir doğal sayı olacak ve 2 cm'den uzun olacaktır.</p><p class=\"ask\">En fazla sayıda parça elde edilmek istendiğine göre toplam kaç parça elde edilir?</p>",
  "opts": [
   "24",
   "36",
   "48",
   "72"
  ],
  "ans": 0,
  "steps": [
   "Parça uzunluğu üç telin uzunluğunu da bölmeli: EBOB(18, 24, 30) = 6'nın bölenleri → 1, 2, 3, 6",
   "Parça sayısının en fazla olması için uzunluk en küçük olmalı; ama 2 cm'den uzun olmalı → 3 cm",
   "18 ÷ 3 + 24 ÷ 3 + 30 ÷ 3 = 6 + 8 + 10 = <b>24</b> parça"
  ],
  "answer": "Cevap: <b>A</b>",
  "trap": "En fazla parça istendiği için EBOB değil, EBOB'un koşula uyan en küçük böleni kullanılır."
 },
 {
  "no": 4,
  "unite": "Üslü İfadeler",
  "konu": "Tam sayı kuvvetleri",
  "q": "<p class=\"ask\">a &lt; 0 olduğuna göre aşağıdakilerden hangisi <u>kesinlikle</u> pozitiftir?</p>",
  "opts": [
   "a<sup>3</sup>",
   "−a<sup>2</sup>",
   "(−a)<sup>3</sup>",
   "a<sup>5</sup>"
  ],
  "ans": 2,
  "steps": [
   "a negatifse −a pozitiftir; pozitif bir sayının her kuvveti pozitiftir → (−a)<sup>3</sup> &gt; 0",
   "a<sup>3</sup> ve a<sup>5</sup>: negatif bir sayının tek kuvvetleri negatiftir",
   "−a<sup>2</sup>: a<sup>2</sup> pozitiftir, önündeki eksi işaretiyle negatif olur → cevap <b>(−a)<sup>3</sup></b>"
  ],
  "answer": "Cevap: <b>C</b>",
  "trap": "−a<sup>2</sup> ile (−a)<sup>2</sup> aynı değildir: önce kuvvet alınır, sonra eksi uygulanır."
 },
 {
  "no": 5,
  "unite": "Çarpanlar ve Katlar",
  "konu": "Bir doğal sayının çarpanları",
  "q": "<p>Kendisi hariç pozitif bölenlerinin toplamı kendisine eşit olan sayılara <b>mükemmel sayı</b> denir. Örneğin 6'nın kendisi hariç bölenleri 1, 2 ve 3'tür; 1 + 2 + 3 = 6 olduğundan 6 bir mükemmel sayıdır.</p><p class=\"ask\">Buna göre aşağıdakilerden hangisi bir mükemmel sayıdır?</p>",
  "opts": [
   "12",
   "18",
   "28",
   "30"
  ],
  "ans": 2,
  "steps": [
   "12: 1 + 2 + 3 + 4 + 6 = 16; 18: 1 + 2 + 3 + 6 + 9 = 21",
   "30: 1 + 2 + 3 + 5 + 6 + 10 + 15 = 42",
   "28: 1 + 2 + 4 + 7 + 14 = 28 → <b>28</b>"
  ],
  "answer": "Cevap: <b>C</b>"
 },
 {
  "no": 6,
  "unite": "Üslü İfadeler",
  "konu": "Temel kurallar",
  "q": "<p class=\"ask\">4<sup>5</sup> + 4<sup>5</sup> + 4<sup>5</sup> + 4<sup>5</sup> = 2<sup>x</sup> olduğuna göre x kaçtır?</p>",
  "opts": [
   "6",
   "7",
   "10",
   "12"
  ],
  "ans": 3,
  "steps": [
   "Dört eşit terimin toplamı: 4 · 4<sup>5</sup> = 4<sup>6</sup>",
   "4<sup>6</sup> = (2<sup>2</sup>)<sup>6</sup> = 2<sup>12</sup> → x = <b>12</b>"
  ],
  "answer": "Cevap: <b>D</b>",
  "trap": "4<sup>6</sup> sayısı 2<sup>6</sup>'ya eşit değildir; taban 4 = 2<sup>2</sup> olduğu için üs iki katına çıkar."
 },
 {
  "no": 7,
  "unite": "Çarpanlar ve Katlar",
  "konu": "EBOB ve EKOK",
  "q": "<p>Bir apartmanın merdivenini Ali basamakları ikişer ikişer, Ayşe üçer üçer, Can ise beşer beşer çıkıyor. Üçü de bu şekilde çıkabildiği kadar çıktıktan sonra en üstte kalan 1 basamağı tek adımda çıkıyor. Merdivendeki basamak sayısı 50 ile 100 arasındadır ve 7'ye tam bölünmektedir.</p><p class=\"ask\">Buna göre merdivende kaç basamak vardır?</p>",
  "opts": [
   "61",
   "77",
   "91",
   "97"
  ],
  "ans": 2,
  "steps": [
   "Basamak sayısının 1 eksiği 2'ye, 3'e ve 5'e tam bölünür: EKOK(2, 3, 5) = 30",
   "Basamak sayısı 30'un bir katının 1 fazlasıdır: 31, 61, 91, … → 50 ile 100 arasında 61 ve 91",
   "Bunlardan 7'ye bölünen <b>91</b>'dir (91 = 7 · 13)"
  ],
  "answer": "Cevap: <b>C</b>"
 },
 {
  "no": 8,
  "unite": "Üslü İfadeler",
  "konu": "Temel kurallar",
  "q": "<p class=\"ask\">(2<sup>3</sup>)<sup>4</sup> · (2<sup>−2</sup>)<sup>3</sup> ÷ 2<sup>5</sup> işleminin sonucu kaçtır?</p>",
  "opts": [
   "<span class=\"frac\"><span>1</span><span>2</span></span>",
   "2",
   "2<sup>4</sup>",
   "2<sup>9</sup>"
  ],
  "ans": 1,
  "steps": [
   "Kuvvetin kuvveti alınırken üsler çarpılır: (2<sup>3</sup>)<sup>4</sup> = 2<sup>12</sup>, (2<sup>−2</sup>)<sup>3</sup> = 2<sup>−6</sup>",
   "Çarpmada üsler toplanır, bölmede çıkarılır: 2<sup>12 − 6 − 5</sup> = 2<sup>1</sup> = <b>2</b>"
  ],
  "answer": "Cevap: <b>B</b>"
 },
 {
  "no": 9,
  "unite": "Çarpanlar ve Katlar",
  "konu": "EBOB ve EKOK",
  "q": "<p>Birbirine geçmiş üç dişli çarkın diş sayıları 18, 24 ve 30'dur. Her çarkın bir dişi işaretlenmiştir.</p><p class=\"ask\">Çarklar dönmeye başladıktan sonra üç işaretli diş ilk kez aynı anda kendi başlangıç konumlarına geri geldiğinde 30 dişli çark kaç tur dönmüş olur?</p>",
  "opts": [
   "12",
   "15",
   "20",
   "24"
  ],
  "ans": 0,
  "steps": [
   "Çarklar birbirine geçtiği için her birinden aynı sayıda diş geçer; işaretli dişlerin başlangıca dönmesi için bu sayı her çarkın diş sayısının katı olmalı",
   "EKOK(18, 24, 30) = 360 diş",
   "30 dişli çark: 360 ÷ 30 = <b>12</b> tur (18 dişli 20 tur, 24 dişli 15 tur döner)"
  ],
  "answer": "Cevap: <b>A</b>",
  "trap": "20 ve 15, diğer iki çarkın tur sayılarıdır."
 },
 {
  "no": 10,
  "unite": "Üslü İfadeler",
  "konu": "Temel kurallar",
  "q": "<p>Bir hücre türü her 20 dakikada bir ikiye bölünerek çoğalmaktadır.</p><p class=\"ask\">2 hücreyle başlayan bir kültürde hücre sayısı kaç saat kaç dakika sonra 2<sup>15</sup> olur?</p>",
  "opts": [
   "4 saat 20 dakika",
   "4 saat 40 dakika",
   "5 saat",
   "5 saat 20 dakika"
  ],
  "ans": 1,
  "long": true,
  "steps": [
   "k bölünmeden sonra hücre sayısı 2 · 2<sup>k</sup> = 2<sup>k + 1</sup> olur",
   "2<sup>k + 1</sup> = 2<sup>15</sup> → k = 14 bölünme",
   "14 · 20 = 280 dakika = <b>4 saat 40 dakika</b>"
  ],
  "answer": "Cevap: <b>B</b>",
  "trap": "Başlangıçta 1 değil 2 hücre vardır; 15 bölünme alınırsa 5 saat bulunur."
 },
 {
  "no": 11,
  "unite": "Çarpanlar ve Katlar",
  "konu": "Aralarında asal sayılar",
  "q": "<p class=\"ask\">Aşağıdaki sayı ikililerinden hangisi aralarında asal <u>değildir</u>?</p>",
  "opts": [
   "14 ve 15",
   "21 ve 22",
   "27 ve 35",
   "39 ve 52"
  ],
  "ans": 3,
  "steps": [
   "14 ve 15, 21 ve 22 ardışık sayılardır → aralarında asaldır",
   "27 = 3<sup>3</sup>, 35 = 5 · 7 → ortak asal çarpanları yoktur",
   "39 = 3 · 13, 52 = 2<sup>2</sup> · 13 → ikisi de 13'e bölünür → <b>39 ve 52</b>"
  ],
  "answer": "Cevap: <b>D</b>"
 },
 {
  "no": 12,
  "unite": "Üslü İfadeler",
  "konu": "Ondalık çözümleme",
  "q": "<p class=\"ask\">Aşağıdaki sayılardan hangisinin çözümlenmiş hâlinde 10<sup>−2</sup>'nin katsayısı en büyüktür?</p>",
  "opts": [
   "3,147",
   "31,47",
   "314,7",
   "0,3147"
  ],
  "ans": 1,
  "steps": [
   "10<sup>−2</sup>'nin katsayısı, sayının yüzde birler basamağındaki rakamdır",
   "3,147 → 4; 31,47 → 7; 314,7 → 0; 0,3147 → 1",
   "En büyük katsayı 7 → <b>31,47</b>"
  ],
  "answer": "Cevap: <b>B</b>",
  "trap": "314,7 sayısının yüzde birler basamağında rakam yoktur, yani katsayısı 0'dır."
 },
 {
  "no": 13,
  "unite": "Çarpanlar ve Katlar",
  "konu": "EBOB ve EKOK",
  "q": "<p>Bir sınıftaki öğrenciler 4'erli gruplara ayrıldığında 3 öğrenci, 6'şarlı gruplara ayrıldığında ise 5 öğrenci gruplara giremiyor. Sınıfın mevcudu 30'dan fazla, 40'tan azdır.</p><p class=\"ask\">Buna göre sınıfta kaç öğrenci vardır?</p>",
  "opts": [
   "35",
   "36",
   "37",
   "39"
  ],
  "ans": 0,
  "steps": [
   "Sınıfa 1 öğrenci daha gelseydi iki gruplamada da kimse açıkta kalmazdı → mevcudun 1 fazlası 4'ün ve 6'nın ortak katıdır",
   "EKOK(4, 6) = 12 → mevcut, 12'nin bir katının 1 eksiğidir: 11, 23, 35, 47, …",
   "30 ile 40 arasında <b>35</b>"
  ],
  "answer": "Cevap: <b>A</b>"
 },
 {
  "no": 14,
  "unite": "Üslü İfadeler",
  "konu": "Temel kurallar",
  "q": "<p class=\"ask\">3<sup>x + 2</sup> − 3<sup>x</sup> = 72 olduğuna göre x kaçtır?</p>",
  "opts": [
   "1",
   "2",
   "3",
   "4"
  ],
  "ans": 1,
  "steps": [
   "3<sup>x + 2</sup> = 3<sup>2</sup> · 3<sup>x</sup> = 9 · 3<sup>x</sup>",
   "9 · 3<sup>x</sup> − 3<sup>x</sup> = 8 · 3<sup>x</sup> = 72 → 3<sup>x</sup> = 9 = 3<sup>2</sup>",
   "x = <b>2</b>"
  ],
  "answer": "Cevap: <b>B</b>",
  "trap": "3<sup>x + 2</sup> − 3<sup>x</sup> farkı 3<sup>2</sup> değildir; ortak çarpan 3<sup>x</sup> parantezine alınır."
 },
 {
  "no": 15,
  "unite": "Çarpanlar ve Katlar",
  "konu": "Bir doğal sayının çarpanları",
  "q": "<p>Birbirinden farklı üç asal sayının çarpımı 286'dır.</p><p class=\"ask\">Buna göre bu asal sayılardan en büyüğü ile en küçüğünün farkı kaçtır?</p>",
  "opts": [
   "11",
   "13",
   "15",
   "24"
  ],
  "ans": 0,
  "steps": [
   "286 = 2 · 143 = 2 · 11 · 13",
   "En büyük 13, en küçük 2 → 13 − 2 = <b>11</b>"
  ],
  "answer": "Cevap: <b>A</b>",
  "trap": "143 asal sayı değildir: 143 = 11 · 13."
 },
 {
  "no": 16,
  "unite": "Üslü İfadeler",
  "konu": "10'un kuvvetleri",
  "q": "<p>Bir damla suyun hacmi yaklaşık 5 · 10<sup>−2</sup> mL'dir.</p><p class=\"ask\">Buna göre 10<sup>6</sup> damla suyun hacmi yaklaşık kaç litredir? (1 L = 10<sup>3</sup> mL)</p>",
  "opts": [
   "5",
   "50",
   "500",
   "5000"
  ],
  "ans": 1,
  "steps": [
   "5 · 10<sup>−2</sup> · 10<sup>6</sup> = 5 · 10<sup>4</sup> mL",
   "5 · 10<sup>4</sup> ÷ 10<sup>3</sup> = 5 · 10 = <b>50</b> litre"
  ],
  "answer": "Cevap: <b>B</b>",
  "trap": "5 · 10<sup>4</sup> = 50 000 mililitredir; litreye çevirmek için 10<sup>3</sup>'e bölünür."
 },
 {
  "no": 17,
  "unite": "Çarpanlar ve Katlar",
  "konu": "EBOB ve EKOK",
  "q": "<p class=\"ask\">EBOB(x, 36) = 12 olduğuna göre iki basamaklı x doğal sayısı kaç farklı değer alabilir?</p>",
  "opts": [
   "3",
   "4",
   "5",
   "6"
  ],
  "ans": 3,
  "steps": [
   "x, 12'nin katı olmalı: x = 12 · k",
   "k, 3'ün katı olursa x 36'nın da katı olur ve EBOB 36 çıkar → k, 3'e bölünmemeli",
   "İki basamaklı 12k için k = 1, …, 8; bunlardan 3'e bölünmeyenler 1, 2, 4, 5, 7, 8 → <b>6</b> değer (12, 24, 48, 60, 84, 96)"
  ],
  "answer": "Cevap: <b>D</b>",
  "trap": "36 ve 72 de 12'nin katıdır ama EBOB(36, 36) = 36 ve EBOB(72, 36) = 36 olur."
 },
 {
  "no": 18,
  "unite": "Üslü İfadeler",
  "konu": "Bilimsel gösterim",
  "q": "<p class=\"ask\">(6,4 · 10<sup>5</sup>) · (2,5 · 10<sup>−8</sup>) işleminin sonucunun bilimsel gösterimi hangisidir?</p>",
  "opts": [
   "1,6 · 10<sup>−3</sup>",
   "8,9 · 10<sup>−3</sup>",
   "1,6 · 10<sup>−2</sup>",
   "16 · 10<sup>−3</sup>"
  ],
  "ans": 2,
  "steps": [
   "Katsayılar çarpılır: 6,4 · 2,5 = 16; 10'un kuvvetleri çarpılırken üsler toplanır: 10<sup>5 + (−8)</sup> = 10<sup>−3</sup>",
   "16 · 10<sup>−3</sup> = 1,6 · 10 · 10<sup>−3</sup> = <b>1,6 · 10<sup>−2</sup></b>"
  ],
  "answer": "Cevap: <b>C</b>",
  "trap": "16 · 10<sup>−3</sup> değer olarak doğrudur ama katsayı 10'dan büyük olduğu için bilimsel gösterim değildir."
 },
 {
  "no": 19,
  "unite": "Çarpanlar ve Katlar",
  "konu": "Aralarında asal sayılar",
  "q": "<p>a ve b aralarında asal iki doğal sayıdır ve <span class=\"frac\"><span>a</span><span>b</span></span> = 0,36'dır.</p><p class=\"ask\">Buna göre a + b kaçtır?</p>",
  "opts": [
   "34",
   "36",
   "43",
   "136"
  ],
  "ans": 0,
  "steps": [
   "0,36 = <span class=\"frac\"><span>36</span><span>100</span></span>; pay ve payda 4'e bölünerek <span class=\"frac\"><span>9</span><span>25</span></span> bulunur",
   "9 ile 25 aralarında asaldır → a = 9, b = 25",
   "a + b = <b>34</b>"
  ],
  "answer": "Cevap: <b>A</b>",
  "trap": "a = 36, b = 100 alınırsa 136 bulunur; ama 36 ile 100 aralarında asal değildir."
 },
 {
  "no": 20,
  "unite": "Üslü İfadeler",
  "konu": "Bilimsel gösterim",
  "q": "<p>Işık bir saniyede yaklaşık 3 · 10<sup>5</sup> km yol almaktadır.</p><p class=\"ask\">Buna göre ışığın 8 dakikada aldığı yol yaklaşık kaç kilometredir?</p>",
  "opts": [
   "2,4 · 10<sup>6</sup>",
   "1,44 · 10<sup>7</sup>",
   "1,44 · 10<sup>8</sup>",
   "14,4 · 10<sup>8</sup>"
  ],
  "ans": 2,
  "steps": [
   "8 dakika = 8 · 60 = 480 saniye",
   "3 · 10<sup>5</sup> · 480 = 1440 · 10<sup>5</sup>",
   "1440 = 1,44 · 10<sup>3</sup> → <b>1,44 · 10<sup>8</sup></b> km"
  ],
  "answer": "Cevap: <b>C</b>",
  "trap": "Dakikayı saniyeye çevirmeden 3 · 10<sup>5</sup> · 8 = 2,4 · 10<sup>6</sup> bulunur."
 }
];
