//Crie um array de objetos com nome, idade e profissão, ordenados por nome. 
//Escreva uma função que implementa a busca binária e retorna o objeto com o nome especificado, 
//ou null se não for encontrado.

const pessoas = [
    { nome: "Ana", idade: 28, profissao: "Médica" },
    { nome: "João", idade: 25, profissao: "Engenheiro" },
    { nome: "Maria", idade: 30, profissao: "Advogada" },
    { nome: "Pedro", idade: 35, profissao: "Professor" }
];

function buscaBinaria(vetor, fnComp, valorBusca) {
    let ini = 0;
    let fim = vetor.length - 1;

    while (fim >= ini) {
        let meio = Math.floor((ini + fim) / 2);
        switch (fnComp(vetor[meio], valorBusca)) {
            case 0:
                return vetor[meio];
            case 1:
                ini = meio + 1;
                break;
            default:
                fim = meio - 1;
        }
    }
    return null;
}



