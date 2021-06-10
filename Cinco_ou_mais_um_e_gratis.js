function solucao(precos) {
    let total = 0;

for(let i = 0; i < precos.length; i++) {
  total = total + precos[i];
}
if(precos.length > 4) {
  let menor = precos[0];
  for(i = 0; i < precos.length; i++) {
    if (precos[i] < menor) {
      menor = precos[i];
    }
  }
  total = total - menor;
 }
 console.log(total) 
}