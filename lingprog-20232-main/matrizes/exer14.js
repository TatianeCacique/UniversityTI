//Matriz 2x3 
const matrix = [
    [1, 2, 3],
    [4, 5, 6]
];

// Variável de contagem
let count = 0;

// Loop por cada elemento da matriz
for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
        // Verifique se o elemento está fora do intervalo [5,15]
        if (matrix[i][j] < 5 || matrix[i][j] > 15) {
            // Se for, incremente a variável de contagem
            count++;
        }
    }
}

// variável de contagem
console.log(`Número de elementos fora do intervalo [5,15]: ${count}`);
