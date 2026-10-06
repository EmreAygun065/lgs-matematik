// MEB örnek soruları 22–42 (Kareköklü İfadeler)
(function () {
  const { TK, YK, AB, CB, TC, ON, GS } = KK_KONU;
  const ST = 'stroke="var(--fig-stroke)"';
  const rect = (x, y, w, h, fill, extra = '') => `<rect x="${x}" y="${y}" width="${w}" height="${h}" fill="${fill}" ${ST} stroke-width="1.5" ${extra}/>`;
  const txt = (x, y, t, extra = '') => `<text x="${x}" y="${y}" text-anchor="middle" font-size="14" ${extra}>${t}</text>`;

  const lamba22 = svg(440, 190, `
    <rect x="10" y="150" width="420" height="10" fill="#c9a77c"/>
    ${rect(40, 105, 90, 45, '#b88a5a')}
    <line x1="60" y1="105" x2="60" y2="40" stroke="#777" stroke-width="5"/><line x1="58" y1="40" x2="100" y2="40" stroke="#777" stroke-width="4"/>
    <polygon points="92,42 108,42 116,66 84,66" fill="var(--green)"/>
    <line x1="125" y1="66" x2="125" y2="105" stroke="var(--red)"/><text x="130" y="90" font-size="12">14√10 cm</text>
    <line x1="300" y1="150" x2="300" y2="40" stroke="#777" stroke-width="5"/><line x1="298" y1="40" x2="340" y2="40" stroke="#777" stroke-width="4"/>
    <polygon points="324,16 356,16 348,38 332,38" fill="var(--green)"/>
    <line x1="370" y1="16" x2="370" y2="150" stroke="var(--red)"/><text x="375" y="90" font-size="12">60√10 cm</text>
    <line x1="60" y1="40" x2="300" y2="40" ${ST} stroke-dasharray="2 3"/>
    <text x="85" y="182" text-anchor="middle" font-size="13">Şekil I (küp masa üstünde)</text><text x="320" y="182" text-anchor="middle" font-size="13">Şekil II (zeminde)</text>`,
    'Şekil I: lamba küp masanın üstünde, başlık aşağı bakıyor. Şekil II: lamba zeminde, başlık yukarı çevrilmiş; iki durumda kol aynı yükseklikte');

  const masa24 = svg(460, 130, (() => {
    const s = 18, d = 4 * s, y0 = 20;
    // Merdiven kesim çizgisi: üst kenarda s'den başlar, 5 basamakla alt kenarda 5s'e iner
    const merdiven = [[s, 0], [s, s], [2 * s, s], [2 * s, 2 * s], [3 * s, 2 * s], [3 * s, 3 * s], [4 * s, 3 * s], [4 * s, 4 * s], [5 * s, 4 * s], [5 * s, 5 * s]];
    const P = (pts, x0, renk, ek = '') => `<polygon points="${pts.map(([x, y]) => `${x0 + x},${y0 + y}`).join(' ')}" fill="${renk}" ${ST} ${ek}/>`;
    const kay = (pts, dx) => pts.map(([x, y]) => [x + dx, y]);
    let g = rect(20, y0, 6 * s, 5 * s, '#e9ad5a') + `<polyline points="${merdiven.map(([x, y]) => `${20 + x},${y0 + y}`).join(' ')}" fill="none" ${ST} stroke-width="2" stroke-dasharray="4 3"/>`;
    g += `<text x="${20 + 3 * s}" y="${y0 + 5 * s + 18}" text-anchor="middle" font-size="12">Kesilecek masa</text>`;
    const X = 200;
    g += P([[0, 0], ...merdiven, [0, 5 * s]], X, '#e9ad5a');
    g += P([[s + d, 0], [6 * s + d, 0], [6 * s + d, 5 * s], ...kay(merdiven, d).reverse()], X, '#e9ad5a');
    g += P([...merdiven, ...kay(merdiven, d).reverse()], X, 'var(--fig-blue)');
    g += `<line x1="${X}" y1="${y0 - 8}" x2="${X + 6 * s + d}" y2="${y0 - 8}" ${ST}/><text x="${X + 3 * s + d / 2}" y="${y0 - 11}" text-anchor="middle" font-size="12">20√5 cm</text>`;
    g += `<text x="${X + 3 * s + d / 2}" y="${y0 + 5 * s + 18}" text-anchor="middle" font-size="12">Araya cam konmuş masa</text>`;
    return g;
  })(), 'Merdiven biçiminde kesilen masa ve iki parçanın arasına konan merdiven biçimli cam');

  const kareli25 = svg(460, 110, (() => {
    const c = 22, o = 10;
    let g = '';
    for (let i = 0; i <= 20; i++) g += `<line x1="${o + i * c}" y1="${o}" x2="${o + i * c}" y2="${o + 4 * c}" stroke="var(--muted)" stroke-dasharray="2 2"/>`;
    for (let j = 0; j <= 4; j++) g += `<line x1="${o}" y1="${o + j * c}" x2="${o + 20 * c}" y2="${o + j * c}" stroke="var(--muted)" stroke-dasharray="2 2"/>`;
    g += `<line x1="${o + 3 * c}" y1="${o + 2 * c}" x2="${o + 19 * c}" y2="${o + 2 * c}" stroke="var(--blue)" stroke-width="2.5"/>`;
    [[3, 'A'], [6, 'B'], [12, 'C'], [19, 'D']].forEach(([k, t]) => g += `<circle cx="${o + k * c}" cy="${o + 2 * c}" r="3.5" fill="var(--fig-stroke)"/><text x="${o + k * c + 4}" y="${o + 2 * c + 16}" font-size="13">${t}</text>`);
    return g;
  })(), '20 × 4 kareli kâğıt; A 3., B 6., C 12., D 19. dikey çizgi üzerinde');

  const dogru27 = svg(440, 60, (() => {
    const x = v => 30 + v * 15.5;
    let g = `<line x1="10" y1="25" x2="430" y2="25" ${ST} stroke-width="1.5"/>`;
    [1, 4, 9, 16, 25].forEach(v => g += `<circle cx="${x(v)}" cy="25" r="3.5" fill="var(--blue)"/>${txt(x(v), 48, v, 'font-size="13"')}`);
    return g;
  })(), 'Sayı doğrusunda 1, 4, 9, 16, 25');

  const firildak28 = svg(220, 220, `
    ${rect(10, 10, 200, 200, 'var(--yellow-soft)')}
    ${rect(93, 10, 17, 100, 'var(--fig-blue)')}${rect(110, 93, 100, 17, 'var(--fig-blue)')}${rect(10, 110, 100, 17, 'var(--fig-blue)')}${rect(110, 110, 17, 100, 'var(--fig-blue)')}
    <text x="60" y="122" text-anchor="middle" font-size="11" style="fill:#1f2328">Mavi</text><text x="160" y="105" text-anchor="middle" font-size="11" style="fill:#1f2328">Mavi</text>`, 'Kare kâğıt üzerinde fırıldak biçiminde dört eş mavi dikdörtgen');

  const cerceve29 = svg(360, 220, (() => {
    const L = 160, w = 20, o = 15;
    let g = rect(o, o, L, w, 'var(--green-soft)') + rect(o + L, o, L, w, 'var(--green-soft)') + rect(o, o + w + L, L, w, 'var(--green-soft)') + rect(o + L, o + w + L, L, w, 'var(--green-soft)');
    for (let i = 0; i < 16; i++) g += rect(o + i * w, o + w, w, L, 'var(--green-soft)', 'stroke-width="1"');
    return g;
  })(), 'Üstte ve altta ikişer yatay levha, aralarında 16 dikey levha');

  const pano30 = svg(440, 300, (() => {
    const k = 8, u = 22;   // √5 = 8 px, kısa kenar 2 = 22 px
    const H = 16 * k * 2, ox1 = 20, ox2 = 240, taban = 10 + H;
    let g = rect(ox1, 10, 7 * u, H, 'var(--card)') + rect(ox2, 10, 7 * u, H, 'var(--card)');
    const renk = { K: '#e23b3b', M: '#3aa7e0', S: '#f6ec7c', B: '#f2f2f2' }, uz = { K: 3, M: 5, S: 8, B: 10 };
    const resim = (ox, i, t, alt) => { const h = uz[t] * k * 2; return rect(ox + i * u, alt - h, u, h, renk[t]) + `<text x="${ox + i * u + u / 2}" y="${alt - h + 14}" text-anchor="middle" font-size="11" style="fill:#1f2328">${t}</text>`; };
    const h0 = taban - 5 * k * 2;
    ['K', 'M', 'S', 'B', 'S', 'M', 'K'].forEach((t, i) => g += resim(ox1, i, t, h0));
    const KUst = h0 - 3 * k * 2, mbAlt = taban - 6 * k * 2;
    g += resim(ox2, 0, 'K', h0) + resim(ox2, 6, 'K', h0);
    g += resim(ox2, 1, 'M', mbAlt) + resim(ox2, 5, 'M', mbAlt) + resim(ox2, 3, 'B', mbAlt);
    g += resim(ox2, 2, 'S', taban) + resim(ox2, 4, 'S', taban);
    g += `<line x1="${ox1 + 3.5 * u}" y1="10" x2="${ox1 + 3.5 * u}" y2="${10 + k * 2}" stroke="#d6249f"/><text x="${ox1 + 3.5 * u + 4}" y="${10 + k * 1.5}" font-size="11">√5 cm</text>`;
    g += `<line x1="${ox1 + 7 * u - 4}" y1="${h0 - 5 * k * 2}" x2="${ox1 + 7 * u - 4}" y2="${h0 - 3 * k * 2}" stroke="#d6249f"/><text x="${ox1 + 7 * u + 2}" y="${h0 - 4 * k * 2 + 4}" font-size="11">2√5</text>`;
    g += `<line x1="${ox2 + 1.5 * u}" y1="10" x2="${ox2 + 1.5 * u}" y2="${mbAlt - 5 * k * 2}" stroke="#d6249f"/><text x="${ox2 + 1.5 * u + 3}" y="${10 + 5 * k}" font-size="11">5√5</text>`;
    g += `<line x1="${ox2 + 5 * u - 3}" y1="${mbAlt}" x2="${ox2 + 5 * u - 3}" y2="${taban}" stroke="#d6249f"/><text x="${ox2 + 5 * u + 2}" y="${(mbAlt + taban) / 2}" font-size="11">6√5</text>`;
    g += txt(ox1 + 3.5 * u, taban + 18, 'Şekil I', 'font-size="12"') + txt(ox2 + 3.5 * u, taban + 18, 'Şekil II', 'font-size="12"');
    return g;
  })(), 'Panoya dizilmiş K, M, S, B resimleri; Şekil I ve kaydırıldıktan sonra Şekil II');

  const logo32 = svg(420, 220, `
    ${rect(80, 10, 260, 70, '#fbe3c8')}<line x1="80" y1="80" x2="340" y2="10" ${ST} stroke-dasharray="5 4"/>
    <polygon points="110,10 150,10 130,44" fill="var(--fig-blue)" ${ST}/><polygon points="270,80 310,80 290,46" fill="var(--fig-blue)" ${ST}/>
    <text x="130" y="26" text-anchor="middle" font-size="11" style="fill:#1f2328">M</text><text x="290" y="74" text-anchor="middle" font-size="11" style="fill:#1f2328">M</text>
    <text x="350" y="50" font-size="12">3√6 cm</text><text x="95" y="8" font-size="11">√3</text><text x="315" y="96" font-size="11">√3</text>
    <polygon points="60,170 220,120 220,170" fill="#fbe3c8" ${ST}/><polygon points="140,170 300,170 140,215" fill="#fbe3c8" ${ST}/>
    <polygon points="160,170 200,170 180,136" fill="var(--fig-blue)" ${ST}/><polygon points="160,170 200,170 180,204" fill="var(--fig-blue)" ${ST}/>`,
    'Dikdörtgen kâğıt köşegenden kesilip iki parça, eşkenar üçgenlerin tabanları çakışacak biçimde birleştiriliyor');

  const yollar34 = svg(330, 230, `
    <rect x="10" y="10" width="50" height="210" fill="#888"/><rect x="270" y="10" width="50" height="210" fill="#888"/>
    ${rect(60, 10, 40, 210, 'var(--yellow-soft)')}${rect(100, 10, 80, 210, 'var(--yellow-soft)')}${rect(180, 10, 90, 210, 'var(--yellow-soft)')}
    ${rect(60, 90, 40, 40, '#b6e08a')}${rect(100, 120, 80, 80, 'var(--blue-soft)')}${rect(180, 55, 90, 60, '#f6b6dc')}
    <text x="80" y="115" text-anchor="middle" font-size="11">12 hm²</text><text x="140" y="165" text-anchor="middle" font-size="12">48 hm²</text><text x="225" y="90" text-anchor="middle" font-size="12">27 hm²</text>
    <text x="35" y="115" text-anchor="middle" font-size="13" style="fill:#fff">A</text><text x="295" y="115" text-anchor="middle" font-size="13" style="fill:#fff">B</text>`,
    'A ve B yolları arasında üç şerit arazi; her şeritte bir kare: 12, 48, 27 hm²');

  const pist35 = svg(460, 90, `
    <rect x="20" y="25" width="420" height="45" fill="#f5b971"/><line x1="20" y1="15" x2="20" y2="80" stroke="var(--red)" stroke-dasharray="3 3"/><line x1="440" y1="15" x2="440" y2="80" stroke="var(--red)" stroke-dasharray="3 3"/>
    <circle cx="230" cy="48" r="4" fill="var(--fig-stroke)"/><circle cx="335" cy="48" r="4" fill="var(--fig-stroke)"/><circle cx="355" cy="48" r="4" fill="var(--fig-stroke)"/>
    <text x="230" y="40" text-anchor="middle" font-size="13">A</text><text x="335" y="40" text-anchor="middle" font-size="13">C</text><text x="358" y="40" text-anchor="middle" font-size="13">B</text>
    <text x="20" y="12" font-size="12">Başlangıç</text><text x="440" y="12" text-anchor="end" font-size="12">Bitiş</text>`, 'Koşu parkuru; A, C, B noktaları');

  const bahce38 = svg(330, 270, (() => {
    // Küçük bahçe kenarı 6√2, büyük 7√2, havuz 2√2 (ölçek: √2 = 14 px). O ortak köşe.
    const k = 14, O = [150, 125];
    const don = (aci) => ([x, y]) => [O[0] + x * Math.cos(aci) - y * Math.sin(aci), O[1] + x * Math.sin(aci) + y * Math.cos(aci)];
    const P = (pts, renk) => `<polygon points="${pts.map(p => p.map(v => v.toFixed(1)).join(',')).join(' ')}" fill="${renk}" ${ST} stroke-width="1.5"/>`;
    const a = 6 * k, b = 7 * k, h = 2 * k;
    const d1 = don(0.3), d2 = don(0.15);
    // Küçük bahçe: O'dan sola-yukarı; A, O'ya komşu üst köşe; havuz A'nın karşısındaki köşede
    let g = P([[0, 0], [-a, 0], [-a, -a], [0, -a]].map(d1), '#a6d84a');
    g += P([[-a, 0], [-a + h, 0], [-a + h, -h], [-a, -h]].map(d1), 'var(--fig-blue)');
    // Büyük bahçe: O'dan sağa-aşağı; havuz O'ya kenarla komşu köşede
    g += P([[0, 0], [b, 0], [b, b], [0, b]].map(d2), '#a6d84a');
    g += P([[0, b], [h, b], [h, b - h], [0, b - h]].map(d2), 'var(--fig-blue)');
    const A = d1([0, -a]), m1 = d1([-a / 2, -a / 2]), m2 = d2([b / 2, b / 2]);
    g += `<circle cx="${A[0]}" cy="${A[1]}" r="3" fill="var(--fig-stroke)"/><text x="${A[0] + 6}" y="${A[1] - 4}" font-size="14">A</text>`;
    g += `<text x="${m1[0]}" y="${m1[1]}" text-anchor="middle" font-size="13" style="fill:#1f2328">72 dam²</text><text x="${m2[0]}" y="${m2[1]}" text-anchor="middle" font-size="13" style="fill:#1f2328">98 dam²</text>`;
    return g;
  })(), '72 dam² ve 98 dam² kare bahçeler bir köşede birleşiyor; A küçük bahçenin bir köşesi; havuzlar köşelerde');

  const cubuk39 = svg(400, 50, `<rect x="10" y="20" width="160" height="6" fill="#e0a030"/><rect x="190" y="20" width="113" height="6" fill="#b07a20"/><rect x="320" y="20" width="80" height="6" fill="#6b4a12"/>
    <text x="90" y="14" text-anchor="middle" font-size="12">A</text><text x="246" y="14" text-anchor="middle" font-size="12">B</text><text x="360" y="14" text-anchor="middle" font-size="12">C</text>
    <text x="90" y="44" text-anchor="middle" font-size="12">6√2 cm</text>`, 'A, B, C çubukları');

  const bahce40 = svg(440, 180, `
    ${rect(30, 20, 180, 100, '#c3e58e')}${rect(210, 20, 40, 100, '#c3e58e')}${rect(30, 120, 180, 40, '#c3e58e')}${rect(210, 120, 40, 40, '#c3e58e')}
    <text x="120" y="75" text-anchor="middle" font-size="14">A</text><text x="230" y="75" text-anchor="middle" font-size="14">C</text>
    <text x="120" y="145" text-anchor="middle" font-size="14">D</text><text x="230" y="145" text-anchor="middle" font-size="14">B</text>
    <text x="140" y="14" text-anchor="middle" font-size="12">√98 hm</text><text x="232" y="14" font-size="11">√2</text>
    <text x="24" y="95" text-anchor="end" font-size="12">√50</text><text x="24" y="145" text-anchor="end" font-size="11">√8</text>
    ${rect(290, 20, 70, 140, '#c3e58e')}${rect(360, 20, 70, 140, '#c3e58e')}
    <text x="325" y="95" text-anchor="middle" font-size="12">Ali</text><text x="395" y="95" text-anchor="middle" font-size="12">Eren</text>
    <text x="210" y="178" text-anchor="middle" font-size="12">Şekil 1</text><text x="360" y="178" text-anchor="middle" font-size="12">Şekil 2 (boy √50 hm)</text>`,
    'Şekil 1: dört bahçe A, C (üstte), D, B (altta). Şekil 2: Ali ve Eren\'in birleşmiş bahçeleri');

  const kalem41 = svg(420, 70, `<rect x="20" y="20" width="300" height="22" rx="10" fill="var(--blue-soft)" ${ST}/><polygon points="320,22 345,31 320,40" fill="#ccc" ${ST}/>
    <line x1="345" y1="31" x2="395" y2="31" stroke="#333" stroke-width="2"/><line x1="345" y1="52" x2="395" y2="52" ${ST}/><text x="370" y="66" text-anchor="middle" font-size="12">3 cm</text>`, 'Uçlu kalem, ucunun 3 cm\'i dışarıda');

  const katlama42 = svg(440, 110, `
    ${rect(20, 30, 160, 55, '#f8b562')}<text x="100" y="62" text-anchor="middle" font-size="13" style="fill:#1f2328">36√2 cm²</text>
    <polygon points="230,30 285,30 285,85" fill="var(--fig-blue)" ${ST}/>${rect(285, 30, 50, 55, '#f8b562')}<polygon points="335,30 390,85 335,85" fill="var(--fig-blue)" ${ST}/>
    <text x="285" y="24" text-anchor="middle" font-size="12">A</text><text x="335" y="24" text-anchor="middle" font-size="12">B</text>
    <text x="100" y="104" text-anchor="middle" font-size="12">Şekil 1</text><text x="310" y="104" text-anchor="middle" font-size="12">Şekil 2</text>`, 'Dikdörtgen kâğıdın iki köşesi katlanınca iki mavi üçgen ve ortada turuncu bölge');

  KK_ORNEK.push(
  {
    no: 22, konu: TC, sayfa: 12,
    q: `<p>Aşağıda verilen lambanın başlığı sabit bir noktadan aşağı ve yukarı hareket ettirilerek, ayağı ise uzatılıp kısaltılarak görünümü değiştirilebilmektedir.</p>`
      + `<p>Bu lamba, yüzlerinden birinin alanı 9000 cm<sup>2</sup> olan küp şeklindeki bir masa üzerine Şekil I'deki gibi konulduğunda lambanın başlığı zemine paralel ve masa yüzeyine olan uzaklığı ${R(10, 14)} cm olmaktadır. Aynı lambanın ayağı Şekil II'deki gibi ayarlandığında lambanın başlığı zemine paralel ve zemine uzaklığı ${R(10, 60)} cm olmaktadır.</p><div class="fig">${lamba22}</div>`
      + `<p class="ask">Buna göre, Şekil I'deki konumda lambanın ayağının uzunluğu kaç santimetredir?</p>`,
    opts: [R(10, 6), R(10, 10), R(10, 16), R(10, 22)], ans: 3,
    hints: [`Küpün kenarı ${R(9000)} = 30${R(10)}. İki şekilde de kol aynı yükseklikte.`, `Şekil I'de ayağın uzunluğu x, başlığın boyu b olsun. Başlık Şekil I'de kolun altında, Şekil II'de kolun üstünde.`],
    steps: [
      `Küp kenarı 30${R(10)}. Şekil I: kolun yerden yüksekliği 30${R(10)} + x; başlığın ucu masaya 14${R(10)} → x − b = 14${R(10)}`,
      `Şekil II: kol aynı yükseklikte (30${R(10)} + x), başlık yukarı çevrilmiş → 30${R(10)} + x + b = 60${R(10)} → x + b = 30${R(10)}`,
      `İki eşitliği toplarsak 2x = 44${R(10)} → x = <b>${R(10, 22)}</b> cm`
    ],
    answer: `Cevap: <b>D</b>`
  },
  {
    no: 23, konu: YK, sayfa: 12,
    q: `<p>Birer yüzlerinde 1'den 100'e kadar olan doğal sayıların kareköklerinin yazılı olduğu 100 kart vardır: ${R(1)}, ${R(2)}, ${R(3)}, …, ${R(100)}.</p>`
      + `<p>Ahmet bu kartlardan 2 tanesini seçiyor. Seçtiği kartlarda yazan sayılarla ilgili aşağıdaki bilgiler verilmiştir.</p><ul><li>Bu sayılardan biri ${R(30)}'dan büyük, diğeri ise ${R(30)}'dan küçüktür.</li><li>Sayılardan her biri ile ${R(30)} arasında 1 tane tam kare doğal sayı vardır.</li></ul>`
      + `<p class="ask">Buna göre, Ahmet'in seçtiği kartlarda yazan sayıların çarpımının alabileceği <u>en büyük</u> doğal sayı değeri kaçtır?</p>`,
    opts: ['14', '24', '33', '42'], ans: 2,
    hints: [`${R(30)} ≈ 5,48. Tam kare doğal sayılar: 1, 4, 9, 16, … Küçük sayı ile 5,48 arasında yalnızca 4 olmalı.`],
    steps: [
      `Küçük kart ${R('a')}: ${R('a')} ile 5,48 arasında yalnızca 4 → 1 < ${R('a')} < 4 → a ∈ {2, …, 15}`,
      `Büyük kart ${R('b')}: 5,48 ile ${R('b')} arasında yalnızca 9 → 9 < ${R('b')} ≤ 10 → b ∈ {82, …, 100}`,
      `${R('ab')} doğal sayı olmalı ve en büyük olmalı: b = 99 = 9 · 11, a = 11 → ${R(1089)} = <b>33</b>`,
      `Kontrol: b = 100, a = 9 → 30 · b = 98, a = 8 → 28 · b = 96, a = 6 → 24`
    ],
    answer: `Cevap: <b>C</b>`,
    trap: `“Tam kare doğal sayı”yı kart değeri sanmak. Aradaki sayı 4 veya 9 gibi bir tam karedir; kartlardaki değerlerle karıştırılmamalı.`
  },
  {
    no: 24, konu: TC, sayfa: 13,
    q: `<p>Çevresinin uzunluğu ${R(5, 44)} cm olan dikdörtgen şeklindeki tahta masa, yatay ve dikeydeki kesikli çizgilerin her birinin uzunluğu birbirine eşit olacak biçimde merdiven şeklinde kesilerek ikiye ayrılıyor. Masa 6 eş yatay, 5 eş dikey parçaya bölünecek ölçüdedir.</p>`
      + `<p>Aradaki boşluğa, ölçülere uygun biçimde kesilen bir cam aşağıdaki gibi yerleştirildiğinde masanın uzunluğu ${R(5, 20)} cm oluyor.</p><div class="fig">${masa24}</div>`
      + `<p class="ask">Buna göre, yerleştirilen cam kısmın çevresinin uzunluğu kaç santimetredir?</p>`,
    opts: [R(5, 16), R(5, 36), R(5, 42), R(5, 52)], ans: 3,
    hints: [`Bir basamağın uzunluğu s olsun. Masa 6s × 5s.`],
    steps: [
      `Çevre 2(6s + 5s) = 22s = 44${R(5)} → s = 2${R(5)}. Masa 12${R(5)} × 10${R(5)}`,
      `Cam eklenince uzunluk 20${R(5)} → camın eni (kaydırma) 20${R(5)} − 12${R(5)} = 8${R(5)}`,
      `Camın bir merdiven kenarı: 5 dikey + 4 yatay basamak = 9s = 18${R(5)}`,
      `Cam çevresi: üst 8${R(5)} + alt 8${R(5)} + 2 · 18${R(5)} = <b>${R(5, 52)}</b> cm`
    ],
    answer: `Cevap: <b>D</b>`,
    trap: `Yalnızca iki merdiven kenarını toplamak (36${R(5)}); camın üst ve alt kenarları da çevreye dahildir.`
  },
  {
    no: 25, konu: CB, sayfa: 13,
    q: `<p>Eş karelere ayrılmış dikdörtgen şeklindeki bir kâğıt üzerine A, B, C ve D noktaları aşağıdaki gibi işaretlenmiştir. Bu kâğıt, önce kısa kenarları çakışacak biçimde katlanıp açıldıktan sonra A noktası ile B noktası çakışacak biçimde tekrar katlanıp açılıyor. Katlama çizgileri ile [AD]'nın kesiştiği noktalar E ve F olarak işaretleniyor.</p><div class="fig">${kareli25}</div>`
      + `<p class="ask">E ve F noktaları arasındaki uzaklık ${R(242)} cm olduğuna göre, C ve D noktaları arasındaki uzaklık kaç santimetredir?</p>`,
    opts: [F(R(2, 11), 2), R(2, 7), F(R(2, 21), 2), R(2, 14)], ans: 3,
    hints: [`Birinci katlama kâğıdın tam ortasından: 20 karenin ortası 10. çizgi. İkinci katlama AB'nin ortasından.`],
    steps: [
      `Kâğıt 20 kare genişliğinde → E, 10. çizgide. A 3., B 6. çizgide → F, 4,5. çizgide`,
      `EF = 10 − 4,5 = 5,5 kare = ${R(242)} = 11${R(2)} → bir kare 2${R(2)} cm`,
      `CD = 19 − 12 = 7 kare = 7 · 2${R(2)} = <b>${R(2, 14)}</b> cm`
    ],
    answer: `Cevap: <b>D</b>`
  },
  {
    no: 26, konu: YK, sayfa: 14,
    q: `<p>x, y ve z birer doğal sayı olmak üzere aşağıdaki dokuz kartın her birine birbirinden farklı kareköklü ifadeler yazılmıştır.</p>`
      + `<table class="grid"><tr><td class="r">${R('x')}</td><td class="r">${R(7, 2)}</td><td class="r">${R(3, 3)}</td></tr><tr><td class="r">${R(15)}</td><td class="r">${R('y')}</td><td class="r">${R(5, 2)}</td></tr><tr><td class="r">${R(35)}</td><td class="r">${R(18)}</td><td class="r">${R('z')}</td></tr></table>`
      + `<p>Bu kartlar üzerinde yazan kareköklü ifadelerden; 3 ile 4 sayıları arasındakiler A, 4 ile 5 sayıları arasındakiler B, 5 ile 6 sayıları arasındakiler ise C kutusuna yerleştirilecektir. Kartların tamamı kutulara yerleştirildikten sonra B ile C kutusundaki kartların sayısı birbirine eşit ve A kutusundaki kartların sayısından fazla olmaktadır.</p>`
      + `<p class="ask">Buna göre, x + y + z <u>en az</u> kaçtır?</p>`,
    opts: ['58', '61', '62', '63'], ans: 2,
    hints: [`Bilinen altı kartı kutulara yerleştir: hepsini tek kök hâline getir.`, `9 kart: A + 2B = 9 ve A < B.`],
    steps: [
      `A (9–16): ${R(15)} · B (16–25): ${R(20)}, ${R(18)} · C (25–36): ${R(28)}, ${R(27)}, ${R(35)}`,
      `A + B + C = 9, B = C > A → A = 1, B = C = 4. x, y, z'den ikisi B'ye, biri C'ye`,
      `B için en küçük, kullanılmamış: 17 ve 19. C için: 26`,
      `x + y + z = 17 + 19 + 26 = <b>62</b>`
    ],
    answer: `Cevap: <b>C</b>`,
    trap: `B kutusuna 16'yı (${R(16)} = 4) koymak. 4, “4 ile 5 arasında” değildir.`
  },
  {
    no: 27, konu: YK, sayfa: 14,
    q: `<p>Aşağıda tam kare pozitif tam sayıların yazılı olduğu bir sayı doğrusu verilmiştir. Bu sayı doğrusu üzerinde her biri bir tam sayıya karşılık gelecek biçimde 4 ile 9 arasında bir K noktası, 9 ile 16 arasında bir L noktası ve 16 ile 25 arasında bir M noktası işaretlenecektir.</p><div class="fig">${dogru27}</div>`
      + `<p>Bu noktalardan K ve L'ye karşılık gelen sayıların karekökü 3'e, M'ye karşılık gelen sayının karekökü ise 4'e daha yakındır. K, L ve M noktalarına karşılık gelen üç sayının karekökü birbiriyle çarpılarak bir doğal sayı elde edilmiştir.</p>`
      + `<p class="ask">Buna göre, elde edilen bu doğal sayı aşağıdakilerden hangisidir?</p>`,
    opts: ['40', '36', '30', '20'], ans: 0,
    hints: [`Karekökü 3'e yakın: 6,25 < n < 12,25. Karekökü 4'e yakın: 12,25 < n < 20,25.`],
    steps: [`K ∈ {7, 8} · L ∈ {10, 11, 12} · M ∈ {17, 18, 19, 20}`, `${R('K · L · M')} doğal sayı olmalı: 8 · 10 · 20 = 1600 = 40² ✓`, `Sonuç: <b>40</b>`],
    answer: `Cevap: <b>A</b>`
  },
  {
    no: 28, konu: CB, sayfa: 15,
    q: `<p>Bir yüzünün alanı 300 cm<sup>2</sup> olan sarı renkli bir kâğıdın ön yüzüne, dört eş dikdörtgen aşağıdaki gibi çizilerek mavi renge boyanmıştır.</p><div class="fig">${firildak28}</div>`
      + `<p class="ask">Kâğıdın ön yüzündeki boyanmayan dikdörtgenlerden birinin alanı 60 cm<sup>2</sup> olduğuna göre, mavi dikdörtgenlerden birinin kısa kenar uzunluğu kaç santimetredir?</p>`,
    opts: [R(3), R(3, 2), R(3, 3), R(3, 4)], ans: 0,
    hints: [`Boyanmayan dört dikdörtgen 240 cm² → mavilerin toplamı 60, biri 15.`, `Mavi dikdörtgen L × w ise boyanmayan dikdörtgen (L − w) × L.`],
    steps: [
      `Mavi: 4 tane, toplam 300 − 4 · 60 = 60 → biri 15 cm² → L · w = 15`,
      `Boyanmayan: L · (L − w) = 60 → L² − 15 = 60 → L² = 75 → L = 5${R(3)}`,
      `w = 15 / 5${R(3)} = ${F(3, R(3))} = <b>${R(3)}</b> cm`
    ],
    answer: `Cevap: <b>A</b>`
  },
  {
    no: 29, konu: CB, sayfa: 15,
    q: `<p>Uzun kenar uzunluğu ${R(3, 24)} cm olan dikdörtgen şeklindeki 20 adet özdeş levhanın tamamı, kenarları çakışacak ve aralarında boşluk kalmayacak biçimde yerleştirilerek aşağıdaki gibi bir dikdörtgen elde edilmiştir.</p><div class="fig">${cerceve29}</div>`
      + `<p class="ask">Buna göre, elde edilen bu dikdörtgenin çevresinin uzunluğu kaç santimetredir?</p>`,
    opts: [R(3, 144), R(3, 156), R(3, 168), R(3, 180)], ans: 1,
    hints: [`Üstte ve altta ikişer levha yatay → genişlik 48${R(3)}. Kalan 16 levha bu genişliği dikey olarak dolduruyor.`],
    steps: [
      `Genişlik: 2 · 24${R(3)} = 48${R(3)}. 20 − 4 = 16 levha dikey olarak yan yana → kısa kenar 48${R(3)} / 16 = 3${R(3)}`,
      `Yükseklik: 24${R(3)} + 2 · 3${R(3)} = 30${R(3)}`,
      `Çevre: 2(48${R(3)} + 30${R(3)}) = <b>${R(3, 156)}</b> cm`
    ],
    answer: `Cevap: <b>B</b>`
  },
  {
    no: 30, konu: TC, sayfa: 16,
    q: `<p>Alanı ${R(5, 224)} cm<sup>2</sup> olan dikdörtgen şeklindeki bir panoya her birinin kısa kenar uzunluğu 2 cm olan dikdörtgen şeklindeki resimler, birer kısa kenarları doğrusal olacak ve uzun kenarları çakışacak biçimde Şekil I'deki gibi yerleştirilmiştir. Bu resimlerden renkleri aynı olanlar birbiriyle özdeştir.</p><div class="fig">${pano30}</div>`
      + `<p>Şekil I'de kırmızı resimler sabit kalmak üzere, beyaz ile mavi resimlerin birer kısa kenarları ve kırmızı ile sarı resimlerin birer kısa kenarları doğrusal olacak biçimde kaydırılarak Şekil II'deki görüntü oluşturulmuştur. (Şekil II'de beyaz resim panonun üst kenarına değmekte, sarı resimler panonun alt kenarına değmektedir.)</p>`
      + `<p class="ask">Buna göre, sarı resimlerden birinin uzun kenar uzunluğu kaç santimetredir?</p>`,
    opts: [R(5, 6), R(5, 7), R(5, 8), R(5, 9)], ans: 2,
    hints: [`Pano 7 resim genişliğinde: 14 cm. Yüksekliği 224${R(5)} / 14 = 16${R(5)}.`],
    steps: [
      `Panonun yüksekliği 16${R(5)}. Şekil II: beyaz ve mavinin alt kenarları panonun altından 6${R(5)} yukarıda`,
      `Beyaz (üste değiyor): 16${R(5)} − 6${R(5)} = 10${R(5)}. Mavi: 16${R(5)} − 5${R(5)} − 6${R(5)} = 5${R(5)}`,
      `Şekil I: beyazın üstü panonun üstünden ${R(5)} aşağıda → resimlerin alt çizgisi 16${R(5)} − ${R(5)} − 10${R(5)} = 5${R(5)} yukarıda`,
      `Mavi kırmızıdan 2${R(5)} uzun → kırmızı 3${R(5)}. Şekil II: sarı, kırmızının üst hizasından panonun altına → 5${R(5)} + 3${R(5)} = <b>${R(5, 8)}</b>`
    ],
    answer: `Cevap: <b>C</b>`
  },
  {
    no: 31, konu: CB, sayfa: 16,
    q: `<p>Aşağıda ön yüzlerinde birer sayı yazılı olan mavi, kırmızı ve sarı kartlar verilmiştir.</p>`
      + `<p class="cards-label">Mavi: ${R(20)} · Kırmızı: ${R(27)}</p>${kartlar(['2', R(6), R(5), R(2), R(3), R(2, 5)])}<p class="cards-label">Sarı kartlar</p>`
      + `<p>Sarı kartlardan iki tanesi seçilip, birindeki sayı mavi karttaki sayı ile diğerindeki sayı kırmızı karttaki sayı ile çarpılıyor. Daha sonra kalan dört sarı karttan ikisinde yazan sayılar çarpılıyor. Bu üç çarpımdan elde edilen sonuçlar x, 9 ve 10'dur.</p>`
      + `<p class="ask">x sayısı 8 ile 9 arasında olduğuna göre, aşağıdakilerden hangisi x'i elde etmek için kullanılan kartlardan biridir?</p>`,
    opts: [R(6), R(2), R(3), '2'], ans: 3,
    hints: [`9 hangi çarpımdan gelebilir? Önce onu bul.`],
    steps: [
      `9: ${R(3)} · ${R(27)} = ${R(81)} = 9 (sarı kartların kendi aralarındaki çarpımlarından 9 çıkmaz)`,
      `10: ya ${R(5)} · ${R(20)} ya da ${R(2)} · 5${R(2)}`,
      `${R(5)} maviyle eşleşirse kalan 2, ${R(6)}, ${R(2)}, 5${R(2)} kartlarının hiçbir ikilisi 8 ile 9 arasında değil`,
      `O hâlde ${R(2)} · 5${R(2)} = 10 ve x = mavi · sarı: 2 · ${R(20)} = 4${R(5)} = ${R(80)} ≈ 8,94 ✓`,
      `x'i veren kart: <b>2</b>`
    ],
    answer: `Cevap: <b>D</b>`
  },
  {
    no: 32, konu: CB, sayfa: 17,
    q: `<p>Bir okulun öğrencileri futbol takımı için logo tasarlayacaklardır. Bu tasarım için kısa kenar uzunluğu ${R(6, 3)} cm olan dikdörtgen şeklindeki kâğıtta aşağıdaki gibi iki eş eşkenar üçgen çizilerek maviye boyanmıştır. Üst üçgenin tabanı sol kenardan, alt üçgenin tabanı sağ kenardan ${R(3)} cm uzaktadır. Daha sonra bu kâğıt köşegeni boyunca kesilerek iki parça elde edilmiştir.</p><div class="fig">${logo32}</div>`
      + `<p>Bu parçalardaki eşkenar üçgenler tabanları çakışacak biçimde birleştirildiğinde, parçaların birer köşesi bulundukları kenarların orta noktası ile çakışmıştır.</p>`
      + `<p class="ask">Logodaki mavi boyalı kısmın çevresinin uzunluğu ${R(192)} cm olduğuna göre, logonun bir yüzünün alanı kaç santimetrekaredir?</p>`,
    opts: [R(2, 36), R(6, 24), R(2, 72), R(6, 48)], ans: 2,
    hints: [`Mavi eşkenar dörtgenin çevresi 4 kenar: kenar ${R(192)} / 4.`, `Logo, iki parçadan oluşuyor ve parçalar üst üste gelmiyor: alanı dikdörtgenin alanına eşit.`],
    steps: [
      `Mavi bölgenin çevresi ${R(192)} = 8${R(3)} → üçgen kenarı 2${R(3)}`,
      `Birleşmede iki parçanın dik köşeleri arasındaki uzaklık: ${R(3)} + 2${R(3)} + ${R(3)} = 4${R(3)}`,
      `Bir köşe diğer parçanın uzun kenarının orta noktasında → uzun kenarın yarısı 4${R(3)} → uzun kenar 8${R(3)}`,
      `Logo alanı = dikdörtgen alanı: 8${R(3)} · 3${R(6)} = 24${R(18)} = <b>${R(2, 72)}</b> cm²`
    ],
    answer: `Cevap: <b>C</b>`
  },
  {
    no: 33, konu: GS, sayfa: 17,
    q: `<p>Bir ayrıtının uzunluğu ${R(18)} cm olan eş küplerden her birinin bir yüzüne aşağıdaki gibi sayılar yazılmıştır.</p>`
      + kartlar([R('5,<span style="text-decoration:overline">4</span>'), R(5), R(9), F(2, 3), R('1,21'), 'π', R('0,04'), R('1,6'), R(324), F(R(180), R(5))])
      + `<p>Can, üzerinde rasyonel sayı yazan küplerin tamamını, Zeynep ise üzerinde irrasyonel sayı yazan küplerin tamamını üst üste dizerek birer kule oluşturmuşlardır.</p>`
      + `<p class="ask">Buna göre, oluşturulan kulelerin yükseklikleri arasındaki farkın santimetre cinsinden değeri hangi ardışık iki doğal sayı arasındadır?</p>`,
    opts: ['15 ile 16', '16 ile 17', '17 ile 18', '18 ile 19'], ans: 1,
    hints: [`5,4̅ devirli: 5,4̅ = 49/9.`],
    steps: [
      `Rasyonel: ${R('5,4̅')} = ${R('49/9')} = 7/3 · ${R(9)} = 3 · 2/3 · ${R('1,21')} = 1,1 · ${R('0,04')} = 0,2 · ${R(324)} = 18 · ${R(180)}/${R(5)} = 6 → <b>7 küp</b>`,
      `İrrasyonel: ${R(5)}, π, ${R('1,6')} → <b>3 küp</b>`,
      `Fark: 4 küp · ${R(18)} = 4 · 3${R(2)} = 12${R(2)} = ${R(288)}`,
      `16² = 256 < 288 < 289 = 17² → <b>16 ile 17</b>`
    ],
    answer: `Cevap: <b>B</b>`,
    trap: `${R('5,4̅')}'ü irrasyonel sanmak. 5,4̅ = 49/9 bir tam kare kesirdir.`
  },
  {
    no: 34, konu: YK, sayfa: 18,
    q: `<p>Aşağıdaki şekilde birbirine paralel olan A ile B yolları ve bu yollar arasında kalan araziler verilmiştir. Bu arazilerden kare biçiminde olan üç arazinin alanları şekilde gösterilmiştir.</p><div class="fig">${yollar34}</div>`
      + `<p>A ve B yolları arasındaki bağlantıyı sağlayacak bir yol yapılması planlanmaktadır.</p><p class="ask">Yapılabilecek <u>en kısa</u> yolun hektometre cinsinden uzunluğuna en yakın doğal sayı aşağıdakilerden hangisidir?</p>`,
    opts: ['15', '16', '17', '18'], ans: 1,
    hints: [`En kısa yol, iki yola dik olan yoldur: üç şeridin genişlikleri toplamı.`],
    steps: [
      `Şerit genişlikleri karelerin kenarlarıdır: ${R(12)} = 2${R(3)}, ${R(48)} = 4${R(3)}, ${R(27)} = 3${R(3)}`,
      `En kısa yol: 2${R(3)} + 4${R(3)} + 3${R(3)} = 9${R(3)} = ${R(243)}`,
      `15,5² = 240,25 < 243 < 256 = 16² → en yakın doğal sayı <b>16</b>`
    ],
    answer: `Cevap: <b>B</b>`
  },
  {
    no: 35, konu: TC, sayfa: 18,
    q: `<p>Doğrusal bir koşu parkuru üzerinde bulunan üç koşucudan A noktasındakinin başlangıç çizgisine uzaklığı ${R(128)} m, B noktasındakinin bitiş çizgisine uzaklığı ${R(2, 4)} m'dir. C noktasında bulunan koşucu, A ile B noktaları arasında olup B noktasına daha yakındır.</p><div class="fig">${pist35}</div>`
      + `<p class="ask">Parkurun uzunluğu ${R(512)} metre olduğuna göre, C noktasının bitiş çizgisine uzaklığı metre cinsinden aşağıdakilerden hangisi olabilir?</p>`,
    opts: [R(108), R(72), R(48), R(32)], ans: 2,
    hints: [`Her şeyi ${R(2)} cinsinden yaz: ${R(512)} = 16${R(2)}, ${R(128)} = 8${R(2)}.`],
    steps: [
      `A, bitişe 16${R(2)} − 8${R(2)} = 8${R(2)} uzakta. B, bitişe 4${R(2)} uzakta. AB'nin orta noktası bitişe 6${R(2)} uzakta`,
      `C, B'ye daha yakın → 4${R(2)} < C < 6${R(2)} → ${R(32)} < C < ${R(72)}`,
      `Seçeneklerde yalnızca <b>${R(48)}</b> bu aralıkta`
    ],
    answer: `Cevap: <b>C</b>`
  },
  {
    no: 36, konu: TC, sayfa: 19,
    q: `<p>Bir sepette her birinin kütlesi ${R(2)} g olan mavi bilyeler ve her birinin kütlesi ${R(2, 3)} g olan kırmızı bilyeler bulunmaktadır.</p>`
      + `<p>Bu bilyelerden belirli sayıda alınarak bir terazide tartıldığında toplam kütlenin 19 g ile 20 g arasında ve 20 grama daha yakın olduğu görülmüştür.</p><p class="ask">Buna göre, teraziye konulan mavi bilye sayısı aşağıdakilerden hangisi <u>olamaz</u>?</p>`,
    opts: ['8', '6', '5', '2'], ans: 1,
    hints: [`Toplam kütle (m + 3k)${R(2)}. 19,5 ile 20 arasındaki n${R(2)} değerini bul.`],
    steps: [
      `n${R(2)} ∈ (19,5; 20) → n² · 2 ∈ (380,25; 400) → n = 14 (14${R(2)} ≈ 19,80)`,
      `m + 3k = 14 → m = 14 − 3k: 14, 11, 8, 5, 2`,
      `<b>6</b> bu listede yok`
    ],
    answer: `Cevap: <b>B</b>`
  },
  {
    no: 37, konu: CB, sayfa: 19,
    q: `<p>Aynı gün toprağa dikilen A ve B fidelerinin dikildikleri gündeki boyları sırasıyla ${R(2)} cm ve ${R(3)} cm'dir.</p>`
      + `<p>A fidesinin boyu her yıl bir önceki yıldaki boyunun ${R(2)} katına, B fidesinin boyu ise her yıl bir önceki yıldaki boyunun ${R(3)} katına çıkmaktadır.</p>`
      + `<p class="ask">Buna göre, A fidesinin boyunun ${R(2, 4)} cm olduğu yıl, B fidesinin boyu kaç santimetredir?</p>`,
    opts: [R(3, 4), R(3, 6), R(3, 9), R(3, 27)], ans: 2,
    hints: [`A: ${R(2)} → 2 → 2${R(2)} → 4 → 4${R(2)}. Kaç yıl geçti?`],
    steps: [`A: ${R(2)}, 2, 2${R(2)}, 4, <b>4${R(2)}</b> → 4 yıl`, `B: ${R(3)}, 3, 3${R(3)}, 9, <b>9${R(3)}</b>`],
    answer: `Cevap: <b>C</b>`
  },
  {
    no: 38, konu: TC, sayfa: 20,
    q: `<p>Adem amcanın 72 dekametrekare ve 98 dekametrekare büyüklüğünde kare şeklinde iki bahçesi vardır. Birer köşeleri ortak olan bu bahçeler ve bu bahçelerin köşelerinde bulunan kare biçimindeki iki sulama havuzu aşağıdaki şekilde modellenmiştir. Bu havuzların ikişer kenarları bahçelerin ikişer kenarlarıyla çakışık ve her birinin yüzey alanı 8 dekametrekaredir.</p><div class="fig">${bahce38}</div>`
      + `<p>Küçük bahçede havuz, A köşesinin karşısındaki köşededir. Büyük bahçede havuz, ortak köşeye komşu bir köşededir.</p>`
      + `<p>A köşesinde bulunan bir su kaynağından bu havuzlara su aktarmak amacıyla bahçeleri sınırlayan çizgiler boyunca su kanalı açılacaktır.</p><p class="ask">Bu kanalın toplam uzunluğu <u>en az</u> kaç dekametredir?</p>`,
    opts: [R(2, 21), R(2, 19), R(2, 15), R(2, 11)], ans: 2,
    hints: [`Kenarlar: ${R(72)} = 6${R(2)}, ${R(98)} = 7${R(2)}, havuz ${R(8)} = 2${R(2)}.`, `Kanal ortak köşeye kadar ortak kullanılabilir.`],
    steps: [
      `A'dan ortak köşeye: 6${R(2)}`,
      `Ortak köşeden küçük bahçenin havuzuna (kenar boyunca): 6${R(2)} − 2${R(2)} = 4${R(2)}`,
      `Ortak köşeden büyük bahçenin havuzuna: 7${R(2)} − 2${R(2)} = 5${R(2)}`,
      `Toplam: 6${R(2)} + 4${R(2)} + 5${R(2)} = <b>${R(2, 15)}</b> dam`
    ],
    answer: `Cevap: <b>C</b>`
  },
  {
    no: 39, konu: TC, sayfa: 20,
    q: `<p>Aşağıda A, B, C çubukları ile A çubuğunun uzunluğu verilmiştir.</p><div class="fig">${cubuk39}</div>`
      + `<p>B çubuğunun uzunluğu C çubuğunun uzunluğunun ${R(2)} katı, A çubuğunun uzunluğu ise B çubuğunun uzunluğunun ${R(2)} katıdır. Mete, bu çubuklardan 12 tanesini uç uca ekleyerek (12 + ${R(2, 48)}) cm uzunluğunda bir çubuk elde etmiştir.</p>`
      + `<p class="ask">Buna göre, Mete C çubuğundan kaç tane kullanmıştır?</p>`,
    opts: ['2', '4', '6', '8'], ans: 1,
    hints: [`B = A / ${R(2)} = 6, C = B / ${R(2)} = 3${R(2)}.`],
    steps: [`A = 6${R(2)}, B = 6, C = 3${R(2)}`, `Rasyonel kısım 12 → 2 tane B. Kalan 10 çubuk A ve C`, `6a + 3c = 48 ve a + c = 10 → 2a + c = 16 → a = 6, c = <b>4</b>`],
    answer: `Cevap: <b>B</b>`
  },
  {
    no: 40, konu: CB, sayfa: 21,
    q: `<p>Şekil 1'de kenar uzunlukları verilen dikdörtgen şeklindeki dört bahçeden A ve B bahçeleri Eren'e, C ve D bahçeleri Ali'ye aittir. Bütün bahçenin boyutları ${R(98)} hm ve ${R(50)} hm; C bahçesinin eni ${R(2)} hm, D bahçesinin boyu ${R(8)} hm'dir.</p><div class="fig">${bahce40}</div>`
      + `<p>Ali ve Eren ikişer parça şeklinde bulunan bahçelerini, kendilerine ait bahçelerin toplam alanları değişmeyecek biçimde Şekil 2'deki gibi birleştirdiklerinde dikdörtgen şeklinde birer bahçeleri oluşmuştur.</p>`
      + `<p class="ask">Buna göre, birleştirme işleminden sonra Eren'in bahçesinin çevresinin uzunluğu kaç hektometredir?</p>`,
    opts: [R(2, 12), R(2, 14), R(2, 18), R(2, 24)], ans: 2,
    hints: [`${R(98)} = 7${R(2)}, ${R(50)} = 5${R(2)}, ${R(8)} = 2${R(2)}.`],
    steps: [
      `A: (7${R(2)} − ${R(2)}) × (5${R(2)} − 2${R(2)}) = 6${R(2)} · 3${R(2)} = 36. B: ${R(2)} · 2${R(2)} = 4. Eren: 40 hm²`,
      `Şekil 2'de boy 5${R(2)} → Eren'in bahçesinin eni 40 / 5${R(2)} = 4${R(2)}`,
      `Çevre: 2(5${R(2)} + 4${R(2)}) = <b>${R(2, 18)}</b> hm`
    ],
    answer: `Cevap: <b>C</b>`
  },
  {
    no: 41, konu: YK, sayfa: 21,
    q: `<p>Bir uçlu kalem, 10 cm uzunluğundaki ucunun 3 cm'lik kısmı dışarıda iken şekildeki gibi olmaktadır.</p><div class="fig">${kalem41}</div>`
      + `<p>Bu uçlu kalemin arkasına her basıldığında ucun ${R(2)} cm'lik kısmı dışarı çıkmaktadır. Bu kalem şekildeki konumda iken kalemin arkasına 3 defa basılıyor.</p>`
      + `<p class="ask">Buna göre, son durumda ucun, kalemin içinde kalan kısmının santimetre cinsinden uzunluğu hangi ardışık iki doğal sayı arasındadır?</p>`,
    opts: ['1 ile 2', '2 ile 3', '3 ile 4', '4 ile 5'], ans: 1,
    hints: [`İçeride 7 cm var; her basışta ${R(2)} cm çıkıyor.`],
    steps: [`İçeride: 10 − 3 = 7 cm. 3 basış: 3${R(2)} = ${R(18)} ≈ 4,24 cm çıkar`, `İçeride kalan: 7 − 4,24 ≈ 2,76 → <b>2 ile 3</b>`],
    answer: `Cevap: <b>B</b>`
  },
  {
    no: 42, konu: YK, sayfa: 22,
    q: `<p>Bir yüzünün alanı ${R(2, 36)} cm<sup>2</sup> olan dikdörtgen biçimindeki bir kâğıt Şekil 1'de verilmiştir. Ön yüzü turuncu, arka yüzü mavi renkli olan bu kâğıt, kısa kenarları uzun kenarları ile çakışacak biçimde köşelerinden Şekil 2'deki gibi katlanmıştır.</p><div class="fig">${katlama42}</div>`
      + `<p class="ask">Şekil 2'de gösterilen mavi bölgelerin alanları toplamı 18 cm<sup>2</sup> olduğuna göre, AB kenarının santimetre cinsinden uzunluğu hangi ardışık iki doğal sayı arasındadır?</p>`,
    opts: ['2 ile 3', '3 ile 4', '4 ile 5', '5 ile 6'], ans: 1,
    hints: [`Her mavi bölge, dik kenarları kısa kenar (k) olan ikizkenar dik üçgendir.`],
    steps: [
      `İki mavi üçgen: 2 · ${F('k²', 2)} = k² = 18 → k = 3${R(2)}`,
      `Uzun kenar: ${R(2, 36)} / 3${R(2)} = 12`,
      `AB = 12 − 2k = 12 − 6${R(2)} ≈ 12 − 8,49 = 3,51 → <b>3 ile 4</b>`
    ],
    answer: `Cevap: <b>B</b>`
  }
  );
})();
