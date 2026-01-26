/*
    Exercício 09: Total do Carrinho
    Enunciado: Dado um array de itens { nome: string, preco: number, quantidade: number },
    retorne o valor total do carrinho (soma de preco * quantidade).
*/

class Item {
    nome: string = "";
    preco: number = 0;
    quantidade: number = 0;
}

const item = new Item();

item.nome = "Televisao";
item.preco = 1000;
item.quantidade = 3;

const itemDois = new Item();

itemDois.nome = "Teclado";
itemDois.preco = 100;
itemDois.quantidade = 10;

const listaItens: Item[] = [item, itemDois];
let resultado: number = 0;
let soma: number = 0;

for (let itemSelecionado of listaItens) {
    resultado = itemSelecionado.preco * itemSelecionado.quantidade;
    soma = soma + resultado;
}

console.log(soma);