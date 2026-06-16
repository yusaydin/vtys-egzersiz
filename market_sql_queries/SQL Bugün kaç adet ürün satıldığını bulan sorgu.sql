-- Bugün kaç adet ürün satıldığını bulan sorgu
SELECT COUNT(*) AS "Bugün Satılan Ürün Adedi" FROM satis AS S 
WHERE DAY(Tarih) = DAY(NOW());