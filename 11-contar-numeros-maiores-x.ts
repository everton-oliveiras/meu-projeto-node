/*
    11) Contar números maiores que X
    Dado um array de números e um valor X, conte quantos números do array são maiores que X.
    Entrada: array = [2, 8, 4, 10, 11, 3, 5 , 1, 12]   Defina X = 5 
*/

const listaNumeros: number[] = [2, 8, 4, 10, 11, 3, 5, 1, 12];
const numEscolhido: number = 8;
//let numMaiores: number[] = [];
let contagem: number = 0;

for (let num of listaNumeros) {
    if (num > numEscolhido) {
        contagem++;
        //numMaiores.push(num);
    }
}
console.log(`${contagem} da lista são maiores que ${numEscolhido}`);
//console.log(`Os números ${numMaiores} são maiores que ${numEscolhido}.`);