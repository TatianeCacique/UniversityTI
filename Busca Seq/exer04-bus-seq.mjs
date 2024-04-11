//Crie uma função que recebe uma lista de números como parâmetro e retorna o valor mínimo da lista.

const numeros = ["1", "5", "8", "15", "20", "36", "50"];

function buscaValorMenor(num){
    let menor = 0;
    for(let i = 0; i < num.length; i++){
        if(num[i] < menor){
            menor = num[i];
        }
    }
    return menor;
}

console.log(numeros(numeros)); // 1