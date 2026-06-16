SELECT * FROM market.urun 
-- WHERE Kategori = "Yiyecek" OR Kategori = "İçecek";
WHERE Kategori IN("Yiyecek","İçecek")
AND Marka IN("OFÇAY","PINAR")