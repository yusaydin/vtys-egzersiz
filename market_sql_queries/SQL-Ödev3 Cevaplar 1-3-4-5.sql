SELECT DISTINCT(Sehir) FROM musteri WHERE Sehir NOT LIKE 'a%';
UPDATE musteri SET Ad='Petek' WHERE Ad='Sinan';
UPDATE musteri SET Ad='Petek' 
WHERE MusteriNo=(SELECT MusteriNo FROM musteri WHERE Ad='Sinan');
SELECT * FROM musteri WHERE Telefon='';
SELECT SUM(U.Fiyat) FROM urun AS U 
INNER JOIN marka AS M
ON M.MarkaNo = U.MarkaNo
INNER JOIN kategori AS K
ON K.KategoriNo = U.KategoriNo
WHERE M.MarkaAd<>'HP' AND K.KategoriAd = 'Laptop'