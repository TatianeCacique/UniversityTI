//Busca sequencial: Percorre o vetor, verificando se cada um dos elementos correspone ao valor de busca. Ao encontrar uma correspodencia, retorna a posição onde o valor de busca está no vetor (mostra a posição)
//caso o valor de busca não existia no vetor, retorna o valor convencional -1 ( ou tras a mensagem "não achou", caso coloque a string)

let comparacao
function buscaSequencial(vet, valorBusca){
    comparacao = 0
    for(let i = 0; i < vet.length; i++ ){
        comparacao++
        if(vet[i] === valorBusca ) return i  
    }
    return -1
}

//import { nomes } from './data/vetor-nomes.mjs'
//console.log("Posição de ALEXANDRE: ", buscaSequencial(nomes, "ALEXANDRE"), "Comparações: ", comparacao)

const frutas = [ "laranja", "maça", "uva", "pera", "jabuticaba", "limão", "mamão" ]

console.log("Posição de pera: ", buscaSequencial(frutas,"pera"))
console.log("Posição de uva: ", buscaSequencial(frutas,"uva"))
console.log("Posição de laranja: ", buscaSequencial(frutas,"laranja"))
console.log("Posição de abacate: ", buscaSequencial(frutas,"abacate"))