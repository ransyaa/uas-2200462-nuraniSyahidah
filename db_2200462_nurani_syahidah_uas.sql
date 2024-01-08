-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Waktu pembuatan: 07 Jan 2024 pada 05.04
-- Versi server: 10.4.28-MariaDB
-- Versi PHP: 8.2.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `db_2200462_nurani_syahidah_uas`
--

-- --------------------------------------------------------

--
-- Struktur dari tabel `pasien_puskesmas_nurani_syahidah`
--

CREATE TABLE `pasien_puskesmas_nurani_syahidah` (
  `id` int(11) NOT NULL,
  `nama` text DEFAULT NULL,
  `usia` int(11) DEFAULT NULL,
  `alamat` text DEFAULT NULL,
  `jenis_kelamin` text DEFAULT NULL,
  `deskripsi` text DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data untuk tabel `pasien_puskesmas_nurani_syahidah`
--

INSERT INTO `pasien_puskesmas_nurani_syahidah` (`id`, `nama`, `usia`, `alamat`, `jenis_kelamin`, `deskripsi`) VALUES
(5, 'Davina Nazwa', 19, 'Kuningan', 'Perempuan', 'demam tinggi'),
(6, 'Citra Ayu', 21, 'Subang', 'Perempuan', 'sakit tenggorokan'),
(7, 'Geral Septira', 20, 'Bogor', 'Laki-laki', 'Batuk pilek'),
(8, 'Pakar Hanif', 11, 'Mataram', 'Laki-laki', 'muntah-muntah'),
(9, 'Nur yanti ', 25, 'Jakarta', 'Perempuan', 'asam lambung');

--
-- Indexes for dumped tables
--

--
-- Indeks untuk tabel `pasien_puskesmas_nurani_syahidah`
--
ALTER TABLE `pasien_puskesmas_nurani_syahidah`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT untuk tabel yang dibuang
--

--
-- AUTO_INCREMENT untuk tabel `pasien_puskesmas_nurani_syahidah`
--
ALTER TABLE `pasien_puskesmas_nurani_syahidah`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=32;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
