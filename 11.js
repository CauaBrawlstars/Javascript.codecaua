/*leia 5 valores e rmazene em um vetor A. Sorteie 5 numeros e armazeneos em um vetor B.
 Faça o produto de cada indice do vetor A eo vetor B e armazene-os no vetor C. Ao final, imprima no console o vetor C.*/

 const A = []
const B = []
const C = []


for (let i = 0; i < 5; i++) {
    const valor = parseInt(prompt(`Digite o ${i + 1}º valor para o vetor A:`), 10)
    A.push(valor)
}


for (let i = 0; i < 5; i++) {
    const valorSorteado = Math.floor(Math.random() * 100)
    B.push(valorSorteado)
}


for (let i = 0; i < 5; i++) {
    C[i] = A[i] * B[i]
}


console.log("Vetor A:", A)
console.log("Vetor B:", B)
console.log("Vetor C (produto de A e B):", C)
