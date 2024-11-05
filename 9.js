const custoTotal = 1000; // Custo fixo do evento
const precoMaximo = 150; // Preço máximo do ingresso
let melhorPreco = 0; // Melhor preço encontrado
let maiorLucro = 0; // Maior lucro encontrado

// Loop para testar preços de 100 a 150 reais
for (let preco = 100; preco <= precoMaximo; preco += 10) {
    // Cálculo do número de ingressos vendidos
    const diminuicaoPreco = precoMaximo - preco;
    const aumentoPublico = Math.floor((diminuicaoPreco / 10) * 50);
    const publico = 50 + aumentoPublico;

    // Cálculo do lucro
    const receita = preco * publico;
    const lucro = receita - custoTotal;

    // Verifica se o lucro atual é maior que o maior lucro encontrado
    if (lucro > maiorLucro) {
        maiorLucro = lucro;
        melhorPreco = preco;
    }
}

// Exibe o melhor preço e o maior lucro no console
console.log(`O melhor preço para venda de ingressos é: R$ ${melhorPreco}`);
console.log(`O maior lucro será de: R$ ${maiorLucro}`);
