// Haftanın meydan okuması · 2. hafta · LGS düzeyinde zor sorular (araclar/deneme-uretici ile üretildi).
// Bu sorular sitenin başka hiçbir sayfasında yer almaz; her sorunun cevabı hesapla doğrulanmıştır.
// Yayındaki bir haftanın sorularını ya da sırasını değiştirmeyin: öğretmen paneli eski sonuçları bu sıraya göre eşler.
window.MEYDAN_SORULARI = window.MEYDAN_SORULARI || {};
window.MEYDAN_SORULARI['meydan-2'] = [
 {
  "no": 1,
  "unite": "Çarpanlar ve Katlar",
  "konu": "EBOB ve EKOK",
  "q": "<p>Bir otobüs durağından A hattı otobüsleri 12 dakikada bir, B hattı otobüsleri 18 dakikada bir, C hattı otobüsleri 30 dakikada bir kalkmaktadır. Üç hattın otobüsleri saat 07.10'da bu duraktan birlikte kalkmıştır.</p><p class=\"ask\">Buna göre aynı gün saat 19.00'a kadar üç hattın otobüsleri bu duraktan kaç kez daha birlikte kalkar?</p>",
  "opts": [
   "3",
   "4",
   "7",
   "11"
  ],
  "ans": 0,
  "steps": [
   "Üç otobüs, kalkış aralıklarının ortak katlarında birlikte kalkar: EKOK(12, 18, 30) = 180 dakika = 3 saat",
   "07.10'dan sonraki birlikte kalkışlar: 10.10, 13.10, 16.10 (19.10, 19.00'dan sonradır)",
   "Üç otobüs <b>3</b> kez daha birlikte kalkar"
  ],
  "answer": "Cevap: <b>A</b>",
  "trap": "4, 07.10'daki ilk kalkışı da sayanların cevabıdır; soru \"kaç kez daha\" diye soruyor. 7, yalnızca B ve C hatlarının ortak katını (90 dakika); 11, yalnızca A ve C hatlarının ortak katını (60 dakika) alanların cevabıdır."
 },
 {
  "no": 2,
  "unite": "Üslü İfadeler",
  "konu": "Tam sayı kuvvetleri",
  "q": "<p>a = (−2)<sup>−3</sup>, b = −2<sup>−2</sup> ve c = (−<span class=\"frac\"><span>1</span><span>2</span></span>)<sup>−2</sup> olarak veriliyor.</p><p class=\"ask\">Buna göre a, b ve c sayılarının küçükten büyüğe doğru sıralanışı aşağıdakilerden hangisidir?</p>",
  "opts": [
   "a < b < c",
   "c < b < a",
   "b < a < c",
   "b < c < a"
  ],
  "ans": 2,
  "steps": [
   "a = (−2)<sup>−3</sup> = F(1,(−2)<sup>3</sup>) = <span class=\"frac\"><span>1</span><span>−8</span></span> = −0,125",
   "b = −2<sup>−2</sup> = −<span class=\"frac\"><span>1</span><span>4</span></span> = −0,25 (eksi işareti üssün dışında)",
   "c = (−<span class=\"frac\"><span>1</span><span>2</span></span>)<sup>−2</sup> = (−2)<sup>2</sup> = 4",
   "−0,25 < −0,125 < 4 → <b>b < a < c</b>"
  ],
  "answer": "Cevap: <b>C</b>",
  "trap": "Negatif üs sayıyı negatif yapmaz; c pozitiftir. Negatif sayılarda 0'a yakın olan daha büyüktür: −0,125 > −0,25."
 },
 {
  "no": 3,
  "unite": "Üslü İfadeler",
  "konu": "Ondalık çözümleme",
  "q": "<p>A = 3 · 10<sup>2</sup> + 4 · 10<sup>0</sup> + 5 · 10<sup>−2</sup> + 6 · 10<sup>−3</sup></p><p>B = 2 · 10<sup>1</sup> + 7 · 10<sup>−1</sup> + 1 · 10<sup>−3</sup></p><p class=\"ask\">Buna göre A − B farkı kaçtır?</p>",
  "opts": [
   "282,355",
   "283,255",
   "283,345",
   "283,355"
  ],
  "ans": 3,
  "steps": [
   "Eksik basamaklara 0 yazılır: A = 304,056",
   "B = 20,701",
   "A − B = 304,056 − 20,701 = <b>283,355</b>"
  ],
  "answer": "Cevap: <b>D</b>",
  "trap": "A'da onlar basamağı ve onda birler basamağı yoktur; bu basamaklara 0 yazılmazsa sayı yanlış okunur."
 },
 {
  "no": 4,
  "unite": "Kareköklü İfadeler",
  "konu": "Çarpma ve bölme",
  "q": "<p>Kenar uzunlukları <span class=\"kok\">√<span>18</span></span> cm ve <span class=\"kok\">√<span>32</span></span> cm olan dikdörtgen biçimindeki bir kartonun alanı, kare biçimindeki başka bir kartonun alanına eşittir.</p><p class=\"ask\">Buna göre kare biçimindeki kartonun çevresi kaç santimetredir?</p>",
  "opts": [
   "4<span class=\"kok\">√<span>6</span></span>",
   "8<span class=\"kok\">√<span>6</span></span>",
   "16<span class=\"kok\">√<span>3</span></span>",
   "24"
  ],
  "ans": 1,
  "steps": [
   "Dikdörtgenin alanı: <span class=\"kok\">√<span>18</span></span> · <span class=\"kok\">√<span>32</span></span> = <span class=\"kok\">√<span>576</span></span> = 24 cm²",
   "Karenin bir kenarı <span class=\"kok\">√<span>24</span></span> = <span class=\"kok\">√<span>4 · 6</span></span> = 2<span class=\"kok\">√<span>6</span></span> cm",
   "Çevre: 4 · 2<span class=\"kok\">√<span>6</span></span> = <b>8<span class=\"kok\">√<span>6</span></span></b> cm"
  ],
  "answer": "Cevap: <b>B</b>",
  "trap": "24, karenin alanıdır; soru çevreyi soruyor. 4<span class=\"kok\">√<span>6</span></span>, karenin bir kenarını <span class=\"kok\">√<span>6</span></span> sananların cevabıdır."
 },
 {
  "no": 5,
  "unite": "Kareköklü İfadeler",
  "konu": "Toplama ve çıkarma",
  "q": "<p>Kenar uzunlukları <span class=\"kok\">√<span>27</span></span> cm, <span class=\"kok\">√<span>48</span></span> cm ve <span class=\"kok\">√<span>75</span></span> cm olan bir üçgenin çevresi, bir kenar uzunluğu <span class=\"kok\">√<span>x</span></span> cm olan bir eşkenar üçgenin çevresine eşittir.</p><p class=\"ask\">Buna göre x kaçtır?</p>",
  "opts": [
   "16",
   "48",
   "144",
   "432"
  ],
  "ans": 1,
  "steps": [
   "<span class=\"kok\">√<span>27</span></span> = 3<span class=\"kok\">√<span>3</span></span>, <span class=\"kok\">√<span>48</span></span> = 4<span class=\"kok\">√<span>3</span></span>, <span class=\"kok\">√<span>75</span></span> = 5<span class=\"kok\">√<span>3</span></span>",
   "Çevre: 3<span class=\"kok\">√<span>3</span></span> + 4<span class=\"kok\">√<span>3</span></span> + 5<span class=\"kok\">√<span>3</span></span> = 12<span class=\"kok\">√<span>3</span></span> cm",
   "Eşkenar üçgenin bir kenarı 12<span class=\"kok\">√<span>3</span></span> ÷ 3 = 4<span class=\"kok\">√<span>3</span></span> = <span class=\"kok\">√<span>48</span></span> → x = <b>48</b>"
  ],
  "answer": "Cevap: <b>B</b>",
  "trap": "432, çevrenin tamamını (12<span class=\"kok\">√<span>3</span></span> = <span class=\"kok\">√<span>432</span></span>) bir kenar sananların cevabıdır. Kök içleri toplanmaz: <span class=\"kok\">√<span>27</span></span> + <span class=\"kok\">√<span>48</span></span> + <span class=\"kok\">√<span>75</span></span> ≠ <span class=\"kok\">√<span>150</span></span>."
 }
];
