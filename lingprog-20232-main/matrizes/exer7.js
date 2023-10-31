// Criando as matrizes M e N
let M = [];
let N = [];

// Preenchendo a matriz M com valores aleatórios
for (let i = 0; i < 4; i++) {
    M[i] = [];
    for (let j = 0; j < 6; j++) {
        M[i][j] = Math.floor(Math.random() * 10);
    }
}

// Preenchendo a matriz N com valores aleatórios
for (let i = 0; i < 6; i++) {
    N[i] = [];
    for (let j = 0; j < 4; j++) {
        N[i][j] = Math.floor(Math.random() * 10);
    }
}

// Imprimindo as matrizes M e N
console.log("Matriz M:");
for (let i = 0; i < 4; i++) {
    console.log(M[i]);
}

console.log("Matriz N:");
for (let i = 0; i < 6; i++) {
    console.log(N[i]);
}

// Calculando a soma de linhas de M com as colunas de N
let soma = [];
for (let i = 0; i < 4; i++) {
    soma[i] = [];
    for (let j = 0; j < 4; j++) {
        soma[i][j] = 0;
        for (let k = 0; k < 6; k++) {
            soma[i][j] += M[i][k] * N[k][j];
        }
    }
}

// Imprimindo a matriz resultante da soma
console.log("Matriz resultante da soma:");
for (let i = 0; i < 4; i++) {
    console.log(soma[i]);
}
