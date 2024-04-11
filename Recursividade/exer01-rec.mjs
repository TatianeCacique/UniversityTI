//Implemente uma função recursiva que calcule o n-ésimo número da sequência de Fibonacci.

function fibonacci(n){
    if (n <= 1) {
        return n;
    } else {
        return fibonacci(n - 1) + fibonacci(n - 2);
    }
}

console.log("Fibonacci de 0:", fibonacci(0));