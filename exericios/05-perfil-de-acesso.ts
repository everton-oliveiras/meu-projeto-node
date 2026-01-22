/*
    Enunciado: Dado role ("admin" | "user" | "guest"), retorne:

    admin → "Acesso total"
    user → "Acesso limitado"
    guest → "Somente leitura"
    Exemplo:
    Entrada: role = "guest" → Saída: "Somente leitura"
 
*/

const role: string = "admin";

switch (role) {
    case "admin":
        console.log("Acesso Total");
        break;
    case "user":
        console.log("Acesso Limitado");
        break;
    case "guest":
        console.log("Somente Leitura");
        break;
    default:
        console.log("Entrada Inválida");
}