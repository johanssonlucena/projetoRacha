const series = [
    {
        numero: 1,
        vencedor: "Amarelo",
        equipes: {
            amarelo: {
                capitao: "Rondinelly",
                vitorias: 3,
                empates: 2,
                derrotas: 0,
                golsMarcados: 30,
                golsSofridos: 17,
                jogadores: ["Rondinelly", "Rodolfo", "Johansson", "Júnior Guarani", "Ademir", "Júnior Piscina",
                    "Adoniran", "Ezequiel", "Motta", "Zé", "Diego", "Ricardo", "Madson", "Robério",
                    "Tau", "Emerson", "Rudy", "Rodrigo", "Augustinho", "Preto", "Bruno", "Wellington"
                ]
            },
            azul: {
                capitao: "Gya",
                vitorias: 0,
                empates: 2,
                derrotas: 3,
                golsMarcados: 17,
                golsSofridos: 30,
                jogadores: ["Gya", "Alysson", "Gaspar", "Eron", "Afonso", "Gerson", "Anderson", "Marquinhos",
                    "Lindomar", "Roquelan", "Julian", "Gilsinho", "Índio", "Raiff", "Amâncio", "Kerles", "Ranny",
                    "Joalisson", "Hítalo", "Oliveira", "Michelly", "Jones", "Eder"
                ]
            }
        },
        jogos: [
            { amarelo: 4, azul: 4 },
            { amarelo: 6, azul: 3 },
            { amarelo: 3, azul: 3 },
            { amarelo: 9, azul: 4 },
            { amarelo: 8, azul: 3 }
        ]
    },

    {
        numero: 2,
        vencedor: "nenhum",
        equipes: {
            amarelo: {
                capitao: "Rondinelly",
                vitorias: 0,
                empates: 1,
                derrotas: 1,
                golsMarcados: 9,
                golsSofridos: 12,
                jogadores: ["Rondinelly", "Ranny", "Rodolfo", "Gaspar", "Ademir", "Marquinhos",  "Ezequiel",
                    "Adoniran", "Lindomar", "Zé", "Ricardo", "Kerles", "Amâncio",  "Julian", "Rudy", "Gya",
                    "Diego", "Michelly", "Bruno", "Preto", "Augustinho", "Eder"]
            },
            azul: {
                capitao: "Gerson",
                vitorias: 1,
                empates: 1,
                derrotas: 0,
                golsMarcados: 12,
                golsSofridos: 9,
                jogadores: ["Gerson", "Alysson", "Johansson", "Eron", "Anderson",  "Motta", "Júnior Piscina",
                    "Afonso", "Roquelan", "Rodrigo", "Emerson", "Índio", "Raiff", "Joalisson", "Tau", "Madson",
                    "Jones", "Wellington", "Oliveira", "Robério", "Hítalo", "Júnior Guarani"]
            }
        },
        jogos: [
            { amarelo: 3, azul: 6 },
            { amarelo: 6, azul: 6 }
        ]
    }

];
