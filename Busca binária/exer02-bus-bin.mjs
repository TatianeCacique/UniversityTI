//Considere uma lista ordenada de objetos representando pessoas, cada um com um nome e idade. 
//Crie uma função que recebe um nome como parâmetro e retorna o objeto da pessoa com esse nome,
//ou null se a pessoa não for encontrada.

const pessoas = [
    { nome: "João", idade: 25},
    { nome: "Maria", idade: 30},
    { nome: "Pedro", idade: 35},
    { nome: "Ana", idade: 28}
];

let comps
function buscaBinaria(lista,valor){
    comps = 0
    let ini = 0
    let fim = lista.length -1

    while(fim >= ini){
        comps++
        let meio = Math.floor((ini + fim) / 2)
        if(valorBusca === vetor[meio]){
            comps++
            return meio
        }
        else if(valorBusca > vetor[meio]){
            comps += 2
            ini = meio + 1
        } else{
            comps += 2
            fim = meio - 1
        }
    }
    return null
}

console.log(buscaBinaria(pessoas, 'Maria'))