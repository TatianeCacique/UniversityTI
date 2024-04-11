//Arvore Binária: Implemente uma função recursiva que percorra uma árvore binária em diferentes ordens (pré-ordem, in-ordem e pós-ordem).

// Define a função recursiva para percorrer a árvore binária em pré-ordem
function preOrderTraversal(node) {
    if (node !== null) {
        console.log(node.value); // Visita o nó atual
        preOrderTraversal(node.left); // Percorre a subárvore esquerda
        preOrderTraversal(node.right); // Percorre a subárvore direita
    }
}

// Define a função recursiva para percorrer a árvore binária em in-ordem
function inOrderTraversal(node) {
    if (node !== null) {
        inOrderTraversal(node.left); // Percorre a subárvore esquerda
        console.log(node.value); // Visita o nó atual
        inOrderTraversal(node.right); // Percorre a subárvore direita
    }
}

// Define a função recursiva para percorrer a árvore binária em pós-ordem
function postOrderTraversal(node) {
    if (node !== null) {
        postOrderTraversal(node.left); // Percorre a subárvore esquerda
        postOrderTraversal(node.right); // Percorre a subárvore direita
        console.log(node.value); // Visita o nó atual
    }
}

// Exemplo de uso
const tree = {
    value: 1,
    left: {
        value: 2,
        left: {
            value: 4,
            left: null,
            right: null
        },
        right: {
            value: 5,
            left: null,
            right: null
        }
    },
    right: {
        value: 3,
        left: {
            value: 6,
            left: null,
            right: null
        },
        right: {
            value: 7,
            left: null,
            right: null
        }
    }
};

console.log("Pre-order traversal:");
preOrderTraversal(tree);

console.log("In-order traversal:");
inOrderTraversal(tree);

console.log("Post-order traversal:");
postOrderTraversal(tree);