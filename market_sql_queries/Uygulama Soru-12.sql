-- 10-) 100 tl üzerinde şatış yapan her bir kasiyerin bilgilerini listeleyiniz.
-- 5 dakika
SELECT k.Ad, SUM(u.Fiyat*s.Adet) FROM  satis AS s 
INNER JOIN kasiyer AS k 
ON s.KasiyerNo = k.KasiyerNo
INNER JOIN urun AS u
ON s.UrunNo =u.UrunN
GROUP BY k.Ad
HAVING 100<=SUM(u.Fiyat*s.Adet) 
ORDER BY u.UrunNo;
