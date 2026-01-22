/*
    15) Regra de status
    Enunciado: Dado { status } onde status pode ser "pending" | "approved" | "denied", retorne uma mensagem:

    * pending → “Aguardando”
    * approved → “Aprovado”
    * denied → “Negado”

    Exemplo:
    Entrada: {status:"approved"} → Saída: "Aprovado"
*/

// class Status {
//     statusAprroved: string = "approved";
//     statusPending: string = "pending";
//     statusDenied: string = "denied";
// }

// const status = new Status();
// const listaStatus: Status[] = [status];

// const statusEscolhido: string = "approved";

// for (let statusSelecionado of listaStatus) {
//     if (statusSelecionado === statusEscolhido )
// }

type Entrada = {
    status: "pending" | "approved" | "denied";
}

const resultado = traduzirStatus({ status: "denied"});

function traduzirStatus(objeto: Entrada){
    if (objeto.status === "approved"){
        return "Aprovado";
    }
    if (objeto.status === "pending") {
        return "Aguardando";
    }
    else {
        return "Negado";
    }
}

console.log(resultado);