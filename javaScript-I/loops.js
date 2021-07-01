console.log(`\n- Trabalhando com Condicionais -`);

const listaDeDestino = new Array (
    `Salvador`,
    `São Paulo`,
    `Rio de Janeiro`,
    `Curitiba`
);

const idadeComprador = 15;
const compradorComAcompanhante = false;
let temPassagemComprada = false;
const destino = "Salvador";

console.log("\nPossíveis Destinos para a sua viagem: ");
console.log(listaDeDestino);

const podeComprar = idadeComprador >= 18 || compradorComAcompanhante == true;

let contador = 0;
destinoExiste = false;

while(contador < 3) {
    if(listaDeDestino[contador] == destino) {
        destinoExiste = true;
        break;
    } 
    contador += 1;
}

console.log("Destino existe: ", destinoExiste);

if(podeComprar && destinoExiste) {
    console.log("Boa Viagem!");
} else {
    console.log("Desculpe obtivemos um erro.");
}

for(let i = 0;i < 3; i++) {
    if(listaDeDestino[i] == destino) {
        destinoExiste = true;
        break;
    }
}