/*  1) Maioridade
    Enunciado: Dada uma idade, retorne "Maior de idade" se idade >= 18, senão "Menor de idade".

    Exemplo:
    Entrada: idade = 16 → Saída: "Menor de idade"
    Entrada: idade = 20 → Saída: "Maior de idade" 
*/
function Maioridade(_idade: number) {
    if (_idade >= 18) {
        return "Maior de Idade.";
    }
    else {
        return "Menor de Idade.";
    }
}
console.log(Maioridade(17));

/*  2) Classificar número
    Enunciado: Dado um número n, retorne "Positivo", "Negativo" ou "Zero".

    Exemplo:
    Entrada: n = -3 → Saída: "Negativo"
    Entrada: n = 0 → Saída: "Zero"
*/
function classificarNumero(_numero: number) {
    if (_numero > 0) {
        return "Positivo";
    }
    else if (_numero < 0) {
        return "Negativo";
    }
    else {
        return `O número é ${_numero}`
    }
}
console.log(classificarNumero(10));

/*  3) Nota do aluno
    Enunciado: Dada uma nota (0 a 10):

    >= 7: "Aprovado"
    >= 5: "Recuperação"
    < 5: "Reprovado"
    
    Exemplo:
    Entrada: nota = 6.5 → Saída: "Recuperação"
*/
function verificarStatusAluno(_nota: number) {
    if (_nota < 0 || _nota > 10) {
        return "Nota Inválida";
    }
    else if (_nota >= 7) {
        return `Nota do Aluno: ${_nota}. Aprovado`;
    }
    else if (_nota >= 5) {
        return `Nota do Aluno: ${_nota}. Recuperação`;
    }
    else {
        return `Nota do Aluno: ${_nota}. Reprovado`;
    }
}
console.log(verificarStatusAluno(7));

/*  4) Dia da semana
    Enunciado: Dado um número 1..7, retorne o nome do dia (1=Domingo, 2=Segunda...).
    Se for inválido, retorne "Dia inválido".
    Exemplo:
    Entrada: dia = 2 → Saída: "Segunda"
*/
function mostrarDiaDaSemana(_diaSemana: number) {
    switch (_diaSemana) {
        case 1:
            return "Domingo";
            break;
        case 2:
            return "Segunda";
            break;
        case 3:
            return "Terça";
            break;
        case 4:
            return "Quarta";
            break;
        case 5:
            return "Quinta";
            break;
        case 6:
            return "Sexta";
            break;
        case 7:
            return "Sábado";
            break;
        default:
            return "Dia Inválido";
    }
}
console.log(mostrarDiaDaSemana(1));

/*  5) Enunciado: Dado role ("admin" | "user" | "guest"), retorne:

        admin → "Acesso total"
        user → "Acesso limitado"
        guest → "Somente leitura"
        Exemplo:
        Entrada: role = "guest" → Saída: "Somente leitura"
*/
function verificarPermissao(_role: string) {
    switch (_role) {
        case "admin":
            return "Acesso Total.";
            break;
        case "user":
            return "Acesso Limitado.";
            break;
        case "guest":
            return "Somente Leitura";
            break;
        default:
            return "Usuário Inválido."
    }
}
console.log(verificarPermissao("guest"));