/*
    Enunciado: Dado um array numérico, retorne o maior valor.
    Exemplo:
    Entrada: [4, 9, 2] → Saída: 9
*/

/*
const numeros: number[] = [4, 9, 2];
let numeroMaior: number = 0;
let numeroFinal: number = 0;

for (const numeroSelecionado of numeros){
    if (numeroSelecionado > numeroMaior){
        numeroFinal = numeroSelecionado;
    }
    else {
        numeroFinal = numeroMaior;
    }

    console.log(`${numeroFinal} é o número maior.`)
    
}
*/

const numeros: number[] = [4, 9, 2, 62, 12, 34, 25];
let numMaior: number = 0;

for (const num of numeros) {
    if (num > numMaior) {
        numMaior = num;
    }
}

console.log(`${numMaior} é o número maior`);
