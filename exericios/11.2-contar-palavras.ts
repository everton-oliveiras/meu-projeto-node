/*
    11.2) Contar palavras com mais de 5 letras
    Enunciado:
    Dado um array de palavras, conte quantas possuem mais de 5 letras.
    
    Exemplo:
    Entrada: ["casa", "computador", "sol", "javascript", "banana"]
*/

const listaPalavras: string[] = ["casa", "computador", "sol", "javascript", "banana"];
const numLetras: number = 6;
let contagem: number = 0;

for (let palavra of listaPalavras) {
    if (palavra.length > numLetras){
        contagem++;
    }
}
console.log(`${contagem} palavras da lista tem mais que ${numLetras} letras.`);