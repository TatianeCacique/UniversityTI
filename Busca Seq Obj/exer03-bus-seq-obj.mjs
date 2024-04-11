//Crie um array de objetos com nome, idade e profissão. 
//Escreva uma função que recebe uma propriedade 
//e um valor como parâmetros e retorna um novo array com os objetos que possuem a propriedade com o valor especificado.

const pessoas = [
    {nome: "Fernanda", idade: 35, profissao: "dentista"},
    {nome: "Ana", idade: 19, profissao: "babá"},
    {nome: "Bruno", idade: 40, profissao: "médico"},
    {nome: "israel", idade: 22, profissao: "contador"}
];

function buscaPessoa(prop, valor){
    let resultado = [];
    for(let i = 0; i < pessoas.length; i ++){
        if(pessoas[i][prop] === valor) {
            resultado.push(pessoas[i]);
        }
    }
    return resultado;
}

console.log(buscaPessoa("propriedade", "valor")); 
