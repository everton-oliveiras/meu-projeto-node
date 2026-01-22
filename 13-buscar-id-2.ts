class Objeto {
    id: number = 0;
    name: string = "";
}

const objeto1 = new Objeto();
const objeto2 = new Objeto();

objeto1.id = 1;
objeto1.name = "A";

objeto2.id = 2;
objeto2.name = "B";

const listaObjetos: Objeto[] = [objeto1, objeto2];

const objetoEscolhido: number = 2;
let objeto: any = null;

for (let objetoSelecionado of listaObjetos) {
    if (objetoSelecionado.id === objetoEscolhido){
        objeto = objetoSelecionado;
    }
}
console.log(objeto);