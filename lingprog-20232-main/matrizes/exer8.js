// Criando as matrizes
let matriz1 = [];
let matriz2 = [];
let matrizSoma = [];
let matrizDiferenca = [];

// Preenchendo as matrizes 1 e 2 com números inteiros aleatórios
for (let i = 0; i < 3; i++) {
    matriz1[i] = [];
    matriz2[i] = [];
    matrizSoma[i] = [];
    matrizDiferenca[i] = [];
    for (let j = 0; j < 8; j++) {
        matriz1[i][j] = Math.floor(Math.random() * 10);
        matriz2[i][j] = Math.floor(Math.random() * 10);
    }
}

// Calculando a soma e a diferença das matrizes
for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 8; j++) {
        matrizSoma[i][j] = matriz1[i][j] + matriz2[i][j];
        matrizDiferenca[i][j] = matriz1[i][j] - matriz2[i][j];
    }
}

// Mostrando as matrizes
console.log("Matriz 1:");
console.table(matriz1);
console.log("Matriz 2:");
console.table(matriz2);
console.log("Matriz Soma:");
console.table(matrizSoma);
console.log("Matriz Diferença:");
console.table(matrizDiferenca);
