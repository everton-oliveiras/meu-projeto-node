/*
    13) Buscar por ID
    Enunciado: Dado um array de objetos { id, name } e um id, retorne o objeto correspondente (ou null se não existir).
    
    Exemplo:
    Entrada: [{id:1,name:"A"},{id:2,name:"B"}], id=2 → Saída: {id:2,name:"B"}
*/

class Pessoa {
    public id: number = 0;
    public name: string = "";
}

const id1 = new Pessoa();
const id2 = new Pessoa();

id1.id = 1;
id1.name = "A";

id2.id = 2;
id2.name = "B";

let idSelecionado: number = 3;

const listaID: Pessoa[] = [id1, id2];
let pessoaEncontrada = null;

for (let _id of listaID) {
    if (_id.id === idSelecionado){
        pessoaEncontrada = _id;
    }
}

console.log(pessoaEncontrada);