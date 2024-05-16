// Matice obsahující textové hodnoty
let maticeText = [
    ["-", "A", "B", "C", "D", "E"],
    ["MOTIVACE A AKTIVITA PŘI VÝUCE", 
     "Žák je aktivní, jeví upřímný zájem o předmět a touhu postupovat kupředu. Během vyučování se vždy aktivně zapojuje.", 
     "Žák je zpravidla aktivní, pokud se mu daří. Během vyučování se aktivně zapojuje.",
     "Žák má výkyvy v přístupu, jeho aktivita v hodině se objevuje nepravidelně.",
     "Žák je aktivní jen výjimečně, sám nevyvíjí žádnou aktivitu, ale reaguje pozitivně na domluvu.",
     "Žák je v přístupu zcela pasivní. Nereaguje na domluvu. Negativně působí na třídu, vyrušuje a strhává na sebe pozornost,provokuje."],
    ["POMŮCKY, PŘÍPRAVA A DOMÁCÍ ÚKOLY V PŘÍPADĚ ABSENCE (2. období= 4. a 5. roč.)", 
     "Je pravidelně připraven na vyučování a vždy vybaven potřebnými pomůckami. Svědomitě plní zadané domácí úkoly, jeho domácí příprava je pečlivá. V případě absence si samostatně zajistí doplnění zameškaného učiva a dopsání zápisů.",
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
