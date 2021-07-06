import { Conta } from "./Conta.js";

export class ContaPoupanca extends Conta {
    constructor(cliente, agencia, numero, saldoInicial) {
        super(cliente, agencia, numero, saldoInicial);
    }

    sacar(valor) {
        const taxa = 1.02;
        return this._sacar(valor, taxa);
    }
}
