/*
    3) Nota do aluno
    Enunciado: Dada uma nota (0 a 10):

    >= 7: "Aprovado"
    >= 5: "Recuperação"
    < 5: "Reprovado"
    
    Exemplo:
    Entrada: nota = 6.5 → Saída: "Recuperação"

*/

const nota: number = 3;

if (nota >= 7) {
    console.log("Aprovado");
}
else if (nota >= 5) {
    console.log("Recuperação");
}
else {
    console.log("Reprovado");
}