/*
1) Maioridade
Enunciado: Dada uma idade, retorne "Maior de idade" se idade >= 18, senão "Menor de idade".

Exemplo:
Entrada: idade = 16 → Saída: "Menor de idade"
Entrada: idade = 20 → Saída: "Maior de idade"

*/

/*
const idade: number = 20;

if (idade >= 18) {
    console.log("Maior de idade");
}
else {
    console.log("Menor de idade");
}
*/

function Maioridade(_idade: number) {
    if (_idade >= 18) {
        return "Maior de Idade.";
    }
    else {
        return "Menor de Idade.";
    }
}

console.log(Maioridade(17));