class Geladeira {
    private gastoEnergetico = 0;
    private marca = ``;
    private litros = 0;
    private estoque: string[] = []
    constructor(
        gastoEnergetico: number,
        marca: string,
        litros: number,
    ) {
        this.gastoEnergetico = gastoEnergetico
        this.marca = marca
        this.litros = litros
    }

    public gastoTotal (horas: number) {
        return horas * this.gastoEnergetico
    }

    public listarEstoque () {
        return this.estoque;
    }

    public adicionarProduto(produto: string) {
        this.estoque.push(produto)
    }
}

const geladeira1 = new Geladeira(400, `Brastemp`, 70);
const geladeira2 = new Geladeira(5000000, `Samsung`, 100);

console.log(`Gasto Kwh GELADEIRA 1`, geladeira1.gastoTotal(32))
console.log(`Gasto Kwh GELADEIRA 2`,geladeira2.gastoTotal(32))

geladeira1.adicionarProduto(`Leite`)

console.log(`estoque G1: `, geladeira1.listarEstoque())
console.log(`estoque G2: `, geladeira2.listarEstoque())


