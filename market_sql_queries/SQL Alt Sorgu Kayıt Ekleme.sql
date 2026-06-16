-- Alt Sorgu kullanılarak Kayıt Ekleme
INSERT INTO `market`.`urun`
(`UrunAd`,`MarkaNo`,`KategoriNo`,`Fiyat`,`SonKullanmaTarih`,`Ozellik`)
VALUES
('Vestel Buzdolabı',(SELECT MarkaNo FROM marka WHERE MarkaAd='Boron'),
(SELECT KategoriNo FROM kategori WHERE KategoriAd='Elektronik'),4800,'2023-12-01',
'Nofrost buzdolabı iç hacmi 800 litre buzluk hacmi 200 litre');
