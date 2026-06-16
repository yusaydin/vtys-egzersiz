-- phpMyAdmin SQL Dump
-- version 4.9.0.1
-- https://www.phpmyadmin.net/
--
-- Anamakine: 127.0.0.1
-- Üretim Zamanı: 17 Nis 2020, 11:36:52
-- Sunucu sürümü: 10.4.6-MariaDB
-- PHP Sürümü: 7.3.9

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Veritabanı: `eticaret`
--
USE eticaret;

DELIMITER $$
--
-- Yordamlar
--
CREATE DEFINER=`root`@`localhost` PROCEDURE IF NOT EXISTS `MarkaEkle` (IN `P_Marka` VARCHAR(45), IN `P_MarkaNo` INT, `P_Ekleyen` INT, OUT `O_Durum` TEXT)  BEGIN
	DECLARE EXIT HANDLER FOR SQLEXCEPTION
    BEGIN
		GET DIAGNOSTICS CONDITION 1 @HataNo = MYSQL_ERRNO,  @SQLDurum = RETURNED_SQLSTATE,  
        @HataMesaj = MESSAGE_TEXT, @TabloAd = TABLE_NAME, @VeriTabani = SCHEMA_NAME;
        SET O_Durum = CONCAT('Hata No: ',@HataNo, ' SQL Durum: ',@SQLDurum, ' Mesaj: ',@HataMesaj,' Veri Tabanı.Tablo: ', @VeriTabani,'.', @TabloAd);
    END;
    DECLARE EXIT HANDLER FOR SQLWARNING
		SELECT "SQL Çalışma Uyarısı";
	INSERT INTO marka(No,Marka,Ekleyen) VALUES (P_MarkaNo,P_Marka,P_Ekleyen);
	SET O_Durum = 0;
END$$

CREATE DEFINER=`root`@`localhost` PROCEDURE IF NOT EXISTS `UrunEkle` (IN `P_UrunAd` VARCHAR(100), IN `P_MarkaNo` INT, IN `P_KategoriNo` INT, IN `P_Fiyat` FLOAT, IN `P_SonKullanmaTarih` DATE, IN `P_EklemeTarih` DATETIME, IN `P_Ekleyen` INT, IN `P_Aciklama` TEXT, OUT `Sonuc` VARCHAR(50))  BEGIN
INSERT INTO urun 
(Ad,MarkaNo,KategoriNo,Fiyat,SonKullanmaTarih,EklemeTarih,Ekleyen,Aciklama)
VALUES
(P_UrunAd,P_MarkaNo,P_KategoriNo,P_Fiyat,P_SonKullanmaTarih,P_EklemeTarih,P_Ekleyen,P_Aciklama);
SET Sonuc = 'Ürün Eklendi';
END$$

CREATE DEFINER=`root`@`localhost` PROCEDURE IF NOT EXISTS `UrunGuncelle` (IN `P_UrunNo` INT, IN `P_UrunAd` VARCHAR(100), IN `P_MarkaNo` INT, IN `P_KategoriNo` INT, IN `P_Fiyat` FLOAT, IN `P_SonKullanmaTarih` DATE, IN `P_Aciklama` TEXT, IN `P_AP` VARCHAR(1), OUT `Sonuc` VARCHAR(50))  BEGIN
UPDATE urun SET
Ad = P_UrunAd, MarkaNo = P_MarkaNo ,KategoriNo = P_KategoriNo,
Fiyat = P_Fiyat, SonKullanmaTarih = P_SonKullanmaTarih ,Aciklama = P_Aciklama, AP = P_AP 
WHERE No = P_UrunNo;
SET Sonuc = 'Ürün Güncellendi';
END$$

CREATE DEFINER=`root`@`localhost` PROCEDURE IF NOT EXISTS `UrunSil` (IN `P_UrunNo` INT, OUT `Sonuc` VARCHAR(50))  BEGIN
DELETE FROM urun WHERE No = P_UrunNo;
SET Sonuc = 'Ürün Silindi';
END$$

--
-- İşlevler
--

CREATE DEFINER=`root`@`localhost` FUNCTION IF NOT EXISTS `SonKullanmaZamanHesapla` (`P_SonKullanmaTarih` DATE) RETURNS INT(11) BEGIN
	DECLARE KalanZaman INT;
	SET KalanZaman = DATEDIFF(P_SonKullanmaTarih,NOW());
	RETURN KalanZaman;
END$$

DELIMITER ;

-- --------------------------------------------------------

--
-- Tablo için tablo yapısı `kategori`
--

