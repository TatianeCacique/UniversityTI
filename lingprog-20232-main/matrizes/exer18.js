//Matriz 5x5 preenchida com números reais
let matrix = [];
for (let i = 0; i < 5; i++) {
    matrix[i] = [];
    for (let j = 0; j < 5; j++) {
        matrix[i][j] = Math.random() * 10; //gera um número real aleatório entre 0 e 10
    }
}

//Soma dos elementos na diagonal secundária
let sum = 0;
for (let i = 0; i < 5; i++) {
    sum += matrix[i][4 - i];
}

console.log(matrix);
console.log("A soma dos elementos da diagonal secundária é:", sum);
