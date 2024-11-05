//faça um progama que receba n numeros positivos do usuario e cucule o somatorio desses numeros. ao digitar 0, o progama deve encerrar a entrada e mostrar o somatorio 
let somatorio = 0;
let numero;

while (true) {
    numero = parseFloat(prompt("Digite um número positivo (ou 0 para encerrar):"))

    if (numero === 0) {
        break
    } else if (numero > 0) {
        somatorio += numero;
    } else {
        console.log("Por favor, digite um número positivo ou 0 para encerrar.")
    }
}

console.log("O somatório dos números positivos é: " + somatorio)