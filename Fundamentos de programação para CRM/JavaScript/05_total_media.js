// 2.2. Total e média de um array de orçamentos
orcamentos = [1300, 550, 800, 940, 2000];

total = 0;

for (i=0; i < orcamentos.length; i++) {
    total = total + orcamentos[i];
}
media = total / orcamentos.length;

console.log("Total dos orçamentos: " + total);
console.log("Média dos orçamentos: " + media);