# Readme

Wersja projektu v1.5

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

## Pseudokody formularzy PHP

Formularz GET:

```text
if (pobrano_kategorię_z_formularza){
    if (kategoria != książki && kategoria != akcesoria && kategoria != wszystkie){
        komunikat = "Błędna wartość: wyświetlanie wszystkich produktów"
    }else{
        kategoria_zmienna = kategoria
    }
}
```

Formularz POST:

```text
if (pobrano_produkt_z_formularza && pobrano_ilość_z_formularza){
    if (produkt_jest_string && ilość_jest_string){
        produkt_id = weryfikacja_liczby_całkowitej(produkt)
        ilość = weryfikacja_liczby_całkowitej(ilość)

        if (produkt_id !== false && ilość != false){
            znaleziony = null

            for (i=0; i<count(produkty); i++){
                if (produkty[i].id == produkt.id){
                    znaleziony = produkty[i]
                    break
                }
            }

            if (znaleziony != null && produkt_id > 0 && ilość >= 1 && ilość <= 5){
                if (ilość <= znaleziony.stan){
                    SESJA.ostatni_wybór = produkt(produkt_id, ilość)
                    header(lab4.php, kod 303)
                    exit()
                }else{
                    $wiadomosc_post = "Zbyt niski stan produktu"
                    kod_odpowiedzi_http(400)
                }
            }else{
                wiadomość = "Nieprawidłowe dane formularza"
                kod_odpowiedzi_http(400)
            }

        }else{
            wiadomość = "Nieprawidłowe dane formularza"
            kod_odpowiedzi_http(400)
        }
    }else{
        wiadomość = "Nieprawidłowe dane formularza"
        kod_odpowiedzi_http(400)
    }
}
```

## Sprawdzenie formularzy PHP

### Filtr GET

Oczekiwany wynik: `?kategoria=ksiazki` pokazuje tylko książki. Nieznana kategoria lub `?kategoria[]=ksiazki` pokazuje pełną listę i komunikat.

Próba zakończona pomyślnie: Filtrowanie książek działa prawidłowo. Podanie nieznanej kategorii oraz tablicy zamiast tekstu powoduje wyświetlenie pełnego katalogu i komunikatu.

### Poprawny POST i odświeżenie

Oczekiwany wynik: Wybierz dostępny produkt i poprawną ilość. W Network widać POST 303, potem GET 200. Po odświeżeniu i zmianie filtra zapisany wybór pozostaje widoczny.

Próba zakończona pomyślnie: Wybór produktu został zapisany prawidłowo. Przekierowanie 303 i ponowne pobranie strony metodą GET działają poprawnie. Po odświeżeniu strony i zmianie kategorii zapisany wybór nadal jest widoczny.

### Błędne wartości POST

Oczekiwany wynik: Sprawdź ilość 0, 6, 2.5, 2abc, brak pola, tablicę i nieznany produkt. Każda próba daje HTTP 400 i pozostawia poprzedni wybór.

Próba zakończona pomyślnie: Wszystkie nieprawidłowe dane są odrzucane. Serwer zwraca kod HTTP 400, wyświetla komunikat o błędzie i nie nadpisuje wcześniejszego wyboru w sesji.

### Stan magazynowy

Oczekiwany wynik: Dla produktu ze stanem 1 spróbuj wybrać 2 sztuki. Serwer odrzuca wybór, mimo że 2 mieści się w przedziale 1–5.

Próba zakończona pomyślnie: Serwer prawidłowo odrzuca próbę wyboru 2 sztuk produktu, którego stan wynosi 1.

### Odrębna sesja i zabezpieczenie tekstu HTML

Oczekiwany wynik: W nowej sesji, np. w osobnym oknie prywatnym, nie ma wyboru. Nazwa testowa `<b>Test</b>` wyświetla się jako tekst; przywróć zwykłą nazwę.

Próba zakończona pomyślnie: Nowa sesja nie zawiera wcześniejszego wyboru. Tekst `<b>Test</b>` jest wyświetlany jako zwykły tekst.

