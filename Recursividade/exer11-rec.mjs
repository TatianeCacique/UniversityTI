//Busca Binária: Implemente uma função recursiva que realize uma busca binária em um array ordenado.

function binarySearch(arr, target, start = 0, end = arr.length - 1) {
    if (start > end) {
        return -1; // target not found
    }

    const mid = Math.floor((start + end) / 2);

    if (arr[mid] === target) {
        return mid; // target found
    } else if (arr[mid] < target) {
        return binarySearch(arr, target, mid + 1, end); // search right half
    } else {
        return binarySearch(arr, target, start, mid - 1); // search left half
    }
}

const arr = [1, 3, 5, 7, 9];
const target = 5;
const result = binarySearch(arr, target);

console.log(result); // Output: 2