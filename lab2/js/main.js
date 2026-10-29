
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

// function Zegar()

// function Wyszukiwanie() 

// function Formularz() 


Motyw();
// Zegar();
// Wyszukiwanie();
// Formularz();
