
const samochody = [
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

function zamowienie(cenaGrosze, liczba) {
    return cenaGrosze * liczba;
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

// function Wyszukiwanie() 

// function Formularz() 


Motyw();
Zegar();
// Wyszukiwanie();
// Formularz();
