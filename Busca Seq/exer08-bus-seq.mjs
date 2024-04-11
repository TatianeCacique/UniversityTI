//Crie uma função buscaPropriedade(objeto, nomePropriedade) que recebe um objeto e um nome de propriedade como parâmetros 
//e retorna o valor da propriedade no objeto, ou undefined se a propriedade não existir.

function buscaPropriedade(objeto, nomePropriedade) {
    if (objeto.hasOwnProperty(nomePropriedade)) {
        return objeto[nomePropriedade];
    } else {
        return undefined;
    }
}