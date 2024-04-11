//Crie uma função selectionSort(lista) que recebe um array de elementos como parâmetro 
//e ordena o array em ordem crescente usando o algoritmo Selection Sort.


function selectionSort(lista) {
    for (let i = 0; i < lista.length - 1; i++) {
        let minIndex = i;
        for (let j = i + 1; j < lista.length; j++) {
            if (lista[j] < lista[minIndex]) {
                minIndex = j;
            }
        }
        if (minIndex !== i) {
            [lista[i], lista[minIndex]] = [lista[minIndex], lista[i]];
        }
    }
}

const lista = [64, 25, 12, 22, 11];
selectionSort(lista);
console.log(lista);