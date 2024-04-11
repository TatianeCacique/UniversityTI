//. Combinações: Implemente uma função recursiva que gere todas as combinações de k elementos de um conjunto.

function combinations(set, k) {
    const result = [];

    function backtrack(combination, start) {
        if (combination.length === k) {
            result.push(combination.slice());
            return;
        }

        for (let i = start; i < set.length; i++) {
            combination.push(set[i]);
            backtrack(combination, i + 1);
            combination.pop();
        }
    }

    backtrack([], 0);
    return result;
}

const set = [1, 2, 3, 4, 5];
const k = 3;
const result = combinations(set, k);
console.log(result);