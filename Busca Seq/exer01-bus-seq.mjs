//Crie uma função buscaSequencial(lista, valor) que recebe uma lista de elementos 
//e um valor como parâmetros e retorna o índice da primeira ocorrência do valor na lista, 
//ou -1 se o valor não for encontrado.

let comp
function buscaSequencial(lista,valor){
    for(let i = 0; i <lista.length; i++){
        comp++
        if(valor === lista[i]) return i
    }
    return -1
}

const marcas = ["ford", "toyota", "acura", "Alfa romeo", "Audi", "Bentley", "BMW", "Chevrolet", "Citroën", "Ferrari", "Honda", "Hyundai", "Jeep"]

console.log("Posição de toyota: ", buscaSequencial(marcas, "toyota"))
console.log("Posição de Citroën: ", buscaSequencial(marcas, "Citroën"))
console.log("Posição de Jeep: ", buscaSequencial(marcas, "Jeep"))
console.log("Posição de BMW: ", buscaSequencial(marcas, "BMW"))
