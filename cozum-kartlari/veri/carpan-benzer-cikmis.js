// LGS çıkmış sorulara benzer, yeni yazılmış sorular (Çarpanlar ve Katlar). Her soru aynı numaralı çıkmış sorunun mantığını izler.
window.CK_BENZER_CIKMIS = (function () {
  const yil = { 1: 2026, 2: 2025, 3: 2024, 4: 2023, 5: 2023, 6: 2023, 7: 2022, 8: 2021, 9: 2021, 10: 2020, 11: 2019, 12: 2020, 13: 2020, 14: 2019, 15: 2018 };
  const CA = 'Bir doğal sayının çarpanları', EB = 'EBOB ve EKOK', AA = 'Aralarında asal sayılar';
  const konu = { 1: EB, 2: EB, 3: EB, 4: EB, 5: AA, 6: CA, 7: CA, 8: CA, 9: AA, 10: EB, 11: EB, 12: EB, 13: EB, 14: CA, 15: CA };

  return [
  {
    no: 1,
    q: `<p>Bir atölyede 144 beyaz ve 180 sarı mum, her pakette eşit sayıda ve tek renk mum olacak şekilde <u>en az</u> sayıda pakete konuyor. Sonra 40 beyaz ve 10 sarı mumun kırık olduğu anlaşılıyor.</p><p class="ask">İçinde kırık mum olmayan paket sayısı <u>en fazla</u> kaçtır?</p>`,
    opts: ['6', '7', '8', '9'], ans: 0,
    hints: [`Paketteki mum sayısı EBOB(144, 180).`],
    steps: [`EBOB = 36 → beyaz 4, sarı 5 paket → 9 paket`, `40 kırık beyaz en az 2 pakette, 10 kırık sarı en az 1 pakette`, `Kırıksız: 9 − 3 = <b>6</b>`],
    answer: `Cevap: <b>A</b>`
  },
  {
    no: 2,
    q: `<p>Kütleleri gram cinsinden doğal sayı olan 5 özdeş A cisminin toplam kütlesi, 9 özdeş B cisminin toplam kütlesine eşittir. Hepsi birlikte tartılınca üç basamaklı bir sayı çıkıyor ve ekranda yalnızca yüzler basamağındaki 4 rakamı görünüyor.</p><p class="ask">1 tane A cismi kaç gramdır?</p>`,
    opts: ['36', '40', '42', '45'], ans: 3,
    hints: [`5A = 9B → toplam 5A + 9B = 10A.`],
    steps: [`400 ≤ 10A ≤ 499 → 40 ≤ A ≤ 49`, `B = 5A/9 doğal sayı → A, 9'un katı → A = <b>45</b> (B = 25)`],
    answer: `Cevap: <b>D</b>`
  },
  {
    no: 3,
    q: `<p>3 g'lık mavi ve 15 g'lık sarı bilyelerden yeterince var; toplam kütleleri 400 g'dan fazla. Bilyelerin tamamı 18 g'lık A torbalarına ve 30 g'lık B torbalarına konuyor; A torbalarının toplam kütlesi B torbalarınınkine eşit.</p><p class="ask">Toplam bilye sayısı <u>en az</u> kaçtır?</p>`,
    opts: ['36', '48', '60', '90'], ans: 1,
    hints: [`Her taraf EKOK(18, 30) = 90'ın katı.`],
    steps: [`Toplam 180k > 400 → k = 3 → her taraf 270 g`, `A torbası 15 + 3 (2 bilye): 15 torba → 30 bilye. B torbası 15 + 15 (2 bilye): 9 torba → 18 bilye`, `En az <b>48</b>`],
    answer: `Cevap: <b>B</b>`
  },
  {
    no: 4,
    q: `<p>Efe ve Kuzey'in bilye sayıları eşit ve 70'ten fazladır. Efe bilyelerini 4 torbaya, Kuzey 6 torbaya eşit dağıtıyor. Birer torba değiştiriyorlar.</p><p class="ask">Kuzey'in bilye sayısı <u>en az</u> kaç olur?</p>`,
    opts: ['66', '72', '78', '84'], ans: 2,
    hints: [`Sayı 12'nin katı ve 70'ten büyük.`],
    steps: [`En az 72 → Efe'nin torbası 18, Kuzey'inki 12`, `Kuzey: 72 − 12 + 18 = <b>78</b>`],
    answer: `Cevap: <b>C</b>`
  },
  {
    no: 5,
    q: `<p>İki çuvalda 35 kg ve 14 kg un var. Çuvallara eklenen undan sonra miktarlar aralarında asal oluyor.</p><p class="ask">Eklenen miktarlar (I. – II.) hangisi olabilir?</p>`,
    opts: ['3 – 4', '7 – 7', '1 – 1', '2 – 6'], ans: 3, long: true,
    hints: [`Yeni miktarların EBOB'unu bul.`],
    steps: [`A) 38, 18 → 2 · B) 42, 21 → 21 · C) 36, 15 → 3`, `D) 37, 20 → EBOB 1 ✓`],
    answer: `Cevap: <b>D</b>`
  },
  {
    no: 6,
    q: `<p>30'un pozitif çarpanlarının tamamı A ve B gruplarına, gruplardaki sayıların toplamları eşit olacak biçimde ayrılıyor. A grubunda 30, B grubunda 6 vardır.</p><p class="ask">B grubundaki en küçük sayı <u>en fazla</u> kaç olabilir?</p>`,
    opts: ['1', '2', '3', '5'], ans: 3,
    hints: [`Çarpanların toplamı 72 → her grup 36.`],
    steps: [`A'ya 30'un yanında toplamı 6 olan sayılar: {1, 5} veya {1, 2, 3}`, `A = {30, 1, 5} → B = {2, 3, 6, 10, 15}, en küçük 2. A = {30, 1, 2, 3} → B = {5, 6, 10, 15}, en küçük 5`, `En fazla <b>5</b>`],
    answer: `Cevap: <b>D</b>`
  },
  {
    no: 7,
    q: `<p>Zeynep'in kalem sayısının kendisi hariç en büyük iki çarpanı 9 ve 3; Kuzey'in kalem sayısının kendisi hariç en büyük iki çarpanı 25 ve 10'dur. İkisi de bu iki çarpanın toplamı kadar kalemi arkadaşlarına veriyor.</p><p class="ask">İkisinin toplam kaç kalemi kalır?</p>`,
    opts: ['24', '30', '36', '42'], ans: 1,
    hints: [`En büyük öz çarpan = sayı / en küçük asal çarpan.`],
    steps: [`Zeynep: 9 = n/3 → n = 27 (1, 3, 9, 27) → kalan 27 − 12 = 15`, `Kuzey: 25 = n/2 → n = 50 (1, 2, 5, 10, 25, 50) → kalan 50 − 35 = 15`, `Toplam <b>30</b>`],
    answer: `Cevap: <b>B</b>`
  },
  {
    no: 8,
    q: `<p>Dikdörtgen bir kâğıt iki sütun ve üçer satırdan oluşan altı dikdörtgene ayrılıyor. Sol sütunda üstten alanları 35 ve 21 cm², sağ sütunda 26 ve 39 cm² olan bölgeler var; en alttaki iki bölgenin alanı verilmemiştir. Bütün kenarlar 1'den büyük doğal sayıdır.</p><p class="ask">Kâğıdın alanı hangisi olabilir?</p>`,
    opts: ['180', '200', '210', '230'], ans: 1,
    hints: [`Sol sütun genişliği 35 ve 21'i, sağ sütunun genişliği 26 ve 39'u böler.`],
    steps: [`Sol genişlik 7 → yükseklikler 5, 3. Sağ genişlik 13 → yükseklikler 2, 3. Kâğıdın eni 20`, `5 + 3 + a = 2 + 3 + b → b = a + 3, a ≥ 2 → boy en az 10`, `Alan 20'nin 200 ve üstü katı → <b>200</b>`],
    answer: `Cevap: <b>B</b>`
  },
  {
    no: 9,
    q: `<p>İki dörtgenin köşelerindeki dairelere birbirinden farklı doğal sayılar yazılacak; iki dörtgen bir köşe dairesini paylaşıyor. A dörtgeninin üst köşesinde 4, alt köşesinde 15 yazıyor. A ve B, dörtgenlerin köşelerindeki dört sayının çarpımıdır ve aralarında asaldır.</p><p class="ask">A + B <u>en az</u> kaçtır?</p>`,
    opts: ['1121', '1181', '1301', '2207'], ans: 0,
    hints: [`Ortak köşe 1 olmalı. A = 60x.`],
    steps: [`x = 2 → A = 120; B'nin sayıları 2, 3, 5'e bölünmemeli → 7 · 11 · 13 = 1001 → 1121`, `x = 3 → 180 + 1001 = 1181; x = 5 → 1301; x = 7 → 420 + 11 · 13 · 17 → daha büyük`, `En az <b>1121</b>`],
    answer: `Cevap: <b>A</b>`
  },
  {
    no: 10,
    q: `<p>Yükseklikleri k, 2k, 4k ve 6k cm olan kutulardan üçer tane var. Üç blok oluşturuluyor; blokların en üstündeki kutular sırasıyla k, 4k ve 6k'dır. Bloklar üst üste konup kulenin en üstündeki kutu alınıyor.</p><p class="ask">Kulenin yüksekliği hangisi <u>olamaz</u>?</p>`,
    opts: ['76', '72', '70', '66'], ans: 1,
    hints: [`Her blok 13k, kule 39k.`],
    steps: [`Kalan: 38k, 35k veya 33k`, `76 = 38 · 2 ✓ · 70 = 35 · 2 ✓ · 66 = 33 · 2 ✓ · <b>72</b> hiçbirinin katı değil`],
    answer: `Cevap: <b>B</b>`
  },
  {
    no: 11,
    q: `<p>Elif parasının yarısıyla 20 TL'lik A, yarısıyla 30 TL'lik B paketi alıyor. Aynı markadan 5 paketi kendine ayırıp kalanları barınağa veriyor; barınağa giden A ve B paketleri eşit sayıda.</p><p class="ask">Elif toplam kaç TL harcamıştır?</p>`,
    opts: ['300', '450', '600', '900'], ans: 2,
    hints: [`H/20 − 5 = H/30.`],
    steps: [`H/60 = 5 → H = 300`, `Toplam <b>600</b> TL`],
    answer: `Cevap: <b>C</b>`
  },
  {
    no: 12,
    q: `<p>Her biri 30 kg'dan hafif özdeş çuvalların toplamı 540 kg. Aynı çuvallardan eklenince toplam 900 kg oluyor.</p><p class="ask">Eklenen çuval sayısı <u>en az</u> kaçtır?</p>`,
    opts: ['12', '18', '24', '36'], ans: 1,
    hints: [`Çuval kütlesi EBOB(540, 900) = 180'i böler ve 30'dan küçük.`],
    steps: [`En ağır çuval 20 kg`, `360 / 20 = <b>18</b>`],
    answer: `Cevap: <b>B</b>`
  },
  {
    no: 13,
    q: `<p>4 g'lık sarı ve 6 g'lık mavi boncuklarla yapılan kolyede iki rengin toplam kütleleri eşit, kolyenin kütlesi 150 g'dan az.</p><p class="ask">Sarı ve mavi boncuk sayıları farkı <u>en fazla</u> kaçtır?</p>`,
    opts: ['4', '5', '6', '12'], ans: 2,
    hints: [`Her renk 12'nin katı: sarı 3k, mavi 2k boncuk.`],
    steps: [`24k < 150 → k ≤ 6`, `Fark k = <b>6</b>`],
    answer: `Cevap: <b>C</b>`
  },
  {
    no: 14,
    q: `<p>Kenarları 1'den büyük tam sayı olan dikdörtgen kartonların alanları 39, 65 ve 91 cm²'dir. Alanları farklı iki karton eşit kenarları çakışacak biçimde 3 cm'lik kısımları üst üste yapıştırılıyor.</p><p class="ask">Oluşan kartonun alanı <u>en fazla</u> kaçtır?</p>`,
    opts: ['65', '91', '117', '156'], ans: 2,
    hints: [`Ortak kenar 13. Alan = toplam − 3 · 13.`],
    steps: [`39 + 65 − 39 = 65 · 39 + 91 − 39 = 91`, `65 + 91 − 39 = <b>117</b>`],
    answer: `Cevap: <b>C</b>`
  },
  {
    no: 15,
    q: `<p>Dikdörtgen bir kat planının üst sırasında alanı verilmeyen bir bölüm, 15 m² ve 10 m²; ortada boydan boya 30 m²; alt sırada 14 m², alanı verilmeyen bir bölüm ve 21 m² var. Bütün kenarlar metre cinsinden doğal sayıdır.</p><p class="ask">Alanı verilmeyen bölümlerin toplamı <u>en az</u> kaçtır?</p>`,
    opts: ['12', '24', '36', '48'], ans: 0,
    hints: [`Üst sıra yüksekliği 5 (genişlikler 3, 2), alt sıra yüksekliği 7 (genişlikler 2, 3).`],
    steps: [`Plan eni W, 30'u böler ve W ≥ 6 → W = 6`, `Üst boş: 1 · 5 = 5; alt boş: 1 · 7 = 7`, `Toplam <b>12</b>`],
    answer: `Cevap: <b>A</b>`
  }
  ].map(q => ({ ...q, konu: konu[q.no], etiket: `Çıkmış ${q.no} (${yil[q.no]}) benzeri` }));
})();
