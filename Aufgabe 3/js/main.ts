/* Aufgabe: Aufgabe 3
    Name: Alexandru Mihai
    Matrikel: 261195
    Datum: 27.10.2019 */




interface Karten {
    symbol: number; //Herz = 1, Karo = 2, Kreuz = 3, Pik = 4
    wert: number;
    position: string;

}

/*Ass*/
let herzAss: Karten = {
    symbol: 1,
    wert: 14,
    position: ""
}

let karoAss: Karten = {
    symbol: 2,
    wert: 14,
    position: ""
}

let kreuzAss: Karten = {
    symbol: 3,
    wert: 14,
    position: ""
}

let pikAss: Karten = {
    symbol: 4,
    wert: 14,
    position: ""
}

/*König*/
let herzKoenig: Karten = {
    symbol: 1,
    wert: 13,
    position: ""
}

let karoKoenig: Karten = {
    symbol: 2,
    wert: 13,
    position: ""
}

let kreuzKoenig: Karten = {
    symbol: 3,
    wert: 13,
    position: ""
}

let pikKoenig: Karten = {
    symbol: 4,
    wert: 13,
    position: ""
}

/*Dame*/
let herzDame: Karten = {
    symbol: 1,
    wert: 12,
    position: ""
}

let karoDame: Karten = {
    symbol: 2,
    wert: 12,
    position: ""
}

let kreuzDame: Karten = {
    symbol: 3,
    wert: 12,
    position: ""
}

let pikDame: Karten = {
    symbol: 4,
    wert: 12,
    position: ""
}

/*Bube*/
let herzBube: Karten = {
    symbol: 1,
    wert: 11,
    position: ""
}

let karoBube: Karten = {
    symbol: 2,
    wert: 11,
    position: ""
}

let kreuzBube: Karten = {
    symbol: 3,
    wert: 11,
    position: ""
}

let pikBube: Karten = {
    symbol: 4,
    wert: 11,
    position: ""
}

/*10*/
let herzZehn: Karten = {
    symbol: 1,
    wert: 10,
    position: ""
}

let karoZehn: Karten = {
    symbol: 2,
    wert: 10,
    position: ""
}

let kreuzZehn: Karten = {
    symbol: 3,
    wert: 10,
    position: ""
}

let pikZehn: Karten = {
    symbol: 4,
    wert: 10,
    position: ""
}

/*9*/
let herzNeun: Karten = {
    symbol: 1,
    wert: 9,
    position: ""
}

let karoNeun: Karten = {
    symbol: 2,
    wert: 9,
    position: ""
}

let kreuzNeun: Karten = {
    symbol: 3,
    wert: 9,
    position: ""
}

let pikNeun: Karten = {
    symbol: 4,
    wert: 9,
    position: ""
}

/*8*/
let herzAcht: Karten = {
    symbol: 1,
    wert: 8,
    position: ""
}

let karoAcht: Karten = {
    symbol: 2,
    wert: 8,
    position: ""
}

let kreuzAcht: Karten = {
    symbol: 3,
    wert: 8,
    position: ""
}

let pikAcht: Karten = {
    symbol: 4,
    wert: 8,
    position: ""
}

/*7*/
let herzSieben: Karten = {
    symbol: 1,
    wert: 7,
    position: ""
}

let karoSieben: Karten = {
    symbol: 2,
    wert: 7,
    position: ""
}

let kreuzSieben: Karten = {
    symbol: 3,
    wert: 7,
    position: ""
}

let pikSieben: Karten = {
    symbol: 4,
    wert: 7,
    position: ""
}


/*Arrays Nachziehstapel + Handkarten + Auflegestapel*/

let nachziehStapelArray: Karten[] = [herzAss, karoAss, kreuzAss, pikAss, herzKoenig, karoKoenig, kreuzKoenig, pikKoenig, herzDame, karoDame, kreuzDame, pikDame, herzBube, karoBube, kreuzBube, pikBube, herzZehn, karoZehn, kreuzZehn, pikZehn, herzNeun, karoNeun, kreuzNeun, pikNeun, herzAcht, karoAcht, kreuzAcht, pikAcht, herzSieben, karoSieben, kreuzSieben, pikSieben];
let handKartenArray: Karten[] = [];
let auflegeStapelArray: Karten[] = [];

