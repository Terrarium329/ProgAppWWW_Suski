<!DOCTYPE HTML>
<html lang="pl">
	<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<link href="./css/style.css" rel="stylesheet">
	<script src="./js/main.js" defer></script>
	<script src="./vendor/jquery-4.0.0.min.js" defer></script>
	<script src="./js/lab3.js" defer></script>
	<title>Strona sklepu</title>
	</head>

	<body>

	<header>

	<h1>Samochody na Sprzedaż</h1>
	
	<nav class="menu">
	
	<a href="./index.php" aria-current="page">Index</a>
	<a href="./produkt.html">Produkt</a>
	<a href="./kontakt.html">Kontakt</a>
	<a href="./lab4.php">Katalog PHP</a>
	</nav>


	</header>

	<main>



	</main>	

	<footer>Testowy footer

	<section aria-label="Data i czas">
	<p id="wskazanie-czasu" aria-live="off">Ładowanie zegara…</p>
	<button type="button" id="uruchom-tykanie">Start zegara</button>
	<button type="button" id="wstrzymaj-tykanie">Stop zegara</button>
	</section>

	<?php
	$identyfikator_projektu = "sklep-demo";
	echo "<h2>Identyfikator projektu: $identyfikator_projektu</h2>";
	?>

	</footer>

	</body>
</html>
