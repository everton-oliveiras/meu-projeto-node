/*Verifique que as classes abaixo representam contratos, parcelas, recebíveis e corretores
e estão inter-relacionadas.

Exercício: Valide se o valor da corretagem (brokerage) do contrato é igual à soma dos valores das 
parcelas associadas a ele.

Caso haja divergência, logue uma mensagem indicando o ID do contrato,
o valor esperado e o valor real das parcelas (Total Parcelas).

Além disso,
Valide se o valor da parcela é igual à soma dos valores dos recebíveis associados a ela.
Caso haja divergência, logue uma mensagem indicando o ID da parcela, o valor
esperado e o valor real dos recebíveis (Total Recebíveis).
*/

class Contract {
    id: number = 0;
    name: string = "";
    brokerage: number = 0;
    installments: Installment[] = [];
}

class Installment {
    id: number = 0;
    amount: number = 0;
    dueDate: Date = new Date();
    status: string = "";
    receivable: Receivable[] = [];

}

class Receivable {
    id: number = 0;
    value: number = 0;
    receivedDate: string | null = null;
    broker: Broker | null = null;
}

class Broker {
    id: number = 0;
    name: string = "";
}

const broker1 = new Broker();
broker1.id = 1;
broker1.name = "Broker A";

const broker2 = new Broker();
broker2.id = 2;
broker2.name = "Broker B";

const receivable1 = new Receivable();
receivable1.id = 1;
receivable1.value = 500;
receivable1.receivedDate = "2024-01-15";
receivable1.broker = broker1;

const receivable2 = new Receivable();
receivable2.id = 2;
receivable2.value = 500;
receivable2.receivedDate = null;
receivable2.broker = broker2;

const receivable3 = new Receivable();
receivable3.id = 3;
receivable3.value = 1000;
receivable3.receivedDate = "2024-02-10";
receivable3.broker = broker1;

const receivable4 = new Receivable();
receivable4.id = 4;
receivable4.value = 400;
receivable4.receivedDate = null;
receivable4.broker = broker2;

const installment1 = new Installment();
installment1.id = 1;
installment1.amount = 1000;
installment1.dueDate = new Date("2024-01-31");
installment1.status = "Paid";
installment1.receivable.push(receivable1, receivable2);

const installment2 = new Installment();
installment2.id = 2;
installment2.amount = 1500;
installment2.dueDate = new Date("2024-02-28");
installment2.status = "Pending";
installment2.receivable.push(receivable3, receivable4);

const contract = new Contract();
contract.id = 1;
contract.name = "Contract A";
contract.brokerage = 2400;
contract.installments.push(installment1, installment2);