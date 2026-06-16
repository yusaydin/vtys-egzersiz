-- phpMyAdmin SQL Dump
-- version 5.0.3
-- https://www.phpmyadmin.net/
--
-- Anamakine: 127.0.0.1
-- Üretim Zamanı: 22 Kas 2021, 14:34:38
-- Sunucu sürümü: 10.4.14-MariaDB
-- PHP Sürümü: 7.4.11

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

--
-- Tablo döküm verisi `satis`
--

INSERT INTO `satis` (`SatisNo`, `UrunNo`, `MusteriNo`, `KasiyerNo`, `SubeNo`, `Tarih`, `Adet`) VALUES
(1, 2, 2, 1, 1, '2021-11-22 14:50:12', 1),
(2, 3, 1, 3, 1, '2020-10-11 00:00:00', 2),
(3, 4, 1, 1, 1, '2020-05-30 14:50:12', 3),
(4, 5, 2, 2, 1, '2020-11-30 14:50:12', 2),
(5, 11, 1, 1, 2, '2021-11-22 00:00:00', 5),
(6, 8, 1, 2, 2, '2021-11-30 14:50:12', 2),
(7, 16, 1, 2, 2, '2020-08-10 00:00:00', 4),
(10, 2, 1, 1, 1, '2019-05-30 14:50:12', 3),
(12, 11, 1, 1, 2, '2019-04-21 00:00:00', 5),
(14, 16, 1, 2, 2, '2019-08-10 00:00:00', 4),
(16, 15, 1, 1, 2, '2021-04-27 13:59:00', 2),
(17, 20, 2, 2, 1, '2021-04-27 14:59:00', 1),
(18, 21, 2, 1, 1, '2021-11-22 14:59:00', 3);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
