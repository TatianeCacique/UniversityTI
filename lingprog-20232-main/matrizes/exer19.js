const matrix = new Array(8);
for (let i = 0; i < matrix.length; i++) {
    matrix[i] = new Array(6);
}

for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
        matrix[i][j] = Math.floor(Math.random() * 100);
    }
}

for (let i = 0; i < matrix.length; i += 2) {
    let sum = 0;
    for (let j = 0; j < matrix[i].length; j++) {
        sum += matrix[i][j];
    }
    const average = sum / matrix[i].length;
    console.log(`Average of row ${i}: ${average}`);
}
