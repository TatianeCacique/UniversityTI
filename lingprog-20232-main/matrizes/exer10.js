//Matriz 5x5 preenchida com números inteiros aleatórios
let matrix = [];
for (let i = 0; i < 5; i++) {
    matrix[i] = [];
    for (let j = 0; j < 5; j++) {
        matrix[i][j] = Math.floor(Math.random() * 10);
    }
}

//Soma dos elementos na linha 4
let row4Sum = 0;
for (let j = 0; j < 5; j++) {
    row4Sum += matrix[4][j];
}

//Soma dos elementos na coluna 2
let col2Sum = 0;
for (let i = 0; i < 5; i++) {
    col2Sum += matrix[i][2];
}

//Soma dos elementos da diagonal principal
let mainDiagonalSum = 0;
for (let i = 0; i < 5; i++) {
    mainDiagonalSum += matrix[i][i];
}

//Soma dos elementos na diagonal secundária
let secondaryDiagonalSum = 0;
for (let i = 0; i < 5; i++) {
    secondaryDiagonalSum += matrix[i][4 - i];
}

//Soma de todos os elementos da matriz
let totalSum = 0;
for (let i = 0; i < 5; i++) {
    for (let j = 0; j < 5; j++) {
        totalSum += matrix[i][j];
    }
}

// Resultados
console.log("Matrix:");
console.log(matrix);
console.log("Sum of row 4: " + row4Sum);
console.log("Sum of column 2: " + col2Sum);
console.log("Sum of main diagonal: " + mainDiagonalSum);
console.log("Sum of secondary diagonal: " + secondaryDiagonalSum);
console.log("Total sum: " + totalSum);
