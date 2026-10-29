
const cennik = [
    { 
        id: "1",
        nazwa: "Mercedes A 150",
        cenaGrosze: 100000 
    },
    { 
        id: "2",
        nazwa: "Chrysler Pt Cruiser Kabriolet", 
        cenaGrosze: 200000 
    },
    { 
        id: "3", 
        nazwa: "Ford Interceptor", 
        cenaGrosze: 400000 
    }
];

function wartoscZamowienia(cenaGrosze, sztuk) {
    return cenaGrosze * sztuk;
}


function Motyw(){
    const przycisk = document.querySelector("#motyw");
    if (!przycisk) {
        return;
    }

    const KLUCZ = "motyw";
    const html = document.documentElement;

    function ustaw(nazwa) {
        html.setAttribute("data-theme", nazwa);
        przycisk.setAttribute("aria-pressed", nazwa === "dark" ? "true" : "false");
    }

    const zapisany = localStorage.getItem(KLUCZ);
    ustaw(zapisany === "dark" ? "dark" : "light");

    function przelacz() {
        const nowy = html.getAttribute("data-theme") === "dark" ? "light" : "dark";
        ustaw(nowy);
        localStorage.setItem(KLUCZ, nowy);
    }

    przycisk.addEventListener("click", przelacz);

}

function Zegar() {
    const wskazanie = document.querySelector("#wskazanie-czasu");
    const guzikUruchom = document.querySelector("#uruchom-tykanie");
    const guzikWstrzymaj = document.querySelector("#wstrzymaj-tykanie");
    if (!wskazanie || !guzikUruchom || !guzikWstrzymaj) {
        return;
    }

    const formaterDnia = new Intl.DateTimeFormat("pl-PL", {
        day: "2-digit",
        month: "2-digit",
        year: "numeric"
    });

    const formaterGodziny = new Intl.DateTimeFormat("pl-PL", {
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: false
    });

    let idOkresCzasu = null;

    function wypis() {
        const chwila = new Date();
        wskazanie.textContent = formaterDnia.format(chwila) + " " + formaterGodziny.format(chwila);
    }

    function startZegar() {
        if (idOkresCzasu !== null) {
            return;
        }
        wypis();
        idOkresCzasu = setInterval(wypis, 1000);
    }

    function przerwijTykanie() {
        if (idOkresCzasu === null) {
            return;
        }
        clearInterval(idOkresCzasu);
        idOkresCzasu = null;
    }

    wypis();
    guzikUruchom.addEventListener("click", startZegar);
    guzikWstrzymaj.addEventListener("click", przerwijTykanie);
}


function Wyszukiwanie() {
    const poleFrazy = document.querySelector("#fraza-katalogu");
    const raport = document.querySelector("#raport-filtru");
    const oferty = document.querySelectorAll(".karta");
    if (!poleFrazy || !raport) {
        return;
    }

    function filtruj() {
        const szukanefraza = poleFrazy.value.trim().toLowerCase();
        let liczbaaut = 0;

        oferty.forEach(function (oferta) {
            const naglowek = oferta.querySelector(".nazwa-oferty");
            const nazwa = naglowek ? naglowek.textContent.toLowerCase() : "";
            const pasuje = nazwa.includes(szukanefraza);
            oferta.hidden = !pasuje;
            if (pasuje) {
                liczbaaut += 1;
            }
        });

        if (liczbaaut === 0) {
            raport.textContent = "Brak wyników";
        } else {
            raport.textContent = "Liczba wyników: " + liczbaaut;
        }
    }

    poleFrazy.addEventListener("input", filtruj);
    filtruj();
}

