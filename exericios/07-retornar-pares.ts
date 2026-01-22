/*
    7) Retornar pares
    Enunciado: Dado um array numérico, retorne um novo array só com os números pares.

    Exemplo:    
    Entrada: [1,2,3,4,5,6] → Saída: [2,4,6]

*/

//Solução 1
const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const numeroPares: number[] = [];

for (const banana of numeros) {
    console.log(`Lendo número ${banana}`);

    if (banana % 2 === 0) {
        numeroPares.push(banana);
        console.log(`Número ${banana} é par e foi adicionado na lista de número pares`)
    }
    else
    {
        console.log(`O número ${banana} não é par`);
    }
}

//Solução 2

const pares = numeros.filter((numero) => {
    return numero % 2 === 0;
});

console.log(pares);