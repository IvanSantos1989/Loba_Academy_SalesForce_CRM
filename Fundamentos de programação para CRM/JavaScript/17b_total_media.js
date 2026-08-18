// Resuloção do exercicio do slide 17 b
const orcamentos = [12000, 5000, 8000, 20000, 3000];

// Acumular total com inicialização com valor 0
let total = 0;

// ciclo for para percorrer o array e acumular o valor do orçamento ao total
for (i=0; i < orcamentos.length; i++) {
    // adiciona o valor actual ao total
    total = total + orcamentos[i];
}

// calcula a média dividindo o total pelo número de elementos no array
const media = total / orcamentos.length;

// Apresenta o resultado do total
console.log("Total dos orçamentos: " + total);

// Apresenta o resultado da média
console.log("Média dos orçamentos: " + media);