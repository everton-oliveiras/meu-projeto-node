/*
    6) Código HTTP simples
    Enunciado: Dado um code (400, 401, 404), retorne a mensagem.
    Caso contrário, "Erro desconhecido".
    
    Exemplo:
    Entrada: code = 404 → Saída: "Not Found" 

*/

const code: number = 502;

switch (code) {
    case 200:
        console.log("Ok");
        break;
    case 201:
        console.log("Created");
        break;
    case 400:
        console.log("Bad Request");
        break;
    case 401:
        console.log("Unauthorized");
        break;
    case 403:
        console.log("Forbidden");
        break;
    case 404:
        console.log("Not Found");
        break;
    case 500:
        console.log("Internal Server Error");
        break;
    default:
        console.log("Erro Desconhecido");
}