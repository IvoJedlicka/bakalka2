// Objekt pro uchování hodnot a funkci pro výpočet průměru
let hodnoty = {};

document.addEventListener("DOMContentLoaded", function() {
    let bunky = document.querySelectorAll("#hodnoceni td");
    bunky.forEach(function(bunka) {
        let hodnota = parseFloat(bunka.getAttribute("data-hodnota"));
        hodnoty[bunka.textContent] = hodnota;
        bunka.addEventListener("click", function() {
            ulozHodnotu(bunka);
        });
    });
    aktualizujPrumer();
});

function ulozHodnotu(bunka) {
    let hodnota = hodnoty[bunka.textContent];
    if (!isNaN(hodnota)) {
        if (hodnota === null) {
            // Pokud hodnota je null, vyžádejte od uživatele novou hodnotu
            hodnota = prompt("Zadejte číselnou hodnotu pro tuto buňku:");
            hodnota = parseFloat(hodnota);
            if (isNaN(hodnota)) {
                alert("Zadali jste neplatnou hodnotu.");
                return;
            }
            hodnoty[bunka.textContent] = hodnota;
        } else {
            // Pokud hodnota již existuje, smažte ji
            hodnoty[bunka.textContent] = null;
        }
        aktualizujPrumer();
    }
}

function aktualizujPrumer() {
    let soucet = 0;
    let pocet = 0;
    for (let klic in hodnoty) {
        if (hodnoty[klic] !== null) {
            soucet += hodnoty[klic];
            pocet++;
        }
    }
    let prumer = pocet > 0 ? soucet / pocet : 0; // Zajistěte, že průměr je 0, pokud není žádná hodnota
    document.getElementById("prumer").textContent = "Průměrná hodnota: " + prumer.toFixed(2);
}
