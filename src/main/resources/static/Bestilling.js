let billett = [];

function kjopBillet(){
    const fornavn= document.getElementById("fornavn".value);
    const etternavn= document.getElementById("etternavn".value);
    const telefon= document.getElementById("telefon".value);
    const epost= document.getElementById("epost".value);
    const antall = parseInt(document.getElementById("antall").value);
    const film = document.getElementById("film".value);

    // bruker .textContent for å erstatte/redigere tekst i span-elementene
    document.getElementById("filmError").textContent = "";
    document.getElementById("antallError").textContent = "";
    document.getElementById("fornavnError").textContent = "";
    document.getElementById("etternavnError").textContent = "";
    document.getElementById("telefonError").textContent = "";
    document.getElementById("epostError").textContent = "";
    if(!fornavn || !etternavn || !telefon || !epost || !film || !antall || isNaN(antall)){
        if(!film){
            document.getElementById("filmError").textContent = "Må velge film";
        }
        if(!antall || isNaN(antall)) {
            document.getElementById("antallError").textContent = "Må skrive noe inn i antall";
        }
        if(!fornavn){
            document.getElementById("fornavnError").textContent = "Må skrive noe inn i fornavn";
        }
        if(!etternavn){
            document.getElementById("etternavnError").textContent = "Må skrive noe inn i etternavn";
        }
        if(!telefon){
            document.getElementById("telefonError").textContent = "Må skrive noe inn i telefon";
        }
        if(!epost){
            document.getElementById("epostError").textContent = "Må skrive noe inn i epost";
        }
}