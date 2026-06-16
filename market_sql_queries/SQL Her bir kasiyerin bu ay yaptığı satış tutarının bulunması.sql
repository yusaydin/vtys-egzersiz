-- Her bir kasiyerin bu ay yapıtığı satış tutarının bulunması
SELECT K.Ad, S.KasiyerNo,SUM(S.Adet*U.Fiyat) FROM satis AS S
INNER JOIN urun AS U
ON U.UrunNo = S.UrunNo
INNER JOIN kasiyer AS K
ON K.KasiyerNo = S.KasiyerNo
WHERE MONTH(NOW()) = MONTH(S.Tarih) 
AND YEAR(NOW()) = YEAR(S.Tarih)
GROUP BY S.KasiyerNo

