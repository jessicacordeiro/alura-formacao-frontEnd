import { Cliente } from "./Cliente.js";
import { Gerente } from "./Funcionarios/Gerente.js";
import { Diretor } from "./Funcionarios/Diretor.js";
import { SistemaAutenticacao } from "./SistemaAutenticacao.js";

const diretor = new Diretor("Maria", 100000, 15269345698);
diretor.cadastrarSenha("123456789")
const gerente = new Gerente("Rafael", 5000, 14456978952);
gerente.cadastrarSenha("123");

const cliente = new Cliente("Romilda Alexandre", 12236945878, "256");

const loginCliente = SistemaAutenticacao.login(cliente, "256");
const loginDiretor = SistemaAutenticacao.login(diretor, "123456789");
const loginGerente = SistemaAutenticacao.login(gerente, "123");

console.log(loginCliente, loginDiretor, loginGerente);