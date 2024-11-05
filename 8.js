// Crie um programa que pergunte ao usuário quantas cartas ele deseja virar de um baralho. Assuma que esse baralho possui cartas infinitas de 4 naipes e que variam de 1 a 10 em sua numeração. Imprima no console todas as N cartas sorteadas pelo sistema. 
 //Ex: 1 - 3 de coração

 // Definindo os naipes e números
const naipes = ["coração", "diamante", "paus", "espada"];
const numeros = Array.from({ length: 10 }, (_, i) => i + 1); // Cria um array de 1 a 10

// Pergunta ao usuário quantas cartas deseja virar
const quantidade = parseInt(prompt("Quantas cartas você deseja virar?"), 10);
const cartasSorteadas = [];

// Sorteia as cartas
for (let i = 0; i < quantidade; i++) {
    const numero = numeros[Math.floor(Math.random() * numeros.length)];
    const naipe = naipes[Math.floor(Math.random() * naipes.length)];
    cartasSorteadas.push(`${numero} de ${naipe}`);
}

// Imprime as cartas no console
console.log("Cartas sorteadas:");
cartasSorteadas.forEach((carta, index) => {
    console.log(`${index + 1} - ${carta}`);
});


