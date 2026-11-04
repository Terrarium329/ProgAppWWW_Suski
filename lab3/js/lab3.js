let togglepierwszy = false;

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

