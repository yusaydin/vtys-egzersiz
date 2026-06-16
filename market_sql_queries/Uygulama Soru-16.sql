-- 16-) Her bir şubenin toplam kaç liralık satış yaptığını bulunuz.
-- 5 dakika
SELECT su.Ad AS 'Şube Adı', SUM(u.Fiyat*s.Adet) AS "Toplam Satış Tutarı" FROM  satis AS s 
INNER JOIN sube AS su 
ON s.SubeNo = su.SubeNo
INNER JOIN urun AS u
ON s.UrunNo = u.UrunNo
GROUP BY su.Ad
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