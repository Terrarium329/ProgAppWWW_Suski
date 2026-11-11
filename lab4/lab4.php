<?php


include __DIR__. '/includes/naglowek.php';
require_once __DIR__ . '/includes/produkty.php';


$id = "0001";
echo 'PHP działa';
echo "<h1>Katalog PHP</h1>";
echo "<p>Identyfikator grupy: $id</p>";
echo "<a href='./index.html'>Index</a>";
echo "<br>";

$i = 0;
while ($i < count($produkty)){
    if ($produkty[$i]["stan"] == 0){
        $informacja_stan = "Niedostępny";
    }else if ($produkty[$i]["stan"] < 6){
        $informacja_stan = "Niski stan";
    }else{
        $informacja_stan = "Dostępny";
    }
    switch ($produkty[$i]["kategoria"]){
        case "książka":
            $informacja_kategoria = "Książki";
            break;
        case "akcesoria":
            $informacja_kategoria = "Akcesoria";
            break;
        default:
            $informacja_kategoria = "Inne";
            break;
    }
    echo $produkty[$i]["id"] . ". " . $produkty[$i]["nazwa"] . " (" . $informacja_kategoria . ") - " . $informacja_stan . "<br>";
    $i++;
}



?>