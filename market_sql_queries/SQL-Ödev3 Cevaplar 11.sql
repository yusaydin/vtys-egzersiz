SELECT M.Sehir,COUNT(M.Sehir) FROM musteri AS M
GROUP BY Sehir
HAVING 2<COUNT(M.Sehir)


