# Emre Hoca · LGS Matematik sitesi — çalışma notları

Site GitHub Pages ile `main` dalından yayınlanır. Değişiklikler önce önizletilir; `main`'e ancak Emre Hoca "Yayınla" dedikten sonra gönderilir.

## Deneme hazırlama kuralı (Emre Hoca'nın isteği)

"Deneme hazırla" dendiğinde:
- Sorular **denemeye özel ve yeni** yazılır. Çıkmış sorular, MEB örnek soruları ya da sitedeki benzer soru setlerindeki (veri/*-benzer-*.js) sorular **birebir kullanılmaz**.
- "Benzer" demek **mantığı benzer** demektir: aynı kazanım, aynı çözüm fikri ve LGS tarzı; ama farklı bağlam, farklı sayılar, farklı soru kökü. Sorular sitede başka bir yerde görünmemeli ki öğrenci cevaplarını bulamasın.
- Deneme soruları ayrı veri dosyalarında tutulur (ör. `veri/deneme-N.js`) ve çözüm kartı / çalışma kâğıdı sayfalarına eklenmez.
- Biçim: LGS gibi 20 soru, 40 dakika; üniteler karışık sırada; her soruda `konu`, `unite`, 4 şık, `ans`, `steps`, `answer` bulunur. Cevap harfleri dengeli dağıtılır; her soru elle çözülerek doğrulanır.
- Sorular ve şıklar her öğrencide farklı sırada gösterilir (ortak/gozetim.js); cevaplar, süreler ve panel analizi her zaman denemenin **asıl sırasına** göre tutulur.
- Yayındaki bir denemenin sorularını ya da sırasını değiştirme (panel eski sonuçları bu sıraya göre eşler); değişiklik gerekirse yeni id ile yeni deneme ekle.

## Yapı

- Soru verisi: `cozum-kartlari/veri/*.js`; test ve deneme listeleri: `cozum-kartlari/ortak/sinavlar.js`.
- Sonuçlar Google Apps Script'e gider (`apps-script/sonuc-servisi.gs`); öğretmen paneli `cozum-kartlari/panel.html`.
- Sınav gözetimi (sayfadan ayrılma, şık karıştırma): `cozum-kartlari/ortak/gozetim.js`.
