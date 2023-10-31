// matriz com informações dos alunos
const alunos = [
    [1, "João", 20],
    [2, "Maria", 18],
    [3, "Pedro", 22],
    [4, "Ana", 19],
    [5, "Lucas", 25],
    [6, "Mariana", 21],
    [7, "Felipe", 23],
    [8, "Julia", 24],
    [9, "Gustavo", 26],
    [10, "Carla", 17]
];

// matriz com informações das disciplinas e notas dos alunos
const disciplinas = [
    [1, "Matemática", [7, 8, 9, 6, 5, 7, 8, 9, 10, 6]],
    [2, "Português", [6, 7, 8, 5, 6, 7, 8, 9, 10, 6]],
    [3, "História", [8, 9, 10, 7, 8, 9, 6, 5, 7, 8]],
    [4, "Geografia", [7, 8, 9, 6, 5, 7, 8, 9, 10, 6]],
    [5, "Física", [6, 7, 8, 5, 6, 7, 8, 9, 10, 6]],
    [6, "Química", [8, 9, 10, 7, 8, 9, 6, 5, 7, 8]],
    [7, "Biologia", [7, 8, 9, 6, 5, 7, 8, 9, 10, 6]],
    [8, "Inglês", [6, 7, 8, 5, 6, 7, 8, 9, 10, 6]],
    [9, "Educação Física", [8, 9, 10, 7, 8, 9, 6, 5, 7, 8]],
    [10, "Artes", [7, 8, 9, 6, 5, 7, 8, 9, 10, 6]]
];

// função para calcular a quantidade de alunos com idade entre 18 e 25 anos que fizeram mais de duas provas em determinada disciplina
function calcularQuantidadeAlunos(codigoDisciplina) {
    let quantidade = 0;
    for (let i = 0; i < disciplinas.length; i++) {
        if (disciplinas[i][0] === codigoDisciplina) {
            for (let j = 0; j < disciplinas[i][2].length; j++) {
                if (disciplinas[i][2][j] > 2) {
                    const codigoAluno = j + 1;
                    const idadeAluno = alunos[codigoAluno - 1][2];
                    if (idadeAluno >= 18 && idadeAluno <= 25) {
                        quantidade++;
                    }
                }
            }
            break;
        }
    }
    return quantidade;
}

// função para listar os códigos dos alunos que fizeram menos que três provas em determinada disciplina
function listarCodigosAlunos(codigoDisciplina) {
    const codigos = [];
    for (let i = 0; i < disciplinas.length; i++) {
        if (disciplinas[i][0] === codigoDisciplina) {
            for (let j = 0; j < disciplinas[i][2].length; j++) {
                if (disciplinas[i][2][j] < 3) {
                    const codigoAluno = j + 1;
                    if (!codigos.includes(codigoAluno)) {
                        codigos.push(codigoAluno);
                    }
                }
            }
            break;
        }
    }
    return codigos;
}

// função para calcular a média da idade dos alunos que não fizeram nenhuma prova em alguma disciplina
function calcularMediaIdade() {
    const alunosSemProva = [];
    for (let i = 0; i < alunos.length; i++) {
        let semProva = true;
        for (let j = 0; j < disciplinas.length; j++) {
            if (disciplinas[j][2][i] > 0) {
                semProva = false;
                break;
            }
        }
        if (semProva) {
            alunosSemProva.push(alunos[i][2]);
        }
    }
    const somaIdades = alunosSemProva.reduce((total, idade) => total + idade, 0);
    const mediaIdades = somaIdades / alunosSemProva.length;
    return mediaIdades;
}

// exemplo de uso das funções
const codigoDisciplina = 3;
const quantidadeAlunos = calcularQuantidadeAlunos(codigoDisciplina);
console.log(`Quantidade de alunos com idade entre 18 e 25 anos que fizeram mais de duas provas na disciplina ${codigoDisciplina}: ${quantidadeAlunos}`);

const codigosAlunos = listarCodigosAlunos(codigoDisciplina);
console.log(`Códigos dos alunos que fizeram menos que três provas na disciplina ${codigoDisciplina}: ${codigosAlunos}`);

const mediaIdade = calcularMediaIdade();
console.log(`Média da idade dos alunos que não fizeram nenhuma prova em alguma disciplina: ${mediaIdade}`);
