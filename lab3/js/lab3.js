// PSEUDOKOD ANIMACJI:

// toggle = false
// animacja(){
//     stop_aktualne_animacje(przycisk)
//     if (!toggle){
//         toggle = true
//         przycisk.aria-pressed = true
//         animuj(przycisk, powiększ, 300 ms)
//     }else{
//         toggle = false
//         przycisk.aria-pressed = false
//         animuj(przycisk, zmniejsz, 300 ms)
//     }
// }
// gdy(kliknięto przycisk){
//     animacja()
// }

let togglepierwszy = false;

function animacjaPierwszego() {
    $("#pierwszy").stop(true, false);
    if (!togglepierwszy){
        togglepierwszy = true;
        $("#pierwszy").attr("aria-pressed", true);
        $("#pierwszy").animate({
            width: "240px",
            height: "130px"
        },300);
    }else{
        togglepierwszy = false;
        $("#pierwszy").attr("aria-pressed", false);
        $("#pierwszy").animate({
            width: "160px",
            height: "90px"
        },300);
    }
}



$("#pierwszy").on("click", animacjaPierwszego);


// PSEUDOKOD ANIMACJI:

// fokus = false
// kursor = false
// animacja(){
//     stop_aktualne_animacje(przycisk)
//     if (fokus OR kursor){
//         animuj(przycisk, powiększ, 300 ms)
//     }else{
//         animuj(przycisk, zmniejsz, 300 ms)
//     }
// }

// gdy(najechano kursorem na przycisk){
//     kursor = true
//     animacja()
// }
// gdy(zabrano kursor z przycisku){
//     kursor = false
//     animacja()
// }
// gdy(fokus na przycisku){
//     fokus = true
//     animacja()
// }
// gdy(fokus z przycisku){
//     fokus = false
//     animacja()
// }


let fokusdrugi = false;
let kursordrugi = false;

function animacjaDrugiego() {
    $("#drugi").stop(true, false);
    if (kursordrugi || fokusdrugi){
        $("#drugi").animate({
            width: "220px",
            height: "120px"
        },300);
    }else{
        $("#drugi").animate({
            width: "160px",
            height: "90px"
        },300);
    }
}




$("#drugi").on("mouseenter",function(){
    kursordrugi = true;
    animacjaDrugiego();
});

$("#drugi").on("mouseleave",function(){
    kursordrugi = false;
    animacjaDrugiego();
});

$("#drugi").on("focus",function(){
    fokusdrugi = true;
    animacjaDrugiego();
});

$("#drugi").on("blur",function(){
    fokusdrugi = false;
    animacjaDrugiego();
});


// PSEUDOKOD ANIMACJI:

// etap = 0
// animacja(){
//     if (przycisk jest animowany){
//         return
//     }
//     if (etap >= 5){
//         return
//     }
//     etap++
//     szerokosc = 160 + (etap * 20)
//     wysokosc = 90 + (etap * 10)
//     animuj(przycisk, powieksz do szerokosci i wysokosci, 300 ms)
//     aktualizuj_licznik()
// }
// gdy(kliknięto przycisk){
//     animacja()
// }

let etap = 0;

function animacjaTrzeciego(){
    if ($("#trzeci").is(":animated")) {
        return;
    }
    if (etap >= 5) {
        return;
    }
    etap++;
    let szerokosc = 160 + (etap * 20);
    let wysokosc = 90 + (etap * 10);
    $("#trzeci").animate({
        width: szerokosc + "px",
        height: wysokosc + "px"
    }, 300);
    $("#licznik").text("Etap: " + etap);
}

$("#trzeci").on("click",animacjaTrzeciego);
