//Crie um array de objetos com nome, idade e profissão. 
//Escreva uma função que recebe um nome como parâmetro e retorna o índice do objeto correspondente no array, 
//ou -1 se não for encontrado.

const pessoas = [
    {nome: "Fernanda", idade: 35, profissao: "dentista"},
    {nome: "Ana", idade: 19, profissao: "babá"},
    {nome: "Bruno", idade: 40, profissao: "médico"},
    {nome: "israel", idade: 22, profissao: "contador"}
];

function buscaPessoa(nome){
    for(let i = 0; i < pessoas.length; i ++){
        if(pessoas[i].nome === nome) {
            return i;
        }
    }
    return -1;
}

console.log(buscaPessoa("Ana")); //1