// Henter roten til databasen
const database = firebase.database();

// Henter HTML-elementer
var inpGjetting = document.getElementById("inpGjetting");
var txtTilbakemelding = document.getElementById("txtTilbakemelding");
var minVal, maxVal, vinnertall

function lagVinnertall(event) {
    event.preventDefault();
    minVal = Number(document.getElementById("inpMinValVinnertall").value);
    maxVal = Number(document.getElementById("inpMaxValVinnertall").value);
    vinnertall = Math.floor(Math.random() * (maxVal - minVal)) + minVal;
    //console.log("Vinnertall: ", vinnertall);
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