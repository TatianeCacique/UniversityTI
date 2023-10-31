// Criando a matriz 12x4 com valores aleatórios
let vendasLoja = [];
for (let i = 0; i < 12; i++) {
    vendasLoja[i] = [];
    for (let j = 0; j < 4; j++) {
        vendasLoja[i][j] = Math.floor(Math.random() * 10000);
    }
}

// Definindo os nomes dos meses
const meses = [
    "Janeiro",
    "Fevereiro",
    "Março",
    "Abril",
    "Maio",
    "Junho",
    "Julho",
    "Agosto",
    "Setembro",
    "Outubro",
    "Novembro",
    "Dezembro",
];

// Calculando o total vendido em cada mês
let totalMes = [];
for (let i = 0; i < 12; i++) {
    let total = 0;
    for (let j = 0; j < 4; j++) {
        total += vendasLoja[i][j];
    }
    totalMes.push(total);
}

// Mostrando o total vendido em cada mês
console.log("Total vendido em cada mês:");
for (let i = 0; i < 12; i++) {
    console.log(`${meses[i]}: R$ ${totalMes[i].toFixed(2)}`);
}

// Calculando o total vendido em cada semana durante todo o ano
let totalSemana = [0, 0, 0, 0];
for (let i = 0; i < 12; i++) {
    for (let j = 0; j < 4; j++) {
        totalSemana[j] += vendasLoja[i][j];
    }
}

// Mostrando o total vendido em cada semana durante todo o ano
console.log("Total vendido em cada semana durante todo o ano:");
for (let i = 0; i < 4; i++) {
    console.log(`Semana ${i + 1}: R$ ${totalSemana[i].toFixed(2)}`);
}

// Calculando o total vendido pela loja no ano
let totalAno = 0;
for (let i = 0; i < 12; i++) {
    for (let j = 0; j < 4; j++) {
        totalAno += vendasLoja[i][j];
    }
}

// Mostrando o total vendido pela loja no ano
console.log(`Total vendido pela loja no ano: R$ ${totalAno.toFixed(2)}`);
