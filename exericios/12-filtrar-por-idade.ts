/*
    12) Filtrar por idade
    Enunciado: Dado um array de pessoas { nome, idade }, retorne somente as com idade >= 18.

    Exemplo:
    Entrada: [{nome:"Ana",idade:17},{nome:"Bia",idade:20}] → Saída: [{nome:"Bia",idade:20}]
*/

/*
class Pessoa {
    public nome: string = "";
    public idade: number = 0;
}

const pessoa = new Pessoa();

pessoa.nome = "Ana";
pessoa.idade = 17;

const pessoa2 = new Pessoa();

pessoa2.nome = "Bia";
pessoa2.idade = 20;

console.log(pessoa, pessoa2);
*/

class Pessoa {
    public nome: string = "";
    public idade: number = 0;
}

const pessoa1 = new Pessoa();
const pessoa2 = new Pessoa();
const pessoa3 = new Pessoa();

pessoa1.nome = "Ana";
pessoa1.idade = 17;

pessoa2.nome = "Bia";
pessoa2.idade = 20;

pessoa3.nome = "Clara";
pessoa3.idade = 12;

const listaPessoas: Pessoa[] = [pessoa1, pessoa2, pessoa3];

// for (const pessoa of listaPessoas)
// {
//     console.log(pessoa);
// }


const pessoas = [
    {
        nome: "Ana",
        idade: 17
    },
    {
        nome: "Bia",
        idade: 20,
    },
    {
        nome: "Clara",
        idade: 12,
    },
    {
        nome: "Heitor",
        idade: 26
    }
];

const listaPessoasV2: { nome: string, idade: number }[] = [];

listaPessoasV2.push(
    {
        nome: "Ana",
        idade: 17
    }
);

listaPessoasV2.push(
    {
        nome: "Bia",
        idade: 20,
    },
);



let contador: number = 0;
for (const pessoa of pessoas) {
    if (pessoa.idade >= 18) {
        contador++
    }
}

console.log(`Temos ${contador} pessoas com 18 anos ou mais.`);

console.log(pessoas[1]);






