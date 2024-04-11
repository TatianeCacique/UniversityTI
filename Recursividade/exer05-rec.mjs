//Torre de Hanoi: Implemente uma função recursiva que resolva o problema da Torre de Hanoi.

function towerOfHanoi(n, source, auxiliary, destination) {
    if (n === 1) {
        console.log(`Move disk 1 from ${source} to ${destination}`);
        return;
    }

    towerOfHanoi(n - 1, source, destination, auxiliary);
    console.log(`Move disk ${n} from ${source} to ${destination}`);
    towerOfHanoi(n - 1, auxiliary, source, destination);
}

// Example usage
towerOfHanoi(3, 'A', 'B', 'C');
console.log("Tower of Hanoi solved!");