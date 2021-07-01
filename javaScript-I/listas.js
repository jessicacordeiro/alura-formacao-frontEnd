console.log(`- Trabalhando com Listas -`);

// Como seria se não usassemos o Array:
// const salvador = `Salvador`;
// const saoPaulo = `São Paulo`;
// const rioDeJaneiro = `Rio de Janeiro`;

//console.log(salvador, saoPaulo, rioDeJaneiro);

const listaDeDestino = new Array (
    `Salvador`,
    `São Paulo`,
    `Rio de Janeiro`,
    `Curitiba`
);

//Adicionando um item na lista com o push (sem ser pelo construtor do Array):
listaDeDestino.push(`Rio Grande do Sul`, `Pernambuco`);

console.log("\nPossíveis Destinos para a sua viagem: ");
console.log(listaDeDestino);

console.log("\nDeletando itens na lista de destinos: São Paulo ");
listaDeDestino.splice(1,2);
console.log(listaDeDestino);

console.log("\nMostrando um único item da lista: ");
console.log(listaDeDestino[1]);

console.log("\nMostrando dois item da lista: ");
console.log(listaDeDestino[1], listaDeDestino[0]);



