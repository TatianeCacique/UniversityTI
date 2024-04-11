function gcd(a, b) {
    if (b === 0) {
        return a;
    } else {
        return gcd(b, a % b);
    }
}

// Example usage
const num1 = 12;
const num2 = 18;
const result = gcd(num1, num2);
console.log("The GCD of", num1, "and", num2, "is", result);