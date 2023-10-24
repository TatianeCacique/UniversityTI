// Preenchendo a matriz com números inteiros aleatórios entre 1 e 30
let matriz = [];
for (let i = 0; i < 2; i++) {
    matriz[i] = [];
    for (let j = 0; j < 4; j++) {
        matriz[i][j] = Math.floor(Math.random() * 30) + 1;
    }
}

// Calculando a quantidade de elementos entre 12 e 20 em cada linha
let qtdLinha1 = 0;
let qtdLinha2 = 0;
for (let i = 0; i < 4; i++) {
    if (matriz[0][i] >= 12 && matriz[0][i] <= 20) {
        qtdLinha1++;
    }
    if (matriz[1][i] >= 12 && matriz[1][i] <= 20) {
        qtdLinha2++;
    }
}

// Mostrando a quantidade de elementos entre 12 e 20 em cada linha
console.log(`Quantidade de elementos entre 12 e 20 na linha 1: ${qtdLinha1}`);
console.log(`Quantidade de elementos entre 12 e 20 na linha 2: ${qtdLinha2}`);

// Calculando a média dos elementos pares da matriz
let somaPares = 0;
let qtdPares = 0;
for (let i = 0; i < 2; i++) {
    for (let j = 0; j < 4; j++) {
        if (matriz[i][j] % 2 === 0) {
            somaPares += matriz[i][j];
            qtdPares++;
        }
    }
}
let mediaPares = somaPares / qtdPares;

// Mostrando a média dos elementos pares da matriz
console.log(`Média dos elementos pares da matriz: ${mediaPares}`);
