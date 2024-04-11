//Subconjuntos: Implemente uma função recursiva que gere todos os subconjuntos de um conjunto.

function generateSubsets(set) {
    if (set.length === 0) {
        return [[]];
    }

    const lastElement = set[set.length - 1];
    const subsetsWithoutLastElement = generateSubsets(set.slice(0, -1));
    const subsetsWithLastElement = subsetsWithoutLastElement.map(subset => [...subset, lastElement]);

    return [...subsetsWithoutLastElement, ...subsetsWithLastElement];
}

const set = [1, 2, 3];
const subsets = generateSubsets(set);
console.log(subsets);