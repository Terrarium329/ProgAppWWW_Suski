<?php

require_once __DIR__ . '/cfg.php';

try{
	require_once __DIR__ . '/showpage.php';
	$idp = $_GET['idp'] ?? '';

	$strona = null;
	$alias = '';
	$blad = false;
	$bladserwera = false;
	if (!is_string($idp)){
		$blad = true;
	}else{
		if ($idp === ""){
			$idp = "glowna";
		}
		$dlugosc = strlen($idp);

		if ($dlugosc < 1 || $dlugosc > 20){
			$blad = true;
		}else{
			for ($i=0;$i<$dlugosc;$i++){
				$znak = $idp[$i];

				if (!(($znak >= "a" && $znak <= "z") || ($znak >= "0" && $znak <= "9"))){
					$blad = true;
					break;
				}
			}
		}

		if (!$blad){
			$strona = PokazPodstrone($pdo, $idp);
			if ($strona === null){
				$blad = true;
			}else{
				$alias = $idp;
			}
		}
		
	}
}catch(PDOException $e){
	error_log($e->getMessage());
    $bladserwera = true;
}

if ($bladserwera){
	http_response_code(500);
}
elseif ($blad){
	http_response_code(404);
}else{
	http_response_code(200);
}

$zapytanieMenu = $pdo->query("SELECT alias, page_title FROM page_list WHERE status = 1 ORDER BY id");
$menu = $zapytanieMenu->fetchAll();

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
		if ($bladserwera){
			echo "Błąd serwera";
		}
		elseif ($blad){
            echo "Nie znaleziono strony";
		}
        else{
    		echo htmlspecialchars($strona['page_title'], ENT_QUOTES, 'UTF-8');
		}
		?>
		</title>
	</head>

	<body>

	<header>

	<h1>Samochody na Sprzedaż</h1>
	
	<nav class="menu">

		<?php foreach ($menu as $element): ?>
			<a href="./index.php?idp=<?php echo $element['alias']; ?>"
        	<?php if ($alias === $element['alias']) echo 'aria-current="page"'; ?>>
			<?php echo htmlspecialchars($element['page_title'], ENT_QUOTES, 'UTF-8'); ?>
			</a>
		<?php endforeach; ?>

		<a href="./lab4.php">Katalog PHP</a>

	</nav>


	</header>

	<main>

	<?php

	if ($bladserwera){
		echo "<h2>Błąd serwera</h2>";
	}
	elseif ($blad) {
		echo "<h2>Nie znaleziono podstrony</h2>";
		echo '<a href="./index.php">Powrót na stronę główną</a>';
	}else{
		echo "<h2>" . $strona['page_title'] . "</h2>";
		echo $strona['page_content'];
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
