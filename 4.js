//Faça um programa que receba um número e calcule o fatorial desse número.
let numero = parseInt( prompt("digite um numeero que nao seja negativo para achar seu fatorial")) 
if (isNaN(numero) || numero <0 ){
    alert("Isso nao e um numero")
}

let fatorial = 1
let i = 1

while (i <= numero) {
    fatorial *= i
    i--
}
console.log(`O fatorial de ${numero} é: ${fatorial}`)