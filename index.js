let nomeHeroi = "Goku"
let pontos = 20000

if (pontos < 1000){
    console.log(`${nomeHeroi}, está no nível de Ferro.`)
} else if (pontos > 1000 && pontos < 2000){
    console.log(`${nomeHeroi}, está no nível de Bronze.`)
} else if (pontos > 2000 && pontos < 5000){
    console.log(`${nomeHeroi}, está no nível de Prata.`)
} else if (pontos > 5000 && pontos < 7000){
    console.log(`${nomeHeroi}, está no nível de Ouro.`)
} else if (pontos > 7000 && pontos < 8000){
    console.log(`${nomeHeroi}, está no nível de Platina.`)
} else if (pontos > 8000 && pontos < 9000) {
    console.log(`${nomeHeroi}, está no nível de Ascendente.`)
} else if (pontos > 9000 && pontos < 10000){
    console.log(`${nomeHeroi}, está no nível de Imortal.`)
} else {
    console.log(`${nomeHeroi}, está no nível de Supremo.`)
};