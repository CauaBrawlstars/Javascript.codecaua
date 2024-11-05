//Gere um vetor com 10 valores inteiros. Posteriomente, digite um intervalo de valores. Mostre na tela os índices e os valores que estão neste intervalo definido.

// Gera um vetor com 10 valores inteiros aleatórios
const vetor = Array.from({ length: 10 }, () => Math.floor(Math.random() * 100)); 

console.log("Vetor gerado:", vetor)


const valorMinimo = parseInt(prompt("Digite o valor mínimo do intervalo:"), 10)
const valorMaximo = parseInt(prompt("Digite o valor máximo do intervalo:"), 10)


console.log(`Valores no intervalo de ${valorMinimo} a ${valorMaximo}:`)
for (let i = 0; i < vetor.length; i++) {
    if (vetor[i] >= valorMinimo && vetor[i] <= valorMaximo) {
        console.log(`Índice ${i}: Valor ${vetor[i]}`)
    }
}
