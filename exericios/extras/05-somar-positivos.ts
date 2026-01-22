/*
    Exercício 05: Somar Positivos
    Enunciado: Dado um array de números, percorra-o e retorne a soma apenas dos números que forem maiores que 0.
    Exemplo: [10, -5, 20] -> 30
*/

const listaNumeros: number[] = [10, -5, 20, -19, 8];
let numerosPositivos: number = 0;

for (let num of listaNumeros) {
    if (num > 0){
        numerosPositivos = numerosPositivos + num;
    }
}

console.log(numerosPositivos);