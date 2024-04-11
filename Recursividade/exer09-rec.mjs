//Caminhos em um Grafo: Implemente uma função recursiva que encontre todos os caminhos possíveis entre dois vértices em um grafo.

function findPaths(graph, start, end, visited = new Set(), path = []) {
    // Mark the current vertex as visited
    visited.add(start);

    // Add the current vertex to the path
    path.push(start);

    // If the current vertex is the destination, print the path
    if (start === end) {
        console.log(path);
    } else {
        // Recursively explore all adjacent vertices
        for (const neighbor of graph[start]) {
            if (!visited.has(neighbor)) {
                findPaths(graph, neighbor, end, visited, path);
            }
        }
    }

    // Remove the current vertex from the path and mark it as unvisited
    path.pop();
    visited.delete(start);
}

// Example usage
const graph = {
    A: ['B', 'C'],
    B: ['C', 'D'],
    C: ['D'],
    D: ['E'],
    E: []
};

findPaths(graph, 'A', 'E');