// A1. Registar um lead
const prompt = require('prompt-sync')();

const nomeEmpresa = prompt("Introduza o nome da empresa: ");
const contacto = prompt("Introduza o contacto: ");
const orcamento = Number(prompt("Introduza o orçamento: "));

if (nomeEmpresa === "" || contacto === "" || isNaN(contacto) || orcamento <= 0 || isNaN(orcamento)) {
    console.log("Faltam dados obrigatórios ou os dados são inválidos.");
} 
else {
    console.log("Lead registado com sucesso!");
    console.log("Nome da empresa: " + nomeEmpresa);
    console.log("Contacto: " + contacto);
    console.log("Orçamento: " + orcamento);
}