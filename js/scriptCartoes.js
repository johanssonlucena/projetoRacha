
const jogadores = [
    { nome: 'Rondinelly', amarelo: 2 , vermelho: 0},
    { nome: 'Johansson', amarelo: 2 , vermelho: 0},
    { nome: 'Rodrigo', amarelo: 1 , vermelho: 0},
    { nome: 'Augustinho', amarelo: 1 , vermelho: 0},
    { nome: 'Marquinhos', amarelo: 1 , vermelho: 0},
    { nome: 'Tau', amarelo: 1 , vermelho: 0},
    { nome: 'Alysson', amarelo: 1 , vermelho: 0},
    { nome: 'Lindomar', amarelo: 1 , vermelho: 0},
    { nome: 'Marquinhos', amarelo: 1 , vermelho: 0},
    { nome: 'Tau', amarelo: 1 , vermelho: 0},
];

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
