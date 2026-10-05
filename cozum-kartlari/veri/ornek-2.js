// MEB örnek soruları 21–40
(function () {
  const T2 = 'Temel kurallar';

  const katlanmisKagit = svg(560, 200, `
    <rect x="20" y="40" width="200" height="130" fill="var(--card)" stroke="var(--fig-stroke)"/>
    <text x="120" y="110" text-anchor="middle" font-size="15">Beyaz</text>
    <line x1="20" y1="185" x2="220" y2="185" stroke="var(--accent)"/><text x="120" y="200" text-anchor="middle" font-size="14">3⁷ mm</text>
    <text x="250" y="110" font-size="26">⟶</text>
    <rect x="340" y="40" width="200" height="26" fill="#bfe0f2" stroke="var(--fig-stroke)"/><text x="440" y="58" text-anchor="middle" font-size="13" style="fill:#1f2328">Mavi</text>
    <rect x="340" y="66" width="200" height="52" fill="var(--card)" stroke="var(--fig-stroke)"/><text x="440" y="97" text-anchor="middle" font-size="13">Beyaz</text>
    <rect x="340" y="118" width="200" height="26" fill="#bfe0f2" stroke="var(--fig-stroke)"/><text x="440" y="136" text-anchor="middle" font-size="13" style="fill:#1f2328">Mavi</text>
    <text x="332" y="58" text-anchor="end" font-size="13">2⁷ mm</text><text x="332" y="136" text-anchor="end" font-size="13">2⁷ mm</text>
    <text x="270" y="30" font-size="13">üst ve alttan katlanıyor</text>`, 'Kâğıt üst ve alt kenarlarından katlanıyor');

  const harita = svg(460, 210, (() => {
    let g = `<rect x="5" y="5" width="450" height="200" fill="#d6ecd2" stroke="var(--fig-stroke)"/>`;
    const ax = 60, ay = 40, bx = 420, by = 150;
    for (let i = 0; i < 8; i++) {
      const x1 = ax + (bx - ax) * i / 8, y1 = ay + (by - ay) * i / 8, x2 = ax + (bx - ax) * (i + 1) / 8 - 3, y2 = ay + (by - ay) * (i + 1) / 8 - 1;
      g += `<line x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}" stroke="#d4b62c" stroke-width="9" stroke-linecap="butt"/>`;
    }
    g += `<circle cx="${ax}" cy="${ay}" r="5" fill="#1f2328"/><text x="${ax - 10}" y="${ay - 6}" font-size="16" style="fill:#1f2328">A</text>`;
    g += `<circle cx="${bx}" cy="${by}" r="5" fill="#1f2328"/><text x="${bx}" y="${by + 22}" font-size="16" style="fill:#1f2328">B</text>`;
    g += `<circle cx="230" cy="185" r="5" fill="#1f2328"/><text x="210" y="190" font-size="16" style="fill:#1f2328">C</text>`;
    return g;
  })(), 'Haritada A ile B arasında 8 özdeş çubuk, ayrıca C noktası');

  const tablo10 = (() => {
    const mark = { '2,5': 'g:Y', '4,3': 'g:Y', '8,1': 'g:Y', '3,10': 'b:M', '9,2': 'b:M', '5,5': '5<sup>5</sup>', '7,8': '7<sup>−8</sup>' };
    const rows = [['x:', ...Array.from({ length: 10 }, (_, j) => `x:<small>${j + 1}</small>`)]];
    for (let i = 1; i <= 10; i++) rows.push([`x:<small>${i}. satır${i === 3 ? ' (+)' : i === 8 ? ' (−)' : ''}</small>`, ...Array.from({ length: 10 }, (_, j) => mark[i + ',' + (j + 1)] || '')]);
    return izgara(rows).replace('class="grid"', 'class="grid small"');
  })();

  const desen = svg(560, 150, (() => {
    const u = 27; let g = '';
    const one = x => `<rect x="${x}" y="20" width="${u}" height="110" fill="#bfe0f2" stroke="var(--fig-stroke)"/>`
      + `<rect x="${x + u}" y="20" width="${u}" height="45" fill="#bfe0f2" stroke="var(--fig-stroke)"/>`
      + `<rect x="${x + u}" y="65" width="${u}" height="65" fill="var(--card)" stroke="var(--fig-stroke)"/>`
      + `<rect x="${x + 2 * u}" y="20" width="${u}" height="110" fill="#bfe0f2" stroke="var(--fig-stroke)"/>`;
    g += one(20) + one(20 + 3 * u) + `<text x="${20 + 7 * u}" y="80" font-size="22">· · ·</text>` + one(20 + 9.5 * u);
    g += `<line x1="20" y1="132" x2="${20 + 12.5 * u}" y2="132" stroke="var(--fig-stroke)" stroke-width="2.5"/>`;
    g += `<text x="14" y="148" font-size="14">A</text><text x="${20 + 12.5 * u}" y="148" font-size="14">B</text>`;
    g += `<text x="${380}" y="40" font-size="13">her şerit 3³ mm</text>`;
    return g;
  })(), 'Üç dikdörtgenden oluşan desen AB boyunca tekrarlanıyor');

  const karoDesen = svg(400, 330, (() => {
    const counts = [1, 1, 2, 3, 4, 5, 6, 7, 8, 7, 6, 5, 4, 3, 2, 1];
    const w = 40, h = 20, cx = 200; let g = '';
    counts.forEach((n, r) => {
      const x0 = cx - n * w / 2;
      for (let k = 0; k < n; k++) g += `<rect x="${x0 + k * w}" y="${5 + r * h}" width="${w}" height="${h}" fill="#b5352f" stroke="#7a7a7a"/>`;
    });
    return g;
  })(), 'Karo taşlarından baklava biçimli desen');

  ORNEK.push(
  {
    no: 21, konu: T2, sayfa: 10,
    q: `<p>Bir mahallede yer üstündeki kablolar yer altında yeniden döşenecektir. Aşağıda türlerine göre; bu iş için kullanılacak kablo miktarları ve bu kabloların taşınmasında kullanılacak tahta makaraların her birine sarılabilecek kablo miktarları verilmiştir.</p>`
      + tablo([['Kablo Çeşidi', 'Kullanılacak Kablo (cm)', 'Bir Makaraya Sarılabilecek (cm)'], ['Enerji', '16<sup>5</sup>', '8<sup>6</sup>'], ['Telefon', '27<sup>4</sup>', '9<sup>6</sup>'], ['İnternet', '125<sup>3</sup>', '25<sup>4</sup>'], ['Televizyon', '49<sup>4</sup>', '7<sup>6</sup>']])
      + `<p class="ask">Buna göre kullanılacak kabloların hangisinin taşınması sırasında <u>daha az</u> makara kullanılacaktır?</p>`,
    opts: ['Enerji', 'Telefon', 'İnternet', 'Televizyon'], ans: 1,
    hints: [`Makara sayısı = kablo uzunluğu ÷ bir makaradaki kablo. Her satırı tek tabana çevir.`],
    steps: [
      `Enerji: 16<sup>5</sup> / 8<sup>6</sup> = 2<sup>20</sup> / 2<sup>18</sup> = <b>4</b>`,
      `Telefon: 27<sup>4</sup> / 9<sup>6</sup> = 3<sup>12</sup> / 3<sup>12</sup> = <b>1</b>`,
      `İnternet: 125<sup>3</sup> / 25<sup>4</sup> = 5<sup>9</sup> / 5<sup>8</sup> = <b>5</b> · Televizyon: 49<sup>4</sup> / 7<sup>6</sup> = 7<sup>8</sup> / 7<sup>6</sup> = <b>49</b>`
    ],
    answer: `En az makara telefon kablosu için (1 makara). Cevap: <b>B</b>`,
    trap: `Üsleri karşılaştırıp “en küçük üs” aramak. Önce aynı tabana çevirmeden karşılaştırma yapılamaz.`
  },
  {
    no: 22, konu: T2, sayfa: 10,
    q: `<p>Doğrusal bir yol üzerinde modellenen özdeş aydınlatma direklerinin her birinde ikişer adet lamba bulunmaktadır. Ardışık direkler arasındaki mesafeler birbirine eşit ve bir direğin uzunluğunun 3 katıdır.</p>`
      + `<p>Aydınlatma direklerinden birinin uzunluğu 12 metre olup baştaki ve sondaki direk arasındaki mesafe 12<sup>4</sup> metredir.</p>`
      + `<p class="ask">Buna göre, direkler üzerinde bulunan toplam lamba sayısı kaçtır?</p>`,
    opts: ['576', '578', '1152', '1154'], ans: 3,
    hints: [`İki direk arası 3 · 12 = 36 m. Kaç aralık var?`, `Direk sayısı = aralık sayısı + 1`],
    steps: [
      `Aralık: 3 · 12 = 36 m. 12<sup>4</sup> = 20 736 m → 20 736 / 36 = <b>576 aralık</b>`,
      `Direk sayısı: 576 + 1 = <b>577</b> · Lamba: 577 · 2 = <b>1154</b>`
    ],
    answer: `Toplam <b>1154</b> lamba. Cevap: <b>D</b>`,
    trap: `Direk sayısını aralık sayısına eşit almak (576 · 2 = 1152 → C). Baştaki direği unutma!`
  },
  {
    no: 23, konu: T2, sayfa: 11,
    q: `<p>Ön yüzü beyaz, arka yüzü mavi olan dikdörtgen şeklindeki kâğıdın uzun kenarının uzunluğu 3<sup>7</sup> mm'dir. Bu kâğıt, uzun kenarlarına paralel olacak biçimde üst ve alt kısımdan aşağıdaki gibi 2<sup>7</sup> mm'lik şeritler hâlinde katlanıyor.</p>`
      + `<div class="fig">${katlanmisKagit}</div>`
      + `<p>Katlandığında oluşan beyaz dikdörtgensel bölgenin alanı, görünen mavi dikdörtgensel bölgelerden birinin alanının 2 katıdır.</p>`
      + `<p class="ask">Buna göre, bu kâğıdın katlanmadan önce bir yüzünün alanı kaç milimetrekaredir?</p>`,
    opts: ['6<sup>8</sup>', '2 · 6<sup>8</sup>', '3 · 6<sup>7</sup>', '6<sup>7</sup>'], ans: 0,
    hints: [`Görünen beyaz şeridin yüksekliği, mavi şeridin 2 katı.`, `Katlanan kısımlar kâğıdın altına gizlenir; açınca kâğıt katlanmış hâlinden 2 · 2<sup>7</sup> daha uzundur.`],
    steps: [
      `Mavi şeritler 3<sup>7</sup> × 2<sup>7</sup>. Beyaz bölge 2 katı → yüksekliği <b>2<sup>8</sup></b>`,
      `Katlanmış yükseklik: 2<sup>7</sup> + 2<sup>8</sup> + 2<sup>7</sup> = <b>2<sup>9</sup></b>`,
      `Açık hâli: 2<sup>9</sup> + 2<sup>7</sup> + 2<sup>7</sup> = 2<sup>9</sup> + 2<sup>8</sup> = 3 · 2<sup>8</sup>`,
      `Alan: 3<sup>7</sup> · 3 · 2<sup>8</sup> = 3<sup>8</sup> · 2<sup>8</sup> = <b>6<sup>8</sup></b>`
    ],
    answer: `Kâğıdın bir yüzü <b>6<sup>8</sup> mm²</b>. Cevap: <b>A</b>`,
    trap: `Katlanmış hâlin yüksekliğini (2<sup>9</sup>) kâğıdın gerçek kenarı sanmak: 3<sup>7</sup> · 2<sup>9</sup> şıklarda yok, çünkü katlanan şeritler unutulmuş olur.`
  },
  {
    no: 24, konu: T2, sayfa: 12,
    q: `<p>Üzerlerinde 2'nin tam sayı kuvvetlerinin yazılı olduğu kartların her birinden yeterli sayıda verilmiştir.</p>`
      + kartlar(['2<sup>−3</sup>', '2<sup>−2</sup>', '2<sup>−1</sup>', '2<sup>1</sup>', '2<sup>2</sup>', '2<sup>3</sup>'])
      + `<p>Her bir adımda biri 2'nin pozitif, diğeri negatif tam sayı kuvveti olacak şekilde kartlar seçilerek, üzerlerinde yazan üslü ifadelerin değerleri toplanıyor. 1. Adımda üzerinde 2<sup>1</sup> yazan kartlardan bir adet, üzerinde 2<sup>−2</sup> yazan kartlardan dört adet seçilmiştir.</p>`
      + `<p>Bundan sonraki her adımda seçilecek kartlarda yazan üslü ifadelerin değerleri toplamı, bir önceki adımda seçilen kartlarda yazan üslü ifadelerin değerleri toplamının 2 katı olacaktır.</p>`
      + `<p class="ask">Adımlardan birinde kullanılan bir üslü ifade diğer adımlarda kullanılmayacağına göre, 2. ve 3. adımda seçilen toplam kart sayısı <u>en az</u> kaçtır?</p>`,
    opts: ['14', '18', '26', '38'], ans: 2,
    hints: [`1. adımın toplamı kaç? 2. ve 3. adımın toplamları ne olmalı?`, `Kalan kartlar: pozitifler 2<sup>2</sup>, 2<sup>3</sup>; negatifler 2<sup>−1</sup>, 2<sup>−3</sup>. Bunları iki adıma paylaştır.`],
    steps: [
      `1. adım: 2 + 4 · ${F(1, 4)} = <b>3</b> → 2. adım toplamı <b>6</b>, 3. adım toplamı <b>12</b>`,
      `2<sup>3</sup> = 8 > 6 olduğu için 2. adımda pozitif kart <b>2<sup>2</sup></b> olmalı; 3. adımda <b>2<sup>3</sup></b>.`,
      `Seçenek 1: 2. adım {2<sup>2</sup>, 2<sup>−1</sup>}: 4 + 4 · ${F(1, 2)} → 5 kart; 3. adım {2<sup>3</sup>, 2<sup>−3</sup>}: 8 + 32 · ${F(1, 8)} → 33 kart → 38`,
      `Seçenek 2: 2. adım {2<sup>2</sup>, 2<sup>−3</sup>}: 4 + 16 · ${F(1, 8)} → 17 kart; 3. adım {2<sup>3</sup>, 2<sup>−1</sup>}: 8 + 8 · ${F(1, 2)} → 9 kart → <b>26</b>`
    ],
    answer: `En az <b>26</b> kart. Cevap: <b>C</b>`,
    trap: `İlk denenen eşleşmede (38) durmak. “En az” sorusunda tüm eşleşmeleri karşılaştırmak gerekir.`
  },
  {
    no: 25, konu: T2, sayfa: 12,
    q: `<p>Bir dokuma fabrikasında A ve B makinelerinde 4 metrekarelik halılar dokunmaktadır. Aşağıda bu makinelerin halı dokuma süreleri verilmiştir.</p>`
      + tablo([['Makine', 'Halı (m²)', 'Süre (sn.)'], ['A', '1', '2<sup>10</sup>'], ['B', '1', '8<sup>5</sup>']])
      + `<p class="ask">Makineler aynı anda çalışmaya başladıktan sonra ilk kez bu makinelerden biri halı dokumayı bitirdiğinde diğer makinede kaç metrekare halı dokunmuştur?</p>`,
    opts: ['2<sup>1</sup>', '2<sup>0</sup>', '2<sup>−2</sup>', '2<sup>−3</sup>'], ans: 3,
    hints: [`8<sup>5</sup> = 2<sup>?</sup> Hangi makine daha hızlı?`],
    steps: [
      `A: 1 m² için 2<sup>10</sup> sn → 4 m² halı <b>2<sup>12</sup> sn</b>'de biter. B: 1 m² için 8<sup>5</sup> = <b>2<sup>15</sup> sn</b> (daha yavaş)`,
      `A bitirdiğinde (2<sup>12</sup> sn) B'nin dokuduğu: ${F('2<sup>12</sup>', '2<sup>15</sup>')} = <b>2<sup>−3</sup> m²</b>`
    ],
    answer: `B makinesinde <b>2<sup>−3</sup> m²</b> dokunmuştur. Cevap: <b>D</b>`,
    trap: `Halının 4 m² olduğunu unutmak: A 2<sup>10</sup> sn'de değil 2<sup>12</sup> sn'de bitirir (unutan 2<sup>−5</sup> bulur).`
  },
  {
    no: 26, konu: T2, sayfa: 13,
    q: `<p>Bir bilgisayar oyununda harita üzerinde iki nokta arasındaki uzaklık, özdeş çubukların sayısı ile bu çubukların uzunluğu çarpılarak hesaplanmaktadır. Aşağıdaki haritada A ile B arasındaki uzaklık bu şekilde hesaplanarak 2<sup>14</sup> km bulunmuştur.</p>`
      + `<div class="fig">${harita}</div>`
      + `<p>B ile C arasındaki uzaklık A ile B arasındaki uzaklığın yarısıdır.</p>`
      + `<p class="ask">B ile C arasındaki çubuk sayısı ve C ile A arasındaki çubuk sayısının toplamı 10 olduğuna göre, C ile A arasındaki uzaklık kaç kilometredir?</p>`,
    opts: ['3 · 2<sup>12</sup>', '6 · 2<sup>10</sup>', '2<sup>12</sup>', '2<sup>11</sup>'], ans: 0,
    hints: [`A ile B arasında kaç çubuk var? Bir çubuk kaç km?`],
    steps: [
      `A–B arasında <b>8 çubuk</b> → bir çubuk 2<sup>14</sup> / 2<sup>3</sup> = <b>2<sup>11</sup> km</b>`,
      `B–C = 2<sup>13</sup> km → 2<sup>13</sup> / 2<sup>11</sup> = <b>4 çubuk</b> → C–A: 10 − 4 = <b>6 çubuk</b>`,
      `C–A = 6 · 2<sup>11</sup> = 3 · 2 · 2<sup>11</sup> = <b>3 · 2<sup>12</sup> km</b>`
    ],
    answer: `C ile A arası <b>3 · 2<sup>12</sup> km</b>. Cevap: <b>A</b>`,
    trap: `6 · 2<sup>10</sup> (B) ile karıştırmak: çubuk uzunluğu 2<sup>11</sup>'dir, 2<sup>10</sup> değil.`
  },
  {
    no: 27, konu: T2, sayfa: 13,
    q: `<p>6<sup>10</sup> adet kâğıdın yarısı 18'li, diğer yarısı da 24'lü olacak biçimde gruplandırılıyor.</p>`
      + `<p>Her 18'li kâğıt grubu için 6 zımba teli, her 24'lü kâğıt grubu için 8 zımba teli kullanılarak bu kâğıtlar birbirine tutturuluyor.</p>`
      + `<p class="ask">1 kutudaki zımba teli sayısı 2<sup>10</sup> olduğuna göre, bu iş için kaç kutu zımba teli kullanılır?</p>`,
    opts: ['27<sup>3</sup>', '9<sup>4</sup>', '3<sup>5</sup>', '2<sup>5</sup>'], ans: 0,
    hints: [`18'li grupta kâğıt başına kaç tel düşer? 24'lü grupta?`],
    steps: [
      `18'li grupta 6 tel → her 3 kâğıda 1 tel. 24'lü grupta 8 tel → yine her 3 kâğıda 1 tel.`,
      `Toplam tel: 6<sup>10</sup> / 3 = 2<sup>10</sup> · 3<sup>10</sup> / 3 = <b>2<sup>10</sup> · 3<sup>9</sup></b>`,
      `Kutu: 2<sup>10</sup> · 3<sup>9</sup> / 2<sup>10</sup> = 3<sup>9</sup> = <b>27<sup>3</sup></b>`
    ],
    answer: `<b>27<sup>3</sup></b> kutu. Cevap: <b>A</b>`,
    trap: `3<sup>9</sup> şıklarda doğrudan yok; 27<sup>3</sup> = (3<sup>3</sup>)<sup>3</sup> = 3<sup>9</sup> olduğunu görmek gerekir. 9<sup>4</sup> = 3<sup>8</sup>'dir.`
  },
  {
    no: 28, konu: T2, sayfa: 14,
    q: `<p>Aşağıdaki tablo 10 satır ve 10 sütundan oluşmaktadır. Bu tabloda satır numarası taban, sütun numarası üs alınarak üslü ifadeler oluşturulacaktır. Tablonun üst yarısında (1–5. satırlar) üsler pozitif, alt yarısında (6–10. satırlar) ise üsler negatif alınacaktır. Tabloda bu şekilde oluşturulmuş ifadelerden bazıları verilmiştir.</p>`
      + tablo10
      + `<p>Tabloda yeşil renkli karelerdeki (Y) 3 üslü ifade birbiriyle, mavi renkli karelerdeki (M) 2 üslü ifade birbiriyle çarpılarak üslü ifadeler elde ediliyor.</p>`
      + `<p class="ask">Buna göre, aşağıdaki üslü ifadelerden hangisi elde edilen üslü ifadeler ile aynı sütunda <u>olamaz</u>?</p>`,
    opts: ['10<sup>−3</sup>', '6<sup>−8</sup>', '5<sup>4</sup>', '2<sup>6</sup>'], ans: 0,
    hints: [`Yeşil kareler: 2. satır 5. sütun, 4. satır 3. sütun, 8. satır 1. sütun. 8. satırda üs negatif!`],
    steps: [
      `Yeşiller: 2<sup>5</sup> · 4<sup>3</sup> · 8<sup>−1</sup> = 2<sup>5</sup> · 2<sup>6</sup> · 2<sup>−3</sup> = <b>2<sup>8</sup></b>`,
      `Maviler: 3<sup>10</sup> · 9<sup>−2</sup> = 3<sup>10</sup> · 3<sup>−4</sup> = <b>3<sup>6</sup></b>`,
      `Tabloda yerleri: 2<sup>8</sup> → 8. sütun; ayrıca 2<sup>8</sup> = 4<sup>4</sup> → 4. sütun. 3<sup>6</sup> → 6. sütun (9<sup>3</sup> olamaz, 9. satırda üs negatif).`,
      `Şıklar: 6<sup>−8</sup> (8. sütun) ✓, 5<sup>4</sup> (4. sütun) ✓, 2<sup>6</sup> (6. sütun) ✓, <b>10<sup>−3</sup> (3. sütun) ✗</b>`
    ],
    answer: `10<sup>−3</sup> bu sütunlarda olamaz. Cevap: <b>A</b>`,
    trap: `2<sup>8</sup>'in tabloda 4<sup>4</sup> olarak da yazılabildiğini kaçırmak: o zaman 5<sup>4</sup> de “olamaz” gibi görünür.`
  },
  {
    no: 29, konu: T2, sayfa: 14,
    q: `<p>Bir dokuma fabrikasında 5 üretim atölyesi ve her atölyede 25 dokuma makinesi bulunmaktadır. Bu fabrikada 512 metresi 453 g gelen iplikler kullanılmaktadır. Kütlesi 1812 kg olan ipliğin tamamı, her bir makinede eşit kütlede iplik olacak şekilde bu makinelere takılmıştır.</p>`
      + `<p class="ask">Buna göre bir dokuma makinesine takılan ipliğin uzunluğu kaç metredir?</p>`,
    opts: ['8<sup>4</sup>', '4<sup>7</sup>', '8<sup>5</sup>', '16<sup>4</sup>'], ans: 1,
    hints: [`1812 kg kaç gram? 1812 000, 453'ün kaç katı?`],
    steps: [
      `1812 kg = 1 812 000 g = 453 · <b>4000</b> → iplik 4000 · 512 m`,
      `Makine sayısı 5 · 25 = 125 → bir makine: ${F('4000 · 512', '125')} = 32 · 512 = 2<sup>5</sup> · 2<sup>9</sup> = <b>2<sup>14</sup></b>`,
      `2<sup>14</sup> = (2<sup>2</sup>)<sup>7</sup> = <b>4<sup>7</sup></b>`
    ],
    answer: `Bir makinede <b>4<sup>7</sup> m</b> iplik. Cevap: <b>B</b>`,
    trap: `kg–g dönüşümünü unutmak ya da makine sayısını 25 almak (5 atölye var).`
  },
  {
    no: 30, konu: T2, sayfa: 15,
    q: `<p>Bir markette şeftali suyu tanesi 2 TL, vişne suyu tanesi 3 TL'ye satılmaktadır. Şeftali suları her birinde 24 adet, vişne suları ise her birinde 18 adet bulunan koliler hâlinde satılmaktadır.</p>`
      + `<p>Koliler hâlinde satılan bu meyve sularından alan Eda Hanım'ın, hem şeftali hem de vişne suları için ödediği ücretler TL cinsinden 6'nın doğal sayı kuvveti şeklinde yazılabilmektedir.</p>`
      + `<p class="ask">Buna göre Eda Hanım bu meyve sularından <u>en az</u> kaç koli almıştır?</p>`,
    opts: ['29', '31', '34', '35'], ans: 1,
    hints: [`Bir koli şeftali 48 TL, bir koli vişne 54 TL. Bunları asal çarpanlarına ayır.`],
    steps: [
      `Şeftali kolisi 24 · 2 = 48 = 2<sup>4</sup> · 3 · Vişne kolisi 18 · 3 = 54 = 2 · 3<sup>3</sup>`,
      `48 · a = 6<sup>m</sup>: en küçük 6<sup>4</sup> = 1296 → a = 1296 / 48 = <b>27</b>`,
      `54 · b = 6<sup>n</sup>: en küçük 6<sup>3</sup> = 216 → b = 216 / 54 = <b>4</b> · Toplam 27 + 4 = <b>31</b>`
    ],
    answer: `En az <b>31</b> koli. Cevap: <b>B</b>`,
    trap: `6<sup>m</sup>'nin 48'e bölünebilmesi için 2<sup>4</sup> gerekir → m ≥ 4. 6<sup>2</sup> veya 6<sup>3</sup> 48'e bölünmez.`
  },
  {
    no: 31, konu: T2, sayfa: 15,
    q: `<p>Üç sepette üzerlerinde birer tam sayının yazılı olduğu dörder tane top bulunmaktadır.</p>`
      + `<p class="cards-label">1. sepet</p>` + kartlar(['−3', '−1', '1', '4'])
      + `<p class="cards-label">2. sepet</p>` + kartlar(['−1', '2', '3', '−4'])
      + `<p class="cards-label">3. sepet</p>` + kartlar(['−1', '−3', '−2', '−4'])
      + `<p>Yunus ve Gamze bu sepetlerin her birinden birer tane top alıyorlar. Her biri kendi toplarında yazan sayılardan en büyüğünü taban, en küçüğünü üs, diğerini de oluşan üslü ifadenin üssü olarak yazıp birbirine denk iki üslü ifade oluşturuyorlar.</p>`
      + `<p class="ask">Yunus'un toplarında yazan sayılar 4, −3, −1 olduğuna göre Gamze'nin toplarında yazan sayıların toplamı kaçtır?</p>`,
    opts: ['−8', '−7', '−3', '0'], ans: 2,
    hints: [`Yunus'un ifadesi (4<sup>−3</sup>)<sup>−1</sup>. Bu kaça eşit?`],
    steps: [
      `Yunus: (4<sup>−3</sup>)<sup>−1</sup> = 4<sup>3</sup> = <b>2<sup>6</sup></b> = 64`,
      `Gamze 4'ü alamaz (Yunus aldı). Taban 2 olmalı (2. sepetten); diğer iki sayının çarpımı 6 olmalı.`,
      `1. sepetten −3, 3. sepetten −2: (2<sup>−3</sup>)<sup>−2</sup> = 2<sup>6</sup> ✓ → toplam 2 + (−3) + (−2) = <b>−3</b>`
    ],
    answer: `Gamze'nin sayılarının toplamı <b>−3</b>. Cevap: <b>C</b>`,
    trap: `(a<sup>b</sup>)<sup>c</sup> = a<sup>b·c</sup>: −3 ve −2'nin çarpımı +6'dır. İşaretleri toplamak yanlış sonuç verir.`
  },
  {
    no: 32, konu: T2, sayfa: 16,
    q: `<p>Bir kereste fabrikasında, kalınlıkları farklı, genişlik ve boyları aynı olan A ve B tipi tahtalar üretilmektedir. A tipi tahtanın kalınlığı 5<sup>−1</sup> dm, B tipi tahtanın kalınlığı 2<sup>−2</sup> dm'dir.</p>`
      + `<p>A tipi tahtalar beşerli, B tipi tahtalar dörderli olarak kalınlığı önemsiz bir bant yardımı ile paketlenmektedir. B tipi tahta paketleri bir depoya yan yana iki sıra hâlinde tavana kadar aralarında boşluk kalmadan üst üste yerleştirildiğinde depodaki B tipi tahta sayısı 8<sup>3</sup> olmaktadır.</p>`
      + kaynak(16)
      + `<p class="ask">Buna göre bu depoya aynı şekilde yerleştirilebilecek A tipi tahta paketi sayısı <u>en fazla</u> kaçtır?</p>`,
    opts: ['2<sup>6</sup>', '2<sup>7</sup>', '2<sup>8</sup>', '2<sup>9</sup>'], ans: 1,
    hints: [`Bir A paketi ve bir B paketi kaç dm kalınlığında?`],
    steps: [
      `A paketi: 5 · 5<sup>−1</sup> = <b>1 dm</b> · B paketi: 4 · 2<sup>−2</sup> = <b>1 dm</b> → paketler aynı kalınlıkta!`,
      `B: 8<sup>3</sup> = 2<sup>9</sup> tahta = 2<sup>9</sup> / 4 = <b>2<sup>7</sup> paket</b>`,
      `A paketleri de aynı yere aynı sayıda sığar: <b>2<sup>7</sup></b>`
    ],
    answer: `En fazla <b>2<sup>7</sup></b> A paketi. Cevap: <b>B</b>`,
    trap: `Tahta sayısı ile paket sayısını karıştırmak. Soru A tipi <b>paket</b> sayısını soruyor.`
  },
  {
    no: 33, konu: T2, sayfa: 16,
    q: `<p>Birer adet turuncu, mor ve mavi kart ile bu kartların üzerinde yazan rakamlar gösterilmiştir.</p>`
      + `<div class="cards"><span style="background:#f6b25e">2 · 2 · 3</span><span style="background:#c58bbd">3 · 5</span><span style="background:#86c9e8">5 · 5</span></div>`
      + `<p class="note">Turuncu kartta 2, 2, 3; mor kartta 3, 5; mavi kartta 5, 5 rakamları yazılı.</p>`
      + `<p>Elif her birinden yeterli sayıda bulunan bu kartlardan seçerek üzerlerinde yazan tüm rakamları çarptığında elde ettiği sayı 30'un bir pozitif tam sayı kuvveti şeklinde yazılabilmektedir.</p>`
      + `<p class="ask">Buna göre Elif'in seçtiği kart sayısı <u>en az</u> kaçtır?</p>`,
    opts: ['4', '5', '6', '7'], ans: 1,
    hints: [`30<sup>n</sup> = 2<sup>n</sup> · 3<sup>n</sup> · 5<sup>n</sup>. 2, 3 ve 5'in sayıları eşit olmalı.`],
    steps: [
      `x turuncu, y mor, z mavi kart: 2'ler 2x, 3'ler x + y, 5'ler y + 2z. Hepsi n'ye eşit olmalı.`,
      `2x = n → x = n/2 · x + y = n → y = n/2 · y + 2z = n → z = n/4`,
      `En küçük n = 4: x = 2, y = 2, z = 1 → <b>5 kart</b> (çarpım 30<sup>4</sup>)`
    ],
    answer: `En az <b>5</b> kart. Cevap: <b>B</b>`,
    trap: `n = 1 veya 2 denemek: z = n/4 tam sayı olmalı, bu yüzden n en az 4.`
  },
  {
    no: 34, konu: T2, sayfa: 17,
    q: `<p>Kısa kenar uzunlukları 3<sup>3</sup> mm olan üç dikdörtgensel bölge kısa kenarları doğrusal, uzun kenarları çakışık olacak şekilde yerleştirilerek bir desen elde edilmiştir. Bu desen aralarında boşluk kalmayacak şekilde AB doğru parçası boyunca çizilerek bir duvar süsü oluşturulmuştur.</p>`
      + `<div class="fig">${desen}</div>`
      + `<p class="ask">AB doğru parçasının uzunluğu 15<sup>4</sup> mm olduğuna göre bu duvar süsü oluşturulurken başlangıçta verilen desenden kaç adet kullanılmıştır?</p>`,
    opts: ['625', '243', '125', '81'], ans: 0,
    hints: [`Bir desenin genişliği kaç mm?`],
    steps: [
      `Bir desen: 3 · 3<sup>3</sup> = <b>3<sup>4</sup> mm</b>`,
      `Desen sayısı: ${F('15<sup>4</sup>', '3<sup>4</sup>')} = (15 / 3)<sup>4</sup> = 5<sup>4</sup> = <b>625</b>`
    ],
    answer: `<b>625</b> desen kullanılmıştır. Cevap: <b>A</b>`,
    trap: `Desen yerine dikdörtgen sayısını bulmak (15<sup>4</sup> / 3<sup>3</sup> = 3 · 625) ya da 15<sup>4</sup> / 3<sup>4</sup>'ü 5 sanmak.`
  },
  {
    no: 35, konu: T2, sayfa: 17,
    q: `<p>A ve B komşu ülkelerinin şu andaki nüfusları eşittir. Bu ülkelerden A'nın nüfusu her 25 yılda bir, B'nin nüfusu ise her 40 yılda bir 2 katına çıkmaktadır.</p>`
      + `<p class="ask">Buna göre kaç yıl sonra A'nın nüfusu B'nin nüfusunun 64 katı olur?</p>`,
    opts: ['200', '400', '600', '800'], ans: 1,
    hints: [`t yıl sonra A 2<sup>t/25</sup>, B 2<sup>t/40</sup> katına çıkar. 64 = 2<sup>6</sup>`],
    steps: [
      `Oran: ${F('2<sup>t/25</sup>', '2<sup>t/40</sup>')} = 2<sup>t/25 − t/40</sup> = 2<sup>6</sup>`,
      `t/25 − t/40 = 6 → (8t − 5t)/200 = 6 → 3t = 1200 → <b>t = 400</b>`,
      `Kontrol: 400 yılda A 2<sup>16</sup>, B 2<sup>10</sup> katı → oran 2<sup>6</sup> = 64 ✓`
    ],
    answer: `<b>400</b> yıl sonra. Cevap: <b>B</b>`,
    trap: `64'ü katlanma sayısı sanmak. 64 = 2<sup>6</sup>, yani A'nın B'den 6 kez fazla katlanması gerekir.`
  },
  {
    no: 36, konu: T2, sayfa: 18,
    q: `<p>Bir taş döşeme ustası, birer yüzleri kırmızı olan dikdörtgenler prizması şeklindeki karo taşlarını, kenarları çakışacak şekilde döşeyerek aşağıdaki deseni oluşturmuştur.</p>`
      + `<div class="fig">${karoDesen}</div>`
      + `<p>Her bir karo taşının kırmızı yüzünün uzun kenar uzunluğu 2<sup>5</sup> cm, kısa kenar uzunluğu ise uzun kenar uzunluğunun yarısı kadardır.</p>`
      + `<p class="ask">Oluşturulan bu desenin çevresinin uzunluğu kaç santimetredir?</p>`,
    opts: ['256', '512', '768', '1024'], ans: 3,
    hints: [`Basamaklı şekillerde çevre: yatay basamakların toplamı en geniş genişliğe, dikey basamakların toplamı toplam yüksekliğe eşittir.`],
    steps: [
      `Karo: 2<sup>5</sup> = 32 cm × 16 cm. Desende <b>16 sıra</b> var → yükseklik 16 · 16 = <b>256 cm</b>`,
      `En geniş sırada <b>8 karo</b> → genişlik 8 · 32 = <b>256 cm</b>`,
      `Basamaklar ötelenince çevre, genişliği 256, yüksekliği 256 olan dikdörtgenin çevresine eşittir: 2 · (256 + 256) = <b>1024</b>`
    ],
    answer: `Çevre <b>1024 cm</b>. Cevap: <b>D</b>`,
    trap: `Tüm karoların çevrelerini toplamak ya da basamaklı kenarı eğik çizgi gibi düşünmek.`
  },
  {
    no: 37, konu: T2, sayfa: 18,
    q: `<p>Aşağıda üzerlerinde farklı birer üslü ifade yazılı olan beş kart verilmiştir.</p>`
      + kartlar([`(−${F(1, 4)})<sup>−3</sup>`, `(−${F(1, 8)})<sup>−4</sup>`, `(−${F(1, 16)})<sup>−6</sup>`, `(−${F(1, 32)})<sup>3</sup>`, `(−${F(1, 64)})<sup>2</sup>`])
      + `<p>Bu kartlardan dört tanesi Mete'ye, bir tanesi Bartu'ya veriliyor.</p>`
      + `<p class="ask">Buna göre Mete'ye verilen kartlarda yazan üslü ifadelerin çarpımının sonucunun Bartu'ya verilen kartta yazan üslü ifadeye oranının alabileceği <u>en büyük</u> değer aşağıdakilerden hangisine eşittir?</p>`,
    opts: ['32<sup>10</sup>', '32<sup>9</sup>', '16<sup>9</sup>', '8<sup>10</sup>'], ans: 1,
    hints: [`Her kartı ±2<sup>k</sup> olarak yaz. Beş kartın çarpımı P ise oran P / x<sup>2</sup> olur (x: Bartu'nun kartı).`],
    steps: [
      `(−1/4)<sup>−3</sup> = (−4)<sup>3</sup> = −2<sup>6</sup> · (−1/8)<sup>−4</sup> = 2<sup>12</sup> · (−1/16)<sup>−6</sup> = 2<sup>24</sup> · (−1/32)<sup>3</sup> = −2<sup>−15</sup> · (−1/64)<sup>2</sup> = 2<sup>−12</sup>`,
      `Beşinin çarpımı: iki negatif → pozitif; üs 6 + 12 + 24 − 15 − 12 = 15 → P = <b>2<sup>15</sup></b>`,
      `Bartu'nun kartı x ise Mete'nin çarpımı P / x, oran P / x<sup>2</sup>. En büyük için x<sup>2</sup> en küçük: x = −2<sup>−15</sup> → x<sup>2</sup> = 2<sup>−30</sup>`,
      `Oran: 2<sup>15</sup> / 2<sup>−30</sup> = 2<sup>45</sup> = (2<sup>5</sup>)<sup>9</sup> = <b>32<sup>9</sup></b>`
    ],
    answer: `En büyük oran <b>32<sup>9</sup></b>. Cevap: <b>B</b>`,
    trap: `Bartu'ya en küçük <b>değerli</b> kartı (−2<sup>6</sup>) vermek: oran negatif çıkar. Burada önemli olan x<sup>2</sup>'nin küçük olması.`
  },
  {
    no: 38, konu: T2, sayfa: 19,
    q: `<p>Matematik öğretmeni, Elif'e üzerlerinde üslü ifadeler yazılı 8 yapboz parçası verip, üzerlerinde yazılı olan üslü ifadelerin değerleri birbirine eşit olan 4 parçayı birleştirerek bir yapboz modeli oluşturmasını istemiştir.</p>`
      + kartlar(['1: (−2)<sup>12</sup>', '2: (2<sup>12</sup>)<sup>−1</sup>', '3: (−16)<sup>3</sup>', `4: (−${F(1, 16)})<sup>3</sup>`, '5: (−4)<sup>6</sup>', '6: (−8)<sup>4</sup>', '7: (−64)<sup>−2</sup>', `8: (−${F(1, 8)})<sup>−4</sup>`])
      + kaynak(19)
      + `<p class="ask">Buna göre Elif'in oluşturması gereken yapboz modeli hangi parçalardan oluşur?</p>`,
    opts: ['1, 3, 2, 4', '1, 8, 2, 6', '1, 8, 5, 6', '7, 3, 5, 6'], ans: 2,
    hints: [`Hepsini ±2<sup>k</sup> biçiminde yaz. Negatif tabanın tek kuvveti negatiftir.`],
    steps: [
      `1: 2<sup>12</sup> · 2: 2<sup>−12</sup> · 3: −2<sup>12</sup> · 4: −2<sup>−12</sup>`,
      `5: (−4)<sup>6</sup> = 2<sup>12</sup> · 6: (−8)<sup>4</sup> = 2<sup>12</sup> · 7: (−64)<sup>−2</sup> = 2<sup>−12</sup> · 8: (−1/8)<sup>−4</sup> = 8<sup>4</sup> = 2<sup>12</sup>`,
      `2<sup>12</sup>'ye eşit dört parça: <b>1, 5, 6, 8</b>`
    ],
    answer: `Parçalar 1, 8, 5, 6. Cevap: <b>C</b>`,
    trap: `(−16)<sup>3</sup>'ü pozitif sanmak (tek kuvvet → negatif) ya da (2<sup>12</sup>)<sup>−1</sup>'i 2<sup>11</sup> yapmak.`
  },
  {
    no: 39, konu: T2, sayfa: 19,
    q: `<p>3<sup>−1</sup>, 3<sup>−2</sup>, 3<sup>−3</sup>, 3<sup>−4</sup>, 3<sup>2</sup> ve 3<sup>3</sup> üslü ifadelerinin tamamı, aşağıdaki tabloda gösterilen mavi kutucukların her birine bir üslü ifade gelecek şekilde yerleştirilecektir.</p>`
      + izgara([['x:', 'b:', 'b:', 'b:'], ['b:', '', 'E', ''], ['b:', '', '', ''], ['b:', 'B', '', 'A']])
      + `<p>E, B ve A kutucuklarındaki her bir üslü ifade, bu harflerle aynı satır ve aynı sütunda bulunan mavi kutucuklardaki iki üslü ifadeden sütundaki üslü ifadenin satırdaki üslü ifadeye bölünmesiyle elde edilmiştir.</p>`
      + `<p class="ask">Buna göre E, B ve A kutucuklarında bulunan üslü ifadelerin çarpımının alabileceği <u>en büyük</u> değer aşağıdakilerden hangisine eşittir?</p>`,
    opts: ['3<sup>14</sup>', '3<sup>15</sup>', '3<sup>16</sup>', '3<sup>17</sup>'], ans: 1,
    hints: [`Sütunlara s1, s2, s3; satırlara r1, r2, r3 de. B ve A aynı satırda (r3)!`],
    steps: [
      `E = s2 / r1, B = s1 / r3, A = s3 / r3 → çarpım = ${F('s1 · s2 · s3', 'r1 · r3<sup>2</sup>')}`,
      `Üs olarak: (s1 + s2 + s3) − r1 − 2·r3. r3'e en küçük üs: <b>−4</b> (katkı +8), r1'e <b>−3</b> (katkı +3).`,
      `Sütunlara kalanlardan en büyük üçü: 3, 2, −1 (toplam 4); r2'ye −2 kalır (etkisiz).`,
      `En büyük üs: 4 + 3 + 8 = 15 → <b>3<sup>15</sup></b>`
    ],
    answer: `En büyük çarpım <b>3<sup>15</sup></b>. Cevap: <b>B</b>`,
    trap: `B ile A'nın aynı satırı paylaştığını fark etmemek: r3 iki kez bölen olur, bu yüzden en küçük üs oraya konmalı.`
  },
  {
    no: 40, konu: T2, sayfa: 20,
    q: `<p>Bir öğretmenin tasarladığı oyunda mavi tuşa basıldığında iki tabletten de birer sayının ışığı yanıyor. 1. tablette −3, 4, 2, −4; 2. tablette 2, 3, −2, −3 sayıları vardır.</p>`
      + `<p>İki tablette ışığı yanan sayılar aynı olduğunda o sayının karesi; farklı olduğunda küçük olan sayı taban, büyük olan sayı üs olacak şekilde elde edilen üslü ifadenin değeri hesaplanıyor.</p>`
      + `<p class="ask">Mavi tuşa iki kez basılıyor. İlk basıldığında aynı sayıların, ikinci basıldığında farklı sayıların ışığı yandığına göre hesaplanan değerlerin çarpımı <u>en çok</u> kaçtır?</p>`,
    opts: ['12<sup>4</sup>', '18<sup>2</sup>', '3<sup>6</sup>', '2<sup>8</sup>'], ans: 2,
    hints: [`Ortak sayılar hangileri? İkinci basışta en büyük değeri veren çifti ara.`],
    steps: [
      `İki tablette ortak sayılar: −3 ve 2 → kareleri 9 ve 4 → en büyük <b>9</b>`,
      `Farklı sayılar (küçük taban, büyük üs): 4 ile 3 → 3<sup>4</sup> = 81; −3 ile 4 → (−3)<sup>4</sup> = 81; −4 ile 2 → 16 … en büyük <b>81</b>`,
      `Çarpım: 9 · 81 = 3<sup>2</sup> · 3<sup>4</sup> = <b>3<sup>6</sup></b>`
    ],
    answer: `En çok <b>3<sup>6</sup></b>. Cevap: <b>C</b>`,
    trap: `4<sup>3</sup> yazmak: küçük sayı taban olmalı → 3<sup>4</sup> = 81 (4<sup>3</sup> = 64 değil).`
  }
  );
})();
