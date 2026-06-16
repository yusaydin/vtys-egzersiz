-- phpMyAdmin SQL Dump
-- version 5.0.4
-- https://www.phpmyadmin.net/
--
-- Anamakine: 127.0.0.1
-- Üretim Zamanı: 28 Ara 2020, 11:53:41
-- Sunucu sürümü: 10.4.16-MariaDB
-- PHP Sürümü: 7.4.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Veritabanı: `market`
--

-- --------------------------------------------------------

--
-- Tablo için tablo yapısı `kasiyer`
--

CREATE TABLE `kasiyer` (
  `KasiyerNo` int(11) NOT NULL,
  `Ad` varchar(45) COLLATE utf8_unicode_ci NOT NULL,
  `Soyad` varchar(45) COLLATE utf8_unicode_ci NOT NULL,
  `Telefon` varchar(11) COLLATE utf8_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Tablo döküm verisi `kasiyer`
--

INSERT INTO `kasiyer` (`KasiyerNo`, `Ad`, `Soyad`, `Telefon`) VALUES
(1, 'Hasan', 'Kocabaş', '5067789900'),
(2, 'Meltem', 'KocaTürk', '5445544332'),
(3, 'Burcu', 'Aslan', '5337710011');

-- --------------------------------------------------------

--
-- Tablo için tablo yapısı `kategori`
--

CREATE TABLE `kategori` (
  `KategoriNo` int(11) NOT NULL,
  `KategoriAd` varchar(45) COLLATE utf8_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Tablo döküm verisi `kategori`
--

INSERT INTO `kategori` (`KategoriNo`, `KategoriAd`) VALUES
(1, 'Elektronik'),
(2, 'Şarküteri'),
(3, 'Temizlik'),
(4, 'Yiyecek'),
(5, 'İçecek');

-- --------------------------------------------------------

--
-- Tablo için tablo yapısı `marka`
--

CREATE TABLE `marka` (
  `MarkaNo` int(11) NOT NULL,
  `MarkaAd` varchar(45) COLLATE utf8_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Tablo döküm verisi `marka`
--

INSERT INTO `marka` (`MarkaNo`, `MarkaAd`) VALUES
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
(14, 'Vestel');

-- --------------------------------------------------------

--
-- Tablo için tablo yapısı `musteri`
--

CREATE TABLE `musteri` (
  `MusteriNo` int(11) NOT NULL,
  `Ad` varchar(45) COLLATE utf8_unicode_ci NOT NULL,
  `Soyad` varchar(45) COLLATE utf8_unicode_ci NOT NULL,
  `Eposta` varchar(45) COLLATE utf8_unicode_ci NOT NULL,
  `Adres` text COLLATE utf8_unicode_ci DEFAULT NULL,
  `Sehir` varchar(45) COLLATE utf8_unicode_ci DEFAULT NULL,
  `Telefon` varchar(11) COLLATE utf8_unicode_ci DEFAULT NULL,
  `DogumTarih` date DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Tablo döküm verisi `musteri`
--

INSERT INTO `musteri` (`MusteriNo`, `Ad`, `Soyad`, `Eposta`, `Adres`, `Sehir`, `Telefon`, `DogumTarih`) VALUES
(1, 'Ahmet', 'Yılmazer', 'ayilmazer@gmail.com', 'Cumhuriyet Mah. 1. Cumali Sokak. No:2', 'Uşak', '5056338866', '1985-09-07'),
(2, 'Mehmet', 'Büyük', 'mbuyuk@gmail.com', 'Devlet Mah. 1. Kenan Sokak. No:2', 'Uşak', '5056554433', '1980-07-07');

-- --------------------------------------------------------

--
-- Tablo için tablo yapısı `satis`
--

CREATE TABLE `satis` (
  `SatisNo` int(11) NOT NULL,
  `UrunNo` int(11) NOT NULL,
  `MusteriNo` int(11) DEFAULT NULL,
  `KasiyerNo` int(11) NOT NULL,
  `SubeNo` int(11) NOT NULL,
  `Tarih` datetime DEFAULT NULL,
  `Adet` tinyint(3) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Tablo döküm verisi `satis`
--

INSERT INTO `satis` (`SatisNo`, `UrunNo`, `MusteriNo`, `KasiyerNo`, `SubeNo`, `Tarih`, `Adet`) VALUES
(1, 2, 2, 1, 1, '2020-11-30 14:50:12', 1),
(2, 3, 1, 3, 1, '2020-10-11 00:00:00', 2),
(3, 4, 1, 1, 1, '2020-11-30 14:50:12', 3),
(4, 5, 2, 2, 1, '2020-11-30 14:50:12', 2),
(5, 11, 1, 1, 2, '2020-11-21 00:00:00', 5),
(6, 8, 1, 2, 2, '2020-11-30 14:50:12', 2),
(7, 16, 1, 2, 2, '2020-08-10 00:00:00', 4);

-- --------------------------------------------------------

--
-- Tablo için tablo yapısı `sube`
--

CREATE TABLE `sube` (
  `SubeNo` int(11) NOT NULL,
  `Ad` varchar(45) COLLATE utf8_unicode_ci NOT NULL,
  `Adres` varchar(45) COLLATE utf8_unicode_ci NOT NULL,
  `Telefon` varchar(11) COLLATE utf8_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Tablo döküm verisi `sube`
--

INSERT INTO `sube` (`SubeNo`, `Ad`, `Adres`, `Telefon`) VALUES
(1, 'Cumhuriyet', 'Cumhuriyet Mah. 1. Mutlu Sok. No:2', '2768907766'),
(2, 'Meydan', 'Meydan Mah. 1. Zafer Sok. No:2', '2762234455');

-- --------------------------------------------------------

--
-- Tablo için tablo yapısı `urun`
--

CREATE TABLE `urun` (
  `UrunNo` int(11) NOT NULL,
  `UrunAd` varchar(45) COLLATE utf8_unicode_ci NOT NULL,
  `MarkaNo` int(11) NOT NULL,
  `KategoriNo` int(11) NOT NULL,
  `Fiyat` float NOT NULL,
  `SonKullanmaTarih` date NOT NULL,
  `Ozellik` text COLLATE utf8_unicode_ci DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Tablo döküm verisi `urun`
--

INSERT INTO `urun` (`UrunNo`, `UrunAd`, `MarkaNo`, `KategoriNo`, `Fiyat`, `SonKullanmaTarih`, `Ozellik`) VALUES
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
(15, 'Doğuş Filiz Çayı', 3, 5, 21.85, '2021-11-16', '2000 gr çay'),
(16, 'Doğadan Büyülü Kutu Masala Chai 70 G ', 13, 5, 22.95, '2022-11-16', '120 gr paket çay'),
(17, 'Televizyon', 14, 1, 3000, '2023-01-12', 'Vestel 102 Ekran Ultra LED LCD Televizyon');

--
-- Dökümü yapılmış tablolar için indeksler
--

--
-- Tablo için indeksler `kasiyer`
--
ALTER TABLE `kasiyer`
  ADD PRIMARY KEY (`KasiyerNo`);

--
-- Tablo için indeksler `kategori`
--
ALTER TABLE `kategori`
  ADD PRIMARY KEY (`KategoriNo`);

--
-- Tablo için indeksler `marka`
--
ALTER TABLE `marka`
  ADD PRIMARY KEY (`MarkaNo`);

--
-- Tablo için indeksler `musteri`
--
ALTER TABLE `musteri`
  ADD PRIMARY KEY (`MusteriNo`);

--
-- Tablo için indeksler `satis`
--
ALTER TABLE `satis`
  ADD PRIMARY KEY (`SatisNo`),
  ADD KEY `fk_urun` (`UrunNo`),
  ADD KEY `fk_musteri` (`MusteriNo`),
  ADD KEY `fk_kasiyer` (`KasiyerNo`),
  ADD KEY `fk_sube` (`SubeNo`);

--
-- Tablo için indeksler `sube`
--
ALTER TABLE `sube`
  ADD PRIMARY KEY (`SubeNo`);

--
-- Tablo için indeksler `urun`
--
ALTER TABLE `urun`
  ADD PRIMARY KEY (`UrunNo`),
  ADD KEY `fk_kategori` (`KategoriNo`),
  ADD KEY `fk_marka` (`MarkaNo`);

--
-- Dökümü yapılmış tablolar için AUTO_INCREMENT değeri
--

--
-- Tablo için AUTO_INCREMENT değeri `kasiyer`
--
ALTER TABLE `kasiyer`
  MODIFY `KasiyerNo` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- Tablo için AUTO_INCREMENT değeri `kategori`
--
ALTER TABLE `kategori`
  MODIFY `KategoriNo` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- Tablo için AUTO_INCREMENT değeri `marka`
--
ALTER TABLE `marka`
  MODIFY `MarkaNo` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=15;

--
-- Tablo için AUTO_INCREMENT değeri `musteri`
--
ALTER TABLE `musteri`
  MODIFY `MusteriNo` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- Tablo için AUTO_INCREMENT değeri `satis`
--
ALTER TABLE `satis`
  MODIFY `SatisNo` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- Tablo için AUTO_INCREMENT değeri `sube`
--
ALTER TABLE `sube`
  MODIFY `SubeNo` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- Tablo için AUTO_INCREMENT değeri `urun`
--
ALTER TABLE `urun`
  MODIFY `UrunNo` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=18;

--
-- Dökümü yapılmış tablolar için kısıtlamalar
--

--
-- Tablo kısıtlamaları `satis`
--
ALTER TABLE `satis`
  ADD CONSTRAINT `fk_kasiyer` FOREIGN KEY (`KasiyerNo`) REFERENCES `kasiyer` (`KasiyerNo`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `fk_musteri` FOREIGN KEY (`MusteriNo`) REFERENCES `musteri` (`MusteriNo`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `fk_sube` FOREIGN KEY (`SubeNo`) REFERENCES `sube` (`SubeNo`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `fk_urun` FOREIGN KEY (`UrunNo`) REFERENCES `urun` (`UrunNo`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Tablo kısıtlamaları `urun`
--
ALTER TABLE `urun`
  ADD CONSTRAINT `fk_kategori` FOREIGN KEY (`KategoriNo`) REFERENCES `kategori` (`KategoriNo`),
  ADD CONSTRAINT `fk_marka` FOREIGN KEY (`MarkaNo`) REFERENCES `marka` (`MarkaNo`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
