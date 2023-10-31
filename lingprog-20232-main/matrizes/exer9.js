// Criando a matriz 3x3
let matriz = [];
for (let i = 0; i < 3; i++) {
    matriz[i] = [];
    for (let j = 0; j < 3; j++) {
        matriz[i][j] = parseFloat(prompt(`Digite o valor da posição [${i}][${j}]:`));
    }
}

// Pedindo o valor a ser multiplicado
let valor = parseFloat(prompt("Digite o valor a ser multiplicado:"));

// Multiplicando cada elemento da matriz pelo valor digitado
for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
        matriz[i][j] *= valor;
    }
}

// Mostrando a matriz resultante
for (let i = 0; i < 3; i++) {
    console.log(matriz[i]);
}
