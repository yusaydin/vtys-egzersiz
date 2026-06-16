SELECT AVG(Fiyat) FROM urun AS U
INNER JOIN kategori AS K
ON K.KategoriNo = U.KategoriNo
WHERE K.KategoriAd = 'Elektronik'
-- WHERE K.KategoriAd LIKE '%Televizyon%'