function Formularz() {
    const ankieta = document.querySelector("#ankieta-zapytania");
    const wyborAuta = document.querySelector("#produkt");
    const poleIlosci = document.querySelector("#ilosc");
    const poleTresci = document.querySelector("#wiadomosc");
    const tablicaWyceny = document.querySelector("#tablica-wyceny");
    const uwagaTresci = document.querySelector("#uwaga-tresci");
    const podsumowanie = document.querySelector("#wynik");
    if (!ankieta || !wyborAuta || !poleIlosci || !poleTresci || !tablicaWyceny || !uwagaTresci || !podsumowanie) {
        return;
    }

    const groszeNaZlotowki = new Intl.NumberFormat("pl-PL", {
        style: "currency",
        currency: "PLN"
    });

    const MIN_SZTUK = 1;
    const MAX_SZTUK = 5;
    const MIN_ZNAKOW_TRESCI = 10;

    function znajdzAuto() {
        return cennik.find(function (pozycja) {
            return pozycja.id === wyborAuta.value;
        }) || null;
    }

    function odczytajIlosc() {
        const surowa = poleIlosci.value.trim();
        if (surowa === "") {
            return null;
        }
        const liczba = Number(surowa);
        if (!Number.isInteger(liczba) || liczba < MIN_SZTUK || liczba > MAX_SZTUK) {
            return null;
        }
        return liczba;
    }

    function odswiez() {
        const auto = znajdzAuto();
        const sztuk = odczytajIlosc();

        if (!auto) {
            tablicaWyceny.textContent = "Wybierz produkt z listy.";
            return;
        }
        if (sztuk === null) {
            tablicaWyceny.textContent = "Podaj całkowitą liczbę sztuk od " + MIN_SZTUK + " do " + MAX_SZTUK + ".";
            return;
        }

        const grosze = wartoscZamowienia(auto.cenaGrosze, sztuk);
        tablicaWyceny.textContent = "Wartość zapytania: " + groszeNaZlotowki.format(grosze / 100);
    }

    function wyczysc() {
        podsumowanie.replaceChildren();
    }

    function sprawdzTresc() {
        const tresc = poleTresci.value.trim();
        if (tresc.length < MIN_ZNAKOW_TRESCI) {
            uwagaTresci.textContent = "Wiadomość musi mieć co najmniej " + MIN_ZNAKOW_TRESCI + " znaków bez liczenia spacji na początku i końcu.";
            poleTresci.setAttribute("aria-invalid", "true");
            return false;
        }
        uwagaTresci.textContent = "";
        poleTresci.removeAttribute("aria-invalid");
        return true;
    }

    function dodaj(etykieta, wartosc) {
        const akapit = document.createElement("p");
        const mocne = document.createElement("strong");
        mocne.textContent = etykieta + ": ";
        akapit.append(mocne, wartosc);
        podsumowanie.append(akapit);
    }

    function addZapytanie(zdarzenie) {
        zdarzenie.preventDefault();
        wyczysc();

        const auto = znajdzAuto();
        const sztuk = odczytajIlosc();
        const trescPoprawna = sprawdzTresc();

        if (!auto || sztuk === null) {
            odswiez();
            return;
        }
        if (!trescPoprawna) {
            poleTresci.focus();
            return;
        }

        const grosze = wartoscZamowienia(auto.cenaGrosze, sztuk);
        const naglowek = document.createElement("h3");
        naglowek.textContent = "Podsumowanie zapytania";
        podsumowanie.append(naglowek);
        dodaj("Produkt", auto.nazwa);
        dodaj("Liczba sztuk", String(sztuk));
        dodaj("Wartość", groszeNaZlotowki.format(grosze / 100));
        dodaj("Wiadomość", poleTresci.value.trim());
    }

    wyborAuta.addEventListener("change", odswiez);
    wyborAuta.addEventListener("change", wyczysc);
    poleIlosci.addEventListener("input", odswiez);
    poleIlosci.addEventListener("input", wyczysc);
    poleTresci.addEventListener("input", wyczysc);
    poleTresci.addEventListener("input", function() {
        if (poleTresci.hasAttribute("aria-invalid")) {
            sprawdzTresc();
        }
    });
    ankieta.addEventListener("submit", addZapytanie);

    odswiez();
}


Motyw();
Zegar();
Wyszukiwanie();
Formularz();
