<?php


include __DIR__. '/includes/naglowek.php';
require_once __DIR__ . '/includes/produkty.php';


$id = "0001";
echo 'PHP działa';
echo "<h1>Katalog PHP</h1>";
echo "<p>Identyfikator grupy: $id</p>";
echo "<a href='./index.html'>Index</a>";
echo "<br>";

$kategoria = "wszystkie";

if (isset($_GET["kategoria"])){
    $kategoria = $_GET["kategoria"];
}

$i = 0;
while ($i < count($produkty)){
    switch ($produkty[$i]["kategoria"]){
        case "ksiazki":
            $informacja_kategoria = "Książki";
            break;
        case "akcesoria":
            $informacja_kategoria = "Akcesoria";
            break;
        default:
            $informacja_kategoria = "Inne";
            break;
    }
    if ($kategoria == "wszystkie" || $produkty[$i]["kategoria"] == $kategoria){
            if ($produkty[$i]["stan"] == 0){
            $informacja_stan = "Niedostępny";
            }else if ($produkty[$i]["stan"] < 6){
                $informacja_stan = "Niski stan";
            }else{
                $informacja_stan = "Dostępny";
            }
        echo $produkty[$i]["id"] . ". " . $produkty[$i]["nazwa"] . " (" . $informacja_kategoria . ") - " . $informacja_stan . "<br>";
    }
    $i++;
}


?>

<form method="get" action="lab4.php">
    <select name="kategoria">
        <option value="wszystkie">Wszystkie</option>
        <option value="ksiazki">Książki</option>
        <option value="akcesoria">Akcesoria</option>
    </select>
    <button type="submit">Filtruj</button>
</form>
