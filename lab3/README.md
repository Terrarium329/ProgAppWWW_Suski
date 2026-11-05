# Readme



## Instrukcja uruchomienia



Katalog z plikami należy umieścić na swoim dysku, a następnie otworzyć plik index.html bezpośrednio lub używając wiersza poleceń, otwierając serwer lokalny za pomocą polecenia python -m http.www 8000 i wchodząc na adres serwera http://localhost:8000/

Strona składa się z HTML, CSS, JavaScript.
Wspólny  plik js/main.js dla wszystkich plików html.
JavaScript uruchomiony z opóxnieniem defer (wstrzymaniem) nie blokując załadowania html.

## Działanie Javascript

W głownym pliku main.js znajdują się funkcje Motyw, Zegar, Wyszukiwanie, Formularz.
Każda funkcja odpowiada za oddzielną część funkcjonalną strony.
Wybrany motyw ciemny/jasny zapisany jest w localStorage, działa po odświerzeniu i przeładowaniu stron.
DOM ładuje się poprawnie i dzięki temu funkcje mogą zmieniać określone obiekty strony bez przeładowania stron.




## Źródła grafik



Mercedes A150 - https://www.youtube.com/watch?v=luJaiksWzcw



Chrysler PT Cruiser - https://www.parkers.co.uk/chrysler/pt-cruiser/cabriolet/review/



Ford Interceptor - https://bellesmachines.com/ford-falcon-mad-max/




## Sprawdzenie animacji

### Szybkie kliknięcia A

Oczekiwany wynik: po resecie i 10 kliknięciach stan bazowy; po zakończeniu klikania animacje nie odtwarzają zaległej kolejki.

Próba zakończona pomyślnie: po zakończeniu klikania stan bazowy i brak kolejki kolejnych animacji.

### Kursor i fokus B

Oczekiwany wynik: wyjście kursora przy zachowanym fokusie nie zmniejsza obiektu. Utrata obu stanów przywraca rozmiar bazowy.

Próba zakończona pomyślnie: fokus po wyjściu kursora sprawia, że animacja na przycisku B nadal działa. Rozmiar bazowy powraca dopiero po zmianie obu stanów na false.

### Limit i reset C

Oczekiwany wynik: pięć kroków daje 260 × 140 px. Dalsze kliknięcia nie powiększają obiektu; reset podczas animacji zeruje stan.

Próba zakończona pomyślnie: po osiągnięciu maksymalnych rozmiarów po 5 krokach nie jest możliwe dalsze powiększenie. Reset działa prawidłowo.

### Klawiatura i ruch

Oczekiwany wynik: Tab dociera do przycisków; Enter i Spacja obsługują A, C i reset. Ograniczenie ruchu wyłącza przejścia, zachowując funkcje.

Próba zakończona pomyślnie: Ruch za pomocą Tabu oraz enter i spacja działaja poprawnie. Ograniczenie ruchu nie wyłączyło funkcji, tylko przejścia.

Motyw, zegar i formularz działają poprawnie.

## Testy w Network

Żądanie prawidłowo posiada metodę GET oraz kod 200 i odpowiedź 'PHP działa'. Zmiana nazwy status.php na astatus.php sprawiła, że żadanie miało kod błędu 404. Po przywróceniu starej nazwy żądanie działa prawidłowo. 

Po zmianie prędkości sieci na Slow 4G przycisk sprawdź serwer jest po wciśnięciu widocznie wyłączony, a wynik serwera pokazuje informację o ładowaniu.
