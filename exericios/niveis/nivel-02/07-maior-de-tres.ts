/*
    7. Maior de Três: Peça três números e imprima o maior deles.

    Pseudo-Código:

    1 - Receber o primeiro número;
    2 - Receber o segundo número;
    3 - Receber o terceiro número;
    4 - Verificar se o primeiro número é maior que o primeiro e o segundo número;
    5 - Se for maior, exibir "O primeiro número é maior que o segundo e o teceiro número";
    6 - Se não for, verificar se o segundo número é maior que o primeiro e o terceiro número;
    7 - Se for maior, exibir "O segundo número é maior que o primeiro e o teceiro número";
    8 - Se não for, então exibir "O terceiro número é maior que o primeiro e o segundo número";
*/

const num1: number = 13;
const num2: number = 11;
const num3: number = 12;

if (num1 > num2 && num1 > num3){
    console.log(`${num1} é maior que ${num2} e ${num3}`);
}
else if (num2 > num1 && num2 > num3){
    console.log(`${num2} é maior que ${num1} e ${num3}`);
}
else {
    console.log(`${num3} é maior que ${num1} e ${num2}`);
}