// Kullanım: bu klasörde  node uret.js  → yatay/dikey sessiz video (mp4), altyazı (srt) ve seslendirme metni üretir.
// Sahneler sahne.html içindeki SAHNELER, konuşma metni ve süreler bu dosyadaki METIN listesindedir. Çıktılar depoya eklenmez (.gitignore).
// Sahne görüntülerini alır, sessiz video (yatay + dikey), altyazı (SRT) ve seslendirme metni üretir.
const { chromium } = require('/opt/node22/lib/node_modules/playwright');
const { execFileSync } = require('child_process');
const fs = require('fs');
const METIN = [
  'Merhaba arkadaşlar! Bugün 2026 LGS\'de çıkan bir Çarpanlar ve Katlar sorusunu birlikte çözüyoruz.',
  'Soruyu okuyalım. Bir imalathanede 168 beyaz ve 200 sarı mum üretilmiş. Mumlar, her pakette eşit sayıda ve tek renk mum olacak şekilde, en az sayıda pakete konmuş. Sonra 17 beyaz ve 11 sarı mumun kırık olduğu görülmüş. Soru şu: İçinde kırık mum olmayan paketlerin sayısı en fazla kaçtır?',
  'Videoyu durdurun ve önce kendiniz çözmeyi deneyin. Hazırsanız başlıyoruz.',
  'En az sayıda paket kullanılacaksa, bir paketteki mum sayısı olabildiğince büyük olmalı. Bu sayı hem 168\'i hem 200\'ü bölmeli. Yani EBOB\'u arıyoruz. 168, iki üssü üç çarpı üç çarpı yedi; 200, iki üssü üç çarpı beşin karesi. Ortak çarpan iki üssü üç, yani 8. Her pakette 8 mum var.',
  'Şimdi paketleri sayalım. 168 beyaz mum 8\'erli paketlenince 21 paket, 200 sarı mum 25 paket eder. Toplam 46 paket.',
  'İşte sorunun kilit noktası. Kırıksız paket en fazla olsun istiyorsak, kırık mumları olabildiğince az pakete toplamalıyız. 17 kırık beyaz mumun 8\'ini bir pakete, 8\'ini başka bir pakete koyarız; 1 tane artar, o da üçüncü pakete gider. Yani 3 paket. 11 kırık sarı mumun 8\'i bir pakete, 3\'ü başka bir pakete: 2 paket.',
  'Toplam 3 artı 2, 5 pakette kırık mum var. 46\'dan 5\'i çıkarınca 41 paket kırıksız kalır. Cevap B.',
  'Dikkat! 17\'yi 8\'e bölüp 2 virgül 1 bulan, 2 paket der ve yanılır. 17 mum 2 pakete sığmaz, 3 paket gerekir.',
  'Bu tarz soruların benzerlerini sitemde çözebilirsiniz. Görüşmek üzere!'
];
// Süre: yaklaşık konuşma hızı saniyede 2,2 kelime + nefes payı; "durdur" sahnesi 5 sn sabit
const sure = METIN.map((m, i) => i === 2 ? 5 : Math.max(4, Math.ceil(m.split(/\s+/).length / 2.2 + 1.5)));
const zaman = t => { const s = Math.floor(t), ms = Math.round((t - s) * 1000); return `${String(Math.floor(s / 3600)).padStart(2, '0')}:${String(Math.floor(s / 60) % 60).padStart(2, '0')}:${String(s % 60).padStart(2, '0')},${String(ms).padStart(3, '0')}`; };
const dk = t => `${Math.floor(t / 60)}:${String(Math.round(t % 60)).padStart(2, '0')}`;
(async () => {
  const b = await chromium.launch({ executablePath: '/opt/pw-browsers/chromium' });
  for (const [yon, w, h] of [['yatay', 1920, 1080], ['dikey', 1080, 1920]]) {
    const p = await b.newPage({ viewport: { width: w, height: h } });
    fs.mkdirSync(yon, { recursive: true });
    const parcalar = [];
    for (let i = 0; i < METIN.length; i++) {
      await p.goto(`file://${process.cwd()}/sahne.html?s=${i}&yon=${yon}`); await p.waitForTimeout(i === 0 ? 1500 : 300);
      const tasma = await p.evaluate(() => document.querySelector('.cerceve').scrollHeight - innerHeight);
      if (tasma > 0) console.log('TAŞMA', yon, i, tasma);
      const png = `${yon}/${String(i).padStart(2, '0')}.png`; await p.screenshot({ path: png });
      const mp4 = `${yon}/${String(i).padStart(2, '0')}.mp4`;
      execFileSync('ffmpeg', ['-y', '-loglevel', 'error', '-loop', '1', '-framerate', '30', '-i', png, '-t', String(sure[i]),
        '-vf', `fade=t=in:st=0:d=0.3,fade=t=out:st=${sure[i] - 0.3}:d=0.3,format=yuv420p`, '-c:v', 'libx264', '-preset', 'medium', '-crf', '20', '-r', '30', mp4]);
      parcalar.push(`file '${process.cwd()}/${mp4}'`);
    }
    fs.writeFileSync(`${yon}/liste.txt`, parcalar.join('\n'));
    execFileSync('ffmpeg', ['-y', '-loglevel', 'error', '-f', 'concat', '-safe', '0', '-i', `${yon}/liste.txt`, '-f', 'lavfi', '-i', 'anullsrc=r=48000:cl=stereo',
      '-shortest', '-c:v', 'copy', '-c:a', 'aac', '-movflags', '+faststart', `kirik-mum-${yon}.mp4`]);
    await p.close();
  }
  await b.close();
  let t = 0, srt = '', yazi = 'KIRIK MUM SORUSU · SESLENDİRME METNİ\n2026 LGS · Çarpanlar ve Katlar · Toplam süre ' + dk(sure.reduce((a, x) => a + x, 0)) + '\n\nHer sahnenin başladığı ve bittiği saniye yazılıdır. Sesinizi bu aralıklara göre okuyun.\nBir sahne size kısa gelirse söyleyin, süreyi uzatırım.\n\n';
  METIN.forEach((m, i) => { srt += `${i + 1}\n${zaman(t)} --> ${zaman(t + sure[i])}\n${m}\n\n`; yazi += `Sahne ${i + 1}  [${dk(t)} – ${dk(t + sure[i])}]\n${m}\n\n`; t += sure[i]; });
  fs.writeFileSync('kirik-mum-altyazi.srt', srt); fs.writeFileSync('kirik-mum-seslendirme.txt', yazi);
  console.log('süreler', sure.join(' '), 'toplam', dk(t));
})();
