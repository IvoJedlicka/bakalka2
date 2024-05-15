// Pole pro ukládání hodnot z buňek
let hodnoty = [];

// Funkce pro výpočet průměru pole
function prumerPole(pole) {
    let soucet = 0;
    for (let i = 0; i < pole.length; i++) {
        soucet += pole[i];
    }
    return soucet / pole.length;
}

// Funkce pro uložení hodnoty z buňky do pole a výpočet průměru
function ulozHodnotu(hodnota) {
    hodnoty.push(hodnota);
    let prumer = prumerPole(hodnoty);
    document.getElementById('prumer').innerText = `Průměr: ${prumer}`;
}

// Připojení události kliknutí na buňky k tabulce
document.addEventListener('DOMContentLoaded', function () {
    let bunky = document.querySelectorAll('td');

    bunky.forEach(function (bunka) {
        bunka.addEventListener('click', function () {
            let hodnota = parseInt(this.innerText);
            if (!isNaN(hodnota)) {
                ulozHodnotu(hodnota);
            }
        });
    });
});
