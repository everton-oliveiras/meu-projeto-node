/*
    10. Tabuada: Receba um número e gere a tabuada dele de 1 a 10.

    Pseudo-Código:

    1 - Receber um número inteiro;
    2 - Gerar uma lista com números de 1 à 10;
    3 - Multiplicar o número recebido pelos números de 1 à 10;
    4 - Exibir o resultado da multiplicação de todos os números:
*/

const numero: number = 5;
const listaNumeros: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let resultado: number = 0;

//Solução 1:
for (let numSelecionado of listaNumeros) {
    resultado = numero * numSelecionado;
    console.log(`${numero} * ${numSelecionado} = ${resultado}`);
}

//Solução 2:
for (let i = 1; i <= 10; i++) {
    for (let j = 1; j <= 10; j++) {
        console.log(`${i} * ${j}  = ${i * j}}`)
    }
}
//Solução 3:
const numerosMultiplicados: number[] = listaNumeros.map(num => num * numero);
console.log(`Tabuada de ${numero} = ${numerosMultiplicados}`);

//Solução 4: Usando a própria lista pra fazer a tabuada de todos os números.
for (let numeroDaLista of listaNumeros) {
    for (let resultado of listaNumeros) {
        console.log(`${numeroDaLista} * ${resultado} = `, numeroDaLista * resultado);
    }
}