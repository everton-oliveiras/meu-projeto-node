/*
    Exercício 4: O App de Finanças
    Você tem uma lista de transações bancárias.
    Objetivo: Filtrar apenas as transações do tipo "entrada" e transformar o array 
    para que contenha apenas os valores formatados com o símbolo de "R$".

    const transacoes = [
    { tipo: "entrada", valor: 1500 },
    { tipo: "saida", valor: 200 },
    { tipo: "entrada", valor: 500 },
    { tipo: "saida", valor: 800 }
    ];

    Resultado esperado: ["R$ 1500", "R$ 500"]
*/

const transacoes = [
    {tipo: "entrada", valor: 1500},
    {tipo: "saida", valor: 200},
    {tipo: "entrada", valor: 500},
    {tipo: "saida", valor: 800}
];

const filtroTransacoes = transacoes.filter(transacao => transacao.tipo === "entrada");
filtroTransacoes.map(valores => console.log(`R$ ${valores.valor}`));