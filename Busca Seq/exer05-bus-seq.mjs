//Crie uma função buscaTodasOcorrencias(lista, valor) que recebe uma lista de elementos e um valor como parâmetros 
//e retorna um array com os índices de todas as ocorrências do valor na lista.

function buscaTodasOcorrencias(lista, valor){
    let indices = [];
    for(let i = 0; i < lista.length; i++){
        if(lista[i] === valor){
            indices.push(i);
        }
    }
    return indices;
}
