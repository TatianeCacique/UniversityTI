function recursiveSum(array) {
    if (array.length === 0) {
        return 0;
    } else {
        return array[0] + recursiveSum(array.slice(1));
    }
}

const array = [1, 2, 3, 4, 5];
console.log(recursiveSum(array));