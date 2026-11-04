let togglepierwszy = false;
let toggledrugi = false;
let toggletrzeci = false;

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

function animacjaDrugiego() {
    $("#drugi").stop(true, false);
    if (!toggledrugi){
        toggledrugi = true;
        $("#drugi").attr("aria-pressed", true);
        $("#drugi").animate({
            width: "240px",
            height: "130px"
        },300);
    }else{
        toggledrugi = false;
        $("#drugi").attr("aria-pressed", false);
        $("#drugi").animate({
            width: "160px",
            height: "90px"
        },300);
    }
}

function animacjaTrzeciego() {
    $("#trzeci").stop(true, false);
    if (!toggletrzeci){
        toggletrzeci = true;
        $("#trzeci").attr("aria-pressed", true);
        $("#trzeci").animate({
            width: "240px",
            height: "130px"
        },300);
    }else{
        toggletrzeci = false;
        $("#trzeci").attr("aria-pressed", false);
        $("#trzeci").animate({
            width: "160px",
            height: "90px"
        },300);
    }
}

$("#pierwszy").on("click", animacjaPierwszego);
$("#drugi").on("click", animacjaDrugiego);
$("#trzeci").on("click", animacjaTrzeciego);
