SELECT UrunAd AS "Ürün Adı",
Fiyat AS "Fiyatı",
Marka AS "Markası"
FROM urun
-- WHERE Kategori="İçecek" OR Kategori="Yiyecek"
WHERE Marka IN("Ülker")
ORDER BY Kategori