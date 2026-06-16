SELECT UrunAd AS "Ürün Adı",
Fiyat AS "Fiyatı",
Kategori AS "Kategorisi",
Fiyat AS "Normal Fiyat",
Fiyat*0.8 AS "%20 İndirimli Fiyat",
Fiyat*0.2 AS "Ürün Başına İndirim Tutarı"
FROM urun
-- WHERE Kategori="İçecek"
WHERE Kategori IN("İçecek")
ORDER BY Kategori