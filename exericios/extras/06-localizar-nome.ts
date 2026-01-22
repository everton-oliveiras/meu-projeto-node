/*
Exercício 06: Localizar Nome
Enunciado: Crie uma função que recebe um array de nomes e um nome específico.
Retorne true se o nome estiver na lista, caso contrário, false.
*/

function localizarNome(nome: string) {
    const listaNomes: string[] = ["Everton", "Evelyn", "Alfredo", "Dexter", "Deb"];

    for (let nomeSelecionado of listaNomes) {
        if (nomeSelecionado === nome){
            return true;
        }
        else {
            return false;
        }
    }
}
localizarNome("Everton");

console.log(localizarNome);