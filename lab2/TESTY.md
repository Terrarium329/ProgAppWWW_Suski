# Testy



Microsoft Edge

Wersja 156.0.4314.42 (Oficjalna kompilacja) (wersja 64-bitowa)



## Struktura



index.html - potrójne ostrzeżenie dotyczące używania nagłówka h1 po raz kolejny (pojawia się on łącznie 4 razy, ponieważ oprócz jako główny nagłówek strony jest używany w nazwach produktów).



produkt.html - brak ostrzeżeń



kontakt.html - brak ostrzeżeń



Po wyłączeniu stylów we wszystkich 3 plikach zniknęły marginesy dzielące elementy strony od brzegów. Dodatkowo w index.html przewidywalnie zniknęły ramki i układ 3 kolumn.



## Widoki



Oczekiwane rezultaty: brak przycięć i odpowiednie liczby kolumn.



W przypadku szerokości 375px jedna kolumna produktów bez przycięcia

W przypadku szerokości 1280px 3 kolumny produktów bez przycięcia



768px to pierwsza liczba pikseli szerokości, gdzie pojawiają się 3 kolumny kart zamiast 1



## Klawiatura



Oczekiwane rezultaty: możliwość przechodzenia za pomocą Tab oraz Shift+Tab i aktywowania linka Enterem. 



Próba zakończona pomyślnie. Fokus jest widoczny. Kliknięcie etykiety aktywuje właściwy link.



## Walidacja



Oczekiwane rezultaty: próby z nieprawidłowymi danymi powinny zakończyć się niepowodzeniem.



Próba z błędnym emailem: zapytanie niewysłane, okienko z wiadomością o braku znaku '@'.



Próba z liczbą sztuk 0: zapytanie niewysłane, okienko z wiadomością o zbyt małej liczbie sztuk.



Próba z liczbą sztuk 6: zapytanie niewysłane, okienko z wiadomością o zbyt dużej liczbie sztuk.



Próba z wiadomością krótszą niż 10 znaków: zapytanie niewysłane, okienko z wiadomością o koniecznym wydłużeniu wiadomości do co najmniej 10 znaków.



Pomyślna próba wysłania zapytania w przypadku poprawnych danych. Wartości zapytania w URL:



\[...]/kontakt.html?email=mazurskie.41%40gmail.com\&produkt=1\&ilosc=5\&wiadomosc=Dzie%C5%84+dobry%2C+prosz%C4%99+o+kontakt



## Eksperyment



bez name="email": 

\[...]/kontakt.html?produkt=1\&ilosc=1\&wiadomosc=1111111111111111111111



z name="email":

\[...]/kontakt.html?email=mazurskie.41%40gmail.com\&produkt=1\&ilosc=1\&wiadomosc=1111111111111111111111



Wartoś emaila nie została w ogóle wysłana w przypadku braku name="email". Do tego bez name="email" nie wyświetlają się żadne podpowiedzi emailów podczas wpisywania.



Dane w DevTools:



Request URL: http://localhost:8000/kontakt.html?email=mazurskie.41%40gmail.com\&produkt=1\&ilosc=1\&wiadomosc=11111111111111111111



Request Method: GET



