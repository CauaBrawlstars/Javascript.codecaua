let soma = 0
const quantidade = 20
let escolhido=(parseInt(prompt("Digite um numero pa nois ve um bglh")))
for (let n = 1; n <= quantidade; n++) {
    let numero = escolhido*2 +1
    soma += numero
}

console.log("A soma dos 20 primeiros números da sequência é: " + soma)