### Strona po zmianie ścieżek

Oczekiwany wynik: Otwórz stronę główną i podstrony. Działają style, obrazy, linki i funkcje z lab3, w tym animacje i żądanie do status.php.

Próba zakończona pomyślnie: Wszystkie strony otwierają się prawidłowo. Style, obrazy, linki, animacje oraz żądanie do `status.php` działają poprawnie.

## Pseudokod odczytu strony

```text
idp = pobierz_parametr_z_adresu("idp")

zapytanie_menu = pobierz alias i page_title z page_list gdzie status = 1 uporządkuj według id

menu = pobierz_wszystkie_wyniki(zapytanie_menu)

if (!idp_jest_string){
    blad = true
}else{
    if (idp == ''){
        idp = "glowna"
    }

    dlugosc = długość(idp)

    if (dlugosc < 1 || dlugosc > 20){
        blad = true
    }else{
        for (i = 0; i < dlugosc; i++){
            znak = idp[i]

            if (!(znak_jest_małą_literą || znak_jest_cyfrą)){
                blad = true
                break
            }
        }
    }

    if (!blad){
        strona = PokazPodstrone(baza_danych, idp)

        if (strona == null){
            blad = true
        }else{
            alias = idp
        }
    }
}
```


## Sprawdzenie lab6

### Odczyt i aktualizacja treści

Oczekiwany wynik: index.php i ?idp= otwierają glowna z HTTP 200. po Zmianie treści w phpMyAdmin: po odświeżeniu widać zmianę bez edycji plików PHP i HTML.

Próba zakończona pomyślnie: strona główna otwiera się poprawnie pod oboma adresami

### Nowa strona i menu

Oczekiwany wynik: Link pojawia się w menu i otwiera stronę bez zmiany kodu PHP. Aktywny link jest oznaczony.

Próba zakończona pomyślnie: kliknięcie linku otworzyło nową podstronę bez konieczności modyfikowania kodu PHP

### Szkic i publikacja

Oczekiwany wynik: Rekord ze statusem 0 znika z menu, a jego bezpośredni adres zwraca 404. Po zmianie statusu na 1 jest widoczny. Próba dodania identycznego aliasu jest odrzucana przez bazę.

Próba zakończona pomyślnie: strona ze statusem 0 nie pojawiała się w menu, a próba otwarcia jej bezpośrednim adresem zwraca HTTP 404. Nowy rekord z identycznym aliasem nie jest akceptowany.

### Błędne dane w adresie

Oczekiwany wynik: ?idp=nieznana i ?idp[]=filmy dają 404. Jako idp sprawdź też ../cfg.php oraz tekst ' OR 1=1--. Każda próba daje 404 bez ostrzeżeń PHP.

Próba zakończona pomyślnie: Wszystkie nieprawidłowe adresy zwróciły HTTP 404 bez ostrzeżenie PHP.

### Awaria bazy

Oczekiwany wynik: Strona zwraca 500 bez szczegółów technicznych, a lokalny log pozwala ustalić przyczynę.

Próba zakończona pomyślnie: Po zatrzymaniu MySQL strona zwróciła HTTP 500 i wyświetliła komunikat o błędzie serwera

### Funkcje po migracji

Oczekiwany wynik: Działają style, obrazy, animacje, AJAX i trzy filmy. Katalog filtruje produkty i zapisuje wybór: POST 303, potem GET 200. Wybór pozostaje po przejściu między podstronami.

Próba zakończona pomyślnie: Style, obrazy, animacje, AJAX oraz filmy działają prawidłowo. Katalog poprawnie filtruje produkty i zapisuje wybór użytkownika

### Odtworzenie środowiska

Oczekiwany wynik: projekt uruchamia się zgodnie z README, także z polskimi znakami.

Próba zakończona pomyślnie: projekt uruchomił się poprawnie, a wszystkie podstrony i polskie znaki wyświetlały się prawidłowo.
