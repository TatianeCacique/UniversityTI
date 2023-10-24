//matriz 3x5
const matrix = [];
for (let i = 0; i < 3; i++) {
    matrix.push([]);
    for (let j = 0; j < 5; j++) {
        matrix[i].push(Math.floor(Math.random() * 31));
    }
}

// quantidade de elementos entre 15 e 20
let count = 0;
for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 5; j++) {
        if (matrix[i][j] >= 15 && matrix[i][j] <= 20) {
            count++;
        }
    }
}

console.log(`The number of elements between 15 and 20 is ${count}.`);
