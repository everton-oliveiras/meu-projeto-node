/*
    Desafio 1: O Painel de Cronometragem Industrial
    
    Cenário: Uma fábrica precisa testar o funcionamento de um novo relógio digital que será instalado na linha de produção.
    Eles precisam de uma simulação textual para validar se a lógica de virada de horas e minutos está correta.

    Requisitos do Sistema:
    1. O sistema deve simular um dia completo, começando às 00h 00min.
    2. O relógio deve avançar minuto a minuto.
    3. Quando os minutos chegarem a 59, o próximo passo deve zerar os minutos e incrementar a hora.
    4. O ciclo deve encerrar exatamente quando o relógio marcar 23h 59min (o último minuto do dia).
    5. Saída esperada: Imprimir na tela cada minuto que passa no formato: "Hora: [H] | Minuto: [M]".

    Dica de Lógica: Lembre-se que para cada uma hora que passa (ciclo externo), o ponteiro dos minutos deve dar uma volta completa (ciclo interno).
*/


for (let hora = 0; hora < 24; hora++) {
    for (let minuto = 0; minuto < 60; minuto++){
        console.log(`Hora: ${hora} | Minuto: ${minuto}`);
    }    
}