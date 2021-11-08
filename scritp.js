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
        if((lista_id_cartas[i] === 1) || (lista_id_cartas[i] === 2)){
            container_cartas.innerHTML += `<div class='carta carta${lista_id_cartas[i]}' data-identifier='card'><img class='papagaio' src='multimidia/front.png'><img class='pombo_black' src='multimidia/bobrossparrot.gif'></div>`;
        }else if((lista_id_cartas[i] === 3) || (lista_id_cartas[i] === 4)){
            container_cartas.innerHTML += `<div class='carta carta${lista_id_cartas[i]}' data-identifier='card'><img class='papagaio' src='multimidia/front.png'><img class='pombo_black' src='multimidia/explodyparrot.gif'></div>`;
        }else if((lista_id_cartas[i] === 5) || (lista_id_cartas[i] === 6)){
            container_cartas.innerHTML += `<div class='carta carta${lista_id_cartas[i]}' data-identifier='card'><img class='papagaio' src='multimidia/front.png'><img class='pombo_black' src='multimidia/fiestaparrot.gif'></div>`;
        }else if((lista_id_cartas[i] === 7) || (lista_id_cartas[i] === 8)){
            container_cartas.innerHTML += `<div class='carta carta${lista_id_cartas[i]}' data-identifier='card'><img class='papagaio' src='multimidia/front.png'><img class='pombo_black' src='multimidia/metalparrot.gif'></div>`;
        }else if((lista_id_cartas[i] === 9) || (lista_id_cartas[i] === 10)){
            container_cartas.innerHTML += `<div class='carta carta${lista_id_cartas[i]}' data-identifier='card'><img class='papagaio' src='multimidia/front.png'><img class='pombo_black' src='multimidia/revertitparrot.gif'></div>`;
        }else if((lista_id_cartas[i] === 11) || (lista_id_cartas[i] === 12)){
            container_cartas.innerHTML += `<div class='carta carta${lista_id_cartas[i]}' data-identifier='card'><img class='papagaio' src='multimidia/front.png'><img class='pombo_black' src='multimidia/tripletsparrot.gif'></div>`;
        }else if((lista_id_cartas[i] === 13) || (lista_id_cartas[i] === 14)){
            container_cartas.innerHTML += `<div class='carta carta${lista_id_cartas[i]}' data-identifier='card'><img class='papagaio' src='multimidia/front.png'><img class='pombo_black' src='multimidia/unicornparrot.gif'></div>`;
        }
    }    
    console.log(container_cartas)
}

function comparador() { 
	return Math.random() - 0.5; 
}

