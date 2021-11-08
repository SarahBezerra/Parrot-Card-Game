numeroDeCartas();

function numeroDeCartas(){
    const qtdd_cartas = prompt("Com quantas cartas deseja jogar?");
    if((qtdd_cartas % 2 === 0) && (qtdd_cartas >= 4) && (qtdd_cartas <= 14)){
        criarCartas(qtdd_cartas);
    }else{
        numeroDeCartas();
    }
}

function criarCartas(qtdd_cartas){
    const container_cartas = document.querySelector('.container_cartas')

    for(let i=0; i<qtdd_cartas; i++){
        container_cartas.innerHTML = "";
    }
    
}