/*
O Somador de Notas

Objetivo: Calcular a média aritmética de uma lista de notas.
Desafio: Usar um if dentro do loop para contar quantas notas foram acima de 7.

Pseudo-Código:

1 - Criar um array chamado notas com alguns valores (ex: [7, 8, 5, 10, 6]).

2 - Criar uma variável soma começando em 0.

3 - Percorrer o array de notas.

4 - Somar cada nota ao valor da variável soma.

5 - Após o loop, dividir a soma pelo tamanho do array (notas.length).

6 - Exibir a média final.
*/

const listaNotas: number[] = [7, 8, 5, 10, 6, 9];
let soma: number = 0;
let notasAltas: number = 0;

for (let notaSelecionada of listaNotas) {
    soma += notaSelecionada;
    //console.log({soma: soma});
    if (notaSelecionada > 7) {
        notasAltas++;
    }
}

const media: number = soma / listaNotas.length;
console.log({media: media});
console.log({notasAltas: notasAltas});