CREATE TABLE kategori (
  KategoriNo int(11) NOT NULL,
  KategoriAd varchar(45) COLLATE utf8_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

INSERT INTO kategori (KategoriNo, KategoriAd) VALUES
(1, 'Elektronik'),
(2, 'Şarküteri'),
(3, 'Temizlik'),
(4, 'Yiyecek'),
(5, 'İçecek'),
(6, 'Unlu Mamüller'),
(7, 'Züccaciye'),
(8, 'Giyim'),
(9, 'Anne-Bebek');


CREATE TABLE marka (
  MarkaNo int(11) NOT NULL,
  MarkaAd varchar(45) COLLATE utf8_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;


INSERT INTO marka (MarkaNo, MarkaAd) VALUES
(1, 'Ülker'),
(2, 'Eti'),
(3, 'Doğuş Çay'),
(4, 'Fruko'),
(5, 'İçim'),
(6, 'Marmarabirlik'),
(7, 'Sofaş'),
(8, 'Pınar'),
(9, 'Boron'),
(10, 'Torku'),
(11, 'Yumoş'),
(12, 'Ofçay'),
(13, 'Doğadan'),
(14, 'Vestel'),
(15, 'Zafer'),
(16, 'Fanta'),
(17, 'Kartal'),
(18, 'Şahin'),
(19, 'Logitech'),
(20, 'Doğuş'),
(21, 'Casper');


CREATE TABLE urun (
  UrunNo int(11) NOT NULL,
  UrunAd varchar(45) COLLATE utf8_unicode_ci NOT NULL,
  MarkaNo int(11) NOT NULL,
  KategoriNo int(11) NOT NULL,
  Fiyat float NOT NULL,
  SonKullanmaTarih date NOT NULL,
  Ozellik text COLLATE utf8_unicode_ci DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;


INSERT INTO urun (UrunNo, UrunAd, MarkaNo, KategoriNo, Fiyat, SonKullanmaTarih, Ozellik) VALUES
(1, 'TORKU 400754 GOFRET FINDIKLI', 10, 4, 1.05, '2020-11-10', '40 GR, FINDIKLI'),
(2, 'YUMOS UZMAN 1200ML BEYAZ KORUMA', 11, 3, 20, '2021-11-09', '1200ML'),
(3, 'BORON MATİK', 9, 3, 23, '2023-11-09', '4 KG'),
(4, 'PINAR TON BALIK', 8, 4, 19.95, '2019-02-20', '80GR, 3\'lü Paket'),
(5, 'OFÇAY TİRYAKİ', 12, 5, 25.99, '2020-11-14', '1000 GR'),
(6, 'SOFAŞ TAM YAĞLI PEYNİR', 7, 2, 22.99, '2021-05-10', '1000 GR'),
(7, 'MARMARABİRLİK ALACA ZEYTİN', 6, 2, 25.99, '2020-11-16', '1000 GR'),
(8, 'İÇİM AYRAN', 5, 5, 5.5, '2021-03-05', '1000 ML'),
(9, 'Çikolatalı Gofret', 1, 4, 2, '2020-11-16', '60 gr gofret'),
(10, 'Biskrem', 1, 4, 4, '2022-11-16', '120 gr çikolatalı bikivü'),
(11, 'Ülker Napoliten', 1, 4, 2.5, '2021-10-01', '33 gr gofret'),
(12, 'Ülker Çikolata Fıstıklı Kare ', 1, 4, 6.75, '2021-01-01', '33 gr gofret'),
(13, 'Ülker Bebe Sütlü Bisküvi Çikolata', 1, 4, 12.75, '2021-12-12', '75 gr biskivü'),
(14, 'Fruko Cool Lime Limon-Misket Limon Aromalı Ga', 4, 5, 2.85, '2021-11-16', '90 ml gazoz'),
(15, 'Doğuş Filiz Çay 1 KG', 20, 5, 35, '2021-11-10', '1 KG Çay'),
(16, 'Doğadan Büyülü Kutu Masala Chai 70 G ', 13, 5, 22.95, '2022-11-16', '120 gr paket çay'),
(17, '102 Ekran Akıllı TV', 14, 1, 3500, '2021-06-10', 'Açma kapama özelliği var. :)'),
(18, 'Boron Temizlik Detarjanı 1kg', 9, 3, 18, '2022-12-01', '1 kg çok amaçlı temizliyici detarjan'),
(19, 'Vestel Bilgisayar', 14, 1, 3200, '2023-12-01', 'Laptop bilgisayar, 15.4 inç ekran 2.1 kg'),
(20, 'Vestel Buzdolabı', 14, 1, 4800, '2023-12-01', 'Nofrost buzdolabı iç hacmi 800 litre buzluk hacmi 200 litre'),
(21, 'Zafer 2.5 Litre Gazoz', 15, 5, 5, '2021-12-10', '2500 mililitre zafer gazoz'),
(22, 'Fanta 2.5 Litre Gazoz', 16, 5, 5, '2021-12-10', '2500 mililitre fanta gazoz'),
(23, 'Fanta 1 Litre Gazoz', 16, 5, 3.5, '2021-12-10', '1000 mililitre fanta gazoz'),
(24, '700 gram Mende Ekmek', 17, 6, 6.5, '2021-06-10', '700 gram meşhur Uşak Mende Köyü ekmeği'),
(25, '1000 gram Mende Ekmek', 18, 6, 6.5, '2021-06-10', '1000 gram meşhur Uşak Mende Köyü ekmeği'),
(26, 'F Klavye', 19, 1, 100, '2025-10-10', 'F multimedya klavye');

--
-- Dökümü yapılmış tablolar için indeksler
--

--
-- Tablo için indeksler kategori
--
ALTER TABLE kategori
  ADD PRIMARY KEY (KategoriNo);

--
-- Tablo için indeksler marka
--
ALTER TABLE marka
  ADD PRIMARY KEY (MarkaNo);

--
-- Tablo için indeksler urun
--
ALTER TABLE urun
  ADD PRIMARY KEY (UrunNo),
  ADD KEY fk_kategori (KategoriNo),
  ADD KEY fk_marka (MarkaNo),
  ADD KEY i_ozellik (Ozellik(1024));

--
-- Dökümü yapılmış tablolar için AUTO_INCREMENT değeri
--

--
-- Tablo için AUTO_INCREMENT değeri kategori
--
ALTER TABLE kategori
  MODIFY KategoriNo int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- Tablo için AUTO_INCREMENT değeri marka
--
ALTER TABLE marka
  MODIFY MarkaNo int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=22;

--
-- Tablo için AUTO_INCREMENT değeri urun
--
ALTER TABLE urun
  MODIFY UrunNo int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=29;

--
-- Dökümü yapılmış tablolar için kısıtlamalar
--

--
-- Tablo kısıtlamaları urun
--
ALTER TABLE urun
  ADD CONSTRAINT fk_kategori FOREIGN KEY (KategoriNo) REFERENCES kategori (KategoriNo),
  ADD CONSTRAINT fk_marka FOREIGN KEY (MarkaNo) REFERENCES marka (MarkaNo);
COMMIT;

