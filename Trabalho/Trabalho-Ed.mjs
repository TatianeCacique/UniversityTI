let res = document.getElementById("res");
let form = document.getElementById("form");
let encerrado = document.getElementById("encerrado");
let nome = document.getElementById("nome");
let ra = document.getElementById("RA");
let idade = document.getElementById("idade");
let sexo = document.getElementById("sexo");
let media = document.getElementById("media");
let botao = document.getElementById("btn-cadastrar");
let opcao = document.getElementById("opcao");
let confirmar = document.getElementById("confirmar");

function Opcoes() {
    switch (opcao.value) {
      case "1":
        location.href = "/cadastro.html";
        break;
      case "2":
        location.href = "/relatorioNomeCrescente.html";
        break;
      case "3":
        location.href = "/relatorioDecrescente.html";
        break;
      case "4":
        location.href = "/relatórioCrescenteAprovados.html";
        break;
      case "5":
        form.innerHTML = "";
        encerrado.innerHTML = "Programa Encerrado";
        localStorage.clear();
        break;
    }
  }

let users = [];
function Retornar() {
    location.href = "/index.html"
}

let usersCadastrados = JSON.parse(localStorage.getItem("users")) || [];
localStorage.setItem("users", JSON.stringify(usersCadastrados));

function Cadastrar() {
    let userPersonal = {
        nome: nome.value,
        ra: ra.value,
        idade: idade.value,
        sexo: sexo.value,
        media: media.value,
        resultado: "",
  };

    if (media.value >= 6) {
        situacao = "APROVADO";
        userPersonal.resultado = situacao;
        } else {
        situacao = "REPROVADO";
        userPersonal.resultado = situacao;
    }

    if (usersCadastrados.some((user) => user.ra === userPersonal.ra)) {
        res.innerHTML = "ERRO, já possui um usuário com esse RA";
        } else {
        usersCadastrados.push(userPersonal);

localStorage.setItem("users", JSON.stringify(usersCadastrados));

    res.innerHTML = "";
    usersCadastrados.forEach((user) => {
    res.innerHTML = "Aluno cadastrado com sucesso!"
    });
}

    nome.value = '';
    ra.value = '';
    idade.value = '';
    sexo.value = '';
    media.value = '';
}

function bubbleSort(vetor, fnComp) {
    (pass = 0), (comps = 0), (trocas = 0);
    let trocou;
  
    do {
      pass++;
      trocou = false;
      for (let i = 0; i < vetor.length - 1; i++) {
        comps++;
        if (fnComp(vetor[i], vetor[i + 1])) {
          [vetor[i], vetor[i + 1]] = [vetor[i + 1], vetor[i]];
          trocou = true;
          trocas++;
        }
      }
    } while (trocou);
  }

function NomeCrescente(a, b) {
    return a.nome > b.nome;
}
  
function RADecrescente(a, b) {
    return a.ra < b.ra;
}
  
let nomes = document.getElementById("nomes");

function RelatorioNomes() {
    bubbleSort(usersCadastrados, NomeCrescente);
    let alunos = "";
    usersCadastrados.forEach((user) => {
      alunos += `Nome: ${user.nome}, RA: ${user.ra}, <br> Idade: ${user.idade}, Sexo: ${user.sexo}, Média: ${user.media}, Resultado: ${user.resultado} <br>`;
    });
    nomes.innerHTML = "";
    if (alunos == '') {
      nomes.innerHTML = "Não há alunos cadastrados";
    } else {
      nomes.innerHTML = alunos;
    }
}
  
let alunos = document.getElementById("alunos");
  
function RelatorioRA() {
    bubbleSort(usersCadastrados, RADecrescente);
    let ListaAlunos = "";
    usersCadastrados.forEach((user) => {
      ListaAlunos += `RA: ${user.ra}, Nome: ${user.nome},<br> Idade: ${user.idade}, Sexo: ${user.sexo}, Média: ${user.media}, Resultado: ${user.resultado} <br>`;
    });
    alunos.innerHTML = "";
    if (ListaAlunos == '') {
      alunos.innerHTML = "Não há alunos cadastrados";
    } else {
      alunos.innerHTML = ListaAlunos;
    }
}
  
let nomesAprovados = document.getElementById("Aprovados");
  
function RelatorioAprovados() {
    bubbleSort(usersCadastrados, NomeCrescente);
    let alunos = "";
    usersCadastrados.forEach((user) => {
      if (user.resultado == "APROVADO") {
        alunos += `Nome: ${user.nome}, RA: ${user.ra}, <br> Idade: ${user.idade}, Sexo: ${user.sexo}, Média: ${user.media}, Resultado: ${user.resultado} <br>`;
      }
    });
    nomesAprovados.innerHTML = "";
    if (alunos == '') {
      nomesAprovados.innerHTML = "Não há alunos cadastrados";
    } else {
      nomesAprovados.innerHTML = alunos;
    }
}
