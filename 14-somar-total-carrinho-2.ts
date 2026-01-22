class Itens {
    name: string = "";
    price: number = 0;
    qty: number = 0;
}

const item1 = new Itens();
const item2 = new Itens();
const item3 = new Itens();

item1.name = "Laranja";
item1.price = 10;
item1.qty = 2;

item2.name = "Melancia";
item2.price = 5;
item2.qty = 1;

item3.name = "Morango";
item3.price = 20;
item3.qty = 3;

const listaItens: Itens[] = [item1, item2, item3];
let somaDosItens: number = 0;
let resultado: number = 0;

for (let itemSelecionado of listaItens) {
    resultado = itemSelecionado.price * itemSelecionado.qty;
    somaDosItens = somaDosItens + resultado;
}
console.log(somaDosItens);