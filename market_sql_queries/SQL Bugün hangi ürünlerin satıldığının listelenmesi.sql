-- Bugün hangi ürünlerin satıldığını bulan sorgu
SELECT U.UrunNo AS 'Ürün No', U.UrunAd AS "Ürün Adı",
U.Fiyat AS 'Fiyat', S.Adet AS "Adet", (U.Fiyat*S.Adet) AS 'Tutar' 
FROM satis AS S
INNER JOIN urun AS U
ON U.UrunNo = S.UrunNo
 WHERE DAY(Tarih) = DAY(NOW());
 
 
 