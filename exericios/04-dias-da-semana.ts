/*
4) Dia da semana
Enunciado: Dado um número 1..7, retorne o nome do dia (1=Domingo, 2=Segunda...).
Se for inválido, retorne "Dia inválido".
Exemplo:
Entrada: dia = 2 → Saída: "Segunda"

*/

const diaSemana: number = 8;

switch (diaSemana) {
    case 1:
        console.log("Domingo");
        break;
    case 2:
        console.log("Segunda");
        break;
    case 3:
        console.log("Terça");
        break;
    case 4:
        console.log("Quarta");
        break;
    case 5:
        console.log("Quinta");
        break;
    case 6:
        console.log("Sexta");
        break;
    case 7:
        console.log("Sábado")
        break;
    default:
        console.log("Dia Inválido");
}