/*
    Localizador do Maior Número:
    Objetivo: Encontrar o maior número de uma lista sem usar uma função pronta:

    Pseudo-Código:
    
    1 - Criar uma lista de números;

    2 - Criar uma variavel para comparacao iniciando em 0;

    3 - Percorrer a lista;

    4 - Armazenar numero percorrido;

    5 - Verificar se o número percorrido é maior que o número de comparação;

    6 - Exibir o maior número;
*/

const listaNumeros: number[] = [2, 6, 15, 9, 7, 11, 20, 13, 5, 3, 12, 14, 7];
let numeroComparar: number = 0;

for (let numeroSelecionado of listaNumeros) {
    if (numeroSelecionado > numeroComparar) {
        numeroComparar = numeroSelecionado;
    }
}
console.log(`O maior número da lista é: ${numeroComparar}`);