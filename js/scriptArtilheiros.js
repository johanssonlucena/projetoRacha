function exibirArtilheiros() {
    const listaArtilheiros = document.getElementById('artilheiros-list');
    const top10Checkbox = document.getElementById('top10Checkbox');

    listaArtilheiros.innerHTML = '';

    const ordenados = [...artilheiros].sort((a, b) => b.gols - a.gols);
    const listaExibir = top10Checkbox && top10Checkbox.checked ? ordenados.slice(0, 10) : ordenados;

    listaExibir.forEach((artilheiro, index) => {
        const tr = document.createElement('tr');
        if (index === 0) tr.classList.add('destaque');
        const tdNome = document.createElement('td');
        const tdGols = document.createElement('td');

        tdNome.textContent = artilheiro.nome;
        tdGols.textContent = artilheiro.gols;

        tr.appendChild(tdNome);
        tr.appendChild(tdGols);
        listaArtilheiros.appendChild(tr);
    });
}

window.onload = () => {
    exibirArtilheiros();

    const checkbox = document.getElementById('top10Checkbox');
    if (checkbox) {
        checkbox.addEventListener('change', exibirArtilheiros);
    }
};