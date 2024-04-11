//Crie uma função buscaSequencialOrdenada(lista, valor) que utiliza a técnica de busca sequencial em uma lista ordenada 
//e retorna o índice da primeira ocorrência do valor na lista, ou -1 se o valor não for encontrado.

function buscaSequencialOrdenada(lista, valor){
    let inicio = 0;
    let fim = lista.length - 1;
    
    while (inicio <= fim) {
        let meio = Math.floor((inicio + fim) / 2);
        
        if (lista[meio] === valor) {
            return meio;
        } else if (lista[meio] < valor) {
            inicio = meio + 1;
        } else {
            fim = meio - 1;
        }
    }
    
    return -1;
}
