//Considere um array de objetos representando produtos, cada um com um nome e um preço. 
//Crie uma função que ordena os produtos por preço crescente.


// Array de objetos representando produtos
const produtos = [
    { nome: 'Produto A', preco: 10 },
    { nome: 'Produto B', preco: 5 },
    { nome: 'Produto C', preco: 15 },
    { nome: 'Produto D', preco: 8 },
];

// Função para ordenar os produtos por preço crescente
function ordenarProdutosPorPreco(produtos) {
    return produtos.sort((a, b) => a.preco - b.preco);
}

// Chamada da função e exibição do resultado
console.log(ordenarProdutosPorPreco(produtos));