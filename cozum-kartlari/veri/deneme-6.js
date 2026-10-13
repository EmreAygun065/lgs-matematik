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
  "q": "<p class=\"ask\">Asal çarpanlarına ayrılmış hâli 2<sup>2</sup> · 3 · 5 olan sayının kaç tane <u>çift</u> pozitif böleni vardır?</p>",
  "opts": [
   "3",
   "4",
   "6",
   "8"
  ],
  "ans": 3,
  "steps": [
   "Sayı 60; bölen sayısı (2 + 1) · (1 + 1) · (1 + 1) = 12",
   "Tek bölenler 2 çarpanı içermez: 3 · 5'in bölenleri → 4 tane",
   "Çift bölenler 12 − 4 = <b>8</b>"
  ],
  "answer": "Cevap: <b>D</b>"
 },
 {
  "no": 2,
  "unite": "Üslü İfadeler",
  "konu": "Tam sayı kuvvetleri",
  "q": "<p class=\"ask\">(−3)<sup>2</sup> − 3<sup>2</sup> + (−2)<sup>4</sup> − (−2)<sup>0</sup> işleminin sonucu kaçtır?</p>",
  "opts": [
   "15",
   "17",
   "24",
   "33"
  ],
  "ans": 0,
  "steps": [
   "(−3)<sup>2</sup> = 9, 3<sup>2</sup> = 9",
   "(−2)<sup>4</sup> = 16, (−2)<sup>0</sup> = 1",
   "9 − 9 + 16 − 1 = <b>15</b>"
  ],
  "answer": "Cevap: <b>A</b>"
 },
 {
  "no": 3,
  "unite": "Çarpanlar ve Katlar",
  "konu": "EBOB ve EKOK",
  "q": "<p>Uzunlukları 18 cm, 24 cm ve 30 cm olan üç tel, birbirine eklenmeden, hepsi eşit uzunlukta parçalara ayrılacak. Parça uzunluğu santimetre cinsinden tam sayı ve <u>mümkün olan en büyük</u> değerdedir.</p><p class=\"ask\">Toplam kaç parça elde edilir?</p>",
  "opts": [
   "9",
   "12",
   "15",
   "18"
  ],
  "ans": 1,
  "steps": [
   "Parça uzunluğu EBOB(18, 24, 30) = 6 cm",
   "18 ÷ 6 + 24 ÷ 6 + 30 ÷ 6 = 3 + 4 + 5 = <b>12</b>"
  ],
  "answer": "Cevap: <b>B</b>"
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
   "a negatifse −a pozitiftir; pozitif sayının her kuvveti pozitiftir → (−a)<sup>3</sup> &gt; 0",
   "a<sup>3</sup> ve a<sup>5</sup>: negatif sayının tek kuvveti negatif",
   "−a<sup>2</sup>: a<sup>2</sup> pozitif, önündeki eksiyle negatif → cevap <b>(−a)<sup>3</sup></b>"
  ],
  "answer": "Cevap: <b>C</b>",
  "trap": "−a<sup>2</sup> ile (−a)<sup>2</sup> aynı şey değildir: önce kuvvet alınır, sonra eksi uygulanır."
 },
 {
  "no": 5,
  "unite": "Çarpanlar ve Katlar",
  "konu": "Bir doğal sayının çarpanları",
  "q": "<p>Kendisi hariç pozitif bölenlerinin toplamı kendisine eşit olan sayılara <b>mükemmel sayı</b> denir. Örneğin 6'nın kendisi hariç bölenleri 1, 2, 3'tür ve 1 + 2 + 3 = 6'dır.</p><p class=\"ask\">Aşağıdakilerden hangisi mükemmel sayıdır?</p>",
  "opts": [
   "12",
   "18",
   "28",
   "30"
  ],
  "ans": 2,
  "steps": [
   "12: 1 + 2 + 3 + 4 + 6 = 16; 18: 1 + 2 + 3 + 6 + 9 = 21; 30: 1 + 2 + 3 + 5 + 6 + 10 + 15 = 42",
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
   "4 · 4<sup>5</sup> = 4<sup>6</sup>",
   "4<sup>6</sup> = (2<sup>2</sup>)<sup>6</sup> = 2<sup>12</sup> → x = <b>12</b>"
  ],
  "answer": "Cevap: <b>D</b>",
  "trap": "4<sup>6</sup>'yı 2<sup>6</sup> sanmamak gerekir; taban 4 = 2<sup>2</sup> olduğundan üs iki katına çıkar."
 },
 {
  "no": 7,
  "unite": "Çarpanlar ve Katlar",
  "konu": "EBOB ve EKOK",
  "q": "<p>Bir apartmanın merdiven basamaklarını Ali ikişer, Ayşe üçer, Can beşer basamak atlayarak çıkıyor; üçü de en sonda 1 basamağı tek adımda çıkıyor. Basamak sayısı 50 ile 100 arasındadır ve 7'ye tam bölünmektedir.</p><p class=\"ask\">Merdivende kaç basamak vardır?</p>",
  "opts": [
   "61",
   "77",
   "91",
   "97"
  ],
  "ans": 2,
  "steps": [
   "Basamak sayısının 1 eksiği 2, 3 ve 5'in ortak katı: EKOK = 30 → 30k + 1",
   "50 ile 100 arasında: 61 ve 91",
   "7'ye bölünen <b>91</b> (91 = 7 · 13)"
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
   "(2<sup>3</sup>)<sup>4</sup> = 2<sup>12</sup>, (2<sup>−2</sup>)<sup>3</sup> = 2<sup>−6</sup>",
   "2<sup>12 − 6 − 5</sup> = 2<sup>1</sup> = <b>2</b>"
  ],
  "answer": "Cevap: <b>B</b>"
 },
 {
  "no": 9,
  "unite": "Çarpanlar ve Katlar",
  "konu": "EBOB ve EKOK",
  "q": "<p>Birbirine geçmiş iki dişli çarktan küçüğünde 24, büyüğünde 36 diş vardır. Çarklarda işaretli birer diş, dönmeye başlamadan önce karşı karşıyadır.</p><p class=\"ask\">İşaretli dişlerin yeniden ilk kez karşılaşması için küçük çark kaç tur dönmelidir?</p>",
  "opts": [
   "3",
   "4",
   "6",
   "9"
  ],
  "ans": 0,
  "steps": [
   "Karşılaşma için iki çarkta da tam tur sayısı kadar diş geçmeli: EKOK(24, 36) = 72 diş",
   "Küçük çark: 72 ÷ 24 = <b>3</b> tur (büyük çark 2 tur)"
  ],
  "answer": "Cevap: <b>A</b>"
 },
 {
  "no": 10,
  "unite": "Üslü İfadeler",
  "konu": "Temel kurallar",
  "q": "<p>Bir hücre her 20 dakikada bir ikiye bölünüyor.</p><p class=\"ask\">Tek bir hücreden başlanırsa 4 saat sonra kaç hücre olur?</p>",
  "opts": [
   "2<sup>4</sup>",
   "2<sup>8</sup>",
   "2<sup>10</sup>",
   "2<sup>12</sup>"
  ],
  "ans": 3,
  "steps": [
   "4 saat = 240 dakika → 240 ÷ 20 = 12 bölünme",
   "Her bölünmede sayı 2 katına çıkar: 1 · 2<sup>12</sup> = <b>2<sup>12</sup></b>"
  ],
  "answer": "Cevap: <b>D</b>"
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
   "14 ve 15, 21 ve 22 ardışık sayılar → aralarında asal",
   "27 = 3<sup>3</sup>, 35 = 5 · 7 → ortak asal çarpan yok",
   "39 = 3 · 13, 52 = 2<sup>2</sup> · 13 → ortak bölen 13 → <b>39 ve 52</b>"
  ],
  "answer": "Cevap: <b>D</b>"
 },
 {
  "no": 12,
  "unite": "Üslü İfadeler",
  "konu": "Ondalık çözümleme",
  "q": "<p class=\"ask\">7 · 10<sup>3</sup> + 2 · 10<sup>1</sup> + 5 · 10<sup>−1</sup> + 4 · 10<sup>−3</sup> sayısı hangisidir?</p>",
  "opts": [
   "7020,504",
   "7020,54",
   "7200,54",
   "70200,504"
  ],
  "ans": 0,
  "steps": [
   "7000 + 20 + 0,5 + 0,004",
   "Yüzler ve yüzde birler basamaklarına 0 gelir → <b>7020,504</b>"
  ],
  "answer": "Cevap: <b>A</b>"
 },
 {
  "no": 13,
  "unite": "Çarpanlar ve Katlar",
  "konu": "EBOB ve EKOK",
  "q": "<p>Bir sınıftaki öğrenciler 4'erli gruplara ayrıldığında 3 öğrenci, 6'şarlı gruplara ayrıldığında 5 öğrenci gruba giremiyor. Sınıf mevcudu 30'dan fazla, 40'tan azdır.</p><p class=\"ask\">Sınıfta kaç öğrenci vardır?</p>",
  "opts": [
   "35",
   "36",
   "37",
   "39"
  ],
  "ans": 0,
  "steps": [
   "Bir öğrenci daha gelse iki gruplamada da kimse açıkta kalmazdı → mevcudun 1 fazlası 4'ün ve 6'nın ortak katı",
   "EKOK(4, 6) = 12 → mevcut 12k − 1: 11, 23, 35, 47 …",
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
   "3<sup>x + 2</sup> = 9 · 3<sup>x</sup> → 9 · 3<sup>x</sup> − 3<sup>x</sup> = 8 · 3<sup>x</sup>",
   "8 · 3<sup>x</sup> = 72 → 3<sup>x</sup> = 9 = 3<sup>2</sup> → x = <b>2</b>"
  ],
  "answer": "Cevap: <b>B</b>"
 },
 {
  "no": 15,
  "unite": "Çarpanlar ve Katlar",
  "konu": "Bir doğal sayının çarpanları",
  "q": "<p>Bir kutudaki bilye sayısı, birbirinden farklı üç asal sayının çarpımına eşittir ve 105'tir.</p><p class=\"ask\">Bu üç asal sayının toplamı kaçtır?</p>",
  "opts": [
   "13",
   "15",
   "17",
   "21"
  ],
  "ans": 1,
  "steps": [
   "105 = 5 · 21 = 3 · 5 · 7",
   "3 + 5 + 7 = <b>15</b>"
  ],
  "answer": "Cevap: <b>B</b>"
 },
 {
  "no": 16,
  "unite": "Üslü İfadeler",
  "konu": "10'un kuvvetleri",
  "q": "<p>Bir damla suyun hacmi yaklaşık 0,05 mL'dir.</p><p class=\"ask\">10<sup>6</sup> damla su yaklaşık kaç litredir? (1 L = 1000 mL)</p>",
  "opts": [
   "5",
   "50",
   "500",
   "5000"
  ],
  "ans": 1,
  "steps": [
   "0,05 · 10<sup>6</sup> = 50 000 mL (virgül 6 basamak sağa)",
   "50 000 ÷ 1000 = <b>50 L</b>"
  ],
  "answer": "Cevap: <b>B</b>"
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
   "x = 12k olmalı ve k, 3'ün katı olmamalı (yoksa EBOB 36 olur)",
   "İki basamaklı 12k: k = 1, 2, …, 8",
   "3'ün katı olmayan k: 1, 2, 4, 5, 7, 8 → <b>6</b> değer (12, 24, 48, 60, 84, 96)"
  ],
  "answer": "Cevap: <b>D</b>"
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
   "Katsayılar: 6,4 · 2,5 = 16; üsler: 10<sup>5 − 8</sup> = 10<sup>−3</sup>",
   "16 · 10<sup>−3</sup> = 1,6 · 10<sup>−2</sup> → <b>1,6 · 10<sup>−2</sup></b>"
  ],
  "answer": "Cevap: <b>C</b>",
  "trap": "16 · 10<sup>−3</sup> değer olarak doğrudur ama katsayı 10'dan büyük olduğu için bilimsel gösterim değildir."
 },
 {
  "no": 19,
  "unite": "Çarpanlar ve Katlar",
  "konu": "Aralarında asal sayılar",
  "q": "<p>a ve b aralarında asal iki doğal sayıdır ve <span class=\"frac\"><span>a</span><span>b</span></span> = 0,36'dır.</p><p class=\"ask\">a + b kaçtır?</p>",
  "opts": [
   "34",
   "36",
   "43",
   "61"
  ],
  "ans": 0,
  "steps": [
   "0,36 = <span class=\"frac\"><span>36</span><span>100</span></span> = <span class=\"frac\"><span>9</span><span>25</span></span> (sadeleşmiş hâl)",
   "Aralarında asal olduklarından a = 9, b = 25 → <b>34</b>"
  ],
  "answer": "Cevap: <b>A</b>",
  "trap": "36 + 100 = 136 değil; kesir sadeleştirilmeden a ve b aralarında asal olmaz."
 },
 {
  "no": 20,
  "unite": "Üslü İfadeler",
  "konu": "Bilimsel gösterim",
  "q": "<p>Işık bir saniyede yaklaşık 3 · 10<sup>5</sup> km yol alır.</p><p class=\"ask\">Işığın 8 dakikada aldığı yol yaklaşık kaç kilometredir?</p>",
  "opts": [
   "2,4 · 10<sup>6</sup>",
   "1,44 · 10<sup>7</sup>",
   "1,44 · 10<sup>8</sup>",
   "14,4 · 10<sup>8</sup>"
  ],
  "ans": 2,
  "steps": [
   "8 dakika = 480 saniye",
   "3 · 10<sup>5</sup> · 480 = 1440 · 10<sup>5</sup> = <b>1,44 · 10<sup>8</sup></b>"
  ],
  "answer": "Cevap: <b>C</b>",
  "trap": "Dakikayı saniyeye çevirmeden 3 · 10<sup>5</sup> · 8 = 2,4 · 10<sup>6</sup> bulunur."
 }
];
