// script.js

// Matice obsahující textové hodnoty
let maticeText = [
    ["-", "A", "B", "C", "D", "E"],
    ["MOTIVACE A AKTIVITA PŘI VÝUCE", 
     "Žák je aktivní, jeví upřímný zájem o předmět a touhu postupovat kupředu. Během vyučování se vždy aktivně zapojuje.", 
     "Žák je zpravidla aktivní, pokud se mu daří. Během vyučování se aktivně zapojuje.",
     "Žák má výkyvy v přístupu, jeho aktivita v hodině se objevuje nepravidelně.",
     "Žák je aktivní jen výjimečně, sám nevyvíjí žádnou aktivitu, ale reaguje pozitivně na domluvu.",
     "Žák je v přístupu zcela pasivní. Nereaguje na domluvu. Negativně působí na třídu, vyrušuje a strhává na sebe pozornost, provokuje."],
    ["POMŮCKY, PŘÍPRAVA A DOMÁCÍ ÚKOLY V PŘÍPADĚ ABSENCE (2. období = 4. a 5. roč.)", 
     "Je pravidelně připraven na vyučování a vždy vybaven potřebnými pomůckami. Svědomitě plní zadané domácí úkoly, jeho domácí příprava je pečlivá. V případě absence si samostatně zajistí doplnění zameškaného učiva a dopsání zápisů.",
     "Je pravidelně připraven na vyučování a zpravidla vybaven potřebnými pomůckami. Domácí příprava je pečlivá, zadané úkoly až na výjimky plní svědomitě. V případě absence si většinou samostatně doplní zameškané učivo včetně zápisů.",
     "Příprava na vyučování má rezervy, často nemá v pořádku některé pomůcky na vyučovací hodinu. Většina domácích úkolů je vypracována uspokojivě. V případě absence si bez upozornění učitele nedoplní samostatně učivo.",
     "Na vyučovací hodiny se většinou nepřipravuje, často chybí potřebné pomůcky. Projevuje se časté neplnění povinností a domácích úkolů. V případě absence si bez opakovaného upozornění učitele nedoplní učivo.",
     "Na vyučování se nepřipravuje, nenosí předepsané pomůcky. Má liknavý přístup k povinnostem a neplní zadané úkoly. Ani po upozornění učitele není učivo doplněné."],
    ["SEŠIT/PORTFOLIO", 
     "Sešit (případně portfolio) si vede pečlivě, zápisy v sešitě jsou přehledné a úplné.", 
     "Sešit (případně portfolio) si zpravidla vede pečlivě, zápisy v sešitě jsou většinou přehledné a úplné.", 
     "Sešit (případně portfolio) vede nepravidelně, občas chybí část zápisu nebo jsou zápisy nepřehledné, chaotické.",
     "Sešit (případně portfolio) vede nepravidelně, chybí zápisy, jsou nepřehledné, chaotické.", 
     "V sešitě (případně portfoliu) chybí množství zápisů nebo záznamů. Nevede sešit (portfolio) či má jen občasný zápis nebo záznam."]
];

// Matice přiřazující číselné hodnoty k textovým hodnotám
let maticeHodnot = [
    [0, 0, 0, 0, 0, 0],
    [0, 1, 2, 3, 4, 5],
    [0, 1, 2, 3, 4, 5],
    [0, 1, 2, 3, 4, 5]
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
        bunka.dataset.row = i; // Přidáme vlastnost dataset s indexem řádku
        bunka.dataset.column = j; // Přidáme vlastnost dataset s indexem sloupce
        bunka.addEventListener("click", function() {
            toggleHodnotu(parseInt(this.dataset.row), parseInt(this.dataset.column), this);
        });
        radka.appendChild(bunka);
    }
    tabulka.appendChild(radka);
}

// Funkce pro přidání nebo odebrání hodnoty do/z pole a změnu barvy buňky
function toggleHodnotu(row, column, element) {
    let hodnota = maticeHodnot[row][column];
    if (hodnota === 0) return; // Pokud je hodnota nula, nedělej nic
    let index = hodnoty.indexOf(hodnota);
    if (index === -1) {
        hodnoty.push(hodnota); // Přidej hodnotu do pole, pokud tam není
        element.classList.add("selected"); // Přidej třídu pro modré pozadí
    } else {
        hodnoty.splice(index, 1); // Odeber hodnotu z pole, pokud tam je
        element.classList.remove("selected"); // Odeber třídu pro modré pozadí
    }
    aktualizujPrumer();
}

// Funkce pro výpočet průměrné hodnoty pole
function aktualizujPrumer() {
    let soucet = 0;
    for (let i = 0; i < hodnoty.length; i++) {
        soucet += hodnoty[i];
    }
    let prumer = hodnoty.length > 0 ? soucet / hodnoty.length : 0;
    let znamka = "";
    if (prumer <= 1.5) {
        znamka = "A";
    } else if (prumer <= 2.5) {
        znamka = "B";
    } else if (prumer <= 3.5) {
        znamka = "C";
    } else if (prumer <= 4.5) {
        znamka = "D";
    } else {
        znamka = "F";
    }
    document.getElementById("prumer").textContent = "Průměrná hodnota: " + prumer.toFixed(2) + " (" + znamka + ")";
}

// Přidání CSS třídy pro modré pozadí
const style = document.createElement('style');
style.innerHTML = `
    .selected {
        background-color: blue;
        color: white;
    }
`;
document.head.appendChild(style);
