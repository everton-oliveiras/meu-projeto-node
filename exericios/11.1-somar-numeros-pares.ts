/*
    Enunciado:
    Dado um array numérico, percorra o array e retorne a soma apenas dos números pares.

    Exemplo:
    Entrada: [1, 2, 3, 4, 5, 6, 8]
*/

const listaNumeros: number[] = [1, 2, 3, 4, 5, 6, 7, 8];
let soma: number = 0;

for (let num of listaNumeros) {
    if (num % 2 === 0) {
        soma = soma + num;
    }
}
console.log(`A soma dos números pares é ${soma}`);