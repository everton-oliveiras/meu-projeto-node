class Pessoa {
    public nome: string = `Moises`;
    public idade: number = 0;
    public tipoSangue: string = ``;
}

let pessoa = new Pessoa(); 

console.log(pessoa.nome); //Moises

pessoa.nome = `Everton`;

pessoa = new Pessoa();

console.log(pessoa.nome);

 class Carro {
    public marca: string = "";
    public modelo: string = "";
    public ano: number = 0;
    public cor: string = "";
}

const carro = new Carro();

carro.marca = "Volkswagen";
carro.modelo = "Gol";
carro.ano = 2020;
carro.cor = "Prata";

console.log(carro.marca);
console.log(carro.modelo);
console.log(carro.ano);
console.log(carro.cor);

const carro2 = new Carro();
carro2.marca = "Fiat";
carro2.modelo = "Uno";
carro2.ano = 2010;
carro2.cor = "Verde";

console.log(carro2.marca);
console.log(carro2.modelo);
console.log(carro2.ano);
console.log(carro2.cor);