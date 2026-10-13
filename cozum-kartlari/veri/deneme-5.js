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
  "q": "<p class=\"ask\">(−1)<sup>1</sup> + (−1)<sup>2</sup> + (−1)<sup>3</sup> + … + (−1)<sup>99</sup> toplamı kaçtır?</p>",
  "opts": [
   "−1",
   "0",
   "1",
   "49"
  ],
  "ans": 0,
  "steps": [
   "Ardışık her iki terim (−1) + 1 = 0 eder",
   "İlk 98 terim 49 çift oluşturur → toplamları 0",
   "Geriye (−1)<sup>99</sup> = −1 kalır → <b>−1</b>"
  ],
  "answer": "Cevap: <b>A</b>"
 },
 {
  "no": 2,
  "unite": "Çarpanlar ve Katlar",
  "konu": "Bir doğal sayının çarpanları",
  "q": "<p>Bir bahçeye 48 fidan, her sırada eşit sayıda fidan olacak biçimde dikilecek. Sıra sayısı, bir sıradaki fidan sayısından az olacak.</p><p class=\"ask\">Kaç farklı dikim planı yapılabilir?</p>",
  "opts": [
   "5",
   "6",
   "8",
   "10"
  ],
  "ans": 0,
  "steps": [
   "Sıra sayısı · sıradaki fidan = 48 olan ikililer: (1, 48), (2, 24), (3, 16), (4, 12), (6, 8), …",
   "Sıra sayısının küçük olduğu ikililer bunlar → <b>5</b> plan"
  ],
  "answer": "Cevap: <b>A</b>",
  "trap": "48'in 10 böleni var; ama (8, 6) gibi sıra sayısının büyük olduğu ikililer sayılmaz."
 },
 {
  "no": 3,
  "unite": "Çarpanlar ve Katlar",
  "konu": "EBOB ve EKOK",
  "q": "<p>Bir çiftçi 156 kg elma ve 108 kg armudu karıştırmadan, kasaların hepsinde eşit kütlede meyve olacak biçimde ve <u>mümkün olan en az</u> sayıda kasaya dolduracak.</p><p class=\"ask\">Elma kasalarının sayısı armut kasalarının sayısından kaç fazladır?</p>",
  "opts": [
   "4",
   "9",
   "13",
   "22"
  ],
  "ans": 0,
  "steps": [
   "Kasa sayısı en az → bir kasadaki kütle en büyük: EBOB(156, 108) = 12 kg",
   "Elma: 156 ÷ 12 = 13 kasa, armut: 108 ÷ 12 = 9 kasa",
   "13 − 9 = <b>4</b>"
  ],
  "answer": "Cevap: <b>A</b>"
 },
 {
  "no": 4,
  "unite": "Üslü İfadeler",
  "konu": "Temel kurallar",
  "q": "<p>Bir kenarı 2<sup>5</sup> cm olan kare biçimindeki bir kâğıt, bir kenarı 2<sup>3</sup> cm olan kare parçalara ayrılıyor; kâğıt artmıyor.</p><p class=\"ask\">Kaç kare parça elde edilir?</p>",
  "opts": [
   "2<sup>2</sup>",
   "2<sup>4</sup>",
   "2<sup>6</sup>",
   "2<sup>8</sup>"
  ],
  "ans": 1,
  "steps": [
   "Bir kenara 2<sup>5</sup> ÷ 2<sup>3</sup> = 2<sup>2</sup> parça sığar",
   "Toplam 2<sup>2</sup> · 2<sup>2</sup> = <b>2<sup>4</sup></b> parça"
  ],
  "answer": "Cevap: <b>B</b>",
  "trap": "Kenar oranı 2<sup>2</sup>'dir; alan oranı bunun karesi olur."
 },
 {
  "no": 5,
  "unite": "Üslü İfadeler",
  "konu": "Tam sayı kuvvetleri",
  "q": "<p class=\"ask\">a = −2 olduğuna göre a<sup>2</sup> − a<sup>3</sup> + (−a)<sup>0</sup> ifadesinin değeri kaçtır?</p>",
  "opts": [
   "−3",
   "5",
   "12",
   "13"
  ],
  "ans": 3,
  "steps": [
   "a<sup>2</sup> = (−2)<sup>2</sup> = 4",
   "a<sup>3</sup> = (−2)<sup>3</sup> = −8 → − a<sup>3</sup> = +8",
   "(−a)<sup>0</sup> = 1 → 4 + 8 + 1 = <b>13</b>"
  ],
  "answer": "Cevap: <b>D</b>"
 },
 {
  "no": 6,
  "unite": "Çarpanlar ve Katlar",
  "konu": "Bir doğal sayının çarpanları",
  "q": "<p class=\"ask\">1'den 50'ye kadar olan doğal sayılardan kaç tanesinin <u>tam olarak</u> 3 pozitif böleni vardır?</p>",
  "opts": [
   "2",
   "3",
   "4",
   "5"
  ],
  "ans": 2,
  "steps": [
   "Tam 3 böleni olan sayılar asal sayıların kareleridir (1, p, p<sup>2</sup>)",
   "2<sup>2</sup> = 4, 3<sup>2</sup> = 9, 5<sup>2</sup> = 25, 7<sup>2</sup> = 49 → <b>4</b> tane"
  ],
  "answer": "Cevap: <b>C</b>"
 },
 {
  "no": 7,
  "unite": "Üslü İfadeler",
  "konu": "Temel kurallar",
  "q": "<p class=\"ask\">9<sup>4</sup> · 27<sup>−2</sup> ÷ 3<sup>5</sup> = 3<sup>x</sup> olduğuna göre x kaçtır?</p>",
  "opts": [
   "−3",
   "−1",
   "1",
   "3"
  ],
  "ans": 0,
  "steps": [
   "9<sup>4</sup> = 3<sup>8</sup>, 27<sup>−2</sup> = 3<sup>−6</sup>",
   "3<sup>8</sup> · 3<sup>−6</sup> ÷ 3<sup>5</sup> = 3<sup>8 − 6 − 5</sup> = 3<sup>−3</sup> → x = <b>−3</b>"
  ],
  "answer": "Cevap: <b>A</b>"
 },
 {
  "no": 8,
  "unite": "Çarpanlar ve Katlar",
  "konu": "EBOB ve EKOK",
  "q": "<p>Ali 3 günde bir, Can 4 günde bir, Efe 6 günde bir kütüphaneye gidiyor. Üçü bir pazartesi günü kütüphanede karşılaştı.</p><p class=\"ask\">Üçü bir sonraki sefer haftanın hangi günü karşılaşır?</p>",
  "opts": [
   "Cuma",
   "Cumartesi",
   "Pazar",
   "Pazartesi"
  ],
  "ans": 1,
  "steps": [
   "Üçünün birlikte gittiği günler EKOK(3, 4, 6) = 12 günde bir",
   "12 gün = 1 hafta + 5 gün → pazartesiden 5 gün sonra: <b>cumartesi</b>"
  ],
  "answer": "Cevap: <b>B</b>"
 },
 {
  "no": 9,
  "unite": "Üslü İfadeler",
  "konu": "Ondalık çözümleme",
  "q": "<p class=\"ask\">3,052 sayısının çözümlenmiş hâli hangisidir?</p>",
  "opts": [
   "3 · 10<sup>0</sup> + 5 · 10<sup>−1</sup> + 2 · 10<sup>−2</sup>",
   "3 · 10<sup>1</sup> + 5 · 10<sup>−2</sup> + 2 · 10<sup>−3</sup>",
   "3 · 10<sup>0</sup> + 5 · 10<sup>−2</sup> + 2 · 10<sup>−3</sup>",
   "3 · 10<sup>0</sup> + 5 · 10<sup>−3</sup> + 2 · 10<sup>−4</sup>"
  ],
  "ans": 2,
  "long": true,
  "steps": [
   "3 birler basamağında: 3 · 10<sup>0</sup>",
   "Onda birler basamağı 0, 5 yüzde birler (10<sup>−2</sup>), 2 binde birler (10<sup>−3</sup>) basamağında",
   "<b>3 · 10<sup>0</sup> + 5 · 10<sup>−2</sup> + 2 · 10<sup>−3</sup></b>"
  ],
  "answer": "Cevap: <b>C</b>",
  "trap": "Virgülden sonraki 0'ı atlamamak gerekir; 5, onda birler değil yüzde birler basamağındadır."
 },
 {
  "no": 10,
  "unite": "Çarpanlar ve Katlar",
  "konu": "EBOB ve EKOK",
  "q": "<p>Bir duraktan A hattı otobüsleri 15 dakikada bir, B hattı otobüsleri 20 dakikada bir kalkıyor. İki hattın otobüsleri saat 07.00'de birlikte kalktı.</p><p class=\"ask\">07.00 ile 12.00 arasında (iki saat de dâhil) iki hattın otobüsleri kaç kez birlikte kalkar?</p>",
  "opts": [
   "4",
   "5",
   "6",
   "12"
  ],
  "ans": 2,
  "steps": [
   "Birlikte kalkış aralığı EKOK(15, 20) = 60 dakika",
   "07.00, 08.00, 09.00, 10.00, 11.00, 12.00 → <b>6</b> kez"
  ],
  "answer": "Cevap: <b>C</b>",
  "trap": "5 saatlik süre 5 aralık ama 6 kalkış demektir; 07.00'deki kalkış da sayılır."
 },
 {
  "no": 11,
  "unite": "Üslü İfadeler",
  "konu": "Temel kurallar",
  "q": "<p class=\"ask\">5<sup>x</sup> = a olduğuna göre 25<sup>x + 1</sup> ifadesinin a türünden eşiti hangisidir?</p>",
  "opts": [
   "5a<sup>2</sup>",
   "25a",
   "10a<sup>2</sup>",
   "25a<sup>2</sup>"
  ],
  "ans": 3,
  "steps": [
   "25<sup>x + 1</sup> = 25<sup>x</sup> · 25",
   "25<sup>x</sup> = (5<sup>2</sup>)<sup>x</sup> = (5<sup>x</sup>)<sup>2</sup> = a<sup>2</sup>",
   "Sonuç: <b>25a<sup>2</sup></b>"
  ],
  "answer": "Cevap: <b>D</b>"
 },
 {
  "no": 12,
  "unite": "Çarpanlar ve Katlar",
  "konu": "EBOB ve EKOK",
  "q": "<p>İki basamaklı a ve b doğal sayıları için EBOB(a, b) = 6 ve EKOK(a, b) = 72'dir.</p><p class=\"ask\">a + b kaçtır?</p>",
  "opts": [
   "30",
   "42",
   "48",
   "78"
  ],
  "ans": 1,
  "steps": [
   "a = 6m, b = 6n (m ve n aralarında asal) ve m · n = 72 ÷ 6 = 12",
   "(m, n) = (1, 12) → 6 ve 72; (3, 4) → 18 ve 24",
   "İkisi de iki basamaklı olan 18 ve 24 → 18 + 24 = <b>42</b>"
  ],
  "answer": "Cevap: <b>B</b>",
  "trap": "6 ve 72 de EBOB = 6, EKOK = 72 koşulunu sağlar ama 6 tek basamaklıdır."
 },
 {
  "no": 13,
  "unite": "Üslü İfadeler",
  "konu": "Bilimsel gösterim",
  "q": "<p>Bir virüsün boyu 0,000000125 m'dir.</p><p class=\"ask\">Bu uzunluğun bilimsel gösterimi hangisidir?</p>",
  "opts": [
   "1,25 · 10<sup>−7</sup>",
   "12,5 · 10<sup>−8</sup>",
   "125 · 10<sup>−9</sup>",
   "1,25 · 10<sup>−6</sup>"
  ],
  "ans": 0,
  "steps": [
   "Virgülü, katsayı 1 ile 10 arasında olacak biçimde 7 basamak sağa kaydırırız: 1,25",
   "Sayı küçüldüğü için üs negatif: <b>1,25 · 10<sup>−7</sup></b>"
  ],
  "answer": "Cevap: <b>A</b>",
  "trap": "12,5 · 10<sup>−8</sup> ve 125 · 10<sup>−9</sup> aynı sayıdır ama katsayı 10'dan büyük olduğu için bilimsel gösterim değildir."
 },
 {
  "no": 14,
  "unite": "Çarpanlar ve Katlar",
  "konu": "EBOB ve EKOK",
  "q": "<p>Bir hediye kutusu hazırlanırken 60 çikolata, 84 şeker ve 108 lokum hiç artmadan paketlere dağıtılacak. Her paketin içeriği birbirinin aynısı olacak ve paket sayısı <u>mümkün olan en fazla</u> olacak.</p><p class=\"ask\">Bir pakette toplam kaç tatlı bulunur?</p>",
  "opts": [
   "12",
   "18",
   "21",
   "24"
  ],
  "ans": 2,
  "steps": [
   "Paket sayısı EBOB(60, 84, 108) = 12",
   "Bir pakette 60 ÷ 12 = 5 çikolata, 84 ÷ 12 = 7 şeker, 108 ÷ 12 = 9 lokum",
   "5 + 7 + 9 = <b>21</b>"
  ],
  "answer": "Cevap: <b>C</b>",
  "trap": "12 paket sayısıdır; soru bir paketteki tatlı sayısını soruyor."
 },
 {
  "no": 15,
  "unite": "Üslü İfadeler",
  "konu": "Temel kurallar",
  "q": "<p>Boş bir USB belleğin kapasitesi 2<sup>30</sup> bayttır. Her biri 2<sup>20</sup> bayt olan fotoğraflar belleğe yüklenecek.</p><p class=\"ask\">Belleğe <u>en fazla</u> kaç fotoğraf yüklenebilir?</p>",
  "opts": [
   "512",
   "1000",
   "1024",
   "2048"
  ],
  "ans": 2,
  "steps": [
   "2<sup>30</sup> ÷ 2<sup>20</sup> = 2<sup>10</sup>",
   "2<sup>10</sup> = <b>1024</b>"
  ],
  "answer": "Cevap: <b>C</b>"
 },
 {
  "no": 16,
  "unite": "Çarpanlar ve Katlar",
  "konu": "Aralarında asal sayılar",
  "q": "<p class=\"ask\"><span class=\"frac\"><span>a</span><span>18</span></span> kesri sadeleştirilemeyen bir kesirdir. a, 18'den küçük bir doğal sayı olduğuna göre a kaç farklı değer alabilir?</p>",
  "opts": [
   "5",
   "6",
   "8",
   "9"
  ],
  "ans": 1,
  "steps": [
   "Kesrin sadeleşmemesi için a ile 18 aralarında asal olmalı",
   "18 = 2 · 3<sup>2</sup> → a, 2'ye ve 3'e bölünmemeli",
   "a: 1, 5, 7, 11, 13, 17 → <b>6</b> değer"
  ],
  "answer": "Cevap: <b>B</b>"
 },
 {
  "no": 17,
  "unite": "Üslü İfadeler",
  "konu": "10'un kuvvetleri",
  "q": "<p class=\"ask\">0,00045 = 45 · 10<sup>n</sup> olduğuna göre n kaçtır?</p>",
  "opts": [
   "−6",
   "−5",
   "−4",
   "4"
  ],
  "ans": 1,
  "steps": [
   "45'ten 0,00045'e gitmek için virgül 5 basamak sola kayar",
   "Sola kayma 10<sup>−5</sup> ile çarpmaktır → n = <b>−5</b>"
  ],
  "answer": "Cevap: <b>B</b>"
 },
 {
  "no": 18,
  "unite": "Çarpanlar ve Katlar",
  "konu": "Bir doğal sayının çarpanları",
  "q": "<p>Bir A sayısı yalnızca 2 ve 3 asal çarpanlarından oluşuyor, 8'in katıdır ve tam 12 pozitif böleni vardır.</p><p class=\"ask\">A, 1000'den küçük olduğuna göre A'nın alabileceği <u>en büyük</u> değer kaçtır?</p>",
  "opts": [
   "48",
   "72",
   "84",
   "96"
  ],
  "ans": 3,
  "steps": [
   "A = 2<sup>a</sup> · 3<sup>b</sup>, a ≥ 3 (8'in katı), b ≥ 1 ve (a + 1) · (b + 1) = 12",
   "(a, b) = (3, 2) → 72; (5, 1) → 96; (11, 0) olamaz (3 çarpanı yok)",
   "En büyük <b>96</b>"
  ],
  "answer": "Cevap: <b>D</b>",
  "trap": "48 = 2<sup>4</sup> · 3'ün 10, 84 = 2<sup>2</sup> · 3 · 7'nin ise 7 asal çarpanı vardır."
 },
 {
  "no": 19,
  "unite": "Üslü İfadeler",
  "konu": "Bilimsel gösterim",
  "q": "<p>Bir ülkenin nüfusu 8,4 · 10<sup>7</sup>, bu ülkedeki bir şehrin nüfusu 2,1 · 10<sup>6</sup>'dır.</p><p class=\"ask\">Ülkenin nüfusu şehrin nüfusunun kaç katıdır?</p>",
  "opts": [
   "0,4",
   "4",
   "6,3",
   "40"
  ],
  "ans": 3,
  "steps": [
   "Katsayılar: 8,4 ÷ 2,1 = 4; üsler: 10<sup>7</sup> ÷ 10<sup>6</sup> = 10",
   "4 · 10 = <b>40</b>"
  ],
  "answer": "Cevap: <b>D</b>",
  "trap": "\"Kaç katı\" bölme ister; katsayıları çıkarmak (8,4 − 2,1 = 6,3) yanlış olur."
 },
 {
  "no": 20,
  "unite": "Çarpanlar ve Katlar",
  "konu": "Aralarında asal sayılar",
  "q": "<p class=\"ask\">Ardışık iki doğal sayı için aşağıdakilerden hangisi <u>her zaman</u> doğrudur?</p>",
  "opts": [
   "Biri asal sayıdır.",
   "İkisi de tek sayıdır.",
   "EKOK'ları toplamlarına eşittir.",
   "Aralarında asaldırlar."
  ],
  "ans": 3,
  "long": true,
  "steps": [
   "n ve n + 1'i bölen bir sayı farklarını, yani 1'i de böler → ortak bölenleri yalnızca 1",
   "Örnek 8 ve 9: ikisi de asal değil, biri çift; EKOK = 72, toplam = 17",
   "Her zaman doğru olan: <b>aralarında asaldırlar</b>"
  ],
  "answer": "Cevap: <b>D</b>"
 }
];
