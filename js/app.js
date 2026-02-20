function comprar() {
    let ingresso  = document.getElementById('tipo-ingresso').value;
    let quantidade = parseInt(document.getElementById('qtd').value);

    if (ingresso == "pista") {
        comprarPista(quantidade);        
        
    } else if (ingresso == "superior") {
        comprarSuperior(quantidade); 

    } else {
        comprarInferior(quantidade);
    }
}

function comprarPista(quantidade) {

    let qtdPista = parseInt(document.getElementById('qtd-pista').textContent);

    if (quantidade > qtdPista) {
        alert('Quantidade indisponivel para Pista.');

    } else {
        qtdPista = qtdPista - quantidade;
        document.getElementById('qtd-pista').textContent = qtdPista;
        alert('Compra feita!');
    }

}

function comprarSuperior(quantidade) {
    let qtdSuperior = parseInt(document.getElementById('qtd-superior').textContent);

    if (quantidade > qtdSuperior) {
        alert('Quantidade indisponivel para cadeira superior.');

    } else {
        qtdSuperior = qtdSuperior - quantidade;
        document.getElementById('qtd-superior').textContent = qtdSuperior;
        alert('Compra feita!');
    }

}

function comprarInferior(quantidade) {
    let qtdInferior = parseInt(document.getElementById('qtd-inferior').textContent);

    if (quantidade > qtdInferior) {
        alert('Quantidade indisponivel para cadeira inferior.');

    } else {
        qtdInferior = qtdInferior - quantidade;
        document.getElementById('qtd-inferior').textContent = qtdInferior;
        alert('Compra feita!');
    }
}

