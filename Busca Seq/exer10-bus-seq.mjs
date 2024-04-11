//Crie um jogo simples de adivinhação de palavras, onde o jogador tenta adivinhar uma palavra secreta digitando letras. 
//Utilize a busca sequencial para verificar se a letra digitada está presente na palavra secreta.


// Palavra secreta
const palavraSecreta = "programacao";

// Função para verificar se a letra está presente na palavra secreta
function verificarLetra(letra) {
    for (let i = 0; i < palavraSecreta.length; i++) {
        if (palavraSecreta[i] === letra) {
            return true;
        }
    }
    return false;
}

// Função principal do jogo
function jogoAdivinhacao() {
    let tentativas = 5;
    
    while (tentativas > 0) {
        const letra = prompt("Digite uma letra:").toLowerCase();
        
        if (verificarLetra(letra)) {
            console.log("A letra está presente na palavra secreta!");
        } else {
            console.log("A letra não está presente na palavra secreta.");
            tentativas--;
        }
        
        console.log(`Tentativas restantes: ${tentativas}`);
    }
    
    console.log("Fim do jogo!");
}

// Iniciar o jogo
jogoAdivinhacao();