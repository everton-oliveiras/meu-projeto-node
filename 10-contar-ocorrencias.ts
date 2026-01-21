/*
    10) Contar ocorrências
    Enunciado: Dado um array e um valor x, retorne quantas vezes x aparece.

    Exemplo:
    Entrada: arr=[1,2,2,2,3], x=2 → Saída: 3

*/

const listaNumeros: number[] = [1, 2, 2, 2, 2, 2, 2, 3];
const x: number = 2;
let contagem: number = 0;

for (const num of listaNumeros) {
    if (num === x) {
        contagem = contagem + 1;
    }
}

// for (let i: number = 1; i <= listaNumeros.length; i++) {

//     console.log(`Valor de I: ${i}`);

//     console.log(`Valor do elemento ${i} no array listaNumeros ${listaNumeros[i - 1]}`);

//     // if (listaNumeros[i] === x) {
//     //     contagem = contagem + 1;
//     // }
// }

// console.log(listaNumeros[-1]);


console.log(`O número ${x} apareceu ${contagem} vezes na lista.`);