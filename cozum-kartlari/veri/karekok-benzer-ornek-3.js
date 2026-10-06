// MEB örnek sorularına benzer yeni sorular 43–62 (Kareköklü İfadeler)
(function () {
  const { TK, YK, AB, CB, TC, ON, GS } = KK_KONU;
  const ST = 'stroke="var(--fig-stroke)"';
  const rect = (x, y, w, h, fill, extra = '') => `<rect x="${x}" y="${y}" width="${w}" height="${h}" fill="${fill}" ${ST} stroke-width="1.5" ${extra}/>`;

  const karton50 = svg(300, 190, (() => {
    const c = 32, o = 10, kirmizi = new Set(['3,0', '0,1', '2,1', '3,2', '1,3', '0,4', '2,4']);
    let g = '';
    for (let y = 0; y < 5; y++) for (let x = 0; x < 7; x++) {
      if ((x >= 5 && y >= 2) || (x === 6 && y >= 1)) continue;
      g += rect(o + x * c, o + y * c, c, c, kirmizi.has(`${x},${y}`) ? '#e8222e' : '#f2cf9b', 'stroke-width="1"');
    }
    return g + `<path d="M${o + 7 * c} ${o} L${o + 6 * c} ${o + 2 * c} L${o + 5 * c + 10} ${o + 3 * c} L${o + 4 * c} ${o + 5 * c}" fill="none" stroke="#a0703c" stroke-width="2"/>`;
  })(), 'Yırtılmış kartonun kalan kısmı; 7 boyalı kare görünüyor');

  const kalemtiras58 = svg(460, 80, (() => {
    const u = 20.5, sag = 420;
    let g = `<rect x="${sag - 16.8 * u}" y="18" width="${16.8 * u + 25}" height="44" fill="#f5821f"/><rect x="${sag - 20 * u - 4}" y="26" width="${20 * u + 8}" height="30" fill="#f8d7b8" ${ST} stroke-width=".8"/>`;
    for (let i = 0; i <= 20; i++) g += `<line x1="${sag - i * u}" y1="26" x2="${sag - i * u}" y2="34" ${ST}/><text x="${sag - i * u}" y="50" text-anchor="middle" font-size="10">${i}</text>`;
    for (let i = 0; i < 20; i++) g += `<line x1="${sag - (i + .5) * u}" y1="26" x2="${sag - (i + .5) * u}" y2="30" ${ST}/>`;
    return g + `<rect x="${sag + 4}" y="30" width="${3.16 * u - 4}" height="22" rx="3" fill="#f6e000" ${ST}/>`;
  })(), 'Kutunun sol kenarı cetvelde 16,5 ile 17 arasında; cetvelin 0 ucu ile kutunun sağ kenarı arasında kalemtıraş');

  KK_BENZER_ORNEK.push(
  {
    no: 43, konu: TC,
    q: `<p>Kenarı ${R(192)} m olan kare levhanın dört köşesinden, merkezi köşede ve yarıçapı ${R(27)} m olan çeyrek daireler kesiliyor.</p><p class="ask">Kalan parçanın çevresi kaç metredir? (π = 3)</p>`,
    opts: [R(3, 20), R(3, 26), R(3, 32), R(3, 38)], ans: 1,
    hints: [`Dört çeyrek yay = bir tam çember.`],
    steps: [`Kenar 8${R(3)}, yarıçap 3${R(3)}`, `Düz kısımlar: 4 · (8${R(3)} − 6${R(3)}) = 8${R(3)}`, `Yaylar: 2 · 3 · 3${R(3)} = 18${R(3)} → toplam <b>${R(3, 26)}</b>`],
    answer: `Cevap: <b>B</b>`
  },
  {
    no: 44, konu: YK,
    q: `<p>Bir terazinin sol kefesinde ${R(200)} g, sağ kefesinde 80 g ve ${R(2, 5)} g kutular var; sağ kefe aşağıda. Sol kefeye 5 g'lık kutular konunca sol kefe ağır basıyor.</p><p class="ask">Sol kefeye en az kaç kutu konmuştur?</p>`,
    opts: ['13', '14', '15', '16'], ans: 2,
    hints: [`${R(200)} ≈ 14,14 ve 5${R(2)} ≈ 7,07.`],
    steps: [`Sağ ≈ 87,07, sol ≈ 14,14 → fark ≈ 72,93`, `5n > 72,93 → n ≥ <b>15</b>`],
    answer: `Cevap: <b>C</b>`
  },
  {
    no: 45, konu: YK,
    q: `<p>100 dm'lik mavi tahtadan ${R(6, 3)} dm'lik, 120 dm'lik bordo tahtadan ${R(10, 2)} dm'lik eş parçalar kesiliyor. Her kitaplıkta 2 mavi yan parça ve 3 bordo raf var.</p><p class="ask">En çok kaç kitaplık yapılır?</p>`,
    opts: ['3', '4', '5', '6'], ans: 3,
    hints: [`3${R(6)} ≈ 7,35; 2${R(10)} ≈ 6,32.`],
    steps: [`Mavi: 100 / 7,35 → 13 parça → 6 kitaplık`, `Bordo: 120 / 6,32 → 18 parça → 6 kitaplık`, `En çok <b>6</b>`],
    answer: `Cevap: <b>D</b>`
  },
  {
    no: 46, konu: ON,
    q: `<p>Her birinin alanı ${R('0,0016')} m<sup>2</sup> olan 300 kare taş, bir havuzun çevresine tek sıra ve boşluksuz diziliyor. Taşların dış köşeleri ABCD dikdörtgenini oluşturuyor.</p><p class="ask">ABCD'nin çevresi kaç metredir?</p>`,
    opts: ['60,8', '61,2', '61,6', '62'], ans: 0,
    hints: [`${R('0,0016')} = 0,04 → taşın kenarı ${R('0,04')} = 0,2 m.`],
    steps: [`2m + 2n − 4 = 300 → m + n = 152`, `Çevre 2 · 152 · 0,2 = <b>60,8</b> m`],
    answer: `Cevap: <b>A</b>`
  },
  {
    no: 47, konu: YK,
    q: `<p>Yatık kutunun eni ${R(3, 8)} cm'dir; üç yatık kutunun yüksekliği bir dik kutunun boyuna eşittir. 2,4 m'lik rafa kutular “yatık üçlü, dik, yatık üçlü, …, dik, yatık üçlü” biçiminde diziliyor.</p><p class="ask">Rafa en çok kaç kutu dizilir?</p>`,
    opts: ['48', '51', '52', '54'], ans: 1,
    hints: [`Dik kutu kalınlığı ${F(R(3, 8), 3)} ≈ 4,62 cm.`],
    steps: [`k yatık grup: 8${R(3)}k + ${F(R(3, 8), 3)}(k − 1) ≤ 240 → 18,48k − 4,62 ≤ 240 → k ≤ 13,2`, `k = 13: 39 + 12 = <b>51</b> kutu`],
    answer: `Cevap: <b>B</b>`
  },
  {
    no: 48, konu: YK,
    q: `<p>Sarı kartonların alanı 3 dm², mavilerinki 6 dm². Dikdörtgen bir levhanın üstüne 6 mavi (sağ kenarı biraz geçiyor), altına 8 sarı (sağ kenara biraz yetişmiyor), soluna 3 mavi (kısa kenara yetişmiyor), sağına 5 sarı (kısa kenarı biraz geçiyor) dizilmiş. Levhanın kenarları doğal sayıdır.</p><p class="ask">Levhanın çevresi kaç desimetredir?</p>`,
    opts: ['44', '46', '48', '50'], ans: 0,
    hints: [`Sarı kenar ${R(3)}, mavi kenar ${R(6)}.`],
    steps: [`Uzun kenar: 8${R(3)} ≈ 13,86 < x < 6${R(6)} ≈ 14,70 → 14`, `Kısa kenar: 3${R(6)} ≈ 7,35 < y < 5${R(3)} ≈ 8,66 → 8`, `Çevre <b>44</b>`],
    answer: `Cevap: <b>A</b>`
  },
  {
    no: 49, konu: YK,
    q: `<p>Kaan ve Doruk sırayla, arkadaşının söylediği sayının ${R(3)} katının en yakın olduğu doğal sayıyı söylüyor; yanlış söyleyen olunca oyun bitiyor. Kaan 2 ile başlıyor ve oyun Doruk üçüncü kez sayı söylediğinde bitiyor.</p><p class="ask">Hangisi Doruk'un söylediği sayılardan biri <u>olamaz</u>?</p>`,
    opts: ['3', '9', '27', '28'], ans: 3,
    hints: [`Doğru diziyi yaz: 2 → 3 → 5 → 9 → 16 → …`],
    steps: [`2${R(3)} ≈ 3,46 → 3 · 3${R(3)} ≈ 5,20 → 5 · 5${R(3)} ≈ 8,66 → 9 · 9${R(3)} ≈ 15,59 → 16`, `Doruk'un doğru üçüncü sayısı 16${R(3)} ≈ 27,7 → 28 olurdu; oyun bittiğine göre yanlış söyledi`, `<b>28</b> olamaz`],
    answer: `Cevap: <b>D</b>`
  },
  {
    no: 50, konu: CB,
    q: `<p>Çevresi ${R(3, 52)} cm olan dikdörtgen karton 5 sıra × 8 sütun = 40 eş kareye bölünüp bazı kareler boyanmış, sonra bir kısmı yırtılmıştır.</p><div class="fig">${karton50}</div><p class="ask">Boyalı karelerin toplam alanı 180 cm<sup>2</sup> ise yırtılan kısımda kaç boyalı kare vardır?</p>`,
    opts: ['7', '8', '9', '10'], ans: 1,
    hints: [`2(8a + 5a) = 26a.`],
    steps: [`26a = 52${R(3)} → a = 2${R(3)} → bir kare 12 cm²`, `Boyalı: 180 / 12 = 15; görünen 7 → yırtılan <b>8</b>`],
    answer: `Cevap: <b>B</b>`
  },
  {
    no: 51, konu: YK,
    q: tablo([['Madde', 'Sabun', 'Limon', 'Saf su', 'Kola', 'Deniz suyu'], ['pH', R(3, 4), R(3, 2), R(49), R(6), R(6, 3)]]) + `<p>pH 7 nötr; 7'den küçük asidik, büyük bazik.</p><p class="ask">Kaç madde bazik özelliktedir?</p>`,
    opts: ['1', '2', '3', '4'], ans: 0,
    hints: [`Her değeri ${R(49)} ile karşılaştır.`],
    steps: [`4${R(3)} = ${R(48)} < 7 · 2${R(3)} = ${R(12)} < 7 · ${R(6)} < 7 · ${R(49)} = 7 nötr`, `3${R(6)} = ${R(54)} > 7 → yalnızca deniz suyu → <b>1</b>`],
    answer: `Cevap: <b>A</b>`
  },
  {
    no: 52, konu: YK,
    q: `<p>“Aldım, verdim, ben seni yendim” oyununda (her kelimede bir ayak boyu ilerlenir, önce Bora 5 adım, sonra Işıl 5 adım, …) Bora'nın ayakkabısı ${R(288)} cm, Işıl'ınki ${R(200)} cm'dir. Işıl, kendi 8. adımında Bora'nın ayakkabısına ilk basıp kazanıyor. Başlangıç noktaları arası desimetre cinsinden tam sayıdır.</p><p class="ask">Bu mesafe kaç desimetre olabilir?</p>`,
    opts: ['25', '26', '28', '30'], ans: 2,
    hints: [`Işıl'ın 8. adımı, onun 2. turunun 3. adımı. O sırada Bora 10 adım atmıştır.`],
    steps: [`Bora 10 · 12${R(2)} = 120${R(2)}; Işıl 7 adımda 70${R(2)}, 8 adımda 80${R(2)}`, `190${R(2)} ≈ 268,7 < mesafe ≤ 200${R(2)} ≈ 282,8 cm`, `26,87 < d ≤ 28,28 → <b>28</b> olabilir (27 de olur)`],
    answer: `Cevap: <b>C</b>`
  },
  {
    no: 53, konu: TC,
    q: `<p>Alanı 162 cm<sup>2</sup> olan kare karton ortadan katlanıp, katlama kenarına ve bir kenara değen ${R(8)} cm (derinlik) × ${R(2)} cm (katlama boyunca) dikdörtgen kesilip atılıyor.</p><p class="ask">Açılan kartonun çevresi kaç santimetredir?</p>`,
    opts: [R(2, 40), R(2, 42), R(2, 44), R(2, 46)], ans: 0,
    hints: [`Açılınca çentik: derinlik 2${R(2)}, genişlik 2${R(2)}.`],
    steps: [`Kare kenarı 9${R(2)} → çevre 36${R(2)}`, `Çentik +2 · 2${R(2)} = +4${R(2)}`, `Çevre <b>${R(2, 40)}</b>`],
    answer: `Cevap: <b>A</b>`
  },
  {
    no: 54, konu: YK,
    q: `<p>Bir fotoğraf makinesi ${R(320)} m uzaktaki ağaca netleniyor. Net alan derinliği makine–ağaç uzaklığının yarısıdır; net bölgenin ağaç ile makine arasındaki kısmı net alan derinliğinin ${F(1, 4)}'üdür.</p><p class="ask">Net bölgedeki bir nesnenin makineye uzaklığının alabileceği en küçük ve en büyük tam sayı değerleri hangisidir?</p>`,
    opts: ['15 ve 22', '15 ve 23', '16 ve 23', '16 ve 22'], ans: 3,
    hints: [`${R(320)} = 8${R(5)}; derinlik 4${R(5)}; ağacın önünde ${R(5)}.`],
    steps: [`Net bölge 7${R(5)} ile 10${R(5)} arası → ${R(245)} ≈ 15,65 ile ${R(500)} ≈ 22,36`, `En küçük <b>16</b>, en büyük <b>22</b>`],
    answer: `Cevap: <b>D</b>`
  },
  {
    no: 55, konu: YK,
    q: `<p>Tavandaki özdeş K, L, M lambalarından en yüksekte L (5 m), en alçakta M (3 m) var. L ile K arasındaki fark, K ile M arasındaki farktan büyüktür.</p><p class="ask">K'nin yerden yüksekliği hangisi olabilir?</p>`,
    opts: [R(5), R(8), R(15), R(17)], ans: 2,
    hints: [`5 − K > K − 3 → K < 4.`],
    steps: [`3 < K < 4 → 9 < K² < 16`, `<b>${R(15)}</b> ≈ 3,87 ✓`],
    answer: `Cevap: <b>C</b>`
  },
  {
    no: 56, konu: CB,
    q: `<p>Oyuncakların bağlantı yerleri: kırmızı ${R(18)}, ${R(50)}, ${R(8)} · mavi ${R(20)}, ${R(45)} · sarı ${R(27)}, ${R(75)} · yeşil üçgen ${R(32)}, ${R(12)}, ${R(80)}, ${R(125)}. Bağlanan iki yerdeki sayıların çarpımı rasyonel olmalıdır.</p><p class="ask">Hangisi kurala uygun bir yapıdır?</p>`,
    opts: [`${R(32)}–${R(18)}, ${R(12)}–${R(20)}, ${R(80)}–${R(75)}`, `${R(12)}–${R(8)}, ${R(80)}–${R(45)}, ${R(32)}–${R(27)}`, `${R(80)}–${R(27)}, ${R(32)}–${R(50)}, ${R(12)}–${R(75)}`, `${R(32)}–${R(50)}, ${R(12)}–${R(75)}, ${R(125)}–${R(20)}`], ans: 3, long: true,
    hints: [`a${R('b')} biçiminde kökün içi aynı olanlar rasyonel çarpım verir.`],
    steps: [`${R(2)}'li: ${R(18)}, ${R(50)}, ${R(8)}, ${R(32)} · ${R(5)}'li: ${R(20)}, ${R(45)}, ${R(80)}, ${R(125)} · ${R(3)}'lü: ${R(27)}, ${R(75)}, ${R(12)}`, `A: ${R(12)}–${R(20)} ✗ · B: ${R(12)}–${R(8)} ✗ · C: ${R(80)}–${R(27)} ✗`, `D: hepsi aynı türden → <b>uygun</b>`],
    answer: `Cevap: <b>D</b>`
  },
  {
    no: 57, konu: TC,
    q: tablo([['Sporcu', 'Ali', 'Can', 'Ece', 'Su'], ['1. etap', R(12), R(8), R(5), R(6)], ['2. etap', R(27), R(50), R(20), R(24)], ['3. etap', R(48), R(72), R(80), R(54)]]) + `<p class="ask">Toplam süresi en az olan sporcu hangisidir?</p>`,
    opts: ['Ali', 'Can', 'Ece', 'Su'], ans: 3,
    hints: [`Her sporcunun toplamını a${R('b')} biçiminde bul.`],
    steps: [`Ali 9${R(3)} = ${R(243)} · Can 13${R(2)} = ${R(338)}`, `Ece 7${R(5)} = ${R(245)} · Su 6${R(6)} = ${R(216)}`, `En az: <b>Su</b>`],
    answer: `Cevap: <b>D</b>`
  },
  {
    no: 58, konu: YK,
    q: `<p>Kapağı 20 cm'lik cetvel olan kalem kutusunda, kutunun sağ kenarı ile cetvelin 0 ucu arasına bir kalemtıraş sıkışmıştır. Kapak kapalıyken cetvelin 20 ucu kutunun sol kenarıyla aynı hizadadır.</p><div class="fig">${kalemtiras58}</div><p class="ask">Kalemtıraşın uzunluğu hangisi olabilir?</p>`,
    opts: [R(2, 2), R(10), R(13), '4'], ans: 1,
    hints: [`Kutunun sol kenarı cetvelde 16,5 ile 17 arasında.`],
    steps: [`Kayma 3 ile 3,5 cm arası → 9 < uzunluk² < 12,25`, `<b>${R(10)}</b> ≈ 3,16 ✓`],
    answer: `Cevap: <b>B</b>`
  },
  {
    no: 59, konu: CB,
    q: `<p>Kare tekerleklerinin bir yüzünün alanı 108 cm<sup>2</sup> olan bisiklet için, tekerlek kenarı yarım silindirin yay uzunluğuna eşit olan 25 eş yarım silindirden bir platform yapılıyor.</p><p class="ask">Platformun A ve B uçları arası kaç santimetredir? (π = 3)</p>`,
    opts: [R(3, 100), R(3, 125), R(3, 150), R(3, 200)], ans: 0,
    hints: [`Kenar ${R(108)} = 6${R(3)} = πr.`],
    steps: [`3r = 6${R(3)} → r = 2${R(3)}, çap 4${R(3)}`, `AB = 25 · 4${R(3)} = <b>${R(3, 100)}</b>`],
    answer: `Cevap: <b>A</b>`
  },
  {
    no: 60, konu: YK,
    q: `<p>Uzun atlamada sıçrama tahtasına en yakın düşen Sude'nin pist sonuna uzaklığı 6 m, en uzak düşen Zeynep'inki 5,5 m'dir.</p><p class="ask">Hayat'ın pist sonuna uzaklığı hangisi olabilir?</p>`,
    opts: [R(7, 2), R(3, 3), R(10, 2), R(33)], ans: 3,
    hints: [`5,5 < d < 6 → 30,25 < d² < 36.`],
    steps: [`2${R(7)} = ${R(28)} ✗ · 3${R(3)} = ${R(27)} ✗ · 2${R(10)} = ${R(40)} ✗ · <b>${R(33)}</b> ✓`],
    answer: `Cevap: <b>D</b>`
  },
  {
    no: 61, konu: CB,
    q: `<p>Bir kutunun kapağının uzun kenarı kısa kenarının 4 katıdır. Kapak uzun kenarın ${F(1, 4)}'ü kadar açılınca görünen iç bölgenin alanı 27 cm<sup>2</sup> oluyor. Sonra kapak ${R(3)} cm kapatılıyor.</p><p class="ask">Kapağın dışarıda kalan kısmının kısa kenarı kaç santimetredir?</p>`,
    opts: [R(3, 2), R(3, 3), R(3, 4), R(3, 6)], ans: 0,
    hints: [`Kısa kenar a: açılan bölge a × a.`],
    steps: [`a² = 27 → a = 3${R(3)}, uzun kenar 12${R(3)}, açılan 3${R(3)}`, `${R(3)} kapatılınca dışarıda 2${R(3)} × 3${R(3)} → kısa kenar <b>${R(3, 2)}</b>`],
    answer: `Cevap: <b>A</b>`
  },
  {
    no: 62, konu: YK,
    q: `<p>Dönme dolapta Ali en üst kabinde (20 m), Kuzey en alt kabinin yanındaki kabinde (6 m). Çınar dolabın merkezinden yüksekte, Ali'den alçakta.</p><p class="ask">Çınar'ın kabininin yüksekliği hangisi olabilir?</p>`,
    opts: [R(10, 4), R(30, 2), R(21, 3), R(17, 5)], ans: 2,
    hints: [`Merkez, 6 ile 20'nin ortasından (13) yüksektedir.`],
    steps: [`13 < h < 20 → 169 < h² < 400`, `3${R(21)} = <b>${R(189)}</b> ✓ (${R(160)}, ${R(120)} küçük; ${R(425)} büyük)`],
    answer: `Cevap: <b>C</b>`
  }
  );
})();
