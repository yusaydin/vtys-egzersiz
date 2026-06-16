-- 10-) Her bir kasiyerin toplam kaç liralık satış yaptığını bulunuz.
-- 5 dakika
SELECT k.Ad AS 'Kasiyer Adı', SUM(u.Fiyat*s.Adet) FROM  satis AS s 
INNER JOIN kasiyer AS k 
ON s.KasiyerNo = k.KasiyerNo
INNER JOIN urun AS u
ON s.UrunNo = u.UrunNo
GROUP BY k.Ad
ORDER BY u.UrunNo;
/*
SELECT SUM(S.Adet*U.Fiyat),K.kasiyerNo,K.ad
FROM satis AS S
INNER JOIN urun AS U
ON S.UrunNo = U.UrunNo
INNER JOIN kasiyer AS K
ON S.KasiyerNo = K.KasiyerNo
WHERE MONTH(S.Tarih)= MONTH(NOW())-1
GROUP BY k.kasiyerNO */