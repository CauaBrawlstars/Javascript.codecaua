/*Crie um objeto do tipo pessoa que possua o nome, a idade e a cidade onde mora.
 Mostre esse objeto no console do navegador. Posteriormente, mostre um menu de atualização de idade ou cidade. 
 Após o usuário escolher qual dado deseja atualizar, leia a atualização desse dado, faça a alteração no objeto e imprima novamente o objeto no console.
*/
let aluno = {}
let atualizar, atualizacoes

aluno.nome = prompt("Digite seu nome: ")
aluno.idade = Number(prompt("Digite sua idade: "))
aluno.cidade = prompt("Digite sua cidade: ")

console.log(`Nome: ${aluno.nome} \nIdade: ${aluno.idade}\nCidade: ${aluno.cidade}`)

atualizar = prompt("Deseja alterar algum dado? Se sim, aperte 1, caso queira manter os dados e finalizar, aperte 0")

if (atualizar == 1) {
    atualizacoes = prompt("Qual dado deseja atualizar?\nSelecione:\n1 - Atualizar nome\n2 - Atualizar idade\n3 - Atualizar cidade")
    if (atualizacoes == 1) {
        aluno.nome = prompt("Digite seu nome: ")
    }
    else if (atualizacoes == 2) {
        aluno.idade = Number(prompt("Digite sua idade: "))
    }
    else if (atualizacoes == 3) {
        aluno.cidade = (prompt("Digite sua cidade: "))
    }
}
console.log("Dados Atualizados!")
console.log(`Nome: ${aluno.nome} \nIdade: ${aluno.idade}\nCidade: ${aluno.cidade}`)
