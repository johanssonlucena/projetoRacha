
const artilheiros = [
    { nome: 'Rondinelly', gols: 8 },
    { nome: 'Hitalo', gols: 7 },
    { nome: 'Roberio', gols: 6 },
    { nome: 'Augustinho', gols: 5 },
    { nome: 'Preto', gols: 5 },
    { nome: 'Wellington', gols: 3 },
    { nome: 'Jones', gols: 3 },
    { nome: 'Emerson', gols: 3 },
    { nome: 'Joalisson', gols: 2 },
    { nome: 'Kerles', gols: 2 },
    { nome: 'Michelly', gols: 2 },
    { nome: 'Raiff', gols: 2 },
    { nome: 'Junior Piscina', gols: 2 },
    { nome: 'Ranny', gols: 1 },
    { nome: 'Lindomar', gols: 1 },
    { nome: 'Bruno Daniel', gols: 1 },
    { nome: 'Oliveira', gols: 1 },
    { nome: 'Ricardo', gols: 1 },
    { nome: 'Julian', gols: 1 },
];

function exibirArtilheiros() {
    const listaArtilheiros = document.getElementById('artilheiros-list');
    artilheiros.forEach(artilheiro => {
        const tr = document.createElement('tr');
        const tdNome = document.createElement('td');
        const tdGols = document.createElement('td');
        
        tdNome.textContent = artilheiro.nome;
        tdGols.textContent = artilheiro.gols;
        
        tr.appendChild(tdNome);
        tr.appendChild(tdGols);
        listaArtilheiros.appendChild(tr);
    });
}

window.onload = exibirArtilheiros;
