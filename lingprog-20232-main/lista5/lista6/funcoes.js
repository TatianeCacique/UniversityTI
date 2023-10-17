//função traz um resultado
function soma(a, b){
    console.log(`Soma é ${a+b}`)
}
// função retorna um resultado
function soma2(a, b){
    return(a+b)
}
//função traz um parametros
function soma3(){
    let a = parseInt(prompt(`Informe valor de A`))
    let b = parseInt(prompt(`Informe valor de B`))
    return a + b
}
function alterarIdade(idade){
    idade = idade +10
    console.log(`Dentro da função ${idade}`)//28
}
function alteraVetor(vet){
    vet[0] = vet[0] +10
    vet[1] = vet[1] +10
    vet[2] = vet[2] +10
    console.log(`Dentro da função ${vet}`)
}
function principal(){
    soma(4, 8)
    console.log(`Soma é ${soma2(6,9)}`)
    console.log(`Soma é ${soma3()}`)

    //passagem de parametro por valor -> passa-se o valor da varialvél 
    // qual o efeito colaateral disso?
    // a mudança do valor da variável dentro da função não altera a variável
    // de fora da função
    //OBS: vale quando se passa como parametro um int, um float, um boolean ou um char
    //ou seja primitivo de dados 
        let idade = 18
    alterarIdade(idade)
    console.log(idade)//18

    //passagem de parametro por referência -> passa-se a referencia da variável
    //qual o efeito colateral disso
    //a mundança do valor da variável dentro da função altera a variável 
    // de fora da função
    //OBS: vale quando se passa como parametro um vetor, uma matriz ou um objeto
    let vet = []
    vet[0] = 10; vet[1] = 11; vet[2] = 12;
    alteraVetor(vet)
    console.log(`Fora da função ${vet}`)
}

