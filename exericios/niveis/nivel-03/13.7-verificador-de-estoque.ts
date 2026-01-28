/*
    7. Verificador de Estoque (Alerta de Baixo Nível)
    Objetivo: Percorrer uma lista de quantidades e identificar quais produtos precisam de reposição.
              Se a quantidade for menor que 5, dizer que precisa de reposição.

    Pseudo-Código:

    01 - Criar uma classe de produtos;
    02 - Definir propriedades da classe;
    03 - Propriedade nomeProduto vazia do tipo string;
    04 - Propriedade quantidadeProduto zerada do tipo number;
    05 - Definir constructor dentro da classe;
    06 - Criar lista vazia de produtos para reposição;
    07 - Criar variável para quantidade de produtos que precisam de reposição;
    08 - Instanciar produtos definindo nome e quantidade;
    09 - Criar lista de produtos com os produtos criados;
    10 - Percorrer a lista;
    11 - Se a quantidade do produto for menor que 5, Adicionar o nome do produto
         na lista de produtos para reposição;
    12 - Se a quantidade do produto for menor que 5, somar 1 a variável quantidade de resposição;
    13 - Exibir quantos produtos precisam de reposição;
    14 - Exibir quais são os produtos que precisam de reposição;
*/

class Produto {
    nomeProduto: string = "";
    quantidadeProduto: number = 0;

    constructor(nomeProduto: string, quantidadeProduto: number) {
        this.nomeProduto = nomeProduto;
        this.quantidadeProduto = quantidadeProduto;
    }
}

let produtosReposicao: string[] = [];
let quantidadeReposicao: number = 0;
const estoqueMaximo: number = 20;
const estoqueMinimo: number = 5;
let quantidadeFaltando: number = 0;

const produto1 = new Produto("Teclado", 4);
const produto2 = new Produto("Monitor", 6);
const produto3 = new Produto("Mouse", 2);
const produto4 = new Produto("Fone de Ouvido", 19);
const produto5 = new Produto("Cadeira", 20);

const listaProdutos: Produto[] = [produto1, produto2, produto3, produto4, produto5];

console.log(`O estoque máximo por produto é de ${estoqueMaximo}`);

for (let produto of listaProdutos) {
    //console.log(produto);
    quantidadeFaltando = estoqueMaximo - produto.quantidadeProduto;
    console.log(`Faltam ${quantidadeFaltando} do produto: ${produto.nomeProduto} para alcançar o estoque máximo`);

    if (produto.quantidadeProduto < estoqueMinimo) {
        produtosReposicao.push(produto.nomeProduto);
        quantidadeReposicao++;   
    }
}
console.log(`${quantidadeReposicao} produtos precisam de reposição.`);
console.log(`Produtos que precisam de reposição: `, produtosReposicao);