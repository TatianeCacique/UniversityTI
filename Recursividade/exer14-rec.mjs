// Backtracking: Implemente uma função recursiva que resolva um problema usando o algoritmo de Backtracking.

function backtracking(problem, solution = []) {
    if (problem.isSolution(solution)) {
      return solution;
    }
  
    if (problem.isFeasible(solution)) {
      for (let candidate of problem.getCandidates(solution)) {
        solution.push(candidate);
        const result = backtracking(problem, solution);
        if (result !== null) {
          return result;
        }
        solution.pop();
      }
    }
  
    return null;
}

console.log(backtracking(problem));