import { Conta } from "./Conta.js";

export class ContaCorrente extends Conta {
    static numeroDeContas = 0;

    constructor(cliente, agencia, numero) {
        super(cliente, agencia, numero, 0);
        ContaCorrente.numeroDeContas += 1;
    }

    //sobrescrevendo o comportamento de sacar da classe mãe.
    sacar(valor) {
        let taxa = 1.1;
        return this._sacar(valor, taxa);
    }
}