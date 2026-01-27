/*
    05 - Salário Real: Pergunte quanto o usuário ganha por hora e o número de horas trabalhadas.
    Calcule o salário bruto e o líquido (descontando 11% de IR e 8% de INSS).

    Pseudo-Código:

    1 - Receba o valor de ganho por hora;
    2 - Receba o valor do número de horas trabalhadas;
    3 - Calcule o valor do salário bruto: salarioBruto = ganhoPorHora * horasTrabalhadas;
    4 - Calcule o valor do IR;
    5 - Calcule o valor do INSS;
    6 - Calcule o valor do salário liquido descontando 11% de IR e 8% de INSS: salarioLiquido = salarioBruto - IR - INSS;
    7 - Exibir salário bruto e salário liquido.
*/

const ganhoPorHora: number = 10;
const horasTrabalhadas: number = 8;

const salarioBruto: number = ganhoPorHora * horasTrabalhadas;

const valorIR: number = salarioBruto * 0.11;
const valorINSS: number = salarioBruto * 0.08;

const salarioLiquido: number = salarioBruto - valorIR - valorINSS;

console.log(`Salário Bruto: R$ ${salarioBruto}. Salário Líquido: R$ ${salarioLiquido}.`);