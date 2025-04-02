let statusJogador = {
    dinheiro: 0,
    fama: 0,
    faturas: 0,
    dia: 0
};
let upgrades = [
    {
        id: "bike",
        nome: "Comprar uma bike",
        preco: 150
    },
    {
        id: "18oitao",
        nome: "Comprar um 18oitão",
        preco: 500
    }
];

function inicializar()
{
    guiUpdater();
    let table = document.getElementById("upgrades-table");
    for(var i = 0; i < upgrades.length; i++)
    {
        var row = table.insertRow(i+1);
        row.insertCell(0).innerHTML = upgrades[i].nome;
        row.insertCell(1).innerHTML = upgrades[i].preco;
        
        const button = document.createElement("button");
        button.textContent = "Comprar!";
        button.id = upgrades[i].id;
        button.onclick = comprarUpgrade;

        row.insertCell(2).appendChild(button);
    }
}

function ajudarMendigo()
{
    let progressBar = document.getElementById("pgb-mendigo");

    if(progressBar.value === progressBar.max)
    {
        progressBar.value = 0;
        statusJogador.fama++;
        guiUpdater();
        return;
    }
    progressBar.value += 10;
}

function comprarUpgrade(elemento)
{
    let elementoChamado = elemento.target;
    let upgrader = null
    
    for(var i = 0; i < upgrades.length; i++)
    {
        if(upgrades[i].id === elementoChamado.id)
        {
            upgrader = upgrades[i];
        }
    }

    if(upgrader === null)
    {
        console.log("É nulo!");
        return;
    }

    if(statusJogador.dinheiro >= upgrader.preco)
    {

    }
    else
    {
        alert("Dinheiro insuficiente!");
    }
}

function guiUpdater()
{
    const guiComponents = {
        dinheiro: document.getElementById("guiDinheiro"),
        fama: document.getElementById("guiFama"),
        fatura: document.getElementById("guiFatura"),
        dia: document.getElementById("guiDia")
    };

    guiComponents.dinheiro.textContent = "Dinheiro: "+statusJogador.dinheiro;
    guiComponents.fama.textContent = "Fama: "+statusJogador.fama;
    guiComponents.fatura.textContent = "Faturas vencidas: "+statusJogador.faturas;
    guiComponents.dia.textContent = "Dia atual: "+statusJogador.dia;
}