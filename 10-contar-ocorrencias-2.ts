const listaNumeros: number[] = [5, 5, 1, 1, 9, 8, 5, 6, 7, 0, 6, 8, 7, 5, 5, 1, 1, 9, 7, 7, 6, 5, 9, 1, 0, 0];
let numSelecionado: number = 6;
let contagem: number = 0;

for (let num of listaNumeros) {
    if (num === numSelecionado) {
        contagem++;
    }
}
console.log(`O número ${numSelecionado} aparece ${contagem} vezes na lista.`);