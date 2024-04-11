//Crie um array de objetos com nome, idade e salário, ordenados por salário. 
//Escreva uma função que recebe um salário como parâmetro 
//e retorna o objeto com o salário mais próximo do valor especificado.

const employees = [
    { nome: "João", idade: 25, salario: 3000 },
    { nome: "Maria", idade: 30, salario: 5000 },
    { nome: "Pedro", idade: 35, salario: 4000 },
    { nome: "Ana", idade: 28, salario: 3500 },
];

function findClosestSalary(salary) {
    employees.sort((a, b) => Math.abs(a.salario - salary) - Math.abs(b.salario - salary));
    return employees[0];
}

console.log(findClosestSalary(4500)); // { nome: 'Pedro', idade: 35, salario: 4000 }
console.log(findClosestSalary(3700)); // { nome: 'Ana', idade: 28, salario: 3500 }
console.log(findClosestSalary(3200)); // { nome: 'João', idade: 25, salario: 3000 }
console.log(findClosestSalary(6000)); // { nome: 'Maria', idade: 30, salario: 5000 }