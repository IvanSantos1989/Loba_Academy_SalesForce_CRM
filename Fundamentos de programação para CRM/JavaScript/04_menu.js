// B2. Menu de gestão de leads
const prompt = require('prompt-sync')();

let empresas = [];
let orcamentos = [];
let opcao = "";

while (opcao !== "0") {
    console.log("\n--- Menu de Gestão de Leads ---");
    console.log("1. Adicionar lead");
    console.log("2. Listar leads");
    console.log("3. Mostrar total em carteira");
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

        case "0":
            console.log("Programa encerrado.");
            break;

        default:
            console.log("Opção inválida.");
    }
}  