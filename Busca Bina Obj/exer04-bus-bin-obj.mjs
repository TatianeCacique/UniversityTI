//Crie um array de objetos com nome, idade e profissão. 
//Escreva uma função que recebe uma propriedade como parâmetro e retorna um objeto com as propriedades como chaves 
//e arrays de objetos como valores, agrupando os objetos por propriedade usando a busca binária para inserir os objetos nos arrays.

// Array de objetos
const pessoas = [
    { nome: "João", idade: 25, profissao: "Engenheiro" },
    { nome: "Maria", idade: 30, profissao: "Advogada" },
    { nome: "Pedro", idade: 28, profissao: "Programador" },
    { nome: "Ana", idade: 35, profissao: "Médica" },
    { nome: "Carlos", idade: 22, profissao: "Estudante" }
];

// Função para agrupar os objetos por propriedade
function agruparPorPropriedade(propriedade) {
    // Ordena o array de objetos pela propriedade
    pessoas.sort((a, b) => a[propriedade] > b[propriedade] ? 1 : -1);

    // Objeto para armazenar os arrays de objetos agrupados
    const grupos = {};

    // Percorre o array de objetos
    pessoas.forEach(pessoa => {
        const valorPropriedade = pessoa[propriedade];

        // Verifica se o grupo já existe
        if (!grupos[valorPropriedade]) {
            grupos[valorPropriedade] = [];
        }

        // Insere o objeto no grupo correspondente
        grupos[valorPropriedade].push(pessoa);
    });

    return grupos;
}

// Exemplo de uso da função
const gruposPorIdade = agruparPorPropriedade("idade");
console.log(gruposPorIdade);

const gruposPorProfissao = agruparPorPropriedade("profissao");
console.log(gruposPorProfissao);