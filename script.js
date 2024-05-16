// Matice obsahující textové hodnoty
let maticeText = [
    ["-", "A", "B", "C", "D", "E"],
    ["MOTIVACE A AKTIVITA PŘI VÝUCE", 
     "Žák je aktivní, jeví upřímný zájem o předmět a touhu postupovat kupředu. Během vyučování se vždy aktivně zapojuje.", 
     "Žák je zpravidla aktivní, pokud se mu daří. Během vyučování se aktivně zapojuje.",
     "Žák má výkyvy v přístupu, jeho aktivita v hodině se objevuje nepravidelně.",
     "Žák je aktivní jen výjimečně, sám nevyvíjí žádnou aktivitu, ale reaguje pozitivně na domluvu.",
     "Žák je v přístupu zcela pasivní. Nereaguje na domluvu. Negativně působí na třídu, vyrušuje a strhává na sebe pozornost,provokuje."],
    ["Je pravidelně připraven na vyučování a vždy vybaven potřebnými pomůckami. Svědomitě plní zadané domácí úkoly, jeho domácí příprava je pečlivá. V případě absence si samostatně zajistí doplnění zameškaného učiva a dopsání zápisů.",
        "Je pravidelně připraven na vyučování a zpravidla vybaven potřebnými pomůckami. Domácí příprava je pečlivá, zadané úkoly až na výjimky plní svědomitě. V případě absence si většinou samostatně doplní zameškané učivo včetně zápisů.",
    "Příprava na vyučování má rezervy, často nemá v pořádku některé pomůcky na vyučovací hodinu. Většina domácích úkolů je vypracována uspokojivě.V případě absence si bez upozornění učitele nedoplní samostatně učivo.",
        "Na vyučovací hodiny se většinou nepřipravuje, často chybí potřebné pomůcky. Projevuje se časté neplnění povinností a domácích úkolů. V případě absence si bez opakovaného upozornění učitele nedoplní učivo.",
        "Na vyučování se nepřipravuje, nenosí předepsané pomůcky. Má liknavý přístup k povinnostem a neplní zadané úkoly. Ani po upozornění učitele není učivo doplněné."]
];

// Matice přiřazující číselné hodnoty k textovým hodnotám
let maticeHodnot = [
    [0, 0, 0, 0, 0, 0],
    [0, 1, 2, 3, 4, 5],
    [0, 1, 2, 3, 4, 5],
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
            toggleHodnotu(parseInt(this.dataset.row), parseInt(this.dataset.column));
        });
        radka.appendChild(bunka);
    }
    tabulka.appendChild(radka);
}

// Funkce pro přidání nebo odebrání hodnoty do/z pole
function toggleHodnotu(row, column) {
    let hodnota = maticeHodnot[row][column];
    if (hodnota === 0) return; // Pokud je hodnota nula, nedělej nic
    let index = hodnoty.indexOf(hodnota);
    if (index === -1) {
        hodnoty.push(hodnota); // Přidej hodnotu do pole, pokud tam není
    } else {
        hodnoty.splice(index, 1); // Odeber hodnotu z pole, pokud tam je
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
    document.getElementById("prumer").textContent = "Průměrná hodnota: " + prumer.toFixed(2);
}
