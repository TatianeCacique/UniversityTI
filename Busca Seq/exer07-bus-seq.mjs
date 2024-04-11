//Crie uma função buscaSequencialDicionario(dicionario, chave) que recebe um dicionário e uma chave como parâmetros 
//e retorna o valor associado à chave no dicionário, ou undefined se a chave não for encontrada.

const dicionario = [
    { chave: "a", valor: 1 },
    { chave: "b", valor: 2 },
    { chave: "c", valor: 3 }
];

function buscaSequencialDicionario(dicionario, chave) {
    for (let i = 0; i < dicionario.length; i++) {
        if (dicionario[i].chave === chave) {
            return dicionario[i].valor;
        }
    }
    return undefined;
}

const chave = "b";
const valorEncontrado = buscaSequencialDicionario(dicionario, chave);
console.log(valorEncontrado);