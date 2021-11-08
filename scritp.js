numeroDeCartas();

function numeroDeCartas(){
    const qtdd_cartas = prompt("Com quantas cartas deseja jogar?");
    if((qtdd_cartas % 2 === 0) && (qtdd_cartas >= 4) && (qtdd_cartas <= 14)){
        criarCartas(qtdd_cartas);
    }else{
        numeroDeCartas();
    }
}

let lista_cartas = [];

function criarCartas(qtdd_cartas){
    const container_cartas = document.querySelector('.container_cartas')

    let lista_id_cartas = [];
    for(let i=1; i<=qtdd_cartas; i++){
        lista_id_cartas.push(i);
    }

    lista_id_cartas.sort(comparador);

    for(let i=0; i<qtdd_cartas; i++){
        container_cartas.innerHTML += `<div class='carta carta${lista_id_cartas[i]}' data-identifier='card'><img class='papagaio' src='multimidia/front.png'></div>`;
    }    
    console.log(container_cartas)
}

function comparador() { 
	return Math.random() - 0.5; 
}

