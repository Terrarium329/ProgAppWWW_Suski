-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Lis 25, 2026 at 07:01 PM
-- Wersja serwera: 10.4.32-MariaDB
-- Wersja PHP: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `moja_strona`
--

-- --------------------------------------------------------

--
-- Struktura tabeli dla tabeli `page_list`
--

CREATE TABLE `page_list` (
  `id` int(10) UNSIGNED NOT NULL,
  `alias` varchar(20) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `page_title` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `page_content` text CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `status` tinyint(3) UNSIGNED NOT NULL DEFAULT 1
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `page_list`
--

INSERT INTO `page_list` (`id`, `alias`, `page_title`, `page_content`, `status`) VALUES
(1, 'glowna', 'Strona główna', '<h2>Sekcja Demonstracyjna</h2>\r\n	<section id=\"demonstracja\">\r\n		<button class=\"guzik\" type=\"button\" id=\"pierwszy\" aria-pressed=\"false\">Przycisk A</button>\r\n		<button class=\"guzik\" type=\"button\" id=\"drugi\">Przycisk B</button>\r\n		<button class=\"guzik\" type=\"button\" id=\"trzeci\">Przycisk C</button>\r\n		<button class=\"guzik\" type=\"button\" id=\"czwarty\">Resetuj A i C</button>\r\n		<button class=\"guzik\" type=\"button\" id=\"piąty\">Sprawdź serwer</button>\r\n	</section>\r\n\r\n	<p id=\"licznik\" role=\"status\">Etap: 0</p>\r\n	<p id=\"wynikserwera\" role=\"status\">Wynik serwera: nieznany</p>\r\n\r\n	<button type=\"button\" id=\"motyw\" aria-pressed=\"false\">Tryb ciemny</button>\r\n\r\n	<section class=\"wyszukiwanie\" aria-label=\"Wyszukiwanie w katalogu\">\r\n	<label for=\"fraza-katalogu\">Szukaj produktu:</label>\r\n	<input type=\"search\" id=\"fraza-katalogu\" autocomplete=\"off\">\r\n	<p id=\"raport-filtru\" aria-live=\"polite\"></p>\r\n	</section>\r\n\r\n	<section class=\"katalog\">\r\n\r\n		<article class=\"karta\"><a href=\"./index.php?idp=produkt\">\r\n\r\n		<h1 class=\"nazwa-oferty\">Mercedes A 150</h1>\r\n		<img src=\"./img/a150.png\" alt=\"Brak zdjęcia\" width=\"350\" height=\"196\">\r\n		<h3>1000 zł</h3>\r\n		<p>Pożądny samochód, użytkowany wiele lat</p>\r\n\r\n		</a>\r\n		</article>\r\n\r\n		<article class=\"karta\">\r\n\r\n		<h1 class=\"nazwa-oferty\">Chrysler Pt Cruiser Kabriolet</h1>\r\n		<img src=\"./img/cruiser.png\" alt=\"Brak zdjęcia\" width=\"350\" height=\"233\">\r\n		<h3>2000 zł</h3>\r\n		<p>Posiada automatyczną skrzynię biegów</p>\r\n\r\n		</article>\r\n\r\n		<article class=\"karta\">\r\n\r\n		<h1 class=\"nazwa-oferty\">Ford Interceptor</h1>\r\n		<img src=\"./img/ford.png\" alt=\"Brak zdjęcia\" width=\"350\" height=\"196\">\r\n		<h3>4000 zł</h3>\r\n		<p>Używany podczas produkcji filmów w Australii</p>\r\n\r\n		</article>\r\n\r\n	</section>', 1),
(2, 'kontakt', 'Strona kontaktowa', '\r\n	<h2>Formularz</h2>\r\n	<p>Podgląd lokalny. Formularz nie wysyła wiadomości</p>\r\n\r\n	<form id=\"ankieta-zapytania\">\r\n	<label for=\"email\">e-mail: <input type=\"email\" name=\"email\" required id=\"email\"></label>\r\n	<label for=\"produkt\">produkt: <select name=\"produkt\" required id=\"produkt\">\r\n		<option value=\"\">Wybierz produkt</option>\r\n		<option value=\"1\">Mercedes A 150</option>\r\n		<option value=\"2\">Chrysler Pt Cruiser Kabriolet</option>\r\n		<option value=\"3\">Ford Interceptor</option>\r\n		</select>\r\n	</label>\r\n	<label for=\"ilosc\">liczba sztuk: <input type=\"number\" name=\"ilosc\" min=\"1\" max=\"5\" step=\"1\" required id=\"ilosc\"></label>\r\n	<p id=\"tablica-wyceny\" aria-live=\"polite\"></p>\r\n	<label for=\"wiadomosc\">wiadomość: <textarea name=\"wiadomosc\" required minlength=\"10\" maxlength=\"500\" id=\"wiadomosc\"></textarea></label>\r\n	<p id=\"uwaga-tresci\" class=\"uwaga-bledu\" aria-live=\"polite\"></p>\r\n	<button type=\"submit\">Sprawdź zapytanie</button>\r\n	</form>\r\n\r\n	<section id=\"wynik\" aria-live=\"polite\"></section>\r\n', 1),
(3, 'produkt', 'Strona produktu', '	<h1>Mercedes A 150</h1>\r\n	<img src=\"./img/a150.png\" alt=\"Brak zdjęcia\" width=\"350\" height=\"196\">\r\n	<h3>1000 zł</h3>\r\n	<p>Pożądny samochód, użytkowany wiele lat</p>\r\n	<ul>\r\n		<li>Auto jest po dwóch wypadkach\r\n		<li>Starte kostki hamulcowe\r\n		<li>Bez pasów z tyłu\r\n	</ul>\r\n\r\n	<table>\r\n	<caption>Charakterystyka</caption>\r\n	\r\n		<thead>\r\n		<tr>\r\n		<th scope=\"col\">Cecha</th>\r\n		<th scope=\"col\">Wartość</th>\r\n\r\n		<tbody>\r\n		<tr>\r\n		<td><strong>Koła</strong></td>\r\n		<td>4 koła</td>\r\n\r\n		<tr>\r\n		<td><strong>Paliwo</strong></td>\r\n		<td>Benzyna</td>\r\n\r\n		<tr>\r\n		<td><strong>Przebieg</strong></td>\r\n		<td>160 <em>km</em></td>\r\n\r\n	</table>\r\n\r\n	<a href=\"./index.php?idp=kontakt\">Zapytaj o produkt</a>', 1),
(4, 'filmy', 'Strona z filmami', '\r\n<section>\r\n    <h2>Filmy o samochodach</h2>\r\n\r\n    <article>\r\n        <h3>Mercedes a klasa w169 a150 benzyna test recenzja opis</h3>\r\n\r\n        <iframe src=\"https://www.youtube.com/embed/vqbqVKJgTho\" title=\"Mercedes a150\" allowfullscreen></iframe>\r\n        <p><a href=\"https://www.youtube.com/watch?v=vqbqVKJgTho\" target=\"_blank\">Link do filmu</a></p>\r\n    </article>\r\n\r\n    <article>\r\n        <h3>Chrysler PT Cruiser Cabrio 2.4 Touring 2005 - Automático - King Car Multimarcas</h3>\r\n\r\n        <iframe src=\"https://www.youtube.com/embed/82CeiUG_YxM\" title=\"Chrysler Pt Cruiser Kabriolet\" allowfullscreen></iframe>\r\n        <p><a href=\"https://www.youtube.com/watch?v=82CeiUG_YxM\" target=\"_blank\">Link do filmu</a></p>\r\n    </article>\r\n\r\n    <article>\r\n        <h3>MAD MAX INTERCEPTOR V8 engine best sound ever</h3>\r\n\r\n        <iframe src=\"https://www.youtube.com/embed/dFk0Cks9mxU\" title=\"Ford Interceptor\" allowfullscreen></iframe>\r\n        <p><a href=\"https://www.youtube.com/watch?v=dFk0Cks9mxU\" target=\"_blank\">Link do filmu</a></p>\r\n    </article>\r\n\r\n</section>\r\n', 1),
(5, 'warsztaty', 'Strona z warsztatami', '<section>\r\n    <h2>Warsztaty</h2>\r\n</section>', 0);

--
-- Indeksy dla zrzutów tabel
--

--
-- Indeksy dla tabeli `page_list`
--
ALTER TABLE `page_list`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `alias` (`alias`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `page_list`
--
ALTER TABLE `page_list`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
