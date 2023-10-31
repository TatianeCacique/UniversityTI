// Define a matriz 6x4
let matriz = [
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 10, 11, 12],
    [13, 14, 15, 16],
    [17, 18, 19, 20],
    [21, 22, 23, 24]
];

// Percorre cada linha da matriz
for (let i = 0; i < matriz.length; i++) {
    let maiorElemento = matriz[i][0]; // Define o maior elemento da linha como o primeiro elemento da linha
    // Percorre cada elemento da linha para encontrar o maior elemento
    for (let j = 1; j < matriz[i].length; j++) {
        if (matriz[i][j] > maiorElemento) {
            maiorElemento = matriz[i][j];
        }
    }
    // Multiplica cada elemento da linha pelo maior elemento encontrado
    for (let j = 0; j < matriz[i].length; j++) {
        matriz[i][j] *= maiorElemento;
    }
}

// Mostra a matriz resultante
console.log(matriz);
