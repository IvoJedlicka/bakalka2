// Matice obsahující textové hodnoty
let maticeText = [
    ["Text 1", "Text 2", "Text 3"],
    ["Text 4", "Text 5", "Text 6"],
    ["Text 7", "Text 8", "Text 9"]
];

// Matice přiřazující číselné hodnoty k textovým hodnotám
let maticeHodnot = [
    [5, 8, 3],
    [7, 2, 9],
    [4, 6, 1]
];

// Pole pro uchování hodnot buňek po kliknutí
let hodnoty = [];

// Vygenerovat tabulku z maticeText
let tabulka = document.getElementById("tabulka");
for (let i = 0; i < maticeText.length; i++) {
    let radka = document.createElement("tr");
    for (let j = 0; j < maticeText[i].length; j++) {
        let bunka = document.createElement("td");
        bunka.textContent = maticeText[i][j];
        bunka.addEventListener("click", function() {
            ulozHodnotu(maticeHodnot[i][j]);
        });
        radka.appendChild(bunka);
    }
    tabulka.appendChild(radka);
}

// Funkce pro uložení hodnoty do pole a aktualizaci průměru
function ulozHodnotu(hodnota) {
    hodnoty.push(hodnota);
    aktualizujPrumer();
}

// Funkce pro výpočet průměrné hodnoty pole
function aktualizujPrumer() {
    let soucet = 0;
    for (let i = 0; i < hodnoty.length; i++) {
        soucet += hodnoty[i];
    }
    let prumer = hodnoty.length > 0 ? soucet / hodnoty.length : 0;
    document.getElementById("prumer").textContent = "Průměrná hodnota: " + prumer.toFixed(2);
}
