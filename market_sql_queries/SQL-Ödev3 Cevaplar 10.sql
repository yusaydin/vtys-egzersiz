SELECT K.KategoriAd,SUM(U.Fiyat) FROM urun AS U
INNER JOIN kategori AS K
ON K.KategoriNo = U.KategoriNo
GROUP BY K.KategoriAd
HAVING 5000<SUM(U.Fiyat)


