//Crie uma função buscaIntervalo(lista, valorMin, valorMax) que recebe uma lista ordenada de números 
//e dois valores como parâmetros (valor mínimo e valor máximo) 
//e retorna um array com os índices de todas as ocorrências dos valores na lista que estão dentro do intervalo especificado.

function buscaIntervalo(lista, valorMin, valorMax) {
    let indices = [];
    for (let i = 0; i < lista.length; i++) {
        if (lista[i] >= valorMin && lista[i] <= valorMax) {
            indices.push(i);
        }
    }
    return indices;
}

let lista = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let valorMin = 3;
let valorMax = 7;
console.log(buscaIntervalo(lista, valorMin, valorMax)); // [2, 3, 4, 5, 6]
