//Crie uma função que recebe uma lista de números como parâmetro e retorna o valor máximo da lista.

const numeros = ["1", "5", "8", "15", "20", "36", "50"];

function buscaValorMaior(num){
    let maior = 0;
    for(let i = 0; i < num.length; i++){
        if(num[i] > maior){
            maior = num[i];
        }
    }
    return maior;
}

console.log(numeros(numeros)); // 50