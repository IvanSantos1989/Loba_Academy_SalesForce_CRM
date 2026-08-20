// 1.1. Valor de uma oportunidade

const prompt = require('prompt-sync')(); // importar o módulo prompt-sync para permitir
// a entrada de dados pelo utilizador e ver na consola
let preco = parseFloat(prompt("Introduza o preço da oportunidade: "));
let quantidade = parseInt(prompt("Introduza a quantidade da oportunidade: "));
let desconto = parseFloat(prompt("Introduza o desconto da oportunidade: "));
let valorFinal = preco * quantidade * (1 - desconto/100);

console.log("O valor final da oportunidade é: " + valorFinal);