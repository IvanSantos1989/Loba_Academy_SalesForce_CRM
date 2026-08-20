// 1.3. Classificar o interesse (3 níveis)
// A pontuação de interesse (0 a 100):
const prompt = require('prompt-sync')(); // importar o módulo prompt-sync para permitir
// a entrada de dados pelo utilizador e ver na consola
let interesse = Number(prompt("Qual a sua pontuação de interesse (0 a 100)? "));

if (interesse >= 80) {
    console.log("Classificação do interesse: QUENTE!");
} else if (interesse >= 50) {
    console.log("Classificação do interesse: MORNO!");
} else {
    console.log("Classificação do interesse: FRIO!");
}

