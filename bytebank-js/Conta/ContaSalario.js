import { Conta } from "./Conta.js";

export class ContaSalario extends Conta {
    constructor(cliente, agencia, numero) {
        super(cliente, agencia, numero, 0);
    }

    sacar(valor) {
        const taxa = 1.01;
        return this._sacar(valor, taxa);
    }
}