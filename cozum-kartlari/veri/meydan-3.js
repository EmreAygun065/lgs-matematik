// Haftanın meydan okuması · 3. hafta · LGS düzeyinde zor sorular (araclar/deneme-uretici ile üretildi).
// Bu sorular sitenin başka hiçbir sayfasında yer almaz; her sorunun cevabı hesapla doğrulanmıştır.
// Yayındaki bir haftanın sorularını ya da sırasını değiştirmeyin: öğretmen paneli eski sonuçları bu sıraya göre eşler.
window.MEYDAN_SORULARI = window.MEYDAN_SORULARI || {};
window.MEYDAN_SORULARI['meydan-3'] = [
 {
  "no": 1,
  "unite": "Çarpanlar ve Katlar",
  "konu": "Bir doğal sayının çarpanları",
  "q": "<p>Bir okulun gösterisinde 72 öğrenci, her sırada eşit sayıda öğrenci olacak biçimde sıralara dizilecektir. Her sırada en az 4, en fazla 15 öğrenci bulunacak ve sıra sayısı bir çift sayı olacaktır.</p><p class=\"ask\">Buna göre bir sıradaki öğrenci sayısı kaç farklı değer alabilir?</p>",
  "opts": [
   "3",
   "4",
   "5",
   "12"
  ],
  "ans": 1,
  "steps": [
   "Bir sıradaki öğrenci sayısı 72'nin çarpanı olmalı: 4 ile 15 arasındaki çarpanlar 4, 6, 8, 9, 12",
   "Sıra sayıları: 72 ÷ 4 = 18, 72 ÷ 6 = 12, 72 ÷ 8 = 9, 72 ÷ 9 = 8, 72 ÷ 12 = 6",
   "Sıra sayısı çift olanlar: 18, 12, 8, 6 → bir sıradaki öğrenci sayısı 4, 6, 9 ya da 12 olabilir → <b>4</b> farklı değer"
  ],
  "answer": "Cevap: <b>B</b>",
  "trap": "5, sıra sayısının çift olma koşulunu unutanların cevabıdır: 8 kişilik sıralarla 9 sıra oluşur ve 9 tek sayıdır."
 },
 {
  "no": 2,
  "unite": "Çarpanlar ve Katlar",
  "konu": "EBOB ve EKOK",
  "q": "<p>İki basamaklı iki doğal sayının en büyük ortak böleni 6, en küçük ortak katı 72'dir.</p><p class=\"ask\">Buna göre bu iki sayının toplamı kaçtır?</p>",
  "opts": [
   "42",
   "60",
   "78",
   "84"
  ],
  "ans": 0,
  "steps": [
   "İki sayı da 6'nın katı olmalı ve 72'yi bölmelidir: 12, 18, 24, 36, 72",
   "Bu sayılardan EBOB'u 6, EKOK'u 72 olan iki basamaklı ikili yalnızca 18 ve 24'tür (EBOB(18, 24) = 6, EKOK(18, 24) = 72)",
   "18 + 24 = <b>42</b>"
  ],
  "answer": "Cevap: <b>A</b>",
  "trap": "78, 6 ve 72 sayılarını alanların cevabıdır; ama 6 tek basamaklıdır. 60 (24 ve 36) çiftinde EKOK 72'dir ama EBOB 12'dir."
 },
 {
  "no": 3,
  "unite": "Üslü İfadeler",
  "konu": "Bilimsel gösterim",
  "q": "<p>Bir bitki hücresinin uzunluğu 2,5 · 10<sup>−5</sup> metredir. Bu hücrelerden 4 · 10<sup>3</sup> tanesi bir doğru boyunca uç uca dizilmiştir.</p><p class=\"ask\">Buna göre oluşan dizinin uzunluğu kaç santimetredir?</p>",
  "opts": [
   "0,1",
   "1",
   "10",
   "100"
  ],
  "ans": 2,
  "steps": [
   "Dizinin uzunluğu: 2,5 · 10<sup>−5</sup> · 4 · 10<sup>3</sup> = 10 · 10<sup>−2</sup> = 10<sup>−1</sup> m",
   "10<sup>−1</sup> m = 0,1 m",
   "1 m = 100 cm olduğundan 0,1 m = <b>10</b> cm"
  ],
  "answer": "Cevap: <b>C</b>",
  "trap": "0,1, sonucu metre olarak bırakanların cevabıdır; soru santimetre soruyor."
 },
 {
  "no": 4,
  "unite": "Kareköklü İfadeler",
  "konu": "Karekökün yaklaşık değeri",
  "q": "<p>a bir doğal sayıdır. <span class=\"kok\">√<span>a</span></span> sayısı 6 ile 7 arasındadır ve 7'ye 6'dan daha yakındır.</p><p class=\"ask\">Buna göre a kaç farklı değer alabilir?</p>",
  "opts": [
   "6",
   "7",
   "12",
   "13"
  ],
  "ans": 0,
  "steps": [
   "6 < <span class=\"kok\">√<span>a</span></span> < 7 → 36 < a < 49 → a, 37'den 48'e kadar olabilir",
   "<span class=\"kok\">√<span>a</span></span>, 7'ye daha yakınsa <span class=\"kok\">√<span>a</span></span> > 6,5 olmalıdır: 6,5<sup>2</sup> = 42,25 → a > 42,25 → a, 43 ve sonrası",
   "a = 43, 44, 45, 46, 47, 48 → <b>6</b> değer"
  ],
  "answer": "Cevap: <b>A</b>",
  "trap": "12, \"7'ye daha yakın\" koşulunu unutanların; 7 ve 13, 49'u da sayanların cevabıdır (√49 = 7, 6 ile 7 arasında değildir)."
 },
 {
  "no": 5,
  "unite": "Kareköklü İfadeler",
  "konu": "Ondalık sayıların karekökü",
  "q": "<p class=\"ask\"><span class=\"kok\">√<span>0,0144</span></span> + <span class=\"kok\">√<span>1,21</span></span> − <span class=\"kok\">√<span>0,64</span></span> işleminin sonucu kaçtır?</p>",
  "opts": [
   "0,42",
   "1,14",
   "1,5",
   "4,2"
  ],
  "ans": 0,
  "steps": [
   "<span class=\"kok\">√<span>0,0144</span></span> = 0,12 (çünkü 0,12 · 0,12 = 0,0144)",
   "<span class=\"kok\">√<span>1,21</span></span> = 1,1 ve <span class=\"kok\">√<span>0,64</span></span> = 0,8",
   "0,12 + 1,1 − 0,8 = <b>0,42</b>"
  ],
  "answer": "Cevap: <b>A</b>",
  "trap": "1,5, <span class=\"kok\">√<span>0,0144</span></span> sayısını 1,2 sananların cevabıdır. Karekökte virgülden sonraki basamak sayısı yarıya iner: 4 basamak → 2 basamak."
 }
];
