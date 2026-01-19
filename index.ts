let saudacao: string = "Hello, World!";
console.log(saudacao);

/*
O Desafio: Calculadora de Descontos Progressivos
Imagine que você está criando um motor para um e-commerce. O seu Tech Lead pediu para você criar uma função que calcule 
o valor final de uma compra baseada em uma regra de desconto.

Regras do Negócio:

Se a compra for menor que R$ 100, não há desconto.

Se a compra for entre R$ 100 e R$ 500, o desconto é de 10%.

Se a compra for maior que R$ 500, o desconto é de 20%.

O que você deve fazer:
No seu arquivo index.ts, crie uma variável chamada valorCompra (do tipo number).

Crie uma variável chamada valorFinal (também do tipo number).

Use uma estrutura de decisão (if, else if, else) para aplicar as regras acima.

No final, exiba no terminal uma mensagem como: "Compra de R$ 600. Com desconto, o valor final é R$ 480".

Dicas de TypeScript para te ajudar:
Tipagem: Lembre-se de declarar o tipo: let valor: number = 100;.

Cálculo: Para tirar 10%, você pode multiplicar o valor por 0.9. Para tirar 20%, multiplique por 0.8.

Template String: Para exibir a mensagem bonita, use crases: `Valor: ${valorFinal}`.

*/

let valorCompra: number = 500;
let valorFinal: number;

if (valorCompra < 100) {
    console.log(`Compra de R$ ${valorCompra}. Sem desconto.`);
}
else if (valorCompra < 500) {
    valorFinal = valorCompra * 0.9;
    console.log(`Compra de R$ ${valorCompra}. Com desconto de 10%, o valor final é de R$ ${valorFinal}`);
}
else {
    valorFinal = valorCompra * 0.8;
    console.log(`Compra de R$ ${valorCompra}. Com desconto de 20%, o valor final é de R$ ${valorFinal}`);
}