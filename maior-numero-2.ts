const numerosLista: number[] = [6, 10, 4, 9, 5, 7, 87, 11, 1, 32, 56, 12, 3];
let maiorNumero: number = 0;

for (let num of numerosLista) {
    if (num > maiorNumero){
        maiorNumero = num;
    }
}
console.log(`O mairor número da lista: ${numerosLista} é o número: ${maiorNumero}`);