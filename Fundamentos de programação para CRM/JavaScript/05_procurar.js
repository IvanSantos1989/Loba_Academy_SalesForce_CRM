// C1. Procurar um lead
const prompt = require('prompt-sync')();

function qualificarLead(orcamento) {
    if (orcamento >= 10000) {
        return "Quente";
    } else if (orcamento >= 5000) {
        return "Morno";
    } else {
        return "Frio";
    }
}

let empresas = [];
let orcamentos = [];
let opcao = "";

while (opcao !== "0") {
    console.log("\n--- Menu de Gestão de Leads ---");
    console.log("1. Adicionar lead");
    console.log("2. Listar leads");
    console.log("3. Mostrar total em carteira");
    console.log("4. Procurar lead pelo nome da empresa");
    console.log("0. Sair");
    opcao = prompt("Escolha uma opção: ");

    switch (opcao) {
        case "1":
            const empresa = prompt("Introduza o nome da empresa: ");
            const orcamento = Number(prompt("Introduza o orçamento: "));
            if (isNaN(orcamento) || orcamento <= 0) {
                console.log("Orçamento inválido. Por favor, introduza um número positivo.");
                break;
            }
            empresas.push(empresa);
            orcamentos.push(orcamento);
            console.log("Lead adicionado com sucesso.");
            break;

        case "2":
            if (empresas.length === 0) {
                console.log("Nenhum lead registado.");
            } else {
                console.log("\n--- Leads Registados ---");
                for (let i = 0; i < empresas.length; i++) {
                    console.log("Empresa: " + empresas[i] + ", Orçamento: " + orcamentos[i]);
                }
            }
            break;

        case "3":
            let total = 0;

            for (let i = 0; i < orcamentos.length; i++) {
            total = total + orcamentos[i];
            }

            console.log("Total em carteira: " + total + "€");
            break;
        
        case "4":
            const pesquisa = prompt("Pesquisa de empresa pelo nome: ").toLowerCase();

            let encontrado = false;

            for (let i = 0; i < empresas.length; i++) {

            if (empresas[i].toLowerCase().includes(pesquisa)) {

            console.log("\nEmpresa: " + empresas[i]);
            console.log("Orçamento: " + orcamentos[i] + "€");
            console.log("Prioridade: " + qualificarLead(orcamentos[i]));

            encontrado = true;
            }
        }

        if (!encontrado) {
            console.log("Nenhum lead encontrado com esse nome");
        }
            break;

        case "0":
            console.log("Programa encerrado.");
            break;

        default:
            console.log("Opção inválida.");
        }
    }