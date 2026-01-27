/*
    03 - Cálculo de Área: Peça o raio de um círculo e calcule sua área (A=πr2 A=πr2).

    Pseudo-Código:

    1 - Receber o valor do raio;
    2 - Declarar o valor de PI;
    3 - Calcular a área; Fórmula: area = PI * (raio * raio);
    4 - Exibir o resultado do cálculo.
*/

const raio: number = 10;
const pi: number = 3.14;

const area: number = pi * (raio * raio);

console.log(`Área do Círculo = ${area}`);