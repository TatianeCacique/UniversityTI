//Crie uma função que recebe uma lista ordenada de números como parâmetro e retorna o valor mínimo da lista.

function getMinValue(list) {
    return list[0];
}

let nums = [0, 11, 22, 33, 44, 55, 66, 77, 88, 99];

console.log('Valor mínimo da lista: ', getMinValue(nums));