function solucao(joao, andre) {
  if(joao === andre) {
  console.log("EMPATE")
} else {
  if(joao === "PEDRA" && andre === "TESOURA" || joao === "TESOURA" && andre === "PAPEL" || joao === "PAPEL" && andre === "PEDRA") {
    console.log("JOAO")
  } else {
    console.log("ANDRE")
  }
}
}