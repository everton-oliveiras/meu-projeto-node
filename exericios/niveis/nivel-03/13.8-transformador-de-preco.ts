/*
    8. Transformador de Preços (Inflação)
    Objetivo: Criar uma nova lista de preços com um aumento de 10%.

    Pseudo-Código:

    01 - Criar uma classe de Produtos;
    02 - Definir as propriedades da classe;
    03 - Criar a propriedade nome do produto;
    04 - Criar a propriedade valor do produto;
    05 - Criar a propriedade quantidade;
    06 - Criar o construtor dentro da classe;
    07 - Criar uma variável para calcular o aumento;
    08 - Instanciar os produtos inserindo todas as propriedades;
    09 - Criar a lista de produtos;
    10 - Percorrer a lista de produtos;
    11 - Criar uma lista vazia para colocar os produtos com novo valor;
    12 - Calcular o valor com aumento: novo valor =+ novo valor * aumento;
    13 - Inserir o nome do produto e o novo valor na nova lista;
    14 - Exibir a lista com o valor original;
    15 - Exinir a lista com o novo valor;
*/

class Produto {
    nomeProduto: string = "";
    valorProduto: number = 0;

    constructor(nomeProduto: string, valorProduto: number) {
        this.nomeProduto = nomeProduto;
        this.valorProduto = valorProduto;
    }
}

const aumento: number = 0.10;
let produtosComAumento = [];

const produto1 = new Produto("Luva", 50);
const produto2 = new Produto("Bola", 150);
const produto3 = new Produto("Chuteira", 350);

const listaProdutos: Produto[] = [produto1, produto2, produto3];

for (let produtoSelecionado of listaProdutos) {
    let novoValor = produtoSelecionado.valorProduto
    //console.log(produtoSelecionado.valorProduto += produtoSelecionado.valorProduto * aumento);
    novoValor += novoValor * aumento;
    //console.log(novoValor);
    produtosComAumento.push(produtoSelecionado.nomeProduto, novoValor);
}
console.log(`Lista de produtos antes do aumento:`,listaProdutos);
console.log({aumento: produtosComAumento});