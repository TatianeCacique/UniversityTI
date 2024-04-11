//Crie um array de objetos com nome, idade e profissão. Escreva uma função que recebe um nome como parâmetro 
//e retorna o objeto correspondente do array, ou null se não for encontrado.

const pessoas = [
    { nome: "João", idade: 25, profissao: "Engenheiro" },
    { nome: "Maria", idade: 30, profissao: "Advogada" },
    { nome: "Pedro", idade: 35, profissao: "Professor" },
    { nome: "Ana", idade: 28, profissao: "Médica" }
];

function buscaPessoa(nome) {
    for (let i = 0; i < pessoas.length; i++) {
        if (pessoas[i].nome === nome) {
            return pessoas[i];
        }
    }
    return null;
}

console.log(buscaPessoa("João"));