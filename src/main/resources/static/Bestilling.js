let billett = [];

function kjopBillett(){
    const fornavn= document.getElementById("fornavn").value;
    const etternavn= document.getElementById("etternavn").value;
    const telefon= document.getElementById("telefon").value;
    const epost= document.getElementById("epost").value;
    const antall = parseInt(document.getElementById("antall").value);
    const film = document.getElementById("film").value;

    // bruker .textContent for å erstatte/redigere tekst i span-elementene
    document.getElementById("filmError").textContent = "";
    document.getElementById("nummerError").textContent = "";
    document.getElementById("fornavnError").textContent = "";
    document.getElementById("etternavnError").textContent = "";
    document.getElementById("telefonError").textContent = "";
    document.getElementById("epostError").textContent = "";
    if(!fornavn || !etternavn || !telefon || !epost || !film || !antall || isNaN(antall)) {
        if (!film) {
            document.getElementById("filmError").textContent = "Må velge film";
        }
        if (!antall || isNaN(antall ) || antall <=0) {
            document.getElementById("nummerError").textContent = "Må skrive noe inn i antall";
        }
        if (!fornavn) {
            document.getElementById("fornavnError").textContent = "Må skrive noe inn i fornavn";
        }
        if (!etternavn) {
            document.getElementById("etternavnError").textContent = "Må skrive noe inn i etternavn";
        }
        if (!telefon) {
            document.getElementById("telefonError").textContent = "Må skrive noe inn i telefon";
        }
        if (!epost) {
            document.getElementById("epostError").textContent = "Må skrive noe inn i epost";
        }
    }
    else{
        billett.push({film,antall,fornavn,etternavn,telefon,epost});
        visBilletter();

    }
}
function visBilletter(){
    const billetListe = document.getElementById("billettListe");
    billetListe.innerHTML = "";

    billett.forEach(billett => {
        const li = document.createElement("li");
        //bruker $ istedenfor +
        li.textContent = "Film " + billett.film + " Antall " + billett.antall
            + " Fornavn " + billett.fornavn + " Etternavn " + billett.etternavn
            + " Telefon " + billett.telefon + " Epost " + billett.epost;
        billetListe.appendChild(li);
    })
}
function slettBilletter(){
    billett = [];
    visBilletter();
}