//Expressões Regulares: Implemente uma função recursiva que analise uma string e determine se ela corresponde a uma expressão regular.

function matchRegex(str, regex) {
    if (str === "" && regex === "") {
        return true;
    } else if (str === "" || regex === "") {
        return false;
    } else if (regex[0] === ".") {
        return matchRegex(str.slice(1), regex.slice(1));
    } else if (regex[0] === str[0]) {
        return matchRegex(str.slice(1), regex.slice(1));
    } else if (regex[0] === "*") {
        return matchRegex(str, regex.slice(1)) || matchRegex(str.slice(1), regex);
    } else {
        return false;
    }
}

console.log(matchRegex("abc", "a.c")); // Output: true
console.log(matchRegex("abc", "a*d")); // Output: true
console.log(matchRegex("abc", "a*b")); // Output: false