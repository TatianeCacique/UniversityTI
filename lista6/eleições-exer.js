function partidosPoliticos(vetor) {
    let partidos;
    let objeto = {
        codigo: parseInt(prompt('Codigo do politico')),
        nome: prompt('Nome do partido'),
        sigla: prompt('Informe a sigla do partido'),
        presidente: prompt('Nome do presidente do partido'),
        numPoliticos: parseInt(prompt('Numero de candidatos'))
    }
    // Verifica se o código já existe no vetor
    while(vetor.some((item) => item.codigo == objeto.codigo)) {
        objeto.codigo = parseInt(prompt('Codigo já existente! Informe outro codigo.'))
    }
    vetor.push(objeto)
    console.log('Partido cadastrado com sucesso!')
} 
let politicos = []
function candidatos(vetor) {
    let candidatos;
    let objeto = {
        codigo: parseInt(prompt('Codigo do Partido')),
        nome: prompt('Nome do candidato'),
        cargo: parseInt(prompt('Informe o cargo que o candidato ocupa')),
        votos: 0
    }
    // Verifica se o código já existe no vetor
    while(vetor.some((item) => item.codigo == objeto.codigo)) {
        objeto.codigo = parseInt(prompt('Codigo já existente! Informe outro codigo.'));
    }
    politicos.push(objeto)
    console.log('Candidato cadastrado com sucesso!')

}

function votação(vetor){
    let votacao = {
        partido: parseInt(prompt('Informe codigo do partido')),
        candidato: parseInt(prompt('Informe o nome do candidato'))
    }
    let posicao = politicos.findIndex((item) => item.codigo == votacao.partido && item.nome == votacao.candidato);
    if(posicao != -1){
        politicos[posicao].votos++
        alert('Voto Realizado com sucesso')
    } else {
    alert('Partido ou candidato não encontrado')
    }
}

//candidato com mais votos!
function maisVotado(vetor){
    let maisVotado = vetor[0].votos
    for(let i=0;i<vetor.length;i++){
        if (vetor[i].votos > maisVotado.votos) {
            maisVotado = vetor[i]
        }
    }
    console.log(`O candidato mais votado é ${maisVotado.nome} com ${maisVotado.votos} votos`)
}


//Função principal
function principal(){
    let vetor = []
    let opcao
    do{
        opcao = Number(prompt(`Informe: \n1. Cadastrar Partido \n2. Cadastrar Candidato \n3. Votar \n4. Apuração \n5. Sair`))
        switch(opcao){
            case 1: partidosPoliticos(vetor)
                break
            case 2: candidatos(vetor)
                break
            case 3: votação(vetor)
                break
            case 4: maisVotado(vetor)
                break
            case 5: console.log(`Obrigado por utilizar nosso programa!`)
                break
            default: console.log(`Opção inválida!`)
        }
    }
    while(opcao != 5)
}
