/*
    02 - Conversor de Medidas: Crie um programa que receba um valor em metros e o converta para centímetros.

    Pseudo-Código:

    1 - Receber um número inteiro;
    2 - Calcular a conversão do número recebido represetando metros para centímetros;
    3 - Exibir o valor convertído em centímetros.
*/

const numMetros: number = 1.75;
let numCentimetros: number = numMetros / 0.01;

console.log(`${numMetros} metro(s) = ${numCentimetros} centímetros.`);