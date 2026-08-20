// 2.4. Usar a função qualificarLead
const prompt = require("prompt-sync")();

function qualificarLead(orc, interesse) {
    if (orc >= 10000 && interesse === "alto")
        return "Lead Quente!";
    else if (orc >= 5000)
        return "Lead Morno!";
    else
        return "Lead Frio!";
}

const numLeads = parseInt(prompt("Quantos Leads pretende analisar? "));
const orcamentos = [];
const nivelInteresse = [];

for (let i = 0; i < numLeads; i++) {
    const orc = parseFloat(prompt("Orçamento do Lead " + (i+1) + ": "));
    const interesse = prompt("Nível de interesse do Lead " + (i+1) + " (alto, médio ou baixo): ");

    orcamentos.push(orc);
    nivelInteresse.push(interesse);
}

console.log("Classificação dos Leads:");
for (let i = 0; i < numLeads; i++) {
    const classificacao = qualificarLead(orcamentos[i], nivelInteresse[i]);
    console.log("Lead " + (i+1) + ": " + classificacao);
}