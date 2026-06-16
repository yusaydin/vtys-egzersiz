-- 2019 yılı kasım ve mart ayındaki satışları silen sorgu
DELETE FROM satis WHERE Tarih IN (
SELECT s.Tarih FROM market.satis AS S 
WHERE YEAR(s.Tarih) = 2021 AND MONTH(s.Tarih) IN (3,11)
ORDER BY s.Tarih DESC)