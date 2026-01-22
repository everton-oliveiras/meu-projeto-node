type tipoFrete = {
    tipoFrete: "standard" | "express" | "premium";
}

const resultado =  freteEmValor({tipoFrete = "standard"})