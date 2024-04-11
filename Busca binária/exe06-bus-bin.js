// Função para gerar um número aleatório entre 1 e 100
function gerarNumeroAleatorio() {
    return Math.floor(Math.random() * 100) + 1;
}

// Função para realizar a busca binária
function buscaBinaria(numero, array) {
    let inicio = 0;
    let fim = array.length - 1;

    while (inicio <= fim) {
        let meio = Math.floor((inicio + fim) / 2);
        let chute = array[meio];

        if (chute === numero) {
            return meio;
        } else if (chute < numero) {
            inicio = meio + 1;
        } else {
            fim = meio - 1;
        }
    }

    return -1; // Retorna -1 se o número não for encontrado
}

// Função principal do jogo
function jogoAdivinhacao() {
    const numeroSecreto = gerarNumeroAleatorio();
    let tentativas = 0;
    let chute;

    do {
        chute = parseInt(prompt("Digite um número entre 1 e 100:"));

        if (isNaN(chute)) {
            console.log("Por favor, digite um número válido.");
        } else {
            tentativas++;
            const resultado = buscaBinaria(chute, [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100]);

            if (resultado === -1) {
                console.log("Número não encontrado. Tente novamente.");
            } else if (resultado === 0) {
                console.log(`Parabéns! Você acertou o número secreto em ${tentativas} tentativas.`);
            } else if (resultado < 0) {
                console.log("O número secreto é maior. Tente novamente.");
            } else {
                console.log("O número secreto é menor. Tente novamente.");
            }
        }
    } while (chute !== numeroSecreto);
}

// Iniciar o jogo
jogoAdivinhacao();