/*
    06 - Par ou Ímpar: Receba um número inteiro e diga se ele é par ou ímpar.

    Pseudo-Código:

    1 - Receber um número inteiro;
    2 - Verificar se ele é par ou ímpar;
    3 - Se for par, exibir "Número Par";
    4 - Se for ímpar, exibir "Número Ímpar";
*/

const numero: number = 7;

if (numero % 2 === 0) {
    console.log(`${numero} é par.`);
}
else {
    console.log(`${numero} é ímpar`);
}