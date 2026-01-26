const numerosLista: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const numerosPares: number[] = [];

for (let num of numerosLista) {
    if (num % 2 === 0) {
        numerosPares.push(num);
    }
}
console.log({numerosPares: numerosPares});

//array.filter
//array.map
//array.reduce - somar valores

const pares = numerosLista.filter(num => num % 2 === 0);
console.log({pares: pares});

const dobro = numerosLista.map(num => num * 2);
console.log({dobro: dobro});