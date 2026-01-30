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
console.log(`Exercício 01:`, Maioridade(17));

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
console.log(`Exercício 02:`, classificarNumero(10));

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
console.log(`Exercício 03:`, verificarStatusAluno(7));

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
console.log(`Exercício 04:`, mostrarDiaDaSemana(1));

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
console.log(`Exercício 05:`, verificarPermissao("guest"));

/*  6) Código HTTP simples
    Enunciado: Dado um code (400, 401, 404), retorne a mensagem.
    Caso contrário, "Erro desconhecido".
    
    Exemplo:
    Entrada: code = 404 → Saída: "Not Found" 
*/
function verificarCodigoHTTP(_codigo: number) {
    switch (_codigo) {
        case 200:
            return "Ok";
            break;
        case 201:
            return "Created";
            break;
        case 400:
            return "Bad Request";
            break;
        case 401:
            return "Unauthorized";
            break;
        case 403:
            return "Forbidden";
            break;
        case 404:
            return "Not Found";
            break;
        case 500:
            return "Internal Server Error";
            break;
        default:
            return "Erro desconhecido";
    }
}
console.log(`Exercício 06:`, verificarCodigoHTTP(404));

/*  7) Retornar pares
    Enunciado: Dado um array numérico, retorne um novo array só com os números pares.

    Exemplo:    
    Entrada: [1,2,3,4,5,6] → Saída: [2,4,6]
*/
const listaNumeros: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const listaPalavras: string[] = ["telefone", "monitor", "tela", "teclado", "armadilha", "seguro", "banana", "laranja", "fone"];

function retornarPares(_listaNumeros: number[]) {
    let listaPares: number[] = [];
    listaPares = _listaNumeros.filter(num => num % 2 === 0);
    return listaPares;
}
console.log(`Exercício 07: Os números pares da lista são:`, retornarPares(listaNumeros));

/*  8) Somar valores
    Enunciado: Dado um array numérico, retorne a soma total.

    Exemplo:
    Entrada: [10, 20, 5] → Saída: 35
*/

function somarValores(_listaNumSomar: number[] = listaNumeros) {
    let soma: number = 0;
    const meusNumerosMultiplicadosPorCinco = listaNumeros.map(n => n * 5);
    //  _listaNumSomar.map(num => soma += num);

    listaNumeros.forEach(n => soma += n);

    let somaV2 = listaNumeros.reduce((acc, itemAtual) => acc += itemAtual);

    console.log(`Soma v2 é igual a ${somaV2}`)

    return `Exercício 08: A soma dos números é: ${soma}`;
}
console.log(somarValores());

/*  9) Enunciado: Dado um array numérico, retorne o maior valor.
    Exemplo:
    Entrada: [4, 9, 2] → Saída: 9
*/

function retornarMaiorValor(_listaMaiorvalor: number[] = listaNumeros) {
    let numMaior: number = 0;
    _listaMaiorvalor.forEach(num => {
        if (num > numMaior) {
            numMaior = num;
        }
    });
    return `Exercício 09: O maior número da lista é: ${numMaior}`;

}
console.log(retornarMaiorValor());

/*  10) Contar ocorrências
    Enunciado: Dado um array e um valor x, retorne quantas vezes x aparece.

    Exemplo:
    Entrada: arr=[1,2,2,2,3], x=2 → Saída: 3
*/

function contarOcorrencias(_num: number, _listaOcorrencias: number[] = listaNumeros) {
    let contagem: number = 0;

    _listaOcorrencias.forEach(num => {
        if (num === _num) {
            contagem++;
        }
    });
    return `Exercício 10: O número ${_num} aparece ${contagem} vezes na lista.`;
}
console.log(contarOcorrencias(8));

/*  11) Contar números maiores que X
    Dado um array de números e um valor X, conte quantos números do array são maiores que X.
    Entrada: array = [2, 8, 4, 10, 11, 3, 5 , 1, 12]   Defina X = 5
*/

function contarNumerosMaiores(_num: number, _listaNumeros: number[] = listaNumeros) {
    let contagem: number = 0;

    _listaNumeros.forEach(num => {
        if (num > _num) {
            contagem++;
        }
    });
    return `Exercício 11: ${contagem} números da lista são maiores que ${_num}.`;
}
console.log(contarNumerosMaiores(3));

/*  11.1) Somar apenas números pares
    Enunciado:
    Dado um array numérico, percorra o array e retorne a soma apenas dos números pares.

    Exemplo:
    Entrada: [1, 2, 3, 4, 5, 6, 8]
*/

function somarNumerosPares(_listaNumeros: number[] = listaNumeros) {
    let soma: number = 0;
    let listaPares = _listaNumeros.filter(num => num % 2 === 0);
    listaPares.map(num => soma += num);
    return soma;
}
console.log(`Exercício 11.1: A soma dos números pares da lista é:`, somarNumerosPares());

/*  11.2) Contar palavras com mais de 5 letras
    Enunciado:
    Dado um array de palavras, conte quantas possuem mais de 5 letras.
    Exemplo:
    Entrada: ["casa", "computador", "sol", "javascript", "banana"]
*/
function contarPalavras(numDeLetras: number, _listaPalavras: string[] = listaPalavras) {

    const palavrasFiltradas = _listaPalavras.filter(palavras => palavras.length > numDeLetras).length;

    console.log(palavrasFiltradas);
    return `A lista contém ${palavrasFiltradas} com mais de ${numDeLetras} letras.`;
}
console.log(`Exercício 11.2: A lista contém`, contarPalavras(3));

/*  11.3)  Encontrar a maior palavra
    Enunciado:
    Dado um array de palavras, encontre e retorne a palavra com maior quantidade de caracteres.
    Exemplo:
    Entrada: ["carro", "bicicleta", "avião"]
*/
function encontrarMaiorPalavra(_listaPalavras: string[] = listaPalavras){
    let maiorPalavra: string = "";
    for(let palavraSelecionada of _listaPalavras){
        if (palavraSelecionada > maiorPalavra){
            maiorPalavra = palavraSelecionada;
        }
        return maiorPalavra;
    }
    
}
//console.log(`Exercício 11.3: A maior palavra da lista é:`, encontrarMaiorPalavra());
//console.log(listaPalavras);
