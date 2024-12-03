function determinarNivel(nomeHeroi, pontos) {
    let nivel;

    if (pontos < 1000) {
        nivel = "Ferro";
    } else if (pontos < 2000) {
        nivel = "Bronze";
    } else if (pontos < 5000) {
        nivel = "Prata";
    } else if (pontos < 7000) {
        nivel = "Ouro";
    } else if (pontos < 8000) {
        nivel = "Platina";
    } else if (pontos < 9000) {
        nivel = "Ascendente";
    } else if (pontos < 10000) {
        nivel = "Imortal";
    } else {
        nivel = "Supremo";
    }

    console.log(`${nomeHeroi}, está no nível de ${nivel}.`);
}


const nomeHeroi = "Goku";
const pontos = 20000;
determinarNivel(nomeHeroi, pontos);
