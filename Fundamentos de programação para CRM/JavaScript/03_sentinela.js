// B1. Registar leads até dizer "fim"
const prompt = require('prompt-sync')();

let totalLeads = 0;
let somaOrcamentos = 0;

while (true) {
    const input = prompt("Introduza o orçamento do lead (ou 'fim' para terminar): ");
    if (input === "fim") {
        break;
    }
    if (isNaN(input) || Number(input) <= 0) {
        console.log("Orçamento inválido. Por favor, introduza um número positivo ou 'fim' para terminar.");
      continue;
    }
    const orcamento = Number(input);
    totalLeads++;
    somaOrcamentos += orcamento;
}

if (totalLeads > 0) {
    const mediaOrcamentos = somaOrcamentos / totalLeads;
    console.log("Total de leads registados: " + totalLeads);
    console.log("Valor total dos orçamentos: " + somaOrcamentos);
    console.log("Média dos orçamentos: " + mediaOrcamentos);
} else {
    console.log("Nenhum lead foi registado.");
}