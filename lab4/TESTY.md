# Testy



Microsoft Edge

Wersja 156.0.4314.42 (Oficjalna kompilacja) (wersja 64-bitowa)


## Motyw i nawigacja

Oczekiwany wynik: Zmiana motywu utrzymuje się po odświeżeniu i zmianie podstrony; aria-pressed odpowiada stanowi.

Próba zakończona pomyślnie: strona zachowuje motyw po odświeżeniu.

## Start trzy razy potem Stop i Start

Oczekiwany wynik: Działa jeden interwał; Stop zatrzymuje aktualizację, a wznowienie pokazuje aktualny czas.

Próba zakończona pomyślnie: wznowienie zegara powoduje pokazanie aktualnego czasu.

## Fragment nazwy ze spacjami i inną wielkością liter

Oczekiwany wynik: Pasujące karty pozostają widoczne; licznik zgadza się z widokiem.

Próba zakończona pomyślnie: produkty są widoczne, licznik aktualizuje się i podaje faktyczną ilość wyszukanych produktów.

## Brak dopasowania i wyczyszczenie pola

Oczekiwany wynik: Pojawia się komunikat o braku wyników; wyczyszczenie przywraca trzy karty.

Próba zakończona pomyślnie: komunikat jest widoczny. Wyczyszczenie działa poprawnie i przywraca wszystkie produkty.

## Cena 1999 gr oraz ilość 3

Oczekiwany wynik: Wynik wynosi 59,97 zł; sprawdź samą funkcję obliczeniową również w konsoli.

Próba zakończona pomyślnie: wynik poprawny.

## Ilość pusta 0 6 oraz 1,5

Oczekiwany wynik: Wycena nie pokazuje błędnej wartości; formularz nie przechodzi do poprawnego podsumowania.

Próba zakończona pomyślnie: wycena nie jest aktywowana jeżeli liczba sztuk nie jest 1-5 i nie jest liczbą całkowitą.

## Dziesięć spacji oraz tekst <b>Test</b>

Oczekiwany wynik: Same spacje są odrzucone; poprawna wiadomość ze znacznikami jest pokazana jako dosłowny tekst.

Próba zakończona pomyślnie: spacje zostały odrzucone, a znaczniki są trkatowane jako zwykłe znaki.

## Klawiatura widoki i wyłączony JavaScript

Oczekiwany wynik: Kontrolki działają klawiaturą przy 375 i 1280 px; bez JS katalog, treść i menu pozostają dostępne.

Próba zakończona pomyślnie: strona reaguje na enter, tab, tab+shift, spację w odpowiednich miejscach. Również przy 375 i 1280 px. Bez JS katalog działa poprawnie, treść i menu są dostępne.