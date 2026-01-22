/*
    Exercício 03: Semáforo (Switch Case)
    Enunciado: Receba uma cor ("verde" | "amarelo" | "vermelho") e retorne a ação:
    verde -> "Siga"
    amarelo -> "Atenção"
    vermelho -> "Pare"
    Dica: Use switch.
*/

const cor: string = "azul";

switch (cor){
    case "verde":
        console.log("Siga");
        break;
    case "amarelo":
        console.log("Atenção");
        break;
    case "vermelho":
        console.log("Pare");
        break;
    default:
        console.log("Cor inválida!");
}