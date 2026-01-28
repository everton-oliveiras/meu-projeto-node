/*
    O Contador de Vogais

    Objetivo: Percorrer uma string (que funciona como um array de caracteres)
    e contar quantas vogais ela tem.

    Pseudo-Código:

    Criar uma variável frase com um texto qualquer (ex: "programacao").

    Criar uma lista (array) chamada vogais contendo ['a', 'e', 'i', 'o', 'u'].

    Criar uma variável contador começando em 0.

    Fazer um for para percorrer cada letra da frase.

    Dentro desse loop, fazer outro for para verificar se a letra atual está na lista de vogais.

    Se estiver, somar 1 ao contador.

    Exibir o total de vogais ao final.
*/

const palavra: string = "virtualizado";
const listaVogais: string[] = ["a", "e", "i", "o", "u"];
let contador: number = 0;

for (let letra of palavra) {
    //console.log(letra);
    for (let vogal of listaVogais){
        if(vogal === letra){
            contador++;
        }
    }
}
console.log(`A palavra ${palavra} tem ${contador} vogais`);