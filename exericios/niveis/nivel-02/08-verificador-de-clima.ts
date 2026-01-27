/*
    8. Verificador de Clima: Receba a temperatura. Se > 30°C: "Quente"; se < 15°C: "Frio"; entre eles: "Agradável".

    Pseudo-Código:

    1 - Receber o valor de uma temperatura;
    2 - Verificar se a temperatura recebida é maior que 30;
    3 - Se for maior, exibir "Quente";
    4 - Se não for, verificar se a temperatura recebica é menor que 15;
    5 - Se for, Exibir "Frio";
    6 - Se não for, exibir "Agradável".
*/

const temperatura: number = 30;

if (temperatura > 30) {
    console.log(`${temperatura}°C. Quente!`);
}
else if (temperatura < 15){
    console.log(`${temperatura}°C. Frio!`);
}
else {
    console.log(`${temperatura}°C. Agradável!`);
}