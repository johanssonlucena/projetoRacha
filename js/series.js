const series = [
    {
        numero: 4,
        vencedor: "nenhum",
        equipes: {
            amarelo: {
                capitao: "Julian",
                vitorias: 0,
                empates: 2,
                derrotas: 1,
                golsMarcados: 9,
                golsSofridos: 11,
                jogadores: ["Ranny", "Julian", "Alysson", "Gaspar", "Junior Guarani", "Ademir", "Adoniran", "Motta", "Welson", "Zé", 
			    "Preto", "Gya", "Ricardo", "Eder", "Diego", "Hítalo", "Bruno", "Joalisson", "Índio", "Jones", "Emerson"] 
            },
            azul: {
                capitao: "Gerson",
                vitorias: 1,
                empates: 2,
                derrotas: 0,
                golsMarcados: 11,
                golsSofridos: 9,
                jogadores: ["Gerson", "Raiff", "Rodolfo", "Johansson", "Eron", "Anderson", "Afonso", "Lindomar", "Marquinhos", "Roquelan", 
			    "Rondinelly", "Tau", "Rodrigo", "Kerles", "Madson", "Augustinho", "Wellington", "Junior Piscina", "Amâncio", "Rudy"]
        }
        },
        jogos: [
            { amarelo: 5, azul: 5 },
            { amarelo: 2, azul: 2 },
	    { amarelo: 2, azul: 4 }
        ]
    },	
    
    {
        numero: 3,
        vencedor: "Azul",
        equipes: {
            amarelo: {
                capitao: "Rodolfo",
                vitorias: 0,
                empates: 0,
                derrotas: 3,
                golsMarcados: 9,
                golsSofridos: 19,
                jogadores: ["Rodolfo", "Ranny", "Eron", "Gaspar", "Adoniran", "Ademir", "Ezequiel", "Marquinhos", "Zé", "Ricardo", 
                            "Gya", "Raiff", "Kerles", "Índio", "Diego", "Jones", "Augustinho", "Bruno", "Joalisson", "Robério"]
                      },
            azul: {
                capitao: "Gerson",
                vitorias: 3,
                empates: 0,
                derrotas: 0,
                golsMarcados: 19,
                golsSofridos: 9,
                jogadores: ["Gerson", "Alysson", "Johansson", "Junior Guarani", "Anderson", "Afonso", "Motta", "Lindomar", "Roquelan", 
                            "Rodrigo", "Tau",  "Julian", "Eder", "Amâncio", "Madson", "Preto", "Rondinelly", "Wellington", "Rudy", "Hítalo"]
                    }
            },
        jogos: [
            { amarelo: 1, azul: 4 },
            { amarelo: 6, azul: 9 },
	    { amarelo: 2, azul: 6 }]
    },
    
    {
        numero: 2,
        vencedor: "Azul",
        equipes: {
            amarelo: {
                capitao: "Rondinelly",
                vitorias: 0,
                empates: 2,
                derrotas: 2,
                golsMarcados: 16,
                golsSofridos: 26,
                jogadores: ["Rondinelly", "Ranny", "Rodolfo", "Gaspar", "Ademir", "Marquinhos",  "Ezequiel",
                    "Adoniran", "Lindomar", "Zé", "Ricardo", "Kerles", "Amâncio",  "Julian", "Rudy", "Gya",
                    "Diego", "Michelly", "Bruno", "Preto", "Augustinho", "Eder"]
            },
            azul: {
                capitao: "Gerson",
                vitorias: 2,
                empates: 2,
                derrotas: 0,
                golsMarcados: 26,
                golsSofridos: 16,
                jogadores: ["Gerson", "Alysson", "Johansson", "Eron", "Anderson",  "Motta", "Júnior Piscina",
                    "Afonso", "Roquelan", "Rodrigo", "Emerson", "Índio", "Raiff", "Joalisson", "Tau", "Madson",
                    "Jones", "Wellington", "Oliveira", "Robério", "Hítalo", "Júnior Guarani"]
            }
        },
        jogos: [
            { amarelo: 3, azul: 6 },
            { amarelo: 6, azul: 6 },
            { amarelo: 1, azul: 8 },
            { amarelo: 6, azul: 6 }
        ]
    },

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
    }

];
