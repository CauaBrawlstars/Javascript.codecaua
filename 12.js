
//Leia 10 números inteiros. Mostre os índices onde os números digitados foram negativos.


const numeros = [];
const indicesNegativos = [];

// Lê 10 números inteiros
for (let i = 0; i < 10; i++) {
    const numero = parseInt(prompt(`Digite o ${i + 1}º número:`), 10);
    numeros.push(numero);
}

// Verifica quais números são negativos e armazena seus índices
for (let i = 0; i < numeros.length; i++) {
    if (numeros[i] < 0) {
        indicesNegativos.push(i);
    }
}

// Mostra os índices dos números negativos
if (indicesNegativos.length > 0) {
    console.log("Índices dos números negativos:", indicesNegativos);
} else {
    console.log("Não há números negativos.");
}
