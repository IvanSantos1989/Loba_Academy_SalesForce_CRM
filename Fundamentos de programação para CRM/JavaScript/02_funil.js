// A2. O próximo passo no funil
const prompt = require('prompt-sync')();

const status = prompt("Introduza o status do lead (Novo, Contactado, Proposta, Negociação ou Ganho: ").toLowerCase();

if (status === "novo") {
    console.log("O lead está no primeiro estado do funil, o próximo passo é Contactar o lead.");
} else if (status === "contactado") {
    console.log("O lead está no segundo estado do funil, o próximo passo é Enviar Proposta.");
} else if (status === "proposta") {
    console.log("O lead está no terceiro estado do funil, o próximo passo é Negociar.");
} else if (status === "negociacao") {
    console.log("O lead está no quarto estado do funil, o próximo passo é Fechar a venda.");
} else if (status === "ganho") {
    console.log("O lead chegou ao último estado do funil, o ciclo está fechado.");
} else {
    console.log("Status inválido ou mal introduzido. Por favor, introduza um status válido (Novo, Contactado, Proposta, Negociação ou Ganho).");
}