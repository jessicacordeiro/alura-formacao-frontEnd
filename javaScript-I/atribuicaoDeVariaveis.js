console.log("Trabalhando com atribuições de variáveis");
const idade = 26;
const primeiroNome = "Jéssica";
const sobrenome = "Cordeiro";

console.log("\nConcatenação: ");
console.log(primeiroNome + sobrenome);
//console.log(nome + " " + sobrenome); - também funciona!
console.log(primeiroNome, sobrenome);

console.log("\nInterpolação: ");
console.log(`Meu nome é ${primeiroNome} ${sobrenome}`);

console.log("\nUsando a variável let: ");
let contador = 0;
contador = contador + 1;

const nomeCompleto = primeiroNome + sobrenome;
console.log(nomeCompleto);