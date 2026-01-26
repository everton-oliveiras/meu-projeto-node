/*
    Exercício 5: Gamificação (XP de Usuários)
    Você tem um array de jogadores com seus níveis de experiência (XP).
    Objetivo: Filtrar os jogadores que têm mais de 1000 de XP (são "Pro")
    e retornar um novo objeto adicionando uma propriedade chamada categoria: "Elite".

    const jogadores = [
        { nome: "DarkKnight", xp: 1200 },
        { nome: "MegaMage", xp: 800 },
        { nome: "ShadowHunter", xp: 2500 }
    ];

Resultado esperado: 
[ { nome: "DarkKnight", xp: 1200, categoria: "Elite" }, { nome: "ShadowHunter", xp: 2500, categoria: "Elite" } ]

Dica: No .map(), use o spread operator ...jogador para manter as propriedades antigas e apenas adicionar a nova.
*/

class Jogador {
    nome: string = "";
    xp: number = 0;

    constructor (nome: string, xp: number){
        this.nome = nome;
        this.xp = xp;
    }

}

const jogador1 = new Jogador("DarkKnight", 1200);
const jogador2 = new Jogador("MegaMage", 800);
const jogador3 = new Jogador("ShadowHunter", 2500);

const listaJogadores: Jogador[] = [];

listaJogadores.push(jogador1, jogador2, jogador3);

const jogadoresPro = listaJogadores.filter(jogador => jogador.xp > 1000);
console.log({jogadoresPro: jogadoresPro});
/*
const jogadoresModificados = listaJogadores.map(jogador => {
    return {
        nome: 
    }
})
*/