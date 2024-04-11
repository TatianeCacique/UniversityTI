//Crie uma função buscaSequencialMatriz(matriz, valor) que recebe uma matriz bidimensional 
//e um valor como parâmetros e retorna as coordenadas (linha, coluna) da primeira ocorrência do valor na matriz, 
//ou null se o valor não for encontrado.

function buscaSequencialMatriz(matriz, valor) {
    for (let i = 0; i < matriz.length; i++) {
        for (let j = 0; j < matriz[i].length; j++) {
            if (matriz[i][j] === valor) {
                return [i, j];
            }
        }
    }
    return null;
}