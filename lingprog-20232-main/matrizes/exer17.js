const matrix = [];

//Matriz 10 x 10
for (let i = 0; i < 10; i++) {
    matrix[i] = [];
    for (let j = 0; j < 10; j++) {
        matrix[i][j] = 0;
    }
}

let diagonalSum = 0;

//Percorrer linhas e colunas 
for (let i = 0; i < 10; i++) {
    for (let j = 0; j < 10; j++) {
        //Se a linha e a coluna atuais forem iguais (ou seja, na diagonal), solicite ao usuário que insira um valor para esse elemento
        if (i === j) {
            matrix[i][j] = parseInt(prompt(`Insira um valor para o elemento (${i}, ${j}):`));
            //Adicione o valor a um total acumulado para os elementos diagonais
            diagonalSum += matrix[i][j];
        }
    }
}

//Depois que todos os elementos diagonais forem inseridos e somados, divida o total por 10 para obter a média
const diagonalAvg = diagonalSum / 10;

//Exibir a média para o usuário
console.log(`A média dos elementos diagonais é ${diagonalAvg}`);
