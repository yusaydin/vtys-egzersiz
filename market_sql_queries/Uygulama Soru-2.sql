-- 2-) Müşterilerin hangi kategorilerden alış veriş yaptığını listeleyen sorguyu yazınız.
--  Muhammed Diri Cevapladı
SELECT m.MusteriNo,m.Ad,u.UrunAd,k.KategoriNo,k.KategoriAd FROM market.musteri as m
inner join market.satis as s
on m.MusteriNo = s.MusteriNo
inner join market.urun as u
on s.UrunNo = u.UrunNo
inner join market.kategori as k
on u.KategoriNo = k.KategoriNo;