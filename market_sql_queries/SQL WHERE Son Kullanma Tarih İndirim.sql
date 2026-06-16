-- Son Kullanma Tarihine 1 hafta kalan ürünleri % 50 indirimli fiyatla listele
SELECT UrunAd,Marka,Kategori,Fiyat, 
Fiyat*0.5 AS "İndirimli Fiyat",
DATEDIFF(SonKullanmaTarih,NOW()), SonKullanmaTarih 
FROM market.urun 
WHERE DATEDIFF(SonKullanmaTarih,NOW()) BETWEEN  1 AND 7