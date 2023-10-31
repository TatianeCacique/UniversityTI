// Criando a matriz 12x13
let matriz = [];
for (let i = 0; i < 12; i++) {
    matriz[i] = [];
    for (let j = 0; j < 13; j++) {
        matriz[i][j] = Math.floor(Math.random() * 100); // preenchendo a matriz com números aleatórios de 0 a 99
    }
}

// Imprimindo a matriz original
console.log("Matriz original:");
for (let i = 0; i < 12; i++) {
    console.log(matriz[i].join("\t"));
}

// Dividindo cada elemento de cada linha pelo maior elemento em módulo daquela linha
for (let i = 0; i < 12; i++) {
    let maior = Math.abs(matriz[i][0]); // inicializando o maior elemento em módulo da linha
    for (let j = 1; j < 13; j++) {
        if (Math.abs(matriz[i][j]) > maior) {
            maior = Math.abs(matriz[i][j]); // atualizando o maior elemento em módulo da linha
        }
    }
    for (let j = 0; j < 13; j++) {
        matriz[i][j] /= maior; // dividindo cada elemento pelo maior elemento em módulo da linha
    }
}

// Imprimindo a matriz modificada
console.log("Matriz modificada:");
for (let i = 0; i < 12; i++) {
    console.log(matriz[i].join("\t"));
}
