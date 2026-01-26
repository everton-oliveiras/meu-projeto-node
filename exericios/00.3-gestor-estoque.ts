/*
Desafio 3: O Gestor de Estoque (Avançado)
Este é um cenário muito comum em sistemas reais.
Você tem um estoque de peças de computador.
Objetivo: 1. Filtrar apenas as peças que estão abaixo de 5 unidades no estoque (precisam de reposição).
2. Transformar esse array para que ele mostre apenas o nome da peça e a quantidade que falta para chegar em 10 unidades.

const estoque = [
  { item: "Teclado", qtd: 3 },
  { item: "Mouse", qtd: 12 },
  { item: "Monitor", qtd: 2 },
  { item: "Cabo HDMI", qtd: 8 }
];

// Resultado esperado: 
// [ { item: "Teclado", repor: 7 }, { item: "Monitor", repor: 8 } ]
*/

class Estoque {
    private itens: {
        name: string;
        qtd: number;
    }[] = [];

    constructor(itens: {
        name: string;
        qtd: number;
    }[] ) {
        this.itens = itens;
    }

    public armazenar(item: string) {

    }

    public validar(item: string) {

    }

    public retirar(item: string) {

    }
}

// const peca1 = new Peca("Teclado", 3);
// const peca2 = new Peca("Mouse", 12);
// const peca3 = new Peca("Monitor", 2);
// const peca4 = new Peca("Cabo HDMI", 8);

// const listaPecas = [
//     {
//         item: "teclado",
//         qtd: 3
//     },
//     {

//     }
// ];

// listaPecas.push(peca1, peca2, peca3, peca4);

// const pecasAbaixo = listaPecas.filter(pecas => pecas.qtd < 5);

// //pecasAbaixo.map(pecas => console.log({ item: pecas.item, repor: 10 - pecas.qtd }));

// const relatorioReposicao = pecasAbaixo.map(peca => {
//     return {
//         item: peca.item,
//         repor: 10 - peca.qtd,
//     }
// })
// console.log(relatorioReposicao);