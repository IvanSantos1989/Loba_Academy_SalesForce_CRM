// 3.1. Processar uma lista de leads
// Junta funções, arrays e ciclos num só programa.

const prompt = require('prompt-sync')(); // para fazer os inputs e ver os outputs na consola

function qualificarLead(orc, interesse) {
    if (orc >= 10000 && interesse === "alto")
        return "Quente";
    else if (orc >= 5000)
        return "Morno";
    else
        return "Frio";
}

const orcamentos = [];
const nivelPrioridade = [];
let quentes = 0;

for (i=0; i < 5; i++) {
    const orc = parseFloat(prompt("Orçamento do lead " + (i+1) + ": "));
    const interesse = prompt("Nível de interesse do lead " + (i+1) + " (alto, médio, baixo): ");
    
    orcamentos.push(orc);
    nivelPrioridade.push(interesse);

    const prioridade = qualificarLead(orc, interesse);
    console.log("Prioridade do lead " + (i+1) + ": " + prioridade);
    if (prioridade === "Quente") {
        quentes++;
    }
}

console.log("Total de leads quentes: " + quentes);