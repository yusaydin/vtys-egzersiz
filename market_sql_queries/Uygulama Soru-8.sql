-- 8-) Alışveriş yapmayan müşterileri listeleyiniz.
-- 5 dakika
SELECT m.* FROM market.satis AS s RIGHT OUTER JOIN market.musteri AS m
ON m.MusteriNo = s.MusteriNo
WHERE s.SatisNo IS NULL
