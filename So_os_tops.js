
function solucao(produtos) {
    const listaTotal = [];
for(let item of produtos) {
  listaTotal.push(item.preco)
}

let total = 0;
let top = 0;
for(let i = 0; i < listaTotal.length; i++) {
  total = total + listaTotal[i];

  if(listaTotal[i] >= 10000) {
    top = top + listaTotal[i];

  }
}

obj = {totalTop: top , percentual: top / total};



console.log(obj);
}