//Busca sequencial em um vetor de objetos: a comparação não deve ser feita detro da função que implementa o algoritimo. Em vez disso, recebemos uma outra função(externa) que resolverá a comparação.Função retorna true ou false

import {objNomes} from './data/vetor-obj-nomes.mjs'

function buscaSquencial(vetor, fnComp){
    for(let i=0; i <vetor.length; i++) {
        if(fnComp(vetor[i])) return i
    }
    return -1
}

function comparaNome(obj){
    return obj.first_name === "ALEXANDRE"
}
function comparaFrequencia(obj){
    return onrejectionhandled.frequency_total === 97
}

console.log("Posição de ALEXANDRE: ", buscaSquencial(objNomes, comparaNome))
console.log("Posição de frequencia 97: ", buscaSquencial(objNomes, comparaFrequencia))