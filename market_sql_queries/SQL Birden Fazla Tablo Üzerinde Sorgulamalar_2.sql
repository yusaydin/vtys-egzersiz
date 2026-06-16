/*SELECT UrunAd, KategoriAd 
FROM urun AS u INNER JOIN kategori AS k
ON k.KategoriNo = u.KategoriNo
-- WHERE k.KategoriNo = 4
WHERE k.KategoriAd IN('Baharat')

SELECT UrunAd, KategoriAd 
FROM urun AS u, kategori AS k
WHERE k.KategoriNo = u.KategoriNo AND k.KategoriAd IN('Baharat')*/

