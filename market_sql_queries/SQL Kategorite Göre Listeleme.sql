SELECT UrunAd AS "Ürün Adı",
Fiyat AS "Fiyatı",
Kategori AS "Kategorisi"
FROM urun
-- WHERE Kategori="İçecek" OR Kategori="Yiyecek"
WHERE Kategori IN("İçecek","Yiyecek")
ORDER BY Kategori