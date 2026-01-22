class Pessoa {
    nome: string = "";
    idade: number = 0;
}

const pessoa = new Pessoa();
const pessoa1 = new Pessoa();
const pessoa2 = new Pessoa();
const pessoa3 = new Pessoa();

pessoa.nome = "Ana";
pessoa.idade = 17;

pessoa1.nome = "Bia";
pessoa1.idade = 20;

pessoa2.nome = "João";
pessoa2.idade = 18;

pessoa3.nome = "Vitor";
pessoa3.idade = 19;

const listaPessoas = [pessoa, pessoa1, pessoa2, pessoa3];
let listaPessoasSelecionadas = [];

for (let pessoaSelecionada of listaPessoas) {
    if (pessoaSelecionada.idade >= 18) {
        listaPessoasSelecionadas.push(pessoaSelecionada);
    }
}
console.log(listaPessoasSelecionadas);