function solucao(ano) {
    if(ano === 2022 || ano % 4 === 2) {
       console.log("COPA")
       } else {
           if(ano === 2024 || ano % 4 === 0) {
              console.log("JOGOS")
              } else {
                  console.log("MEH")
              }
       }
}