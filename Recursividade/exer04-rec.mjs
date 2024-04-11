//Inverter String: Implemente uma função recursiva que inverta a ordem dos caracteres de uma string.

function reverseString(str) {
    if (str === "") {
        return "";
    } else {
        return reverseString(str.substr(1)) + str.charAt(0);
    }
}

console.log(reverseString("Hello")); // Output: "olleH"