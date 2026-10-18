// Haftanın meydan okuması · 4. hafta · LGS düzeyinde zor sorular (araclar/deneme-uretici ile üretildi).
// Bu sorular sitenin başka hiçbir sayfasında yer almaz; her sorunun cevabı hesapla doğrulanmıştır.
// Yayındaki bir haftanın sorularını ya da sırasını değiştirmeyin: öğretmen paneli eski sonuçları bu sıraya göre eşler.
window.MEYDAN_SORULARI = window.MEYDAN_SORULARI || {};
window.MEYDAN_SORULARI['meydan-4'] = [
 {
  "no": 1,
  "unite": "Çarpanlar ve Katlar",
  "konu": "Aralarında asal sayılar",
  "q": "<p>Paydası 36 olan ve 0 ile 1 arasında bulunan kesirler yazılacaktır: <span class=\"frac\"><span>1</span><span>36</span></span>, <span class=\"frac\"><span>2</span><span>36</span></span>, <span class=\"frac\"><span>3</span><span>36</span></span>, …, <span class=\"frac\"><span>35</span><span>36</span></span></p><p class=\"ask\">Buna göre bu kesirlerden kaç tanesi sadeleştirilemez?</p>",
  "opts": [
   "11",
   "12",
   "18",
   "24"
  ],
  "ans": 1,
  "steps": [
   "Kesir sadeleştirilemiyorsa payı ile paydası aralarında asaldır",
   "36 = 2<sup>2</sup> · 3<sup>2</sup> → pay 2'ye de 3'e de bölünmemeli",
   "1'den 35'e kadar bu özellikteki sayılar: 1, 5, 7, 11, 13, 17, 19, 23, 25, 29, 31, 35 → <b>12</b> tane"
  ],
  "answer": "Cevap: <b>B</b>",
  "trap": "18, yalnızca tek sayıları sayanların cevabıdır; 9, 15, 21 gibi tek sayılar 3 ile sadeleşir. 11, 1'i unutanların cevabıdır."
 },
 {
  "no": 2,
  "unite": "Çarpanlar ve Katlar",
  "konu": "EBOB ve EKOK",
  "q": "<p>Uzunlukları 84 cm, 126 cm ve 210 cm olan üç tahta çıta, hiç artmayacak biçimde eşit uzunlukta parçalara ayrılacaktır. Parçaların uzunluğu santimetre cinsinden bir doğal sayıdır. Daha sonra bu parçaların hepsi kullanılarak kare biçiminde çerçeveler yapılacaktır. Her çerçevede 4 parça kullanılacak ve hiç parça artmayacaktır.</p><p class=\"ask\">Buna göre en az kaç çerçeve yapılabilir?</p>",
  "opts": [
   "2",
   "3",
   "5",
   "10"
  ],
  "ans": 2,
  "steps": [
   "Parça uzunluğu üç sayıyı da bölmeli: EBOB(84, 126, 210) = 42 → parça uzunluğu 42'nin bir böleni olmalı",
   "Parça 42 cm olursa 2 + 3 + 5 = 10 parça çıkar; 10 parça 4'e tam bölünmez",
   "Parça 21 cm olursa 4 + 6 + 10 = 20 parça çıkar; 20 ÷ 4 = <b>5</b> çerçeve"
  ],
  "answer": "Cevap: <b>C</b>",
  "trap": "10, parça sayısını çerçeve sayısı sananların; 2 ve 3, 10 parçayı 4'e bölüp sonucu aşağı ya da yukarı yuvarlayanların cevabıdır. Parça artmaması gerektiği için parçalar küçültülmelidir."
 },
 {
  "no": 3,
  "unite": "Üslü İfadeler",
  "konu": "Temel kurallar",
  "q": "<p class=\"ask\">5<sup>x + 1</sup> + 5<sup>x</sup> = 6 · 25<sup>4</sup> olduğuna göre x kaçtır?</p>",
  "opts": [
   "4",
   "6",
   "7",
   "8"
  ],
  "ans": 3,
  "steps": [
   "5<sup>x + 1</sup> = 5 · 5<sup>x</sup> → 5<sup>x + 1</sup> + 5<sup>x</sup> = 5 · 5<sup>x</sup> + 5<sup>x</sup> = 6 · 5<sup>x</sup>",
   "6 · 25<sup>4</sup> = 6 · (5<sup>2</sup>)<sup>4</sup> = 6 · 5<sup>8</sup>",
   "6 · 5<sup>x</sup> = 6 · 5<sup>8</sup> → x = <b>8</b>"
  ],
  "answer": "Cevap: <b>D</b>",
  "trap": "4, 25<sup>4</sup> sayısını 5<sup>4</sup> sananların cevabıdır. Toplamada üsler toplanmaz: 5<sup>x + 1</sup> + 5<sup>x</sup> ≠ 5<sup>2x + 1</sup>."
 },
 {
  "no": 4,
  "unite": "Üslü İfadeler",
  "konu": "Bilimsel gösterim",
  "q": "<p>Nüfusu 8,4 · 10<sup>7</sup> olan bir ülkede kişi başına günde ortalama 150 litre su kullanıldığı hesaplanmıştır. 1 m³ = 1000 litredir.</p><p class=\"ask\">Buna göre bu ülkede bir günde kullanılan suyun metreküp cinsinden bilimsel gösterimi aşağıdakilerden hangisidir?</p>",
  "opts": [
   "1,26 · 10<sup>4</sup>",
   "12,6 · 10<sup>6</sup>",
   "1,26 · 10<sup>7</sup>",
   "1,26 · 10<sup>10</sup>"
  ],
  "ans": 2,
  "steps": [
   "Günlük su: 8,4 · 10<sup>7</sup> · 150 = 1260 · 10<sup>7</sup> = 1,26 · 10<sup>10</sup> litre",
   "Metreküpe çevirmek için 1000 = 10<sup>3</sup> ile bölünür: 1,26 · 10<sup>10</sup> ÷ 10<sup>3</sup> = <b>1,26 · 10<sup>7</sup></b> m³"
  ],
  "answer": "Cevap: <b>C</b>",
  "trap": "12,6 · 10<sup>6</sup> doğru değeri gösterir ama bilimsel gösterim değildir (12,6 > 10). 1,26 · 10<sup>10</sup> litre cinsinden sonuçtur."
 },
 {
  "no": 5,
  "unite": "Kareköklü İfadeler",
  "konu": "a√b biçiminde yazma",
  "q": "<p>Kenar uzunlukları <span class=\"kok\">√<span>72</span></span> cm ve <span class=\"kok\">√<span>50</span></span> cm olan dikdörtgen biçimindeki bir kartondan, bir kenar uzunluğu <span class=\"kok\">√<span>2</span></span> cm olan kare biçiminde parçalar kesilecektir. Parçalar kesilirken hiç karton artmayacaktır.</p><p class=\"ask\">Buna göre kaç kare parça elde edilir?</p>",
  "opts": [
   "11",
   "15",
   "25",
   "30"
  ],
  "ans": 3,
  "steps": [
   "<span class=\"kok\">√<span>72</span></span> = 6<span class=\"kok\">√<span>2</span></span> ve <span class=\"kok\">√<span>50</span></span> = 5<span class=\"kok\">√<span>2</span></span>",
   "Uzun kenara 6<span class=\"kok\">√<span>2</span></span> ÷ <span class=\"kok\">√<span>2</span></span> = 6, kısa kenara 5<span class=\"kok\">√<span>2</span></span> ÷ <span class=\"kok\">√<span>2</span></span> = 5 parça sığar",
   "6 · 5 = <b>30</b> parça"
  ],
  "answer": "Cevap: <b>D</b>",
  "trap": "11, sığan parça sayılarını toplayanların (6 + 5); 15, bir parçanın alanını 4 cm² sananların (60 ÷ 4) cevabıdır. Bir parçanın alanı <span class=\"kok\">√<span>2</span></span> · <span class=\"kok\">√<span>2</span></span> = 2 cm²'dir."
 }
];
