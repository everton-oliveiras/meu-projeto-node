/*
    8) Somar valores
    Enunciado: Dado um array numérico, retorne a soma total.

    Exemplo:
    Entrada: [10, 20, 5] → Saída: 35

*/

const numeros: number[] = [10, 20, 5];
let resultadoSoma:number = 0;

for (const numSelecionado of numeros){
    resultadoSoma = (resultadoSoma + numSelecionado);
    console.log(`Numero selecionado ${numSelecionado}`);
}

console.log(resultadoSoma);