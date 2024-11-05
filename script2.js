let livro1 = {}
let livro2 = {}

livro1.nome = prompt("Qual o nome do 1° livro? ")
livro1.autor = prompt("Qual o nome do autor do 1° livro? ")
livro1.ano = prompt("Qual o ano de publicação do 1° livro? ")

livro2.nome = prompt("Qual o nome do 2° livro? ")
livro2.autor = prompt("Qual o nome do autor do 2° livro? ")
livro2.ano = prompt("Qual o ano de publicação do 2° livro? ")

if (livro1.ano < livro2.ano) {
    console.log(`Livro mais antigo: ${livro1.nome}\nAno de fundação: ${livro1.ano}`)
}
else {
    console.log(`Livro mais antigo: ${livro2.nome}\nAno de fundação: ${livro2.ano}`)
}

if (livro1.nome == 'Estudando Programação' || livro2.nome == 'Estudando Programação') {
    console.log("O nome do livro é Estudando Programação?\nSim")
}
else {
    console.log("O nome do livro é Estudando Programação?\nNão")
}

if (livro1.autor == livro2.autor) {
    console.log(`Os 2 livros são do autor ${livro1.autor} `)
}
else {
    console.log(`Os livros são de 2 autores diferentes, sendo eles: ${livro1.autor} e ${livro2.autor}`)
}