-- 1 nolu müşterilerin satın aldığı ürünlerin listelenmesi
SELECT U.UrunAd,U.Fiyat,S.MusteriNo FROM satis AS S
INNER JOIN urun AS U
ON U.UrunNo = S.UrunNo
WHERE MusteriNo=1