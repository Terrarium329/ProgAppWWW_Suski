const samochody = [
    {
        id: "1",
        nazwa: "Mercedes",
        cena: 1000
    },
    {
        id: "2",
        nazwa: "Chrysler",
        cena: 2000
    },
    {
        id: "3",
        nazwa: "Ford",
        cena: 4000
    }
];


function zamówienie(cena, liczba) {
    return cena * liczba;
}

const poleSamochód = document.querySelector("#produkt");
const poleSztuki = document.querySelector("#ilosc");

