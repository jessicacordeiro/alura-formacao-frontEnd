console.log(`- Trabalhando com Condicionais -`);

const listaDeDestino = new Array (
    `Salvador`,
    `São Paulo`,
    `Rio de Janeiro`,
    `Curitiba`
);

//Adicionando um item na lista com o push (sem ser pelo construtor do Array):
listaDeDestino.push(`Rio Grande do Sul`, `Pernambuco`);

const idadeComprador = 15;
const compradorComAcompanhante = false;
const temPassagemComprada = true;

console.log("\nPossíveis Destinos para a sua viagem: ");
console.log(listaDeDestino);

if(idadeComprador >= 18 || compradorComAcompanhante == true) {
    console.log("\nPassagem comprada com sucesso! - BOA VIAGEM!");
    listaDeDestino.splice(1,2); //removendo um item da lista
} else {
    console.log("\nPassagem não foi vendida, porque o Comprador é menor de idade, e não está acompanhado.");
}

console.log("\nEmbarque: ")
if (idadeComprador >= 18 && temPassagemComprada) {
    console.log("\nBOA VIAGEM!");
} return console.log("\nVocê não pode embarcar!");

// console.log(listaDeDestino);
// console.log(idadeComprador < 18);
// console.log(idadeComprador > 18);
// console.log(idadeComprador >= 18);
// console.log(idadeComprador <= 18);
// console.log(idadeComprador == 18);