SELECT Fiyat FROM urun AS U
INNER JOIN kategori AS K
ON K.KategoriNo = U.KategoriNo
WHERE K.KategoriAd = 'Şarküteri'
LIMIT 0,1


