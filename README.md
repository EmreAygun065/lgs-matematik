# LGS Matematik

8. sınıf LGS matematik çalışma sayfaları (Çarpanlar ve Katlar, Üslü İfadeler, Kareköklü İfadeler): çözüm kartları, benzer sorular, süreli online testler, deneme sınavları ve çalışma kâğıtları.

Siteyi açmak için: https://emreaygun065.github.io/lgs-matematik/

## Sonuçlar ve öğretmen paneli

- Online test ve deneme sonuçları Google E-Tablo'ya gider. Tablonun Apps Script kodu: [`apps-script/sonuc-servisi.gs`](apps-script/sonuc-servisi.gs). Testler "Sonuçlar", denemeler "Denemeler" sayfasına yazılır.
- Kodu güncellemek için: E-Tablo → Uzantılar → Apps Script → kodu yapıştır → `PANEL_SIFRE` satırına şifreyi yaz → Kaydet → Dağıt → Dağıtımları yönet → kalem → Sürüm: Yeni sürüm → Dağıt. Adres değişmez.
- Öğretmen paneli: `cozum-kartlari/panel.html` (şifreyle açılır; `?ornek` ile örnek verilerle görülebilir).
- Test ve deneme soru listeleri `cozum-kartlari/ortak/sinavlar.js` içindedir. Panel gelen cevapları bu sıraya göre eşler; yayındaki bir testin sorularını değiştirmek yerine yeni id ile yeni test ekleyin.
