//Considere uma lista de objetos representando pessoas, cada um com um nome e idade. 
//Crie uma função que recebe um nome como parâmetro e retorna o objeto da pessoa com esse nome, 
//ou null se a pessoa não for encontrada.

const pessoas = [
    {nome: "João", idade: 20},
    {nome: "Maria", idade: 25},
    {nome: "Pedro", idade: 30},
];

function buscarPessoaPorNome(nome) {
    for(let i = 0; i < pessoas.length; i++) {
        if(pessoas[i].nome === nome) {
            return pessoas[i];
        }
    }
    return null;
}

console.log(buscarPessoaPorNome("João")); // {nome: "João", idade: 20}
console.log(buscarPessoaPorNome("Maria")); // {nome: "Maria", idade: 25}
console.log(buscarPessoaPorNome("Pedro")); // {nome: "Pedro", idade: 30}
console.log(buscarPessoaPorNome("Ana")); // null
