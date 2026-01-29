/*
    15. Busca de Itens: Armazene 10 nomes.
        Depois, permita ao usuário buscar um nome e diga se ele foi encontrado.
    
    Algoritimo:

    1. Ler lista com 10 nomes;
    2. Ler o nome escolhido;
    3. 

*/

const listaNomes: string[] = ["Aline", "Leonardo", "Evelyn", "Michell", "Patricia"];
const nome: string = "Roberto";

const buscarNome = listaNomes.filter(nomeSelecionado => nomeSelecionado === nome);