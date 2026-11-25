<?php

require_once __DIR__ . '/cfg.php';

$mapa = [
	"glowna" => ["tytul" => "Strona główna","sciezka" => "./html/glowna.html"],
	"produkt" => ["tytul" => "Produkt","sciezka" => "./html/produkt.html"],
	"kontakt" => ["tytul" => "Kontakt","sciezka" => "./html/kontakt.html"],
	"filmy" => ["tytul" => "Filmy","sciezka" => "./html/filmy.html"]
];

$idp = $_GET['idp'] ?? 'glowna';

if (!is_string($idp)){
    http_response_code(404);
    $blad = true;
}
elseif ($idp === ''){
    $idp = 'glowna';
    $blad = false;
}
elseif (isset($mapa[$idp])){
    http_response_code(200);
    $blad = false;
}
else{
    http_response_code(404);
    $blad = true;
}

if ($blad){
    $widok = null;
}
else{
    $widok = $mapa[$idp];

    $plik = __DIR__ . '/' . $widok['sciezka'];
    if (!is_file($plik) || !is_readable($plik)){
        http_response_code(500);
        $blad_serwera = true;
    }
    else {
        http_response_code(200);
        $blad_serwera = false;
	}
}

?>

<!DOCTYPE HTML>
<html lang="pl">
	<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<link href="./css/style.css" rel="stylesheet">
	<script src="./js/main.js" defer></script>
	<script src="./vendor/jquery-4.0.0.min.js" defer></script>
	<script src="./js/lab3.js" defer></script>
	<title>
		<?php
		if ($blad){
            echo "Nie znaleziono strony";
        }
        elseif ($blad_serwera){
            echo "Błąd serwera";
        }
        else{
    	echo htmlspecialchars($widok['tytul'], ENT_QUOTES, 'UTF-8');
		}
		?>
		</title>
	</head>

	<body>

	<header>

	<h1>Samochody na Sprzedaż</h1>
	
	<nav class="menu">

		<a href="./index.php?idp=glowna"<?php if (!$blad && !$blad_serwera && $idp == 'glowna') echo 'aria-current="page"'; ?>>Index</a>

		<a href="./index.php?idp=produkt"<?php if (!$blad && !$blad_serwera && $idp == 'produkt') echo 'aria-current="page"'; ?>>Produkt</a>

		<a href="./index.php?idp=kontakt"<?php if (!$blad && !$blad_serwera && $idp == 'kontakt') echo 'aria-current="page"'; ?>>Kontakt</a>

		<a href="./lab4.php">Katalog PHP</a>

		<a href="./index.php?idp=filmy"<?php if (!$blad && !$blad_serwera && $idp == 'filmy') echo 'aria-current="page"'; ?>>Filmy</a>

	</nav>


	</header>

	<main>

	<?php

	if ($blad) {
		echo "<h2>Nie znaleziono podstrony</h2>";
		echo '<a href="./index.php">Powrót na stronę główną</a>';
	}

	elseif ($blad_serwera){
		echo "<h2>Błąd serwera</h2>";
		echo '<a href="./index.php">Powrót na stronę główną</a>';
	}

	else{
		include $plik;
	}

	?>

	</main>	

	<footer>

	<section aria-label="Data i czas">
	<p id="wskazanie-czasu" aria-live="off">Ładowanie zegara…</p>
	<button type="button" id="uruchom-tykanie">Start zegara</button>
	<button type="button" id="wstrzymaj-tykanie">Stop zegara</button>
	</section>

	<?php
	$identyfikator_projektu = "sklep-demo";
	echo "<h2>Identyfikator projektu: $identyfikator_projektu</h2>";
	?>

	<p>Wersja projektu v1.5</p>

	</footer>

	</body>
</html>
