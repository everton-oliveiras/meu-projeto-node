/*
    Filtro de Números Pares
    
    Objetivo: Separar números pares de uma lista mista.
    
    Pseudo-Código:
    
    1 - Receber um array de números aleatórios (ex: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]).
    
    2 - Criar um novo array vazio chamado pares.
    
    3 - Percorrer o array original.
    
    4 - Para cada número, verificar se o resto da divisão por 2 é zero ($numero \% 2 === 0$).
    
    Se for par, adicionar o número ao array pares (use .push()).
    
    Exibir o array final de números pares.
*/

const listaNumeros: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];
const numerosPares: number[] = [];

for (let numeroSelecionado of listaNumeros) {
    if (numeroSelecionado % 2 === 0) {
        numerosPares.push(numeroSelecionado);
    }
}
console.log(`Lista de Números Originais: ${listaNumeros}.`); 
console.log(`Lista de Números Pares: ${numerosPares}`);