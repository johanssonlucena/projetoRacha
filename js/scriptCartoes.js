function exibirCartoes() {
    const listaCartoes = document.getElementById('cartoes-list');
    jogadores.forEach(jogador => {
        const tr = document.createElement('tr');
        const tdNome = document.createElement('td');
        const tdAmarelo = document.createElement('td');
        const tdVermelho = document.createElement('td')
        
        tdNome.textContent = jogador.nome;
        tdAmarelo.textContent = jogador.amarelo;
        tdVermelho.textContent = jogador.vermelho;
        
        tr.appendChild(tdNome);
        tr.appendChild(tdAmarelo);
        tr.appendChild(tdVermelho);
        listaCartoes.appendChild(tr);
    });
}

window.onload = exibirCartoes;