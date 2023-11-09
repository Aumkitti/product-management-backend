-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Nov 09, 2023 at 07:02 PM
-- Server version: 10.4.21-MariaDB
-- PHP Version: 7.3.31

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `products`
--

-- --------------------------------------------------------

--
-- Table structure for table `products`
--

CREATE TABLE `products` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `Details` varchar(255) NOT NULL,
  `type` varchar(255) NOT NULL,
  `image` varchar(255) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `products`
--

INSERT INTO `products` (`id`, `name`, `Details`, `type`, `image`, `createdAt`, `updatedAt`) VALUES
(1, 'care bears', 'ตุ๊กตาหมี แคร์แบร์สีฟ้า', 'ตุ๊กตา', 'https://th-test-11.slatic.net/p/3b11355d361027b81086e60d9673d866.jpg', '2023-11-08 17:31:47', '2023-11-08 17:31:47'),
(2, 'โต๊ะเกมมิ่ง', 'โต๊ะเกมมิ่ง ปรับระดับได้ตามความต้องการ เหล็กแข็งแรง', 'ของใช้ภายในบ้าน', 'https://th.bing.com/th/id/OIP.XDI7KtZ6hKVYdw_cBoYHgQHaHa?pid=ImgDet&rs=1', '2023-11-08 17:32:39', '2023-11-08 17:32:39'),
(3, 'เก้าอี้', 'เก้าอี้', 'ของใช้ในบ้าน', 'ฟหก', '2023-11-09 16:55:54', '2023-11-09 16:55:54');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `products`
--
ALTER TABLE `products`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `products`
--
ALTER TABLE `products`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
