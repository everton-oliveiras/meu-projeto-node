/*
    Exercício 08: Filtro de Estoque
    Enunciado: Dado um array de produtos [{ nome: string, preco: number, emEstoque: boolean }],
    retorne apenas os produtos que estão em estoque.
*/

class Produto {
    nome: string = "";
    preco: number = 0;
    emEstoque: boolean = false;
}

const produto = new Produto();

produto.nome = "Cadeira";
produto.preco = 300;
produto.emEstoque = true;

const produtoUm = new Produto();

produtoUm.nome = "Mesa";
produtoUm.preco = 100;
produtoUm.emEstoque = false;

const produtoDois = new Produto();

produtoDois.nome = "Geladeira";
produtoDois.preco = 2000;
produtoDois.emEstoque = true;

const listaProdutos: Produto[] = [produto, produtoUm, produtoDois];
let produtosEmEstoque = [];

for (let produtoSelecionado of listaProdutos) {
    if (produtoSelecionado.emEstoque === true){
        produtosEmEstoque.push(produtoSelecionado.nome);
    }
}
console.log(produtosEmEstoque);