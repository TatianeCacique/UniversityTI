// Criando a matriz 5x5
let matriz = [];
for (let i = 0; i < 5; i++) {
    matriz[i] = [];
    for (let j = 0; j < 5; j++) {
        matriz[i][j] = Math.floor(Math.random() * 10);
    }
}

// Criando os vetores de soma das linhas e colunas
let somaLinhas = [];
let somaColunas = [];

// Preenchendo os vetores de soma das linhas e colunas
for (let i = 0; i < 5; i++) {
    let somaLinha = 0;
    let somaColuna = 0;
    for (let j = 0; j < 5; j++) {
        somaLinha += matriz[i][j];
        somaColuna += matriz[j][i];
    }
    somaLinhas.push(somaLinha);
    somaColunas.push(somaColuna);
}

// Imprimindo a matriz e os vetores de soma das linhas e colunas
console.log("Matriz:");
for (let i = 0; i < 5; i++) {
    console.log(matriz[i]);
}
console.log("Vetor de soma das linhas:");
console.log(somaLinhas);
console.log("Vetor de soma das colunas:");
console.log(somaColunas);
