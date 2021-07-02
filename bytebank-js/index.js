import {Cliente} from "./Cliente.js"
import {ContaCorrente} from "./ContaCorrente.js"

console.log("\nClientes do ByteBank.\n")

// CLIENTE - 1
const cliente1 = new Cliente("Ricardo Almeida", 12585645269);

// CLIENTE - 2
const cliente2 = new Cliente("Alice Maria Ferreira", 22555699817);
console.log(cliente2.cpf);

// CONTA - 1
const ccRicardo = new ContaCorrente(cliente1, "0065", 125896);

// Ricardo Deposita na sua própria conta.
ccRicardo.depositar(500);

// CONTA - 2
const ccAlice = new ContaCorrente(cliente2, "0162", 124456);

// Ricardo Transferindo para a conta de Alice.
let valor = 200;
ccRicardo.transferir(valor, ccAlice);

console.log(ContaCorrente.numeroDeContas);
