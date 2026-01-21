/*
    14) Somar total do carrinho
    Enunciado: Dado um array de itens { name, price, qty }, retorne o total price * qty somado.
    Exemplo:
    Entrada: [{price:10,qty:2},{price:5,qty:1}] → Saída: 25
*/

class Itens {
    public name: string = "";
    public price: number = 0;
    public qty: number = 0;
}

const itens1 = new Itens();
const itens2 = new Itens();
const itens3 = new Itens();

itens1.name = "lata";
itens1.price = 10;
itens1.qty = 2;

itens2.name = "prato";
itens2.price = 5;
itens2.qty = 1;

itens3.name = "faca";
itens3.price = 2;
itens3.qty = 5;

//let soma: number = 0;
let resultado: number = 0;

const listaItens: Itens[] = [itens1, itens2, itens3];

for (let item of listaItens) {
    resultado += item.price * item.qty;
}
console.log(resultado);

/*

Comparativos de Operadores de Atribuição:

    Operador	        Exemplo	Equivalente a...	Uso Comum
    +=	total += 5	    total = total + 5	        Somatórios e acumular strings.
    -=	total -= 5	    total = total - 5	        Descontos ou contagens regressivas.
    *=	total *= 2	    total = total * 2	        Cálculos de juros ou dobrar valores.
    ++	contador++	    contador = contador + 1	    Incrementar de 1 em 1 (muito comum em loops).

*/