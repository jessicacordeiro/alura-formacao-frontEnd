console.log("\nBebidas JABAR - Confira nosso catálogo e Compre Já!");

const bebidasDisponiveis = new Array("Pitu R$30.00" , "Sagatiba R$80.00", "Jack Daniells R$160.00", "Corona R$ 10.00");

const comprador = 18;
const pedido = 0;

console.log("\nQual serão as suas bebidas?\n");

if (comprador >= 18) {
    console.log(bebidasDisponiveis);
    console.log("\nEu irei querer a bebida " + bebidasDisponiveis[3]);
} else {
    console.log("\nA venda bebidas é proibida para menores de 18.")
}
console.log("Aproveite o seu drink!");
