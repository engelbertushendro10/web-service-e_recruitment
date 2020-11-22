-- phpMyAdmin SQL Dump
-- version 4.9.0.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Nov 22, 2020 at 06:11 PM
-- Server version: 10.4.6-MariaDB
-- PHP Version: 7.3.9

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `e-recruitment`
--

-- --------------------------------------------------------

--
-- Table structure for table `account`
--

CREATE TABLE `account` (
  `acc_id` int(11) UNSIGNED NOT NULL,
  `username` varchar(191) NOT NULL,
  `password` longtext NOT NULL,
  `email` varchar(191) NOT NULL,
  `type` enum('enginer','company','','') NOT NULL,
  `created_at` datetime NOT NULL DEFAULT current_timestamp(),
  `update_at` datetime NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `account`
--

INSERT INTO `account` (`acc_id`, `username`, `password`, `email`, `type`, `created_at`, `update_at`) VALUES
(22, 'tinorajen', '$2b$10$fpFdKkNQoK7gO0EZB4nbxOUHU5LlWMfJujh4zGGkkp2XNJMACgZCK', 'tinorajen10@gmail.com', 'enginer', '2020-11-18 16:08:10', '2020-11-18 16:08:10'),
(24, 'hyundaimobil', '$2b$10$3pUk1/SxY7EFVj87OaYV9eBlvMPdknm/tJ/siKinAjTvXIwCZPZji', 'hyundaimobil@gmail.com', '', '2020-11-19 10:53:30', '2020-11-19 10:53:30'),
(25, 'toyotadenpasar', '$2b$10$XPR4Ou8naCDgW9Wj4hzKbOKf/AR2F/rSq/4vAKTHgCN2iqACBF7kO', 'toyotadenpasar@gmail.com', 'company', '2020-11-20 00:16:34', '2020-11-20 00:16:34'),
(26, 'toyotadenpasar', '$2b$10$NM5gW3Y.7SCs4uWqCr0qBuT7P1xo6GRhyXYW1SDY3M6kbfRjetzPK', 'toyotadenpasar@gmail.com', 'company', '2020-11-22 23:36:10', '2020-11-22 23:36:10');

-- --------------------------------------------------------

--
-- Table structure for table `company`
--

CREATE TABLE `company` (
  `c_id` int(11) UNSIGNED NOT NULL,
  `ac_id` int(11) UNSIGNED DEFAULT NULL,
  `c_name` varchar(191) NOT NULL,
  `c_adress` text NOT NULL,
  `c_sector` varchar(191) NOT NULL,
  `c_desc` varchar(191) NOT NULL,
  `c_sosmed` varchar(191) NOT NULL,
  `created_at` datetime NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `company`
--

INSERT INTO `company` (`c_id`, `ac_id`, `c_name`, `c_adress`, `c_sector`, `c_desc`, `c_sosmed`, `created_at`) VALUES
(7, 24, 'PT. Hyundai Mobil', 'Jl. Gatot Subroto Barat No. 188, Badung-Bali', 'Industri Otomotif', 'dealer mobil hyundai cabang bali', '@hyundaimobil_indonesia', '2020-11-19 10:53:30'),
(8, 25, 'toyotadenpasar', '', '', '', '', '2020-11-20 00:16:34'),
(9, 26, 'toyotadenpasar', '', '', '', '', '2020-11-22 23:36:10');

-- --------------------------------------------------------

--
-- Table structure for table `enginer`
--

CREATE TABLE `enginer` (
  `e_id` int(11) UNSIGNED NOT NULL,
  `acc_id` int(11) UNSIGNED DEFAULT NULL,
  `e_addres` varchar(191) NOT NULL,
  `e_skill` varchar(191) NOT NULL,
  `e_github` varchar(191) NOT NULL,
  `e_sosmed` varchar(191) NOT NULL,
  `e_name` varchar(191) NOT NULL,
  `created_at` datetime NOT NULL DEFAULT current_timestamp(),
  `update_at` datetime NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `enginer`
--

INSERT INTO `enginer` (`e_id`, `acc_id`, `e_addres`, `e_skill`, `e_github`, `e_sosmed`, `e_name`, `created_at`, `update_at`) VALUES
(5, 22, 'Jl. Raya Sesetan, Denpasar-Bali', 'Kotlin, Javascript', 'github.com/tinorajen10', '@tinorajen', 'tinorajen', '2020-11-18 16:08:10', '2020-11-18 16:08:10');

-- --------------------------------------------------------

--
-- Table structure for table `experience`
--

CREATE TABLE `experience` (
  `ex_id` int(11) UNSIGNED NOT NULL,
  `e_id` int(11) UNSIGNED NOT NULL,
  `ex_company` varchar(191) NOT NULL,
  `ex_positions` varchar(191) NOT NULL,
  `ex_start` date NOT NULL,
  `ex_end` date NOT NULL,
  `ex_desc` varchar(191) NOT NULL,
  `created_at` datetime NOT NULL DEFAULT current_timestamp(),
  `update_at` datetime NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `hire`
--

CREATE TABLE `hire` (
  `hr_id` int(11) UNSIGNED NOT NULL,
  `e_id` int(11) UNSIGNED NOT NULL,
  `p_id` int(11) UNSIGNED NOT NULL,
  `c_id` int(11) UNSIGNED NOT NULL,
  `hr_progres` varchar(191) NOT NULL,
  `hr_price` int(11) NOT NULL,
  `status` enum('waiting','aprove','reject','') NOT NULL,
  `date_confirm` date NOT NULL DEFAULT current_timestamp(),
  `created_at` datetime NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `hire`
--

INSERT INTO `hire` (`hr_id`, `e_id`, `p_id`, `c_id`, `hr_progres`, `hr_price`, `status`, `date_confirm`, `created_at`) VALUES
(1, 5, 9, 7, 'on progres', 5000000, 'aprove', '2020-11-22', '2020-11-22 00:00:00'),
(2, 5, 9, 7, 'crud', 5000000, 'waiting', '2020-11-22', '2020-11-22 23:41:39');

-- --------------------------------------------------------

--
-- Table structure for table `portfolio`
--

CREATE TABLE `portfolio` (
  `pf_id` int(11) NOT NULL,
  `e_id` int(11) UNSIGNED NOT NULL,
  `pf_app` varchar(191) NOT NULL,
  `pf_desc` text NOT NULL,
  `pf_repo` varchar(191) NOT NULL,
  `pf_image` varchar(191) NOT NULL,
  `pf_type_app` varchar(191) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `portfolio`
--

INSERT INTO `portfolio` (`pf_id`, `e_id`, `pf_app`, `pf_desc`, `pf_repo`, `pf_image`, `pf_type_app`) VALUES
(12, 5, 'booking tiket', 'aplikasi e-recruitment', 'github.com/engelbertushendro10', 'pf_image-1606037023892.png', 'android app');

-- --------------------------------------------------------

--
-- Table structure for table `project`
--

CREATE TABLE `project` (
  `p_id` int(11) UNSIGNED NOT NULL,
  `c_id` int(11) UNSIGNED NOT NULL,
  `e_id` int(11) UNSIGNED NOT NULL,
  `p_desc` varchar(191) NOT NULL,
  `p_deadline` varchar(191) NOT NULL,
  `p_price` int(30) NOT NULL,
  `p_type` varchar(191) NOT NULL,
  `created_at` datetime NOT NULL DEFAULT current_timestamp(),
  `update_at` datetime NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `project`
--

INSERT INTO `project` (`p_id`, `c_id`, `e_id`, `p_desc`, `p_deadline`, `p_price`, `p_type`, `created_at`, `update_at`) VALUES
(9, 7, 5, 'aplikasi pemesanan tiket online', 'tiga bulan', 5000000, 'android app && web App', '2020-11-20 22:51:02', '2020-11-20 22:51:02');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `account`
--
ALTER TABLE `account`
  ADD PRIMARY KEY (`acc_id`);

--
-- Indexes for table `company`
--
ALTER TABLE `company`
  ADD PRIMARY KEY (`c_id`),
  ADD KEY `ac_id` (`ac_id`);

--
-- Indexes for table `enginer`
--
ALTER TABLE `enginer`
  ADD PRIMARY KEY (`e_id`),
  ADD KEY `acc_id` (`acc_id`) USING BTREE;

--
-- Indexes for table `experience`
--
ALTER TABLE `experience`
  ADD PRIMARY KEY (`ex_id`),
  ADD KEY `e_id` (`e_id`);

--
-- Indexes for table `hire`
--
ALTER TABLE `hire`
  ADD PRIMARY KEY (`hr_id`),
  ADD KEY `e_id` (`e_id`),
  ADD KEY `p_id` (`p_id`),
  ADD KEY `c_id` (`c_id`);

--
-- Indexes for table `portfolio`
--
ALTER TABLE `portfolio`
  ADD PRIMARY KEY (`pf_id`),
  ADD KEY `e_id` (`e_id`);

--
-- Indexes for table `project`
--
ALTER TABLE `project`
  ADD PRIMARY KEY (`p_id`),
  ADD KEY `c_id` (`c_id`),
  ADD KEY `e_id` (`e_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `account`
--
ALTER TABLE `account`
  MODIFY `acc_id` int(11) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=27;

--
-- AUTO_INCREMENT for table `company`
--
ALTER TABLE `company`
  MODIFY `c_id` int(11) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT for table `enginer`
--
ALTER TABLE `enginer`
  MODIFY `e_id` int(11) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `experience`
--
ALTER TABLE `experience`
  MODIFY `ex_id` int(11) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `hire`
--
ALTER TABLE `hire`
  MODIFY `hr_id` int(11) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `portfolio`
--
ALTER TABLE `portfolio`
  MODIFY `pf_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;

--
-- AUTO_INCREMENT for table `project`
--
ALTER TABLE `project`
  MODIFY `p_id` int(11) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `company`
--
ALTER TABLE `company`
  ADD CONSTRAINT `company_ibfk_1` FOREIGN KEY (`ac_id`) REFERENCES `account` (`acc_id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `enginer`
--
ALTER TABLE `enginer`
  ADD CONSTRAINT `enginer_ibfk_1` FOREIGN KEY (`acc_id`) REFERENCES `account` (`acc_id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `experience`
--
ALTER TABLE `experience`
  ADD CONSTRAINT `experience_ibfk_1` FOREIGN KEY (`e_id`) REFERENCES `enginer` (`e_id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `hire`
--
ALTER TABLE `hire`
  ADD CONSTRAINT `hire_ibfk_1` FOREIGN KEY (`c_id`) REFERENCES `company` (`c_id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `hire_ibfk_2` FOREIGN KEY (`p_id`) REFERENCES `project` (`p_id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `hire_ibfk_3` FOREIGN KEY (`e_id`) REFERENCES `enginer` (`e_id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `portfolio`
--
ALTER TABLE `portfolio`
  ADD CONSTRAINT `portfolio_ibfk_1` FOREIGN KEY (`e_id`) REFERENCES `enginer` (`e_id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `project`
--
ALTER TABLE `project`
  ADD CONSTRAINT `project_ibfk_1` FOREIGN KEY (`c_id`) REFERENCES `company` (`c_id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `project_ibfk_2` FOREIGN KEY (`e_id`) REFERENCES `enginer` (`e_id`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
