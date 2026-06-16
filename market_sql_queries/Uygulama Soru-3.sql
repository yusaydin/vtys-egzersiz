-- 3-) Her bir müşterinin satın almış oldukları ürün adedini listeleyiniz. 
-- Yiğit Açıkgöz cevapladı
SELECT M.MusteriNo,SUM(S.Adet) 'Adet' FROM satis AS S
INNER JOIN urun AS U
ON U.UrunNo = S.UrunNo
INNER JOIN musteri AS M
ON M.MusteriNo = S.MusteriNo
GROUP BY M.MusteriNo;

