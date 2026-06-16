-- 7-) Satış yapmayan kasiyerleri listeleyiniz.
-- 5 dakika
SELECT ka.* FROM market.kasiyer AS ka 
LEFT OUTER JOIN market.satis AS s
ON ka.KasiyerNo = s.KasiyerNo
WHERE s.SatisNo IS NULL
