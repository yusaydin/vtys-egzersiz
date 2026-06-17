// Veri Tabanı Quiz Soruları - Ders 8 ve Ders 9

const questionsDers8 = [
// ===== CODE QUESTIONS (1-28) =====

  // --- Easy: 1 blank (Questions 1-10) ---
  {
    id: 1,
    category: "view",
    type: "code",
    question: "Basit bir VIEW oluşturmak için eksik anahtar kelimeyi tamamlayın.",
    snippet: "CREATE ___1___ aktif_musteriler AS\nSELECT musteri_id, ad, soyad\nFROM musteriler\nWHERE durum = 'aktif';",
    blanks: ["VIEW"],
    explanation: "CREATE VIEW ifadesi, bir sanal tablo (görünüm) oluşturmak için kullanılır. VIEW anahtar kelimesi CREATE'den sonra gelir."
  },
  {
    id: 2,
    category: "view",
    type: "code",
    question: "VIEW tanımında SELECT sorgusunu bağlamak için eksik kelimeyi yazın.",
    snippet: "CREATE VIEW urun_ozet ___1___\nSELECT urun_adi, fiyat\nFROM urunler;",
    blanks: ["AS"],
    explanation: "AS anahtar kelimesi, VIEW adı ile SELECT sorgusu arasında köprü görevi görür. VIEW'ın hangi sorguyu temsil ettiğini belirtir."
  },
  {
    id: 3,
    category: "view",
    type: "code",
    question: "Mevcut bir VIEW'ı silmek için eksik komutu yazın.",
    snippet: "___1___ VIEW eski_rapor;",
    blanks: ["DROP"],
    explanation: "DROP VIEW ifadesi, veritabanından mevcut bir görünümü kalıcı olarak siler."
  },
  {
    id: 4,
    category: "view",
    type: "code",
    question: "VIEW sorgusunda filtreleme yapmak için eksik kelimeyi tamamlayın.",
    snippet: "CREATE VIEW pahali_urunler AS\nSELECT urun_adi, fiyat\nFROM urunler\n___1___ fiyat > 500;",
    blanks: ["WHERE"],
    explanation: "WHERE ifadesi, VIEW içindeki SELECT sorgusunda satırları filtrelemek için kullanılır."
  },
  {
    id: 5,
    category: "view",
    type: "code",
    question: "VIEW içinde gruplama yapmak için eksik ifadeyi yazın.",
    snippet: "CREATE VIEW kategori_sayilari AS\nSELECT kategori, COUNT(*) AS urun_sayisi\nFROM urunler\n___1___ kategori;",
    blanks: ["GROUP BY"],
    explanation: "GROUP BY ifadesi, VIEW içindeki SELECT sorgusunda verileri gruplamak için kullanılır."
  },
  {
    id: 6,
    category: "view",
    type: "code",
    question: "VIEW'ın yapısını değiştirmek için eksik komutu yazın.",
    snippet: "___1___ VIEW aktif_musteriler AS\nSELECT musteri_id, ad, soyad, email\nFROM musteriler\nWHERE durum = 'aktif';",
    blanks: ["ALTER"],
    explanation: "ALTER VIEW ifadesi, mevcut bir VIEW'ın tanımını değiştirmek için kullanılır. VIEW'ı silip yeniden oluşturmaya gerek kalmaz."
  },
  {
    id: 7,
    category: "view",
    type: "code",
    question: "İki tabloyu birleştiren VIEW'da eksik ifadeyi tamamlayın.",
    snippet: "CREATE VIEW siparis_detay AS\nSELECT s.siparis_id, m.ad, s.toplam\nFROM siparisler s\n___1___ musteriler m ON s.musteri_id = m.musteri_id;",
    blanks: ["JOIN"],
    explanation: "JOIN ifadesi, VIEW içinde birden fazla tabloyu birleştirmek için kullanılır. INNER JOIN varsayılan birleştirme türüdür."
  },
  {
    id: 8,
    category: "view",
    type: "code",
    question: "VIEW üzerinden veri güncelleme kontrolü sağlamak için eksik ifadeyi yazın.",
    snippet: "CREATE VIEW aktif_urunler AS\nSELECT urun_id, urun_adi, stok\nFROM urunler\nWHERE stok > 0\nWITH ___1___ OPTION;",
    blanks: ["CHECK"],
    explanation: "WITH CHECK OPTION, VIEW üzerinden yapılan INSERT veya UPDATE işlemlerinin VIEW'ın WHERE koşulunu sağlamasını zorunlu kılar."
  },
  {
    id: 9,
    category: "view",
    type: "code",
    question: "VIEW varsa silmek, yoksa hata almamak için eksik ifadeyi yazın.",
    snippet: "DROP VIEW ___1___ eski_gorunum;",
    blanks: ["IF EXISTS"],
    explanation: "IF EXISTS ifadesi, VIEW mevcut değilse hata vermeden işlemi atlar. Güvenli silme işlemi sağlar."
  },
  {
    id: 10,
    category: "view",
    type: "code",
    question: "VIEW içinde sıralama yapmak için eksik ifadeyi tamamlayın.",
    snippet: "CREATE VIEW en_pahali_urunler AS\nSELECT urun_adi, fiyat\nFROM urunler\n___1___ fiyat DESC\nLIMIT 10;",
    blanks: ["ORDER BY"],
    explanation: "ORDER BY ifadesi VIEW içinde LIMIT ile birlikte kullanılabilir. MySQL'de VIEW'larda ORDER BY tek başına kullanılamaz, LIMIT ile birlikte olmalıdır."
  },

  // --- Medium: 2 blanks (Questions 11-20) ---
  {
    id: 11,
    category: "view",
    type: "code",
    question: "Bir VIEW oluşturup SELECT sorgusuyla bağlamak için eksik kelimeleri tamamlayın.",
    snippet: "CREATE ___1___ musteri_raporu ___2___\nSELECT ad, soyad, email\nFROM musteriler\nWHERE kayit_tarihi > '2024-01-01';",
    blanks: ["VIEW", "AS"],
    explanation: "CREATE VIEW ... AS yapısı, bir görünüm oluşturmanın temel sözdizimidir. VIEW anahtar kelimesi tür belirtir, AS ise sorguyu bağlar."
  },
  {
    id: 12,
    category: "view",
    type: "code",
    question: "VIEW yoksa oluşturmak, varsa güncellemek için eksik ifadeleri tamamlayın.",
    snippet: "CREATE OR ___1___ VIEW guncel_stok ___2___\nSELECT urun_adi, stok_miktari\nFROM urunler\nWHERE stok_miktari > 0;",
    blanks: ["REPLACE", "AS"],
    explanation: "CREATE OR REPLACE VIEW, VIEW mevcutsa günceller, yoksa yeni oluşturur. DROP + CREATE yapmaya gerek kalmadan VIEW'ı değiştirir."
  },
  {
    id: 13,
    category: "view",
    type: "code",
    question: "JOIN kullanan VIEW'da eksik ifadeleri tamamlayın.",
    snippet: "CREATE VIEW calisan_departman AS\nSELECT c.ad, c.soyad, d.departman_adi\nFROM calisanlar c\n___1___ departmanlar d ___2___ c.departman_id = d.departman_id;",
    blanks: ["JOIN", "ON"],
    explanation: "JOIN ve ON ifadeleri birlikte kullanılır. JOIN tabloları birleştirir, ON ise birleştirme koşulunu belirtir."
  },
  {
    id: 14,
    category: "view",
    type: "code",
    question: "Toplam satış tutarını hesaplayan VIEW'da eksik ifadeleri tamamlayın.",
    snippet: "CREATE VIEW satis_ozet AS\nSELECT musteri_id, ___1___(tutar) AS toplam_satis\nFROM satislar\n___2___ musteri_id;",
    blanks: ["SUM", "GROUP BY"],
    explanation: "SUM() fonksiyonu toplam hesaplar, GROUP BY ise verileri gruplar. Bu kombinasyon, her müşterinin toplam satışını gösterir."
  },
  {
    id: 15,
    category: "view",
    type: "code",
    question: "LEFT JOIN kullanan bir VIEW oluşturmak için eksik ifadeleri tamamlayın.",
    snippet: "CREATE VIEW tum_musteriler AS\nSELECT m.ad, s.siparis_id\nFROM musteriler m\n___1___ siparisler s ___2___ m.musteri_id = s.musteri_id;",
    blanks: ["LEFT JOIN", "ON"],
    explanation: "LEFT JOIN, sol tablodaki tüm kayıtları getirir, eşleşmeyen sağ tablo kayıtları NULL olur. Siparişi olmayan müşteriler de görünür."
  },
  {
    id: 16,
    category: "view",
    type: "code",
    question: "VIEW üzerinde kullanıcıya SELECT yetkisi vermek için eksik ifadeleri tamamlayın.",
    snippet: "___1___ SELECT ___2___ satis_raporu TO 'ali'@'localhost';",
    blanks: ["GRANT", "ON"],
    explanation: "GRANT ... ON ... TO yapısı, belirli bir kullanıcıya VIEW üzerinde yetki vermek için kullanılır."
  },
  {
    id: 17,
    category: "view",
    type: "code",
    question: "HAVING ile filtreleme yapan bir VIEW için eksik ifadeleri tamamlayın.",
    snippet: "CREATE VIEW cok_siparis AS\nSELECT musteri_id, COUNT(*) AS siparis_sayisi\nFROM siparisler\nGROUP BY musteri_id\n___1___ ___2___(*) > 5;",
    blanks: ["HAVING", "COUNT"],
    explanation: "HAVING ifadesi, GROUP BY ile gruplandıktan sonra filtreleme yapar. WHERE'den farkı, toplama fonksiyonlarıyla çalışabilmesidir."
  },
  {
    id: 18,
    category: "view",
    type: "code",
    question: "Mevcut bir VIEW'ı değiştirmek ve CHECK OPTION eklemek için eksik ifadeleri tamamlayın.",
    snippet: "___1___ VIEW aktif_urunler AS\nSELECT urun_id, urun_adi, durum\nFROM urunler\nWHERE durum = 'aktif'\nWITH ___2___ OPTION;",
    blanks: ["ALTER", "CHECK"],
    explanation: "ALTER VIEW ile mevcut bir VIEW değiştirilir. WITH CHECK OPTION eklenerek VIEW üzerinden yapılan değişikliklerin WHERE koşulunu sağlaması zorunlu kılınır."
  },
  {
    id: 19,
    category: "view",
    type: "code",
    question: "Birden fazla VIEW'ı tek seferde silmek için eksik ifadeleri tamamlayın.",
    snippet: "___1___ VIEW ___2___ eski_rapor1, eski_rapor2, eski_rapor3;",
    blanks: ["DROP", "IF EXISTS"],
    explanation: "DROP VIEW ile birden fazla VIEW virgülle ayrılarak tek seferde silinebilir. IF EXISTS eklenerek olmayan VIEW'lar için hata alınması önlenir."
  },
  {
    id: 20,
    category: "view",
    type: "code",
    question: "Alt sorgu (subquery) içeren bir VIEW oluşturmak için eksik ifadeleri tamamlayın.",
    snippet: "CREATE ___1___ ortalama_ustu AS\nSELECT urun_adi, fiyat\nFROM urunler\nWHERE fiyat > (___2___ AVG(fiyat) FROM urunler);",
    blanks: ["VIEW", "SELECT"],
    explanation: "VIEW içinde alt sorgu (subquery) kullanılabilir. Bu örnekte, ortalama fiyatın üzerindeki ürünler filtrelenir."
  },

  // --- Hard: 3-4 blanks (Questions 21-28) ---
  {
    id: 21,
    category: "view",
    type: "code",
    question: "Varsa değiştir, yoksa oluştur yöntemiyle CHECK OPTION içeren bir VIEW tanımlayın.",
    snippet: "CREATE ___1___ ___2___ VIEW yuksek_maasli AS\nSELECT calisan_id, ad, maas\nFROM calisanlar\nWHERE maas > 10000\nWITH ___3___ OPTION;",
    blanks: ["OR", "REPLACE", "CHECK"],
    explanation: "CREATE OR REPLACE VIEW, mevcut VIEW'ı günceller veya yenisini oluşturur. WITH CHECK OPTION, veri bütünlüğünü korur."
  },
  {
    id: 22,
    category: "view",
    type: "code",
    question: "Üç tabloyu birleştiren karmaşık bir VIEW için eksik ifadeleri tamamlayın.",
    snippet: "CREATE VIEW detayli_siparis AS\nSELECT m.ad, u.urun_adi, sd.miktar\nFROM siparis_detay sd\n___1___ siparisler s ___2___ sd.siparis_id = s.siparis_id\n___3___ musteriler m ___4___ s.musteri_id = m.musteri_id\nJOIN urunler u ON sd.urun_id = u.urun_id;",
    blanks: ["JOIN", "ON", "JOIN", "ON"],
    explanation: "Birden fazla JOIN ile üç veya daha fazla tablo birleştirilebilir. Her JOIN için ayrı ON koşulu gerekir."
  },
  {
    id: 23,
    category: "view",
    type: "code",
    question: "Gruplama, toplama ve filtreleme içeren bir VIEW oluşturun.",
    snippet: "CREATE ___1___ departman_istatistik ___2___\nSELECT departman_id, COUNT(*) AS calisan_sayisi, AVG(maas) AS ort_maas\nFROM calisanlar\n___3___ departman_id\nHAVING ___4___(*) >= 3;",
    blanks: ["VIEW", "AS", "GROUP BY", "COUNT"],
    explanation: "Bu VIEW, her departmandaki çalışan sayısını ve ortalama maaşı gösterir. HAVING ile en az 3 çalışanı olan departmanlar filtrelenir."
  },
  {
    id: 24,
    category: "view",
    type: "code",
    question: "CASCADED CHECK OPTION kullanan iç içe VIEW yapısı için eksik ifadeleri tamamlayın.",
    snippet: "CREATE VIEW aktif_urunler AS\nSELECT * FROM urunler WHERE durum = 'aktif';\n\nCREATE VIEW pahali_aktif AS\nSELECT * FROM aktif_urunler\n___1___ fiyat > 1000\nWITH ___2___ ___3___ OPTION;",
    blanks: ["WHERE", "CASCADED", "CHECK"],
    explanation: "WITH CASCADED CHECK OPTION, hem mevcut VIEW'ın hem de temel aldığı VIEW'ların WHERE koşullarını kontrol eder. Böylece eklenen veri hem 'aktif' hem de fiyat > 1000 koşulunu sağlamalıdır."
  },
  {
    id: 25,
    category: "view",
    type: "code",
    question: "LOCAL CHECK OPTION kullanan VIEW için eksik ifadeleri tamamlayın.",
    snippet: "CREATE VIEW departman_filtre AS\nSELECT * FROM calisanlar WHERE departman_id = 5;\n\nCREATE VIEW maas_filtre ___1___\nSELECT * FROM departman_filtre\n___2___ maas > 5000\nWITH ___3___ ___4___ OPTION;",
    blanks: ["AS", "WHERE", "LOCAL", "CHECK"],
    explanation: "WITH LOCAL CHECK OPTION, sadece mevcut VIEW'ın WHERE koşulunu kontrol eder, temel alınan VIEW'ların koşullarını kontrol etmez. CASCADED'dan farklı olarak sadece yerel kontrol yapar."
  },
  {
    id: 26,
    category: "view",
    type: "code",
    question: "VIEW üzerinde birden fazla yetki vermek için eksik ifadeleri tamamlayın.",
    snippet: "___1___ SELECT, ___2___, ___3___\nON musteri_gorunum\n___4___ 'raporcu'@'localhost';",
    blanks: ["GRANT", "INSERT", "UPDATE", "TO"],
    explanation: "GRANT ifadesiyle bir VIEW üzerinde birden fazla yetki (SELECT, INSERT, UPDATE) aynı anda verilebilir. TO ile hedef kullanıcı belirtilir."
  },
  {
    id: 27,
    category: "view",
    type: "code",
    question: "CASE ifadesi ve JOIN içeren karmaşık bir VIEW oluşturun.",
    snippet: "___1___ VIEW calisan_durum AS\nSELECT c.ad, d.departman_adi,\n  ___2___ WHEN c.maas > 15000 THEN 'Yüksek'\n       WHEN c.maas > 8000 THEN 'Orta'\n       ELSE 'Düşük' END AS maas_seviye\nFROM calisanlar c\n___3___ departmanlar d ___4___ c.departman_id = d.departman_id;",
    blanks: ["CREATE", "CASE", "JOIN", "ON"],
    explanation: "VIEW içinde CASE ifadesi kullanılarak hesaplanmış sütunlar oluşturulabilir. JOIN ile departman bilgisi de eklenerek zengin bir görünüm elde edilir."
  },
  {
    id: 28,
    category: "view",
    type: "code",
    question: "CREATE OR REPLACE ile JOIN ve GROUP BY kullanan karmaşık bir VIEW güncelleyin.",
    snippet: "CREATE ___1___ REPLACE ___2___ satis_raporu AS\nSELECT k.kategori_adi, COUNT(s.satis_id) AS satis_adedi,\n       SUM(s.tutar) AS toplam_tutar\nFROM satislar s\nJOIN kategoriler k ON s.kategori_id = k.kategori_id\n___3___ k.kategori_adi\nHAVING ___4___(s.tutar) > 10000;",
    blanks: ["OR", "VIEW", "GROUP BY", "SUM"],
    explanation: "CREATE OR REPLACE VIEW ile mevcut VIEW güncellenir. GROUP BY ve HAVING ile kategorilere göre satış istatistikleri hesaplanır ve filtrelenir."
  },

  // ===== CHOICE QUESTIONS (29-40) =====
  {
    id: 29,
    category: "view",
    type: "choice",
    question: "MySQL'de VIEW (Görünüm) nedir?",
    options: [
      "Veritabanında fiziksel olarak saklanan bir tablo",
      "Bir SELECT sorgusuna dayalı sanal (virtual) tablo",
      "Veritabanı yedekleme aracı",
      "Tablo indeksleme yöntemi"
    ],
    optionReasons: [
      "Yanlış – VIEW fiziksel veri saklamaz, sorgu tanımını saklar.",
      "Doğru – VIEW, bir SELECT sorgusunun sonucunu temsil eden sanal tablodur.",
      "Yanlış – VIEW yedekleme ile ilgili değildir.",
      "Yanlış – VIEW indeksleme mekanizması değildir."
    ],
    answer: 1,
    explanation: "VIEW, bir SELECT sorgusuna dayalı sanal tablodur. Kendi başına veri saklamaz; her çağrıldığında tanımlandığı sorguyu çalıştırır."
  },
  {
    id: 30,
    category: "view",
    type: "choice",
    question: "Aşağıdakilerden hangisi bir VIEW'ı güncellenemez (non-updatable) yapar?",
    options: [
      "WHERE koşulu kullanmak",
      "Tek bir tablodan SELECT yapmak",
      "GROUP BY ve toplama fonksiyonu (SUM, COUNT vb.) kullanmak",
      "Sütunlara takma ad (alias) vermek"
    ],
    optionReasons: [
      "Yanlış – WHERE koşulu VIEW'ı güncellenemez yapmaz.",
      "Yanlış – Tek tablodan SELECT yapan VIEW'lar genellikle güncellenebilir.",
      "Doğru – Toplama fonksiyonları ve GROUP BY, VIEW'ı güncellenemez yapar.",
      "Yanlış – Alias kullanmak VIEW'ın güncellenebilirliğini etkilemez."
    ],
    answer: 2,
    explanation: "GROUP BY, HAVING, DISTINCT, toplama fonksiyonları (SUM, COUNT, AVG vb.), UNION veya alt sorgu içeren VIEW'lar güncellenemez olur."
  },
  {
    id: 31,
    category: "view",
    type: "choice",
    question: "WITH CHECK OPTION ifadesinin amacı nedir?",
    options: [
      "VIEW'ın performansını artırır",
      "VIEW üzerinden yapılan INSERT/UPDATE işlemlerinin WHERE koşulunu sağlamasını zorunlu kılar",
      "VIEW'ı salt okunur (read-only) yapar",
      "VIEW'ın otomatik olarak yenilenmesini sağlar"
    ],
    optionReasons: [
      "Yanlış – WITH CHECK OPTION performans optimizasyonu değildir.",
      "Doğru – Eklenen veya güncellenen satırların VIEW'ın WHERE koşuluyla uyumlu olmasını zorunlu kılar.",
      "Yanlış – VIEW hâlâ güncellenebilir, sadece koşul kontrolü eklenir.",
      "Yanlış – VIEW'ın yenilenmesiyle ilgili değildir."
    ],
    answer: 1,
    explanation: "WITH CHECK OPTION, VIEW üzerinden yapılan veri değişikliklerinin (INSERT, UPDATE) VIEW'ın WHERE koşulunu karşılamasını zorunlu kılar. Koşulu sağlamayan işlemler reddedilir."
  },
  {
    id: 32,
    category: "view",
    type: "choice",
    question: "CREATE OR REPLACE VIEW ile ALTER VIEW arasındaki temel fark nedir?",
    options: [
      "ALTER VIEW sadece sütun ekleyebilir, CREATE OR REPLACE tüm yapıyı değiştirir",
      "CREATE OR REPLACE VIEW yoksa oluşturur; ALTER VIEW ise VIEW mevcut değilse hata verir",
      "ALTER VIEW daha hızlı çalışır",
      "İkisi tamamen aynıdır, fark yoktur"
    ],
    optionReasons: [
      "Yanlış – ALTER VIEW da tüm VIEW tanımını değiştirebilir.",
      "Doğru – CREATE OR REPLACE esnektir: yoksa oluşturur, varsa günceller. ALTER VIEW ise sadece mevcut VIEW'ı değiştirir.",
      "Yanlış – Performans farkı önemli bir ayrım noktası değildir.",
      "Yanlış – Davranışları farklıdır."
    ],
    answer: 1,
    explanation: "CREATE OR REPLACE VIEW, VIEW mevcut değilse yeni oluşturur, mevcutsa günceller. ALTER VIEW ise yalnızca mevcut bir VIEW'ı değiştirir; VIEW yoksa hata döner."
  },
  {
    id: 33,
    category: "view",
    type: "choice",
    question: "Aşağıdaki VIEW tanımlarından hangisi güncellenebilir (updatable) bir VIEW oluşturur?",
    options: [
      "CREATE VIEW v AS SELECT DISTINCT ad FROM musteriler;",
      "CREATE VIEW v AS SELECT ad, soyad FROM musteriler WHERE sehir = 'İstanbul';",
      "CREATE VIEW v AS SELECT departman_id, COUNT(*) FROM calisanlar GROUP BY departman_id;",
      "CREATE VIEW v AS SELECT ad FROM musteriler UNION SELECT ad FROM tedarikciler;"
    ],
    optionReasons: [
      "Yanlış – DISTINCT, VIEW'ı güncellenemez yapar.",
      "Doğru – Tek tablodan basit SELECT ve WHERE koşulu içeren VIEW güncellenebilir.",
      "Yanlış – GROUP BY ve toplama fonksiyonu VIEW'ı güncellenemez yapar.",
      "Yanlış – UNION, VIEW'ı güncellenemez yapar."
    ],
    answer: 1,
    explanation: "Güncellenebilir VIEW'lar tek tablodan SELECT yapmalı, toplama fonksiyonu, GROUP BY, DISTINCT, UNION veya alt sorgu içermemelidir."
  },
  {
    id: 34,
    category: "view",
    type: "choice",
    question: "WITH CASCADED CHECK OPTION ve WITH LOCAL CHECK OPTION arasındaki fark nedir?",
    options: [
      "CASCADED yalnızca mevcut VIEW'ı kontrol eder, LOCAL tüm üst VIEW'ları kontrol eder",
      "CASCADED hem mevcut hem temel alınan VIEW'ların koşullarını kontrol eder, LOCAL sadece mevcut VIEW'ın koşulunu kontrol eder",
      "LOCAL daha hızlıdır, CASCADED daha yavaştır",
      "Aralarında hiçbir fark yoktur"
    ],
    optionReasons: [
      "Yanlış – Bu açıklama tam tersidir.",
      "Doğru – CASCADED tüm zincirdeki koşulları, LOCAL ise sadece tanımlandığı VIEW'ın koşulunu kontrol eder.",
      "Yanlış – Performans farkı temel ayrım noktası değildir.",
      "Yanlış – Kontrol kapsamları farklıdır."
    ],
    answer: 1,
    explanation: "CASCADED (varsayılan), iç içe geçmiş VIEW'ların tüm WHERE koşullarını kontrol eder. LOCAL ise sadece tanımlandığı VIEW'ın koşulunu kontrol eder, alt VIEW'ların koşullarını kontrol etmez."
  },
  {
    id: 35,
    category: "view",
    type: "choice",
    question: "MySQL'de VIEW kullanmanın avantajlarından hangisi YANLIŞTIR?",
    options: [
      "Karmaşık sorguları basitleştirir",
      "Veri güvenliği sağlar (hassas sütunları gizleyebilir)",
      "Sorgu performansını her zaman artırır",
      "Veritabanı soyutlama katmanı oluşturur"
    ],
    optionReasons: [
      "Doğru bir avantajdır – VIEW'lar karmaşık sorguları tek bir isim altında saklar.",
      "Doğru bir avantajdır – Kullanıcılara sadece belirli sütunlar gösterilebilir.",
      "YANLIŞ – VIEW'lar her zaman performans artışı sağlamaz, bazı durumlarda ek yük getirebilir.",
      "Doğru bir avantajdır – Tablo yapısı değişse bile VIEW arayüzü sabit kalabilir."
    ],
    answer: 2,
    explanation: "VIEW'lar sorgu performansını her zaman artırmaz. MySQL'de standart VIEW'lar sorgu çalıştırıldığında hesaplanır ve ek yük getirebilir. Performans artışı için materialized view gibi alternatifler gerekebilir."
  },
  {
    id: 36,
    category: "view",
    type: "choice",
    question: "Aşağıdaki SQL ifadesinin sonucu ne olur?\n\nCREATE VIEW v1 AS SELECT * FROM urunler WHERE fiyat > 100 WITH CHECK OPTION;\nINSERT INTO v1 (urun_adi, fiyat) VALUES ('Kalem', 50);",
    options: [
      "Kayıt başarıyla eklenir",
      "Hata verir, çünkü fiyat 100'den büyük değil",
      "Kayıt eklenir ama VIEW'da görünmez",
      "VIEW otomatik olarak silinir"
    ],
    optionReasons: [
      "Yanlış – WITH CHECK OPTION bu eklemeyi engelleyecektir.",
      "Doğru – fiyat=50, WHERE koşulunu (fiyat > 100) sağlamadığı için WITH CHECK OPTION hatası verir.",
      "Yanlış – WITH CHECK OPTION sayesinde koşulu sağlamayan kayıt eklenmez.",
      "Yanlış – VIEW silinmez, sadece INSERT işlemi reddedilir."
    ],
    answer: 1,
    explanation: "WITH CHECK OPTION, INSERT edilen verinin VIEW'ın WHERE koşulunu sağlamasını zorunlu kılar. fiyat=50, fiyat > 100 koşulunu sağlamadığı için hata alınır."
  },
  {
    id: 37,
    category: "view",
    type: "choice",
    question: "GRANT SELECT ON view_adi TO 'kullanici'@'localhost' ifadesi ne yapar?",
    options: [
      "Kullanıcıya VIEW'ı silme yetkisi verir",
      "Kullanıcıya VIEW üzerinde sadece okuma (SELECT) yetkisi verir",
      "Kullanıcıya tüm tablolarda SELECT yetkisi verir",
      "VIEW'ın tanımını değiştirir"
    ],
    optionReasons: [
      "Yanlış – Silme yetkisi DROP ile GRANT edilir.",
      "Doğru – GRANT SELECT, belirtilen VIEW üzerinde sadece sorgulama yetkisi verir.",
      "Yanlış – Yetki sadece belirtilen VIEW için geçerlidir.",
      "Yanlış – GRANT, VIEW tanımını değiştirmez, yetki yönetimi yapar."
    ],
    answer: 1,
    explanation: "GRANT SELECT ON view_adi TO ifadesi, belirtilen kullanıcıya yalnızca o VIEW üzerinde SELECT (okuma) yetkisi verir. Kullanıcı alttaki tabloyu görmeden VIEW'ı sorgulayabilir."
  },
  {
    id: 38,
    category: "view",
    type: "choice",
    question: "MySQL'de WITH CHECK OPTION belirtilmezse varsayılan davranış nedir?",
    options: [
      "Otomatik olarak CASCADED CHECK OPTION uygulanır",
      "VIEW üzerinden yapılan INSERT/UPDATE işlemleri WHERE koşulu kontrol edilmeden gerçekleşir",
      "VIEW salt okunur olur",
      "MySQL hata verir"
    ],
    optionReasons: [
      "Yanlış – CHECK OPTION belirtilmediyse hiçbir kontrol uygulanmaz.",
      "Doğru – CHECK OPTION yoksa, WHERE koşulunu sağlamayan veriler de eklenebilir veya güncellenebilir.",
      "Yanlış – VIEW güncellenebilir kalır, sadece koşul kontrolü yoktur.",
      "Yanlış – Bu geçerli bir söz dizimidir, hata oluşmaz."
    ],
    answer: 1,
    explanation: "WITH CHECK OPTION belirtilmezse, VIEW üzerinden yapılan INSERT/UPDATE işlemlerinde WHERE koşulu kontrol edilmez. Bu durumda VIEW'ın koşulunu sağlamayan veriler de tabloya eklenebilir."
  },
  {
    id: 39,
    category: "view",
    type: "choice",
    question: "Aşağıdaki VIEW tanımında hata olan hangisidir?\n\n1) CREATE VIEW v AS SELECT * FROM t1;\n2) CREATE VIEW v AS SELECT a, SUM(b) FROM t1;\n3) CREATE VIEW v AS SELECT a FROM t1 WHERE a > 10;\n4) CREATE VIEW v AS SELECT a, b FROM t1 JOIN t2 ON t1.id = t2.id;",
    options: [
      "1 numaralı ifade",
      "2 numaralı ifade",
      "3 numaralı ifade",
      "4 numaralı ifade"
    ],
    optionReasons: [
      "Yanlış – SELECT * ile VIEW oluşturmak geçerlidir.",
      "Doğru – SUM() toplama fonksiyonu GROUP BY olmadan kullanılamaz, bu bir hata üretir.",
      "Yanlış – WHERE koşulu ile VIEW oluşturmak geçerlidir.",
      "Yanlış – JOIN ile VIEW oluşturmak geçerlidir."
    ],
    answer: 1,
    explanation: "2 numaralı ifadede SUM(b) toplama fonksiyonu kullanılmış ancak GROUP BY ifadesi eksiktir. MySQL'de toplama fonksiyonu ile birlikte gruplamayan sütun seçildiğinde (ONLY_FULL_GROUP_BY modunda) hata verir."
  },
  {
    id: 40,
    category: "view",
    type: "choice",
    question: "Bir VIEW silindiğinde (DROP VIEW) alttaki tablolara ne olur?",
    options: [
      "Tablolar da silinir",
      "Tablolardaki veriler silinir ama tablo yapısı kalır",
      "Hiçbir şey olmaz, tablolar ve veriler aynen kalır",
      "Tablolar salt okunur moda geçer"
    ],
    optionReasons: [
      "Yanlış – VIEW bir sanal tablodur, silinmesi alttaki tabloları etkilemez.",
      "Yanlış – VIEW silinmesi tablo verilerini etkilemez.",
      "Doğru – VIEW sanal bir tablodur, silinmesi alttaki gerçek tabloları hiçbir şekilde etkilemez.",
      "Yanlış – Tabloların erişim modu değişmez."
    ],
    answer: 2,
    explanation: "DROP VIEW yalnızca VIEW tanımını siler. VIEW sanal bir tablo olduğundan, alttaki gerçek tablolar ve veriler hiçbir şekilde etkilenmez."
  },
// ===================== TEMPORARY TABLE - CODE QUESTIONS (21) =====================
  {
    id: 41,
    category: "temp",
    type: "code",
    question: "Geçici bir tablo oluşturmak için CREATE ifadesinde hangi anahtar kelime kullanılır?",
    snippet: "CREATE ___1___ TABLE gecici_tablo (\n  id INT,\n  ad VARCHAR(50)\n);",
    blanks: ["TEMPORARY"],
    explanation: "CREATE TEMPORARY TABLE ifadesi, yalnızca mevcut oturum süresince var olan geçici bir tablo oluşturur."
  },
  {
    id: 42,
    category: "temp",
    type: "code",
    question: "Geçici bir tabloyu silmek için doğru komutu tamamlayın.",
    snippet: "___1___ TEMPORARY TABLE gecici_tablo;",
    blanks: ["DROP"],
    explanation: "DROP TEMPORARY TABLE komutu, geçici tabloyu oturumdan kaldırır. TEMPORARY anahtar kelimesi kullanmak, yanlışlıkla kalıcı tabloyu silmeyi önler."
  },
  {
    id: 43,
    category: "temp",
    type: "code",
    question: "INT ve VARCHAR sütunlarıyla basit bir geçici tablo oluşturun.",
    snippet: "CREATE ___1___ ___2___ gecici_urunler (\n  urun_id INT,\n  urun_adi VARCHAR(100)\n);",
    blanks: ["TEMPORARY", "TABLE"],
    explanation: "CREATE TEMPORARY TABLE söz dizimi, kalıcı tablo oluşturmayla aynıdır, sadece TEMPORARY anahtar kelimesi eklenir."
  },
  {
    id: 44,
    category: "temp",
    type: "code",
    question: "Mevcut bir tablodan SELECT ile geçici tablo oluşturun.",
    snippet: "CREATE TEMPORARY TABLE aktif_musteriler\n___1___ SELECT * FROM musteriler\nWHERE durum = 'aktif';",
    blanks: ["AS"],
    explanation: "CREATE TEMPORARY TABLE ... AS SELECT ifadesi, bir sorgu sonucunu doğrudan geçici tabloya kopyalar. Hem yapı hem veri aktarılır."
  },
  {
    id: 45,
    category: "temp",
    type: "code",
    question: "Geçici tabloya veri eklemek için INSERT ifadesini tamamlayın.",
    snippet: "___1___ INTO gecici_sepet (urun_id, miktar)\nVALUES (101, 3);",
    blanks: ["INSERT"],
    explanation: "Geçici tablolara INSERT INTO ile veri eklemek, kalıcı tablolardaki gibi çalışır."
  },
  {
    id: 46,
    category: "temp",
    type: "code",
    question: "Geçici tablodaki bir kaydı güncelleyin.",
    snippet: "___1___ gecici_stok\nSET miktar = miktar - 1\nWHERE urun_id = 55;",
    blanks: ["UPDATE"],
    explanation: "UPDATE komutu geçici tablolarda da normal tablolardaki gibi çalışır. SET ile değer güncellenir, WHERE ile koşul belirlenir."
  },
  {
    id: 47,
    category: "temp",
    type: "code",
    question: "Belirli sütunları seçerek geçici tablo oluşturun.",
    snippet: "CREATE TEMPORARY TABLE ozet_tablo AS\n___1___ ad, soyad, email\nFROM kullanicilar\nWHERE aktif = 1;",
    blanks: ["SELECT"],
    explanation: "AS SELECT ile sadece belirli sütunları seçerek geçici tablo oluşturabilirsiniz. Bu, büyük tablolardan sadece gerekli verileri almak için kullanışlıdır."
  },
  {
    id: 48,
    category: "temp",
    type: "code",
    question: "Geçici tablodan veri silme işlemini tamamlayın.",
    snippet: "___1___ FROM gecici_log\n___2___ tarih < '2024-01-01';",
    blanks: ["DELETE", "WHERE"],
    explanation: "DELETE FROM ... WHERE ifadesi, geçici tablolarda da kalıcı tablolardaki gibi çalışır. WHERE koşulu belirtilmezse tüm satırlar silinir."
  },
  {
    id: 49,
    category: "temp",
    type: "code",
    question: "Eğer aynı isimde geçici tablo varsa hata almamak için kontrol ekleyin.",
    snippet: "DROP TEMPORARY TABLE ___1___ ___2___ gecici_rapor;",
    blanks: ["IF", "EXISTS"],
    explanation: "IF EXISTS ifadesi, tablo yoksa hata almayı önler. Bu, script'lerin güvenli çalışmasını sağlar."
  },
  {
    id: 50,
    category: "temp",
    type: "code",
    question: "Geçici tabloyu AUTO_INCREMENT birincil anahtar ile oluşturun.",
    snippet: "CREATE TEMPORARY TABLE gecici_islemler (\n  islem_id INT ___1___ PRIMARY KEY,\n  tutar DECIMAL(10,2)\n);",
    blanks: ["AUTO_INCREMENT"],
    explanation: "Geçici tablolarda da AUTO_INCREMENT kullanılabilir. Her yeni satır eklendiğinde islem_id otomatik artar."
  },
  {
    id: 51,
    category: "temp",
    type: "code",
    question: "GROUP BY ile toplu veri içeren geçici tablo oluşturun.",
    snippet: "CREATE TEMPORARY TABLE kategori_ozet AS\nSELECT kategori_id, ___1___(fiyat) AS ort_fiyat,\n       COUNT(*) AS urun_sayisi\nFROM urunler\n___2___ kategori_id;",
    blanks: ["AVG", "GROUP BY"],
    explanation: "Toplama fonksiyonları (AVG, COUNT, SUM vb.) ile GROUP BY kullanarak özet verileri geçici tabloda saklayabilirsiniz."
  },
  {
    id: 52,
    category: "temp",
    type: "code",
    question: "Geçici tabloya yeni bir sütun ekleyin.",
    snippet: "___1___ TABLE gecici_musteriler\n___2___ telefon VARCHAR(15);",
    blanks: ["ALTER", "ADD"],
    explanation: "ALTER TABLE ... ADD komutu, geçici tablolara da yeni sütun eklemek için kullanılabilir."
  },
  {
    id: 53,
    category: "temp",
    type: "code",
    question: "JOIN kullanarak iki tablodan geçici tablo oluşturun.",
    snippet: "CREATE TEMPORARY TABLE siparis_detay AS\nSELECT s.siparis_id, m.ad, s.tutar\nFROM siparisler s\n___1___ ___2___ musteriler m ON s.musteri_id = m.id;",
    blanks: ["INNER", "JOIN"],
    explanation: "INNER JOIN ile birden fazla tabloyu birleştirerek sonuçları geçici tabloya kaydedebilirsiniz."
  },
  {
    id: 54,
    category: "temp",
    type: "code",
    question: "Geçici tablodaki tüm verileri temizleyin (yapıyı koruyarak).",
    snippet: "___1___ ___2___ gecici_cache;",
    blanks: ["TRUNCATE", "TABLE"],
    explanation: "TRUNCATE TABLE, tablodaki tüm satırları siler ama tablo yapısını korur. DELETE'den daha hızlıdır çünkü satır satır silmez."
  },
  {
    id: 55,
    category: "temp",
    type: "code",
    question: "Geçici tabloyu belirli bir depolama motoruyla oluşturun.",
    snippet: "CREATE TEMPORARY TABLE hizli_veri (\n  id INT PRIMARY KEY,\n  deger TEXT\n) ___1___ = ___2___;",
    blanks: ["ENGINE", "MEMORY"],
    explanation: "ENGINE = MEMORY, geçici tabloyu RAM'de saklar ve çok hızlı erişim sağlar. Ancak sunucu yeniden başlatıldığında veriler kaybolur."
  },
  {
    id: 56,
    category: "temp",
    type: "code",
    question: "Alt sorgu (subquery) sonucunu geçici tabloya kaydedin.",
    snippet: "CREATE ___1___ TABLE en_pahali AS\nSELECT * FROM urunler\nWHERE fiyat > (\n  SELECT ___2___(fiyat) FROM urunler\n);",
    blanks: ["TEMPORARY", "AVG"],
    explanation: "Alt sorgu sonucuna göre filtrelenmiş verileri geçici tabloda saklayabilirsiniz. Burada ortalama fiyatın üzerindeki ürünler seçilir."
  },
  {
    id: 57,
    category: "temp",
    type: "code",
    question: "Geçici tabloya birden fazla satır ekleyin.",
    snippet: "INSERT ___1___ gecici_renkler (renk_adi, kod)\n___2___ ('Kırmızı', '#FF0000'),\n       ('Mavi', '#0000FF'),\n       ('Yeşil', '#00FF00');",
    blanks: ["INTO", "VALUES"],
    explanation: "INSERT INTO ... VALUES ile birden fazla satırı tek bir INSERT ifadesinde ekleyebilirsiniz. Her satır parantez içinde virgülle ayrılır."
  },
  {
    id: 58,
    category: "temp",
    type: "code",
    question: "Geçici tablo ile normal tabloyu birleştirip güncelleme yapın.",
    snippet: "UPDATE urunler u\n___1___ gecici_fiyatlar g\n___2___ u.urun_id = g.urun_id\nSET u.fiyat = g.yeni_fiyat;",
    blanks: ["JOIN", "ON"],
    explanation: "Geçici tabloyu JOIN ile kalıcı tabloya bağlayarak toplu güncelleme yapabilirsiniz. Bu, batch update işlemleri için çok kullanışlıdır."
  },
  {
    id: 59,
    category: "temp",
    type: "code",
    question: "HAVING ile filtrelenmiş toplam veriyi geçici tabloya kaydedin.",
    snippet: "CREATE TEMPORARY TABLE cok_siparis AS\nSELECT musteri_id, COUNT(*) AS siparis_sayisi\nFROM siparisler\nGROUP BY musteri_id\n___1___ ___2___(*) > 10;",
    blanks: ["HAVING", "COUNT"],
    explanation: "HAVING, GROUP BY sonrası filtreleme yapar. Burada 10'dan fazla siparişi olan müşteriler geçici tabloya kaydedilir."
  },
  {
    id: 60,
    category: "temp",
    type: "code",
    question: "Geçici tabloyu DEFAULT değeri olan sütunlarla oluşturun.",
    snippet: "CREATE TEMPORARY TABLE gecici_ayarlar (\n  ayar_adi VARCHAR(50) NOT NULL,\n  deger VARCHAR(200) ___1___ 'bos',\n  olusturma_tarihi DATETIME ___2___ CURRENT_TIMESTAMP\n);",
    blanks: ["DEFAULT", "DEFAULT"],
    explanation: "DEFAULT anahtar kelimesi, sütunlara varsayılan değer atar. Veri eklerken bu sütunlar belirtilmezse DEFAULT değeri kullanılır."
  },
  {
    id: 61,
    category: "temp",
    type: "code",
    question: "Geçici tablo üzerinde INDEX oluşturun ve LIKE ile sorgulayın.",
    snippet: "CREATE TEMPORARY TABLE gecici_arama (\n  id INT PRIMARY KEY,\n  baslik VARCHAR(200),\n  ___1___ idx_baslik (baslik)\n);\n\nSELECT * FROM gecici_arama\nWHERE baslik ___2___ '%MySQL%';",
    blanks: ["INDEX", "LIKE"],
    explanation: "Geçici tablolarda da INDEX tanımlanabilir. LIKE operatörü metin arama için kullanılır. INDEX, büyük geçici tablolarda sorgu performansını artırır."
  },

  // ===================== TEMPORARY TABLE - CHOICE QUESTIONS (9) =====================
  {
    id: 62,
    category: "temp",
    type: "choice",
    question: "Geçici tablolar (TEMPORARY TABLE) ne zaman otomatik olarak silinir?",
    options: [
      "Oturum (session) sonlandığında",
      "Sunucu yeniden başlatıldığında",
      "Belirli bir süre sonra",
      "Veritabanı kapatıldığında"
    ],
    optionReasons: [
      "Doğru! Geçici tablolar oturum bazlıdır ve bağlantı kapandığında otomatik silinir.",
      "Sunucu yeniden başlatıldığında da silinir, ancak bu birincil mekanizma değildir.",
      "Geçici tablolarda zaman aşımı (timeout) mekanizması yoktur.",
      "Veritabanı kapatma kavramı MySQL'de farklıdır, geçici tablolar oturuma bağlıdır."
    ],
    answer: 0,
    explanation: "Geçici tablolar oturum (session) kapsamındadır. Bağlantı kapatıldığında veya oturum sonlandığında MySQL otomatik olarak geçici tabloyu siler."
  },
  {
    id: 63,
    category: "temp",
    type: "choice",
    question: "İki farklı MySQL oturumu aynı anda aynı isimde geçici tablo oluşturabilir mi?",
    options: [
      "Evet, her oturum kendi geçici tablosuna sahip olur",
      "Hayır, isim çakışması hatası verir",
      "Sadece farklı veritabanlarında mümkündür",
      "Sadece REPLACE komutu ile mümkündür"
    ],
    optionReasons: [
      "Doğru! Geçici tablolar oturum bazlı olduğu için her oturum bağımsız tablolara sahiptir.",
      "Geçici tablolar oturumlar arası izole olduğu için çakışma olmaz.",
      "Veritabanı fark etmeksizin her oturum kendi geçici tablolarını oluşturabilir.",
      "REPLACE komutuyla ilgisi yoktur."
    ],
    answer: 0,
    explanation: "Geçici tablolar oturum bazlıdır. Farklı oturumlar aynı isimde geçici tablo oluşturabilir ve birbirlerini etkilemez."
  },
  {
    id: 64,
    category: "temp",
    type: "choice",
    question: "Kalıcı bir tabloyla aynı isimde geçici tablo oluşturulursa ne olur?",
    options: [
      "Geçici tablo kalıcı tabloyu gizler (mask), oturum süresince geçici tablo kullanılır",
      "Hata verir, aynı isim kullanılamaz",
      "Kalıcı tablonun üzerine yazılır",
      "Her iki tablo da aynı anda erişilebilir"
    ],
    optionReasons: [
      "Doğru! Geçici tablo, aynı isimdeki kalıcı tabloyu o oturum süresince gizler.",
      "MySQL aynı isimde geçici tablo oluşturulmasına izin verir.",
      "Kalıcı tablo korunur, sadece erişim geçici tabloya yönlendirilir.",
      "Aynı isimle iki tabloya aynı anda erişilemez, geçici tablo öncelik alır."
    ],
    answer: 0,
    explanation: "MySQL'de geçici tablo, aynı isimdeki kalıcı tabloyu 'gizler' (mask/shadow). Oturum süresince o isme yapılan sorgular geçici tabloya yönlendirilir."
  },
  {
    id: 65,
    category: "temp",
    type: "choice",
    question: "Aşağıdakilerden hangisi geçici tablolar için YANLIŞTIR?",
    options: [
      "Geçici tablolar farklı oturumlar arasında paylaşılabilir",
      "Geçici tablolara INDEX eklenebilir",
      "Geçici tablolarda AUTO_INCREMENT kullanılabilir",
      "Geçici tablolara ALTER TABLE uygulanabilir"
    ],
    optionReasons: [
      "Doğru! Bu YANLŞ bir ifadedir. Geçici tablolar oturumlar arası paylaşılamaz.",
      "Geçici tablolara INDEX eklenebilir, bu doğru bir ifadedir.",
      "AUTO_INCREMENT geçici tablolarda da çalışır, bu doğru bir ifadedir.",
      "ALTER TABLE geçici tablolara uygulanabilir, bu doğru bir ifadedir."
    ],
    answer: 0,
    explanation: "Geçici tablolar yalnızca oluşturuldukları oturumda görünürdür ve başka oturumlarla paylaşılamaz. Bu, geçici tabloların temel özelliğidir."
  },
  {
    id: 66,
    category: "temp",
    type: "choice",
    question: "CREATE TEMPORARY TABLE ... AS SELECT ifadesinde hangi bilgiler kopyalanır?",
    options: [
      "Sütun yapısı ve veriler kopyalanır, ancak INDEX ve FOREIGN KEY kopyalanmaz",
      "Sadece sütun yapısı kopyalanır, veriler kopyalanmaz",
      "Sütun yapısı, veriler, INDEX ve FOREIGN KEY hepsi kopyalanır",
      "Sadece veriler kopyalanır, sütun yapısı otomatik belirlenir"
    ],
    optionReasons: [
      "Doğru! AS SELECT ile yapı ve veri kopyalanır, ancak kısıtlamalar (constraints) ve indeksler kopyalanmaz.",
      "AS SELECT kullanıldığında veriler de kopyalanır.",
      "INDEX ve FOREIGN KEY gibi kısıtlamalar AS SELECT ile kopyalanmaz.",
      "Sütun yapısı da kaynak sorgudan otomatik oluşturulur, ancak bu sadece veri değildir."
    ],
    answer: 0,
    explanation: "CREATE TEMPORARY TABLE ... AS SELECT ile sütun tanımları ve veriler kopyalanır. Ancak PRIMARY KEY, INDEX, FOREIGN KEY gibi kısıtlamalar kopyalanmaz."
  },
  {
    id: 67,
    category: "temp",
    type: "choice",
    question: "Geçici tablolar için hangi depolama motoru (storage engine) RAM'de çalışarak en hızlı erişimi sağlar?",
    options: [
      "MEMORY (HEAP)",
      "InnoDB",
      "MyISAM",
      "CSV"
    ],
    optionReasons: [
      "Doğru! MEMORY motoru verileri RAM'de saklar ve en hızlı okuma/yazma performansını sağlar.",
      "InnoDB varsayılan motordur, ancak verileri diske yazar.",
      "MyISAM eski bir motordur, disk tabanlıdır.",
      "CSV motoru verileri CSV dosyasında saklar, performans için uygun değildir."
    ],
    answer: 0,
    explanation: "ENGINE = MEMORY (veya HEAP) ile oluşturulan tablolar tamamen RAM'de tutulur. Bu, geçici tablolar için ideal bir seçenektir çünkü zaten oturum süresince yaşarlar."
  },
  {
    id: 68,
    category: "temp",
    type: "choice",
    question: "DROP TEMPORARY TABLE ile DROP TABLE arasındaki en önemli fark nedir?",
    options: [
      "DROP TEMPORARY TABLE yalnızca geçici tabloyu siler, aynı isimdeki kalıcı tabloyu korur",
      "DROP TEMPORARY TABLE daha hızlı çalışır",
      "DROP TABLE geçici tabloları silemez",
      "Aralarında hiçbir fark yoktur"
    ],
    optionReasons: [
      "Doğru! TEMPORARY anahtar kelimesi, yalnızca geçici tablonun silinmesini garanti eder.",
      "Hız farkı temel fark değildir.",
      "DROP TABLE geçici tabloları da silebilir, ancak risklidir.",
      "Önemli bir fark vardır: güvenlik."
    ],
    answer: 0,
    explanation: "DROP TEMPORARY TABLE sadece geçici tabloyu hedef alır. DROP TABLE kullanırsanız ve geçici tablo yoksa, aynı isimdeki kalıcı tabloyu yanlışlıkla silebilirsiniz."
  },
  {
    id: 69,
    category: "temp",
    type: "choice",
    question: "Bir stored procedure (saklı yordam) içinde oluşturulan geçici tablo ne zaman silinir?",
    options: [
      "Oturum sonlanana kadar erişilebilir kalır",
      "Stored procedure bittiğinde otomatik silinir",
      "COMMIT çağrıldığında silinir",
      "Bir sonraki sorgu çalıştığında silinir"
    ],
    optionReasons: [
      "Doğru! Geçici tablo stored procedure dışında da oturum boyunca erişilebilir kalır.",
      "Stored procedure'ün bitmesi geçici tabloyu silmez.",
      "COMMIT işlemi geçici tabloları etkilemez.",
      "Geçici tablolar sorgu bazlı silinmez."
    ],
    answer: 0,
    explanation: "Stored procedure içinde oluşturulan geçici tablolar, procedure bittikten sonra da oturum boyunca erişilebilir kalır. Sadece oturum sonlandığında veya DROP ile silinir."
  },
  {
    id: 70,
    category: "temp",
    type: "choice",
    question: "Aşağıdaki durumlardan hangisinde geçici tablo kullanmak EN UYGUN seçenektir?",
    options: [
      "Karmaşık bir raporlama sorgusunun ara sonuçlarını saklamak için",
      "Kullanıcıların kalıcı verilerini saklamak için",
      "Farklı uygulamalar arasında veri paylaşmak için",
      "Yedekleme (backup) amacıyla veri saklamak için"
    ],
    optionReasons: [
      "Doğru! Geçici tablolar, karmaşık sorguların ara sonuçlarını saklamak için idealdir.",
      "Kalıcı veriler için normal tablolar kullanılmalıdır.",
      "Geçici tablolar oturumlar arası paylaşılamaz, bu amaç için uygun değildir.",
      "Yedekleme için geçici tablolar uygun değildir çünkü oturum bitiminde silinirler."
    ],
    answer: 0,
    explanation: "Geçici tablolar, karmaşık sorguları parçalara ayırmak, ara hesaplamaları saklamak ve çok aşamalı veri işleme süreçlerinde idealdir."
  },
// ===================== INDEX - CODE QUESTIONS (21) =====================
  {
    id: 71,
    category: "index",
    type: "code",
    question: "Bir tabloda belirli bir sütun için basit bir indeks oluşturun.",
    snippet: "___1___ INDEX idx_ad\nON musteriler (ad);",
    blanks: ["CREATE"],
    explanation: "CREATE INDEX komutu, var olan bir tablo üzerinde indeks oluşturur. Indeks, sorgu performansını artırmak için kullanılır."
  },
  {
    id: 72,
    category: "index",
    type: "code",
    question: "Tekil (unique) değerler zorunlu kılan bir indeks oluşturun.",
    snippet: "CREATE ___1___ INDEX idx_email\nON kullanicilar (email);",
    blanks: ["UNIQUE"],
    explanation: "CREATE UNIQUE INDEX, sütundaki tüm değerlerin benzersiz olmasını zorunlu kılar. Aynı email adresi iki kez eklenemez."
  },
  {
    id: 73,
    category: "index",
    type: "code",
    question: "Bir indeksi silmek için doğru komutu tamamlayın.",
    snippet: "___1___ INDEX idx_ad\nON musteriler;",
    blanks: ["DROP"],
    explanation: "DROP INDEX komutu, belirtilen tablodan indeksi kaldırır. Indeks silindikten sonra ilgili sütundaki sorgular daha yavaş çalışabilir."
  },
  {
    id: 74,
    category: "index",
    type: "code",
    question: "Metin arama için FULLTEXT indeks oluşturun.",
    snippet: "CREATE ___1___ INDEX idx_icerik\nON makaleler (baslik, govde);",
    blanks: ["FULLTEXT"],
    explanation: "FULLTEXT INDEX, metin tabanlı aramalarda (MATCH ... AGAINST) kullanılır. VARCHAR ve TEXT sütunlarında tam metin arama yapılmasını sağlar."
  },
  {
    id: 75,
    category: "index",
    type: "code",
    question: "ALTER TABLE ile mevcut tabloya indeks ekleyin.",
    snippet: "ALTER TABLE siparisler\n___1___ ___2___ idx_tarih (siparis_tarihi);",
    blanks: ["ADD", "INDEX"],
    explanation: "ALTER TABLE ... ADD INDEX, var olan bir tabloya yeni indeks eklemenin alternatif yoludur. CREATE INDEX ile aynı sonucu verir."
  },
  {
    id: 76,
    category: "index",
    type: "code",
    question: "Bir tablodaki mevcut indeksleri görüntüleyin.",
    snippet: "___1___ ___2___ FROM urunler;",
    blanks: ["SHOW", "INDEX"],
    explanation: "SHOW INDEX FROM tablo_adi komutu, tablodaki tüm indeksleri, sütunlarını ve özelliklerini listeler."
  },
  {
    id: 77,
    category: "index",
    type: "code",
    question: "İki sütun üzerinde bileşik (composite) indeks oluşturun.",
    snippet: "CREATE INDEX idx_sehir_yas\nON musteriler (___1___, ___2___);",
    blanks: ["sehir", "yas"],
    explanation: "Bileşik indeks, birden fazla sütunu kapsayan tek bir indekstir. Sol-önek kuralına göre, sorgularda ilk sütundan başlayarak kullanılır."
  },
  {
    id: 78,
    category: "index",
    type: "code",
    question: "ALTER TABLE ile UNIQUE INDEX ekleyin.",
    snippet: "ALTER TABLE personel\nADD ___1___ ___2___ idx_tc (tc_kimlik);",
    blanks: ["UNIQUE", "INDEX"],
    explanation: "ALTER TABLE ... ADD UNIQUE INDEX, hem benzersizlik kısıtlaması hem de indeks oluşturur. TC kimlik numarası gibi benzersiz alanlar için idealdir."
  },
  {
    id: 79,
    category: "index",
    type: "code",
    question: "FULLTEXT indeksi kullanarak metin araması yapın.",
    snippet: "SELECT * FROM makaleler\nWHERE ___1___(baslik, govde)\n___2___('veritabanı optimizasyonu');",
    blanks: ["MATCH", "AGAINST"],
    explanation: "MATCH ... AGAINST söz dizimi, FULLTEXT indeksli sütunlarda tam metin araması yapar. Doğal dil modu varsayılan arama modudur."
  },
  {
    id: 80,
    category: "index",
    type: "code",
    question: "Sorgu planını inceleyerek indeks kullanımını kontrol edin.",
    snippet: "___1___ SELECT * FROM musteriler\nWHERE email = 'test@mail.com';",
    blanks: ["EXPLAIN"],
    explanation: "EXPLAIN komutu, MySQL'in sorguyu nasıl çalıştırdığını gösterir. Indeks kullanılıp kullanılmadığını, tarama türünü ve maliyet tahminini verir."
  },
  {
    id: 81,
    category: "index",
    type: "code",
    question: "Üç sütunlu bileşik indeks oluşturun.",
    snippet: "CREATE ___1___ idx_lokasyon\nON magazalar (___2___, sehir, ilce);",
    blanks: ["INDEX", "ulke"],
    explanation: "Üç sütunlu bileşik indeks, bu sütunların kombinasyonlarını içeren sorgularda performans artışı sağlar. Sol-önek kuralı geçerlidir."
  },
  {
    id: 82,
    category: "index",
    type: "code",
    question: "Prefix (önek) indeks oluşturarak uzun metin sütununu indeksleyin.",
    snippet: "CREATE INDEX idx_aciklama\nON urunler (aciklama(___1___));",
    blanks: ["100"],
    explanation: "Prefix indeks, sütunun sadece ilk N karakterini indeksler. Uzun TEXT veya VARCHAR sütunlarında tam indeks oluşturmak verimsiz olacağı için önek kullanılır."
  },
  {
    id: 83,
    category: "index",
    type: "code",
    question: "ALTER TABLE ile birden fazla indeks değişikliği yapın.",
    snippet: "ALTER TABLE urunler\n___1___ INDEX idx_eski,\n___2___ INDEX idx_yeni (kategori_id);",
    blanks: ["DROP", "ADD"],
    explanation: "Tek bir ALTER TABLE ifadesinde birden fazla indeks işlemi yapılabilir. Bu, tablonun yalnızca bir kez yeniden düzenlenmesini sağlar ve daha verimlidir."
  },
  {
    id: 84,
    category: "index",
    type: "code",
    question: "Boolean modda FULLTEXT arama yapın.",
    snippet: "SELECT * FROM makaleler\nWHERE MATCH(baslik, govde)\nAGAINST('+MySQL -Oracle' ___1___ ___2___ ___3___);",
    blanks: ["IN", "BOOLEAN", "MODE"],
    explanation: "IN BOOLEAN MODE, +, -, *, ~ gibi operatörlerle gelişmiş metin araması yapmayı sağlar. +kelime zorunlu, -kelime hariç tutar."
  },
  {
    id: 85,
    category: "index",
    type: "code",
    question: "Tablo oluştururken sütun tanımı içinde indeks belirleyin.",
    snippet: "CREATE TABLE loglar (\n  id INT AUTO_INCREMENT PRIMARY KEY,\n  mesaj TEXT,\n  seviye VARCHAR(20),\n  tarih DATETIME,\n  ___1___ idx_seviye_tarih (seviye, tarih)\n);",
    blanks: ["INDEX"],
    explanation: "Indeks, CREATE TABLE ifadesinin içinde de tanımlanabilir. Bu yöntem, tablo ve indeksi aynı anda oluşturur."
  },
  {
    id: 86,
    category: "index",
    type: "code",
    question: "Invisible (görünmez) indeks oluşturun (MySQL 8.0+).",
    snippet: "CREATE INDEX idx_test\nON urunler (fiyat)\n___1___;",
    blanks: ["INVISIBLE"],
    explanation: "INVISIBLE indeksler MySQL 8.0+ özelliğidir. Optimizer tarafından kullanılmaz, ancak silinmez. Indeksi silmeden performans etkisini test etmek için kullanılır."
  },
  {
    id: 87,
    category: "index",
    type: "code",
    question: "Descending (azalan) sıralı indeks oluşturun (MySQL 8.0+).",
    snippet: "CREATE INDEX idx_tarih_desc\nON siparisler (siparis_tarihi ___1___);",
    blanks: ["DESC"],
    explanation: "DESC indeksler MySQL 8.0+ ile desteklenir. En yeni kayıtlara hızlı erişim gereken sorgularda (ORDER BY ... DESC) performansı artırır."
  },
  {
    id: 88,
    category: "index",
    type: "code",
    question: "Bileşik indekste farklı sıralama yönleri kullanın.",
    snippet: "CREATE INDEX idx_karma\nON siparisler (musteri_id ___1___, siparis_tarihi ___2___);",
    blanks: ["ASC", "DESC"],
    explanation: "MySQL 8.0+ ile bileşik indekste her sütun farklı sıralama yönüne sahip olabilir. Bu, ORDER BY musteri_id ASC, siparis_tarihi DESC sorgularında idealdir."
  },
  {
    id: 99,
    category: "index",
    type: "code",
    question: "İndeks istatistiklerini güncellemek için ANALYZE komutunu kullanın.",
    snippet: "___1___ ___2___ urunler;",
    blanks: ["ANALYZE", "TABLE"],
    explanation: "ANALYZE TABLE, indeks istatistiklerini günceller. Bu, MySQL optimizer'ın doğru indeksi seçmesi için önemlidir."
  },
  {
    id: 90,
    category: "index",
    type: "code",
    question: "İndeks kullanımını zorlayan sorgu ipucu (hint) ekleyin.",
    snippet: "SELECT * FROM urunler\n___1___ INDEX (idx_kategori)\nWHERE kategori_id = 5;",
    blanks: ["FORCE"],
    explanation: "FORCE INDEX, MySQL optimizer'ı belirtilen indeksi kullanmaya zorlar. Optimizer'ın yanlış seçim yaptığı durumlarda kullanılır."
  },
  {
    id: 91,
    category: "index",
    type: "code",
    question: "Fonksiyonel (ifade tabanlı) indeks oluşturun (MySQL 8.0+).",
    snippet: "CREATE INDEX idx_ad_upper\nON musteriler ((___1___(ad)));",
    blanks: ["UPPER"],
    explanation: "MySQL 8.0+ ile fonksiyonel indeksler desteklenir. WHERE UPPER(ad) = 'ALI' gibi sorgularda bu indeks kullanılır. İfade çift parantez içine alınır."
  },

  // ===================== INDEX - CHOICE QUESTIONS (9) =====================
  {
    id: 92,
    category: "index",
    type: "choice",
    question: "MySQL'de varsayılan indeks yapısı (data structure) hangisidir?",
    options: [
      "B-Tree",
      "Hash",
      "R-Tree",
      "Full-Text"
    ],
    optionReasons: [
      "Doğru! MySQL InnoDB ve MyISAM'da varsayılan indeks yapısı B-Tree'dir.",
      "Hash indeksler yalnızca MEMORY tabloları için varsayılandır.",
      "R-Tree, yalnızca uzamsal (spatial) veriler için kullanılır.",
      "Full-Text, metin arama için özel bir indeks türüdür, varsayılan yapı değildir."
    ],
    answer: 0,
    explanation: "B-Tree (Balanced Tree), MySQL'de en yaygın kullanılan indeks yapısıdır. Eşitlik (=) ve aralık (<, >, BETWEEN) sorgularında etkilidir."
  },
  {
    id: 93,
    category: "index",
    type: "choice",
    question: "Aşağıdaki durumlardan hangisinde indeks kullanmak performansı DÜŞÜRÜR?",
    options: [
      "Çok sık INSERT, UPDATE, DELETE yapılan bir tabloda",
      "Büyük tablolarda WHERE ile filtreleme yapıldığında",
      "JOIN işlemlerinde bağlantı sütunlarında",
      "ORDER BY ile sıralama yapıldığında"
    ],
    optionReasons: [
      "Doğru! Her yazma işleminde indeksler de güncellenmesi gerekir, bu da yazma performansını düşürür.",
      "WHERE filtreleme indekslerin en etkili olduğu durumdur.",
      "JOIN sütunlarındaki indeksler birleştirme performansını artırır.",
      "ORDER BY sütunlarındaki indeksler sıralama maliyetini azaltır."
    ],
    answer: 0,
    explanation: "Indeksler okuma hızını artırırken yazma hızını düşürür. Her INSERT, UPDATE veya DELETE işleminde tüm ilgili indeksler de güncellenmek zorundadır."
  },
  {
    id: 94,
    category: "index",
    type: "choice",
    question: "Bileşik indeks (composite index) oluşturulurken sütun sırası neden önemlidir?",
    options: [
      "Sol-önek (leftmost prefix) kuralı gereği, indeks soldan sağa doğru kullanılır",
      "Sıralama performansı etkilenmez, sadece okunabilirlik içindir",
      "MySQL sütun sırasını otomatik optimize eder",
      "İlk sütun her zaman UNIQUE olmalıdır"
    ],
    optionReasons: [
      "Doğru! (a, b, c) indeksi; (a), (a,b) ve (a,b,c) sorgularında çalışır, ancak (b,c) veya (c) için çalışmaz.",
      "Sütun sırası performansı doğrudan etkiler.",
      "MySQL sütun sırasını otomatik değiştirmez.",
      "İlk sütunun UNIQUE olma zorunluluğu yoktur."
    ],
    answer: 0,
    explanation: "Sol-önek kuralına göre, bileşik indeks yalnızca soldan başlayan sütun kombinasyonlarında kullanılır. INDEX(a,b,c) → (a), (a,b), (a,b,c) sorgularında etkilidir."
  },
  {
    id: 95,
    category: "index",
    type: "choice",
    question: "Aşağıdakilerden hangisi bir indeksin kullanılmasını ENGELLEYEBİLİR?",
    options: [
      "WHERE sütununa fonksiyon uygulanması (örn: WHERE YEAR(tarih) = 2024)",
      "WHERE sütununda eşitlik karşılaştırması (örn: WHERE id = 5)",
      "ORDER BY ile indeksli sütunun kullanılması",
      "JOIN koşulunda indeksli sütunun kullanılması"
    ],
    optionReasons: [
      "Doğru! Sütuna fonksiyon uygulanması indeksin kullanılmasını engeller (MySQL 8.0 öncesi).",
      "Eşitlik karşılaştırması indeksin en verimli kullanıldığı durumdur.",
      "ORDER BY indeksli sütun, sıralama performansını artırır.",
      "JOIN koşulunda indeks kullanımı idealdir."
    ],
    answer: 0,
    explanation: "WHERE YEAR(tarih) = 2024 gibi ifadelerde sütuna fonksiyon uygulanması, MySQL'in indeksi kullanmasını engeller. Bunun yerine WHERE tarih BETWEEN '2024-01-01' AND '2024-12-31' kullanılmalıdır."
  },
  {
    id: 96,
    category: "index",
    type: "choice",
    question: "UNIQUE INDEX ile PRIMARY KEY arasındaki en önemli fark nedir?",
    options: [
      "PRIMARY KEY NULL değer kabul etmez, UNIQUE INDEX bir tane NULL kabul edebilir",
      "PRIMARY KEY daha hızlıdır",
      "UNIQUE INDEX sadece sayısal sütunlarda çalışır",
      "Bir tabloda birden fazla PRIMARY KEY olabilir"
    ],
    optionReasons: [
      "Doğru! PRIMARY KEY NOT NULL + UNIQUE'dir. UNIQUE INDEX ise NULL değerlere izin verebilir.",
      "Hız farkı temel fark değildir, her ikisi de B-Tree kullanır.",
      "UNIQUE INDEX tüm veri tiplerinde çalışır.",
      "Bir tabloda yalnızca bir PRIMARY KEY olabilir, ancak birden fazla UNIQUE INDEX olabilir."
    ],
    answer: 0,
    explanation: "PRIMARY KEY = NOT NULL + UNIQUE. Bir tabloda yalnızca bir PRIMARY KEY, ancak birden fazla UNIQUE INDEX olabilir. UNIQUE INDEX NULL değer kabul edebilir."
  },
  {
    id: 97,
    category: "index",
    type: "choice",
    question: "Covering index (kapsayan indeks) nedir?",
    options: [
      "Sorgunun ihtiyaç duyduğu tüm sütunları içeren indeks, tabloya erişim gerektirmez",
      "Tablodaki tüm sütunları kapsayan indeks",
      "Birden fazla tabloyu kapsayan indeks",
      "Otomatik oluşturulan indeks"
    ],
    optionReasons: [
      "Doğru! Covering index, sorgunun tüm verilerini indeksten karşılar, tablo erişimi gerekmez (EXPLAIN'de 'Using index').",
      "Tüm sütunları indekslemek genellikle verimsizdir.",
      "Indeksler tek bir tabloya aittir.",
      "Covering index otomatik oluşturulan bir kavram değildir."
    ],
    answer: 0,
    explanation: "Covering index, SELECT, WHERE ve ORDER BY'da kullanılan tüm sütunları içerir. MySQL, tabloya hiç erişmeden sonucu doğrudan indeksten döndürür."
  },
  {
    id: 98,
    category: "index",
    type: "choice",
    question: "Cardinality (kardinalite) değeri düşük olan sütunlara indeks eklenmesi neden önerilmez?",
    options: [
      "Düşük kardinalite (az sayıda benzersiz değer) indeksin seçiciliğini azaltır ve performans kazancı minimal olur",
      "Düşük kardinaliteli sütunlarda indeks oluşturulamaz",
      "MySQL düşük kardinaliteli indeksleri otomatik siler",
      "Düşük kardinaliteli indeksler disk alanı kullanmaz"
    ],
    optionReasons: [
      "Doğru! Örneğin 'cinsiyet' sütununda sadece 2-3 farklı değer varsa, indeks tablonun büyük kısmını taramak zorunda kalır.",
      "Teknik olarak oluşturulabilir, ancak verimli olmaz.",
      "MySQL indeksleri otomatik silmez.",
      "Her indeks disk alanı kullanır."
    ],
    answer: 0,
    explanation: "Kardinalite, bir sütundaki benzersiz değer sayısıdır. Düşük kardinaliteli sütunlarda (örn: cinsiyet, durum) indeks, satırların büyük yüzdesini döndüreceği için full table scan'den daha az avantajlıdır."
  },
  {
    id: 99,
    category: "index",
    type: "choice",
    question: "Aşağıdaki sorgu türlerinden hangisinde FULLTEXT INDEX kullanılmalıdır?",
    options: [
      "Doğal dil ile metin araması (örn: bir blog yazısında 'yapay zeka' araması)",
      "Sayısal bir sütunda eşitlik kontrolü",
      "Tarih aralığı sorgulaması",
      "İki tablo arasında JOIN işlemi"
    ],
    optionReasons: [
      "Doğru! FULLTEXT INDEX, metin içeriğinde kelime bazlı arama için optimize edilmiştir.",
      "Sayısal eşitlik kontrolü için B-Tree indeksi yeterlidir.",
      "Tarih aralığı sorguları B-Tree indeksi ile yapılır.",
      "JOIN işlemleri için normal B-Tree indeksi kullanılır."
    ],
    answer: 0,
    explanation: "FULLTEXT INDEX, büyük metin alanlarında (TEXT, VARCHAR) kelime bazlı arama yapmak için tasarlanmıştır. MATCH ... AGAINST söz dizimi ile kullanılır."
  },
  {
    id: 100,
    category: "index",
    type: "choice",
    question: "MySQL 8.0'da eklenen 'Invisible Index' özelliğinin amacı nedir?",
    options: [
      "Indeksi silmeden optimizer'dan gizleyerek performans etkisini test etmek",
      "Indeksi şifrelemek ve güvenliğini artırmak",
      "Indeksi yalnızca belirli kullanıcılara görünür kılmak",
      "Indeksi otomatik olarak sıkıştırmak"
    ],
    optionReasons: [
      "Doğru! Invisible index, indeksi silmeden performans etkisini güvenle test etmeyi sağlar.",
      "Invisible index şifreleme ile ilgili değildir.",
      "Kullanıcı bazlı erişim kontrolü ile ilgisi yoktur.",
      "Sıkıştırma özelliği ile ilgisi yoktur."
    ],
    answer: 0,
    explanation: "Invisible Index, indeksi silmeden optimizer'ın görmezden gelmesini sağlar. Indeksi kaldırmanın etkisini güvenle test edebilir, sorun olursa hızlıca VISIBLE yapabilirsiniz."
  }
];

const questionsDers9 = [
// ===== KATEGORİ I: T-SQL VE TRANSACTIONS (1-20) =====
  {
    id: 1,
    category: "tsql",
    type: "choice",
    question: "Aşağıdaki SQL kodunun çalıştırılması durumunda hesaplar tablosundaki verilerin son durumu ne olur? (İşlem öncesinde Ali'nin bakiyesi 3000'dir).",
    snippet: "START TRANSACTION;\nUPDATE hesaplar SET bakiye = bakiye - 1000 WHERE musteri = 'Ali';\nROLLBACK;",
    options: [
      "Ali'nin bakiyesi 2000 olur ve değişiklik kalıcı hale gelir.",
      "Ali'nin bakiyesi 3000 olarak kalır, değişiklik geri alınır.",
      "Kod hata verir çünkü ROLLBACK komutu START TRANSACTION ile kullanılamaz.",
      "Ali'nin bakiyesi 0 olur."
    ],
    optionReasons: [
      "Yanlış. Değişiklik kalıcı hale gelmez çünkü COMMIT yerine ROLLBACK yapılmıştır.",
      "Doğru! ROLLBACK komutu işlem içindeki tüm değişiklikleri geri alır.",
      "Yanlış. ROLLBACK komutu TRANSACTION ile birlikte kullanılan temel bir komuttur.",
      "Yanlış. Bakiye 3000 olarak kalır."
    ],
    answer: 1,
    explanation: "ROLLBACK komutu, transaction (işlem) başladıktan sonra yapılan tüm değişiklikleri iptal ederek veritabanını işlem öncesi durumuna geri döndürür."
  },
  {
    id: 2,
    category: "tsql",
    type: "choice",
    question: "Veri tabanında transaction (işlem) kavramı en doğru şekilde nasıl tanımlanır?",
    options: [
      "Bir veri tabanında tablo oluşturma komutudur.",
      "Veri tabanını yedekleme işlemidir.",
      "Bir veya daha fazla SQL ifadesinden oluşan ve bir bütün olarak çalışan SQL kod bloğudur.",
      "Veri tabanı sunucusunu başlatan komuttur."
    ],
    optionReasons: [
      "Yanlış. Tablo oluşturma DDL komutudur.",
      "Yanlış. Yedekleme (backup) farklı bir yönetimsel işlemdir.",
      "Doğru! Transaction, birden fazla sorgunun tek bir mantıksal işlem birimi olarak bütün halinde çalışmasını sağlar.",
      "Yanlış. Sunucu başlatma işlemi veritabanı dışı bir sistem komutudur."
    ],
    answer: 2,
    explanation: "Transaction (İşlem-Faaliyet), bir veya daha fazla SQL sorgusundan meydana gelen, sistemin veri bütünlüğünü korumak adına tüm adımları tek bir adım gibi çalıştırdığı kod bloğudur."
  },
  {
    id: 3,
    category: "tsql",
    type: "choice",
    question: "MySQL veri tabanı yönetim sisteminde transaction (işlem) desteği almak için hangi depolama motoru (storage engine) tercih edilmelidir?",
    options: [
      "MyISAM",
      "InnoDB",
      "Memory",
      "CSV"
    ],
    optionReasons: [
      "Yanlış. MyISAM depolama motoru transaction yapısını desteklemez.",
      "Doğru! InnoDB, MySQL'de transaction desteği ve yabancı anahtar (FK) kısıtlamalarını tam olarak destekleyen motordur.",
      "Yanlış. Memory geçici veriler için kullanılır ve transaction desteği tam değildir.",
      "Yanlış. CSV metin tabanlı basit depolama yapar, transaction desteklemez."
    ],
    answer: 1,
    explanation: "MySQL'de transaction desteği için varsayılan ve önerilen motor InnoDB'dir. MyISAM depolama motorunun transaction desteği yoktur."
  },
  {
    id: 4,
    category: "tsql",
    type: "choice",
    question: "Aşağıdaki transaction bloğunda birinci UPDATE işlemi başarıyla çalışmış ancak ikinci UPDATE işleminde yabancı anahtar hatası oluşmuştur. Bu durumda veri tabanının davranışı ne olur?",
    snippet: "START TRANSACTION;\nUPDATE hesaplar SET bakiye = bakiye - 500 WHERE musteri = 'Ali';\nUPDATE hesaplar SET bakiye = bakiye + 500 WHERE musteri = 'BilinmeyenMusteri'; -- (Hata Oluştu)\nCOMMIT;",
    options: [
      "Ali'nin hesabı güncellenir, diğer müşteri güncellenmez.",
      "Hata nedeniyle veri bütünlüğü gereği tüm işlemler iptal edilir ve veriler işlem öncesi durumuna geri döner.",
      "Yalnızca hata veren satır atlanır, commit başarıyla tamamlanır.",
      "Veri tabanı kilitlenir (deadlock oluşur)."
    ],
    optionReasons: [
      "Yanlış. Kısmi güncelleme transaction kurallarına aykırıdır.",
      "Doğru! Bir transaction içindeki SQL ifadelerinden biri bile hatalı olursa, o transactiondaki diğer işlemler de gerçekleştirilmez ve bütünlük sağlanır.",
      "Yanlış. Hatalı sorguya rağmen commit gerçekleşmez.",
      "Yanlış. Kilitlenme (deadlock) eşzamanlı kaynak yarışlarında olur, bu bir kısıt hatasıdır."
    ],
    answer: 1,
    explanation: "Bir transaction'daki işlemler ya hep ya hiç kuralına tabidir. 1 tanesi bile hata alırsa veri tabanı bütünlüğü korumak için değişiklikleri uygulamaz."
  },
  {
    id: 5,
    category: "tsql",
    type: "choice",
    question: "ACID özelliklerinden hangisi, bir transaction başarılı bir şekilde tamamlandığında (COMMIT edildiğinde) sistem çökse bile yapılan değişikliklerin kalıcı olacağını garanti eder?",
    options: [
      "Atomicity (Bütünlük)",
      "Consistency (Tutarlılık)",
      "Isolation (İzolasyon)",
      "Durability (Süreklilik)"
    ],
    optionReasons: [
      "Yanlış. Atomicity işlemin bölünemezliğini (ya hep ya hiç) ifade eder.",
      "Yanlış. Consistency veritabanının kurallara uygun kalmasını sağlar.",
      "Yanlış. Isolation işlemlerin paralellikte birbirini etkilememesidir.",
      "Doğru! Durability (Süreklilik), commit edilen işlemlerin kalıcı disk ortamına yazılmasını ve sistem çökmelerinde dahi kaybolmamasını garanti eder."
    ],
    answer: 3,
    explanation: "Durability (Süreklilik), işlemin başarıyla tamamlanması durumunda sonuçların kalıcı olduğunu ve elektrik kesintisi veya sistem çökmesi gibi durumlarda bile kaybolmayacağını garanti eder."
  },
  {
    id: 6,
    category: "tsql",
    type: "choice",
    question: "Transaction (İşlem) günlüklerinde yer alan ve bir işlem geri alındığında (ROLLBACK edildiğinde) eski veri değerlerini geri yüklemek için kullanılan log türü aşağıdakilerden hangisidir?",
    options: [
      "Binary Log (Binlog)",
      "Redo Log",
      "Undo Log",
      "Error Log"
    ],
    optionReasons: [
      "Yanlış. Binary Log replikasyon ve yedekleme için kullanılır.",
      "Yanlış. Redo Log disk üzerindeki yazma bütünlüğü ve çökme kurtarma için kullanılır.",
      "Doğru! Undo Log, transaction geri alındığında eski veri değerlerini yerine koymak için eski değerleri saklar.",
      "Yanlış. Error Log sistem hatalarını kaydeder."
    ],
    answer: 2,
    explanation: "Undo Log, bir transaction iptal edildiğinde (ROLLBACK) veya tutarlı okuma yapılması gerektiğinde verinin eski değerlerini saklamak için kullanılır."
  },
  {
    id: 7,
    category: "tsql",
    type: "choice",
    question: "Aşağıdaki izolasyon seviyelerinden hangisi veri tabanında en yüksek izolasyonu sağlar ancak eşzamanlı işlemleri sıraya koyduğu için performansı en çok düşüren yöntemdir?",
    options: [
      "READ UNCOMMITTED",
      "READ COMMITTED",
      "REPEATABLE READ",
      "SERIALIZABLE"
    ],
    optionReasons: [
      "Yanlış. En gevşek izolasyondur.",
      "Yanlış. Sadece commit edilmiş verileri okur, orta düzeydedir.",
      "Yanlış. MySQL'in varsayılan seviyesidir ancak en yüksek değildir.",
      "Doğru! SERIALIZABLE tüm işlemleri tamamen birbirinden izole eder, çakışmaları önlemek için okuma kilitleri kullanır ve en yavaş yöntemdir."
    ],
    answer: 3,
    explanation: "SERIALIZABLE seviyesinde paralel çalışan transactionlar sanki arka arkaya çalışıyormuş gibi (sıralı) yürütülür. En yüksek veri tutarlılığı ama en düşük performans gösteren seviyedir."
  },
  {
    id: 8,
    category: "tsql",
    type: "choice",
    question: "'Bir transaction içindeki tüm adımlar bir bütün olarak ele alınır. İşlemin bir kısmı bile başarısız olsa tüm işlem iptal edilir.' ifadesi hangi ACID kuralını açıklar?",
    options: [
      "Atomicity (Bütünlük)",
      "Consistency (Tutarlılık)",
      "Isolation (İzolasyon)",
      "Durability (Süreklilik)"
    ],
    optionReasons: [
      "Doğru! Atomicity (Bütünlük/Bölünemezlik) işlemin ya tamamen yapılmasını ya da hiç yapılmamasını garanti eder.",
      "Yanlış. Consistency verinin tutarlı durumlardan geçmesini hedefler.",
      "Yanlış. Isolation işlemlerin paralellikte birbirini etkilememesidir.",
      "Yanlış. Durability kalıcılıktır."
    ],
    answer: 0,
    explanation: "Atomicity (Bütünlük) ilkesi 'ya hepsi ya hiç' (all-or-nothing) mantığı ile çalışır. Aradaki adımlardan biri dahi başarısız olursa her şey geri alınır."
  },
  {
    id: 9,
    category: "tsql",
    type: "choice",
    question: "Veri tabanı motorunun (özellikle InnoDB) disk üzerindeki veri değişikliklerini izlemek ve sistem çökmelerinde veriyi kurtarmak (roll-forward) amacıyla kullandığı günlük dosyası hangisidir?",
    options: [
      "Undo Log",
      "Redo Log",
      "Binary Log",
      "Slow Query Log"
    ],
    optionReasons: [
      "Yanlış. Undo Log geri alma verilerini saklar.",
      "Doğru! Redo Log, henüz diske kalıcı yazılmamış commitli değişiklikleri çökme sonrası diske yazmak (kurtarmak) amacıyla tutulur.",
      "Yanlış. Binary Log mantıksal sorguları tutar, çökme kurtarmada motor düzeyinde doğrudan kullanılmaz.",
      "Yanlış. Slow Query Log yavaş sorguları loglar."
    ],
    answer: 1,
    explanation: "Redo Log, InnoDB tarafından performans amacıyla verilerin hemen diske yazılmadığı durumlarda, çökme anında veri kaybını engellemek için değişiklikleri sırayla yazdığı hızlı disk logudur."
  },
  {
    id: 10,
    category: "tsql",
    type: "choice",
    question: "Replikasyon (yedekleme/master-slave eşleme) ve veri kurtarma işlemlerinde kullanılan, veri tabanında yapılan tüm değişiklikleri sıralı olarak kaydeden mantıksal dosya hangisidir?",
    options: [
      "Undo Log",
      "Redo Log",
      "Binary Log (Binlog)",
      "Error Log"
    ],
    optionReasons: [
      "Yanlış. Undo Log yerel rollback işlemleri içindir.",
      "Yanlış. Redo Log InnoDB motorunun çökme kurtarma günlüğüdür.",
      "Doğru! Binary Log (Binlog), veri tabanında şema ve veri değiştiren tüm sorguları sıralı kaydeder. Replikasyonda slave sunucuya gönderilir.",
      "Yanlış. Error Log sistem hataları günlüğüdür."
    ],
    answer: 2,
    explanation: "Binary Log (Binlog), tüm veri/şema değişikliklerini mantıksal düzeyde kaydeder. Replikasyon (veri kopyalama) ve point-in-time kurtarma için temel kaynaktır."
  },
  {
    id: 11,
    category: "tsql",
    type: "choice",
    question: "Aşağıdaki SQL bloğunda COMMIT komutunun temel işlevi nedir?",
    snippet: "START TRANSACTION;\nUPDATE urunler SET stok = stok - 1 WHERE id = 12;\nCOMMIT;",
    options: [
      "Yapılan değişiklikleri kalıcı hale getirir.",
      "Değişiklikleri iptal edip geri alır.",
      "Sorguyu yavaşlatır ve kilidi kaldırır.",
      "Değişken tanımlamasını tamamlar."
    ],
    optionReasons: [
      "Doğru! COMMIT komutu transaction içindeki tüm güncelleme ve değişiklikleri veritabanına kalıcı olarak yazar.",
      "Yanlış. Bu işlem ROLLBACK ile yapılır.",
      "Yanlış. Kilidi kaldırır ancak asıl amacı veri kalıcılığıdır.",
      "Yanlış. Değişken tanımlamayla ilgisi yoktur."
    ],
    answer: 0,
    explanation: "COMMIT komutu, başlatılan transaction içindeki tüm başarılı SQL ifadelerinin sonucunu veritabanında kalıcı ve diğer bağlantılar tarafından görünür hale getirir."
  },
  {
    id: 12,
    category: "tsql",
    type: "choice",
    question: "READ UNCOMMITTED izolasyon seviyesinde yapılan okuma işlemlerinde ortaya çıkabilecek en belirgin tutarsızlık durumu (anomali) nedir?",
    options: [
      "Phantom Read (Hayalet Okuma)",
      "Dirty Read (Kirli Okuma - Henüz commit edilmemiş verilerin okunması)",
      "Non-repeatable Read (Tekrarlanamaz Okuma)",
      "Serialization Hatası"
    ],
    optionReasons: [
      "Yanlış. Phantom Read daha yüksek seviyelerde de görülebilir.",
      "Doğru! READ UNCOMMITTED seviyesinde, bir işlemin henüz tamamlamadığı (commit etmediği) ve belki de rollback edeceği veriler başka işlem tarafından okunabilir.",
      "Yanlış. Tekrarlanamaz okuma commit edilmiş verilerin farklı zamanlarda farklı okunmasıdır.",
      "Yanlış. Bu seviyede serialization hatası oluşmaz."
    ],
    answer: 1,
    explanation: "READ UNCOMMITTED, en düşük izolasyon seviyesidir. Başka bir transaction'ın henüz commit etmediği verilerin okunabilmesine (Dirty Read) yol açar."
  },
  {
    id: 13,
    category: "tsql",
    type: "choice",
    question: "Veri tabanında referans bütünlüğü, yabancı anahtar (Foreign Key) kısıtlamaları gibi kuralların işlem öncesi ve sonrasında korunmasını ifade eden ACID özelliği hangisidir?",
    options: [
      "Atomicity (Bütünlük)",
      "Consistency (Tutarlılık)",
      "Isolation (İzolasyon)",
      "Durability (Süreklilik)"
    ],
    optionReasons: [
      "Yanlış. Atomicity işlemin bölünemezliğini temsil eder.",
      "Doğru! Consistency (Tutarlılık), transaction öncesi ve sonrasında veri tabanının tanımlanmış tüm kurallara (FK, unique kısıtı vb.) uygun ve tutarlı olmasını sağlar.",
      "Yanlış. Isolation işlemlerin paralellikte birbirini etkilememesidir.",
      "Yanlış. Durability kalıcılıktır."
    ],
    answer: 1,
    explanation: "Consistency (Tutarlılık), işlem bittiğinde veri tabanındaki tüm bütünlük kurallarının (constraints) başarıyla doğrulandığını garanti eder. Kurallar çiğnenirse işlem otomatik iptal edilir."
  },
  {
    id: 14,
    category: "tsql",
    type: "choice",
    question: "Aynı anda çalışan birden fazla transaction'ın birbirinin ara durumlarını görmemesini ve birbirinin çalışmasına müdahale etmemesini sağlayan ACID kuralı hangisidir?",
    options: [
      "Atomicity (Bütünlük)",
      "Consistency (Tutarlılık)",
      "Isolation (İzolasyon)",
      "Durability (Süreklilik)"
    ],
    optionReasons: [
      "Yanlış. Atomicity bölünemezliktir.",
      "Yanlış. Consistency kurallara uygunluktur.",
      "Doğru! Isolation (İzolasyon), eşzamanlı yürütülen işlemlerin birbirini etkilemeden izole şekilde çalışmasını garanti eder.",
      "Yanlış. Durability kalıcılıktır."
    ],
    answer: 2,
    explanation: "Isolation (İzolasyon), işlemlerin yan etkilerini sınırlandırır. Bu özellik sayesinde işlemler birbirinin geçici durumlarını görmeden bağımsız şekilde çalışır."
  },
  {
    id: 15,
    category: "tsql",
    type: "choice",
    question: "Aşağıdaki transaction bloğu tamamlandıktan sonra urun tablosundaki 5 numaralı ürünün fiyatı ne olur? (Başlangıçta fiyat 100 TL'dir).",
    snippet: "START TRANSACTION;\nUPDATE urun SET Fiyat = 120 WHERE UrunNo = 5;\nSAVEPOINT SP1;\nUPDATE urun SET Fiyat = 150 WHERE UrunNo = 5;\nROLLBACK TO SP1;\nCOMMIT;",
    options: [
      "Ürün fiyatı 150 olur.",
      "Ürün fiyatı 120 olur.",
      "Ürün fiyatı 100 olarak kalır (değişiklikler tamamen geri alınır).",
      "Sorgu hata verir."
    ],
    optionReasons: [
      "Yanlış. 150 olan güncelleme ROLLBACK TO SP1 ile geri alınmıştır.",
      "Doğru! ROLLBACK TO SP1 komutu SP1 noktasından sonraki güncellemeyi (150) iptal eder ancak SP1 öncesindeki (120) güncellemeyi korur. COMMIT ile bu durum kalıcı olur.",
      "Yanlış. Komple rollback yapılmamıştır, sadece SP1'e dönülmüştür.",
      "Yanlış. SAVEPOINT kullanımı geçerli bir SQL sözdizimidir."
    ],
    answer: 1,
    explanation: "SAVEPOINT, transaction içinde ara geri dönüş noktaları oluşturur. ROLLBACK TO SP1 denildiğinde sadece o noktadan sonraki değişiklik iptal edilir, önceki değişiklikler COMMIT ile kalıcı olur."
  },
  {
    id: 16,
    category: "tsql",
    type: "choice",
    question: "İki veya daha fazla işlemin birbirinin kilitlediği kaynakları beklemesi sonucu ortaya çıkan ve sistemin kilitlenmesine yol açan duruma ne ad verilir?",
    options: [
      "Dirty Read",
      "Phantom Read",
      "Deadlock (Kilitlenme)",
      "Commit Failure"
    ],
    optionReasons: [
      "Yanlış. Dirty Read izolasyon seviyelerindeki bir okuma hatasıdır.",
      "Yanlış. Phantom Read aralık sorgularındaki bir veri tutarsızlığıdır.",
      "Doğru! Deadlock (Kör Kilitlenme/Kilitlenme), iki işlemin karşılıklı olarak birbirinin elindeki kilitleri beklemesi ve ikisinin de ilerleyememesi durumudur.",
      "Yanlış. Commit Failure işlem kaydedilemediğinde oluşur."
    ],
    answer: 2,
    explanation: "Deadlock, kaynakların karşılıklı kilitlenmesidir. MySQL bunu fark ettiğinde işlemlerden birini kurban seçip rollback yaparak kilidi çözer."
  },
  {
    id: 17,
    category: "tsql",
    type: "choice",
    question: "Aşağıdaki kod bloğunda yerel değişken x'in son değeri ne olur?",
    snippet: "DECLARE x INT DEFAULT 10;\nSTART TRANSACTION;\nSET x = 20;\nROLLBACK;\nSELECT x;",
    options: [
      "10 döner, çünkü rollback değişkeni de geri almıştır.",
      "20 döner, çünkü transaction geri alma işlemi bellekteki yerel değişkenleri etkilemez.",
      "NULL döner.",
      "Sorgu sentaks hatası verir."
    ],
    optionReasons: [
      "Yanlış. ROLLBACK sadece veritabanı tablolarındaki veri değişikliklerini geri alır.",
      "Doğru! ROLLBACK, veri tabanındaki tablo verilerini geri alır ancak yordam içindeki yerel değişkenlerin (DECLARE ile tanımlanan) değerlerini eski haline getirmez.",
      "Yanlış. x değişkenine SET ile atanan 20 değeri korunur.",
      "Yanlış. Kod geçerli bir mantıksal yapıdır."
    ],
    answer: 1,
    explanation: "MySQL transaction rollback mekanizması sadece disk ve tablo verilerinde etkilidir. Bellekteki yerel programlama değişkenleri (local variables) rollback'ten etkilenmez, 20 olarak kalır."
  },
  {
    id: 18,
    category: "tsql",
    type: "choice",
    question: "MySQL'de varsayılan olarak açık olan ve her bir bağımsız SQL sorgusunu kendi içinde otomatik olarak commit eden moda ne ad verilir?",
    options: [
      "AutoRollback",
      "Manual Commit",
      "Autocommit",
      "Safe Updates"
    ],
    optionReasons: [
      "Yanlış. Böyle bir mod yoktur.",
      "Yanlış. Manuel commit'te START TRANSACTION kullanmak gerekir.",
      "Doğru! Autocommit modu açıkken, START TRANSACTION demediğiniz sürece her sorgu anında veritabanına kalıcı olarak yazılır.",
      "Yanlış. Safe Updates WHERE koşulu olmayan DELETE/UPDATE engelleme ayarıdır."
    ],
    answer: 2,
    explanation: "Autocommit = 1 durumunda MySQL her sorguyu otomatik commit eder. Transaction başlatıldığında bu otomatik commit geçici olarak devre dışı bırakılır."
  },
  {
    id: 19,
    category: "tsql",
    type: "choice",
    question: "MyISAM depolama motoru kullanan bir hesaplar tablosunda aşağıdaki kod çalıştırılırsa ne olur?",
    snippet: "START TRANSACTION;\nUPDATE hesaplar SET bakiye = bakiye - 500 WHERE musteri = 'Ali'; -- (MyISAM Tablo)\nROLLBACK;",
    options: [
      "Geri alma (rollback) çalışmaz, yapılan 500 TL düşme değişikliği tabloda kalıcı olur.",
      "Bakiye başarıyla eski durumuna geri yüklenir.",
      "Sorgu çalışma anında hata verir ve hiçbir değişiklik yapmaz.",
      "Tablo otomatik olarak geçici tabloya dönüştürülür."
    ],
    optionReasons: [
      "Doğru! MyISAM depolama motoru transaction desteğine sahip değildir. START TRANSACTION veya ROLLBACK komutları hata vermez ancak sessizce yoksayılır ve UPDATE anında kalıcı olur.",
      "Yanlış. MyISAM geri almayı (rollback) desteklemez.",
      "Yanlış. Hata üretilmez, sadece işlem geri alınamaz.",
      "Yanlış. Otomatik motor dönüşümü gerçekleşmez."
    ],
    answer: 0,
    explanation: "MyISAM motoru işlemleri desteklemediği için tüm sorgular anında uygulanır. ROLLBACK komutunun bu tablo üzerinde hiçbir etkisi olmaz."
  },
  {
    id: 20,
    category: "tsql",
    type: "choice",
    question: "READ COMMITTED izolasyon seviyesinin temel işleyiş mantığı nedir?",
    options: [
      "Sorgular sadece commit edilmiş verileri okur; kirli okumaya (dirty read) izin vermez.",
      "Henüz commit edilmemiş verileri de okumaya izin verir.",
      "Aynı sorgu tekrar çalıştığında kesinlikle aynı satırların gelmesini garanti eder.",
      "Tablodaki tüm satırları paylaşımlı kilitlerle kilitler."
    ],
    optionReasons: [
      "Doğru! READ COMMITTED kirli okumayı (dirty read) engeller; sadece commit edilmiş verileri okur.",
      "Yanlış. Bu durum READ UNCOMMITTED seviyesinde olur.",
      "Yanlış. Bu tekrarlanabilir okumadır (Repeatable Read). READ COMMITTED'da non-repeatable read görülebilir.",
      "Yanlış. Bu durum SERIALIZABLE veya manuel kilitler ile olur."
    ],
    answer: 0,
    explanation: "READ COMMITTED seviyesinde sorgular sadece commit edilmiş verileri okur. Eşzamanlı başka bir işlem commit ettiği an yeni veriler okunabilir hale gelir."
  },

  // ===== KATEGORİ II: SAKLI YORDAMLAR - STORED PROCEDURE (21-50) =====
  {
    id: 21,
    category: "sp",
    type: "choice",
    question: "Veri tabanı yönetim sistemlerinde Saklı Yordam (Stored Procedure) kavramı en doğru şekilde nasıl tanımlanır?",
    options: [
      "Veri tabanında verileri depolayan özel bir tablo türüdür.",
      "Sorguları hızlandırmak için oluşturulan indekslerin bir listesidir.",
      "Veri tabanı sunucusunda derlenerek saklanan, bir isme sahip olan yöntemsel SQL kod setleridir.",
      "Kullanıcı şifrelerini şifreleyen bir güvenlik algoritmasıdır."
    ],
    optionReasons: [
      "Yanlış. Saklı yordamlar veri depolamaz, mantık yürütür.",
      "Yanlış. Bu index kavramıdır.",
      "Doğru! Saklı yordamlar, veritabanında saklanan, sunucuda çalışan ve karmaşık işlemleri tek bir isimle çağırmayı sağlayan programlardır.",
      "Yanlış. Güvenlik algoritması değildir."
    ],
    answer: 2,
    explanation: "Saklı Yordam (Stored Procedure), veritabanında saklanan ve istemciden parametreler alarak sunucu tarafında doğrudan derlenip çalıştırılan SQL kod bloklarıdır."
  },
  {
    id: 22,
    category: "sp",
    type: "choice",
    question: "Aşağıdakilerden hangisi bir saklı yordam gövdesinde tam sayı (integer) türünde bir değişkeni varsayılan değeri 10 olacak şekilde doğru tanımlar?",
    options: [
      "DECLARE sayac INT DEFAULT 10;",
      "SET sayac INT = 10;",
      "DECLARE sayac = 10 INT;",
      "CREATE sayac INT DEFAULT 10;"
    ],
    optionReasons: [
      "Doğru! MySQL saklı yordamlarında değişken tanımlama DECLARE degisken_adi tip DEFAULT varsayilan_deger; sözdizimi ile yapılır.",
      "Yanlış. SET tanımlanmış değişkenlere değer atamak için kullanılır.",
      "Yanlış. Sıralama ve atama sözdizimi hatalıdır.",
      "Yanlış. CREATE değişken tanımlamak için kullanılmaz."
    ],
    answer: 0,
    explanation: "MySQL saklı yordamlarında değişkenler DECLARE kelimesiyle tanımlanır. Tip bilgisi addan sonra gelir ve isteğe bağlı DEFAULT atanabilir."
  },
  {
    id: 23,
    category: "sp",
    type: "choice",
    question: "Aşağıdaki saklı yordam başarıyla tanımlanıp çağrılırsa çıktı ne olur?",
    snippet: "DELIMITER $$\nCREATE PROCEDURE Toplama()\nBEGIN\n    DECLARE x INT DEFAULT 5;\n    DECLARE y INT DEFAULT 12;\n    SELECT x + y AS Sonuc;\nEND $$\nDELIMITER ;",
    options: [
      "Sorgu hata verir.",
      "Sonuc kolonunda 17 değerini döndürür.",
      "Ekrana 'x + y' metnini yazdırır.",
      "Sonuc kolonunda NULL döndürür."
    ],
    optionReasons: [
      "Yanlış. Yazım kuralları MySQL standartlarına uygundur.",
      "Doğru! Değişkenler toplanarak SELECT ile ekrana 17 olarak basılır.",
      "Yanlış. Tırnak işareti olmadığı için değişkenlerin değerini toplar.",
      "Yanlış. Değişkenlerin varsayılan değerleri olduğu için NULL olamazlar."
    ],
    answer: 1,
    explanation: "Yordam çağrıldığında x (5) ve y (12) toplanır ve SELECT ifadesi çalıştırılarak Sonuc kolon başlığı altında 17 değeri döndürülür."
  },
  {
    id: 24,
    category: "sp",
    type: "choice",
    question: "Aşağıdaki kod parçasının veritabanındaki etkisi nedir?",
    snippet: "DROP PROCEDURE IF EXISTS UrunGuncelle;",
    options: [
      "UrunGuncelle adında yeni bir yordam oluşturur.",
      "Eğer varsa UrunGuncelle adındaki saklı yordamı siler.",
      "UrunGuncelle tablosunu siler.",
      "Yordamın parametre listesini sıfırlar."
    ],
    optionReasons: [
      "Yanlış. DROP silme komutudur.",
      "Doğru! DROP PROCEDURE IF EXISTS belirtilen isimdeki saklı yordamı veri tabanından tamamen kaldırır, yoksa hata üretmez.",
      "Yanlış. Tablo silmek için DROP TABLE kullanılır.",
      "Yanlış. Yordamın tamamını siler, sadece parametreleri değil."
    ],
    answer: 1,
    explanation: "DROP PROCEDURE komutu veritabanındaki saklı yordamı siler. IF EXISTS ifadesi ise belirtilen isimde bir yordam yoksa hata oluşmasını engeller."
  },
  {
    id: 25,
    category: "sp",
    type: "choice",
    question: "SiparisEkle adındaki bir saklı yordamı çalıştırmak için kullanılan doğru SQL ifadesi hangisidir?",
    options: [
      "RUN SiparisEkle;",
      "EXECUTE SiparisEkle;",
      "CALL SiparisEkle();",
      "START SiparisEkle;"
    ],
    optionReasons: [
      "Yanlış. RUN standart SQL komutu değildir.",
      "Yanlış. EXECUTE hazırlanan ifadeleri (prepared statements) çalıştırmak için kullanılır.",
      "Doğru! MySQL'de saklı yordamları çağırmak/çalıştırmak için CALL komutu kullanılır.",
      "Yanlış. START transaction başlatmak için kullanılır."
    ],
    answer: 2,
    explanation: "MySQL'de tanımlanmış saklı yordamlar CALL yordam_adi(varsa_parametreler); sözdizimi ile tetiklenir."
  },
  {
    id: 26,
    category: "sp",
    type: "choice",
    question: "Aşağıdaki kod parçasında SELECT sorgusu içindeki INTO kelimesinin işlevi nedir?",
    snippet: "DECLARE OgrAd TEXT;\nSELECT O.OgrAd INTO OgrAd FROM ogrenci AS O WHERE O.OgrNo = 11815;",
    options: [
      "Veri tabanına yeni bir öğrenci kaydı ekler (INSERT).",
      "Sorgudan dönen öğrenci adı bilgisini OgrAd isimli yerel değişkene atar.",
      "OgrAd kolon adını değiştirir.",
      "Sorgu sonucunu yeni bir tabloya kopyalar."
    ],
    optionReasons: [
      "Yanlış. Kayıt ekleme INSERT INTO ile olur, bu SELECT INTO'dur.",
      "Doğru! SELECT ... INTO sorgudan dönen tekil veriyi declare edilmiş yerel değişkene atamak amacıyla kullanılır.",
      "Yanlış. Kolon adı değiştirmek ALTER TABLE ile olur.",
      "Yanlış. SELECT INTO yerel değişken ataması yapar, MySQL'de tablo oluşturmaz."
    ],
    answer: 1,
    explanation: "SELECT ... INTO ifadesi, sorgu sonucunu bir değişkene atar. Sorgunun tam olarak tek bir satır döndürmesi beklenir, aksi halde hata alınabilir."
  },
  {
    id: 27,
    category: "sp",
    type: "choice",
    question: "CALL UsAl(3, 4) ifadesi çalıştırıldığında çıktıda ne görünür?",
    snippet: "CREATE PROCEDURE UsAl(P_Taban INT, P_Us INT)\nBEGIN\n    SELECT POWER(P_Taban, P_Us) AS Sonuc;\nEND;\n\n-- Çağrı:\nCALL UsAl(3, 4);",
    options: [
      "12",
      "7",
      "64",
      "81"
    ],
    optionReasons: [
      "Yanlış. POWER çarpım değil üs alma fonksiyonudur.",
      "Yanlış. Toplamları değildir.",
      "Yanlış. 4'ün küpü değil 3'ün 4. kuvvetidir.",
      "Doğru! POWER(3, 4) işlemi 3*3*3*3 = 81 sonucunu döndürür."
    ],
    answer: 3,
    explanation: "P_Taban parametresi 3, P_Us parametresi 4 olarak alınır. POWER(3, 4) fonksiyonu 81 sonucunu döndürür."
  },
  {
    id: 28,
    category: "sp",
    type: "choice",
    question: "Aşağıdaki kod çalıştırıldıktan sonra mesaj değişkeninin son değeri ne olur?",
    snippet: "DECLARE not_degeri INT DEFAULT 75;\nDECLARE mesaj VARCHAR(20);\n\nIF not_degeri >= 85 THEN\n    SET mesaj = 'Pekiyi';\nELSEIF not_degeri >= 70 THEN\n    SET mesaj = 'İyi';\nELSE\n    SET mesaj = 'Geçer';\nEND IF;",
    options: [
      "Pekiyi",
      "İyi",
      "Geçer",
      "NULL"
    ],
    optionReasons: [
      "Yanlış. Koşul sağlanmaz.",
      "Doğru! not_degeri 75'tir, ilk koşul (>=85) yanlış olduğundan ikinci koşula (>=70) bakılır. 75 >= 70 koşulu sağlandığı için mesaj 'İyi' olur.",
      "Yanlış. ELSE bloğuna girilmez çünkü ELSEIF koşulu sağlanmıştır.",
      "Yanlış. mesaj değişkenine atama yapılmıştır."
    ],
    answer: 1,
    explanation: "Koşullar sırayla kontrol edilir. not_degeri (75), 70'ten büyük veya eşit olduğu için ELSEIF bloğu çalışır ve değişken 'İyi' değerini alır."
  },
  {
    id: 29,
    category: "sp",
    type: "choice",
    question: "Saklı yordam parametre isimlendirmelerinde P_ (örneğin P_UrunNo) ön ekinin kullanılmasının tavsiye edilmesinin temel sebebi nedir?",
    snippet: "CREATE PROCEDURE FiyatBul(P_UrunNo INT)",
    options: [
      "Parametrenin birincil anahtar (Primary Key) olduğunu belirtmek.",
      "Parametre isimlerinin, sorgu içindeki tablo sütun isimleriyle çakışmasını engellemek.",
      "Değişkenin private (özel) olduğunu belirtmek.",
      "Sorguyu hızlandırmak."
    ],
    optionReasons: [
      "Yanlış. Birincil anahtar kısıtı ile ilgisi yoktur.",
      "Doğru! Parametre ismi ile sütun ismi aynı olursa MySQL hangisini seçeceğini şaşırır ve beklenmedik sonuçlar veya hatalar üretir. P_ ön eki bunu önler.",
      "Yanlış. SQL'de private değişken kavramı bu şekilde tanımlanmaz.",
      "Yanlış. Bu sadece bir isimlendirme standardıdır, performansa etkisi yoktur."
    ],
    answer: 1,
    explanation: "Sorgularda parametre adı tablo kolon adıyla aynı olursa isim çakışması (naming collision) yaşanır. P_ ön eki bu karışıklığı önlemek için en iyi yöntemdir."
  },
  {
    id: 30,
    category: "sp",
    type: "choice",
    question: "MySQL komut satırı aracında saklı yordam tanımlarken DELIMITER komutunun kullanılmasının temel amacı nedir?",
    options: [
      "Sorguların sunucu tarafında daha hızlı çalışmasını sağlamak.",
      "Yordam gövdesi içindeki ifadeleri bitiren noktalı virgül (;) karakterlerinin, yordam tanımını erkenden sonlandırmasını engellemek.",
      "Veri tabanını güvenli moda almak.",
      "Sorgulardaki tabloları birleştirmek."
    ],
    optionReasons: [
      "Yanlış. DELIMITER'ın performansla ilgisi yoktur.",
      "Doğru! Gövde içindeki her noktalı virgül (;) normalde MySQL istemcisi için sorgu sonu demektir. DELIMITER $$ diyerek bitiş karakterini $$ yaparız, böylece yordam içindeki noktalı virgüller hata vermeden okunur.",
      "Yanlış. Güvenlikle ilgisi yoktur.",
      "Yanlış. Tablo birleştirme JOIN ile yapılır."
    ],
    answer: 1,
    explanation: "DELIMITER, MySQL istemcisinin sorgu bitiş işaretçisini değiştirmesini sağlar. Böylece gövdedeki ';' karakterleri yordamı bölmez, yordam tek parça halinde sunucuya iletilir."
  },
  {
    id: 31,
    category: "sp",
    type: "choice",
    question: "Aşağıdaki kod parçasının amacı nedir?",
    snippet: "UPDATE urun SET Fiyat = P_Fiyat WHERE UrunNo = P_UrunNo;\nIF ROW_COUNT() > 0 THEN\n    SELECT 1 AS DURUM;\nELSE\n    SELECT 0 AS DURUM;\nEND IF;",
    options: [
      "Fiyatı güncellenen tüm ürünlerin listesini ekrana getirmek.",
      "Güncellenmeye çalışılan ürünün veri tabanında var olup olmadığını (veya fiyatın değişip değişmediğini) kontrol ederek durum geri bildirimi yapmak.",
      "Hatalı satırları otomatik olarak silmek.",
      "Veri tabanını yedeklemek."
    ],
    optionReasons: [
      "Yanlış. Ekrana ürün listesi getirilmez.",
      "Doğru! ROW_COUNT() fonksiyonu etkilenen satır sayısını döner. > 0 olması en az 1 satırın güncellendiğini doğrular, aksi takdirde ürün bulunamamıştır veya fiyat aynı kalmıştır.",
      "Yanlış. Silme işlemi yapılmamaktadır.",
      "Yanlış. Yedekleme ile ilgisi yoktur."
    ],
    answer: 1,
    explanation: "ROW_COUNT(), son güncelleme sorgusunun kaç satırı değiştirdiğini kontrol eder. Etkilenen satır yoksa (ürün yoksa) 0 durumu dönülerek istemciye geri bildirim verilir."
  },
  {
    id: 32,
    category: "sp",
    type: "choice",
    question: "Aşağıdakilerden hangisi saklı yordamların (Stored Procedure) sağladığı avantajlardan biri değildir?",
    options: [
      "Sorguların sunucu tarafında önceden derlenmesi sayesinde yüksek performans.",
      "İş mantığının merkezi olarak yönetilmesi ve kodun yeniden kullanılabilmesi.",
      "Kullanıcılara doğrudan tablolara erişim vermeden sadece yordamı çalıştırma yetkisi vererek güvenliği artırması.",
      "Veri tabanının farklı RDBMS yazılımlarına (örn. MySQL'den Oracle'a) taşınabilirliğini (Portability) kolaylaştırması."
    ],
    optionReasons: [
      "Yanlış. Bu önemli bir performans avantajıdır.",
      "Yanlış. Kod tekrarını azalttığı için avantajdır.",
      "Yanlış. Güvenlik için büyük bir avantajdır.",
      "Doğru! Saklı yordamlar RDBMS'e özgü SQL diyalektleri (T-SQL, PL/SQL vb.) içerdiğinden taşınabilirlikleri oldukça zordur. Bu bir dezavantajdır."
    ],
    answer: 3,
    explanation: "Saklı yordamlar taşınabilirliği zorlaştırır çünkü her veritabanı yönetim sisteminin procedural SQL dili (MySQL, SQL Server, Oracle) farklılık gösterir."
  },
  {
    id: 33,
    category: "sp",
    type: "choice",
    question: "Aşağıdaki saklı yordam derlenmeye çalışıldığında hata vermektedir. Hatanın sebebi nedir?",
    snippet: "CREATE PROCEDURE TestProc()\nDECLARE x INT;\nBEGIN\n    SET x = 100;\nEND;",
    options: [
      "DECLARE ifadesi BEGIN ... END bloğunun dışında tanımlanmıştır.",
      "SET yerine INTO kullanılmalıdır.",
      "TestProc parantezleri kaldırılmalıdır.",
      "Değişken ismi x olamaz."
    ],
    optionReasons: [
      "Doğru! MySQL'de DECLARE ile tanımlanan yerel değişkenler mutlaka BEGIN ... END bloğunun içinde ve en başta yer almalıdır.",
      "Yanlış. SET yerel değişkenlere değer atamak için uygundur.",
      "Yanlış. Parametresiz olsa da parantezler geçerlidir.",
      "Yanlış. x geçerli bir değişken ismidir."
    ],
    answer: 0,
    explanation: "MySQL saklı yordamlarında tüm DECLARE tanımlamaları BEGIN kelimesinden sonra ve diğer SQL sorgularından önce gelmelidir. Aksi takdirde sentaks hatası oluşur."
  },
  {
    id: 34,
    category: "sp",
    type: "choice",
    question: "Aşağıdaki saklı yordam çağrıldığında SELECT ad sorgusunun çıktısı ne olur?",
    snippet: "CREATE PROCEDURE DegiskenTest()\nBEGIN\n    DECLARE ad VARCHAR(20);\n    SELECT ad;\nEND;",
    options: [
      "Boşluk karakteri ('')",
      "Hata verir, çünkü değişkene değer atanmamıştır.",
      "NULL",
      "0"
    ],
    optionReasons: [
      "Yanlış. Boşluk farklı bir değerdir.",
      "Yanlış. Değer atanmamış olması hata sebebi değildir.",
      "Doğru! MySQL'de DEFAULT değeri belirtilmeden tanımlanan değişkenlerin varsayılan değeri NULL olur.",
      "Yanlış. Sayısal 0 değeri atanmaz."
    ],
    answer: 2,
    explanation: "Bir değişkene başlangıç değeri (DEFAULT) verilmezse, o değişken otomatik olarak NULL değeri ile başlatılır."
  },
  {
    id: 35,
    category: "sp",
    type: "choice",
    question: "Aşağıdaki saklı yordamda HarfNotu(85) çağrısı yapılırsa hangi çıktı üretilir?",
    snippet: "CREATE PROCEDURE HarfNotu(P_Puan INT)\nBEGIN\n    SELECT CASE \n        WHEN P_Puan >= 90 THEN 'AA'\n        WHEN P_Puan >= 80 THEN 'BA'\n        ELSE 'FF'\n    END AS Notu;\nEND;",
    options: [
      "AA",
      "BA",
      "FF",
      "Sorgu hata verir."
    ],
    optionReasons: [
      "Yanlış. Koşul sağlanmaz (85 < 90).",
      "Doğru! 85 >= 80 koşulu doğru olduğu için CASE ifadesi 'BA' sonucunu üretir.",
      "Yanlış. ELSE durumuna düşülmez.",
      "Yanlış. CASE-WHEN yordam içinde geçerli bir yapıdır."
    ],
    answer: 1,
    explanation: "CASE yapısında koşullar yukarıdan aşağıya taranır. P_Puan 85 olduğundan ilk uyan koşul olan 'P_Puan >= 80' tetiklenir ve 'BA' döner."
  },
  {
    id: 36,
    category: "sp",
    type: "choice",
    question: "Bir saklı yordam gövdesinde DECLARE ile tanımlanan yerel değişkenlerin geçerlilik alanı (scope) nedir?",
    options: [
      "Tüm veri tabanı genelinde her yerden erişilebilir.",
      "Yalnızca tanımlandığı BEGIN ... END bloğu ve bu bloğun altındaki iç bloklar içinde geçerlidir.",
      "Oturum (session) açık kaldığı sürece her sorguda geçerlidir.",
      "Sapiens tablolarında geçerlidir."
    ],
    optionReasons: [
      "Yanlış. Global değişkenler farklıdır.",
      "Doğru! Yerel değişkenler sadece tanımlandıkları BEGIN-END bloğunda yaşarlar. Blok dışına çıkıldığında bellekten silinirler.",
      "Yanlış. Oturum değişkenleri @ işaretiyle tanımlanır.",
      "Yanlış. Tablo ile değişken kapsamının ilgisi yoktur."
    ],
    answer: 1,
    explanation: "Yerel değişkenler blok seviyesinde kapsama (block-scope) sahiptir. Tanımlandıkları BEGIN...END bloğunun dışında erişilemezler."
  },
  {
    id: 37,
    category: "sp",
    type: "choice",
    question: "Aşağıdaki ScopeTest yordamı çağrıldığında ekrana sırasıyla hangi iki değer basılır?",
    snippet: "CREATE PROCEDURE ScopeTest()\nBEGIN\n    DECLARE x INT DEFAULT 10;\n    BEGIN\n        DECLARE x INT DEFAULT 20;\n        SELECT x;\n    END;\n    SELECT x;\nEND;",
    options: [
      "10, 10",
      "20, 20",
      "20, 10",
      "10, 20"
    ],
    optionReasons: [
      "Yanlış. İç bloktaki x değeri 20'dir.",
      "Yanlış. Dış bloktaki x değeri 10'dur.",
      "Doğru! İlk SELECT iç bloktadır ve yerel x'i (20) basar. İç blok bittiğinde o x ölür. İkinci SELECT dış bloktadır ve dıştaki x'i (10) basar.",
      "Yanlış. Sıralama terstir."
    ],
    answer: 2,
    explanation: "İçteki blok, dıştaki değişkeni gölgeler (shadowing). İç bloktaki x=20 değeri yazılır, blok bittikten sonra dıştaki x=10 değeri yazdırılır."
  },
  {
    id: 38,
    category: "sp",
    type: "choice",
    question: "Aşağıdaki saklı yordam tanımlandıktan sonra CALL MesajYaz() (parametresiz) şeklinde çağrılırsa ne gerçekleşir?",
    snippet: "CREATE PROCEDURE MesajYaz(P_Ad VARCHAR(20))\nBEGIN\n    SELECT CONCAT('Merhaba ', P_Ad);\nEND;",
    options: [
      "Ekrana 'Merhaba NULL' çıktısı basılır.",
      "MySQL çalışma zamanı hatası verir çünkü parametre tanımlı yordam uygun parametre gönderilmeden çağrılamaz.",
      "Boş bir sonuç tablosu döner.",
      "Sadece 'Merhaba ' yazar."
    ],
    optionReasons: [
      "Yanlış. MySQL eksik parametre ile çağırmaya izin vermez.",
      "Doğru! MySQL'de saklı yordamlar tanımlanan parametre sayısı ile tam uyuşacak şekilde çağrılmalıdır. Eksik parametre gönderilirse hata oluşur.",
      "Yanlış. Sorgu hiç çalıştırılmaz, derleme/çağrı hatası verir.",
      "Yanlış. Çalışma zamanı hatası alınır."
    ],
    answer: 1,
    explanation: "MySQL procedural yapısında parametrelerin varsayılan değeri olamaz. Bu nedenle tanımlanan parametre sayısı kadar argüman gönderilmesi zorunludur."
  },
  {
    id: 39,
    category: "sp",
    type: "choice",
    question: "Saklı yordam parametre tanımındaki INOUT anahtar kelimesinin görevi nedir?",
    snippet: "CREATE PROCEDURE DegerArtir(INOUT P_Sayi INT)\nBEGIN\n    SET P_Sayi = P_Sayi + 10;\nEND;",
    options: [
      "Parametrenin sadece dışarıdan değer kabul edebileceğini (girdi) belirtir.",
      "Parametrenin sadece yordam dışına değer aktarabileceğini (çıktı) belirtir.",
      "Parametrenin hem dışarıdan değer alabileceğini hem de yapılan değişikliğin çağıran oturumdaki değişkene geri yazılacağını belirtir.",
      "Parametrenin null olamayacağını belirtir."
    ],
    optionReasons: [
      "Yanlış. Bu IN parametresinin göredir.",
      "Yanlış. Bu OUT parametresinin görevidir.",
      "Doğru! INOUT parametreleri çift yönlü çalışır; girdi olarak alınan değişken yordam içinde güncellenip çağırana geri gönderilir.",
      "Yanlış. Null olabilirlikle ilgisi yoktur."
    ],
    answer: 2,
    explanation: "INOUT parametre tipi, hem veri girişi hem de veri çıkışı için aynı değişkenin kullanılmasını sağlar. Çağırırken bir kullanıcı değişkeni (örn: @sayi) gönderilmelidir."
  },
  {
    id: 40,
    category: "sp",
    type: "choice",
    question: "Veri tabanında kayıtlı bulunan HarfNotuHesapla isimli saklı yordamı oluşturan orijinal CREATE PROCEDURE sorgusunu (kaynak kodunu) görmek için hangi komut çalıştırılmalıdır?",
    options: [
      "VIEW PROCEDURE HarfNotuHesapla;",
      "DISPLAY CODE HarfNotuHesapla;",
      "SHOW CREATE PROCEDURE HarfNotuHesapla;",
      "SELECT * FROM procedures WHERE name = 'HarfNotuHesapla';"
    ],
    optionReasons: [
      "Yanlış. Sentaks hatası verir.",
      "Yanlış. Geçerli bir SQL komutu değildir.",
      "Doğru! SHOW CREATE PROCEDURE komutu yordamın şemasını ve oluşturulma kaynak kodunu gösterir.",
      "Yanlış. Sistem tablolarına sorgu atmak veritabanına göre değişir."
    ],
    answer: 2,
    explanation: "MySQL'de saklı yordamların gövdesini ve tam tanım kodunu görüntülemek için SHOW CREATE PROCEDURE yordam_adi; komutu kullanılır."
  },
  {
    id: 41,
    category: "sp",
    type: "choice",
    question: "Aşağıdaki saklı yordam tanımında boş bırakılan yerlere sırasıyla hangi anahtar kelimeler gelmelidir?",
    snippet: "CREATE PROCEDURE BilgiYaz()\n______\n    SELECT 'İşlem Başarılı';\n______",
    options: [
      "START - COMMIT",
      "BEGIN - END",
      "DO - DONE",
      "START TRANSACTION - ROLLBACK"
    ],
    optionReasons: [
      "Yanlış. START-COMMIT transaction sınırlarıdır, yordam gövdesi için kullanılmaz.",
      "Doğru! Saklı yordamların gövdesi BEGIN anahtar kelimesiyle başlar ve END anahtar kelimesiyle son bulur.",
      "Yanlış. Döngülerle veya yordam gövdesiyle uyuşmaz.",
      "Yanlış. İşlemi geri alma yapısıdır."
    ],
    answer: 1,
    explanation: "MySQL saklı yordam tanımlarında gövdeyi sarmalayan bloklar BEGIN ve END kelimeleridir."
  },
  {
    id: 42,
    category: "sp",
    type: "choice",
    question: "Saklı yordam içinde SELECT sorgusuyla tablodan veri okurken, sütun isimleriyle yerel değişken isimlerinin çakışma riskini engellemek için en iyi tasarım yöntemi hangisidir?",
    snippet: "DECLARE bakiye INT;\nSELECT bakiye INTO bakiye FROM hesaplar; -- (Çakışma Riski)",
    options: [
      "Yerel değişkenlere veya parametrelere ayırt edici bir ön ek (v_ veya P_ gibi) eklemek ve sorgularda tablo takma adları (alias) kullanmak.",
      "Değişken ismini kolon ismiyle tamamen aynı tutmak.",
      "Sorguyu ikiye bölerek geçici tabloya aktarmak.",
      "Sorgularda değişken kullanmaktan kaçınmak."
    ],
    optionReasons: [
      "Doğru! Değişkenlere v_bakiye gibi ön ekler verilerek sütun adı olan bakiye ile çakışması kesin olarak engellenir.",
      "Yanlış. Aynı isim tutulursa çakışma oluşur.",
      "Yanlış. Geçici tablo performansı düşürür ve gereksizdir.",
      "Yanlış. Değişken kullanmamak yordamın mantığına aykırıdır."
    ],
    answer: 0,
    explanation: "İsimlendirme çakışmalarını önlemek için değişkenlere ön ekler koymak (örn: v_ad) ve sorgularda tablo kolonlarını alias ile (örn: O.Ad) belirtmek iyi bir programlama standardıdır."
  },
  {
    id: 43,
    category: "sp",
    type: "choice",
    question: "Aşağıdaki saklı yordam CALL Kontrol(3) komutuyla çalıştırılırsa çıktı olarak ne döner?",
    snippet: "CREATE PROCEDURE Kontrol(P_Deger INT)\nBEGIN\n    CASE P_Deger\n        WHEN 1 THEN SELECT 'Düşük';\n        WHEN 2 THEN SELECT 'Orta';\n        ELSE SELECT 'Yüksek';\n    END CASE;\nEND;",
    options: [
      "Düşük",
      "Orta",
      "Yüksek",
      "Sentaks hatası verir."
    ],
    optionReasons: [
      "Yanlış. Koşul sağlanmaz.",
      "Yanlış. Koşul sağlanmaz.",
      "Doğru! P_Deger 3 olduğundan WHEN 1 ve WHEN 2 durumlarına uymaz ve ELSE durumunda çalışan 'Yüksek' seçeneği yazdırılır.",
      "Yanlış. Geçerli bir CASE yapısıdır."
    ],
    answer: 2,
    explanation: "CASE-WHEN yapısındaki ELSE ifadesi, hiçbir WHEN şartı sağlanmadığında devreye giren varsayılan durumdur. 3 değeri ELSE kolunu tetikler."
  },
  {
    id: 44,
    category: "sp",
    type: "choice",
    question: "Aşağıdaki saklı yordam kodu derlenmeye çalışıldığında hata almaktadır. Sebebi nedir?",
    snippet: "CREATE PROCEDURE Deneme()\nBEGIN\n    DECLARE x INT DEFAULT 10\n    SELECT x\nEND",
    options: [
      "DECLARE ve SELECT satırlarının sonuna noktalı virgül (;) konulmamıştır.",
      "Gövdede SELECT kullanılamaz.",
      "BEGIN-END blokları arasında değişken tanımlanamaz.",
      "Değişkene başlangıç değeri (DEFAULT) verilemez."
    ],
    optionReasons: [
      "Doğru! Saklı yordam gövdesi içindeki her bir SQL ve DECLARE satırı noktalı virgül (;) ile sonlandırılmalıdır. Aksi halde parser hata verir.",
      "Yanlış. SELECT veri döndürmek için sıkça kullanılır.",
      "Yanlış. Değişkenler sadece BEGIN-END arasında tanımlanabilir.",
      "Yanlış. DEFAULT kullanımı tamamen yasaldır."
    ],
    answer: 0,
    explanation: "MySQL procedural bloklarında her bir iç komutun sonuna ';' konulması zorunludur. Noktalı virgüller eksik olduğunda söz dizimi hatası alınır."
  },
  {
    id: 45,
    category: "sp",
    type: "choice",
    question: "Olmayan bir ürünü güncelleyen aşağıdaki SQL ifadesi çalıştırıldıktan sonra ROW_COUNT() değeri ne olur?",
    snippet: "UPDATE urun SET Fiyat = 20 WHERE UrunNo = 9999; -- (9999 numaralı ürün tabloda yoktur)\nSELECT ROW_COUNT();",
    options: [
      "1",
      "9999",
      "0 (veya etkilenen satır yoksa -1)",
      "Hata döner."
    ],
    optionReasons: [
      "Yanlış. Güncellenen satır yoktur.",
      "Yanlış. Ürün numarası dönülmez.",
      "Doğru! UPDATE sorgusu hiçbir satırı değiştirmediği için ROW_COUNT() fonksiyonu 0 veya hata durumuna göre -1 değerini döndürür.",
      "Yanlış. Hata alınmaz, sadece 0 etkilenen satır bildirilir."
    ],
    answer: 2,
    explanation: "ROW_COUNT() fonksiyonu, etkilenen satır sayısını verir. Koşul uymadığı için hiçbir satır güncellenmemiştir, dolayısıyla sonuç 0'dır."
  },
  {
    id: 46,
    category: "sp",
    type: "choice",
    question: "Aşağıdaki yerel değişkenlere değer atama sorgusunun işleyişi hakkında hangisi doğrudur?",
    snippet: "DECLARE v_ad VARCHAR(30);\nDECLARE v_soyad VARCHAR(30);\nSELECT ad, soyad INTO v_ad, v_soyad FROM musteriler WHERE id = 1;",
    options: [
      "Hata verir, INTO ile sadece tek bir sütun ve tek bir değişken atanabilir.",
      "musteriler tablosundan id = 1 olan kaydın ad ve soyad değerlerini sırasıyla v_ad ve v_soyad değişkenlerine atar.",
      "Tabloya yeni kolonlar ekler.",
      "v_ad ve v_soyad değerlerini birleştirip tek bir kolon yapar."
    ],
    optionReasons: [
      "Yanlış. Birden fazla değişken virgülle ayrılarak atanabilir.",
      "Doğru! SELECT ... INTO yapısında birden fazla sütun, aynı sırayla virgülle ayrılmış değişkenlere atanabilir.",
      "Yanlış. Tablo şemasını değiştirmez.",
      "Yanlış. Birleştirme işlemi yapmaz."
    ],
    answer: 1,
    explanation: "Çoklu kolon ataması SELECT col1, col2 INTO var1, var2 şeklinde yapılabilir. Değişken sırası ve veri tipleri sütunlarla uyuşmalıdır."
  },
  {
    id: 47,
    category: "sp",
    type: "choice",
    question: "Aşağıdaki IF-THEN bloğunun yazımı hakkında ne söylenebilir?",
    snippet: "IF x > 10 THEN\n    SET x = x - 5;\n    INSERT INTO log (msg) VALUES ('Azaltıldı');\nEND IF;",
    options: [
      "Doğrudur, IF-THEN ve END IF arasında birden fazla SQL ifadesi çalıştırılabilir.",
      "Hatalıdır, birden fazla ifade çalıştırılacaksa IF içinde yeni bir BEGIN...END bloğu açılmalıdır.",
      "Sadece ilk satır çalışır, INSERT satırı hata verir.",
      "IF içinde INSERT veya UPDATE sorguları kullanılamaz."
    ],
    optionReasons: [
      "Doğru! MySQL'de IF-THEN yapısı kendi içinde bir blok oluşturur, END IF'e kadar olan tüm ifadeler sırayla çalıştırılır. Ayrı bir BEGIN-END'e gerek yoktur.",
      "Yanlış. Ayrı bir BEGIN-END bloğuna gerek yoktur.",
      "Yanlış. Koşul uyduğunda iki satır da çalışır.",
      "Yanlış. Koşula bağlı olarak her türlü DML çalıştırılabilir."
    ],
    answer: 0,
    explanation: "MySQL procedural dilinde IF-THEN ... END IF aralığı, birden çok ifadeyi sarmalayabilir. Her bir komut sonuna ';' konarak alt alta yazilebilir."
  },
  {
    id: 48,
    category: "sp",
    type: "choice",
    question: "MySQL saklı yordamlarında yerel değişken (DECLARE) ve cursor (DECLARE CURSOR) tanımlamalarının sıralaması nasıl olmalıdır?",
    options: [
      "İkisi de karışık sırada tanımlanabilir.",
      "Yerel değişken tanımlamaları, cursor ve handler tanımlamalarından önce yer almalıdır.",
      "Cursor tanımlamaları her zaman değişkenlerden önce olmalıdır.",
      "Cursor'lar gövdenin en sonunda tanımlanmalıdır."
    ],
    optionReasons: [
      "Yanlış. Belirli bir sıralama kuralı vardır.",
      "Doğru! MySQL kurallarına göre sıralama: 1. Değişkenler (Variables), 2. Cursor'lar, 3. Handler'lar (Hata yakalayıcılar) şeklinde olmalıdır.",
      "Yanlış. Cursor'dan önce değişkenler gelmelidir.",
      "Yanlış. Gövdenin sonunda değil, BEGIN'den hemen sonra değişkenlerden sonra tanımlanırlar."
    ],
    answer: 1,
    explanation: "MySQL'de BEGIN altındaki bildirimlerin sırası sabittir: Değişkenler -> Cursor'lar -> Koşullar (Conditions) -> Handler'lar."
  },
  {
    id: 49,
    category: "sp",
    type: "choice",
    question: "Saklı yordam içinde SET ile SELECT ... INTO yöntemleri arasındaki temel kullanım farkı nedir?",
    options: [
      "SET genellikle doğrudan hesaplanmış veya sabit değerleri atamak için, SELECT ... INTO ise veri tabanındaki tablolardan dönen verileri değişkenlere atamak için kullanılır.",
      "Aralengkapıyla aynıdır.",
      "SELECT ... INTO sadece yerel değişkenleri silmek için kullanılır.",
      "SET sorgu tabanlı çalışırken, SELECT ... INTO sadece matematiksel işlem yapar."
    ],
    optionReasons: [
      "Doğru! SET doğrudan değer atamalarında (SET x = 5), SELECT INTO ise sorgulardan dönen değerleri değişkene aktarmada kullanılır.",
      "Yanlış. Kullanım senaryoları ve sözdizimleri farklıdır.",
      "Yanlış. Değişken silme gibi bir işlevleri yoktur.",
      "Yanlış. İşlev açıklamaları terstir."
    ],
    answer: 0,
    explanation: "SET, x = x + 1 veya x = 'Ali' gibi basit veya fonksiyonel değer atamalarında kullanılır. SELECT INTO ise tablodaki sütun değerini değişkene aktarır."
  },
  {
    id: 50,
    category: "sp",
    type: "choice",
    question: "Aşağıdaki içiçe koşullu mantık kodu çalıştırıldıktan sonra ekrana basılacak a değeri ne olur?",
    snippet: "DECLARE a INT DEFAULT 5;\nDECLARE b INT DEFAULT 10;\nIF a < b THEN\n    SET a = a + 5;\n    IF a = b THEN\n        SET a = a * 2;\n    END IF;\nEND IF;\nSELECT a;",
    options: [
      "10",
      "5",
      "20",
      "15"
    ],
    optionReasons: [
      "Yanlış. İçteki IF koşulu da sağlandığı için a değeri 10 kalmaz.",
      "Yanlış. Koşullar sağlandığı için değer değişmiştir.",
      "Doğru! a (5) < b (10) olduğundan dıştaki IF çalışır. a = a + 5 yapılarak a=10 olur. İçteki IF'e girilir: a (10) = b (10) koşulu doğru olduğu için a = a * 2 yapılarak a=20 olur.",
      "Yanlış. Çarpım işlemi yapılmıştır."
    ],
    answer: 2,
    explanation: "a=5 iken a < b doğru olur ve a 10 yapılır. Ardından a=b (10=10) koşulu da doğru olduğu için içteki IF çalışır ve a değeri 20 yapılarak yazdırılır."
  }
];

const questionsDers10 = [
  {
    id: 1,
    category: 'joins',
    type: 'code',
    question: '1 nolu müşterinin satın aldığı ürünlerin adını, fiyatını ve müşteri numarasını listeleyen sorguyu tamamlayın.',
    snippet: '___1___ U.UrunAd, U.Fiyat, S.MusteriNo \nFROM satis ___2___ S\n___3___ JOIN urun AS U\n___4___ U.UrunNo = S.UrunNo\n___5___ S.MusteriNo = 1;',
    blanks: ['SELECT', 'AS', 'INNER', 'ON', 'WHERE'],
    sql_file: 'SQL 1 nolu müşterinin satın aldığı ürünlerin listelenmesi.sql',
    explanation: 'SELECT kolonları listeler. satis tablosuna S alias\'ı verilir. urun tablosu U alias\'ı ile INNER JOIN yapılarak ON kelimesiyle ilişkilendirilir. Müşteri filtresi WHERE ile uygulanır.'
  },
  {
    id: 2,
    category: 'joins',
    type: 'code',
    question: '1 nolu müşterinin satın aldığı ürünlerin toplam tutarını ve müşteri numarasını veren aggregate sorgusunu yazın.',
    snippet: 'SELECT ___1___(U.Fiyat * S.Adet), S.MusteriNo \nFROM satis ___2___ S\n___3___ JOIN urun AS U\n___4___ U.UrunNo = S.UrunNo\n___5___ S.MusteriNo = 1;',
    blanks: ['SUM', 'AS', 'INNER', 'ON', 'WHERE'],
    sql_file: 'SQL 1 nolu müşterinin satın aldığı ürünlerin toplam tutarı.sql',
    explanation: 'SUM fonksiyonu toplam tutarı (fiyat * adet) hesaplar. Tablolar INNER JOIN ile birleştirilir ve ON birleşme koşulu belirlenir.'
  },
  {
    id: 3,
    category: 'joins',
    type: 'code',
    question: '2 nolu kasiyerin içinde bulunduğumuz ayda yaptığı toplam satış tutarı sorgusunu tamamlayın.',
    snippet: 'SELECT ___1___(U.Fiyat * S.Adet) \nFROM satis AS S\nINNER ___2___ urun AS U\n___3___ U.UrunNo = S.UrunNo\n___4___ S.KasiyerNo = 2\nAND ___5___(S.Tarih) = MONTH(NOW());',
    blanks: ['SUM', 'JOIN', 'ON', 'WHERE', 'MONTH'],
    sql_file: 'SQL 2 nolu kasiyerin bu ay yaptığı toplam satış tutarı.sql',
    explanation: 'SUM fonksiyonu toplam tutarı hesaplar. Tablolar INNER JOIN ile bağlanır. MONTH() fonksiyonu tarihin ay bilgisini alıp NOW() (bugün) ile karşılaştırır.'
  },
  {
    id: 4,
    category: 'joins',
    type: 'code',
    question: '\'Nevbahar\' isimli kasiyerin bu ay yaptığı toplam satış tutarını hesaplayan 3\'lü JOIN sorgusunu tamamlayın.',
    snippet: 'SELECT SUM(U.Fiyat * S.Adet) \nFROM satis AS S\n___1___ JOIN urun AS U ___2___ U.UrunNo = S.UrunNo\n___3___ JOIN kasiyer AS K ___4___ K.KasiyerNo = S.KasiyerNo\n___5___ K.Ad = \'Nevbahar\'\nAND MONTH(S.Tarih) = ___6___(NOW());',
    blanks: ['INNER', 'ON', 'INNER', 'ON', 'WHERE', 'MONTH'],
    sql_file: 'SQL Meltem isimli kasiyerin bu ay yaptığı toplam satış tutarı.sql',
    explanation: 'Satis, urun ve kasiyer tabloları INNER JOIN ile bağlanır. Nevbahar ismine göre filtreleme WHERE ile yapılır. NOW() fonksiyonunun ayı MONTH() ile karşılaştırılır.'
  },
  {
    id: 5,
    category: 'joins',
    type: 'code',
    question: 'Alışveriş yapmayan (satis tablosunda kaydı bulunmayan) müşterilerin adını, müşteri numarasını ve telefonunu listelemek için eksik JOIN ve filtre kelimelerini tamamlayın.',
    snippet: 'SELECT M.Ad, M.MusteriNo, M.Telefon \nFROM musteri ___1___ M\n___2___ ___3___ satis AS S\n___4___ S.MusteriNo = M.MusteriNo\n___5___ S.MusteriNo ___6___;',
    blanks: ['AS', 'LEFT', 'JOIN', 'ON', 'WHERE', 'IS NULL'],
    sql_file: 'SQL Alışveriş yapmayan müşterilerin listelenmesi.sql',
    explanation: 'Müşterilerin tamamını getirmek ve satış yapmayanları bulmak için LEFT JOIN kullanılır. Satış kaydı olmayanlar WHERE koşulunda IS NULL ile elenir.'
  },
  {
    id: 6,
    category: 'joins',
    type: 'code',
    question: 'Satış yapmayan kasiyerleri ad ve soyadlarını birleştirerek ve kasiyer numarasıyla listeleyen sorguyu tamamlayın.',
    snippet: 'SELECT ___1___(K.Ad, \' \', K.Soyad) ___2___ \'Ad Soyad\', S.KasiyerNo \nFROM kasiyer AS K\n___3___ JOIN satis AS S\n___4___ K.KasiyerNo = S.KasiyerNo\n___5___ S.KasiyerNo ___6___;',
    blanks: ['CONCAT', 'AS', 'LEFT', 'ON', 'WHERE', 'IS NULL'],
    sql_file: 'SQL Satış Yapmayan Kasiyerlerin Listelenmesi.sql',
    explanation: 'CONCAT fonksiyonu ad ve soyadı araya boşluk koyarak birleştirir. LEFT JOIN ile kasiyerler satıs ile birleştirilir. Satış yapmayanlar IS NULL ile filtrelenir.'
  },
  {
    id: 7,
    category: 'joins',
    type: 'code',
    question: 'Satis tablosunda hiç kaydı bulunmayan satış yapmamış şubeleri RIGHT JOIN kullanarak listeleyen sorguyu tamamlayın.',
    snippet: 'SELECT SU.SubeNo, S.SubeNo, SU.Ad \nFROM satis AS S\n___1___ ___2___ sube ___3___ SU\n___4___ S.SubeNo = SU.SubeNo\n___5___ S.SubeNo ___6___;',
    blanks: ['RIGHT', 'JOIN', 'AS', 'ON', 'WHERE', 'IS NULL'],
    sql_file: 'SQL Satış Yapmayan Şubelerin Listelenmesi.sql',
    explanation: 'Şubeler sağ tablo (RIGHT JOIN) yapılarak tüm şubeler listelenir ve satis tablosundaki karşılığı IS NULL olanlar elenir.'
  },
  {
    id: 8,
    category: 'joins',
    type: 'code',
    question: 'Hiç satışı yapılmamış ürünleri RIGHT JOIN kullanarak listeleyen ve ürün numarasına göre sıralayan sorguyu tamamlayın.',
    snippet: 'SELECT S.SatisNo, U.UrunAd, S.UrunNo \nFROM satis AS S\n___1___ JOIN urun AS U ___2___ S.UrunNo = U.UrunNo\n___3___ S.UrunNo ___4___\n___5___ ___6___ S.UrunNo;',
    blanks: ['RIGHT', 'ON', 'WHERE', 'IS NULL', 'ORDER', 'BY'],
    sql_file: 'SQL Satışı Yapılmayan Ürünlerin Listelenmesi.sql',
    explanation: 'Ürünler sağda olduğu için RIGHT JOIN kullanılır. Satışı olmayanları filtrelemek için WHERE S.UrunNo IS NULL yazılır ve ORDER BY ile sıralanır.'
  },
  {
    id: 9,
    category: 'joins',
    type: 'code',
    question: 'Bünyesinde hiçbir ürün barındırmayan (ürünü olmayan) kategorileri listeleyen sorguyu tamamlayın.',
    snippet: 'SELECT K.KategoriAd \nFROM kategori AS K \n___1___ JOIN urun AS U\n___2___ K.KategoriNo = U.KategoriNo\n___3___ U.KategoriNo ___4___;',
    blanks: ['LEFT', 'ON', 'WHERE', 'IS NULL'],
    sql_file: 'SQL Ürünü olmayan kategorilerin listelenmesi.sql',
    explanation: 'Kategori sol tablo kabul edilip LEFT JOIN ile urun tablosuna bağlanır. Ürünü olmayan kategoriler WHERE U.KategoriNo IS NULL ile tespit edilir.'
  },
  {
    id: 10,
    category: 'joins',
    type: 'code',
    question: 'Ürünü olmayan markaları RIGHT JOIN ile marka tablosunu sağda tutarak listeleyen sorguyu tamamlayın.',
    snippet: 'SELECT M.MarkaAd \nFROM urun ___1___ U  \n___2___ JOIN marka AS M\n___3___ M.MarkaNo = U.MarkaNo\n___4___ U.UrunNo ___5___;',
    blanks: ['AS', 'RIGHT', 'ON', 'WHERE', 'IS NULL'],
    sql_file: 'SQL Ürünü olmayan markaların listelenmesi.sql',
    explanation: 'Markaları sağ tablo tutarak RIGHT JOIN ile ürünlerle birleştiririz. Ürünü olmayan markalar WHERE U.UrunNo IS NULL ile bulunur.'
  },
  {
    id: 11,
    category: 'joins',
    type: 'code',
    question: 'Ürün adlarını, kategori adlarını ve marka adlarını birlikte listeleyen 3\'lü INNER JOIN sorgusunu tamamlayın.',
    snippet: 'SELECT UrunAd, KategoriAd, MarkaAd\n___1___ urun AS u \n___2___ JOIN kategori AS k ___3___ k.KategoriNo = u.KategoriNo\n___4___ JOIN marka AS m ___5___ m.MarkaNo = u.MarkaNo;',
    blanks: ['FROM', 'INNER', 'ON', 'INNER', 'ON'],
    sql_file: 'Uygulama Soru-2.sql',
    explanation: 'Üç tabloyu birleştirmek için FROM ifadesi ve iki adet INNER JOIN ile bunlara karşılık gelen ON birleştirme şartları yazılır.'
  },
  {
    id: 12,
    category: 'joins',
    type: 'code',
    question: 'Kategori adı \'Baharat\' olan ürünleri ve kategori adlarını INNER JOIN kullanarak listeleyen sorguyu tamamlayın.',
    snippet: 'SELECT UrunAd, KategoriAd \nFROM urun AS u \n___1___ ___2___ kategori AS k\n___3___ k.KategoriNo = u.KategoriNo\n___4___ k.KategoriAd ___5___ (\'Baharat\');',
    blanks: ['INNER', 'JOIN', 'ON', 'WHERE', 'IN'],
    sql_file: 'SQL Kategorite Göre Listeleme.sql',
    explanation: 'Tablolar INNER JOIN ... ON ile bağlanır, ardından WHERE k.KategoriAd IN (\'Baharat\') veya \'=\' ile filtrelenir.'
  },
  {
    id: 13,
    category: 'joins',
    type: 'code',
    question: 'Hangi markadan kaç adet ürün olduğunu bulan, adet sayısı 1\'den büyük olan markaları listeleyen aggregate sorguyu tamamlayın.',
    snippet: 'SELECT ___1___(U.MarkaNo) AS \'Adet\', M.MarkaAd AS \'Marka Ad\'\nFROM urun AS U\nINNER JOIN marka AS M ___2___ M.MarkaNo = U.MarkaNo\n___3___ ___4___ M.MarkaNo\n___5___ 1 < ___6___(U.MarkaNo);',
    blanks: ['COUNT', 'ON', 'GROUP', 'BY', 'HAVING', 'COUNT'],
    sql_file: 'SQL Hangi Markadan kaç adet ürün olduğunu bulan sorgu.sql',
    explanation: 'COUNT aggregate fonksiyonudur. Markaya göre gruplama GROUP BY ile yapılır. Gruplanmış sonuçlardaki filtreleme HAVING COUNT(...) ile gerçekleştirilir.'
  },
  {
    id: 14,
    category: 'joins',
    type: 'code',
    question: 'Her bir kasiyerin bu ay yaptığı toplam satış tutarını kasiyer adı ve oranıyla birlikte hesaplayan sorguyu tamamlayın.',
    snippet: 'SELECT K.Ad, S.KasiyerNo, ___1___(S.Adet * U.Fiyat) \nFROM satis AS S\n___2___ JOIN urun AS U ___3___ U.UrunNo = S.UrunNo\n___4___ JOIN kasiyer AS K ___5___ K.KasiyerNo = S.KasiyerNo\nWHERE MONTH(NOW()) = MONTH(S.Tarih) \nAND YEAR(NOW()) = YEAR(S.Tarih)\n___6___ ___7___ S.KasiyerNo;',
    blanks: ['SUM', 'INNER', 'ON', 'INNER', 'ON', 'GROUP', 'BY'],
    sql_file: 'SQL Her bir kasiyerin bu ay yaptığı satış tutarının bulunması.sql',
    explanation: 'SUM satış tutarını toplar. Tablolar INNER JOIN ve ON ile bağlanır. Kasiyere göre gruplamak için GROUP BY S.KasiyerNo kullanılır.'
  },
  {
    id: 15,
    category: 'joins',
    type: 'code',
    question: 'Her bir şubenin bugün yaptığı toplam satış tutarını bulan sorguyu tamamlayın.',
    snippet: 'SELECT SU.Ad, ___1___(S.Adet * U.Fiyat) \nFROM satis AS S\nINNER JOIN urun AS U ON U.UrunNo = S.UrunNo\nINNER JOIN sube AS SU ___2___ SU.SubeNo = S.SubeNo\n___3___ ___4___(NOW(), S.Tarih) = 0\n___5___ ___6___ S.SubeNo;',
    blanks: ['SUM', 'ON', 'WHERE', 'DATEDIFF', 'GROUP', 'BY'],
    sql_file: 'SQL Her bir şubenin bugün yaptığı satış tutarının bulunması.sql',
    explanation: 'DATEDIFF(NOW(), Tarih) = 0 bugün yapılan satışları filtreler. Şubeye göre toplam tutar için SUM fonksiyonu ve GROUP BY kullanılır.'
  },
  {
    id: 16,
    category: 'joins',
    type: 'code',
    question: 'Hangi kategoride kaç çeşit ürün olduğunu bulup kategori adıyla listeleyen sorguyu tamamlayın.',
    snippet: 'SELECT ___1___(U.UrunNo) AS \'Adet\', K.KategoriAd AS \'Kategori Adı\' \nFROM kategori AS K\n___2___ JOIN urun AS U\n___3___ U.KategoriNo = K.KategoriNo\n___4___ ___5___ K.KategoriNo;',
    blanks: ['COUNT', 'INNER', 'ON', 'GROUP', 'BY'],
    sql_file: 'SQL Her kategoride kaç çeşit ürün olduğunun bulunması.sql',
    explanation: 'COUNT(UrunNo) kategorideki ürün sayısını verir. INNER JOIN ile kategoriler bağlanır ve GROUP BY ile gruplama yapılır.'
  },
  {
    id: 17,
    category: 'joins',
    type: 'code',
    question: 'Bu yıl yapılan satışları ay bazında gruplayarak, her ayın toplam satış tutarını hesaplayan sorguyu tamamlayın.',
    snippet: 'SELECT ___1___(S.Adet * U.Fiyat), ___2___(S.Tarih)\nFROM urun AS U\nINNER JOIN satis AS S ON U.UrunNo = S.UrunNo\n___3___ YEAR(S.Tarih) = ___4___(NOW())\n___5___ ___6___ MONTH(S.Tarih);',
    blanks: ['SUM', 'MONTH', 'WHERE', 'YEAR', 'GROUP', 'BY'],
    sql_file: 'SQL Her yıl her ay toplam satış tutarını bulunması.sql',
    explanation: 'Aylık gruplama MONTH(Tarih) ile yapılır. Bu yıl filtresi YEAR(Tarih) = YEAR(NOW()) ile WHERE altında uygulanır.'
  },
  {
    id: 18,
    category: 'joins',
    type: 'code',
    question: 'Her kategorinin ortalama fiyat bilgisini bulan görünümü (VIEW) oluşturan veya değiştiren sorguyu tamamlayın.',
    snippet: '___1___ ___2___ ortalamaFiyatKategori AS\nSELECT ___3___(Fiyat) AS \'OrtalamaFiyat\', K.KategoriAd \nFROM urun AS U\nINNER JOIN kategori AS K ___4___ K.KategoriNo = U.KategoriNo\n___5___ ___6___ K.KategoriAd;',
    blanks: ['ALTER', 'VIEW', 'AVG', 'ON', 'GROUP', 'BY'],
    sql_file: 'SQL Kategori Ortalama Fiyat.sql',
    explanation: 'ALTER VIEW görünümü güncellemeye yarar. Ortalama için AVG kullanılır. Kategorilere göre gruplama GROUP BY ile sağlanır.'
  },
  {
    id: 19,
    category: 'joins',
    type: 'code',
    question: 'Müşterilerin satın almış oldukları ürünlerin adını, fiyatını, satış tarihini ve müşteri bilgilerini listeleyen sorguyu tamamlayın.',
    snippet: 'SELECT M.Ad, M.Soyad, U.UrunNo, U.UrunAd, U.Fiyat, S.Tarih \n___1___ satis AS S\n___2___ JOIN urun AS U\n___3___ S.UrunNo = U.UrunNo\n___4___ JOIN musteri AS M\n___5___ M.MusteriNo = S.MusteriNo;',
    blanks: ['FROM', 'INNER', 'ON', 'INNER', 'ON'],
    sql_file: 'Uygulama Soru-1.sql',
    explanation: 'FROM tablo belirtir. satis tablosu urun ve musteri tablolarıyla INNER JOIN ve ON koşulları üzerinden birleştirilir.'
  },
  {
    id: 20,
    category: 'joins',
    type: 'code',
    question: 'Her bir kasiyerin toplam kaç liralık satış yaptığını kasiyer adına göre gruplayıp ürün numarasına göre sıralayan sorguyu tamamlayın.',
    snippet: 'SELECT k.Ad AS \'Kasiyer Adı\', ___1___(u.Fiyat * s.Adet) \nFROM satis AS s \n___2___ JOIN kasiyer AS k ___3___ s.KasiyerNo = k.KasiyerNo\n___4___ JOIN urun AS u ___5___ s.UrunNo = u.UrunNo\n___6___ BY k.Ad\n___7___ BY u.UrunNo;',
    blanks: ['SUM', 'INNER', 'ON', 'INNER', 'ON', 'GROUP', 'ORDER'],
    sql_file: 'Uygulama Soru-10.sql',
    explanation: 'Toplam tutar SUM ile hesaplanır. Kasiyer ve ürün tabloları INNER JOIN ile bağlanır. GROUP BY kasiyer adına göre yapılırken, ORDER BY ile ürün numarasına göre sıralanır.'
  },
  {
    id: 21,
    category: 'joins',
    type: 'code',
    question: '100 TL ve üzerinde satış yapan her bir kasiyerin adını ve toplam satış tutarını listeleyen ve bunları ürün numarasına göre sıralayan sorguyu tamamlayın.',
    snippet: 'SELECT k.Ad, ___1___(u.Fiyat * s.Adet) \nFROM satis AS s \nINNER JOIN kasiyer AS k ON s.KasiyerNo = k.KasiyerNo\n___2___ JOIN urun AS u ON s.UrunNo = u.UrunNo\n___3___ ___4___ k.Ad\n___5___ 100 <= SUM(u.Fiyat * s.Adet)\n___6___ BY u.UrunNo;',
    blanks: ['SUM', 'INNER', 'GROUP', 'BY', 'HAVING', 'ORDER'],
    sql_file: 'Uygulama Soru-12.sql',
    explanation: 'Toplam tutar filtrelemesi gruplamadan sonra HAVING ile kontrol edilir (100 <= SUM(...)). Sıralama ORDER BY ile yapılır.'
  },
  {
    id: 22,
    category: 'joins',
    type: 'code',
    question: 'Müşterilerin hangi markalardan alışveriş yaptığını listeleyen 4 tablolu sorguyu tamamlayın.',
    snippet: 'SELECT mu.MusteriNo, mu.Ad, u.UrunAd, m.MarkaNo, m.MarkaAd \nFROM market.musteri AS mu\n___1___ JOIN market.satis AS s ___2___ mu.MusteriNo = s.MusteriNo\n___3___ JOIN market.urun AS u ___4___ s.UrunNo = u.UrunNo\n___5___ JOIN market.marka AS m ___6___ u.MarkaNo = m.MarkaNo;',
    blanks: ['INNER', 'ON', 'INNER', 'ON', 'INNER', 'ON'],
    sql_file: 'Uygulama Soru-14.sql',
    explanation: '4 tablo (musteri, satis, urun, marka) sırayla INNER JOIN ... ON ilişkileriyle birbirine bağlanır.'
  },
  {
    id: 23,
    category: 'joins',
    type: 'code',
    question: 'Her bir şubenin toplam kaç liralık satış yaptığını bulup şube adına göre gruplayıp ürün noya göre sıralayan sorguyu tamamlayın.',
    snippet: 'SELECT su.Ad AS \'Şube Adı\', ___1___(u.Fiyat * s.Adet) AS \'Toplam Satış Tutarı\' \nFROM satis AS s \n___2___ JOIN sube AS su ___3___ s.SubeNo = su.SubeNo\n___4___ JOIN urun AS u ___5___ s.UrunNo = u.UrunNo\n___6___ BY su.Ad\n___7___ BY u.UrunNo;',
    blanks: ['SUM', 'INNER', 'ON', 'INNER', 'ON', 'GROUP', 'ORDER'],
    sql_file: 'Uygulama Soru-16.sql',
    explanation: 'Toplam tutar SUM ile hesaplanır, sube ve urun tabloları birleştirilir, GROUP BY şube adına göre, ORDER BY ise ürün noya göre sıralar.'
  },
  {
    id: 24,
    category: 'joins',
    type: 'code',
    question: 'Her bir müşterinin hangi kategoriden kaç adet ürün aldığını müşteri numarası ve kategori adıyla listeleyen sorguyu tamamlayın.',
    snippet: 'SELECT M.MusteriNo, M.Ad, K.KategoriAd, ___1___(S.Adet) AS \'Adet\' \nFROM satis AS S\n___2___ JOIN urun AS U ___3___ U.UrunNo = S.UrunNo\n___4___ JOIN musteri AS M ON M.MusteriNo = S.MusteriNo\n___5___ JOIN kategori AS K ON K.KategoriNo = U.KategoriNo\n___6___ BY M.MusteriNo, K.KategoriNo;',
    blanks: ['SUM', 'INNER', 'ON', 'INNER', 'INNER', 'GROUP'],
    sql_file: 'Uygulama Soru-4.sql',
    explanation: 'Miktar toplamak için SUM(Adet) kullanılır. 4 tablo JOIN ile birleştirildikten sonra hem müşteri no hem kategori noya göre GROUP BY uygulanır.'
  },
  {
    id: 25,
    category: 'joins',
    type: 'code',
    question: 'Her markadan 2 adetten fazla ürün alan müşterilerin ad soyad, marka ve adet bilgilerini listeleyen sorguyu tamamlayın.',
    snippet: 'SELECT m.MusteriNo, m.ad, m.Soyad, ma.MarkaAd, SUM(s.Adet) AS \'Adet\' \nFROM market.musteri AS m \n___1___ JOIN market.satis AS s ON m.MusteriNo = s.MusteriNo\n___2___ JOIN market.urun AS u ON s.UrunNo = u.UrunNo\n___3___ JOIN market.marka AS ma ON u.MarkaNo = ma.MarkaNo\n___4___ BY m.MusteriNo, ma.MarkaNo\n___5___ 2 < ___6___(s.Adet);',
    blanks: ['INNER', 'INNER', 'INNER', 'GROUP', 'HAVING', 'SUM'],
    sql_file: 'Uygulama Soru-6.sql',
    explanation: 'Müşteri, satış, ürün ve marka tabloları INNER JOIN ile bağlanır. Müşteri ve Marka bazında GROUP BY yapıldıktan sonra HAVING SUM(Adet) > 2 filtresi uygulanır.'
  },
  {
    id: 26,
    category: 'joins',
    type: 'code',
    question: 'Müşterilerin hangi markalardan alışveriş yaptığını listeleyen ve 4 tabloyu birbirine bağlayan sorguyu yazın.',
    snippet: 'SELECT m.MusteriNo, m.ad, m.Soyad, ma.MarkaAd, SUM(s.Adet) AS \'Adet\' \nFROM market.musteri AS m \n___1___ JOIN market.satis AS s ___2___ m.MusteriNo = s.MusteriNo\n___3___ JOIN market.urun AS u ___4___ s.UrunNo = u.UrunNo\n___5___ JOIN market.marka AS ma ___6___ u.MarkaNo = ma.MarkaNo\nGROUP BY m.Ad, ma.MarkaAd;',
    blanks: ['INNER', 'ON', 'INNER', 'ON', 'INNER', 'ON'],
    sql_file: 'Uygulama Soru-5.sql',
    explanation: 'Müşteri, satış, ürün ve marka tabloları sırasıyla INNER JOIN ... ON bağlantılarıyla birleştirilerek listelenir.'
  },
  {
    id: 27,
    category: 'joins',
    type: 'code',
    question: 'Müşterilerin hangi kategorilerden alışveriş yaptığını gösteren 4 tablolu birleşik sorguyu tamamlayın.',
    snippet: 'SELECT m.MusteriNo, m.Ad, u.UrunAd, k.KategoriNo, k.KategoriAd \nFROM market.musteri AS m \n___1___ JOIN market.satis AS s ___2___ m.MusteriNo = s.MusteriNo\n___3___ JOIN market.urun AS u ON s.UrunNo = u.UrunNo\n___4___ JOIN market.kategori AS k ___5___ u.KategoriNo = k.KategoriNo;',
    blanks: ['INNER', 'ON', 'INNER', 'INNER', 'ON'],
    sql_file: 'Uygulama Soru-2.sql',
    explanation: 'Bu 4 tablolu sorguda musteri, satis, urun ve kategori tabloları INNER JOIN kullanılarak birleştirilmiştir.'
  },
  {
    id: 28,
    category: 'joins',
    type: 'code',
    question: 'Her bir müşterinin satın almış olduğu toplam ürün adedini veren JOIN ve gruplama sorgusunu tamamlayın.',
    snippet: 'SELECT M.MusteriNo, ___1___(S.Adet) AS \'Adet\' \nFROM satis AS S \n___2___ JOIN urun AS U ON U.UrunNo = S.UrunNo\n___3___ JOIN musteri AS M ON M.MusteriNo = S.MusteriNo\n___4___ ___5___ M.MusteriNo;',
    blanks: ['SUM', 'INNER', 'INNER', 'GROUP', 'BY'],
    sql_file: 'Uygulama Soru-3.sql',
    explanation: 'SUM aggregate fonksiyonudur. Müşteri noya göre gruplamak için GROUP BY M.MusteriNo kullanılır.'
  },
  {
    id: 29,
    category: 'joins',
    type: 'code',
    question: 'Ürünlerin markalarını getirirken, markası tanımlanmamış ürünlerin de listelenmesini sağlayan LEFT OUTER JOIN sorgusunu tamamlayın.',
    snippet: 'SELECT UrunAd, MarkaAd \nFROM urun ___1___ ___2___ ___3___ marka \n___4___ urun.MarkaNo = marka.MarkaNo;',
    blanks: ['LEFT', 'OUTER', 'JOIN', 'ON'],
    sql_file: 'Uygulama Soru-14.sql',
    explanation: 'Sol taraftaki (urun) tüm kayıtları ve sağ taraftaki (marka) eşleşenleri getirmek için LEFT OUTER JOIN kullanılır.'
  },
  {
    id: 30,
    category: 'joins',
    type: 'code',
    question: 'Marka tablosunu sol, ürün tablosunu sağ alarak tüm ürünleri ve marka adlarını listeleyen RIGHT OUTER JOIN sorgusunu tamamlayın.',
    snippet: 'SELECT UrunAd, MarkaAd \nFROM marka ___1___ ___2___ ___3___ urun \n___4___ urun.MarkaNo = marka.MarkaNo;',
    blanks: ['RIGHT', 'OUTER', 'JOIN', 'ON'],
    sql_file: 'SQL Outer Join Sorguları.sql',
    explanation: 'Sağ taraftaki (urun) tüm kayıtları ve sol taraftaki (marka) eşleşenleri getirmek için RIGHT OUTER JOIN kullanılır.'
  },
  {
    id: 31,
    category: 'joins',
    type: 'code',
    question: 'Ürün, kategori ve marka adlarını birleştiren \'v_UrunBilgileri\' isimli bir VIEW (görünüm) oluşturan sorguyu tamamlayın.',
    snippet: '___1___ ___2___ v_UrunBilgileri ___3___ \nSELECT U.UrunAd, K.KategoriAd, M.MarkaAd \nFROM market.urun AS U \n___4___ JOIN kategori AS K ON K.KategoriNo = U.KategoriNo\n___5___ JOIN marka AS M ON M.MarkaNo = U.MarkaNo;',
    blanks: ['CREATE', 'VIEW', 'AS', 'INNER', 'INNER'],
    sql_file: 'Uygulama Soru-13.sql',
    explanation: 'CREATE VIEW ad AS formatı ile görünüm oluşturulur. Tablolar INNER JOIN ile birbirine bağlanır.'
  },
  {
    id: 32,
    category: 'joins',
    type: 'code',
    question: 'Kasiyerlerin yaptıkları satışları ürün bazında gruplayarak toplam ürün adedi ve toplam satış tutarını hesaplayan sorguyu tamamlayın.',
    snippet: 'SELECT k.KasiyerNo, k.ad, k.Soyad, u.UrunNo, u.fiyat, \n  ___1___(u.UrunNo) AS \'toplamUrun\', \n  (s.Adet * u.Fiyat * SUM(u.UrunNo)) AS \'toplamFiyat\' \nFROM market.kasiyer AS k \n___2___ JOIN market.satis AS s ___3___ k.KasiyerNo = s.KasiyerNo\n___4___ JOIN market.urun AS u ___5___ s.SatisNo = u.UrunNo\n___6___ BY k.ad, u.UrunNo;',
    blanks: ['SUM', 'INNER', 'ON', 'INNER', 'ON', 'GROUP'],
    sql_file: 'Uygulama Soru-10.sql',
    explanation: 'Kasiyer bazında satışları ürün noya göre gruplamak için GROUP BY kullanılır. JOIN ve ON koşullarıyla tablolar bağlanır.'
  },
  {
    id: 33,
    category: 'joins',
    type: 'code',
    question: 'Şubelerin her ay gerçekleştirdiği satış işlemleri sayısını şube ve ay bazında listeleyen gruplanmış sorguyu tamamlayın.',
    snippet: 'SELECT SU.Ad, ___1___(*), ___2___(S.Tarih) \nFROM satis AS S \n___3___ JOIN sube AS SU ON SU.SubeNo = S.SubeNo \n___4___ ___5___ SU.SubeNo, ___6___(S.Tarih);',
    blanks: ['COUNT', 'MONTH', 'INNER', 'GROUP', 'BY', 'MONTH'],
    sql_file: 'SQL-Ödev3 Cevaplar 17.sql',
    explanation: 'İşlem sayısı için COUNT(*), ay numarası için MONTH() fonksiyonu kullanılır. Şube ve aya göre GROUP BY uygulanır.'
  },
  {
    id: 34,
    category: 'joins',
    type: 'code',
    question: 'Marka adı \'HP\' olmayan ve kategorisi \'Laptop\' olan ürünlerin toplam fiyatını veren 3\'lü birleşik sorguyu tamamlayın.',
    snippet: 'SELECT ___1___(U.Fiyat) \nFROM urun AS U \n___2___ JOIN marka AS M ON M.MarkaNo = U.MarkaNo \n___3___ JOIN kategori AS K ON K.KategoriNo = U.KategoriNo \n___4___ M.MarkaAd <> \'HP\' ___5___ K.KategoriAd = \'Laptop\';',
    blanks: ['SUM', 'INNER', 'INNER', 'WHERE', 'AND'],
    sql_file: 'SQL-Ödev3 Cevaplar 1-3-4-5.sql',
    explanation: 'Toplam hesaplamak için SUM kullanılır. Tablolar INNER JOIN ile bağlanır ve filtreler WHERE ve AND ile belirtilir.'
  },
  {
    id: 35,
    category: 'joins',
    type: 'code',
    question: 'Her bir kasiyerin yaptığı toplam satış işlemleri sayısını bulup, en az satış yapan kasiyeri işlem sayısına göre artan sırada sıralayarak ve LIMIT kullanarak bulan sorguyu tamamlayın.',
    snippet: 'SELECT K.Ad, COUNT(*) \nFROM Satis AS S \n___1___ JOIN kasiyer AS K ON K.KasiyerNo = S.KasiyerNo \n___2___ ___3___ K.KasiyerNo \n___4___ ___5___ COUNT(*) ___6___ \n___7___ 0, 1;',
    blanks: ['INNER', 'GROUP', 'BY', 'ORDER', 'BY', 'ASC', 'LIMIT'],
    sql_file: 'SQL-Ödev3 Cevaplar 13.sql',
    explanation: 'En az satış yapanı bulmak için COUNT(*) değerine göre ORDER BY COUNT Extent (ASC) sıralama yapılır ve LIMIT 0,1 ile ilk satır alınır.'
  },
  {
    id: 36,
    category: 'joins',
    type: 'code',
    question: 'Peynir kategorisindeki satış adetlerini aylara göre gruplayarak listeleyen sorguyu tamamlayın.',
    snippet: 'SELECT ___1___(S.Tarih), ___2___(*) \nFROM urun AS U \n___3___ JOIN satis AS S ON S.UrunNo = U.UrunNo \n___4___ JOIN kategori AS K ON K.KategoriNo = U.KategoriNo \n___5___ K.KategoriAd = \'Peynir\' \n___6___ BY MONTH(S.Tarih);',
    blanks: ['MONTH', 'COUNT', 'INNER', 'INNER', 'WHERE', 'GROUP'],
    sql_file: 'SQL-Ödev3 Cevaplar 15.sql',
    explanation: 'Aylık gruplama için MONTH() fonksiyonu, JOIN bağlantıları ve filtreleme için WHERE, gruplama için ise GROUP BY kullanılır.'
  },
  {
    id: 37,
    category: 'joins',
    type: 'code',
    question: 'Ürünlerin toplam fiyatının 5000\'den büyük olduğu kategorileri ve toplam fiyatlarını veren gruplanmış sorguyu tamamlayın.',
    snippet: 'SELECT K.KategoriAd, ___1___(U.Fiyat) \nFROM urun AS U \n___2___ JOIN kategori AS K ___3___ K.KategoriNo = U.KategoriNo \n___4___ BY K.KategoriAd \n___5___ 5000 < ___6___(U.Fiyat);',
    blanks: ['SUM', 'INNER', 'ON', 'GROUP', 'HAVING', 'SUM'],
    sql_file: 'SQL-Ödev3 Cevaplar 10.sql',
    explanation: 'Gruplanmış verilerde aggregate koşullarını filtrelemek için HAVING ifadesi kullanılır. Toplam fiyat SUM ile alınır.'
  },
  {
    id: 38,
    category: 'joins',
    type: 'code',
    question: 'Şehir adları \'a\' harfiyle başlamayan müşterilerin benzersiz şehir listesini veren sorguyu tamamlayın.',
    snippet: '___1___ ___2___(Sehir) ___3___ musteri \n___4___ Sehir ___5___ ___6___ \'a%\';',
    blanks: ['SELECT', 'DISTINCT', 'FROM', 'WHERE', 'NOT', 'LIKE'],
    sql_file: 'SQL-Ödev3 Cevaplar 1-3-4-5.sql',
    explanation: 'Benzersiz değerler için DISTINCT, \'a\' harfi ile başlamayanlar için NOT LIKE \'a%\' kalıbı kullanılır.'
  },
  {
    id: 39,
    category: 'subquery',
    type: 'code',
    question: '1, 2 ve 3 numaralı kategorilerdeki ürünlerin fiyatlarının tamamının (hepsinin) altında fiyata sahip ürünleri ALL kullanarak listeleyin.',
    snippet: 'SELECT * FROM urun \n___1___ Fiyat < ___2___ (___3___ Fiyat ___4___ urun ___5___ KategoriNo ___6___ (1,2,3));',
    blanks: ['WHERE', 'ALL', 'SELECT', 'FROM', 'WHERE', 'IN'],
    sql_file: 'SQL Alt Sorgu ALL Kullanımı.sql',
    explanation: 'Alt sorgudaki tüm fiyatların altında olmasını sağlamak için \'< ALL\' ifadesi ve alt sorguda \'IN (1,2,3)\' filtresi kullanılır.'
  },
  {
    id: 40,
    category: 'subquery',
    type: 'code',
    question: '1, 2 ve 3 numaralı kategorilerdeki ürünlerin herhangi birinin fiyatının üstünde fiyata sahip ürünleri ANY kullanarak listeleyin.',
    snippet: 'SELECT * FROM urun \n___1___ Fiyat > ___2___ (___3___ Fiyat ___4___ urun ___5___ KategoriNo ___6___ (1,2,3));',
    blanks: ['WHERE', 'ANY', 'SELECT', 'FROM', 'WHERE', 'IN'],
    sql_file: 'SQL Alt Sorgu ANY Kullanımı.sql',
    explanation: '\'ANY\' alt sorgudaki değerlerden herhangi biriyle eşleşmenin yeterli olduğunu belirtir. Fiyat > ANY (...) şeklinde kullanılır.'
  },
  {
    id: 41,
    category: 'subquery',
    type: 'code',
    question: 'Ürünlerin fiyatı, genel ortalama fiyattan küçük olan ürünleri listeleyen ve fiyata göre sıralayan alt sorgulu ifadeyi tamamlayın.',
    snippet: 'SELECT * FROM urun \n___1___ Fiyat < (___2___ ___3___(Fiyat) ___4___ urun) \n___5___ ___6___ Fiyat;',
    blanks: ['WHERE', 'SELECT', 'AVG', 'FROM', 'ORDER', 'BY'],
    sql_file: 'SQL Alt Sorgu AVG Kullanma.sql',
    explanation: 'AVG(Fiyat) ortalama fiyatı bulur. Dış sorguda WHERE Fiyat < (Alt Sorgu) ile ortalamanın altındakiler filtrelenir ve ORDER BY ile sıralanır.'
  },
  {
    id: 42,
    category: 'subquery',
    type: 'code',
    question: '\'Elektronik\' kategorisindeki ortalama fiyatın altındaki elektronik ürünleri listeleyen ve ürün fiyatına göre sıralayan karmaşık alt sorguyu tamamlayın.',
    snippet: 'SELECT * FROM urun \nWHERE Fiyat < (SELECT ___1___(Fiyat) FROM urun ___2___ BY KategoriNo ___3___ KategoriNo = (SELECT KategoriNo FROM kategori WHERE KategoriAd = \'Elektronik\'))\n___4___ KategoriNo = (___5___ KategoriNo FROM kategori ___6___ KategoriAd = \'Elektronik\')\nORDER BY Fiyat;',
    blanks: ['AVG', 'GROUP', 'HAVING', 'AND', 'SELECT', 'WHERE'],
    sql_file: 'SQL Alt Sorgu GROUP BY ve HAVING Kullanımı.sql',
    explanation: 'İçeride Elektronik kategorisinin ortalamasını bulmak için GROUP BY ve HAVING kullanılır. Dış sorguda da kategorinin Elektronik olması AND KategoriNo = (SELECT...) ile sınırlanır.'
  },
  {
    id: 43,
    category: 'subquery',
    type: 'code',
    question: '7. aydan önce satılan ürünlerin listesini alt sorguda IN kullanarak getiren sorguyu tamamlayın.',
    snippet: 'SELECT * FROM market.urun \n___1___ UrunNo ___2___ (SELECT UrunNo FROM market.satis ___3___ ___4___(Tarih) < 7);',
    blanks: ['WHERE', 'IN', 'WHERE', 'MONTH'],
    sql_file: 'SQL Alt Sorgu IN Kullanımı.sql',
    explanation: 'Belirli bir aydan önce satılan ürünlerin numaraları alt sorguda MONTH(Tarih) < 7 ile çekilir ve dış sorguda WHERE UrunNo IN (...) ile listelenir.'
  },
  {
    id: 44,
    category: 'subquery',
    type: 'code',
    question: 'Ürün eklerken marka numarasını ve kategori numarasını alt sorgu ile ilgili tablolardan çekerek INSERT yapan sorguyu tamamlayın.',
    snippet: '___1___ ___2___ market.urun (UrunAd, MarkaNo, KategoriNo, Fiyat, SonKullanmaTarih, Ozellik) \n___3___ (\'Vestel Buzdolabı\', (___4___ MarkaNo FROM marka WHERE MarkaAd = \'Boron\'), (___5___ KategoriNo FROM kategori WHERE KategoriAd = \'Elektronik\'), 4800, \'2023-12-01\', \'Nofrost\');',
    blanks: ['INSERT', 'INTO', 'VALUES', 'SELECT', 'SELECT'],
    sql_file: 'SQL Alt Sorgu Kayıt Ekleme.sql',
    explanation: 'INSERT INTO ... VALUES yapısında, değerler listesinde statik sayılar yerine alt sorgulardan dönen tekil veriler SELECT ile kullanılabilir.'
  },
  {
    id: 45,
    category: 'subquery',
    type: 'code',
    question: '\'Vestel Buzdolabı\' adlı ürünün marka numarasını alt sorgu ile \'Vestel\' markası olarak güncelleyen sorguyu tamamlayın.',
    snippet: '___1___ market.urun \n___2___ MarkaNo = (___3___ MarkaNo FROM marka WHERE MarkaAd = \'Vestel\') \nWHERE UrunNo = (___4___ UrunNo ___5___ urun WHERE UrunAd = \'Vestel Buzdolabı\');',
    blanks: ['UPDATE', 'SET', 'SELECT', 'SELECT', 'FROM'],
    sql_file: 'SQL Alt Sorgu Kayıt Güncelleme.sql',
    explanation: 'UPDATE table SET sütun = (SELECT...) WHERE sütun = (SELECT...) yapısıyla dinamik alt sorgulu güncelleme yapılır.'
  },
  {
    id: 46,
    category: 'subquery',
    type: 'code',
    question: '2021 yılı mart (3) veya kasım (11) aylarında yapılan satışları alt sorgu yardımıyla silen sorguyu tamamlayın.',
    snippet: '___1___ ___2___ satis \nWHERE Tarih ___3___ (SELECT s.Tarih FROM market.satis AS S \nWHERE ___4___(s.Tarih) = 2021 AND ___5___(s.Tarih) IN (3,11));',
    blanks: ['DELETE', 'FROM', 'IN', 'YEAR', 'MONTH'],
    sql_file: 'SQL Alt Sorgu Kayıt Silme.sql',
    explanation: 'DELETE FROM table WHERE ... şeklinde silme yapılır. Tarihleri eşleştirmek için YEAR() ve MONTH() fonksiyonlarından yararlanılır.'
  },
  {
    id: 47,
    category: 'subquery',
    type: 'code',
    question: 'Müşteri tablosunda kayıtlı olup satis tablosunda hiç kaydı bulunmayan müşterileri alt sorgu (NOT IN) mantığıyla listeleyen sorguyu tamamlayın.',
    snippet: 'SELECT * FROM musteri \n___1___ MusteriNo ___2___ (___3___ MusteriNo ___4___ satis ___5___ MusteriNo ___6___ NOT NULL);',
    blanks: ['WHERE', 'NOT IN', 'SELECT', 'FROM', 'WHERE', 'IS'],
    sql_file: 'SQL 7. aydan önce satılan ürünlerin listelenmesi.sql',
    explanation: 'NOT IN kullanarak alt sorgudaki listede yer almayan müşteriler elenir. Alt sorguda \'WHERE MusteriNo IS NOT NULL\' yapılması performans ve doğruluk açısından önemlidir.'
  },
  {
    id: 48,
    category: 'subquery',
    type: 'code',
    question: 'Ürünlerin son kullanma tarihine bugün itibariyle kaç gün kaldığını DATEDIFF kullanarak listeleyen sorguyu tamamlayın.',
    snippet: 'SELECT UrunAd AS \'Ürün Adı\', SonKullanmaTarihi, \n___1___(SonKullanmaTarihi, ___2___()) ___3___ \'Kaç Gün Var\' \n___4___ urun\n___5___ SonKullanmaTarihi > ___6___();',
    blanks: ['DATEDIFF', 'NOW', 'AS', 'FROM', 'WHERE', 'NOW'],
    sql_file: 'SQL Son Kullanma Tarihine Kac Gun var.sql',
    explanation: 'DATEDIFF iki tarih arasındaki gün farkını hesaplar. NOW() anlık zamanı verir. Filtreleme WHERE ile yapılır.'
  },
  {
    id: 49,
    category: 'subquery',
    type: 'code',
    question: 'Son kullanma tarihine 1 ile 7 gün arasında (1 hafta) süre kalmış ürünleri listelemek için BETWEEN kelimesini kullanan sorguyu tamamlayın.',
    snippet: '___1___ UrunAd, Fiyat, ___2___(SonKullanmaTarih, ___3___()) AS \'Kalan Gün\'\nFROM market.urun \nWHERE DATEDIFF(SonKullanmaTarih, NOW()) ___4___ 1 ___5___ 7;',
    blanks: ['SELECT', 'DATEDIFF', 'NOW', 'BETWEEN', 'AND'],
    sql_file: 'SQL Kategorite Göre Listeleme.sql',
    explanation: 'İki sınır arasındaki değerleri seçmek için BETWEEN min AND max yapısı kullanılır. DATEDIFF ile kalan gün bulunur.'
  },
  {
    id: 50,
    category: 'subquery',
    type: 'code',
    question: 'Son kullanma tarihi geçmiş (kalan gün sayısı sıfırdan küçük) olan ürünleri bulan sorguyu tamamlayın.',
    snippet: '___1___ UrunAd, Fiyat, ___2___(SonKullanmaTarih, ___3___()) AS \'Gecen Gun\' \n___4___ market.urun \n___5___ DATEDIFF(SonKullanmaTarih, NOW()) < 0;',
    blanks: ['SELECT', 'DATEDIFF', 'NOW', 'FROM', 'WHERE'],
    sql_file: 'SQL WHERE Son Kullanma Tarih.sql',
    explanation: 'Tarihi geçmiş ürünleri bulmak için DATEDIFF(SonKullanmaTarih, NOW()) değerinin < 0 (sıfırdan küçük) olması kontrol edilir.'
  },
  {
    id: 51,
    category: 'subquery',
    type: 'code',
    question: 'En yüksek fiyata sahip ürünün adı, markası, SKT ve fiyatını getiren alt sorgulu ifadeyi tamamlayın.',
    snippet: 'SELECT U.UrunAd, M.MarkaAd, U.SonKullanmaTarih, U.Fiyat \nFROM urun AS U \n___1___ JOIN marka AS M ___2___ M.MarkaNo = U.MarkaNo \n___3___ Fiyat = (___4___ ___5___(Fiyat) FROM urun);',
    blanks: ['INNER', 'ON', 'WHERE', 'SELECT', 'MAX'],
    sql_file: 'SQL-Ödev3 Cevaplar 12sql.sql',
    explanation: 'MAX(Fiyat) alt sorguda en yüksek fiyatı döner. Dış sorgu WHERE Fiyat = (en yüksek fiyat) olan satırı getirir.'
  },
  {
    id: 52,
    category: 'subquery',
    type: 'code',
    question: 'Adı \'Sinan\' olan müşterinin adını \'Petek\' olarak alt sorgulu WHERE koşuluyla güncelleyen sorguyu tamamlayın.',
    snippet: '___1___ musteri ___2___ Ad = \'Petek\' \n___3___ MusteriNo = (___4___ MusteriNo ___5___ musteri WHERE Ad = \'Sinan\');',
    blanks: ['UPDATE', 'SET', 'WHERE', 'SELECT', 'FROM'],
    sql_file: 'SQL-Ödev3 Cevaplar 1-3-4-5.sql',
    explanation: 'UPDATE table SET ad = \'Yeni\' WHERE no = (SELECT no FROM table WHERE ad = \'Eski\') yapısı kullanılır.'
  },
  {
    id: 53,
    category: 'subquery',
    type: 'code',
    question: 'Kasiyerler arasında en az satış kaydı girmiş (en az adet değil, en az işlem) kasiyeri işlem sayısına göre artan sırada sıralayıp LIMIT kullanarak bulan sorguyu tamamlayın.',
    snippet: 'SELECT K.Ad, COUNT(*) \nFROM satis AS S \nINNER JOIN kasiyer AS K ON K.KasiyerNo = S.KasiyerNo \n___1___ ___2___ S.KasiyerNo \n___3___ ___4___(*) \n___5___ 0, 1;',
    blanks: ['GROUP', 'BY', 'ORDER', 'BY', 'LIMIT'],
    sql_file: 'SQL-Ödev3 Cevaplar 13.sql',
    explanation: 'İşlem sayılarını bulmak için GROUP BY ile kasiyerler gruplanır. ORDER BY COUNT(*) artan sıralama yapar. LIMIT 0, 1 en az olan ilk kaydı alır.'
  },
  {
    id: 54,
    category: 'subquery',
    type: 'code',
    question: '\'Peynir\' kategorisindeki ürünlerin aylara göre satış adetlerinin toplamını listeleyen sorguyu tamamlayın.',
    snippet: 'SELECT ___1___(S.Tarih), ___2___(S.Adet) \nFROM urun AS U \nINNER JOIN satis AS S ON S.UrunNo = U.UrunNo \nINNER JOIN kategori AS K ON K.KategoriNo = U.KategoriNo \n___3___ K.KategoriAd = \'Peynir\' \n___4___ ___5___ MONTH(S.Tarih);',
    blanks: ['MONTH', 'SUM', 'WHERE', 'GROUP', 'BY'],
    sql_file: 'SQL Her bir kasiyerin bu ay yaptığı satış tutarının bulunması.sql',
    explanation: 'MONTH(Tarih) fonksiyonu ay bilgisine göre gruplamayı sağlar. Filtreleme WHERE ile Peynir kategorisi için yapılır.'
  },
  {
    id: 55,
    category: 'subquery',
    type: 'code',
    question: 'Tarih boyunca en çok satış yapılan ayı işlem sayısına göre azalan sırada sıralayıp LIMIT kullanarak bulan sorguyu tamamlayın.',
    snippet: 'SELECT ___1___(S.Tarih), COUNT(*) \nFROM satis AS S \n___2___ ___3___ MONTH(S.Tarih) \n___4___ ___5___ COUNT(*) ___6___ \n___7___ 0, 1;',
    blanks: ['MONTH', 'GROUP', 'BY', 'ORDER', 'BY', 'DESC', 'LIMIT'],
    sql_file: 'SQL-Ödev3 Cevaplar 16.sql',
    explanation: 'MONTH(Tarih) bazında gruplanır. ORDER BY COUNT(*) DESC ile çoktan aza sıralanıp LIMIT 0,1 ile en üstteki kayıt seçilir.'
  },
  {
    id: 56,
    category: 'subquery',
    type: 'code',
    question: 'Şubelerin aylık bazda kaç adet satış yaptığını (şube adı ve ay numarasıyla) listeleyen sorguyu tamamlayın.',
    snippet: 'SELECT SU.Ad, COUNT(*), ___1___(S.Tarih) \nFROM satis AS S \nINNER JOIN sube AS SU ___2___ SU.SubeNo = S.SubeNo \n___3___ ___4___ SU.SubeNo, ___5___(S.Tarih);',
    blanks: ['MONTH', 'ON', 'GROUP', 'BY', 'MONTH'],
    sql_file: 'SQL-Ödev3 Cevaplar 17.sql',
    explanation: 'Şubeler ve satis tablosu ON ile birleştirilir. Gruplama hem şube noya hem de MONTH(Tarih)\'e göre çoklu olarak yapılır.'
  },
  {
    id: 57,
    category: 'subquery',
    type: 'code',
    question: 'Ürün tablosundaki \'Kategori\' sütununu \'KategoriNo\' olarak değiştirip yabancı anahtar (FOREIGN KEY) ilişkisi ekleyen sorguyu tamamlayın.',
    snippet: '___1___ ___2___ market.urun \n___3___ COLUMN Kategori KategoriNo INT(11) NOT NULL; \nALTER TABLE market.urun \n___4___ ___5___ fk_kategori \n___6___ KEY (KategoriNo) ___7___ market.kategori (KategoriNo);',
    blanks: ['ALTER', 'TABLE', 'CHANGE', 'ADD', 'CONSTRAINT', 'FOREIGN', 'REFERENCES'],
    sql_file: 'SQL Yabancı Anahtar Kategori.sql',
    explanation: 'CHANGE COLUMN sütun adını ve türünü değiştirir. ADD CONSTRAINT ... FOREIGN KEY (...) REFERENCES tablo (sütun) yabancı anahtarı tanımlar.'
  },
  {
    id: 58,
    category: 'subquery',
    type: 'code',
    question: 'Ürün tablosundaki \'Marka\' sütununu \'MarkaNo\' olarak değiştirip yabancı anahtar (FOREIGN KEY) tanımlayan sorguyu tamamlayın.',
    snippet: '___1___ TABLE market.urun \n___2___ COLUMN Marka MarkaNo INT(11) NOT NULL; \nALTER TABLE market.urun \n___3___ CONSTRAINT fk_marka \n___4___ KEY (MarkaNo) ___5___ market.marka (MarkaNo);',
    blanks: ['ALTER', 'CHANGE', 'ADD', 'FOREIGN', 'REFERENCES'],
    sql_file: 'SQL Yabancı Anahtar Marka.sql',
    explanation: 'Sütun adını değiştirmek için ALTER TABLE urun CHANGE COLUMN, ilişki eklemek için ise ADD CONSTRAINT ... FOREIGN KEY ... REFERENCES kullanılır.'
  },
  {
    id: 59,
    category: 'subquery',
    type: 'code',
    question: 'Bugün satılan ürünleri, adetlerini ve tutarlarını (fiyat*adet) listeleyen sorguyu tamamlayın.',
    snippet: 'SELECT U.UrunNo, U.UrunAd, U.Fiyat, S.Adet, (U.Fiyat * S.Adet) ___1___ \'Tutar\' \nFROM satis AS S \nINNER JOIN urun AS U ___2___ U.UrunNo = S.UrunNo \n___3___ ___4___(Tarih) = DAY(NOW()) \n___5___ MONTH(Tarih) = MONTH(NOW());',
    blanks: ['AS', 'ON', 'WHERE', 'DAY', 'AND'],
    sql_file: 'SQL Bugün hangi ürünlerin satıldığının listelenmesi.sql',
    explanation: 'Yeni hesaplanan kolona AS ile takma isim verilir. Bugün filtresi için DAY(Tarih) = DAY(NOW()) AND MONTH(Tarih) = MONTH(NOW()) kontrol edilir.'
  },
  {
    id: 60,
    category: 'subquery',
    type: 'code',
    question: 'Bugün toplam kaç adet (farklı işlemlerin toplam adedi değil, satılan toplam adet) ürün satıldığını bulan sorguyu tamamlayın.',
    snippet: '___1___ ___2___(Adet) AS \'Toplam Adet\' \nFROM satis \n___3___ DAY(Tarih) = DAY(NOW()) \n___4___ MONTH(Tarih) = ___5___(NOW());',
    blanks: ['SELECT', 'SUM', 'WHERE', 'AND', 'MONTH'],
    sql_file: 'SQL Bu ay yapılan toplam satış tutarı.sql',
    explanation: 'Toplam miktarı bulmak için COUNT yerine SUM(Adet) kullanılır. Tarih filtreleri WHERE and AND ile gün-ay kontrolüyle verilir.'
  },
  {
    id: 61,
    category: 'subquery',
    type: 'code',
    question: 'Kategori ve Marka tablolarına yabancı anahtarla (FOREIGN KEY REFERENCES) bağlı bir ürün tablosu oluşturma şemasını tamamlayın.',
    snippet: 'CREATE TABLE urun ( \n  UrunNo INT(11) NOT NULL ___1___, \n  UrunAd VARCHAR(45) NOT NULL, \n  MarkaNo INT(11) NOT NULL, \n  KategoriNo INT(11) NOT NULL, \n  ___2___ KEY (UrunNo), \n  ___3___ fk_kategori ___4___ KEY (KategoriNo) ___5___ kategori (KategoriNo) \n);',
    blanks: ['AUTO_INCREMENT', 'PRIMARY', 'CONSTRAINT', 'FOREIGN', 'REFERENCES'],
    sql_file: '2_Urun Tablosu Oluşturma.sql',
    explanation: 'Otomatik artan sütun için AUTO_INCREMENT, birincil anahtar için PRIMARY KEY, yabancı anahtar için CONSTRAINT ... FOREIGN KEY ... REFERENCES kullanılır.'
  },
  {
    id: 62,
    category: 'subquery',
    type: 'code',
    question: '\'İçecek\' kategorisindeki ürünlerde %20 indirim yaparak ürün adı, normal fiyat ve indirimli fiyatı listeleyen ve fiyata göre artan sırada sıralayan sorguyu tamamlayın.',
    snippet: '___1___ UrunAd, Fiyat, Fiyat * 0.8 AS \'İndirimli Fiyat\' \nFROM urun \n___2___ Kategori ___3___ (\'İçecek\') \n___4___ ___5___ Fiyat ___6___;',
    blanks: ['SELECT', 'WHERE', 'IN', 'ORDER', 'BY', 'ASC'],
    sql_file: 'SQL Icecek Kategorisindeki Ürünlerde 20 indirim yaparak listeleme.sql',
    explanation: '%20 indirimli fiyat Fiyat * 0.8 ile hesaplanır. Kategori filtresi WHERE Kategori IN (\'İçecek\') ile yapılır ve ORDER BY Fiyat ASC ile sıralanır.'
  },
  {
    id: 63,
    category: 'subquery',
    type: 'code',
    question: 'Ürünleri adına göre sıralayıp 3. kayıttan itibaren 5 adet listeleyen (Sayfalama - Pagination) sorguyu tamamlayın.',
    snippet: '___1___ UrunAd, Kategori, Marka \nFROM urun \n___2___ ___3___ UrunAd ___4___ \n___5___ 3, 5;',
    blanks: ['SELECT', 'ORDER', 'BY', 'ASC', 'LIMIT'],
    sql_file: 'SQL Belirli Sayıda urun Listeleme Sayfalama.sql',
    explanation: 'Sıralama için ORDER BY UrunAd ASC kullanılır. Sayfalama için LIMIT offset, count (yani LIMIT 3, 5) kullanılır.'
  },
  {
    id: 64,
    category: 'subquery',
    type: 'code',
    question: 'Telefon numarası \'505\' ile başlayan müşterilerin sayısını bulan sorguyu yazın.',
    snippet: '___1___ ___2___(*) ___3___ musteri ___4___ Telefon ___5___ \'505%\';',
    blanks: ['SELECT', 'COUNT', 'FROM', 'WHERE', 'LIKE'],
    sql_file: 'SQL-Ödev3 Cevaplar 8.sql',
    explanation: 'Kayıt sayısını bulmak için COUNT(*), eşleşme için WHERE ve LIKE kullanılır.'
  },
  {
    id: 65,
    category: 'subquery',
    type: 'code',
    question: 'Müşterileri şehirlerine göre gruplayayıp her şehirde kaç müşteri olduğunu listeleyen sorguyu yazın.',
    snippet: '___1___ Sehir, ___2___(*) FROM musteri ___3___ ___4___ Sehir;',
    blanks: ['SELECT', 'COUNT', 'GROUP', 'BY'],
    sql_file: 'SQL-Ödev3 Cevaplar 9.sql',
    explanation: 'Şehirlere göre gruplayarak saymak için COUNT ve GROUP BY Sehir kullanılır.'
  },
  {
    id: 66,
    category: 'subquery',
    type: 'code',
    question: 'Belirtilen doğum tarihinden (1984-06-05) bugüne kadar geçen toplam gün sayısını hesaplayan DATEDIFF sorgusunu tamamlayın.',
    snippet: '___1___ ___2___(___3___(), \'1984-06-05\') ___4___ \'Furkan Kaç Günlük\';',
    blanks: ['SELECT', 'DATEDIFF', 'NOW', 'AS'],
    sql_file: 'SQL_Furkan Kac Gunluk.sql',
    explanation: 'DATEDIFF iki tarih arasındaki farkı gün olarak döner. NOW() bugünü ifade eder.'
  },
  {
    id: 67,
    category: 'subquery',
    type: 'code',
    question: 'Elektronik kategorisinin ortalama ürün fiyatını GROUP BY ve HAVING alt sorgusuyla bulan sorguyu tamamlayın.',
    snippet: '___1___ ___2___(Fiyat) ___3___ urun ___4___ ___5___ KategoriNo ___6___ KategoriNo = (SELECT KategoriNo FROM kategori WHERE KategoriAd = \'Elektronik\');',
    blanks: ['SELECT', 'AVG', 'FROM', 'GROUP', 'BY', 'HAVING'],
    sql_file: 'SQL Alt Sorgu GROUP BY ve HAVING Kullanımı.sql',
    explanation: 'Kategori bazında gruplandıktan sonra HAVING koşulunda Elektronik kategorisinin nosu alt sorgudan çekilir.'
  },
  {
    id: 68,
    category: 'subquery',
    type: 'code',
    question: 'MarkaEkle saklı yordamında parametre modlarını (IN/OUT), SQLEXCEPTION Handler bildirimini ve INSERT ifadesini tamamlayın.',
    snippet: 'CREATE PROCEDURE MarkaEkle (___1___ P_Marka VARCHAR(45), IN P_MarkaNo INT, P_Ekleyen INT, ___2___ O_Durum TEXT) \nBEGIN \n  DECLARE EXIT ___3___ FOR SQLEXCEPTION \n  BEGIN \n    SET O_Durum = \'Hata oluştu\'; \n  END; \n  ___4___ ___5___ marka(No, Marka, Ekleyen) ___6___ (P_MarkaNo, P_Marka, P_Ekleyen); \nEND',
    blanks: ['IN', 'OUT', 'HANDLER', 'INSERT', 'INTO', 'VALUES'],
    sql_file: '2_Urun Tablosu Oluşturma.sql',
    explanation: 'Saklı yordam parametreleri IN veya OUT olabilir. Hataları yakalamak için HANDLER tanımlanır.'
  },
  {
    id: 69,
    category: 'subquery',
    type: 'code',
    question: 'UrunEkle saklı yordamı (procedure) içinde yer alan INSERT bloğunu ve OUT parametresine değer atama kelimesini yazın.',
    snippet: 'CREATE PROCEDURE UrunEkle (IN P_UrunAd VARCHAR(100), IN P_MarkaNo INT, IN P_KategoriNo INT, IN P_Fiyat FLOAT, OUT Sonuc VARCHAR(50)) \nBEGIN \n  ___1___ ___2___ urun (Ad, MarkaNo, KategoriNo, Fiyat) \n  ___3___ (P_UrunAd, P_MarkaNo, P_KategoriNo, P_Fiyat); \n  ___4___ Sonuc = \'Ürün Eklendi\'; \nEND',
    blanks: ['INSERT', 'INTO', 'VALUES', 'SET'],
    sql_file: 'SQL-Ödev3 Cevaplar 10.sql',
    explanation: 'Veri ekleme işlemi INSERT INTO ... VALUES ile yapılır. Parametrelere veya değişkenlere değer atamak için SET kullanılır.'
  },
  {
    id: 70,
    category: 'subquery',
    type: 'code',
    question: 'Bir ürünün son kullanma tarihine kalan gün sayısını hesaplayan saklı fonksiyonu (FUNCTION) tamamlayın.',
    snippet: 'CREATE FUNCTION SonKullanmaZamanHesapla (P_SonKullanmaTarih DATE) ___1___ INT \nBEGIN \n  ___2___ KalanZaman INT; \n  ___3___ KalanZaman = DATEDIFF(P_SonKullanmaTarih, NOW()); \n  ___4___ KalanZaman; \nEND',
    blanks: ['RETURNS', 'DECLARE', 'SET', 'RETURN'],
    sql_file: 'SQL Her bir kasiyerin bu ay yaptığı satış tutarının bulunması.sql',
    explanation: 'MySQL fonksiyonlarında dönüş tipi RETURNS ile, gövde içi değişkenler DECLARE ile tanımlanır. Değer döndürme RETURN ile yapılır.'
  },
  {
    id: 71,
    category: 'subquery',
    type: 'code',
    question: 'Fiyatı 5 TL ile 20 TL arasında (sınırlar dahil) olan ürünleri filtreleyip fiyata göre sıralayan sorguyu tamamlayın.',
    snippet: '___1___ * FROM market.urun \n___2___ Fiyat ___3___ 5 ___4___ 20 \n___5___ BY Fiyat;',
    blanks: ['SELECT', 'WHERE', 'BETWEEN', 'AND', 'ORDER'],
    sql_file: 'SQL WHERE Fiyat Kıyaslama.sql',
    explanation: 'BETWEEN ... AND ... yapısı belirtilen aralıktaki değerleri filtreler. ORDER BY sıralama yapar.'
  },
  {
    id: 72,
    category: 'subquery',
    type: 'code',
    question: 'Müşteri tablosunda adı \'Sinan\' olan müşterileri \'Petek\' olarak güncelleyen ve boş telefon numarası olanları seçen sorguları tamamlayın.',
    snippet: '___1___ musteri ___2___ Ad = \'Petek\' ___3___ Ad = \'Sinan\';\nSELECT * FROM musteri ___4___ Telefon = \'\';',
    blanks: ['UPDATE', 'SET', 'WHERE', 'WHERE'],
    sql_file: 'SQL Ürünü olmayan kategorilerin listelenmesi.sql',
    explanation: 'Kayıtları güncellemek için UPDATE ... SET ... WHERE kullanılır. Sorgu filtreleri WHERE ile belirtilir.'
  },
  {
    id: 73,
    category: 'subquery',
    type: 'code',
    question: 'Elektronik kategorisindeki ürünlerin ortalama fiyatının altında kalan elektronik ürünleri alt sorgularla getiren ve ürün fiyatına göre sıralayan ifadeyi tamamlayın.',
    snippet: 'SELECT * FROM urun \n___1___ Fiyat < (SELECT AVG(Fiyat) FROM urun GROUP BY KategoriNo HAVING KategoriNo = (SELECT KategoriNo FROM kategori WHERE KategoriAd = \'Elektronik\')) \n___2___ KategoriNo = (SELECT KategoriNo FROM kategori ___3___ KategoriAd = \'Elektronik\') \n___4___ ___5___ Fiyat;',
    blanks: ['WHERE', 'AND', 'WHERE', 'ORDER', 'BY'],
    sql_file: 'SQL Alt Sorgu GROUP BY ve HAVING Kullanımı.sql',
    explanation: 'Koşulları birleştirmek için AND kullanılır. Alt sorgu ve dış sorgu WHERE kelimeleriyle filtrelenir ve ORDER BY ile sıralanır.'
  },
  {
    id: 74,
    category: 'subquery',
    type: 'code',
    question: 'Veritabanı oluşturma ve sınıf tablosu oluşturma DDL ifadelerini tamamlayın.',
    snippet: '___1___ DATABASES; \n___2___ TABLES; \nCREATE ___3___ IF NOT ___4___ sinif ( \n  SinifNo INT ___5___ KEY AUTO_INCREMENT, \n  SinifAd VARCHAR(20) \n);',
    blanks: ['SHOW', 'SHOW', 'TABLE', 'EXISTS', 'PRIMARY'],
    sql_file: '1_Veritabani_Tablo_Olusturma.sql',
    explanation: 'SHOW TABLES/DATABASES nesneleri listeler. CREATE TABLE IF NOT EXISTS tablo yapısını güvenli şekilde oluşturur.'
  },
  {
    id: 75,
    category: 'subquery',
    type: 'code',
    question: 'Her şehirdeki müşterilerin sayısını listeleyen ve müşteri sayısı 2\'den fazla olan şehirleri getiren sorguyu yazın.',
    snippet: '___1___ M.Sehir, ___2___(M.Sehir) FROM musteri AS M ___3___ ___4___ Sehir ___5___ 2 < ___6___(M.Sehir);',
    blanks: ['SELECT', 'COUNT', 'GROUP', 'BY', 'HAVING', 'COUNT'],
    sql_file: 'SQL-Ödev3 Cevaplar 11.sql',
    explanation: 'Sorgu çıktısı SELECT ile belirlenir. GROUP BY gruplamayı sağlar, gruplanmış veri kriterleri HAVING COUNT ile süzülür.'
  }
];


const questionsDers10Zor = [
  {
    id: 1,
    category: 'joins',
    type: 'code',
    question: '1 nolu müşterinin satın aldığı ürünlerin adını, fiyatını ve müşteri numarasını listeleyen sorguyu tamamlayın.',
    snippet: '___1___ U.UrunAd, U.Fiyat, S.MusteriNo \n___2___ satis ___3___ S\n___4___ urun ___5___ U\n___6___ U.UrunNo = S.UrunNo\n___7___ S.MusteriNo = 1;',
    blanks: ['SELECT', 'FROM', 'AS', 'INNER JOIN', 'AS', 'ON', 'WHERE'],
    sql_file: 'SQL 1 nolu müşterinin satın aldığı ürünlerin listelenmesi.sql',
    explanation: 'SELECT kolonları listeler. satis tablosuna S alias\'ı verilir. urun tablosu U alias\'ı ile INNER JOIN yapılarak ON kelimesiyle ilişkilendirilir. Müşteri filtresi WHERE ile uygulanır.'
  },
  {
    id: 2,
    category: 'joins',
    type: 'code',
    question: '1 nolu müşterinin satın aldığı ürünlerin toplam tutarını ve müşteri numarasını veren aggregate sorgusunu yazın.',
    snippet: '___1___ ___2___(U.Fiyat * S.Adet), S.MusteriNo \n___3___ satis ___4___ S\n___5___ urun ___6___ U\n___7___ U.UrunNo = S.UrunNo\n___8___ S.MusteriNo = 1;',
    blanks: ['SELECT', 'SUM', 'FROM', 'AS', 'INNER JOIN', 'AS', 'ON', 'WHERE'],
    sql_file: 'SQL 1 nolu müşterinin satın aldığı ürünlerin toplam tutarı.sql',
    explanation: 'SUM fonksiyonu toplam tutarı (fiyat * adet) hesaplar. Tablolar INNER JOIN ile birleştirilir ve ON birleşme koşulu belirlenir.'
  },
  {
    id: 3,
    category: 'joins',
    type: 'code',
    question: '2 nolu kasiyerin içinde bulunduğumuz ayda yaptığı toplam satış tutarı sorgusunu tamamlayın.',
    snippet: '___1___ ___2___(U.Fiyat * S.Adet) \n___3___ satis ___4___ S\n___5___ urun ___6___ U\n___7___ U.UrunNo = S.UrunNo\n___8___ S.KasiyerNo = 2\n___9___ ___10___(S.Tarih) = ___11___(___12___());',
    blanks: ['SELECT', 'SUM', 'FROM', 'AS', 'INNER JOIN', 'AS', 'ON', 'WHERE', 'AND', 'MONTH', 'MONTH', 'NOW'],
    sql_file: 'SQL 2 nolu kasiyerin bu ay yaptığı toplam satış tutarı.sql',
    explanation: 'SUM fonksiyonu toplam tutarı hesaplar. Tablolar INNER JOIN ile bağlanır. MONTH() fonksiyonu tarihin ay bilgisini alıp NOW() (bugün) ile karşılaştırır.'
  },
  {
    id: 4,
    category: 'joins',
    type: 'code',
    question: '\'Nevbahar\' isimli kasiyerin bu ay yaptığı toplam satış tutarını hesaplayan 3\'lü JOIN sorgusunu tamamlayın.',
    snippet: '___1___ ___2___(U.Fiyat * S.Adet) \n___3___ satis ___4___ S\n___5___ urun ___6___ U ___7___ U.UrunNo = S.UrunNo\n___8___ kasiyer ___9___ K ___10___ K.KasiyerNo = S.KasiyerNo\n___11___ K.Ad = \'Nevbahar\'\n___12___ ___13___(S.Tarih) = ___14___(___15___());',
    blanks: ['SELECT', 'SUM', 'FROM', 'AS', 'INNER JOIN', 'AS', 'ON', 'INNER JOIN', 'AS', 'ON', 'WHERE', 'AND', 'MONTH', 'MONTH', 'NOW'],
    sql_file: 'SQL Meltem isimli kasiyerin bu ay yaptığı toplam satış tutarı.sql',
    explanation: 'Satis, urun ve kasiyer tabloları INNER JOIN ile bağlanır. Nevbahar ismine göre filtreleme WHERE ile yapılır. NOW() fonksiyonunun ayı MONTH() ile karşılaştırılır.'
  },
  {
    id: 5,
    category: 'joins',
    type: 'code',
    question: 'Alışveriş yapmayan (satis tablosunda kaydı bulunmayan) müşterilerin adını, müşteri numarasını ve telefonunu listelemek için eksik JOIN ve filtre kelimelerini tamamlayın.',
    snippet: '___1___ M.Ad, M.MusteriNo, M.Telefon \n___2___ musteri ___3___ M\n___4___ satis ___5___ S\n___6___ S.MusteriNo = M.MusteriNo\n___7___ S.MusteriNo ___8___;',
    blanks: ['SELECT', 'FROM', 'AS', 'LEFT JOIN', 'AS', 'ON', 'WHERE', 'IS NULL'],
    sql_file: 'SQL Alışveriş yapmayan müşterilerin listelenmesi.sql',
    explanation: 'Müşterilerin tamamını getirmek ve satış yapmayanları bulmak için LEFT JOIN kullanılır. Satış kaydı olmayanlar WHERE koşulunda IS NULL ile elenir.'
  },
  {
    id: 6,
    category: 'joins',
    type: 'code',
    question: 'Satış yapmayan kasiyerleri ad ve soyadlarını birleştirerek ve kasiyer numarasıyla listeleyen sorguyu tamamlayın.',
    snippet: '___1___ ___2___(K.Ad, \' \', K.Soyad) ___3___ \'Ad Soyad\', S.KasiyerNo \n___4___ kasiyer ___5___ K\n___6___ satis ___7___ S\n___8___ K.KasiyerNo = S.KasiyerNo\n___9___ S.KasiyerNo ___10___;',
    blanks: ['SELECT', 'CONCAT', 'AS', 'FROM', 'AS', 'LEFT JOIN', 'AS', 'ON', 'WHERE', 'IS NULL'],
    sql_file: 'SQL Satış Yapmayan Kasiyerlerin Listelenmesi.sql',
    explanation: 'CONCAT fonksiyonu ad ve soyadı araya boşluk koyarak birleştirir. LEFT JOIN ile kasiyerler satıs ile birleştirilir. Satış yapmayanlar IS NULL ile filtrelenir.'
  },
  {
    id: 7,
    category: 'joins',
    type: 'code',
    question: 'Satis tablosunda hiç kaydı bulunmayan satış yapmamış şubeleri RIGHT JOIN kullanarak listeleyen sorguyu tamamlayın.',
    snippet: '___1___ SU.SubeNo, S.SubeNo, SU.Ad \n___2___ satis ___3___ S\n___4___ sube ___5___ SU\n___6___ S.SubeNo = SU.SubeNo\n___7___ S.SubeNo ___8___;',
    blanks: ['SELECT', 'FROM', 'AS', 'RIGHT JOIN', 'AS', 'ON', 'WHERE', 'IS NULL'],
    sql_file: 'SQL Satış Yapmayan Şubelerin Listelenmesi.sql',
    explanation: 'Şubeler sağ tablo (RIGHT JOIN) yapılarak tüm şubeler listelenir ve satis tablosundaki karşılığı IS NULL olanlar elenir.'
  },
  {
    id: 8,
    category: 'joins',
    type: 'code',
    question: 'Hiç satışı yapılmamış ürünleri RIGHT JOIN kullanarak listeleyen ve ürün numarasına göre sıralayan sorguyu tamamlayın.',
    snippet: '___1___ S.SatisNo, U.UrunAd, S.UrunNo \n___2___ satis ___3___ S\n___4___ urun ___5___ U ___6___ S.UrunNo = U.UrunNo\n___7___ S.UrunNo ___8___\n___9___ S.UrunNo;',
    blanks: ['SELECT', 'FROM', 'AS', 'RIGHT JOIN', 'AS', 'ON', 'WHERE', 'IS NULL', 'ORDER BY'],
    sql_file: 'SQL Satışı Yapılmayan Ürünlerin Listelenmesi.sql',
    explanation: 'Ürünler sağda olduğu için RIGHT JOIN kullanılır. Satışı olmayanları filtrelemek için WHERE S.UrunNo IS NULL yazılır ve ORDER BY ile sıralanır.'
  },
  {
    id: 9,
    category: 'joins',
    type: 'code',
    question: 'Bünyesinde hiçbir ürün barındırmayan (ürünü olmayan) kategorileri listeleyen sorguyu tamamlayın.',
    snippet: '___1___ K.KategoriAd \n___2___ kategori ___3___ K \n___4___ urun ___5___ U\n___6___ K.KategoriNo = U.KategoriNo\n___7___ U.KategoriNo ___8___;',
    blanks: ['SELECT', 'FROM', 'AS', 'LEFT JOIN', 'AS', 'ON', 'WHERE', 'IS NULL'],
    sql_file: 'SQL Ürünü olmayan kategorilerin listelenmesi.sql',
    explanation: 'Kategori sol tablo kabul edilip LEFT JOIN ile urun tablosuna bağlanır. Ürünü olmayan kategoriler WHERE U.KategoriNo IS NULL ile tespit edilir.'
  },
  {
    id: 10,
    category: 'joins',
    type: 'code',
    question: 'Ürünü olmayan markaları RIGHT JOIN ile marka tablosunu sağda tutarak listeleyen sorguyu tamamlayın.',
    snippet: '___1___ M.MarkaAd \n___2___ urun ___3___ U  \n___4___ marka ___5___ M\n___6___ M.MarkaNo = U.MarkaNo\n___7___ U.UrunNo ___8___;',
    blanks: ['SELECT', 'FROM', 'AS', 'RIGHT JOIN', 'AS', 'ON', 'WHERE', 'IS NULL'],
    sql_file: 'SQL Ürünü olmayan markaların listelenmesi.sql',
    explanation: 'Markaları sağ tablo tutarak RIGHT JOIN ile ürünlerle birleştiririz. Ürünü olmayan markalar WHERE U.UrunNo IS NULL ile bulunur.'
  },
  {
    id: 11,
    category: 'joins',
    type: 'code',
    question: 'Ürün adlarını, kategori adlarını ve marka adlarını birlikte listeleyen 3\'lü INNER JOIN sorgusunu tamamlayın.',
    snippet: '___1___ UrunAd, KategoriAd, MarkaAd\n___2___ urun ___3___ u \n___4___ kategori ___5___ k ___6___ k.KategoriNo = u.KategoriNo\n___7___ marka ___8___ m ___9___ m.MarkaNo = u.MarkaNo;',
    blanks: ['SELECT', 'FROM', 'AS', 'INNER JOIN', 'AS', 'ON', 'INNER JOIN', 'AS', 'ON'],
    sql_file: 'Uygulama Soru-2.sql',
    explanation: 'Üç tabloyu birleştirmek için FROM ifadesi ve iki adet INNER JOIN ile bunlara karşılık gelen ON birleştirme şartları yazılır.'
  },
  {
    id: 12,
    category: 'joins',
    type: 'code',
    question: 'Kategori adı \'Baharat\' olan ürünleri ve kategori adlarını INNER JOIN kullanarak listeleyen sorguyu tamamlayın.',
    snippet: '___1___ UrunAd, KategoriAd \n___2___ urun ___3___ u \n___4___ kategori ___5___ k\n___6___ k.KategoriNo = u.KategoriNo\n___7___ k.KategoriAd ___8___ (\'Baharat\');',
    blanks: ['SELECT', 'FROM', 'AS', 'INNER JOIN', 'AS', 'ON', 'WHERE', 'IN'],
    sql_file: 'SQL Kategorite Göre Listeleme.sql',
    explanation: 'Tablolar INNER JOIN ... ON ile bağlanır, ardından WHERE k.KategoriAd IN (\'Baharat\') veya \'=\' ile filtrelenir.'
  },
  {
    id: 13,
    category: 'joins',
    type: 'code',
    question: 'Hangi markadan kaç adet ürün olduğunu bulan, adet sayısı 1\'den büyük olan markaları listeleyen aggregate sorguyu tamamlayın.',
    snippet: '___1___ ___2___(U.MarkaNo) ___3___ \'Adet\', M.MarkaAd ___4___ \'Marka Ad\'\n___5___ urun ___6___ U\n___7___ marka ___8___ M ___9___ M.MarkaNo = U.MarkaNo\n___10___ M.MarkaNo\n___11___ 1 < ___12___(U.MarkaNo);',
    blanks: ['SELECT', 'COUNT', 'AS', 'AS', 'FROM', 'AS', 'INNER JOIN', 'AS', 'ON', 'GROUP BY', 'HAVING', 'COUNT'],
    sql_file: 'SQL Hangi Markadan kaç adet ürün olduğunu bulan sorgu.sql',
    explanation: 'COUNT aggregate fonksiyonudur. Markaya göre gruplama GROUP BY ile yapılır. Gruplanmış sonuçlardaki filtreleme HAVING COUNT(...) ile gerçekleştirilir.'
  },
  {
    id: 14,
    category: 'joins',
    type: 'code',
    question: 'Her bir kasiyerin bu ay yaptığı toplam satış tutarını kasiyer adı ve oranıyla birlikte hesaplayan sorguyu tamamlayın.',
    snippet: '___1___ K.Ad, S.KasiyerNo, ___2___(S.Adet * U.Fiyat) \n___3___ satis ___4___ S\n___5___ urun ___6___ U ___7___ U.UrunNo = S.UrunNo\n___8___ kasiyer ___9___ K ___10___ K.KasiyerNo = S.KasiyerNo\n___11___ ___12___(___13___()) = ___14___(S.Tarih) \n___15___ ___16___(___17___()) = ___18___(S.Tarih)\n___19___ S.KasiyerNo;',
    blanks: ['SELECT', 'SUM', 'FROM', 'AS', 'INNER JOIN', 'AS', 'ON', 'INNER JOIN', 'AS', 'ON', 'WHERE', 'MONTH', 'NOW', 'MONTH', 'AND', 'YEAR', 'NOW', 'YEAR', 'GROUP BY'],
    sql_file: 'SQL Her bir kasiyerin bu ay yaptığı satış tutarının bulunması.sql',
    explanation: 'SUM satış tutarını toplar. Tablolar INNER JOIN ve ON ile bağlanır. Kasiyere göre gruplamak için GROUP BY S.KasiyerNo kullanılır.'
  },
  {
    id: 15,
    category: 'joins',
    type: 'code',
    question: 'Her bir şubenin bugün yaptığı toplam satış tutarını bulan sorguyu tamamlayın.',
    snippet: '___1___ SU.Ad, ___2___(S.Adet * U.Fiyat) \n___3___ satis ___4___ S\n___5___ urun ___6___ U ___7___ U.UrunNo = S.UrunNo\n___8___ sube ___9___ SU ___10___ SU.SubeNo = S.SubeNo\n___11___ ___12___(___13___(), S.Tarih) = 0\n___14___ S.SubeNo;',
    blanks: ['SELECT', 'SUM', 'FROM', 'AS', 'INNER JOIN', 'AS', 'ON', 'INNER JOIN', 'AS', 'ON', 'WHERE', 'DATEDIFF', 'NOW', 'GROUP BY'],
    sql_file: 'SQL Her bir şubenin bugün yaptığı satış tutarının bulunması.sql',
    explanation: 'DATEDIFF(NOW(), Tarih) = 0 bugün yapılan satışları filtreler. Şubeye göre toplam tutar için SUM fonksiyonu ve GROUP BY kullanılır.'
  },
  {
    id: 16,
    category: 'joins',
    type: 'code',
    question: 'Hangi kategoride kaç çeşit ürün olduğunu bulup kategori adıyla listeleyen sorguyu tamamlayın.',
    snippet: '___1___ ___2___(U.UrunNo) ___3___ \'Adet\', K.KategoriAd ___4___ \'Kategori Adı\' \n___5___ kategori ___6___ K\n___7___ urun ___8___ U\n___9___ U.KategoriNo = K.KategoriNo\n___10___ K.KategoriNo;',
    blanks: ['SELECT', 'COUNT', 'AS', 'AS', 'FROM', 'AS', 'INNER JOIN', 'AS', 'ON', 'GROUP BY'],
    sql_file: 'SQL Her kategoride kaç çeşit ürün olduğunun bulunması.sql',
    explanation: 'COUNT(UrunNo) kategorideki ürün sayısını verir. INNER JOIN ile kategoriler bağlanır ve GROUP BY ile gruplama yapılır.'
  },
  {
    id: 17,
    category: 'joins',
    type: 'code',
    question: 'Bu yıl yapılan satışları ay bazında gruplayarak, her ayın toplam satış tutarını hesaplayan sorguyu tamamlayın.',
    snippet: '___1___ ___2___(S.Adet * U.Fiyat), ___3___(S.Tarih)\n___4___ urun ___5___ U\n___6___ satis ___7___ S ___8___ U.UrunNo = S.UrunNo\n___9___ ___10___(S.Tarih) = ___11___(___12___())\n___13___ ___14___(S.Tarih);',
    blanks: ['SELECT', 'SUM', 'MONTH', 'FROM', 'AS', 'INNER JOIN', 'AS', 'ON', 'WHERE', 'YEAR', 'YEAR', 'NOW', 'GROUP BY', 'MONTH'],
    sql_file: 'SQL Her yıl her ay toplam satış tutarını bulunması.sql',
    explanation: 'Aylık gruplama MONTH(Tarih) ile yapılır. Bu yıl filtresi YEAR(Tarih) = YEAR(NOW()) ile WHERE altında uygulanır.'
  },
  {
    id: 18,
    category: 'joins',
    type: 'code',
    question: 'Her kategorinin ortalama fiyat bilgisini bulan görünümü (VIEW) oluşturan veya değiştiren sorguyu tamamlayın.',
    snippet: '___1___ ___2___ ortalamaFiyatKategori ___3___\n___4___ ___5___(Fiyat) ___6___ \'OrtalamaFiyat\', K.KategoriAd \n___7___ urun ___8___ U\n___9___ kategori ___10___ K ___11___ K.KategoriNo = U.KategoriNo\n___12___ K.KategoriAd;',
    blanks: ['ALTER', 'VIEW', 'AS', 'SELECT', 'AVG', 'AS', 'FROM', 'AS', 'INNER JOIN', 'AS', 'ON', 'GROUP BY'],
    sql_file: 'SQL Kategori Ortalama Fiyat.sql',
    explanation: 'ALTER VIEW görünümü güncellemeye yarar. Ortalama için AVG kullanılır. Kategorilere göre gruplama GROUP BY ile sağlanır.'
  },
  {
    id: 19,
    category: 'joins',
    type: 'code',
    question: 'Müşterilerin satın almış oldukları ürünlerin adını, fiyatını, satış tarihini ve müşteri bilgilerini listeleyen sorguyu tamamlayın.',
    snippet: '___1___ M.Ad, M.Soyad, U.UrunNo, U.UrunAd, U.Fiyat, S.Tarih \n___2___ satis ___3___ S\n___4___ urun ___5___ U\n___6___ S.UrunNo = U.UrunNo\n___7___ musteri ___8___ M\n___9___ M.MusteriNo = S.MusteriNo;',
    blanks: ['SELECT', 'FROM', 'AS', 'INNER JOIN', 'AS', 'ON', 'INNER JOIN', 'AS', 'ON'],
    sql_file: 'Uygulama Soru-1.sql',
    explanation: 'FROM tablo belirtir. satis tablosu urun ve musteri tablolarıyla INNER JOIN ve ON koşulları üzerinden birleştirilir.'
  },
  {
    id: 20,
    category: 'joins',
    type: 'code',
    question: 'Her bir kasiyerin toplam kaç liralık satış yaptığını kasiyer adına göre gruplayıp ürün numarasına göre sıralayan sorguyu tamamlayın.',
    snippet: '___1___ k.Ad ___2___ \'Kasiyer Adı\', ___3___(u.Fiyat * s.Adet) \n___4___ satis ___5___ s \n___6___ kasiyer ___7___ k ___8___ s.KasiyerNo = k.KasiyerNo\n___9___ urun ___10___ u ___11___ s.UrunNo = u.UrunNo\n___12___ k.Ad\n___13___ u.UrunNo;',
    blanks: ['SELECT', 'AS', 'SUM', 'FROM', 'AS', 'INNER JOIN', 'AS', 'ON', 'INNER JOIN', 'AS', 'ON', 'GROUP BY', 'ORDER BY'],
    sql_file: 'Uygulama Soru-10.sql',
    explanation: 'Toplam tutar SUM ile hesaplanır. Kasiyer ve ürün tabloları INNER JOIN ile bağlanır. GROUP BY kasiyer adına göre yapılırken, ORDER BY ile ürün numarasına göre sıralanır.'
  },
  {
    id: 21,
    category: 'joins',
    type: 'code',
    question: '100 TL ve üzerinde satış yapan her bir kasiyerin adını ve toplam satış tutarını listeleyen ve bunları ürün numarasına göre sıralayan sorguyu tamamlayın.',
    snippet: '___1___ k.Ad, ___2___(u.Fiyat * s.Adet) \n___3___ satis ___4___ s \n___5___ kasiyer ___6___ k ___7___ s.KasiyerNo = k.KasiyerNo\n___8___ urun ___9___ u ___10___ s.UrunNo = u.UrunNo\n___11___ k.Ad\n___12___ 100 <= ___13___(u.Fiyat * s.Adet)\n___14___ u.UrunNo;',
    blanks: ['SELECT', 'SUM', 'FROM', 'AS', 'INNER JOIN', 'AS', 'ON', 'INNER JOIN', 'AS', 'ON', 'GROUP BY', 'HAVING', 'SUM', 'ORDER BY'],
    sql_file: 'Uygulama Soru-12.sql',
    explanation: 'Toplam tutar filtrelemesi gruplamadan sonra HAVING ile kontrol edilir (100 <= SUM(...)). Sıralama ORDER BY ile yapılır.'
  },
  {
    id: 22,
    category: 'joins',
    type: 'code',
    question: 'Müşterilerin hangi markalardan alışveriş yaptığını listeleyen 4 tablolu sorguyu tamamlayın.',
    snippet: '___1___ mu.MusteriNo, mu.Ad, u.UrunAd, m.MarkaNo, m.MarkaAd \n___2___ market.musteri ___3___ mu\n___4___ market.satis ___5___ s ___6___ mu.MusteriNo = s.MusteriNo\n___7___ market.urun ___8___ u ___9___ s.UrunNo = u.UrunNo\n___10___ market.marka ___11___ m ___12___ u.MarkaNo = m.MarkaNo;',
    blanks: ['SELECT', 'FROM', 'AS', 'INNER JOIN', 'AS', 'ON', 'INNER JOIN', 'AS', 'ON', 'INNER JOIN', 'AS', 'ON'],
    sql_file: 'Uygulama Soru-14.sql',
    explanation: '4 tablo (musteri, satis, urun, marka) sırayla INNER JOIN ... ON ilişkileriyle birbirine bağlanır.'
  },
  {
    id: 23,
    category: 'joins',
    type: 'code',
    question: 'Her bir şubenin toplam kaç liralık satış yaptığını bulup şube adına göre gruplayıp ürün noya göre sıralayan sorguyu tamamlayın.',
    snippet: '___1___ su.Ad ___2___ \'Şube Adı\', ___3___(u.Fiyat * s.Adet) ___4___ \'Toplam Satış Tutarı\' \n___5___ satis ___6___ s \n___7___ sube ___8___ su ___9___ s.SubeNo = su.SubeNo\n___10___ urun ___11___ u ___12___ s.UrunNo = u.UrunNo\n___13___ su.Ad\n___14___ u.UrunNo;',
    blanks: ['SELECT', 'AS', 'SUM', 'AS', 'FROM', 'AS', 'INNER JOIN', 'AS', 'ON', 'INNER JOIN', 'AS', 'ON', 'GROUP BY', 'ORDER BY'],
    sql_file: 'Uygulama Soru-16.sql',
    explanation: 'Toplam tutar SUM ile hesaplanır, sube ve urun tabloları birleştirilir, GROUP BY şube adına göre, ORDER BY ise ürün noya göre sıralar.'
  },
  {
    id: 24,
    category: 'joins',
    type: 'code',
    question: 'Her bir müşterinin hangi kategoriden kaç adet ürün aldığını müşteri numarası ve kategori adıyla listeleyen sorguyu tamamlayın.',
    snippet: '___1___ M.MusteriNo, M.Ad, K.KategoriAd, ___2___(S.Adet) ___3___ \'Adet\' \n___4___ satis ___5___ S\n___6___ urun ___7___ U ___8___ U.UrunNo = S.UrunNo\n___9___ musteri ___10___ M ___11___ M.MusteriNo = S.MusteriNo\n___12___ kategori ___13___ K ___14___ K.KategoriNo = U.KategoriNo\n___15___ M.MusteriNo, K.KategoriNo;',
    blanks: ['SELECT', 'SUM', 'AS', 'FROM', 'AS', 'INNER JOIN', 'AS', 'ON', 'INNER JOIN', 'AS', 'ON', 'INNER JOIN', 'AS', 'ON', 'GROUP BY'],
    sql_file: 'Uygulama Soru-4.sql',
    explanation: 'Miktar toplamak için SUM(Adet) kullanılır. 4 tablo JOIN ile birleştirildikten sonra hem müşteri no hem kategori noya göre GROUP BY uygulanır.'
  },
  {
    id: 25,
    category: 'joins',
    type: 'code',
    question: 'Her markadan 2 adetten fazla ürün alan müşterilerin ad soyad, marka ve adet bilgilerini listeleyen sorguyu tamamlayın.',
    snippet: '___1___ m.MusteriNo, m.ad, m.Soyad, ma.MarkaAd, ___2___(s.Adet) ___3___ \'Adet\' \n___4___ market.musteri ___5___ m \n___6___ market.satis ___7___ s ___8___ m.MusteriNo = s.MusteriNo\n___9___ market.urun ___10___ u ___11___ s.UrunNo = u.UrunNo\n___12___ market.marka ___13___ ma ___14___ u.MarkaNo = ma.MarkaNo\n___15___ m.MusteriNo, ma.MarkaNo\n___16___ 2 < ___17___(s.Adet);',
    blanks: ['SELECT', 'SUM', 'AS', 'FROM', 'AS', 'INNER JOIN', 'AS', 'ON', 'INNER JOIN', 'AS', 'ON', 'INNER JOIN', 'AS', 'ON', 'GROUP BY', 'HAVING', 'SUM'],
    sql_file: 'Uygulama Soru-6.sql',
    explanation: 'Müşteri, satış, ürün ve marka tabloları INNER JOIN ile bağlanır. Müşteri ve Marka bazında GROUP BY yapıldıktan sonra HAVING SUM(Adet) > 2 filtresi uygulanır.'
  },
  {
    id: 26,
    category: 'joins',
    type: 'code',
    question: 'Müşterilerin hangi markalardan alışveriş yaptığını listeleyen ve 4 tabloyu birbirine bağlayan sorguyu yazın.',
    snippet: '___1___ m.MusteriNo, m.ad, m.Soyad, ma.MarkaAd, ___2___(s.Adet) ___3___ \'Adet\' \n___4___ market.musteri ___5___ m \n___6___ market.satis ___7___ s ___8___ m.MusteriNo = s.MusteriNo\n___9___ market.urun ___10___ u ___11___ s.UrunNo = u.UrunNo\n___12___ market.marka ___13___ ma ___14___ u.MarkaNo = ma.MarkaNo\n___15___ m.Ad, ma.MarkaAd;',
    blanks: ['SELECT', 'SUM', 'AS', 'FROM', 'AS', 'INNER JOIN', 'AS', 'ON', 'INNER JOIN', 'AS', 'ON', 'INNER JOIN', 'AS', 'ON', 'GROUP BY'],
    sql_file: 'Uygulama Soru-5.sql',
    explanation: 'Müşteri, satış, ürün ve marka tabloları sırasıyla INNER JOIN ... ON bağlantılarıyla birleştirilerek listelenir.'
  },
  {
    id: 27,
    category: 'joins',
    type: 'code',
    question: 'Müşterilerin hangi kategorilerden alışveriş yaptığını gösteren 4 tablolu birleşik sorguyu tamamlayın.',
    snippet: '___1___ m.MusteriNo, m.Ad, u.UrunAd, k.KategoriNo, k.KategoriAd \n___2___ market.musteri ___3___ m \n___4___ market.satis ___5___ s ___6___ m.MusteriNo = s.MusteriNo\n___7___ market.urun ___8___ u ___9___ s.UrunNo = u.UrunNo\n___10___ market.kategori ___11___ k ___12___ u.KategoriNo = k.KategoriNo;',
    blanks: ['SELECT', 'FROM', 'AS', 'INNER JOIN', 'AS', 'ON', 'INNER JOIN', 'AS', 'ON', 'INNER JOIN', 'AS', 'ON'],
    sql_file: 'Uygulama Soru-2.sql',
    explanation: 'Bu 4 tablolu sorguda musteri, satis, urun ve kategori tabloları INNER JOIN kullanılarak birleştirilmiştir.'
  },
  {
    id: 28,
    category: 'joins',
    type: 'code',
    question: 'Her bir müşterinin satın almış olduğu toplam ürün adedini veren JOIN ve gruplama sorgusunu tamamlayın.',
    snippet: '___1___ M.MusteriNo, ___2___(S.Adet) ___3___ \'Adet\' \n___4___ satis ___5___ S \n___6___ urun ___7___ U ___8___ U.UrunNo = S.UrunNo\n___9___ musteri ___10___ M ___11___ M.MusteriNo = S.MusteriNo\n___12___ M.MusteriNo;',
    blanks: ['SELECT', 'SUM', 'AS', 'FROM', 'AS', 'INNER JOIN', 'AS', 'ON', 'INNER JOIN', 'AS', 'ON', 'GROUP BY'],
    sql_file: 'Uygulama Soru-3.sql',
    explanation: 'SUM aggregate fonksiyonudur. Müşteri noya göre gruplamak için GROUP BY M.MusteriNo kullanılır.'
  },
  {
    id: 29,
    category: 'joins',
    type: 'code',
    question: 'Ürünlerin markalarını getirirken, markası tanımlanmamış ürünlerin de listelenmesini sağlayan LEFT OUTER JOIN sorgusunu tamamlayın.',
    snippet: '___1___ UrunAd, MarkaAd \n___2___ urun ___3___ marka \n___4___ urun.MarkaNo = marka.MarkaNo;',
    blanks: ['SELECT', 'FROM', 'LEFT OUTER JOIN', 'ON'],
    sql_file: 'Uygulama Soru-14.sql',
    explanation: 'Sol taraftaki (urun) tüm kayıtları ve sağ taraftaki (marka) eşleşenleri getirmek için LEFT OUTER JOIN kullanılır.'
  },
  {
    id: 30,
    category: 'joins',
    type: 'code',
    question: 'Marka tablosunu sol, ürün tablosunu sağ alarak tüm ürünleri ve marka adlarını listeleyen RIGHT OUTER JOIN sorgusunu tamamlayın.',
    snippet: '___1___ UrunAd, MarkaAd \n___2___ marka ___3___ urun \n___4___ urun.MarkaNo = marka.MarkaNo;',
    blanks: ['SELECT', 'FROM', 'RIGHT OUTER JOIN', 'ON'],
    sql_file: 'SQL Outer Join Sorguları.sql',
    explanation: 'Sağ taraftaki (urun) tüm kayıtları ve sol taraftaki (marka) eşleşenleri getirmek için RIGHT OUTER JOIN kullanılır.'
  },
  {
    id: 31,
    category: 'joins',
    type: 'code',
    question: 'Ürün, kategori ve marka adlarını birleştiren \'v_UrunBilgileri\' isimli bir VIEW (görünüm) oluşturan sorguyu tamamlayın.',
    snippet: 'CREATE ___1___ v_UrunBilgileri ___2___ \n___3___ U.UrunAd, K.KategoriAd, M.MarkaAd \n___4___ market.urun ___5___ U \n___6___ kategori ___7___ K ___8___ K.KategoriNo = U.KategoriNo\n___9___ marka ___10___ M ___11___ M.MarkaNo = U.MarkaNo;',
    blanks: ['VIEW', 'AS', 'SELECT', 'FROM', 'AS', 'INNER JOIN', 'AS', 'ON', 'INNER JOIN', 'AS', 'ON'],
    sql_file: 'Uygulama Soru-13.sql',
    explanation: 'CREATE VIEW ad AS formatı ile görünüm oluşturulur. Tablolar INNER JOIN ile birbirine bağlanır.'
  },
  {
    id: 32,
    category: 'joins',
    type: 'code',
    question: 'Kasiyerlerin yaptıkları satışları ürün bazında gruplayarak toplam ürün adedi ve toplam satış tutarını hesaplayan sorguyu tamamlayın.',
    snippet: '___1___ k.KasiyerNo, k.ad, k.Soyad, u.UrunNo, u.fiyat, \n  ___2___(u.UrunNo) ___3___ \'toplamUrun\', \n  (s.Adet * u.Fiyat * ___4___(u.UrunNo)) ___5___ \'toplamFiyat\' \n___6___ market.kasiyer ___7___ k \n___8___ market.satis ___9___ s ___10___ k.KasiyerNo = s.KasiyerNo\n___11___ market.urun ___12___ u ___13___ s.SatisNo = u.UrunNo\n___14___ k.ad, u.UrunNo;',
    blanks: ['SELECT', 'SUM', 'AS', 'SUM', 'AS', 'FROM', 'AS', 'INNER JOIN', 'AS', 'ON', 'INNER JOIN', 'AS', 'ON', 'GROUP BY'],
    sql_file: 'Uygulama Soru-10.sql',
    explanation: 'Kasiyer bazında satışları ürün noya göre gruplamak için GROUP BY kullanılır. JOIN ve ON koşullarıyla tablolar bağlanır.'
  },
  {
    id: 33,
    category: 'joins',
    type: 'code',
    question: 'Şubelerin her ay gerçekleştirdiği satış işlemleri sayısını şube ve ay bazında listeleyen gruplanmış sorguyu tamamlayın.',
    snippet: '___1___ SU.Ad, ___2___(*), ___3___(S.Tarih) \n___4___ satis ___5___ S \n___6___ sube ___7___ SU ___8___ SU.SubeNo = S.SubeNo \n___9___ SU.SubeNo, ___10___(S.Tarih);',
    blanks: ['SELECT', 'COUNT', 'MONTH', 'FROM', 'AS', 'INNER JOIN', 'AS', 'ON', 'GROUP BY', 'MONTH'],
    sql_file: 'SQL-Ödev3 Cevaplar 17.sql',
    explanation: 'İşlem sayısı için COUNT(*), ay numarası için MONTH() fonksiyonu kullanılır. Şube ve aya göre GROUP BY uygulanır.'
  },
  {
    id: 34,
    category: 'joins',
    type: 'code',
    question: 'Marka adı \'HP\' olmayan ve kategorisi \'Laptop\' olan ürünlerin toplam fiyatını veren 3\'lü birleşik sorguyu tamamlayın.',
    snippet: '___1___ ___2___(U.Fiyat) \n___3___ urun ___4___ U \n___5___ marka ___6___ M ___7___ M.MarkaNo = U.MarkaNo \n___8___ kategori ___9___ K ___10___ K.KategoriNo = U.KategoriNo \n___11___ M.MarkaAd <> \'HP\' ___12___ K.KategoriAd = \'Laptop\';',
    blanks: ['SELECT', 'SUM', 'FROM', 'AS', 'INNER JOIN', 'AS', 'ON', 'INNER JOIN', 'AS', 'ON', 'WHERE', 'AND'],
    sql_file: 'SQL-Ödev3 Cevaplar 1-3-4-5.sql',
    explanation: 'Toplam hesaplamak için SUM kullanılır. Tablolar INNER JOIN ile bağlanır ve filtreler WHERE ve AND ile belirtilir.'
  },
  {
    id: 35,
    category: 'joins',
    type: 'code',
    question: 'Her bir kasiyerin yaptığı toplam satış işlemleri sayısını bulup, en az satış yapan kasiyeri işlem sayısına göre artan sırada sıralayarak ve LIMIT kullanarak bulan sorguyu tamamlayın.',
    snippet: '___1___ K.Ad, ___2___(*) \n___3___ Satis ___4___ S \n___5___ kasiyer ___6___ K ___7___ K.KasiyerNo = S.KasiyerNo \n___8___ K.KasiyerNo \n___9___ ___10___(*) ___11___ \n___12___ 0, 1;',
    blanks: ['SELECT', 'COUNT', 'FROM', 'AS', 'INNER JOIN', 'AS', 'ON', 'GROUP BY', 'ORDER BY', 'COUNT', 'ASC', 'LIMIT'],
    sql_file: 'SQL-Ödev3 Cevaplar 13.sql',
    explanation: 'En az satış yapanı bulmak için COUNT(*) değerine göre ORDER BY COUNT Extent (ASC) sıralama yapılır ve LIMIT 0,1 ile ilk satır alınır.'
  },
  {
    id: 36,
    category: 'joins',
    type: 'code',
    question: 'Peynir kategorisindeki satış adetlerini aylara göre gruplayarak listeleyen sorguyu tamamlayın.',
    snippet: '___1___ ___2___(S.Tarih), ___3___(*) \n___4___ urun ___5___ U \n___6___ satis ___7___ S ___8___ S.UrunNo = U.UrunNo \n___9___ kategori ___10___ K ___11___ K.KategoriNo = U.KategoriNo \n___12___ K.KategoriAd = \'Peynir\' \n___13___ ___14___(S.Tarih);',
    blanks: ['SELECT', 'MONTH', 'COUNT', 'FROM', 'AS', 'INNER JOIN', 'AS', 'ON', 'INNER JOIN', 'AS', 'ON', 'WHERE', 'GROUP BY', 'MONTH'],
    sql_file: 'SQL-Ödev3 Cevaplar 15.sql',
    explanation: 'Aylık gruplama için MONTH() fonksiyonu, JOIN bağlantıları ve filtreleme için WHERE, gruplama için ise GROUP BY kullanılır.'
  },
  {
    id: 37,
    category: 'joins',
    type: 'code',
    question: 'Ürünlerin toplam fiyatının 5000\'den büyük olduğu kategorileri ve toplam fiyatlarını veren gruplanmış sorguyu tamamlayın.',
    snippet: '___1___ K.KategoriAd, ___2___(U.Fiyat) \n___3___ urun ___4___ U \n___5___ kategori ___6___ K ___7___ K.KategoriNo = U.KategoriNo \n___8___ K.KategoriAd \n___9___ 5000 < ___10___(U.Fiyat);',
    blanks: ['SELECT', 'SUM', 'FROM', 'AS', 'INNER JOIN', 'AS', 'ON', 'GROUP BY', 'HAVING', 'SUM'],
    sql_file: 'SQL-Ödev3 Cevaplar 10.sql',
    explanation: 'Gruplanmış verilerde aggregate koşullarını filtrelemek için HAVING ifadesi kullanılır. Toplam fiyat SUM ile alınır.'
  },
  {
    id: 38,
    category: 'joins',
    type: 'code',
    question: 'Şehir adları \'a\' harfiyle başlamayan müşterilerin benzersiz şehir listesini veren sorguyu tamamlayın.',
    snippet: '___1___ DISTINCT(Sehir) ___2___ musteri \n___3___ Sehir ___4___ ___5___ \'a%\';',
    blanks: ['SELECT', 'FROM', 'WHERE', 'NOT', 'LIKE'],
    sql_file: 'SQL-Ödev3 Cevaplar 1-3-4-5.sql',
    explanation: 'Benzersiz değerler için DISTINCT, \'a\' harfi ile başlamayanlar için NOT LIKE \'a%\' kalıbı kullanılır.'
  },
  {
    id: 39,
    category: 'subquery',
    type: 'code',
    question: '1, 2 ve 3 numaralı kategorilerdeki ürünlerin fiyatlarının tamamının (hepsinin) altında fiyata sahip ürünleri ALL kullanarak listeleyin.',
    snippet: '___1___ * ___2___ urun \n___3___ Fiyat < ___4___ (___5___ Fiyat ___6___ urun ___7___ KategoriNo ___8___ (1,2,3));',
    blanks: ['SELECT', 'FROM', 'WHERE', 'ALL', 'SELECT', 'FROM', 'WHERE', 'IN'],
    sql_file: 'SQL Alt Sorgu ALL Kullanımı.sql',
    explanation: 'Alt sorgudaki tüm fiyatların altında olmasını sağlamak için \'< ALL\' ifadesi ve alt sorguda \'IN (1,2,3)\' filtresi kullanılır.'
  },
  {
    id: 40,
    category: 'subquery',
    type: 'code',
    question: '1, 2 ve 3 numaralı kategorilerdeki ürünlerin herhangi birinin fiyatının üstünde fiyata sahip ürünleri ANY kullanarak listeleyin.',
    snippet: '___1___ * ___2___ urun \n___3___ Fiyat > ___4___ (___5___ Fiyat ___6___ urun ___7___ KategoriNo ___8___ (1,2,3));',
    blanks: ['SELECT', 'FROM', 'WHERE', 'ANY', 'SELECT', 'FROM', 'WHERE', 'IN'],
    sql_file: 'SQL Alt Sorgu ANY Kullanımı.sql',
    explanation: '\'ANY\' alt sorgudaki değerlerden herhangi biriyle eşleşmenin yeterli olduğunu belirtir. Fiyat > ANY (...) şeklinde kullanılır.'
  },
  {
    id: 41,
    category: 'subquery',
    type: 'code',
    question: 'Ürünlerin fiyatı, genel ortalama fiyattan küçük olan ürünleri listeleyen ve fiyata göre sıralayan alt sorgulu ifadeyi tamamlayın.',
    snippet: '___1___ * ___2___ urun \n___3___ Fiyat < (___4___ ___5___(Fiyat) ___6___ urun) \n___7___ Fiyat;',
    blanks: ['SELECT', 'FROM', 'WHERE', 'SELECT', 'AVG', 'FROM', 'ORDER BY'],
    sql_file: 'SQL Alt Sorgu AVG Kullanma.sql',
    explanation: 'AVG(Fiyat) ortalama fiyatı bulur. Dış sorguda WHERE Fiyat < (Alt Sorgu) ile ortalamanın altındakiler filtrelenir ve ORDER BY ile sıralanır.'
  },
  {
    id: 42,
    category: 'subquery',
    type: 'code',
    question: '\'Elektronik\' kategorisindeki ortalama fiyatın altındaki elektronik ürünleri listeleyen ve ürün fiyatına göre sıralayan karmaşık alt sorguyu tamamlayın.',
    snippet: '___1___ * ___2___ urun \n___3___ Fiyat < (___4___ ___5___(Fiyat) ___6___ urun ___7___ KategoriNo ___8___ KategoriNo = (___9___ KategoriNo ___10___ kategori ___11___ KategoriAd = \'Elektronik\'))\n___12___ KategoriNo = (___13___ KategoriNo ___14___ kategori ___15___ KategoriAd = \'Elektronik\')\n___16___ Fiyat;',
    blanks: ['SELECT', 'FROM', 'WHERE', 'SELECT', 'AVG', 'FROM', 'GROUP BY', 'HAVING', 'SELECT', 'FROM', 'WHERE', 'AND', 'SELECT', 'FROM', 'WHERE', 'ORDER BY'],
    sql_file: 'SQL Alt Sorgu GROUP BY ve HAVING Kullanımı.sql',
    explanation: 'İçeride Elektronik kategorisinin ortalamasını bulmak için GROUP BY ve HAVING kullanılır. Dış sorguda da kategorinin Elektronik olması AND KategoriNo = (SELECT...) ile sınırlanır.'
  },
  {
    id: 43,
    category: 'subquery',
    type: 'code',
    question: '7. aydan önce satılan ürünlerin listesini alt sorguda IN kullanarak getiren sorguyu tamamlayın.',
    snippet: '___1___ * ___2___ market.urun \n___3___ UrunNo ___4___ (___5___ UrunNo ___6___ market.satis ___7___ ___8___(Tarih) < 7);',
    blanks: ['SELECT', 'FROM', 'WHERE', 'IN', 'SELECT', 'FROM', 'WHERE', 'MONTH'],
    sql_file: 'SQL Alt Sorgu IN Kullanımı.sql',
    explanation: 'Belirli bir aydan önce satılan ürünlerin numaraları alt sorguda MONTH(Tarih) < 7 ile çekilir ve dış sorguda WHERE UrunNo IN (...) ile listelenir.'
  },
  {
    id: 44,
    category: 'subquery',
    type: 'code',
    question: 'Ürün eklerken marka numarasını ve kategori numarasını alt sorgu ile ilgili tablolardan çekerek INSERT yapan sorguyu tamamlayın.',
    snippet: '___1___ market.urun (UrunAd, MarkaNo, KategoriNo, Fiyat, SonKullanmaTarih, Ozellik) \n___2___ (\'Vestel Buzdolabı\', (___3___ MarkaNo ___4___ marka ___5___ MarkaAd = \'Boron\'), (___6___ KategoriNo ___7___ kategori ___8___ KategoriAd = \'Elektronik\'), 4800, \'2023-12-01\', \'Nofrost\');',
    blanks: ['INSERT INTO', 'VALUES', 'SELECT', 'FROM', 'WHERE', 'SELECT', 'FROM', 'WHERE'],
    sql_file: 'SQL Alt Sorgu Kayıt Ekleme.sql',
    explanation: 'INSERT INTO ... VALUES yapısında, değerler listesinde statik sayılar yerine alt sorgulardan dönen tekil veriler SELECT ile kullanılabilir.'
  },
  {
    id: 45,
    category: 'subquery',
    type: 'code',
    question: '\'Vestel Buzdolabı\' adlı ürünün marka numarasını alt sorgu ile \'Vestel\' markası olarak güncelleyen sorguyu tamamlayın.',
    snippet: '___1___ market.urun \n___2___ MarkaNo = (___3___ MarkaNo ___4___ marka ___5___ MarkaAd = \'Vestel\') \n___6___ UrunNo = (___7___ UrunNo ___8___ urun ___9___ UrunAd = \'Vestel Buzdolabı\');',
    blanks: ['UPDATE', 'SET', 'SELECT', 'FROM', 'WHERE', 'WHERE', 'SELECT', 'FROM', 'WHERE'],
    sql_file: 'SQL Alt Sorgu Kayıt Güncelleme.sql',
    explanation: 'UPDATE table SET sütun = (SELECT...) WHERE sütun = (SELECT...) yapısıyla dinamik alt sorgulu güncelleme yapılır.'
  },
  {
    id: 46,
    category: 'subquery',
    type: 'code',
    question: '2021 yılı mart (3) veya kasım (11) aylarında yapılan satışları alt sorgu yardımıyla silen sorguyu tamamlayın.',
    snippet: '___1___ satis \n___2___ Tarih ___3___ (___4___ s.Tarih ___5___ market.satis ___6___ S \n___7___ ___8___(s.Tarih) = 2021 ___9___ ___10___(s.Tarih) ___11___ (3,11));',
    blanks: ['DELETE FROM', 'WHERE', 'IN', 'SELECT', 'FROM', 'AS', 'WHERE', 'YEAR', 'AND', 'MONTH', 'IN'],
    sql_file: 'SQL Alt Sorgu Kayıt Silme.sql',
    explanation: 'DELETE FROM table WHERE ... şeklinde silme yapılır. Tarihleri eşleştirmek için YEAR() ve MONTH() fonksiyonlarından yararlanılır.'
  },
  {
    id: 47,
    category: 'subquery',
    type: 'code',
    question: 'Müşteri tablosunda kayıtlı olup satis tablosunda hiç kaydı bulunmayan müşterileri alt sorgu (NOT IN) mantığıyla listeleyen sorguyu tamamlayın.',
    snippet: '___1___ * ___2___ musteri \n___3___ MusteriNo ___4___ ___5___ (___6___ MusteriNo ___7___ satis ___8___ MusteriNo ___9___ ___10___ ___11___);',
    blanks: ['SELECT', 'FROM', 'WHERE', 'NOT', 'IN', 'SELECT', 'FROM', 'WHERE', 'IS', 'NOT', 'NULL'],
    sql_file: 'SQL 7. aydan önce satılan ürünlerin listelenmesi.sql',
    explanation: 'NOT IN kullanarak alt sorgudaki listede yer almayan müşteriler elenir. Alt sorguda \'WHERE MusteriNo IS NOT NULL\' yapılması performans ve doğruluk açısından önemlidir.'
  },
  {
    id: 48,
    category: 'subquery',
    type: 'code',
    question: 'Ürünlerin son kullanma tarihine bugün itibariyle kaç gün kaldığını DATEDIFF kullanarak listeleyen sorguyu tamamlayın.',
    snippet: '___1___ UrunAd ___2___ \'Ürün Adı\', SonKullanmaTarihi, \n___3___(SonKullanmaTarihi, ___4___()) ___5___ \'Kaç Gün Var\' \n___6___ urun\n___7___ SonKullanmaTarihi > ___8___();',
    blanks: ['SELECT', 'AS', 'DATEDIFF', 'NOW', 'AS', 'FROM', 'WHERE', 'NOW'],
    sql_file: 'SQL Son Kullanma Tarihine Kac Gun var.sql',
    explanation: 'DATEDIFF iki tarih arasındaki gün farkını hesaplar. NOW() anlık zamanı verir. Filtreleme WHERE ile yapılır.'
  },
  {
    id: 49,
    category: 'subquery',
    type: 'code',
    question: 'Son kullanma tarihine 1 ile 7 gün arasında (1 hafta) süre kalmış ürünleri listelemek için BETWEEN kelimesini kullanan sorguyu tamamlayın.',
    snippet: '___1___ UrunAd, Fiyat, ___2___(SonKullanmaTarih, ___3___()) ___4___ \'Kalan Gün\'\n___5___ market.urun \n___6___ ___7___(SonKullanmaTarih, ___8___()) ___9___ 1 ___10___ 7;',
    blanks: ['SELECT', 'DATEDIFF', 'NOW', 'AS', 'FROM', 'WHERE', 'DATEDIFF', 'NOW', 'BETWEEN', 'AND'],
    sql_file: 'SQL Kategorite Göre Listeleme.sql',
    explanation: 'İki sınır arasındaki değerleri seçmek için BETWEEN min AND max yapısı kullanılır. DATEDIFF ile kalan gün bulunur.'
  },
  {
    id: 50,
    category: 'subquery',
    type: 'code',
    question: 'Son kullanma tarihi geçmiş (kalan gün sayısı sıfırdan küçük) olan ürünleri bulan sorguyu tamamlayın.',
    snippet: '___1___ UrunAd, Fiyat, ___2___(SonKullanmaTarih, ___3___()) ___4___ \'Gecen Gun\' \n___5___ market.urun \n___6___ ___7___(SonKullanmaTarih, ___8___()) < 0;',
    blanks: ['SELECT', 'DATEDIFF', 'NOW', 'AS', 'FROM', 'WHERE', 'DATEDIFF', 'NOW'],
    sql_file: 'SQL WHERE Son Kullanma Tarih.sql',
    explanation: 'Tarihi geçmiş ürünleri bulmak için DATEDIFF(SonKullanmaTarih, NOW()) değerinin < 0 (sıfırdan küçük) olması kontrol edilir.'
  },
  {
    id: 51,
    category: 'subquery',
    type: 'code',
    question: 'En yüksek fiyata sahip ürünün adı, markası, SKT ve fiyatını getiren alt sorgulu ifadeyi tamamlayın.',
    snippet: '___1___ U.UrunAd, M.MarkaAd, U.SonKullanmaTarih, U.Fiyat \n___2___ urun ___3___ U \n___4___ marka ___5___ M ___6___ M.MarkaNo = U.MarkaNo \n___7___ Fiyat = (___8___ ___9___(Fiyat) ___10___ urun);',
    blanks: ['SELECT', 'FROM', 'AS', 'INNER JOIN', 'AS', 'ON', 'WHERE', 'SELECT', 'MAX', 'FROM'],
    sql_file: 'SQL-Ödev3 Cevaplar 12sql.sql',
    explanation: 'MAX(Fiyat) alt sorguda en yüksek fiyatı döner. Dış sorgu WHERE Fiyat = (en yüksek fiyat) olan satırı getirir.'
  },
  {
    id: 52,
    category: 'subquery',
    type: 'code',
    question: 'Adı \'Sinan\' olan müşterinin adını \'Petek\' olarak alt sorgulu WHERE koşuluyla güncelleyen sorguyu tamamlayın.',
    snippet: '___1___ musteri ___2___ Ad = \'Petek\' \n___3___ MusteriNo = (___4___ MusteriNo ___5___ musteri ___6___ Ad = \'Sinan\');',
    blanks: ['UPDATE', 'SET', 'WHERE', 'SELECT', 'FROM', 'WHERE'],
    sql_file: 'SQL-Ödev3 Cevaplar 1-3-4-5.sql',
    explanation: 'UPDATE table SET ad = \'Yeni\' WHERE no = (SELECT no FROM table WHERE ad = \'Eski\') yapısı kullanılır.'
  },
  {
    id: 53,
    category: 'subquery',
    type: 'code',
    question: 'Kasiyerler arasında en az satış kaydı girmiş (en az adet değil, en az işlem) kasiyeri işlem sayısına göre artan sırada sıralayıp LIMIT kullanarak bulan sorguyu tamamlayın.',
    snippet: '___1___ K.Ad, ___2___(*) \n___3___ satis ___4___ S \n___5___ kasiyer ___6___ K ___7___ K.KasiyerNo = S.KasiyerNo \n___8___ S.KasiyerNo \n___9___(*) \n___10___ 0, 1;',
    blanks: ['SELECT', 'COUNT', 'FROM', 'AS', 'INNER JOIN', 'AS', 'ON', 'GROUP BY', 'ORDER BY', 'LIMIT'],
    sql_file: 'SQL-Ödev3 Cevaplar 13.sql',
    explanation: 'İşlem sayılarını bulmak için GROUP BY ile kasiyerler gruplanır. ORDER BY COUNT(*) artan sıralama yapar. LIMIT 0, 1 en az olan ilk kaydı alır.'
  },
  {
    id: 54,
    category: 'subquery',
    type: 'code',
    question: '\'Peynir\' kategorisindeki ürünlerin aylara göre satış adetlerinin toplamını listeleyen sorguyu tamamlayın.',
    snippet: '___1___ ___2___(S.Tarih), ___3___(S.Adet) \n___4___ urun ___5___ U \n___6___ satis ___7___ S ___8___ S.UrunNo = U.UrunNo \n___9___ kategori ___10___ K ___11___ K.KategoriNo = U.KategoriNo \n___12___ K.KategoriAd = \'Peynir\' \n___13___ ___14___(S.Tarih);',
    blanks: ['SELECT', 'MONTH', 'SUM', 'FROM', 'AS', 'INNER JOIN', 'AS', 'ON', 'INNER JOIN', 'AS', 'ON', 'WHERE', 'GROUP BY', 'MONTH'],
    sql_file: 'SQL Her bir kasiyerin bu ay yaptığı satış tutarının bulunması.sql',
    explanation: 'MONTH(Tarih) fonksiyonu ay bilgisine göre gruplamayı sağlar. Filtreleme WHERE ile Peynir kategorisi için yapılır.'
  },
  {
    id: 55,
    category: 'subquery',
    type: 'code',
    question: 'Tarih boyunca en çok satış yapılan ayı işlem sayısına göre azalan sırada sıralayıp LIMIT kullanarak bulan sorguyu tamamlayın.',
    snippet: '___1___ ___2___(S.Tarih), ___3___(*) \n___4___ satis ___5___ S \n___6___ ___7___(S.Tarih) \n___8___ ___9___(*) ___10___ \n___11___ 0, 1;',
    blanks: ['SELECT', 'MONTH', 'COUNT', 'FROM', 'AS', 'GROUP BY', 'MONTH', 'ORDER BY', 'COUNT', 'DESC', 'LIMIT'],
    sql_file: 'SQL-Ödev3 Cevaplar 16.sql',
    explanation: 'MONTH(Tarih) bazında gruplanır. ORDER BY COUNT(*) DESC ile çoktan aza sıralanıp LIMIT 0,1 ile en üstteki kayıt seçilir.'
  },
  {
    id: 56,
    category: 'subquery',
    type: 'code',
    question: 'Şubelerin aylık bazda kaç adet satış yaptığını (şube adı ve ay numarasıyla) listeleyen sorguyu tamamlayın.',
    snippet: '___1___ SU.Ad, ___2___(*), ___3___(S.Tarih) \n___4___ satis ___5___ S \n___6___ sube ___7___ SU ___8___ SU.SubeNo = S.SubeNo \n___9___ SU.SubeNo, ___10___(S.Tarih);',
    blanks: ['SELECT', 'COUNT', 'MONTH', 'FROM', 'AS', 'INNER JOIN', 'AS', 'ON', 'GROUP BY', 'MONTH'],
    sql_file: 'SQL-Ödev3 Cevaplar 17.sql',
    explanation: 'Şubeler ve satis tablosu ON ile birleştirilir. Gruplama hem şube noya hem de MONTH(Tarih)\'e göre çoklu olarak yapılır.'
  },
  {
    id: 57,
    category: 'subquery',
    type: 'code',
    question: 'Ürün tablosundaki \'Kategori\' sütununu \'KategoriNo\' olarak değiştirip yabancı anahtar (FOREIGN KEY) ilişkisi ekleyen sorguyu tamamlayın.',
    snippet: '___1___ market.urun \n___2___ Kategori KategoriNo INT(11) ___3___ ___4___; \n___5___ market.urun \n___6___ fk_kategori \n___7___ (KategoriNo) ___8___ market.kategori (KategoriNo);',
    blanks: ['ALTER TABLE', 'CHANGE COLUMN', 'NOT', 'NULL', 'ALTER TABLE', 'ADD CONSTRAINT', 'FOREIGN KEY', 'REFERENCES'],
    sql_file: 'SQL Yabancı Anahtar Kategori.sql',
    explanation: 'CHANGE COLUMN sütun adını ve türünü değiştirir. ADD CONSTRAINT ... FOREIGN KEY (...) REFERENCES tablo (sütun) yabancı anahtarı tanımlar.'
  },
  {
    id: 58,
    category: 'subquery',
    type: 'code',
    question: 'Ürün tablosundaki \'Marka\' sütununu \'MarkaNo\' olarak değiştirip yabancı anahtar (FOREIGN KEY) tanımlayan sorguyu tamamlayın.',
    snippet: '___1___ market.urun \n___2___ Marka MarkaNo INT(11) ___3___ ___4___; \n___5___ market.urun \n___6___ fk_marka \n___7___ (MarkaNo) ___8___ market.marka (MarkaNo);',
    blanks: ['ALTER TABLE', 'CHANGE COLUMN', 'NOT', 'NULL', 'ALTER TABLE', 'ADD CONSTRAINT', 'FOREIGN KEY', 'REFERENCES'],
    sql_file: 'SQL Yabancı Anahtar Marka.sql',
    explanation: 'Sütun adını değiştirmek için ALTER TABLE urun CHANGE COLUMN, ilişki eklemek için ise ADD CONSTRAINT ... FOREIGN KEY ... REFERENCES kullanılır.'
  },
  {
    id: 59,
    category: 'subquery',
    type: 'code',
    question: 'Bugün satılan ürünleri, adetlerini ve tutarlarını (fiyat*adet) listeleyen sorguyu tamamlayın.',
    snippet: '___1___ U.UrunNo, U.UrunAd, U.Fiyat, S.Adet, (U.Fiyat * S.Adet) ___2___ \'Tutar\' \n___3___ satis ___4___ S \n___5___ urun ___6___ U ___7___ U.UrunNo = S.UrunNo \n___8___ ___9___(Tarih) = ___10___(___11___()) \n___12___ ___13___(Tarih) = ___14___(___15___());',
    blanks: ['SELECT', 'AS', 'FROM', 'AS', 'INNER JOIN', 'AS', 'ON', 'WHERE', 'DAY', 'DAY', 'NOW', 'AND', 'MONTH', 'MONTH', 'NOW'],
    sql_file: 'SQL Bugün hangi ürünlerin satıldığının listelenmesi.sql',
    explanation: 'Yeni hesaplanan kolona AS ile takma isim verilir. Bugün filtresi için DAY(Tarih) = DAY(NOW()) AND MONTH(Tarih) = MONTH(NOW()) kontrol edilir.'
  },
  {
    id: 60,
    category: 'subquery',
    type: 'code',
    question: 'Bugün toplam kaç adet (farklı işlemlerin toplam adedi değil, satılan toplam adet) ürün satıldığını bulan sorguyu tamamlayın.',
    snippet: '___1___ ___2___(Adet) ___3___ \'Toplam Adet\' \n___4___ satis \n___5___ ___6___(Tarih) = ___7___(___8___()) \n___9___ ___10___(Tarih) = ___11___(___12___());',
    blanks: ['SELECT', 'SUM', 'AS', 'FROM', 'WHERE', 'DAY', 'DAY', 'NOW', 'AND', 'MONTH', 'MONTH', 'NOW'],
    sql_file: 'SQL Bu ay yapılan toplam satış tutarı.sql',
    explanation: 'Toplam miktarı bulmak için COUNT yerine SUM(Adet) kullanılır. Tarih filtreleri WHERE and AND ile gün-ay kontrolüyle verilir.'
  },
  {
    id: 61,
    category: 'subquery',
    type: 'code',
    question: 'Kategori ve Marka tablolarına yabancı anahtarla (FOREIGN KEY REFERENCES) bağlı bir ürün tablosu oluşturma şemasını tamamlayın.',
    snippet: 'CREATE ___1___ urun ( \n  UrunNo INT(11) ___2___ ___3___ ___4___, \n  UrunAd VARCHAR(45) ___5___ ___6___, \n  MarkaNo INT(11) ___7___ ___8___, \n  KategoriNo INT(11) ___9___ ___10___, \n  ___11___ (UrunNo), \n  ___12___ fk_kategori ___13___ (KategoriNo) ___14___ kategori (KategoriNo) \n);',
    blanks: ['TABLE', 'NOT', 'NULL', 'AUTO_INCREMENT', 'NOT', 'NULL', 'NOT', 'NULL', 'NOT', 'NULL', 'PRIMARY KEY', 'CONSTRAINT', 'FOREIGN KEY', 'REFERENCES'],
    sql_file: '2_Urun Tablosu Oluşturma.sql',
    explanation: 'Otomatik artan sütun için AUTO_INCREMENT, birincil anahtar için PRIMARY KEY, yabancı anahtar için CONSTRAINT ... FOREIGN KEY ... REFERENCES kullanılır.'
  },
  {
    id: 62,
    category: 'subquery',
    type: 'code',
    question: '\'İçecek\' kategorisindeki ürünlerde %20 indirim yaparak ürün adı, normal fiyat ve indirimli fiyatı listeleyen ve fiyata göre artan sırada sıralayan sorguyu tamamlayın.',
    snippet: '___1___ UrunAd, Fiyat, Fiyat * 0.8 ___2___ \'İndirimli Fiyat\' \n___3___ urun \n___4___ Kategori ___5___ (\'İçecek\') \n___6___ Fiyat ___7___;',
    blanks: ['SELECT', 'AS', 'FROM', 'WHERE', 'IN', 'ORDER BY', 'ASC'],
    sql_file: 'SQL Icecek Kategorisindeki Ürünlerde 20 indirim yaparak listeleme.sql',
    explanation: '%20 indirimli fiyat Fiyat * 0.8 ile hesaplanır. Kategori filtresi WHERE Kategori IN (\'İçecek\') ile yapılır ve ORDER BY Fiyat ASC ile sıralanır.'
  },
  {
    id: 63,
    category: 'subquery',
    type: 'code',
    question: 'Ürünleri adına göre sıralayıp 3. kayıttan itibaren 5 adet listeleyen (Sayfalama - Pagination) sorguyu tamamlayın.',
    snippet: '___1___ UrunAd, Kategori, Marka \n___2___ urun \n___3___ UrunAd ___4___ \n___5___ 3, 5;',
    blanks: ['SELECT', 'FROM', 'ORDER BY', 'ASC', 'LIMIT'],
    sql_file: 'SQL Belirli Sayıda urun Listeleme Sayfalama.sql',
    explanation: 'Sıralama için ORDER BY UrunAd ASC kullanılır. Sayfalama için LIMIT offset, count (yani LIMIT 3, 5) kullanılır.'
  },
  {
    id: 64,
    category: 'subquery',
    type: 'code',
    question: 'Telefon numarası \'505\' ile başlayan müşterilerin sayısını bulan sorguyu yazın.',
    snippet: '___1___ ___2___(*) ___3___ musteri ___4___ Telefon ___5___ \'505%\';',
    blanks: ['SELECT', 'COUNT', 'FROM', 'WHERE', 'LIKE'],
    sql_file: 'SQL-Ödev3 Cevaplar 8.sql',
    explanation: 'Kayıt sayısını bulmak için COUNT(*), eşleşme için WHERE ve LIKE kullanılır.'
  },
  {
    id: 65,
    category: 'subquery',
    type: 'code',
    question: 'Müşterileri şehirlerine göre gruplayayıp her şehirde kaç müşteri olduğunu listeleyen sorguyu yazın.',
    snippet: '___1___ Sehir, ___2___(*) ___3___ musteri ___4___ Sehir;',
    blanks: ['SELECT', 'COUNT', 'FROM', 'GROUP BY'],
    sql_file: 'SQL-Ödev3 Cevaplar 9.sql',
    explanation: 'Şehirlere göre gruplayarak saymak için COUNT ve GROUP BY Sehir kullanılır.'
  },
  {
    id: 66,
    category: 'subquery',
    type: 'code',
    question: 'Belirtilen doğum tarihinden (1984-06-05) bugüne kadar geçen toplam gün sayısını hesaplayan DATEDIFF sorgusunu tamamlayın.',
    snippet: '___1___ ___2___(___3___(), \'1984-06-05\') ___4___ \'Furkan Kaç Günlük\';',
    blanks: ['SELECT', 'DATEDIFF', 'NOW', 'AS'],
    sql_file: 'SQL_Furkan Kac Gunluk.sql',
    explanation: 'DATEDIFF iki tarih arasındaki farkı gün olarak döner. NOW() bugünü ifade eder.'
  },
  {
    id: 67,
    category: 'subquery',
    type: 'code',
    question: 'Elektronik kategorisinin ortalama ürün fiyatını GROUP BY ve HAVING alt sorgusuyla bulan sorguyu tamamlayın.',
    snippet: '___1___ ___2___(Fiyat) ___3___ urun ___4___ KategoriNo ___5___ KategoriNo = (___6___ KategoriNo ___7___ kategori ___8___ KategoriAd = \'Elektronik\');',
    blanks: ['SELECT', 'AVG', 'FROM', 'GROUP BY', 'HAVING', 'SELECT', 'FROM', 'WHERE'],
    sql_file: 'SQL Alt Sorgu GROUP BY ve HAVING Kullanımı.sql',
    explanation: 'Kategori bazında gruplandıktan sonra HAVING koşulunda Elektronik kategorisinin nosu alt sorgudan çekilir.'
  },
  {
    id: 68,
    category: 'subquery',
    type: 'code',
    question: 'MarkaEkle saklı yordamında parametre modlarını (IN/OUT), SQLEXCEPTION Handler bildirimini ve INSERT ifadesini tamamlayın.',
    snippet: 'CREATE ___1___ MarkaEkle (___2___ P_Marka VARCHAR(45), ___3___ P_MarkaNo INT, P_Ekleyen INT, OUT O_Durum TEXT) \n___4___ \n  ___5___ ___6___ ___7___ ___8___ ___9___ \n  ___10___ \n    ___11___ O_Durum = \'Hata oluştu\'; \n  ___12___; \n  ___13___ marka(No, Marka, Ekleyen) ___14___ (P_MarkaNo, P_Marka, P_Ekleyen); \n___15___',
    blanks: ['PROCEDURE', 'IN', 'IN', 'BEGIN', 'DECLARE', 'EXIT', 'HANDLER', 'FOR', 'SQLEXCEPTION', 'BEGIN', 'SET', 'END', 'INSERT INTO', 'VALUES', 'END'],
    sql_file: '2_Urun Tablosu Oluşturma.sql',
    explanation: 'Saklı yordam parametreleri IN veya OUT olabilir. Hataları yakalamak için HANDLER tanımlanır.'
  },
  {
    id: 69,
    category: 'subquery',
    type: 'code',
    question: 'UrunEkle saklı yordamı (procedure) içinde yer alan INSERT bloğunu ve OUT parametresine değer atama kelimesini yazın.',
    snippet: 'CREATE ___1___ UrunEkle (___2___ P_UrunAd VARCHAR(100), ___3___ P_MarkaNo INT, ___4___ P_KategoriNo INT, ___5___ P_Fiyat FLOAT, OUT Sonuc VARCHAR(50)) \n___6___ \n  ___7___ urun (Ad, MarkaNo, KategoriNo, Fiyat) \n  ___8___ (P_UrunAd, P_MarkaNo, P_KategoriNo, P_Fiyat); \n  ___9___ Sonuc = \'Ürün Eklendi\'; \n___10___',
    blanks: ['PROCEDURE', 'IN', 'IN', 'IN', 'IN', 'BEGIN', 'INSERT INTO', 'VALUES', 'SET', 'END'],
    sql_file: 'SQL-Ödev3 Cevaplar 10.sql',
    explanation: 'Veri ekleme işlemi INSERT INTO ... VALUES ile yapılır. Parametrelere veya değişkenlere değer atamak için SET kullanılır.'
  },
  {
    id: 70,
    category: 'subquery',
    type: 'code',
    question: 'Bir ürünün son kullanma tarihine kalan gün sayısını hesaplayan saklı fonksiyonu (FUNCTION) tamamlayın.',
    snippet: 'CREATE ___1___ SonKullanmaZamanHesapla (P_SonKullanmaTarih DATE) ___2___ INT \n___3___ \n  ___4___ KalanZaman INT; \n  ___5___ KalanZaman = ___6___(P_SonKullanmaTarih, ___7___()); \n  ___8___ KalanZaman; \n___9___',
    blanks: ['FUNCTION', 'RETURNS', 'BEGIN', 'DECLARE', 'SET', 'DATEDIFF', 'NOW', 'RETURN', 'END'],
    sql_file: 'SQL Her bir kasiyerin bu ay yaptığı satış tutarının bulunması.sql',
    explanation: 'MySQL fonksiyonlarında dönüş tipi RETURNS ile, gövde içi değişkenler DECLARE ile tanımlanır. Değer döndürme RETURN ile yapılır.'
  },
  {
    id: 71,
    category: 'subquery',
    type: 'code',
    question: 'Fiyatı 5 TL ile 20 TL arasında (sınırlar dahil) olan ürünleri filtreleyip fiyata göre sıralayan sorguyu tamamlayın.',
    snippet: '___1___ * ___2___ market.urun \n___3___ Fiyat ___4___ 5 ___5___ 20 \n___6___ Fiyat;',
    blanks: ['SELECT', 'FROM', 'WHERE', 'BETWEEN', 'AND', 'ORDER BY'],
    sql_file: 'SQL WHERE Fiyat Kıyaslama.sql',
    explanation: 'BETWEEN ... AND ... yapısı belirtilen aralıktaki değerleri filtreler. ORDER BY sıralama yapar.'
  },
  {
    id: 72,
    category: 'subquery',
    type: 'code',
    question: 'Müşteri tablosunda adı \'Sinan\' olan müşterileri \'Petek\' olarak güncelleyen ve boş telefon numarası olanları seçen sorguları tamamlayın.',
    snippet: '___1___ musteri ___2___ Ad = \'Petek\' ___3___ Ad = \'Sinan\';\n___4___ * ___5___ musteri ___6___ Telefon = \'\';',
    blanks: ['UPDATE', 'SET', 'WHERE', 'SELECT', 'FROM', 'WHERE'],
    sql_file: 'SQL Ürünü olmayan kategorilerin listelenmesi.sql',
    explanation: 'Kayıtları güncellemek için UPDATE ... SET ... WHERE kullanılır. Sorgu filtreleri WHERE ile belirtilir.'
  },
  {
    id: 73,
    category: 'subquery',
    type: 'code',
    question: 'Elektronik kategorisindeki ürünlerin ortalama fiyatının altında kalan elektronik ürünleri alt sorgularla getiren ve ürün fiyatına göre sıralayan ifadeyi tamamlayın.',
    snippet: '___1___ * ___2___ urun \n___3___ Fiyat < (___4___ ___5___(Fiyat) ___6___ urun ___7___ KategoriNo ___8___ KategoriNo = (___9___ KategoriNo ___10___ kategori ___11___ KategoriAd = \'Elektronik\')) \n___12___ KategoriNo = (___13___ KategoriNo ___14___ kategori ___15___ KategoriAd = \'Elektronik\') \n___16___ Fiyat;',
    blanks: ['SELECT', 'FROM', 'WHERE', 'SELECT', 'AVG', 'FROM', 'GROUP BY', 'HAVING', 'SELECT', 'FROM', 'WHERE', 'AND', 'SELECT', 'FROM', 'WHERE', 'ORDER BY'],
    sql_file: 'SQL Alt Sorgu GROUP BY ve HAVING Kullanımı.sql',
    explanation: 'Koşulları birleştirmek için AND kullanılır. Alt sorgu ve dış sorgu WHERE kelimeleriyle filtrelenir ve ORDER BY ile sıralanır.'
  },
  {
    id: 74,
    category: 'subquery',
    type: 'code',
    question: 'Veritabanı oluşturma ve sınıf tablosu oluşturma DDL ifadelerini tamamlayın.',
    snippet: 'SHOW DATABASES; \nSHOW TABLES; \nCREATE ___1___ IF ___2___ EXISTS sinif ( \n  SinifNo INT ___3___ ___4___, \n  SinifAd VARCHAR(20) \n);',
    blanks: ['TABLE', 'NOT', 'PRIMARY KEY', 'AUTO_INCREMENT'],
    sql_file: '1_Veritabani_Tablo_Olusturma.sql',
    explanation: 'SHOW TABLES/DATABASES nesneleri listeler. CREATE TABLE IF NOT EXISTS tablo yapısını güvenli şekilde oluşturur.'
  },
  {
    id: 75,
    category: 'subquery',
    type: 'code',
    question: 'Her şehirdeki müşterilerin sayısını listeleyen ve müşteri sayısı 2\'den fazla olan şehirleri getiren sorguyu yazın.',
    snippet: '___1___ M.Sehir, ___2___(M.Sehir) ___3___ musteri ___4___ M ___5___ Sehir ___6___ 2 < ___7___(M.Sehir);',
    blanks: ['SELECT', 'COUNT', 'FROM', 'AS', 'GROUP BY', 'HAVING', 'COUNT'],
    sql_file: 'SQL-Ödev3 Cevaplar 11.sql',
    explanation: 'Sorgu çıktısı SELECT ile belirlenir. GROUP BY gruplamayı sağlar, gruplanmış veri kriterleri HAVING COUNT ile süzülür.'
  }
];

const questionsDers11 = [
  {
    id: 1,
    category: 'function',
    type: 'choice',
    question: "MySQL'de kullanıcı tanımlı fonksiyonlar (UDF) ile ilgili aşağıdakilerden hangisi yanlıştır?",
    options: [
      "Kullanıcı tanımlı fonksiyonlar CREATE FUNCTION komutuyla oluşturulur.",
      "Fonksiyonların sadece girdi (IN) parametreleri olabilir.",
      "Fonksiyonların gövdesinde saklı yordamlar (Stored Procedure) çağrılabilir.",
      "Fonksiyon tanımlamalarında tek bir değer dönülmesi (RETURN) zorunludur."
    ],
    answer: 2,
    explanation: "Slayt 21'e göre: Fonksiyonlar içerisinde saklı yordamlar (stored procedure) çalıştırılamaz."
  },
  {
    id: 2,
    category: 'function',
    type: 'choice',
    question: "Deterministik (DETERMINISTIC) fonksiyon kavramı aşağıdakilerden hangisini ifade eder?",
    options: [
      "Aynı giriş parametreleri için her çağrıda farklı sonuçlar üreten fonksiyonlardır.",
      "Aynı giriş parametreleri için her zaman aynı sonucu döndüren fonksiyonlardır.",
      "Sadece INSERT işlemi gerçekleştiğinde otomatik olarak çalışan fonksiyonlardır.",
      "İçerisinde işlem (transaction) kontrol komutları bulunduran fonksiyonlardır."
    ],
    answer: 1,
    explanation: "Slayt 8'e göre: Deterministik bir fonksiyon, aynı giriş parametreleri için her zaman aynı sonucu döndürür."
  },
  {
    id: 3,
    category: 'function',
    type: 'choice',
    question: "MySQL'de fonksiyon tanımlanırken deterministik olup olmadığı belirtilmezse, varsayılan olarak hangisi kabul edilir?",
    options: [
      "DETERMINISTIC",
      "NOT DETERMINISTIC (Nondeterministik)",
      "READS SQL DATA",
      "CONTAINS SQL"
    ],
    answer: 1,
    explanation: "Slayt 8'e göre: Eğer DETERMINISTIC veya NOT DETERMINISTIC ifadeleri belirtilmezse, MySQL varsayılan olarak fonksiyonu nondeterministik (NOT DETERMINISTIC) kabul eder."
  },
  {
    id: 4,
    category: 'function',
    type: 'choice',
    question: "Çok sunuculu replikasyon ortamlarında deterministik olmayan (nondeterministik) fonksiyonların kullanımıyla ilgili hangisi doğrudur?",
    options: [
      "Replikasyon ortamında herhangi bir veri tutarsızlığı riski taşımazlar.",
      "Replikasyon uyumluluğunu bozarak master ve slave sunucularda farklı sonuçlar üretebilir ve veri tutarsızlığına neden olabilirler.",
      "Statement-Based Logging kullanıldığında otomatik olarak önbelleğe alınırlar.",
      "Replikasyon ortamlarında her zaman deterministik fonksiyonlara tercih edilmelidir."
    ],
    answer: 1,
    explanation: "Slayt 11 ve 17'ye göre: Non-deterministik fonksiyonlar replikasyon sırasında farklı çıktılar üretebilir ve veri tutarsızlığına neden olabilir."
  },
  {
    id: 5,
    category: 'function',
    type: 'choice',
    question: "MySQL'de sadece çalıştırılan SQL sorgusunun loglandığı ve nondeterministik fonksiyonlarda veri tutarsızlığı riskinin yüksek olduğu loglama yöntemi hangisidir?",
    options: [
      "Row-Based Logging (Satır Bazlı)",
      "Transaction-Based Logging (İşlem Bazlı)",
      "Statement-Based Logging (Sorgu Bazlı)",
      "Result-Based Logging (Sonuç Bazlı)"
    ],
    answer: 2,
    explanation: "Slayt 18'e göre: Statement-Based Logging yönteminde sadece sorgu loglanır. Non-deterministik fonksiyonlar kopya sunucuda yeniden çalıştırıldığı için veri tutarsızlığı riski yüksektir."
  },
  {
    id: 6,
    category: 'function',
    type: 'choice',
    question: "Saklı Yordamlar (Stored Procedure) ile Fonksiyonların (Function) karşılaştırılmasına ilişkin hangisi doğrudur?",
    options: [
      "Saklı yordamlar SELECT, WHERE ve HAVING komutlarında doğrudan kullanılabilirler.",
      "Fonksiyonlar transaction (işlem) işlemlerinde kullanılabilir, saklı yordamlar kullanılamaz.",
      "Fonksiyonlarda girdi (IN) ve çıktı (OUT) parametreleri bulunabilir.",
      "Saklı yordamlarda hata yakalama (exception handling) kullanılabilirken, fonksiyonlarda hata yakalama kullanılamaz."
    ],
    answer: 3,
    explanation: "Slayt 21'deki karşılaştırma tablosuna göre: Saklı yordamlarda hata yakalama kullanılabilir, fonksiyon tanımlamalarında hata yakalama kullanılamaz."
  },
  {
    id: 7,
    category: 'function',
    type: 'code',
    question: "Dizgi (string) fonksiyonlarından; dizgideki karakter sayısını döndüren LENGTH() ve birden fazla dizgiyi birleştiren CONCAT() fonksiyonlarının kullanımını tamamlayın.",
    snippet: "SELECT ___1___('Merhaba'), ___2___('Merhaba', ' Dünya');",
    blanks: ["LENGTH", "CONCAT"],
    explanation: "LENGTH() karakter uzunluğunu bulur, CONCAT() ise dizgileri birleştirir."
  },
  {
    id: 8,
    category: 'function',
    type: 'code',
    question: "Matematiksel fonksiyonlardan; mutlak değeri döndüren ABS() ve sayıyı aşağı yuvarlayan FLOOR() fonksiyonlarının kullanımını tamamlayın.",
    snippet: "SELECT ___1___(-42), ___2___(3.7);",
    blanks: ["ABS", "FLOOR"],
    explanation: "ABS() mutlak değeri verir (çıktı 42 olur), FLOOR() ise aşağı yuvarlar (çıktı 3 olur)."
  },
  {
    id: 9,
    category: 'function',
    type: 'code',
    question: "Market veritabanında ürünlerin son kullanma tarihine kaç gün kaldığını hesaplayan 'SonKullanmaZamanHesapla' fonksiyonunun tanımındaki boşlukları tamamlayın.",
    snippet: "CREATE FUNCTION SonKullanmaZamanHesapla (P_SonKullanmaTarih DATE) ___1___ int(11)\nBEGIN\n  DECLARE KalanZaman INT;\n  SET KalanZaman = ___2___(P_SonKullanmaTarih, ___3___());\n  ___4___ KalanZaman;\nEND",
    blanks: ["RETURNS", "DATEDIFF", "NOW", "RETURN"],
    explanation: "Fonksiyon dönüş türü RETURNS ifadesiyle, tarih farkı DATEDIFF(tarih1, tarih2) ile, mevcut zaman NOW() ile ve değer döndürme RETURN ile yapılır."
  },
  {
    id: 10,
    category: 'function',
    type: 'code',
    question: "Parametre olarak aldığı sayının karesini alan ve aynı giriş için her zaman aynı sonucu üreten deterministik fonksiyon tanımını tamamlayın.",
    snippet: "CREATE FUNCTION kare_al(x INT) RETURNS INT\n___1___\nBEGIN\n  ___2___ x * x;\nEND",
    blanks: ["DETERMINISTIC", "RETURN"],
    explanation: "Aynı parametrelerle her zaman aynı sonucu veren fonksiyonlar DETERMINISTIC ifadesiyle işaretlenmelidir, değer döndürmek için ise RETURN ifadesi kullanılır."
  },
  {
    id: 11,
    category: 'trigger',
    type: 'choice',
    question: "Tetikleyiciler (Trigger) ile ilgili aşağıdakilerden hangisi yanlıştır?",
    options: [
      "Veri tabanındaki bir tablo üzerinde bir DML işlemi gerçekleştirildiğinde otomatik çalışırlar.",
      "Tetikleyici; INSERT, UPDATE veya DELETE işlemleri öncesinde veya sonrasında çalışacak şekilde tasarlanabilir.",
      "Her tetikleyici veri tabanındaki tüm tablolara ortak olarak bağlanır ve hepsinde çalışır.",
      "Tetikleyiciler veri bütünlüğünü sağlamak, otomatik hesaplama yapmak veya log kaydı oluşturmak için kullanılır."
    ],
    answer: 2,
    explanation: "Slayt 25'e göre: 'Tabloya Özel: Her tetikleyici bir tabloya özel olarak tasarlanabilir.' Ortak/genel tetikleyici kavramı yoktur."
  },
  {
    id: 12,
    category: 'trigger',
    type: 'choice',
    question: "Tetikleyicilerde eski veriye ve yeni veriye erişim sağlayan OLD ve NEW ifadelerinin UPDATE (güncelleme) komutu için geçerlilik durumu nedir?",
    options: [
      "Sadece OLD ifadesi kullanılabilir.",
      "Sadece NEW ifadesi kullanılabilir.",
      "Hem OLD hem de NEW ifadesi kullanılabilir.",
      "Hiçbiri kullanılamaz."
    ],
    answer: 2,
    explanation: "Slayt 31'e göre: UPDATE işlemi sırasında verinin eski haline OLD.Sütun_Adı, yeni güncellenmiş haline ise NEW.Sütun_Adı şeklinde erişilebilir. Her iki ifade de geçerlidir."
  },
  {
    id: 13,
    category: 'trigger',
    type: 'choice',
    question: "Tetikleyici işlem komutlarından DELETE (silme) işlemi sırasında OLD ve NEW ifadelerinin kullanılabilirliğiyle ilgili hangisi doğrudur?",
    options: [
      "OLD ifadesi kullanılabilir (Evet), NEW ifadesi kullanılamaz (Hayır).",
      "OLD ifadesi kullanılamaz (Hayır), NEW ifadesi kullanılabilir (Evet).",
      "Her iki ifade de kullanılabilir (Evet).",
      "Her iki ifade de kullanılamaz (Hayır)."
    ],
    answer: 0,
    explanation: "Slayt 31'e göre: DELETE işleminde silinen eski satır verisine OLD ile erişilebilir, ancak yeni bir satır eklenmediği için NEW ifadesi kullanılamaz."
  },
  {
    id: 14,
    category: 'trigger',
    type: 'choice',
    question: "INSERT (ekleme) işlemi sırasında tetikleyici gövdesinde OLD ve NEW ifadelerinin kullanılabilirliğiyle ilgili hangisi doğrudur?",
    options: [
      "OLD ifadesi kullanılabilir, NEW ifadesi kullanılamaz.",
      "OLD ifadesi kullanılamaz (Hayır), NEW ifadesi kullanılabilir (Evet).",
      "Her iki ifade de kullanılabilir.",
      "Her iki ifade de kullanılamaz."
    ],
    answer: 1,
    explanation: "Slayt 31'e göre: INSERT işleminde veritabanına yeni bir veri eklendiği için NEW ifadesi kullanılabilir, ancak öncesinde eski bir veri olmadığı için OLD ifadesi kullanılamaz."
  },
  {
    id: 15,
    category: 'trigger',
    type: 'choice',
    question: "Ders sunumunda yer alan 6 farklı tetikleyici çeşidi göz önüne alındığında, aşağıdakilerden hangisi bir tetikleyici zamanlama ve işlem türü değildir?",
    options: [
      "Silmeden Önce (Before Delete)",
      "Eklemeden Sonra (After Insert)",
      "Sorgulamadan Önce (Before Select)",
      "Güncellemeden Sonra (After Update)"
    ],
    answer: 2,
    explanation: "Slayt 28'e göre tetikleyiciler sadece DML (INSERT, UPDATE, DELETE) işlemleri için yazılabilir. SELECT işlemi bir tetikleyici türü değildir."
  },
  {
    id: 16,
    category: 'trigger',
    type: 'code',
    question: "Bir tablonun üzerindeki INSERT işleminden sonra çalışacak bir tetikleyici oluşturma söz dizimindeki boşlukları doldurun.",
    snippet: "___1___ TRIGGER satis_AFTER_INSERT\n___2___ INSERT ___3___ satis\nFOR ___4___ ROW\nBEGIN\n  /* Tetikleyici kod bloğu */\nEND",
    blanks: ["CREATE", "AFTER", "ON", "EACH"],
    explanation: "Tetikleyiciler CREATE TRIGGER komutuyla, AFTER zamanlamasıyla, ON tablo_adı tablosu üzerinde ve her satır için FOR EACH ROW komutuyla tanımlanır."
  },
  {
    id: 17,
    category: 'trigger',
    type: 'code',
    question: "Bir UPDATE tetikleyicisinde UrunAd sütununun güncelleme öncesindeki eski değerini 'eski_ad' değişkenine, güncelleme sonrasındaki yeni değerini 'yeni_ad' değişkenine atayan ifadeleri tamamlayın.",
    snippet: "SET eski_ad = ___1___.UrunAd;\nSET yeni_ad = ___2___.UrunAd;",
    blanks: ["OLD", "NEW"],
    explanation: "UPDATE tetikleyicisinde eski veriye OLD, yeni veriye NEW niteleyicisi ile erişilir."
  },
  {
    id: 18,
    category: 'trigger',
    type: 'code',
    question: "Satış tablosuna (`satis`) yeni bir kayıt eklendikten sonra, satış tutarının %5'ini puan olarak hesaplayıp `puan` tablosuna otomatik ekleyen tetikleyiciyi tamamlayın.",
    snippet: "CREATE TRIGGER satis_AFTER_INSERT AFTER ___1___ ON satis FOR EACH ROW\nBEGIN\n  INSERT INTO puan (MusteriNo, Puan, Tarih) \n  VALUES (___2___.MusteriNo, ((SELECT Fiyat FROM urun WHERE UrunNo = ___3___.UrunNo) * ___4___.Adet * 0.05), ___5___.Tarih);\nEND",
    blanks: ["INSERT", "NEW", "NEW", "NEW", "NEW"],
    explanation: "Tetikleyici AFTER INSERT olarak çalışır ve eklenen yeni satırdaki verilere NEW anahtar kelimesi ile (NEW.MusteriNo, NEW.UrunNo, NEW.Adet, NEW.Tarih) erişir."
  },
  {
    id: 19,
    category: 'trigger',
    type: 'choice',
    question: "MySQL'de bir tetikleyicinin etkilenen her bir satır için ayrı ayrı çalıştırılmasını (satır düzeyinde tetikleyici olmasını) sağlayan zorunlu ifade hangisidir?",
    options: [
      "FOR EACH ROW",
      "FOR EVERY RECORD",
      "EXECUTE FOR ALL",
      "PER ROW TRIGGER"
    ],
    answer: 0,
    explanation: "Slayt 29'a göre: MySQL'de tetikleyici oluşturulurken satır düzeyinde çalışması için 'FOR EACH ROW' ifadesinin kullanılması zorunludur."
  },
  {
    id: 20,
    category: 'trigger',
    type: 'code',
    question: "Rastgele değer üreten nondeterministik 'rastgele_deger()' fonksiyonunun tanımındaki eksik kısımları tamamlayın.",
    snippet: "CREATE FUNCTION rastgele_deger() RETURNS INT\n___1___ DETERMINISTIC\nBEGIN\n  RETURN FLOOR(1 + (___2___() * 100));\nEND",
    blanks: ["NOT", "RAND"],
    explanation: "Rastgele değer üreten fonksiyonlar NOT DETERMINISTIC olarak tanımlanır ve rastgele sayı üretmek için yerleşik RAND() fonksiyonu kullanılır."
  },
  {
    id: 21,
    category: 'function',
    type: 'code',
    question: "Matematiksel fonksiyonlardan; bir sayının belirtilen üssünü alan POWER() ve sayıyı belirtilen basamakta yuvarlayan ROUND() fonksiyonlarının kullanımını tamamlayın.",
    snippet: "SELECT ___1___(2, 3), ___2___(3.14159, 2);",
    blanks: ["POWER", "ROUND"],
    explanation: "POWER(2, 3) ifadesi 2^3=8 değerini, ROUND(3.14159, 2) ise virgülden sonra iki basamak olacak şekilde yuvarlayıp 3.14 değerini verir."
  },
  {
    id: 22,
    category: 'function',
    type: 'code',
    question: "Tarih fonksiyonlarından; mevcut sistem tarih ve saatini döndüren NOW() ile yalnızca bugünün tarihini veren CURDATE() fonksiyonlarının kullanımını tamamlayın.",
    snippet: "SELECT ___1___(), ___2___();",
    blanks: ["NOW", "CURDATE"],
    explanation: "NOW() hem tarihi hem saati döndürürken, CURDATE() yalnızca bugünün tarihini (yıl-ay-gün formatında) döndürür."
  },
  {
    id: 23,
    category: 'function',
    type: 'code',
    question: "Tarih fonksiyonlarından DATE_ADD() kullanarak, belirli bir tarihe 5 gün ekleyen SQL ifadesindeki boşlukları tamamlayın.",
    snippet: "SELECT ___1___('2024-12-10', ___2___ 5 ___3___);",
    blanks: ["DATE_ADD", "INTERVAL", "DAY"],
    explanation: "DATE_ADD(tarih, INTERVAL miktar birim) şeklinde kullanılır. Burada gün eklemek için 'INTERVAL 5 DAY' kullanılır."
  },
  {
    id: 24,
    category: 'function',
    type: 'code',
    question: "MySQL komut satırı veya Workbench üzerinde fonksiyon tanımlanırken noktalı virgül (`;`) çakışmasını engellemek için kullanılan ayırıcı tanımlama komutlarını tamamlayın.",
    snippet: "___1___ //\nCREATE FUNCTION kare_al(x INT) RETURNS INT DETERMINISTIC\nBEGIN\n  RETURN x * x;\nEND //\n___2___ ;",
    blanks: ["DELIMITER", "DELIMITER"],
    explanation: "MySQL Workbench'te fonksiyon gövdesi içindeki noktalı virgüllerin sorguyu yarıda kesmesini önlemek için DELIMITER komutuyla ayırıcı geçici olarak değiştirilir."
  },
  {
    id: 25,
    category: 'function',
    type: 'code',
    question: "Daha önce yazdığımız 'SonKullanmaZamanHesapla' fonksiyonunun SELECT, WHERE ve ORDER BY içerisinde kullanıldığı sorguyu tamamlayın.",
    snippet: "SELECT UrunAd, ___1___(SonKullanmaTarih) AS 'Kalan Gun'\nFROM urun\nWHERE 0 < ___2___(SonKullanmaTarih)\n___3___ BY ___4___(SonKullanmaTarih) DESC;",
    blanks: ["SonKullanmaZamanHesapla", "SonKullanmaZamanHesapla", "ORDER", "SonKullanmaZamanHesapla"],
    explanation: "Slayt 23'e göre kullanıcı tanımlı fonksiyonlar saklı yordamların aksine SELECT, WHERE ve ORDER BY gibi komutların içinde doğrudan çağrılabilir."
  },
  {
    id: 26,
    category: 'trigger',
    type: 'code',
    question: "Bir UPDATE (güncelleme) tetikleyicisinde, verinin güncelleme öncesindeki durumuna (eski) ve güncelleme sonrasındaki durumuna (yeni) erişmek için kullanılan niteleyicileri tamamlayın.",
    snippet: "SET eski_fiyat = ___1___.Fiyat;\nSET yeni_fiyat = ___2___.Fiyat;",
    blanks: ["OLD", "NEW"],
    explanation: "UPDATE tetikleyicisinde eski satır verileri için OLD, güncellenmiş yeni satır verileri için NEW niteleyicileri kullanılır."
  },
  {
    id: 27,
    category: 'trigger',
    type: 'code',
    question: "Bir tablonun üzerindeki DML işlemi gerçekleştirilmeden önce çalışacak bir tetikleyici oluşturma söz dizimindeki boşlukları doldurun.",
    snippet: "CREATE TRIGGER satis_BEFORE_INSERT\n___1___ INSERT ___2___ satis\nFOR EACH ROW\nBEGIN\n  /* Tetikleyici kod bloğu */\nEND",
    blanks: ["BEFORE", "ON"],
    explanation: "DML işlemi öncesi tetikleyiciler BEFORE ifadesiyle tanımlanır ve ON tablo_adı ile ilgili tabloya bağlanırlar."
  },
  {
    id: 28,
    category: 'trigger',
    type: 'code',
    question: "Satış tablosundan (`satis`) bir satır silindikten (DELETE) sonra çalışacak ve silinen satırdaki MusteriNo bilgisini satis_log tablosuna yazacak tetikleyiciyi tamamlayın.",
    snippet: "CREATE TRIGGER satis_AFTER_DELETE\nAFTER ___1___ ON satis\nFOR EACH ROW\nBEGIN\n  INSERT INTO satis_log (MusteriNo, Islem)\n  VALUES (___2___.MusteriNo, 'Silindi');\nEND",
    blanks: ["DELETE", "OLD"],
    explanation: "Silme işlemi sonrası için AFTER DELETE tanımlanır. DELETE tetikleyicilerinde silinen veriye OLD niteleyicisi (OLD.MusteriNo) ile erişilir. Yeni bir veri eklenmediği için NEW niteleyicisi kullanılamaz."
  },
  {
    id: 29,
    category: 'trigger',
    type: 'code',
    question: "MySQL'de Statement-Based (Sorgu bazlı) ve Row-Based (Satır bazlı) replikasyon formatlarını global olarak belirleyen komutları tamamlayın.",
    snippet: "SET GLOBAL binlog_format = '___1___';\nSET GLOBAL binlog_format = '___2___';",
    blanks: ["STATEMENT", "ROW"],
    explanation: "binlog_format değeri 'STATEMENT' veya 'ROW' olarak ayarlanabilir. Non-deterministik fonksiyonların replikasyonda veri tutarsızlığı yapmaması için ROW kullanılması önerilir."
  },
  {
    id: 30,
    category: 'trigger',
    type: 'code',
    question: "MySQL Workbench'te veri tabanından veri okumayan veya üzerinde değişiklik yapmayan, aynı parametrelerle her zaman aynı sonucu veren bir kullanıcı tanımlı fonksiyon oluşturma şablonunu tamamlayın.",
    snippet: "CREATE FUNCTION kare_al(x INT) RETURNS INT\n___1___\nBEGIN\n  ___2___ x * x;\nEND",
    blanks: ["DETERMINISTIC", "RETURN"],
    explanation: "Aynı parametrelerle her zaman aynı sonucu veren fonksiyonlar DETERMINISTIC ifadesiyle belirtilmeli ve gövdede değer döndürmek için RETURN kullanılmalıdır."
  }
];

const questionsDers12 = [
  {
    id: 1,
    category: 'params',
    type: 'choice',
    question: "MySQL'de saklı yordam çağrıldığında dışarıdan değer alan, bu değeri işlem sırasında yalnızca okuyan ve varsayılan (default) mod olan parametre tipi hangisidir?",
    options: [
      "OUT",
      "IN",
      "INOUT",
      "RETURN"
    ],
    answer: 1,
    explanation: "Slayt 4'e göre: IN (Girdi) parametresi yordam çağrıldığında dışarıdan değer alır ve bu değer prosedür içinde yalnızca okunabilir. IN varsayılan parametre modudur."
  },
  {
    id: 2,
    category: 'params',
    type: 'choice',
    question: "Bir OUT (Çıktı) parametresi ile ilgili aşağıdakilerden hangisi doğrudur?",
    options: [
      "Yordam çağrıldığında çağıran programın atadığı başlangıç değerine doğrudan erişebilir.",
      "Değeri yordam içinde değiştirilemez ve çağıran programa geri döndürülemez.",
      "Yordam içinde işlenen bir değeri çağıran programa çıktı veya görüntüleme amacıyla döndürür.",
      "Hem girdi hem çıktı olarak davranır ve prosedür başlangıcında değer taşır."
    ],
    answer: 2,
    explanation: "Slayt 4 ve 7'ye göre: OUT parametresi yordam içinde işlenen bir değeri dışarıya döndürür. Prosedür başladığında OUT parametresinin başlangıç değerine erişemez."
  },
  {
    id: 3,
    category: 'params',
    type: 'choice',
    question: "Hem girdi (giriş) hem de çıktı (çıkış) parametresi olarak davranan, çağrıldığında başlangıç değeri alıp işlenmiş değeri aynı parametre olarak geri döndüren mod hangisidir?",
    options: [
      "IN",
      "OUT",
      "INOUT",
      "PARAM"
    ],
    answer: 2,
    explanation: "Slayt 4 ve 11'e göre: INOUT parametresi hem giriş hem çıkış için kullanılır. Çağrıldığında bir başlangıç değeri alır ve işlenmiş değeri aynı parametreyle geri döndürür."
  },
  {
    id: 4,
    category: 'params',
    type: 'choice',
    question: "Aşağıdakilerden hangisi saklı yordam parametreleri tanımlanırken dikkat edilmesi gereken hususlardan biri değildir?",
    options: [
      "IN, OUT veya INOUT parametreleri tanımlanırken uygun veri tipleri seçilmelidir.",
      "OUT parametrelerine prosedür çağrılmadan önce doğrudan başlangıç değeri atanabilir.",
      "INOUT parametrelerinin çağrı sırasında bir başlangıç değerine ihtiyacı vardır.",
      "Hata yönetimi sağlamak için SIGNAL komutuyla özel hata mesajları tanımlanabilir."
    ],
    answer: 1,
    explanation: "Slayt 13'e göre: OUT parametrelerine doğrudan başlangıç değeri atanamaz. OUT parametresi yalnızca saklı yordam içinde atanabilir."
  },
  {
    id: 5,
    category: 'params',
    type: 'choice',
    question: "OUT parametresine sahip bir saklı yordam çağrıldığında, çıktı değerini yakalayıp saklamak için CALL komutunda aşağıdakilerden hangisi kullanılmalıdır?",
    options: [
      "Bir SQL tablosunun adı",
      "Bir kullanıcı tanımlı değişken (örn. @SonucDegiskeni)",
      "Bir saklı yordam adı",
      "Doğrudan sabit bir tamsayı değeri (örn. 5)"
    ],
    answer: 1,
    explanation: "Slayt 9 ve 10'a göre: OUT parametresi içeren saklı yordamlar çağrılırken çıktı değeri bir kullanıcı değişkenine atanır ve SELECT komutu ile yazdırılır."
  },
  {
    id: 6,
    category: 'params',
    type: 'choice',
    question: "INOUT parametresine sahip bir yordamı çağırmadan önce aşağıdakilerden hangisinin yapılması zorunludur?",
    options: [
      "Çağrı parametresi olarak kullanılacak değişkene bir başlangıç değeri atanmalıdır.",
      "Yordam içinde bir SELECT sorgusu çalıştırılması zorunludur.",
      "DELIMITER ifadesinin kaldırılması gerekir.",
      "Veritabanındaki tüm tabloların geçici olarak kilitlenmesi gerekir."
    ],
    answer: 0,
    explanation: "Slayt 12 ve 13'e göre: INOUT parametresi yordam başlangıcında bu değer üzerinden işlem yapacağından, saklı yordam çağrısı sırasında başlangıç değeri verilmelidir (örn. SET @bakiye = 700.00;)."
  },
  {
    id: 7,
    category: 'params',
    type: 'code',
    question: "Girdi olarak 'p_Girdi' ve çıktı olarak 'p_Cikti' tamsayı parametreleri alan saklı yordam parametre tanımını tamamlayın.",
    snippet: "CREATE PROCEDURE GirdiCiktiOrnek (___1___ p_Girdi INT, ___2___ p_Cikti INT)",
    blanks: ["IN", "OUT"],
    explanation: "Girdi parametresi için IN, çıktı parametresi için OUT anahtar kelimeleri kullanılır."
  },
  {
    id: 8,
    category: 'params',
    type: 'code',
    question: "Girdi parametresini 2 ile çarpıp 'SONUC' değişkenine alan ve bu değeri çıktı parametresine ('p_Cikti') atayan yordam gövdesini tamamlayın.",
    snippet: "BEGIN\n  DECLARE SONUC INTEGER;\n  SET SONUC = p_Girdi * 2;\n  ___1___ p_Cikti = ___2___;\nEND",
    blanks: ["SET", "SONUC"],
    explanation: "MySQL saklı yordamlarında bir değişkene değer atamak için SET komutu kullanılır."
  },
  {
    id: 9,
    category: 'params',
    type: 'code',
    question: "Çıktı parametresi içeren 'GirdiCiktiOrnek' yordamını '5' girdi değeriyle çağıran ve dönen değeri '@SonucDegiskeni' adlı değişkende saklayıp yazdıran komutları tamamlayın.",
    snippet: "___1___ GirdiCiktiOrnek(5, ___2___);\nSELECT ___3___ AS \"Yordam Çıktısı\";",
    blanks: ["CALL", "@SonucDegiskeni", "@SonucDegiskeni"],
    explanation: "Saklı yordamlar CALL ile çağrılır. Çıktı değişkeni @ işaretiyle tanımlanır ve SELECT ile ekrana yazdırılır."
  },
  {
    id: 10,
    category: 'params',
    type: 'code',
    question: "'para_cek' adında, 'bakiye' değişkenini hem girdi hem çıktı olarak alan, 'cekilecek_miktar'ı ise sadece girdi olarak alan saklı yordam tanımını tamamlayın.",
    snippet: "CREATE PROCEDURE `Para_Cek` (\n  ___1___ bakiye DECIMAL(10,2),\n  ___2___ cekilecek_miktar DECIMAL(10,2)\n)",
    blanks: ["INOUT", "IN"],
    explanation: "Hem girdi hem çıktı olan parametreler INOUT, sadece girdi olanlar ise IN ile tanımlanır."
  },
  {
    id: 11,
    category: 'params',
    type: 'code',
    question: "Çekilecek miktar bakiyeden büyükse SIGNAL SQLSTATE '45000' ile 'Yetersiz bakiye!' hatası fırlatan ve yordamı sonlandıran yapıyı tamamlayın.",
    snippet: "IF bakiye >= cekilecek_miktar THEN\n  SET bakiye = bakiye - cekilecek_miktar;\nELSE\n  ___1___ SQLSTATE '45000'\n  SET ___2___ = 'Yetersiz bakiye!';\n___3___ IF;",
    blanks: ["SIGNAL", "MESSAGE_TEXT", "END"],
    explanation: "Özel hata fırlatmak için SIGNAL SQLSTATE kullanılır ve hata mesajı MESSAGE_TEXT değişkenine atanır. IF bloğu END IF ile bitirilir."
  },
  {
    id: 12,
    category: 'loops',
    type: 'choice',
    question: "MySQL'de etiket temelli LOOP döngüsünden çıkmak ve döngüyü sonlandırmak için kullanılan ifade aşağıdakilerden hangisidir?",
    options: [
      "BREAK",
      "EXIT",
      "LEAVE",
      "END LOOP"
    ],
    answer: 2,
    explanation: "Slayt 15'e göre: LOOP döngüsü bir etikete sahiptir ve döngüden çıkılmak istendiğinde LEAVE ifadesiyle sonlandırılır."
  },
  {
    id: 13,
    category: 'loops',
    type: 'choice',
    question: "MySQL döngü yapılarından WHILE döngüsü ile ilgili aşağıdakilerden hangisi doğrudur?",
    options: [
      "Koşul doğru olsun ya da olmasın işlemleri en az bir kez gerçekleştirir.",
      "Koşul doğru (true) olduğu sürece belirtilen işlemleri tekrarlar.",
      "Mutlaka bir döngü etiketine sahip olmak zorundadır.",
      "Sadece SELECT komutlarıyla birlikte çalışabilir."
    ],
    answer: 1,
    explanation: "Slayt 14'e göre: WHILE döngüsü, koşul doğru olduğu sürece işlemleri tekrarlar."
  },
  {
    id: 14,
    category: 'loops',
    type: 'choice',
    question: "MySQL'de REPEAT döngüsüyle ilgili aşağıdakilerden hangisi doğrudur?",
    options: [
      "Koşulu en başta kontrol eder, koşul baştan yanlışsa döngüye hiç girmez.",
      "Döngü içindeki işlemleri en az bir kez gerçekleştirir ve koşul doğru (true) olduğunda sona erer.",
      "Sonlandırılması için döngü gövdesinde mutlaka LEAVE ifadesi kullanılmalıdır.",
      "Bir transaction (işlem) bloğu içinde kullanılamaz."
    ],
    answer: 1,
    explanation: "Slayt 14 ve 26'ya göre: REPEAT döngüsü (do-while mantığıyla) içindeki işlemleri koşul doğru olsun olmasın en az bir kez çalıştırır ve UNTIL koşulu doğru olduğunda sona erer."
  },
  {
    id: 15,
    category: 'loops',
    type: 'choice',
    question: "Döngülerde sonsuz döngüye (infinite loop) girilmesini önlemek amacıyla dikkat edilmesi gereken en kritik kural hangisidir?",
    options: [
      "Döngünün mutlaka büyük harflerle yazılması gerekir.",
      "Döngü sonlandırma koşulunun (LEAVE, UNTIL veya WHILE) doğru ve erişilebilir tanımlanması.",
      "Döngü içerisinde DECLARE komutunun kullanılmaması.",
      "Döngünün bir saklı yordam içinde çalıştırılmaması."
    ],
    answer: 1,
    explanation: "Slayt 27'ye göre: Sonsuz döngüden kaçınmak için döngü sonlandırma koşulu iyi tanımlanmalıdır. LEAVE veya doğru bir UNTIL/WHILE ifadesi kullanılmalıdır."
  },
  {
    id: 16,
    category: 'loops',
    type: 'code',
    question: "'dongu_etiket' etiketine sahip LOOP döngüsünde, 'i' değişkeni girdi değerini aştığında döngüden çıkmayı (LEAVE) sağlayan yapıyı tamamlayın.",
    snippet: "dongu_etiket: LOOP\n  SET toplam = toplam + i;\n  SET i = i + 1;\n  IF i > sayi THEN\n    ___1___ dongu_etiket;\n  END IF;\nEND ___2___ dongu_etiket;",
    blanks: ["LEAVE", "LOOP"],
    explanation: "LOOP döngüsü LEAVE etiket_adi ile sonlandırılır ve döngü bloğu END LOOP ile bitirilir."
  },
  {
    id: 17,
    category: 'loops',
    type: 'code',
    question: "Sayaç değişkeni girdi olarak verilen 'p_Sayi' değerine eşit veya küçük olduğu sürece çalışan WHILE döngüsünü tamamlayın.",
    snippet: "___1___ Sayac <= p_Sayi ___2___\n  SET Faktoryel = Faktoryel * Sayac;\n  SET Sayac = Sayac + 1;\nEND ___3___;",
    blanks: ["WHILE", "DO", "WHILE"],
    explanation: "WHILE döngüsü 'WHILE kosul DO ... END WHILE;' söz dizimiyle yazılır."
  },
  {
    id: 18,
    category: 'loops',
    type: 'code',
    question: "Tarih farkı hesaplayan WHILE döngüsü içinde, 'SonrakiTarih' değişkenine her adımda 1 yıl ekleyen SQL ifadesindeki boşlukları tamamlayın.",
    snippet: "WHILE OncekiTarih < BitisTarih DO\n  SET Yil = Yil + 1;\n  SET OncekiTarih = SonrakiTarih;\n  SET SonrakiTarih = SonrakiTarih + ___1___ 1 ___2___;\nEND WHILE;",
    blanks: ["INTERVAL", "YEAR"],
    explanation: "Tarihe zaman eklemek için '+ INTERVAL 1 YEAR' ifadesi kullanılır."
  },
  {
    id: 19,
    category: 'loops',
    type: 'code',
    question: "'faktoryel_hesapla2' saklı yordamında REPEAT döngüsünü 'i > sayi' koşulu sağlanana kadar çalışacak şekilde tamamlayın.",
    snippet: "___1___\n  SET sonuc = sonuc * i;\n  SET i = i + 1;\n___2___ i > sayi\nEND ___3___;",
    blanks: ["REPEAT", "UNTIL", "REPEAT"],
    explanation: "REPEAT döngüsü 'REPEAT ... UNTIL kosul END REPEAT;' yapısıyla kurulur."
  },
  {
    id: 20,
    category: 'errors',
    type: 'choice',
    question: "Hata oluştuğunda yordamın durmadan bir sonraki adıma geçmesini ve çalışmaya devam etmesini sağlayan hata tutucu (handler) eylemi hangisidir?",
    options: [
      "EXIT",
      "CONTINUE",
      "IGNORE",
      "RESIGNAL"
    ],
    answer: 1,
    explanation: "Slayt 29'a göre: CONTINUE durumunda, hata oluştuğunda işlem devam eder."
  },
  {
    id: 21,
    category: 'errors',
    type: 'choice',
    question: "Hata oluştuğunda saklı yordamın çalışmasının tamamen sonlandırılmasını ve durmasını sağlayan hata tutucu (handler) eylemi hangisidir?",
    options: [
      "CONTINUE",
      "STOP",
      "EXIT",
      "LEAVE"
    ],
    answer: 2,
    explanation: "Slayt 29'a göre: EXIT durumunda, hata oluştuğunda işlem durur ve saklı yordam sonlandırılır."
  },
  {
    id: 22,
    category: 'errors',
    type: 'choice',
    question: "Veritabanına mükerrer (tekrarlayan) bir kayıt eklenmeye çalışıldığında ortaya çıkan 1062 nolu hata kodunun (ER_DUP_ENTRY) nedeni hangisidir?",
    options: [
      "İlgili tablonun veritabanında bulunamaması",
      "UNIQUE anahtar (benzersizlik) veya PRIMARY KEY kısıtlamasının ihlal edilmesi",
      "NOT NULL olarak tanımlanmış bir sütuna boş değer girilmesi",
      "Kullanıcının tabloya veri ekleme yetkisinin bulunmaması"
    ],
    answer: 1,
    explanation: "Slayt 31'deki hata tablosuna göre: 1062 hata kodu tekrarlayan bir kayıt eklenmeye çalışıldığında UNIQUE anahtar ihlali durumunda oluşur."
  },
  {
    id: 23,
    category: 'errors',
    type: 'choice',
    question: "MySQL'de bir select sorgusu veya işlem sonucunda aranan satırın bulunamadığını belirten SQL durum sınıfı (SQL state class) hangisidir?",
    options: [
      "SQLEXCEPTION",
      "SQLWARNING",
      "NOT FOUND",
      "SQLSTATE '23000'"
    ],
    answer: 2,
    explanation: "Slayt 30 ve 34'e göre: 'NOT FOUND' ifadesi aranan satırın veya kaydın bulunamadığı durumları temsil eden genel bir hata/durum sınıfıdır."
  },
  {
    id: 24,
    category: 'errors',
    type: 'choice',
    question: "Hata tutucu (DECLARE HANDLER) tanımlarken belirli bir hata kodu yerine genel bir hata sınıfına göre tanımlama yapmak istendiğinde hangisi kullanılamaz?",
    options: [
      "SQLEXCEPTION",
      "SQLWARNING",
      "NOT FOUND",
      "ER_BAD_DB_ERROR"
    ],
    answer: 3,
    explanation: "Slayt 30 ve 31'e göre: SQLEXCEPTION, SQLWARNING ve NOT FOUND genel hata sınıflarıdır. ER_BAD_DB_ERROR (veya 1049) ise özel bir hata kodudur, genel bir hata sınıfı değildir."
  },
  {
    id: 25,
    category: 'errors',
    type: 'choice',
    question: "Hata kontrolü yapılan bir saklı yordamda, oluşan hatanın hata numarası (MYSQL_ERRNO) ve SQL durumu (RETURNED_SQLSTATE) gibi bilgilerini almak için kullanılan komut hangisidir?",
    options: [
      "SHOW ERRORS",
      "GET DIAGNOSTICS CONDITION",
      "SIGNAL SQLSTATE",
      "DECLARE HANDLER"
    ],
    answer: 1,
    explanation: "Slayt 36'ya göre: Tetiklenen bir hatanın numarası, SQL durumu veya hata mesajı gibi koşul detaylarını almak için GET DIAGNOSTICS CONDITION yapısı kullanılır."
  },
  {
    id: 26,
    category: 'errors',
    type: 'choice',
    question: "Veri tabanında aranan bir tablonun bulunamaması durumunda ortaya çıkan 1146 nolu hata kodunun adı/tipi hangisidir?",
    options: [
      "ER_BAD_DB_ERROR",
      "ER_NO_SUCH_TABLE",
      "ER_BAD_FIELD_ERROR",
      "ER_ROW_IS_REFERENCED"
    ],
    answer: 1,
    explanation: "Slayt 31'e göre: 1146 hata kodu ER_NO_SUCH_TABLE (belirtilen tablo bulunamadı) hatasını temsil eder."
  },
  {
    id: 27,
    category: 'errors',
    type: 'choice',
    question: "MySQL saklı yordamlarında hata kontrolü (HANDLER) kullanmanın olumsuz yönlerinden biri aşağıdakilerden hangisidir?",
    options: [
      "Esneklik kazandırması ve farklı hata türlerine özel işlemler yapabilmesi",
      "Hataları önceden yakalayarak işlem akışını kontrol edebilmesi",
      "İç içe geçmiş veya karmaşık yordamlarda hata takibini ve hata ayıklamayı (debugging) zorlaştırabilmesi",
      "İşlemler sırasında oluşabilecek hatalarda kodun tamamen durmasını engelleyebilmesi"
    ],
    answer: 2,
    explanation: "Slayt 37'ye göre: Hata kontrolü (HANDLER) kullanımının olumsuz yönleri karmaşık prosedürlerde hata takibinin zorlaşması, performans etkileri ve debug zorluğudur."
  },
  {
    id: 28,
    category: 'errors',
    type: 'code',
    question: "1062 nolu hata (tekrarlayan kayıt) oluştuğunda yordamın çalışmasını durduran (EXIT) ve ekrana hata numarasını yazdıran hata tutucuyu tamamlayın.",
    snippet: "DECLARE ___1___ HANDLER FOR ___2___\n  SELECT MYSQL_ERRNO;",
    blanks: ["EXIT", "1062"],
    explanation: "Hata durumunda çıkış yapmak için EXIT HANDLER FOR hata_kodu söz dizimi kullanılır."
  },
  {
    id: 29,
    category: 'errors',
    type: 'choice',
    question: "Herhangi bir SQLEXCEPTION hatası oluştuğunda 'Hata' değişkenini 1 olarak atayıp saklı yordamın çalışmasına devam eden (CONTINUE) doğru handler tanımı hangisidir?",
    options: [
      "DECLARE CONTINUE HANDLER FOR SQLEXCEPTION SET Hata = 1;",
      "DECLARE EXIT HANDLER FOR SQLEXCEPTION SET Hata = 1;",
      "DECLARE HANDLER FOR SQLEXCEPTION CONTINUE SET Hata = 1;",
      "DECLARE SQLEXCEPTION CONTINUE HANDLER SET Hata = 1;"
    ],
    answer: 0,
    explanation: "Slayt 33'e göre: Hata anında çalışmanın sürmesi için 'DECLARE CONTINUE HANDLER FOR SQLEXCEPTION işlemler;' biçimi kullanılır."
  },
  {
    id: 30,
    category: 'errors',
    type: 'code',
    question: "Tetiklenen bir hatanın numarasını ve SQL durum kodunu almak için kullanılan GET DIAGNOSTICS kodunu tamamlayın.",
    snippet: "___1___ DIAGNOSTICS ___2___ 1\n  @HataNo = MYSQL_ERRNO, @SQLDurum = RETURNED_SQLSTATE;",
    blanks: ["GET", "CONDITION"],
    explanation: "Hata teşhisi yapmak için 'GET DIAGNOSTICS CONDITION 1' yapısı kullanılır."
  },
  {
    id: 31,
    category: 'errors',
    type: 'code',
    question: "Herhangi bir SQLEXCEPTION durumunda yordamın çalışmasını durdurup çıkış (EXIT) yapan genel hata tutucu yapısını tamamlayın.",
    snippet: "DECLARE ___1___ HANDLER FOR ___2___\nBEGIN\n  /* Hata yönetim kodları */\nEND;",
    blanks: ["EXIT", "SQLEXCEPTION"],
    explanation: "Genel hata yakalama bloğu 'DECLARE EXIT HANDLER FOR SQLEXCEPTION' ile başlatılır."
  },
  {
    id: 32,
    category: 'errors',
    type: 'choice',
    question: "Bir saklı yordamda aranan verinin bulunamaması (NOT FOUND) durumunda çıkış (EXIT) yapan ve 'Satır Bulunamadı' mesajı seçen handler hangisidir?",
    options: [
      "DECLARE CONTINUE HANDLER FOR NOT FOUND SELECT 'Satır Bulunamadı';",
      "DECLARE EXIT HANDLER FOR NOT FOUND SELECT 'Satır Bulunamadı';",
      "DECLARE HANDLER FOR NOT FOUND EXIT SELECT 'Satır Bulunamadı';",
      "DECLARE EXIT FOR NOT FOUND SELECT 'Satır Bulunamadı';"
    ],
    answer: 1,
    explanation: "Slayt 34'e göre: NOT FOUND hatası alındığında çıkıp mesaj vermek için 'DECLARE EXIT HANDLER FOR NOT FOUND SELECT 'Satır Bulunamadı';' kullanılır."
  },
  {
    id: 33,
    category: 'errors',
    type: 'code',
    question: "Çalışma uyarısı durumunda (SQLWARNING) çıkış yapan ve ekrana 'SQL Çalışma Uyarısı' yazdıran hata tutucusunu tamamlayın.",
    snippet: "DECLARE EXIT HANDLER FOR ___1___\n  SELECT \"___2___\";",
    blanks: ["SQLWARNING", "SQL Çalışma Uyarısı"],
    explanation: "Hata sınıflarından SQLWARNING uyarıları yakalar. SELECT ile ekrana yazdırılacak metin çift tırnaklar arasına alınır."
  },
  {
    id: 34,
    category: 'errors',
    type: 'code',
    question: "Hata durumunda hata mesaj metnini '@HataMesaj' değişkenine, hata alınan şema adını ise '@SemaAd' değişkenine atayan komutu tamamlayın.",
    snippet: "GET DIAGNOSTICS CONDITION 1\n  @HataMesaj = ___1___,\n  @SemaAd = ___2___;",
    blanks: ["MESSAGE_TEXT", "SCHEMA_NAME"],
    explanation: "GET DIAGNOSTICS CONDITION ile hata mesaj metni MESSAGE_TEXT, veritabanı şema adı ise SCHEMA_NAME ile okunur."
  },
  {
    id: 35,
    category: 'errors',
    type: 'code',
    question: "SQLSTATE '23000' (UNIQUE/PRIMARY KEY kısıtlaması) hatası durumunda çıkış yapan ve 'Durum' değişkenini eşitleyen hata tutucuyu tamamlayın.",
    snippet: "DECLARE EXIT HANDLER FOR ___1___ '23000'\n  SET Durum = '23000';",
    blanks: ["SQLSTATE"],
    explanation: "Belirli bir SQL durum kodunu yakalamak için SQLSTATE ifadesi kullanılır."
  },
  {
    id: 36,
    category: 'errors',
    type: 'code',
    question: "Hata kodu '1048' (NOT NULL sütununa boş değer girilmesi) durumunda çalışmaya devam eden (CONTINUE) hata tutucu tanımını tamamlayın.",
    snippet: "DECLARE ___1___ HANDLER FOR ___2___\n  SET Hata_Kodu = 1048;",
    blanks: ["CONTINUE", "1048"],
    explanation: "Hata kodu 1048 (ER_BAD_NULL_ERROR) durumunda çalışmanın sürmesi için CONTINUE HANDLER FOR 1048 yazılır."
  },
  {
    id: 37,
    category: 'errors',
    type: 'code',
    question: "Hata kodu '1146' (Tablo bulunamadı) durumunda 'Tablo Bulunamadı' mesajı yazıp çıkış yapan hata tutucuyu tamamlayın.",
    snippet: "DECLARE EXIT HANDLER FOR ___1___\n  SELECT \"___2___\";",
    blanks: ["1146", "Tablo Bulunamadı"],
    explanation: "ER_NO_SUCH_TABLE hatasının sayısal kodu 1146'dır."
  },
  {
    id: 38,
    category: 'errors',
    type: 'code',
    question: "Kullanıcı adı/şifre hatasında (Hata kodu 1045) çalışmaya devam eden hata tutucu tanımını tamamlayın.",
    snippet: "DECLARE ___1___ HANDLER FOR ___2___\n  SET Hata_Kodu = 1045;",
    blanks: ["CONTINUE", "1045"],
    explanation: "ER_ACCESS_DENIED_ERROR hatasının sayısal kodu 1045'tir ve CONTINUE ile çalışmayı sürdürebilir."
  },
  {
    id: 39,
    category: 'errors',
    type: 'code',
    question: "Döngülerde veya yordamlarda hata yönetimi için handler tanımlama söz dizimini tamamlayın.",
    snippet: "___1___ CONTINUE ___2___ FOR SQLEXCEPTION SET Hata = 1;",
    blanks: ["DECLARE", "HANDLER"],
    explanation: "Hata yönetimi DECLARE durum_eylemi HANDLER FOR hata_sinifi söz dizimiyle tanımlanır."
  },
  {
    id: 40,
    category: 'errors',
    type: 'code',
    question: "'MarkaEkle' prosedüründe, marka eklenirken bir SQLEXCEPTION hatası oluştuğunda çıkış (EXIT) yapan handler tanımını tamamlayın.",
    snippet: "CREATE PROCEDURE MarkaEkle(IN P_Marka VARCHAR(45), OUT O_Durum TEXT)\nBEGIN\n  ___1___ EXIT ___2___ FOR ___3___\n  BEGIN\n    /* Hata yakalandığında yapılacak işlemler */\n  END;\n  \n  INSERT INTO marka(MarkaAd) VALUES (P_Marka);\nEND",
    blanks: ["DECLARE", "HANDLER", "SQLEXCEPTION"],
    explanation: "Prosedür başlangıcında DECLARE EXIT HANDLER FOR SQLEXCEPTION kullanılarak yordam içindeki insert hataları yakalanır."
  }
];

const questionsFinal = [
  {
    "id": 1,
    "category": "ders8",
    "type": "choice",
    "question": "MySQL'de VIEW (Görünüm) nedir?",
    "options": [
      "Veritabanında fiziksel olarak saklanan bir tablo",
      "Bir SELECT sorgusuna dayalı sanal (virtual) tablo",
      "Veritabanı yedekleme aracı",
      "Tablo indeksleme yöntemi"
    ],
    "optionReasons": [
      "Yanlış – VIEW fiziksel veri saklamaz, sorgu tanımını saklar.",
      "Doğru – VIEW, bir SELECT sorgusunun sonucunu temsil eden sanal tablodur.",
      "Yanlış – VIEW yedekleme ile ilgili değildir.",
      "Yanlış – VIEW indeksleme mekanizması değildir."
    ],
    "answer": 1,
    "explanation": "VIEW, bir SELECT sorgusuna dayalı sanal tablodur. Kendi başına veri saklamaz; her çağrıldığında tanımlandığı sorguyu çalıştırır."
  },
  {
    "id": 2,
    "category": "ders8",
    "type": "choice",
    "question": "Aşağıdakilerden hangisi bir VIEW'ı güncellenemez (non-updatable) yapar?",
    "options": [
      "WHERE koşulu kullanmak",
      "Tek bir tablodan SELECT yapmak",
      "GROUP BY ve toplama fonksiyonu (SUM, COUNT vb.) kullanmak",
      "Sütunlara takma ad (alias) vermek"
    ],
    "optionReasons": [
      "Yanlış – WHERE koşulu VIEW'ı güncellenemez yapmaz.",
      "Yanlış – Tek tablodan SELECT yapan VIEW'lar genellikle güncellenebilir.",
      "Doğru – Toplama fonksiyonları ve GROUP BY, VIEW'ı güncellenemez yapar.",
      "Yanlış – Alias kullanmak VIEW'ın güncellenebilirliğini etkilemez."
    ],
    "answer": 2,
    "explanation": "GROUP BY, HAVING, DISTINCT, toplama fonksiyonları (SUM, COUNT, AVG vb.), UNION veya alt sorgu içeren VIEW'lar güncellenemez olur."
  },
  {
    "id": 3,
    "category": "ders8",
    "type": "choice",
    "question": "WITH CHECK OPTION ifadesinin amacı nedir?",
    "options": [
      "VIEW'ın performansını artırır",
      "VIEW üzerinden yapılan INSERT/UPDATE işlemlerinin WHERE koşulunu sağlamasını zorunlu kılar",
      "VIEW'ı salt okunur (read-only) yapar",
      "VIEW'ın otomatik olarak yenilenmesini sağlar"
    ],
    "optionReasons": [
      "Yanlış – WITH CHECK OPTION performans optimizasyonu değildir.",
      "Doğru – Eklenen veya güncellenen satırların VIEW'ın WHERE koşuluyla uyumlu olmasını zorunlu kılar.",
      "Yanlış – VIEW hâlâ güncellenebilir, sadece koşul kontrolü eklenir.",
      "Yanlış – VIEW'ın yenilenmesiyle ilgili değildir."
    ],
    "answer": 1,
    "explanation": "WITH CHECK OPTION, VIEW üzerinden yapılan veri değişikliklerinin (INSERT, UPDATE) VIEW'ın WHERE koşulunu karşılamasını zorunlu kılar. Koşulu sağlamayan işlemler reddedilir."
  },
  {
    "id": 4,
    "category": "ders8",
    "type": "code",
    "question": "Basit bir VIEW oluşturmak için eksik anahtar kelimeyi tamamlayın.",
    "snippet": "CREATE ___1___ aktif_musteriler AS\nSELECT musteri_id, ad, soyad\nFROM musteriler\nWHERE durum = 'aktif';",
    "blanks": [
      "VIEW"
    ],
    "explanation": "CREATE VIEW ifadesi, bir sanal tablo (görünüm) oluşturmak için kullanılır. VIEW anahtar kelimesi CREATE'den sonra gelir."
  },
  {
    "id": 5,
    "category": "ders8",
    "type": "code",
    "question": "VIEW tanımında SELECT sorgusunu bağlamak için eksik kelimeyi yazın.",
    "snippet": "CREATE VIEW urun_ozet ___1___\nSELECT urun_adi, fiyat\nFROM urunler;",
    "blanks": [
      "AS"
    ],
    "explanation": "AS anahtar kelimesi, VIEW adı ile SELECT sorgusu arasında köprü görevi görür. VIEW'ın hangi sorguyu temsil ettiğini belirtir."
  },
  {
    "id": 6,
    "category": "ders8",
    "type": "code",
    "question": "Mevcut bir VIEW'ı silmek için eksik komutu yazın.",
    "snippet": "___1___ VIEW eski_rapor;",
    "blanks": [
      "DROP"
    ],
    "explanation": "DROP VIEW ifadesi, veritabanından mevcut bir görünümü kalıcı olarak siler."
  },
  {
    "id": 7,
    "category": "ders9",
    "type": "choice",
    "question": "Aşağıdaki SQL kodunun çalıştırılması durumunda hesaplar tablosundaki verilerin son durumu ne olur? (İşlem öncesinde Ali'nin bakiyesi 3000'dir).",
    "snippet": "START TRANSACTION;\nUPDATE hesaplar SET bakiye = bakiye - 1000 WHERE musteri = 'Ali';\nROLLBACK;",
    "options": [
      "Ali'nin bakiyesi 2000 olur ve değişiklik kalıcı hale gelir.",
      "Ali'nin bakiyesi 3000 olarak kalır, değişiklik geri alınır.",
      "Kod hata verir çünkü ROLLBACK komutu START TRANSACTION ile kullanılamaz.",
      "Ali'nin bakiyesi 0 olur."
    ],
    "optionReasons": [
      "Yanlış. Değişiklik kalıcı hale gelmez çünkü COMMIT yerine ROLLBACK yapılmıştır.",
      "Doğru! ROLLBACK komutu işlem içindeki tüm değişiklikleri geri alır.",
      "Yanlış. ROLLBACK komutu TRANSACTION ile birlikte kullanılan temel bir komuttur.",
      "Yanlış. Bakiye 3000 olarak kalır."
    ],
    "answer": 1,
    "explanation": "ROLLBACK komutu, transaction (işlem) başladıktan sonra yapılan tüm değişiklikleri iptal ederek veritabanını işlem öncesi durumuna geri döndürür."
  },
  {
    "id": 8,
    "category": "ders9",
    "type": "choice",
    "question": "Veri tabanında transaction (işlem) kavramı en doğru şekilde nasıl tanımlanır?",
    "options": [
      "Bir veri tabanında tablo oluşturma komutudur.",
      "Veri tabanını yedekleme işlemidir.",
      "Bir veya daha fazla SQL ifadesinden oluşan ve bir bütün olarak çalışan SQL kod bloğudur.",
      "Veri tabanı sunucusunu başlatan komuttur."
    ],
    "optionReasons": [
      "Yanlış. Tablo oluşturma DDL komutudur.",
      "Yanlış. Yedekleme (backup) farklı bir yönetimsel işlemdir.",
      "Doğru! Transaction, birden fazla sorgunun tek bir mantıksal işlem birimi olarak bütün halinde çalışmasını sağlar.",
      "Yanlış. Sunucu başlatma işlemi veritabanı dışı bir sistem komutudur."
    ],
    "answer": 2,
    "explanation": "Transaction (İşlem-Faaliyet), bir veya daha fazla SQL sorgusundan meydana gelen, sistemin veri bütünlüğünü korumak adına tüm adımları tek bir adım gibi çalıştırdığı kod bloğudur."
  },
  {
    "id": 9,
    "category": "ders9",
    "type": "choice",
    "question": "MySQL veri tabanı yönetim sisteminde transaction (işlem) desteği almak için hangi depolama motoru (storage engine) tercih edilmelidir?",
    "options": [
      "MyISAM",
      "InnoDB",
      "Memory",
      "CSV"
    ],
    "optionReasons": [
      "Yanlış. MyISAM depolama motoru transaction yapısını desteklemez.",
      "Doğru! InnoDB, MySQL'de transaction desteği ve yabancı anahtar (FK) kısıtlamalarını tam olarak destekleyen motordur.",
      "Yanlış. Memory geçici veriler için kullanılır ve transaction desteği tam değildir.",
      "Yanlış. CSV metin tabanlı basit depolama yapar, transaction desteklemez."
    ],
    "answer": 1,
    "explanation": "MySQL'de transaction desteği için varsayılan ve önerilen motor InnoDB'dir. MyISAM depolama motorunun transaction desteği yoktur."
  },
  {
    "id": 10,
    "category": "ders9",
    "type": "choice",
    "question": "Aşağıdaki transaction bloğunda birinci UPDATE işlemi başarıyla çalışmış ancak ikinci UPDATE işleminde yabancı anahtar hatası oluşmuştur. Bu durumda veri tabanının davranışı ne olur?",
    "snippet": "START TRANSACTION;\nUPDATE hesaplar SET bakiye = bakiye - 500 WHERE musteri = 'Ali';\nUPDATE hesaplar SET bakiye = bakiye + 500 WHERE musteri = 'BilinmeyenMusteri'; -- (Hata Oluştu)\nCOMMIT;",
    "options": [
      "Ali'nin hesabı güncellenir, diğer müşteri güncellenmez.",
      "Hata nedeniyle veri bütünlüğü gereği tüm işlemler iptal edilir ve veriler işlem öncesi durumuna geri döner.",
      "Yalnızca hata veren satır atlanır, commit başarıyla tamamlanır.",
      "Veri tabanı kilitlenir (deadlock oluşur)."
    ],
    "optionReasons": [
      "Yanlış. Kısmi güncelleme transaction kurallarına aykırıdır.",
      "Doğru! Bir transaction içindeki SQL ifadelerinden biri bile hatalı olursa, o transactiondaki diğer işlemler de gerçekleştirilmez ve bütünlük sağlanır.",
      "Yanlış. Hatalı sorguya rağmen commit gerçekleşmez.",
      "Yanlış. Kilitlenme (deadlock) eşzamanlı kaynak yarışlarında olur, bu bir kısıt hatasıdır."
    ],
    "answer": 1,
    "explanation": "Bir transaction'daki işlemler ya hep ya hiç kuralına tabidir. 1 tanesi bile hata alırsa veri tabanı bütünlüğü korumak için değişiklikleri uygulamaz."
  },
  {
    "id": 11,
    "category": "ders9",
    "type": "choice",
    "question": "ACID özelliklerinden hangisi, bir transaction başarılı bir şekilde tamamlandığında (COMMIT edildiğinde) sistem çökse bile yapılan değişikliklerin kalıcı olacağını garanti eder?",
    "options": [
      "Atomicity (Bütünlük)",
      "Consistency (Tutarlılık)",
      "Isolation (İzolasyon)",
      "Durability (Süreklilik)"
    ],
    "optionReasons": [
      "Yanlış. Atomicity işlemin bölünemezliğini (ya hep ya hiç) ifade eder.",
      "Yanlış. Consistency veritabanının kurallara uygun kalmasını sağlar.",
      "Yanlış. Isolation işlemlerin paralellikte birbirini etkilememesidir.",
      "Doğru! Durability (Süreklilik), commit edilen işlemlerin kalıcı disk ortamına yazılmasını ve sistem çökmelerinde dahi kaybolmamasını garanti eder."
    ],
    "answer": 3,
    "explanation": "Durability (Süreklilik), işlemin başarıyla tamamlanması durumunda sonuçların kalıcı olduğunu ve elektrik kesintisi veya sistem çökmesi gibi durumlarda bile kaybolmayacağını garanti eder."
  },
  {
    "id": 12,
    "category": "ders9",
    "type": "choice",
    "question": "Transaction (İşlem) günlüklerinde yer alan ve bir işlem geri alındığında (ROLLBACK edildiğinde) eski veri değerlerini geri yüklemek için kullanılan log türü aşağıdakilerden hangisidir?",
    "options": [
      "Binary Log (Binlog)",
      "Redo Log",
      "Undo Log",
      "Error Log"
    ],
    "optionReasons": [
      "Yanlış. Binary Log replikasyon ve yedekleme için kullanılır.",
      "Yanlış. Redo Log disk üzerindeki yazma bütünlüğü ve çökme kurtarma için kullanılır.",
      "Doğru! Undo Log, transaction geri alındığında eski veri değerlerini yerine koymak için eski değerleri saklar.",
      "Yanlış. Error Log sistem hatalarını kaydeder."
    ],
    "answer": 2,
    "explanation": "Undo Log, bir transaction iptal edildiğinde (ROLLBACK) veya tutarlı okuma yapılması gerektiğinde verinin eski değerlerini saklamak için kullanılır."
  },
  {
    "id": 13,
    "category": "ders10",
    "type": "code",
    "question": "1 nolu müşterinin satın aldığı ürünlerin adını, fiyatını ve müşteri numarasını listeleyen sorguyu tamamlayın.",
    "snippet": "___1___ U.UrunAd, U.Fiyat, S.MusteriNo \nFROM satis ___2___ S\n___3___ JOIN urun AS U\n___4___ U.UrunNo = S.UrunNo\n___5___ S.MusteriNo = 1;",
    "blanks": [
      "SELECT",
      "AS",
      "INNER",
      "ON",
      "WHERE"
    ],
    "sql_file": "SQL 1 nolu müşterinin satın aldığı ürünlerin listelenmesi.sql",
    "explanation": "SELECT kolonları listeler. satis tablosuna S alias'ı verilir. urun tablosu U alias'ı ile INNER JOIN yapılarak ON kelimesiyle ilişkilendirilir. Müşteri filtresi WHERE ile uygulanır."
  },
  {
    "id": 14,
    "category": "ders10",
    "type": "code",
    "question": "1 nolu müşterinin satın aldığı ürünlerin toplam tutarını ve müşteri numarasını veren aggregate sorgusunu yazın.",
    "snippet": "SELECT ___1___(U.Fiyat * S.Adet), S.MusteriNo \nFROM satis ___2___ S\n___3___ JOIN urun AS U\n___4___ U.UrunNo = S.UrunNo\n___5___ S.MusteriNo = 1;",
    "blanks": [
      "SUM",
      "AS",
      "INNER",
      "ON",
      "WHERE"
    ],
    "sql_file": "SQL 1 nolu müşterinin satın aldığı ürünlerin toplam tutarı.sql",
    "explanation": "SUM fonksiyonu toplam tutarı (fiyat * adet) hesaplar. Tablolar INNER JOIN ile birleştirilir ve ON birleşme koşulu belirlenir."
  },
  {
    "id": 15,
    "category": "ders10",
    "type": "code",
    "question": "2 nolu kasiyerin içinde bulunduğumuz ayda yaptığı toplam satış tutarı sorgusunu tamamlayın.",
    "snippet": "SELECT ___1___(U.Fiyat * S.Adet) \nFROM satis AS S\nINNER ___2___ urun AS U\n___3___ U.UrunNo = S.UrunNo\n___4___ S.KasiyerNo = 2\nAND ___5___(S.Tarih) = MONTH(NOW());",
    "blanks": [
      "SUM",
      "JOIN",
      "ON",
      "WHERE",
      "MONTH"
    ],
    "sql_file": "SQL 2 nolu kasiyerin bu ay yaptığı toplam satış tutarı.sql",
    "explanation": "SUM fonksiyonu toplam tutarı hesaplar. Tablolar INNER JOIN ile bağlanır. MONTH() fonksiyonu tarihin ay bilgisini alıp NOW() (bugün) ile karşılaştırır."
  },
  {
    "id": 16,
    "category": "ders10",
    "type": "code",
    "question": "1 nolu müşterinin satın aldığı ürünlerin adını, fiyatını ve müşteri numarasını listeleyen sorguyu tamamlayın.",
    "snippet": "___1___ U.UrunAd, U.Fiyat, S.MusteriNo \n___2___ satis ___3___ S\n___4___ urun ___5___ U\n___6___ U.UrunNo = S.UrunNo\n___7___ S.MusteriNo = 1;",
    "blanks": [
      "SELECT",
      "FROM",
      "AS",
      "INNER JOIN",
      "AS",
      "ON",
      "WHERE"
    ],
    "sql_file": "SQL 1 nolu müşterinin satın aldığı ürünlerin listelenmesi.sql",
    "explanation": "SELECT kolonları listeler. satis tablosuna S alias'ı verilir. urun tablosu U alias'ı ile INNER JOIN yapılarak ON kelimesiyle ilişkilendirilir. Müşteri filtresi WHERE ile uygulanır."
  },
  {
    "id": 17,
    "category": "ders10",
    "type": "code",
    "question": "1 nolu müşterinin satın aldığı ürünlerin toplam tutarını ve müşteri numarasını veren aggregate sorgusunu yazın.",
    "snippet": "___1___ ___2___(U.Fiyat * S.Adet), S.MusteriNo \n___3___ satis ___4___ S\n___5___ urun ___6___ U\n___7___ U.UrunNo = S.UrunNo\n___8___ S.MusteriNo = 1;",
    "blanks": [
      "SELECT",
      "SUM",
      "FROM",
      "AS",
      "INNER JOIN",
      "AS",
      "ON",
      "WHERE"
    ],
    "sql_file": "SQL 1 nolu müşterinin satın aldığı ürünlerin toplam tutarı.sql",
    "explanation": "SUM fonksiyonu toplam tutarı (fiyat * adet) hesaplar. Tablolar INNER JOIN ile birleştirilir ve ON birleşme koşulu belirlenir."
  },
  {
    "id": 18,
    "category": "ders10",
    "type": "code",
    "question": "2 nolu kasiyerin içinde bulunduğumuz ayda yaptığı toplam satış tutarı sorgusunu tamamlayın.",
    "snippet": "___1___ ___2___(U.Fiyat * S.Adet) \n___3___ satis ___4___ S\n___5___ urun ___6___ U\n___7___ U.UrunNo = S.UrunNo\n___8___ S.KasiyerNo = 2\n___9___ ___10___(S.Tarih) = ___11___(___12___());",
    "blanks": [
      "SELECT",
      "SUM",
      "FROM",
      "AS",
      "INNER JOIN",
      "AS",
      "ON",
      "WHERE",
      "AND",
      "MONTH",
      "MONTH",
      "NOW"
    ],
    "sql_file": "SQL 2 nolu kasiyerin bu ay yaptığı toplam satış tutarı.sql",
    "explanation": "SUM fonksiyonu toplam tutarı hesaplar. Tablolar INNER JOIN ile bağlanır. MONTH() fonksiyonu tarihin ay bilgisini alıp NOW() (bugün) ile karşılaştırır."
  },
  {
    "id": 19,
    "category": "ders11",
    "type": "choice",
    "question": "MySQL'de kullanıcı tanımlı fonksiyonlar (UDF) ile ilgili aşağıdakilerden hangisi yanlıştır?",
    "options": [
      "Kullanıcı tanımlı fonksiyonlar CREATE FUNCTION komutuyla oluşturulur.",
      "Fonksiyonların sadece girdi (IN) parametreleri olabilir.",
      "Fonksiyonların gövdesinde saklı yordamlar (Stored Procedure) çağrılabilir.",
      "Fonksiyon tanımlamalarında tek bir değer dönülmesi (RETURN) zorunludur."
    ],
    "answer": 2,
    "explanation": "Slayt 21'e göre: Fonksiyonlar içerisinde saklı yordamlar (stored procedure) çalıştırılamaz."
  },
  {
    "id": 20,
    "category": "ders11",
    "type": "choice",
    "question": "Deterministik (DETERMINISTIC) fonksiyon kavramı aşağıdakilerden hangisini ifade eder?",
    "options": [
      "Aynı giriş parametreleri için her çağrıda farklı sonuçlar üreten fonksiyonlardır.",
      "Aynı giriş parametreleri için her zaman aynı sonucu döndüren fonksiyonlardır.",
      "Sadece INSERT işlemi gerçekleştiğinde otomatik olarak çalışan fonksiyonlardır.",
      "İçerisinde işlem (transaction) kontrol komutları bulunduran fonksiyonlardır."
    ],
    "answer": 1,
    "explanation": "Slayt 8'e göre: Deterministik bir fonksiyon, aynı giriş parametreleri için her zaman aynı sonucu döndürür."
  },
  {
    "id": 21,
    "category": "ders11",
    "type": "choice",
    "question": "MySQL'de fonksiyon tanımlanırken deterministik olup olmadığı belirtilmezse, varsayılan olarak hangisi kabul edilir?",
    "options": [
      "DETERMINISTIC",
      "NOT DETERMINISTIC (Nondeterministik)",
      "READS SQL DATA",
      "CONTAINS SQL"
    ],
    "answer": 1,
    "explanation": "Slayt 8'e göre: Eğer DETERMINISTIC veya NOT DETERMINISTIC ifadeleri belirtilmezse, MySQL varsayılan olarak fonksiyonu nondeterministik (NOT DETERMINISTIC) kabul eder."
  },
  {
    "id": 22,
    "category": "ders11",
    "type": "code",
    "question": "Dizgi (string) fonksiyonlarından; dizgideki karakter sayısını döndüren LENGTH() ve birden fazla dizgiyi birleştiren CONCAT() fonksiyonlarının kullanımını tamamlayın.",
    "snippet": "SELECT ___1___('Merhaba'), ___2___('Merhaba', ' Dünya');",
    "blanks": [
      "LENGTH",
      "CONCAT"
    ],
    "explanation": "LENGTH() karakter uzunluğunu bulur, CONCAT() ise dizgileri birleştirir."
  },
  {
    "id": 23,
    "category": "ders11",
    "type": "code",
    "question": "Matematiksel fonksiyonlardan; mutlak değeri döndüren ABS() ve sayıyı aşağı yuvarlayan FLOOR() fonksiyonlarının kullanımını tamamlayın.",
    "snippet": "SELECT ___1___(-42), ___2___(3.7);",
    "blanks": [
      "ABS",
      "FLOOR"
    ],
    "explanation": "ABS() mutlak değeri verir (çıktı 42 olur), FLOOR() ise aşağı yuvarlar (çıktı 3 olur)."
  },
  {
    "id": 24,
    "category": "ders11",
    "type": "code",
    "question": "Market veritabanında ürünlerin son kullanma tarihine kaç gün kaldığını hesaplayan 'SonKullanmaZamanHesapla' fonksiyonunun tanımındaki boşlukları tamamlayın.",
    "snippet": "CREATE FUNCTION SonKullanmaZamanHesapla (P_SonKullanmaTarih DATE) ___1___ int(11)\nBEGIN\n  DECLARE KalanZaman INT;\n  SET KalanZaman = ___2___(P_SonKullanmaTarih, ___3___());\n  ___4___ KalanZaman;\nEND",
    "blanks": [
      "RETURNS",
      "DATEDIFF",
      "NOW",
      "RETURN"
    ],
    "explanation": "Fonksiyon dönüş türü RETURNS ifadesiyle, tarih farkı DATEDIFF(tarih1, tarih2) ile, mevcut zaman NOW() ile ve değer döndürme RETURN ile yapılır."
  },
  {
    "id": 25,
    "category": "ders12",
    "type": "choice",
    "question": "MySQL'de saklı yordam çağrıldığında dışarıdan değer alan, bu değeri işlem sırasında yalnızca okuyan ve varsayılan (default) mod olan parametre tipi hangisidir?",
    "options": [
      "OUT",
      "IN",
      "INOUT",
      "RETURN"
    ],
    "answer": 1,
    "explanation": "Slayt 4'e göre: IN (Girdi) parametresi yordam çağrıldığında dışarıdan değer alır ve bu değer prosedür içinde yalnızca okunabilir. IN varsayılan parametre modudur."
  },
  {
    "id": 26,
    "category": "ders12",
    "type": "choice",
    "question": "Bir OUT (Çıktı) parametresi ile ilgili aşağıdakilerden hangisi doğrudur?",
    "options": [
      "Yordam çağrıldığında çağıran programın atadığı başlangıç değerine doğrudan erişebilir.",
      "Değeri yordam içinde değiştirilemez ve çağıran programa geri döndürülemez.",
      "Yordam içinde işlenen bir değeri çağıran programa çıktı veya görüntüleme amacıyla döndürür.",
      "Hem girdi hem çıktı olarak davranır ve prosedür başlangıcında değer taşır."
    ],
    "answer": 2,
    "explanation": "Slayt 4 ve 7'ye göre: OUT parametresi yordam içinde işlenen bir değeri dışarıya döndürür. Prosedür başladığında OUT parametresinin başlangıç değerine erişemez."
  },
  {
    "id": 27,
    "category": "ders12",
    "type": "choice",
    "question": "Hem girdi (giriş) hem de çıktı (çıkış) parametresi olarak davranan, çağrıldığında başlangıç değeri alıp işlenmiş değeri aynı parametre olarak geri döndüren mod hangisidir?",
    "options": [
      "IN",
      "OUT",
      "INOUT",
      "PARAM"
    ],
    "answer": 2,
    "explanation": "Slayt 4 ve 11'e göre: INOUT parametresi hem giriş hem çıkış için kullanılır. Çağrıldığında bir başlangıç değeri alır ve işlenmiş değeri aynı parametreyle geri döndürür."
  },
  {
    "id": 28,
    "category": "ders12",
    "type": "code",
    "question": "Girdi olarak 'p_Girdi' ve çıktı olarak 'p_Cikti' tamsayı parametreleri alan saklı yordam parametre tanımını tamamlayın.",
    "snippet": "CREATE PROCEDURE GirdiCiktiOrnek (___1___ p_Girdi INT, ___2___ p_Cikti INT)",
    "blanks": [
      "IN",
      "OUT"
    ],
    "explanation": "Girdi parametresi için IN, çıktı parametresi için OUT anahtar kelimeleri kullanılır."
  },
  {
    "id": 29,
    "category": "ders12",
    "type": "code",
    "question": "Girdi parametresini 2 ile çarpıp 'SONUC' değişkenine alan ve bu değeri çıktı parametresine ('p_Cikti') atayan yordam gövdesini tamamlayın.",
    "snippet": "BEGIN\n  DECLARE SONUC INTEGER;\n  SET SONUC = p_Girdi * 2;\n  ___1___ p_Cikti = ___2___;\nEND",
    "blanks": [
      "SET",
      "SONUC"
    ],
    "explanation": "MySQL saklı yordamlarında bir değişkene değer atamak için SET komutu kullanılır."
  },
  {
    "id": 30,
    "category": "ders12",
    "type": "code",
    "question": "Çıktı parametresi içeren 'GirdiCiktiOrnek' yordamını '5' girdi değeriyle çağıran ve dönen değeri '@SonucDegiskeni' adlı değişkende saklayıp yazdıran komutları tamamlayın.",
    "snippet": "___1___ GirdiCiktiOrnek(5, ___2___);\nSELECT ___3___ AS \"Yordam Çıktısı\";",
    "blanks": [
      "CALL",
      "@SonucDegiskeni",
      "@SonucDegiskeni"
    ],
    "explanation": "Saklı yordamlar CALL ile çağrılır. Çıktı değişkeni @ işaretiyle tanımlanır ve SELECT ile ekrana yazdırılır."
  }
];

const sqlFileList = [
  '10_Hafta_eticaret_siparis_musteri_puan_tabloları.sql',
  '1_Veritabani_Tablo_Olusturma.sql',
  '2_Urun Tablosu Oluşturma.sql',
  'SQL 1 nolu müşterinin satın aldığı ürünlerin listelenmesi.sql',
  'SQL 1 nolu müşterinin satın aldığı ürünlerin toplam tutarı.sql',
  'SQL 2 nolu kasiyerin bu ay yaptığı toplam satış tutarı.sql',
  'SQL 7. aydan önce satılan ürünlerin listelenmesi.sql',
  'SQL Alt Sorgu ALL Kullanımı.sql',
  'SQL Alt Sorgu ANY Kullanımı.sql',
  'SQL Alt Sorgu AVG Kullanma.sql',
  'SQL Alt Sorgu GROUP BY ve HAVING Kullanımı.sql',
  'SQL Alt Sorgu GROUP BY ve HAVING Kullanımı_2.sql',
  'SQL Alt Sorgu IN Kullanımı.sql',
  'SQL Alt Sorgu Kayıt Ekleme.sql',
  'SQL Alt Sorgu Kayıt Güncelleme.sql',
  'SQL Alt Sorgu Kayıt Silme.sql',
  'SQL Alışveriş yapmayan müşterilerin listelenmesi.sql',
  'SQL Belirli Sayıda urun Listeleme Sayfalama.sql',
  'SQL Birden Fazla Tablo Üzerinde Sorgulamalar_1.sql',
  'SQL Birden Fazla Tablo Üzerinde Sorgulamalar_2.sql',
  'SQL Bu ay yapılan toplam satış tutarı.sql',
  'SQL Bugün hangi ürünlerin satıldığının listelenmesi.sql',
  'SQL Bugün kaç adet ürün satıldığını bulan sorgu.sql',
  'SQL Hangi Markadan kaç adet ürün olduğunu bulan sorgu.sql',
  'SQL Her bir kasiyerin bu ay yaptığı satış tutarının bulunması.sql',
  'SQL Her bir şubenin bugün yaptığı satış tutarının bulunması.sql',
  'SQL Her kategoride kaç çeşit ürün olduğunun bulunması.sql',
  'SQL Her yıl her ay toplam satış tutarını bulunması.sql',
  'SQL Icecek Kategorisindeki Ürünlerde 20 indirim yaparak listeleme.sql',
  'SQL Kaetgori Marka Urun Tablolarının Oluşturulması.sql',
  'SQL Kategori Ortalama Fiyat.sql',
  'SQL Kategorite Göre Listeleme.sql',
  'SQL Markaya Göre Listeleme.sql',
  'SQL Meltem isimli kasiyerin bu ay yaptığı toplam satış tutarı.sql',
  'SQL Ortalama Fiyat Listeleme.sql',
  'SQL Outer Join Sorguları.sql',
  'SQL Satış Yapmayan Kasiyerlerin Listelenmesi.sql',
  'SQL Satış Yapmayan Şubelerin Listelenmesi.sql',
  'SQL Satışı Yapılmayan Ürünlerin Listelenmesi.sql',
  'SQL Son Kullanma Tarihine Kac Gun var.sql',
  'SQL Urun Guncelleme.sql',
  'SQL WHERE 1.sql',
  'SQL WHERE Fiyat Kıyaslama.sql',
  'SQL WHERE Son Kullanma Tarih İndirim.sql',
  'SQL WHERE Son Kullanma Tarih.sql',
  'SQL Yabancı Anahtar Kategori.sql',
  'SQL Yabancı Anahtar Marka.sql',
  'SQL Ürünleri yuzde 10 indirimli listeleme.sql',
  'SQL Ürünü olmayan kategorilerin listelenmesi.sql',
  'SQL Ürünü olmayan markaların listelenmesi.sql',
  'SQL-Ödev3 Cevaplar 1-3-4-5.sql',
  'SQL-Ödev3 Cevaplar 10.sql',
  'SQL-Ödev3 Cevaplar 11.sql',
  'SQL-Ödev3 Cevaplar 12sql.sql',
  'SQL-Ödev3 Cevaplar 13.sql',
  'SQL-Ödev3 Cevaplar 15.sql',
  'SQL-Ödev3 Cevaplar 16.sql',
  'SQL-Ödev3 Cevaplar 17.sql',
  'SQL-Ödev3 Cevaplar 6.sql',
  'SQL-Ödev3 Cevaplar 7.sql',
  'SQL-Ödev3 Cevaplar 8.sql',
  'SQL-Ödev3 Cevaplar 9.sql',
  'SQL_Furkan Kac Gunluk.sql',
  'SQL_Son Kullanma Tarihine 15 günden az süre kalan ürünlerde 50 indirimli fiyat listeleme.sql',
  'Uygulama Soru-1.sql',
  'Uygulama Soru-10.sql',
  'Uygulama Soru-11.sql',
  'Uygulama Soru-12.sql',
  'Uygulama Soru-13.sql',
  'Uygulama Soru-14.sql',
  'Uygulama Soru-15.sql',
  'Uygulama Soru-16.sql',
  'Uygulama Soru-2.sql',
  'Uygulama Soru-3.sql',
  'Uygulama Soru-4.sql',
  'Uygulama Soru-5.sql',
  'Uygulama Soru-6.sql',
  'Uygulama Soru-7.sql',
  'Uygulama Soru-8.sql',
  'Uygulama Soru-9.sql',
  'market.sql',
  'market_sadece_veri.sql',
  'market_sadece_veri_ve_yapi.sql',
  'market_satis_veriler.sql',
  'market_u_k_m.sql'
];
