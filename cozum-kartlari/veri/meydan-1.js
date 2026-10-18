// Haftanın meydan okuması · 1. hafta · LGS düzeyinde zor sorular (araclar/deneme-uretici ile üretildi).
// Bu sorular sitenin başka hiçbir sayfasında yer almaz; her sorunun cevabı hesapla doğrulanmıştır.
// Yayındaki bir haftanın sorularını ya da sırasını değiştirmeyin: öğretmen paneli eski sonuçları bu sıraya göre eşler.
window.MEYDAN_SORULARI = window.MEYDAN_SORULARI || {};
window.MEYDAN_SORULARI['meydan-1'] = [
 {
  "no": 1,
  "unite": "Çarpanlar ve Katlar",
  "konu": "EBOB ve EKOK",
  "q": "<p>Uzun kenarı 5,4 m, kısa kenarı 3,6 m olan dikdörtgen biçimindeki bir salonun zemini, birbirinin aynısı olan kare biçimindeki fayanslarla boşluk kalmadan ve fayanslar kesilmeden kaplanacaktır. Fayansların bir kenar uzunluğu santimetre cinsinden bir doğal sayıdır ve 20 cm'den uzun, 50 cm'den kısadır.</p><p class=\"ask\">Buna göre bu iş için en az kaç fayans kullanılır?</p>",
  "opts": [
   "6",
   "24",
   "54",
   "96"
  ],
  "ans": 3,
  "steps": [
   "Uzunlukları santimetreye çevirelim: 5,4 m = 540 cm, 3,6 m = 360 cm",
   "Fayansın kenarı hem 540'ı hem 360'ı bölmeli: EBOB(540, 360) = 180'in bölenleri arasından 20 ile 50 arasında olanlar 30, 36 ve 45'tir",
   "En az fayans için kenar en uzun olmalı → 45 cm",
   "(540 ÷ 45) · (360 ÷ 45) = 12 · 8 = <b>96</b> fayans"
  ],
  "answer": "Cevap: <b>D</b>",
  "trap": "6, fayansın kenarını EBOB'a, yani 180 cm'ye eşit alanların; 24, kenarı 90 cm alanların; 54, kenarı 60 cm alanların cevabıdır. Bu uzunluklar \"50 cm'den kısa\" koşulunu sağlamaz."
 },
 {
  "no": 2,
  "unite": "Çarpanlar ve Katlar",
  "konu": "Aralarında asal sayılar",
  "q": "<p>Bir öğretmen tahtaya çarpımları 2520 olan iki basamaklı iki doğal sayı yazacaktır. Öğretmen yazacağı sayıların aralarında asal olmasını istemektedir.</p><p class=\"ask\">Buna göre tahtaya yazılan iki sayının toplamı en fazla kaç olabilir?</p>",
  "opts": [
   "101",
   "107",
   "114",
   "118"
  ],
  "ans": 1,
  "steps": [
   "2520 = 2<sup>3</sup> · 3<sup>2</sup> · 5 · 7",
   "Aralarında asal iki sayıda ortak asal çarpan olmaz: 2<sup>3</sup> = 8, 3<sup>2</sup> = 9, 5 ve 7 çarpanlarından her biri bütün olarak sayılardan yalnızca birinde bulunur",
   "İki basamaklı sayı çiftleri: 72 ve 35, 40 ve 63, 56 ve 45",
   "Toplamlar: 107, 103, 101 → en büyüğü <b>107</b>"
  ],
  "answer": "Cevap: <b>B</b>",
  "trap": "118 (28 ve 90) ve 114 (30 ve 84) çiftlerinin çarpımı da 2520'dir ama bu sayılar aralarında asal değildir."
 },
 {
  "no": 3,
  "unite": "Üslü İfadeler",
  "konu": "Temel kurallar",
  "q": "<p>Bir ayrıtının uzunluğu 8<sup>2</sup> cm olan küp biçimindeki bir kutu, bir ayrıtının uzunluğu 4 cm olan küp biçimindeki şekerlerle doldurulacaktır. Şekerler aralarında boşluk kalmayacak biçimde kutuya yerleştirildiğinde kutunun tam yarısı dolmaktadır.</p><p class=\"ask\">Buna göre kutuya kaç şeker yerleştirilmiştir?</p>",
  "opts": [
   "2<sup>3</sup>",
   "2<sup>6</sup>",
   "2<sup>11</sup>",
   "2<sup>12</sup>"
  ],
  "ans": 2,
  "steps": [
   "Kutunun ayrıtı 8<sup>2</sup> = (2<sup>3</sup>)<sup>2</sup> = 2<sup>6</sup> cm, şekerin ayrıtı 4 = 2<sup>2</sup> cm",
   "Bir ayrıta 2<sup>6</sup> ÷ 2<sup>2</sup> = 2<sup>4</sup> şeker sığar; kutunun tamamına (2<sup>4</sup>)<sup>3</sup> = 2<sup>12</sup> şeker sığar",
   "Kutunun yarısı dolduğuna göre 2<sup>12</sup> ÷ 2 = <b>2<sup>11</sup></b> şeker yerleştirilmiştir"
  ],
  "answer": "Cevap: <b>C</b>",
  "trap": "Bir sayının yarısını almak üssünü yarıya indirmek değildir: 2<sup>12</sup>'nin yarısı 2<sup>6</sup> değil, 2<sup>11</sup>'dir."
 },
 {
  "no": 4,
  "unite": "Üslü İfadeler",
  "konu": "Bilimsel gösterim",
  "q": "<p>Bir bilgisayar saniyede 5 · 10<sup>9</sup> işlem yapabilmektedir. Bu bilgisayar, 1,8 · 10<sup>13</sup> işlem gerektiren birinci programı ve 7,2 · 10<sup>12</sup> işlem gerektiren ikinci programı arka arkaya çalıştıracaktır.</p><p class=\"ask\">Buna göre iki programın çalışması toplam kaç dakika sürer?</p>",
  "opts": [
   "84",
   "504",
   "840",
   "5040"
  ],
  "ans": 0,
  "steps": [
   "Toplam işlem: 1,8 · 10<sup>13</sup> + 7,2 · 10<sup>12</sup> = 18 · 10<sup>12</sup> + 7,2 · 10<sup>12</sup> = 25,2 · 10<sup>12</sup>",
   "Süre: 25,2 · 10<sup>12</sup> ÷ (5 · 10<sup>9</sup>) = 5,04 · 10<sup>3</sup> = 5040 saniye",
   "5040 ÷ 60 = <b>84</b> dakika"
  ],
  "answer": "Cevap: <b>A</b>",
  "trap": "5040, sonucu saniye olarak bırakanların cevabıdır. Toplarken iki sayıyı önce 10'un aynı kuvvetiyle yazmak gerekir."
 },
 {
  "no": 5,
  "unite": "Kareköklü İfadeler",
  "konu": "Karekökün yaklaşık değeri",
  "q": "<p>Alanı 75 m² olan kare biçimindeki bir bahçenin etrafı bir kat tel ile çevrilecektir. Tel yalnızca metre cinsinden tam sayı uzunlukta satılmaktadır.</p><p class=\"ask\">Buna göre bu iş için en az kaç metre tel satın alınmalıdır?</p>",
  "opts": [
   "30",
   "32",
   "34",
   "35"
  ],
  "ans": 3,
  "steps": [
   "Bahçenin bir kenarı <span class=\"kok\">√<span>75</span></span> m, çevresi 4 · <span class=\"kok\">√<span>75</span></span> = <span class=\"kok\">√<span>16 · 75</span></span> = <span class=\"kok\">√<span>1200</span></span> m",
   "34<sup>2</sup> = 1156 < 1200 < 1225 = 35<sup>2</sup> → 34 < <span class=\"kok\">√<span>1200</span></span> < 35",
   "Tel çevreden kısa olamaz → en az <b>35</b> m tel alınmalı"
  ],
  "answer": "Cevap: <b>D</b>",
  "trap": "34 m, çevreyi aşağı yuvarlayanların cevabıdır; o zaman tel yetmez. 32 m, <span class=\"kok\">√<span>75</span></span> sayısını 8 kabul edenlerin cevabıdır."
 }
];
