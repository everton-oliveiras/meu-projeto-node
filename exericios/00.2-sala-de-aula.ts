/*
    Desafio 2: Sala de Aula (Intermediário)
    Você tem uma lista de alunos com suas notas.
    Objetivo: Filtrar apenas os alunos que foram aprovados (nota maior ou igual a 7)
    e retornar um array de strings com a frase: "Parabéns [NOME], você passou!".

    alunos = [{ nome: "Julia", nota: 8.5 }, { nome: "Marcos", nota: 5.0 }, { nome: "Bia", nota: 9.0 },{ nome: "Leo", nota: 6.5 }];
*/

class Aluno {
    public nome: string = "";
    public nota: number = 0;
    
    constructor (nome: string, nota: number){
        this.nome = nome;
        this.nota = nota;
    }
}

const aluno1 = new Aluno("Julia", 8.5);
const aluno2 = new Aluno("Marcos", 7.0);
const aluno3 = new Aluno("Leo", 6.5);
const aluno4 = new Aluno("João", 7.1);

const listaAlunos: Aluno[] = [];

listaAlunos.push(aluno1, aluno2, aluno3, aluno4);

const aprovados = listaAlunos.filter(aluno => aluno.nota >= 7);
// Maneira 1 de logar na tela
aprovados.map(aprovados => console.log(`Parabéns ${aprovados.nome}, você passou!`));

// Maneira 2 de logar na tela
aprovados.forEach(alunoAprovado => console.log(`Parabéns ${alunoAprovado.nome}, você passou`));

// Maneira 3 de logar na tela
for(const alunoAprovado of aprovados){
    console.log(`Parabéns ${alunoAprovado.nome}, você passou!`);
}




