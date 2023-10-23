let cadastraFarmacia = (vetor) => {
    let objeto = {
        codigo: parseInt(prompt(`Informe o código da farmácia`)),
        nome: prompt(`Informe o nome da farmácia`),
        endereco: prompt(`Informe o endereço da farmácia`)
    }
    while (vetor.some((item) => item.codigo === objeto.codigo)) {
        objeto.codigo = parseInt(prompt(`Código já existente. Informe outro código`))
    }
    vetor.push(objeto)
}

let cadastroRemedio = (farmacias, remedios) => {
    let objeto = {
        codFarmacia: parseInt(prompt('Código da farmácia')),
        nome: prompt('Nome do remédio').toUpperCase(),
        qtde: parseInt(prompt('Qtde do remédio')),
        preco: parseFloat(prompt('Preço do remédio'))
    }
    while (!farmacias.some((item) => item.codigo === objeto.codFarmacia)) {
        objeto.codFarmacia = parseInt(prompt('Farmácia não existe. Informe novamente o código'))
    }
    let indice = remedios.findIndex((item) => item.codFarmacia === objeto.codFarmacia && item.nome === objeto.nome)
    if (indice === -1) { // remédio não existe
        remedios.push(objeto); // insere remédio
    } else { // já existe, atualiza estoque
        remedios[indice].qtde = remedios[indice].qtde + objeto.qtde;
    }
}

let vendaRemedio = (remedios) => {
    let venda = {
        farmacia: parseInt(prompt('Informe código da farmácia')),
        remedio: prompt('Informe nome do remédio').toUpperCase(),
        qtde: parseInt(prompt('Informe qtde para compra'))
    }
    // verifica se existem - some retorna true ou false
    if (remedios.some((item) => item.codFarmacia === venda.farmacia && item.nome === venda.remedio)) {
        // recupera o índice do remédio - findIndex retorna o índice do vetor
        let indice = remedios.findIndex((item) =>
            item.nome === venda.remedio && item.codFarmacia === venda.farmacia
        );
        if (venda.qtde <= remedios[indice].qtde) {
            // atualiza o estoque
            remedios[indice].qtde = remedios[indice].qtde - venda.qtde;
            alert('Venda realizada com sucesso');
        } else {
            alert('Estoque insuficiente');
        }
    } else {
        alert('Farmácia ou remédio inexistente');
    }
}

let relatorio = (remedios) => {
    let codigo = parseInt(prompt('Informe o código da farmácia'));
    let relatorio = '';
    for (let i = 0; i < remedios.length; i++) {
        if (remedios[i].codFarmacia === codigo) {
            relatorio = relatorio + `Remédio: ${remedios[i].nome} Estoque: ${remedios[i].qtde}\n`;
        }
    }
    alert(relatorio);
}

let principal = () => {
    let principal;
    let farmacias = [];
    let remedios = [];
    do {
        principal = Number(prompt(`Informe: \n1. Cadastrar farmácia \n2. Cadastrar remédio \n3. Vender \n4. Relatório \n5. Sair`));
        switch (principal) {
            case 1:
                cadastraFarmacia(farmacias);
                break;
            case 2:
                cadastroRemedio(farmacias, remedios);
                break;
            case 3:
                vendaRemedio(remedios);
                break;
            case 4:
                relatorio(remedios);
                break;
            case 5:
                alert(`O programa será encerrado`);
                break;
            default:
                alert(`Opção inválida`);
        }
    } while (principal !== 5);
}

principal();
