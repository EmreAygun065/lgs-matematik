// Yanlış ve boş soruların aralıklı tekrarı (Yanlışlarım sayfası ve ana sayfadaki "Senin için" kutusu kullanır).
// Bir soru yanlış/boş kaldığı günden 1 gün sonra, sonra 3 gün, sonra 7 gün sonra tekrar sorulur.
// Üç tekrarda da doğru yapılırsa "öğrenildi" olur. Tekrarda yanlış yapılırsa baştan başlar (1 gün sonra).
// Durum bu cihazda tutulur: localStorage 'tekrar' → { "sınavKodu#soruSırası": { k: kutu (0-2), s: sonraki gün "YYYY-AA-GG", t: yanlışın yapıldığı kaydın tarihi } }
// gecmis.js'ten sonra yüklenmelidir.
(function () {
  const ARALIK = [1, 3, 7];   // kutu 0 → 1 gün, kutu 1 → 3 gün, kutu 2 → 7 gün
  const gun = t => { const d = new Date(t); return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`; };
  const gunEkle = (g, n) => { const [y, a, d] = g.split('-').map(Number); return gun(new Date(y, a - 1, d + n)); };
  window.bugunGun = () => gun(Date.now());
  window.gunYaz = g => { const [y, a, d] = g.split('-').map(Number); return new Date(y, a - 1, d).toLocaleDateString('tr-TR', { day: 'numeric', month: 'long' }); };

  const oku = () => { try { const v = JSON.parse(localStorage.getItem('tekrar') || '{}'); return v && typeof v === 'object' ? v : {}; } catch (e) { return {}; } };
  const yaz = v => { try { localStorage.setItem('tekrar', JSON.stringify(v)); } catch (e) {} };

  // Bir öğrencinin yanlış ve boş soruları; aynı soru birden çok kez yanlış yapıldıysa en son hali, sonradan doğru yaptıysa listede yok.
  // sinavlar: Map(sınav kodu → sorular). Dönen öğe: { anahtar, q, i, no, sec, kayit }
  window.yanlisSorular = (gecmis, sinavlar, ogrenci) => {
    const harita = new Map();
    gecmis.filter(k => sinavlar.has(k.kod) && Array.isArray(k.cevaplar) && (!ogrenci || k.ogrenci === ogrenci))
      .sort((a, b) => String(a.tarih).localeCompare(String(b.tarih)))
      .forEach(k => {
        const sorular = sinavlar.get(k.kod);
        k.cevaplar.forEach((c, i) => {
          const q = sorular[i]; if (!q) return;
          const anahtar = k.kod + '#' + i;
          if (c === q.ans) { harita.delete(anahtar); return; }
          const no = Array.isArray(k.sira) && k.sira.includes(i) ? k.sira.indexOf(i) + 1 : i + 1;   // öğrencinin ekranındaki numara
          harita.set(anahtar, { anahtar, q, i, no, sec: c, kayit: k });
        });
      });
    return [...harita.values()];
  };

  // Bir yanlış sorunun tekrar durumu: { kutu, sonraki, bugun (tekrar günü geldi mi) }
  window.tekrarBilgisi = x => {
    const d = oku()[x.anahtar];
    const kutu = d && d.t === x.kayit.tarih ? d.k : 0;
    const sonraki = d && d.t === x.kayit.tarih ? d.s : gunEkle(gun(x.kayit.tarih), ARALIK[0]);
    return { kutu, sonraki, bugun: sonraki <= bugunGun() };
  };

  // Öğrenci tekrar sırasında soruyu cevapladı. Dönen: { durum: 'ileri' | 'ogrenildi' | 'basa' | 'erken', sonraki }
  // Tekrar günü gelmemiş soruyu doğru yapmak durumu değiştirmez; yanlış yapmak tekrarı baştan başlatır.
  window.tekrarCevap = (x, dogru) => {
    const v = oku(), b = tekrarBilgisi(x), bugun = bugunGun();
    if (!dogru) {
      v[x.anahtar] = { k: 0, s: gunEkle(bugun, ARALIK[0]), t: x.kayit.tarih }; yaz(v);
      return { durum: 'basa', sonraki: v[x.anahtar].s };
    }
    if (!b.bugun) return { durum: 'erken', sonraki: b.sonraki };
    if (b.kutu + 1 >= ARALIK.length) {
      delete v[x.anahtar]; yaz(v);
      if (window.ogrenildiYap) ogrenildiYap(x.anahtar, true);
      return { durum: 'ogrenildi' };
    }
    v[x.anahtar] = { k: b.kutu + 1, s: gunEkle(bugun, ARALIK[b.kutu + 1]), t: x.kayit.tarih }; yaz(v);
    return { durum: 'ileri', sonraki: v[x.anahtar].s, kutu: b.kutu + 1 };
  };
  window.TEKRAR_SAYISI = ARALIK.length;
})();