CREATE TABLE IF NOT EXISTS `kategori` (
  `No` int(11) NOT NULL,
  `Kategori` varchar(45) COLLATE utf8_turkish_ci NOT NULL,
  `Ekleyen` int(11) NOT NULL,
  `UstKategori` int(11) DEFAULT 0,
  `AP` enum('A','P') COLLATE utf8_turkish_ci NOT NULL DEFAULT 'A'
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_turkish_ci;

--
-- Tablo döküm verisi `kategori`
--

INSERT INTO `kategori` (`No`, `Kategori`, `Ekleyen`, `UstKategori`, `AP`) VALUES
(2, 'Yiyecek', 12, 0, 'A'),
(3, 'Ä°Ã§ecek', 12, 0, 'A'),
(14, 'Elektronik', 12, 0, 'A'),
(15, 'Beyaz Eşya', 12, 0, 'A'),
(16, 'Giyim', 12, 0, 'A');

-- --------------------------------------------------------

--
-- Tablo için tablo yapısı `kullanici`
--

CREATE TABLE IF NOT EXISTS `kullanici` (
  `KullaniciNo` int(11) NOT NULL,
  `Ad` varchar(45) COLLATE utf8_turkish_ci NOT NULL,
  `Soyad` varchar(45) COLLATE utf8_turkish_ci NOT NULL,
  `Eposta` varchar(45) COLLATE utf8_turkish_ci NOT NULL,
  `Cinsiyet` enum('E','B') COLLATE utf8_turkish_ci DEFAULT NULL,
  `Parola` varchar(32) COLLATE utf8_turkish_ci DEFAULT NULL,
  `AktivasyonDurum` enum('A','P') COLLATE utf8_turkish_ci NOT NULL DEFAULT 'P',
  `KullaniciTur` enum('N','Y') COLLATE utf8_turkish_ci DEFAULT 'N'
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_turkish_ci;

--
-- Tablo döküm verisi `kullanici`
--

INSERT INTO `kullanici` (`KullaniciNo`, `Ad`, `Soyad`, `Eposta`, `Cinsiyet`, `Parola`, `AktivasyonDurum`, `KullaniciTur`) VALUES
(7, 'HÃ¼seyin', 'CoÅŸkun', 'huseyin.coskun@gmail.com', 'E', '25f9e794323b453885f5181f1b624d0b', 'A', 'N'),
(12, 'Ahmet', 'Yılmaz', 'ubilmyo@gmail.com', 'E', '25d55ad283aa400af464c76d713c07ad', 'A', 'Y'),
(14, 'Ä°smet', 'Alper', 'ismet.alper.1@gmail.com', 'E', '25d55ad283aa400af464c76d713c07ad', 'P', 'N');

-- --------------------------------------------------------

--
-- Tablo için tablo yapısı `marka`
--

CREATE TABLE IF NOT EXISTS `marka` (
  `No` int(11) NOT NULL,
  `Marka` varchar(45) COLLATE utf8_turkish_ci NOT NULL,
  `Ekleyen` int(11) NOT NULL,
  `AP` enum('A','P') COLLATE utf8_turkish_ci NOT NULL DEFAULT 'A'
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_turkish_ci;

--
-- Tablo döküm verisi `marka`
--

INSERT INTO `marka` (`No`, `Marka`, `Ekleyen`, `AP`) VALUES
(1, 'Samsung', 12, 'A'),
(2, 'Nokia', 12, 'A'),
(3, 'Beyşehiroğulları', 12, 'A'),
(52, 'Nike', 12, 'A'),
(55, 'Ülker', 12, 'A'),
(56, 'Eti', 12, 'A'),
(57, 'Bingo', 12, 'A'),
(58, 'İpana', 12, 'A'),
(73, 'Vestel', 12, 'A'),
(74, 'Sarar', 12, 'A');

-- --------------------------------------------------------

--
-- Tablo için tablo yapısı `musteri`
--

CREATE TABLE IF NOT EXISTS `musteri` (
  `No` int(11) NOT NULL,
  `Ad` varchar(45) COLLATE utf8_turkish_ci NOT NULL,
  `Soyad` varchar(45) COLLATE utf8_turkish_ci NOT NULL,
  `Eposta` varchar(45) COLLATE utf8_turkish_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_turkish_ci;

--
-- Tablo döküm verisi `musteri`
--

INSERT INTO `musteri` (`No`, `Ad`, `Soyad`, `Eposta`) VALUES
(1, 'Ahmet', 'Yılmaz', 'ahmetyilmaz@gmail.com'),
(2, 'Mehmet', 'Küçük', 'mehmetkucuk@hotmail.com'),
(3, 'Hikmet', 'Erdoğan', 'hikmete@gmail.com');

-- --------------------------------------------------------

--
-- Tablo için tablo yapısı `puan`
--

CREATE TABLE IF NOT EXISTS `puan` (
  `No` int(11) NOT NULL,
  `MusteriNo` int(11) NOT NULL,
  `Puan` int(11) NOT NULL,
  `Tarih` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_turkish_ci;

-- --------------------------------------------------------

--
-- Tablo için tablo yapısı `siparis`
--

CREATE TABLE IF NOT EXISTS `siparis` (
  `No` int(11) NOT NULL,
  `UrunNo` int(11) NOT NULL,
  `MusteriNo` int(11) NOT NULL,
  `Tutar` int(11) NOT NULL,
  `SiparisTarih` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_turkish_ci;

-- --------------------------------------------------------

--
-- Tablo için tablo yapısı `urun`
--

CREATE TABLE IF NOT EXISTS `urun` (
  `No` int(11) NOT NULL,
  `Ad` varchar(100) COLLATE utf8_unicode_ci NOT NULL,
  `KategoriNo` int(11) NOT NULL,
  `MarkaNo` int(11) NOT NULL,
  `Ekleyen` int(11) NOT NULL,
  `Fiyat` float NOT NULL,
  `Aciklama` text COLLATE utf8_unicode_ci NOT NULL,
  `EklemeTarih` date NOT NULL,
  `AP` enum('A','P') COLLATE utf8_unicode_ci NOT NULL DEFAULT 'A',
  `SonKullanmaTarih` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Tablo döküm verisi `urun`
--

INSERT INTO `urun` (`No`, `Ad`, `KategoriNo`, `MarkaNo`, `Ekleyen`, `Fiyat`, `Aciklama`, `EklemeTarih`, `AP`, `SonKullanmaTarih`) VALUES
(7, 'Çikolatalı Gofret', 2, 55, 12, 2, '100 Gram Gofret', '2020-04-15', 'A', '2020-10-10'),
(8, 'Eti Sütlü Çikolata', 3, 56, 12, 2.5, '150 gram çikolatalı sütlü içecek', '2020-03-15', 'A', '2021-11-29'),
(9, 'Cep Telefonu', 14, 1, 12, 1900, 'Samsung C1 Cep Telefonu', '2020-03-16', 'A', '2025-11-22'),
(10, 'LED TV', 14, 73, 12, 5999, 'Vestel Led TV 102 Ekran', '2020-05-16', 'A', '2026-11-12'),
(11, 'Takım Elbise', 16, 74, 12, 1350, 'Sarar Füme Takım Elbise', '2020-06-16', 'A', '2022-11-12');

--
-- Dökümü yapılmış tablolar için indeksler
--

--
-- Tablo için indeksler `kategori`
--
ALTER TABLE `kategori`
  ADD PRIMARY KEY (`No`);

--
-- Tablo için indeksler `kullanici`
--
ALTER TABLE `kullanici`
  ADD PRIMARY KEY (`KullaniciNo`);

--
-- Tablo için indeksler `marka`
--
ALTER TABLE `marka`
  ADD PRIMARY KEY (`No`),
  ADD UNIQUE KEY `Marka_UNIQUE` (`Marka`);

--
-- Tablo için indeksler `musteri`
--
ALTER TABLE `musteri`
  ADD PRIMARY KEY (`No`),
  ADD UNIQUE KEY `Eposta_UNIQUE` (`Eposta`);

--
-- Tablo için indeksler `puan`
--
ALTER TABLE `puan`
  ADD PRIMARY KEY (`No`);

--
-- Tablo için indeksler `siparis`
--
ALTER TABLE `siparis`
  ADD PRIMARY KEY (`No`);

--
-- Tablo için indeksler `urun`
--
ALTER TABLE `urun`
  ADD PRIMARY KEY (`No`);

--
-- Dökümü yapılmış tablolar için AUTO_INCREMENT değeri
--

--
-- Tablo için AUTO_INCREMENT değeri `kategori`
--
ALTER TABLE `kategori`
  MODIFY `No` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=17;

--
-- Tablo için AUTO_INCREMENT değeri `kullanici`
--
ALTER TABLE `kullanici`
  MODIFY `KullaniciNo` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=15;

--
-- Tablo için AUTO_INCREMENT değeri `marka`
--
ALTER TABLE `marka`
  MODIFY `No` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=75;

--
-- Tablo için AUTO_INCREMENT değeri `musteri`
--
ALTER TABLE `musteri`
  MODIFY `No` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- Tablo için AUTO_INCREMENT değeri `puan`
--
ALTER TABLE `puan`
  MODIFY `No` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- Tablo için AUTO_INCREMENT değeri `siparis`
--
ALTER TABLE `siparis`
  MODIFY `No` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- Tablo için AUTO_INCREMENT değeri `urun`
--
ALTER TABLE `urun`
  MODIFY `No` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
