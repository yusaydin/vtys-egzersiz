SELECT MONTH(S.Tarih),COUNT(*) FROM urun AS U
INNER JOIN satis AS S
ON S.UrunNo = U.UrunNo
INNER JOIN kategori AS K
ON K.KategoriNo = U.KategoriNo
WHERE K.KategoriAd = 'Peynir'
GROUP BY MONTH(S.Tarih) 

