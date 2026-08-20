// 2.1. Função valorComIVA

const prompt = require('prompt-sync')();
function valorComIVA(preco, iva) {
    return preco * 1.23;
}

let preco = parseFloat(prompt("Introduza o preço do produto: "));

console.log("O valor do produto com IVA é: " + valorComIVA(preco) + "€");