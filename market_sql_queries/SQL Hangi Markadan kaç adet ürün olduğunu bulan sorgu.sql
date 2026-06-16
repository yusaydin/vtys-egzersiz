-- Hangi markadan kaç adet ürün olduğunu bulan sorgu
SELECT COUNT(U.MarkaNo) AS "Adet", M.MarkaAd AS "Marka Ad"
FROM urun AS U
INNER JOIN marka AS M
ON M.MarkaNo = U.MarkaNo
GROUP BY M.MarkaNo
HAVING 1<COUNT(U.MarkaNo)  
