//Crie um array de objetos com nome, idade e profissão. 
//Escreva um código que compara o desempenho da busca binária com outros algoritmos de busca, como a busca sequencial.

// Array of objects
const people = [
    { name: "John", age: 25, profession: "Engineer" },
    { name: "Jane", age: 30, profession: "Teacher" },
    { name: "Mark", age: 35, profession: "Doctor" },
    { name: "Sarah", age: 40, profession: "Lawyer" },
];

// Sequential search
function sequentialSearch(array, target) {
    for (let i = 0; i < array.length; i++) {
        if (array[i].name === target) {
            return i;
        }
    }
    return -1;
}

// Binary search
function binarySearch(array, target) {
    let left = 0;
    let right = array.length - 1;

    while (left <= right) {
        let mid = Math.floor((left + right) / 2);

        if (array[mid].name === target) {
            return mid;
        } else if (array[mid].name < target) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }

    return -1;
}

// Test the search algorithms
const targetName = "Mark";

console.time("Sequential Search");
const sequentialIndex = sequentialSearch(people, targetName);
console.timeEnd("Sequential Search");

console.time("Binary Search");
const binaryIndex = binarySearch(people, targetName);
console.timeEnd("Binary Search");

console.log("Sequential Search Index:", sequentialIndex);
console.log("Binary Search Index:", binaryIndex);