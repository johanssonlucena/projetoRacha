document.addEventListener('DOMContentLoaded', function () {
    const serieContainer = document.getElementById('serieContainer');

    series.forEach(serie => {
        const serieDiv = document.createElement('div');
        serieDiv.classList.add('serie');

        const serieHeader = document.createElement('div');
        serieHeader.classList.add('serie-header');
        serieHeader.innerHTML = `Série ${serie.numero}`;

        if (serie.vencedor.toLowerCase() !== "nenhum") {
            const capitaoVencedor = serie.equipes[serie.vencedor.toLowerCase()].capitao;
            const capitaoVencedorDiv = document.createElement('p');
            capitaoVencedorDiv.classList.add('capitao-vencedor');
            capitaoVencedorDiv.textContent = `🏆 Capitão vencedor: ${capitaoVencedor} (Time ${serie.vencedor})`;

            serieHeader.appendChild(capitaoVencedorDiv);
        }

        serieDiv.appendChild(serieHeader);

        const equipeContainer = document.createElement('div');
        equipeContainer.classList.add('equipe-container');

        ["amarelo", "azul"].forEach(cor => {
            const equipeDiv = document.createElement('div');
            equipeDiv.classList.add('equipe', cor);

            equipeDiv.innerHTML = `
                <h2>Time - ${cor.charAt(0).toUpperCase() + cor.slice(1)}</h2>
                <h3><u><strong>Capitão:</strong> ${serie.equipes[cor].capitao}</u></h3>
                <p class="stats"><strong>Vitórias:</strong> ${serie.equipes[cor].vitorias}</p>
                <p class="stats"><strong>Empates:</strong> ${serie.equipes[cor].empates}</p>
                <p class="stats"><strong>Derrotas:</strong> ${serie.equipes[cor].derrotas}</p>
                <p class="stats"><strong>Gols Marcados:</strong> ${serie.equipes[cor].golsMarcados}</p>
                <p class="stats"><strong>Gols Sofridos:</strong> ${serie.equipes[cor].golsSofridos}</p>
            `;

            equipeContainer.appendChild(equipeDiv);
        });

        serieDiv.appendChild(equipeContainer);

        const tabelaDiv = document.createElement('div');
        tabelaDiv.classList.add('tabela-jogadores');

        ["amarelo", "azul"].forEach(cor => {
            const jogadoresDiv = document.createElement('div');
            jogadoresDiv.innerHTML = `<h4>Jogadores Time ${cor.charAt(0).toUpperCase() + cor.slice(1)}</h4>`;
            const lista = document.createElement('ul');
            lista.classList.add('jogadores');

            serie.equipes[cor].jogadores.forEach(jogador => {
                const item = document.createElement('li');
                item.textContent = jogador;
                lista.appendChild(item);
            });

            jogadoresDiv.appendChild(lista);
            tabelaDiv.appendChild(jogadoresDiv);
        });

        const placaresDiv = document.createElement('div');
        placaresDiv.classList.add('placares-container'); // Classe para estilização
        placaresDiv.innerHTML = `<h3>Placares dos Jogos</h3>`;

        const placarLista = document.createElement('ul');
        placarLista.classList.add('placares-lista'); // Classe para estilização

        serie.jogos.forEach((jogo, index) => {
            const item = document.createElement('li');
            item.textContent = `Jogo ${index + 1} - Amarelo ${jogo.amarelo} x ${jogo.azul} Azul`;
            placarLista.appendChild(item);
        });

        placaresDiv.appendChild(placarLista);
        serieDiv.appendChild(placaresDiv);

        serieDiv.appendChild(tabelaDiv);
        serieContainer.appendChild(serieDiv);
    });
});