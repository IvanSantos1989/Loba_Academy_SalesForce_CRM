// 2.3. Função maior
const prompt = require("prompt-sync")();

const orcamentos = [];
const numOrcamentos = parseInt(
  prompt("Quantos orçamentos pretende introduzir? "),
);

for (let i = 0; i < numOrcamentos; i++) {
  const valorOrcamento = parseInt(prompt("Orçamento " + (i + 1) + ": "));
  orcamentos.push(valorOrcamento);
}
function maior(valores) {
  let maiorValor = valores[0];
  for (let i = 1; i < valores.length; i++) {
    if (valores[i] > maiorValor) {
      maiorValor = valores[i];
    }
  }
  return maiorValor;
}
console.log("O maior orçamento é: " + maior(orcamentos));
