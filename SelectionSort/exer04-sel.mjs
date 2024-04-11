//Considere um array de objetos representando eventos, cada um com uma data e hora. 
//Crie uma função que ordena os eventos por data e hora crescente.

// Array de eventos
const eventos = [
    { data: '2022-01-01', hora: '10:00' },
    { data: '2022-01-02', hora: '14:30' },
    { data: '2022-01-01', hora: '08:00' },
    { data: '2022-01-03', hora: '09:45' },
];

// Função para ordenar os eventos por data e hora crescente
function ordenarEventos(eventos) {
    eventos.sort((a, b) => {
        const dataA = new Date(`${a.data}T${a.hora}`);
        const dataB = new Date(`${b.data}T${b.hora}`);
        return dataA - dataB;
    });
}

// Chamada da função
ordenarEventos(eventos);

// Exibindo os eventos ordenados
console.log(eventos);