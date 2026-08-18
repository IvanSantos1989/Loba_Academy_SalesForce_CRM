// Resolução do exercicio do slide 17 c
// Função que classifica um lead em função do orçamento e do interesse
// Retorna "Quente" se o orçamento >= 1000 e interesse = "alto"
// Retorna "Morno" se o orçamento >= 5000
// Retorna "Frio" caso contrário

// importar o módulo prompt-sync para permitir a entrada de dados pelo utilizador
const prompt = require('prompt-sync')();

function qualificarLead(orc, interesse) {
    if (orc >= 10000 && interesse === "alto")
        return "Quente";
    else if (orc >= 5000)
        return "Morno";
    else
        return "Frio";
}

// Pedir o número de Leads a analisar
const numLeads = parseInt(prompt("Quantos leads pretende analisar? "));

// Arrays vazios para armazenar os dados introduziods
const orcamentos = [];
const interesses = [];

// Ciclo for para pedir os dados de cada lead
for (i=0; i < numLeads; i++) {
    // Pedir o orçamento do lead
    const orc = parseInt(prompt("Lead " + (i+1) + " - Introduza o orçamento: "));

    // Pedir o nível de interesse do lead
    const interesse = prompt("Lead " + (i+1) + " - Introduza o nível de interesse (alto, médio, baixo): ");

    // Adicionar os dados aos arrays
    orcamentos.push(orc);
    interesses.push(interesse);
}

//Contador para armazenar o número de leads classificados como "Quente"
let quentes = 0;

// Ciclo que processa cada Lead
for (i=0; i < numLeads; i++) {
    // classificar o lead actual
    const prioridade = qualificarLead(orcamentos[i], interesses[i]);

    // Mostrar o resultado da classificação do lead
    console.log("Lead " + (i+1) + ": " + prioridade);

    // Se o Lead é "Quente", incrementa o contador quentes
    if (prioridade === "Quente") {
        quentes = quentes + 1;
        // ou quentes++
    }
}
// Mostrar o número de leads classificados como "Quente"
console.log("Número de leads quentes: " + quentes);