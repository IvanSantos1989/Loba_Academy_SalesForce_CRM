// 1.2. Qualificar um lead
const prompt = require('prompt-sync')(); // importar o módulo prompt-sync para permitir
// a entrada de dados pelo utilizador e ver na consola
let orcamento = parseFloat(prompt("Introduza o orçamento do lead: "));
let interesse = prompt("Qual seu nível de interesse (alto, medio ou baixo)? ");

if (orcamento >= 1000 && interesse.toLowerCase() === "alto") {
    console.log("Qualificação do Lead QUENTE!");
} else if (orcamento >= 500) {
    console.log("Qualificação do Lead MORNO!");
} else {
    console.log("Qualificação do Lead FRIO!");
}