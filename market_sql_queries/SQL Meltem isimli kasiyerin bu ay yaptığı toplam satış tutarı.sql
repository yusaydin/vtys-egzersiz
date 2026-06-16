-- Nevbahar isimli kasiyerin bu ay yaptığı toplam satış tutarı
SELECT SUM(U.Fiyat*S.Adet) FROM satis AS S
INNER JOIN urun AS U
ON U.UrunNo = S.UrunNo
INNER JOIN kasiyer AS K
ON K.KasiyerNo = S.KasiyerNo
WHERE Ad = 'Nevbahar'
AND MONTH(Tarih) = MONTH(NOW())