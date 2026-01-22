/*
    Exercício 02: Par ou Ímpar
    Enunciado: Receba um número n e retorne se ele é "Par" ou "Ímpar".
    Dica: Use o operador de resto % 2.
*/

const num: number = 5;

if (num % 2 === 0) {
    console.log(`${num} é um número par.`);
}
else {
    console.log(`${num} é um número ímpar.`);
}