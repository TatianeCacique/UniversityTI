//Crie uma função buscaBinaria(lista, valor) que recebe uma lista ordenada de elementos e um valor como parâmetros 
//e retorna o índice da primeira ocorrência do valor na lista, ou -1 se o valor não for encontrado.

let comps

function buscaBinaria(lista,valor){
    comps = 0
    let ini = 0
    let fim = vetor.length -1

    while(fim >= ini){
        comps++
        let meio = Math.floor((ini + fim)/2)
        if(valor === lista[meio]){
            comps++
            return meio
        } else if(valor > lista[meio]){
            comps += 2
            ini = meio + 1
        } else{
            comps += 2
            fim = meio - 1
        }
    }
}

let nums = [0, 22 , 33, 44, 55, 66, 77, 88, 99]
console.log('Posição de 33: ', buscaBinaria(nums, 33), ' Comparações: ', comps)