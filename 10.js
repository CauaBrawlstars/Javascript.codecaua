//leia o (prompt) o nome e a nota de 5 alunos. Posteriormente, caucule a media e imprima no console o nome dos alunos que estao abaixo da media

let nomes = []
let notas = []

for(let i=0; i < 5; i++){
    let nome=prompt(`Digite o nome do aluno ${i + 1}:`)
    let nota=parseFloat(prompt(`Digite a nota do aluno ${nome}`))
    nomes.push(nome)
    notas.push(nota)
}
let soma = notas.reduce((acc, nota) => acc + nota, 0)
let media = soma / notas.length

console.log("Alunos abaixo da média:")
for (let i = 0; i < 5; i++) {
    if (notas[i] < media) {
        console.log(nomes[i])
    }
}