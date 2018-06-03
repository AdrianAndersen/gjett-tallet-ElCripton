// Henter roten til databasen
const database = firebase.database();

// Henter HTML-elementer
var inpGjetting = document.getElementById("inpGjetting");
var minVal, maxVal, vinnertall;

const startside = document.getElementById("startside");
const ingameside = document.getElementById("ingameside");
const resultatside = document.getElementById("resultatside");

// Vanskelighetsgradsknapper
const knappDifLett = document.getElementById("knappDifLett");
const knappDifMiddels = document.getElementById("knappDifMiddels");
const knappDifVanskelig = document.getElementById("knappDifVanskelig");
const knappDifGodTid = document.getElementById("knappDifGodTid");
const knappDifEgendefinert = document.getElementById("knappDifEgendefinert");

// Input-elementer
const inpMinValVinnertall = document.getElementById("inpMinValVinnertall");
const inpMaxValVinnertall = document.getElementById("inpMaxValVinnertall");

// Fyller inn input felt med forhåndsdefinerte verdier
function setVanskelighetsgradLett(event) {
    if (event) {
        event.preventDefault();

        inpMinValVinnertall.value = "-10";
        inpMaxValVinnertall.value = "10";
    }

    knappDifLett.className = "difknapper difknappValgt";
    knappDifMiddels.className = "difknapper";
    knappDifVanskelig.className = "difknapper";
    knappDifGodTid.className = "difknapper";
    knappDifEgendefinert.className = "kol-2 difknapper";
}
function setVanskelighetsgradMiddels(event) {
    if (event) {
        event.preventDefault();

        inpMinValVinnertall.value = "-100";
        inpMaxValVinnertall.value = "100";
    }
    knappDifLett.className = "difknapper";
    knappDifMiddels.className = "difknapper difknappValgt";
    knappDifVanskelig.className = "difknapper";
    knappDifGodTid.className = "difknapper";
    knappDifEgendefinert.className = "kol-2 difknapper";
}
function setVanskelighetsgradVanskelig(event) {
    if (event) {
        event.preventDefault();

        inpMinValVinnertall.value = "-1000";
        inpMaxValVinnertall.value = "1000";
    }
    knappDifLett.className = "difknapper";
    knappDifMiddels.className = "difknapper";
    knappDifVanskelig.className = "difknapper difknappValgt";
    knappDifGodTid.className = "difknapper";
    knappDifEgendefinert.className = "kol-2 difknapper";
}
function setVanskelighetsgradGodTid(event) {
    if (event) {
        event.preventDefault();

        inpMinValVinnertall.value = "-1000000";
        inpMaxValVinnertall.value = "1000000";
    }
    knappDifLett.className = "difknapper";
    knappDifMiddels.className = "difknapper";
    knappDifVanskelig.className = "difknapper";
    knappDifGodTid.className = "difknapper difknappValgt";
    knappDifEgendefinert.className = "kol-2 difknapper";
}
function setVanskelighetsgradEgendefinert(event) {
    if (event) {
        event.preventDefault();

        inpMinValVinnertall.value = "";
        inpMaxValVinnertall.value = "";
        inpMinValVinnertall.focus();
    }
    knappDifLett.className = "difknapper";
    knappDifMiddels.className = "difknapper";
    knappDifVanskelig.className = "difknapper";
    knappDifGodTid.className = "difknapper";
    knappDifEgendefinert.className = "kol-2 difknapper difknappValgt";
}

// Sjekker om min og max-verdiene for tallet stemmer med noen forhåndsbestemte vanskelighetsgrader
function finnVanskelighetsgrad() {
    console.log("Minval: ", inpMinValVinnertall.value, "maxval: ", inpMaxValVinnertall.value)
    if (inpMinValVinnertall.value == -10 && inpMaxValVinnertall.value == 10) {
        setVanskelighetsgradLett();
    }
    else if (inpMinValVinnertall.value == -100 && inpMaxValVinnertall.value == 100) {
        setVanskelighetsgradMiddels();
    }
    else if (inpMinValVinnertall.value == -1000 && inpMaxValVinnertall.value == 1000) {
        setVanskelighetsgradVanskelig();
    }
    else if (inpMinValVinnertall.value == -1000000 && inpMaxValVinnertall.value == 1000000) {
        setVanskelighetsgradGodTid();
    }
    else {
        setVanskelighetsgradEgendefinert();
    }
}

// Lager et tall fra input-elementene dersom maxvalue er mer enn minvalue
function lagVinnertall(event) {
    event.preventDefault();
    minVal = Number(inpMinValVinnertall.value);
    maxVal = Number(inpMaxValVinnertall.value);
    if (minVal < maxVal) {
        vinnertall = Math.floor(Math.random() * (maxVal - minVal)) + minVal;
        startSpill();
    } else {
        alert("Fra-verdien m\u00e5 v\u00e6re st\u00f8rre enn til-verdien!")
    }
}

function startSpill() {
    startside.style.display = "none";
    ingameside.style.display = "grid";
    startTimer()
}
startTimer() {

}

// Lytter funksjon som kalles når noen har gjort en gjetning.
function gjett() {

    // Henter ut tallet brukeren har gjettet og gjør om det til et tall
    var gjettetTall = Number(inpGjetting.value);
    if (gjettetTall == vinnertall) {
        console.log("Du fikk rett");
    }
    else if (gjettetTall >> vinnertall) {
        console.log("Tallet er for stort");
    }
    else if (gjettetTall << vinnertall) {
        console.log("Tallet er for lite");
    }
}

// Lyttefunksjoner
document.getElementById("skjemaLagVinnertall").onsubmit = lagVinnertall;
knappDifLett.addEventListener("click", setVanskelighetsgradLett);
knappDifMiddels.addEventListener("click", setVanskelighetsgradMiddels);
knappDifVanskelig.addEventListener("click", setVanskelighetsgradVanskelig);
knappDifGodTid.addEventListener("click", setVanskelighetsgradGodTid);
knappDifEgendefinert.addEventListener("click", setVanskelighetsgradEgendefinert);

// Lytter etter endringer i input-elementene for vanskelighetsgrad
inpMinValVinnertall.addEventListener("input", finnVanskelighetsgrad);
inpMaxValVinnertall.addEventListener("input", finnVanskelighetsgrad);