let obereKarte: Karten;



/*Fenster öffnen, Abfrage für Anzahl der Handkarten*/
function spielStarten(): void {
    let anzahlHandkarten: number = 0;
    do {
        anzahlHandkarten = parseInt(prompt("Wie viele Karten möchtest du? Gib eine Zahl zwischen 4 und 6 ein."));
    }
    while (isNaN(anzahlHandkarten) || anzahlHandkarten > 6 || anzahlHandkarten < 4); //Wird so oft wiederholt, bis die Eingabe eine Zahl zwischen 4 und 6 ist. "isNaN" bedeutet "Is Not a Number"

    console.log("Handkarten: " + anzahlHandkarten);

    for (let i: number = 0; i < anzahlHandkarten; i++) {
        zieheKarten();
    }

    nachziehStapelErstellen();
    let aktuelleKarte: number = Math.floor(Math.random() * (nachziehStapelArray.length));
    obereKarte = nachziehStapelArray[aktuelleKarte];
    nachziehStapelArray.splice(aktuelleKarte, 1);

    auflegeStapelErstellen();
    document.getElementById("sortieren").addEventListener("click", kartenSortieren)

    handKartenErstellen();

}


function zieheKarten(): void {
    if (nachziehStapelArray.length > 0) {
        let aktuelleKarte: number = Math.floor(Math.random() * (nachziehStapelArray.length));
        handKartenArray.push(nachziehStapelArray[aktuelleKarte]);
        nachziehStapelArray.splice(aktuelleKarte, 1); /*splice = 1. wie vielte Stelle im Array, 2. wie viele Elemente im Array werden entfernt, 3. was wird an dieser Stelle beigefügt
                                                    -> Karte wird rausgeschmissen)*/
        handKartenErstellen();
    }
    else {
        alert("Der Nachziehstapel ist leer.")
    }
}


/*Funktion Nachziehstapel*/
function nachziehStapelErstellen(): void {
    document.getElementById("nachziehStapel").addEventListener("click", zieheKarten); //Klick-Event auf dem Nachziehstapel, führt Funktion zieheKarten aus 
    document.getElementById("nachziehStapel").innerHTML = `<div class="StylingKarten">
    <img src="img/kartenruecken.jpeg" class="rueckseite">
    </div>`;
}




/*Funktion zum generieren des Auflegestapels ---> Ablage*/
function auflegeStapelErstellen(): void {

    let write: string = "";
    write += `<div class="StylingKarten">`;

    switch (obereKarte.symbol) {
        case 1:
            write += `<div class='rot' class='SytlingSymbol'>♥`;
            break;
        case 2:
            write += `<div class='rot' class='StylingSymbol'>♦`;
            break;
        case 3:
            write += `<div class='schwarz' class='StylingSymbol'>♣`;
            break;
        case 4:
            write += `<div class='schwarz' class='StylingSymbol'>♠`;
            break;
        default:
            console.log("Error")
        }
    switch (obereKarte.wert) {
        case 14:
            write += `A</div>`;
            break;
        case 13:
            write += `K</div>`;
            break;
        case 12:
            write += `D</div>`;
            break;
        case 11:
            write += `B</div>`;
            break;
        case 10:
            write += `10</div>`;
            break;
        case 9:
            write += `9</div>`;
            break;
        case 8:
            write += `8</div>`;
            break;
        case 7:
            write += `7</div>`;
            break;
        default:
            console.log("Error")
    }
    write += `</div>`
    document.getElementById("auflegeStapel").innerHTML = `${write}`;
}


