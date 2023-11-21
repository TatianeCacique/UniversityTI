const carros = [];
const notas = Array.from({ length: 4 }, () => Array(5).fill(0));

// Cadastro dos carros
function cadastrarCarro() {
    const carro = {};
    carro.marca = prompt("Digite a marca do carro:");
    carro.modelo = prompt("Digite o modelo do carro:");
    carro.ano = prompt("Digite o ano do carro:");
    carro.valor = prompt("Digite o valor do carro:");

    for (let i = 0; i < 5; i++) {
        notas[carros.length][i] = parseInt(prompt(`Digite a nota ${i + 1} do carro:`));
    }
    carros.push(carro);
}

// Media das notas dos carros
function calcularMediaNotas() {
    for (let i = 0; i < carros.length; i++) {
        let somaNotas = 0;
        for (let j = 0; j < 5; j++) {
            somaNotas += notas[i][j];
        }
        const media = somaNotas / 5;
        console.log(`Carro: ${carros[i].marca} ${carros[i].modelo}, Média de Notas: ${media}`);
    }
}

// modelo do carro com menor nota
function modeloMenorNota() {
    for (let i = 0; i < 5; i++) {
        let menorNota = Infinity;
        let modeloMenorNota = "";
        for (let j = 0; j < carros.length; j++) {
            if (notas[j][i] < menorNota) {
                menorNota = notas[j][i];
                modeloMenorNota = carros[j].modelo;
            }
        }
        console.log(`Avaliação ${i + 1}: Modelo com menor nota: ${modeloMenorNota}`);
    }
}

// Avaliação com menor nota
function avaliacaoMenorMedia() {
    let menorMedia = Infinity;
    let avaliacaoMenorMedia = -1;
    for (let i = 0; i < 5; i++) {
        let somaNotas = 0;
        for (let j = 0; j < carros.length; j++) {
            somaNotas += notas[j][i];
        }
        const media = somaNotas / carros.length;
        if (media < menorMedia) {
            menorMedia = media;
            avaliacaoMenorMedia = i + 1;
        }
    }
    console.log(`Avaliação com menor média: ${avaliacaoMenorMedia}`);
}
