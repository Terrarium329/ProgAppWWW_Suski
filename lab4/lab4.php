<?php
session_start();

require_once __DIR__ . '/includes/produkty.php';




$kategoria = "wszystkie";
$komunikat = "";

if (isset($_GET["kategoria"])){
    if ($_GET["kategoria"] != "ksiazki" && $_GET["kategoria"] != "akcesoria" && $_GET["kategoria"] != "wszystkie"){
        $komunikat = "Błędna wartość: wyświetlanie wszystkich produktów";
    }else{
        $kategoria = $_GET["kategoria"];
    }
}




$wiadomosc_post = "";

if (isset($_POST["produkt"]) && isset($_POST["ilosc"])){
    if (is_string($_POST["produkt"]) && is_string($_POST["ilosc"])){
        $produktId = filter_var($_POST["produkt"], FILTER_VALIDATE_INT);
        $ilosc = filter_var($_POST["ilosc"], FILTER_VALIDATE_INT);

        if ($produktId !== false && $ilosc !== false){

            $znaleziony = null;

            for ($i = 0; $i < count($produkty); $i++) {
                if ($produkty[$i]["id"] == $produktId){
                    $znaleziony = $produkty[$i];
                    break;
                }
            }

            if ($znaleziony != null && $produktId > 0 && $ilosc >= 1 && $ilosc <= 5){
                if ($ilosc <= $znaleziony["stan"]){
                    $_SESSION["ostatni_wybor"] = ["produkt" => $produktId, "ilosc" => $ilosc];
                    header("Location: lab4.php", 303);
                    exit;
                }else{
                    $wiadomosc_post = "Zbyt niski stan produktu";
                    http_response_code(400);
                }

            }else{
                $wiadomosc_post = "Nieprawidłowe dane formularza";
                http_response_code(400);
            }

        }else{
            $wiadomosc_post = "Nieprawidłowe dane formularza";
            http_response_code(400);
        }
    }else{
        $wiadomosc_post = "Nieprawidłowe dane formularza";
        http_response_code(400);
    }
}
    

include __DIR__. '/includes/naglowek.php';

$id = "0001";
echo "<h2>Katalog PHP</h2>";
echo "<p>Identyfikator grupy: $id</p>";
echo "<a href='./index.html'>Index</a>";
echo "<br>";


?>




<form method="get" action="lab4.php">
    <label>Kategorie:</label>
    <select name="kategoria">
        <option value="wszystkie">Wszystkie</option>
        <option value="ksiazki">Książki</option>
        <option value="akcesoria">Akcesoria</option>
    </select>
    <button type="submit">Filtruj</button>
</form>

<?php
echo "<p>$komunikat</p>";
?>

<form method="post" action="lab4.php">
    <label>Produkt:</label>
    <select name="produkt">
        <?php
        for ($i = 0; $i < count($produkty); $i++){
            echo '<option value="' . $produkty[$i]['id'] . '">';
            echo htmlspecialchars($produkty[$i]['nazwa'], ENT_QUOTES, "UTF-8");
            echo "</option>";
        }
        ?>
    </select>
    <br>
    <label>Ilość:</label>
    <select name="ilosc">
        <?php
        for ($i = 1; $i <= 5; $i++){
            echo "<option value='$i'>$i</option>";
        }
        ?>
    </select>
    <br>
    <button type="submit">Zapisz wybór</button>
</form>

<?php


echo "<p>$wiadomosc_post</p>";
echo "<br>";


if (isset($_SESSION["ostatni_wybor"])){

    $id = $_SESSION["ostatni_wybor"]["produkt"];
    $ilosc = $_SESSION["ostatni_wybor"]["ilosc"];
    $nazwa = "";

    for ($i = 0; $i < count($produkty); $i++){

        if ($produkty[$i]["id"] == $id) {
            $nazwa = $produkty[$i]["nazwa"];
            break;
        }

    }

    echo "Produkt: " . $nazwa . ", Ilość: " . $ilosc;
    echo "<br>";

}else{
    echo "Oczekiwanie na wybór produktu";
    echo "<br>";
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
        echo $produkty[$i]["id"] . ". " . htmlspecialchars($produkty[$i]['nazwa'], ENT_QUOTES, "UTF-8") . " (" . $informacja_kategoria . ") - " . $informacja_stan . "<br>";
    }
    $i++;
}


?>

