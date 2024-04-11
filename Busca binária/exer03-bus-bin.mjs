//Crie uma função que recebe uma lista ordenada de números como parâmetro e retorna o valor máximo da lista.

function getMaxValue(list) {
    return list[list.length - 1];
}

let nums = [0, 11, 22, 33, 44, 55, 66, 77, 88, 99];

console.log('Valor máximo da lista: ', getMaxValue(nums));
