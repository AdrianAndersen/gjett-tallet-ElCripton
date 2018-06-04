// Henter roten til databasen
const database = firebase.database();

// Henter HTML-elementer
var inpGjetning = document.getElementById("inpGjetning");
var minVal, maxVal, vinnertall, valgtVanskelighetsgrad, tallmengde;
var maxAntallGjetninger = 10;
var brukteGjetninger = 0;

const startside = document.getElementById("startside");
const ingameside = document.getElementById("ingameside");
const resultatside = document.getElementById("resultatside");

// Vanskelighetsgradsknapper
const knappDifLett = document.getElementById("knappDifLett");
const knappDifMiddels = document.getElementById("knappDifMiddels");
const knappDifVanskelig = document.getElementById("knappDifVanskelig");
const knappDifGodTid = document.getElementById("knappDifGodTid");
const knappDifEgendefinert = document.getElementById("knappDifEgendefinert");

const knappGjetning = document.getElementById("knappGjetning");

// Elementer til den grafiske tallfremstillingen
const defSpan = document.getElementsByClassName("defSpan");
const defLinje = document.getElementsByClassName("defLinje");
const defmengdeContainer = document.getElementById("defmengdeContainer");
const defMinVal = document.getElementById("defMinVal");
const defMaxVal = document.getElementById("defMaxVal");

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

    valgtVanskelighetsgrad = "Lett";
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

    valgtVanskelighetsgrad = "Middels";
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

    valgtVanskelighetsgrad = "Vanskelig";
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

    valgtVanskelighetsgrad = "Så du har god tid?";
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

    valgtVanskelighetsgrad = "Egendefinert";
}
function setStandardVanskelighetsgrad() {
    inpMinValVinnertall.value = "-10";
    inpMaxValVinnertall.value = "10";
    setVanskelighetsgradLett();
}

// Sjekker om min og max-verdiene for tallet stemmer med noen forhåndsbestemte vanskelighetsgrader
function finnVanskelighetsgrad() {
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
        defMinVal.innerHTML = minVal;
        defMaxVal.innerHTML = maxVal;
        tallmengde = maxVal - minVal;
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
/*
function setDefmengde() {
    defmengdeContainer.style.gridTemplateColumns = tallmengde;
    defSpan.style.gridColumn = "span " + tallmengde - 2;
    defLinje.style.gridColumn = "span " + tallmengde;
}
*/
function startTimer() {
    console.log("timer...")
}
function oppdaterAntallGjetninger() {
    maxAntallGjetninger--;
    brukteGjetninger++;
    if (maxAntallGjetninger == 0) {
        console.log("Du tapte")
    }
}

// Lytter funksjon som kalles når noen har gjort en gjetning.
function gjett() {

    // Henter ut tallet brukeren har gjettet og gjør om det til et tall
    var gjettetTall = Number(inpGjetning.value);
    if (gjettetTall === vinnertall) {
        genererScore();
        maxAntallGjetninger--;
        brukteGjetninger++;
        visResultater();
    }
    else if (gjettetTall > vinnertall && gjettetTall <= maxVal) {
        defMaxVal.innerHTML = gjettetTall;
        inpGjetning.value = "";
        oppdaterAntallGjetninger()
    }
    else if (gjettetTall < vinnertall && gjettetTall >= minVal) {
        defMinVal.innerHTML = gjettetTall;
        inpGjetning.value = "";
        oppdaterAntallGjetninger()
    }
    else {
        inpGjetning.value = "";
        oppdaterAntallGjetninger()
    }
}

function genererScore() {
    document.getElementById("resultatScore").innerHTML = tallmengde * maxAntallGjetninger;
}

function visResultater() {
    document.getElementById("resultatside").style.display = "grid";
    ingameside.style.display = "none";
    document.getElementById("vinnertallResultat").innerHTML = vinnertall;
    document.getElementById("resultatVanskelighetsgrad").innerHTML = valgtVanskelighetsgrad;
    document.getElementById("resultatAntallForsok").innerHTML = brukteGjetninger;
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

inpGjetning.addEventListener('keypress', function (e) {
    var key = e.which || e.keyCode;
    if(key === 13) {
    gjett()
    }
});
knappGjetning.addEventListener("click", gjett);

setStandardVanskelighetsgrad()