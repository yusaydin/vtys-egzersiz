-- 7-) Alışveriş yapmayan müşterileri listeleyiniz.
-- 5 dakika
SELECT m.* FROM market.musteri AS m 
LEFT OUTER JOIN market.satis AS s
ON m.MusteriNo = s.MusteriNo
WHERE s.SatisNo IS NULL