/*Funktion zum generieren der Handkarten*/
function handKartenErstellen(): void {

    document.getElementById("handKartenSpieler").addEventListener("click", karteAusspielen);
    document.getElementById("handKartenSpieler").innerHTML = "";

    for (let i: number = 0; i < handKartenArray.length; i++) {
        handKartenArray[i].position = "position" + i;
        let write: string = "";
        write += `<div class="StylingKarten" id="position${i}">`

        switch (handKartenArray[i].symbol) {
            case 1:
                write += `<div class='rot' class='StylingSymbol'>♥`;
                break;
            case 2:
                write += `<div class='rot' class='StylingSymbol'>♦`;
                break;
            case 3:
                write += `<div class='schwarz' class='StylingSymbol'>♣`;
                break;
            case 4:
                write += `<div class='schwarz' class='StylingSymbol'>♠`;
                break;
            default:
                console.log("Error")
        }

        switch (handKartenArray[i].wert) {
            case 14:
                write += `A</div>`;
                break;
            case 13:
                write += `K</div>`;
                break;
            case 12:
                write += `D</div>`;
                break;
            case 11:
                write += `B</div>`;
                break;
            case 10:
                write += `10</div>`;
                break;
            case 9:
                write += `9</div>`;
                break;
            case 8:
                write += `8</div>`;
                break;
            case 7:
                write += `7</div>`;
                break;
            default:
                console.log("Error")
        }
        write += `</div>`
        document.getElementById("handKartenSpieler").innerHTML += `${write}`;
    }
}

/*Aufgabe 3*/
/*Funktion für das Ausspielen einer Karte */
function karteAusspielen(): void {
    let idAusgewählteKarte: HTMLElement = <HTMLElement>event.target;
    for (let i = 0; i < handKartenArray.length; i++) {
        if (String(idAusgewählteKarte.getAttribute("id")) == handKartenArray[i].position) {
            if (handKartenArray[i].symbol == obereKarte.symbol || handKartenArray[i].wert == obereKarte.wert) {
                auflegeStapelArray.push(obereKarte);
                obereKarte = handKartenArray[i];
                handKartenArray[i].position = "";
                handKartenArray.splice(i, 1);
                handKartenErstellen();
                auflegeStapelErstellen();       
            }
            else {
                alert("Diese Karte kann nicht ausgespielt werden.")
            }
        }
    }
}



/*Funktion für das Sortieren der Karten */
function kartenSortieren() {
    handKartenArray.sort(nachWertSortieren); //nimmt 2 Werte aus dem Array und vergleicht sie 
    handKartenArray.sort(nachSymbolSortieren);
    handKartenErstellen();
}

/*Nach Wert sortieren*/
function nachWertSortieren(karte1: Karten, karte2: Karten): number {
    let wertKarte1: number = karte1.wert;
    let wertKarte2: number = karte2.wert;
    if (wertKarte1 < wertKarte2) return -1; // sort-Funktion macht "nichts", schiebt es um -1 vor die zu vergleichende Karte 
    if (wertKarte1 > wertKarte2) return 1; // sort-Funktion tauscht die Karten, schiebt es um 1 vor die zu vergleichende Karte 
    if (wertKarte1 == wertKarte2) return 0; //sort-Funktion macht nichts
}

/*Nach Symbol sortieren*/
function nachSymbolSortieren(karte1: Karten, karte2: Karten): number {
    let symbolKarte1: number = karte1.symbol;
    let symbolKarte2: number = karte2.symbol;
    if (symbolKarte1 < symbolKarte2) return -1; // sort-Funktion macht "nichts", schiebt es um -1 vor die zu vergleichende Karte 
    if (symbolKarte1 > symbolKarte2) return 1; // sort-Funktion tauscht die Karten, schiebt es um 1 vor die zu vergleichende Karte 
    if (symbolKarte1 == symbolKarte2) return 0; //sort-Funktion macht nichts
}


/* Beim Drücken der Leertaste wird eine Karte vom Stapel gezogen */
function leertaste(event: KeyboardEvent): void {
    if (event.keyCode == 32) zieheKarten();
}



document.addEventListener("DOMContentLoaded", init);
document.addEventListener("keydown", leertaste);

function init() {
    spielStarten();
}