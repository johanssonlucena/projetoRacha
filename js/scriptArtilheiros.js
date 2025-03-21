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