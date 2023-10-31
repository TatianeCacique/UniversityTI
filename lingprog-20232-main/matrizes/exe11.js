// Receber a idade de oito alunos e armazená-las em um vetor
let idades = [];
for (let i = 0; i < 8; i++) {
    let idade = parseInt(prompt(`Digite a idade do ${i+1}º aluno:`));
    idades.push(idade);
}

// Armazenar o código de cinco disciplinas em um outro vetor
let disciplinas = [];
for (let i = 0; i < 5; i++) {
    let disciplina = prompt(`Digite o código da ${i+1}ª disciplina:`);
    disciplinas.push(disciplina);
}

// Armazenar em uma matriz a quantidade de provas que cada aluno fez em cada disciplina
let matrizProvas = [];
for (let i = 0; i < 8; i++) {
    matrizProvas[i] = [];
    for (let j = 0; j < 5; j++) {
        let qtdProvas = parseInt(prompt(`Digite a quantidade de provas que o ${i+1}º aluno fez na ${disciplinas[j]}:`));
        matrizProvas[i][j] = qtdProvas;
    }
}
