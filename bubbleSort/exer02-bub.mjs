//Considere um array de strings representando nomes. Crie uma função que ordena os nomes em ordem alfabética.
//Considere um array de objetos representando produtos, cada um com um nome e um preço. 
//Crie uma função que ordena os produtos por preço crescente.

// Sorting names in alphabetical order
function sortNames(names) {
    return names.sort();
}

// Sorting products by price in ascending order
function sortProductsByPrice(products) {
    return products.sort((a, b) => a.price - b.price);
}

// Example usage
const names = ["John", "Alice", "Bob"];
console.log(sortNames(names));

const products = [
    { name: "Product 1", price: 10 },
    { name: "Product 2", price: 5 },
    { name: "Product 3", price: 15 }
];
console.log(sortProductsByPrice(products));