# VTYS Egzersiz 🚀

**VTYS Egzersiz**, Veritabanı Yönetim Sistemleri (VTYS) dersi konularını pekiştirmek amacıyla tasarlanmış, web tabanlı interaktif bir SQL sınav ve çalışma asistanıdır. 

Uygulama, çoktan seçmeli teorik soruların yanı sıra kod yazma/kod tamamlama pratiği yapabileceğiniz W3Schools tarzı dinamik bir sınama paneline sahiptir.

---

## 🌟 Öne Çıkan Özellikler

- **Gelişmiş Kod Tamamlama Modu (Fill-in-the-Blank)**: Kod sorularında SQL anahtar kelimelerini doğru sırayla yerleştirmenizi sınayan W3Schools benzeri interaktif kutucuklar.
- **"Cevapla" ve "Cevabı Göster" Butonları**: 
  - **Cevapla (Submit Answer)**: Girilen cevabın doğruluğunu kontrol eder. Yanlışsa temizleyip yeniden denemenize izin verir; doğruysa sonraki soruya geçişi açar.
  - **Cevabı Göster (Show Answer)**: Tıklandığında doğru cevapları gösterir ve tekrar tıklandığında cevapları gizler.
- **Detaylı Çözüm Açıklamaları**: Her sorunun altında doğru yanıtın nedenlerini açıklayan detaylı, öğretici geri bildirimler.
- **Kategori ve Tip Filtreleme**: Soruları belirli alt başlıklara (VIEW, INDEX, Saklı Yordam, JOIN vb.) veya soru tipine (Kod / Çoktan Seçmeli) göre filtreleme imkanı.
- **Dinamik Sınav Raporu**: Quiz tamamlandığında doğru, yanlış ve boş bırakılan soru adetlerini gösteren grafiksel başarı karnesi.
- **Premium Tasarım**: Outfit & Source Code Pro yazı tipleri, yumuşak geçişli animasyonlar ve şık HSL renk paletine sahip, modern bir kullanıcı arayüzü.

---

## 📚 Ders İçerikleri ve Soru Dağılımları

Uygulamada çalışabileceğiniz 3 ana bölüm (ders) ve toplam **225 soru** bulunmaktadır:

### 1. Ders 8: Görünüm, Geçici Tablo ve Dizin (100 Soru)
- **I. Görünüm (VIEW)** (40 Soru)
- **II. Geçici Tablo (TEMPORARY TABLE)** (30 Soru)
- **III. Dizin (INDEX)** (30 Soru)

### 2. Ders 9: T-SQL ve Saklı Yordam (50 Soru)
- **I. Transact-SQL ve Transaction Yönetimi** (20 Soru)
- **II. Saklı Yordam (STORED PROCEDURE)** (30 Soru)

### 3. Ders 10: Market SQL Sorguları (75 Soru)
- **I. Tablo Birleştirmeleri (JOIN - INNER/LEFT/RIGHT/OUTER)** (38 Soru)
- **II. Alt Sorgular ve Gruplama (SUBQUERY, GROUP BY, HAVING, DATEDIFF vb.)** (37 Soru)
  *Bu bölümdeki tüm sorular, gerçek bir market veritabanı şeması ve sorgularına dayalı olarak hazırlanmıştır.*

---

## 🛠️ Teknolojiler ve Kurulum

### Kullanılan Teknolojiler
- **Core**: HTML5, Vanilla JavaScript (ES6)
- **Styling**: Vanilla CSS3 (Custom Properties, Flexbox, Grid, CSS Confetti)
- **Fontlar**: Google Fonts (Outfit, Source Code Pro, Source Sans 3)

### Nasıl Çalıştırılır?
Projeyi çalıştırmak için herhangi bir derleyici veya kuruluma gerek yoktur:
1. Depoyu (repository) bilgisayarınıza klonlayın veya zip olarak indirin.
2. Klasör içindeki index.html dosyasını herhangi bir web tarayıcısında (Chrome, Edge, Firefox vb.) çift tıklayarak doğrudan açın.
3. Alternatif olarak yerel bir geliştirme sunucusu başlatarak çalıştırabilirsiniz:
   ```bash
   python -m http.server 8080
   ```
   Ardından tarayıcınızdan http://localhost:8080 adresine gidin.

---

## 🤝 Lisans ve Katkıda Bulunma
Bu proje eğitim amaçlı geliştirilmiştir. Hata bildirimleri veya yeni soru ekleme talepleri için Pull Request (PR) açabilirsiniz.
