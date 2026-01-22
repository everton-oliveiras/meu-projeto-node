/*
    Exercício 04: Filtrar Números Negativos
    Enunciado: Dado um array de números, retorne um novo array contendo apenas os números menores que 0.
    Exemplo: [5, -3, 10, -1] -> [-3, -1]
*/

const listaNumeros: number[] = [5, -3, 10, -1];
let numerosNegativos: number[] = [];

for (let num of listaNumeros) {
    if (num < 0 ){
        numerosNegativos.push(num);
    }
}

console.log(numerosNegativos);