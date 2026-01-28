/*
    9. Triângulos: Receba três lados e verifique se formam um triângulo (e se é Equilátero, Isósceles ou Escaleno).

    Pseudo-Código:

    1 - Receber valor referente ao primeiro lado;
    2 - Receber valor referente ao segundo lado;
    3 - Receber valor referente ao terceiro lado;
    4 - Verificar se o primeiro lado é igual ao segundo e terceiro lado;
    5 - Se for, exibir "Equilátero";
    6 - Se não for, verificar se primeiro lado é igual ao segundo lado 
        ou segundo lado é igual ao terceiro lado ou terceiro lado é igual ao primeiro;
    7 - Se for, exibir "Isósceles";
    8 - Se nao for, exibir "Escaleno";

    ----------------------------------------------------------------------------------

*/

const lado1: number = 8;
const lado2: number = 8;
const lado3: number = 8;

if (lado1 === lado2 && lado1 === lado3){
    console.log(`Equilátero`);
}
else if (lado1 == lado2 || lado2 == lado3 || lado3 == lado1){
    console.log(`Isóceles`);
}
else{
    console.log(`Escaleno`);
}