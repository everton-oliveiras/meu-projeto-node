/*
    Desafio 1: O Filtro de Preços (Básico)
    Você tem uma lista de preços de produtos.
    Objetivo: Crie um novo array apenas com os preços que custam menos de 100 reais,
    mas aplique um desconto de 10% em cada um deles.

    precos = [150, 80, 200, 50, 95, 300];

    Dica: Primeiro use o .filter() para pegar os menores de 100, depois use o .map() no resultado.
*/

const listaPrecos: number[] = [150, 80, 200, 50, 95, 300];

const menoresQue100 = listaPrecos.filter (preco => preco < 100);

//console.log(menoresQue100.map(preco => preco = (preco * 0.9)));

const comDesconto = menoresQue100.map(preco => preco * 0.9);

console.log({listaPrecos: listaPrecos}, {menoresQue100: menoresQue100}, {comDesconto: comDesconto});
