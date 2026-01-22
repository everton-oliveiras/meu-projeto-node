/*
    Enunciado:
    Dado um array de palavras, encontre e retorne a palavra com maior quantidade de caracteres.
    
    Exemplo:
    Entrada: ["carro", "bicicleta", "avião"]
*/

const listaPalavras: string[] = ["carro", "bicicleta", "avião", "terremoto", "internamente"];
let maiorPalavra: string = "";

for (let palavra of listaPalavras) {
    //console.log(palavra, palavra.length);
    if (palavra.length > maiorPalavra.length) {
        maiorPalavra = palavra;
    }
}
console.log(`A maior palavra da lista é: ${maiorPalavra}. Contendo ${maiorPalavra.length} caracteres.`);