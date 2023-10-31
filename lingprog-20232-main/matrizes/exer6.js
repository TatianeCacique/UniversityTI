// Criando a matriz 20x10 e o vetor de soma das colunas
let matriz = [];
let somaColunas = [];

// Preenchendo a matriz com números inteiros aleatórios entre 1 e 10
for (let i = 0; i < 20; i++) {
    matriz[i] = [];
    for (let j = 0; j < 10; j++) {
        matriz[i][j] = Math.floor(Math.random() * 10) + 1;
    }
}

// Somando as colunas e armazenando no vetor somaColunas
for (let j = 0; j < 10; j++) {
    let soma = 0;
    for (let i = 0; i < 20; i++) {
        soma += matriz[i][j];
    }
    somaColunas[j] = soma;
}

// Multiplicando cada elemento da matriz pela soma da coluna correspondente
for (let i = 0; i < 20; i++) {
    for (let j = 0; j < 10; j++) {
        matriz[i][j] *= somaColunas[j];
    }
}

// Mostrando a matriz resultante
console.log(matriz);
