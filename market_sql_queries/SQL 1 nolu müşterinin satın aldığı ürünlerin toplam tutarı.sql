-- 1 nolu müşterilerin satın aldığı ürünlerin toplam tutarı
SELECT SUM(U.Fiyat*S.Adet),S.MusteriNo FROM satis AS S
INNER JOIN urun AS U
ON U.UrunNo = S.UrunNo
WHERE MusteriNo=1

