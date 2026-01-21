const numerosLista: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
const numerosPares: number[] = [];

for (let num of numerosLista) {
    if (num % 2 === 0) {
        numerosPares.push(num);
    }
}

console.log(numerosPares);
