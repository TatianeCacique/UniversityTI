//Crie uma função recursiva que implementa a busca binária em um array ordenado de objetos.

function buscaBinariaObj(array, chave, inicio = 0, fim = array.length - 1) {
    if (inicio > fim) {
        return -1; // Retorna -1 se o elemento não for encontrado
    }

    const meio = Math.floor((inicio + fim) / 2);

    if (array[meio].chave === chave) {
        return meio; // Retorna o índice se o elemento for encontrado
    } else if (array[meio].chave < chave) {
        return buscaBinariaObj(array, chave, meio + 1, fim); // Busca na metade superior do array
    } else {
        return buscaBinariaObj(array, chave, inicio, meio - 1); // Busca na metade inferior do array
    }
}
