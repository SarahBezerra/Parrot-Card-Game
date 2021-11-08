let qtdd_cartas = 4;
numeroDeCartas();

function numeroDeCartas(){
    qtdd_cartas = prompt("Com quantas cartas deseja jogar?");
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
            container_cartas.innerHTML += `<div class="carta carta${lista_id_cartas[i]}" onclick ="mostrarverso(this, ${lista_id_cartas[i]})" data-identifier="card"><img class="papagaio" src="multimidia/front.png"><img class="img_verso" src="multimidia/bobrossparrot.gif"></div>`;
        }else if((lista_id_cartas[i] === 3) || (lista_id_cartas[i] === 4)){
            container_cartas.innerHTML += `<div class="carta carta${lista_id_cartas[i]}" onclick ="mostrarverso(this, ${lista_id_cartas[i]})" data-identifier="card"><img class="papagaio" src="multimidia/front.png"><img class="img_verso" src="multimidia/explodyparrot.gif"></div>`;
        }else if((lista_id_cartas[i] === 5) || (lista_id_cartas[i] === 6)){
            container_cartas.innerHTML += `<div class="carta carta${lista_id_cartas[i]}" onclick ="mostrarverso(this, ${lista_id_cartas[i]})" data-identifier="card"><img class="papagaio" src="multimidia/front.png"><img class="img_verso" src="multimidia/fiestaparrot.gif"></div>`;
        }else if((lista_id_cartas[i] === 7) || (lista_id_cartas[i] === 8)){
            container_cartas.innerHTML += `<div class="carta carta${lista_id_cartas[i]}" onclick ="mostrarverso(this, ${lista_id_cartas[i]})" data-identifier="card"><img class="papagaio" src="multimidia/front.png"><img class="img_verso" src="multimidia/metalparrot.gif"></div>`;
        }else if((lista_id_cartas[i] === 9) || (lista_id_cartas[i] === 10)){
            container_cartas.innerHTML += `<div class="carta carta${lista_id_cartas[i]}" onclick ="mostrarverso(this, ${lista_id_cartas[i]})" data-identifier="card"><img class="papagaio" src="multimidia/front.png"><img class="img_verso" src="multimidia/revertitparrot.gif"></div>`;
        }else if((lista_id_cartas[i] === 11) || (lista_id_cartas[i] === 12)){
            container_cartas.innerHTML += `<div class="carta carta${lista_id_cartas[i]}" onclick ="mostrarverso(this, ${lista_id_cartas[i]})" data-identifier="card"><img class="papagaio" src="multimidia/front.png"><img class="img_verso" src="multimidia/tripletsparrot.gif"></div>`;
        }else if((lista_id_cartas[i] === 13) || (lista_id_cartas[i] === 14)){
            container_cartas.innerHTML += `<div class="carta carta${lista_id_cartas[i]}" onclick ="mostrarverso(this, ${lista_id_cartas[i]})" data-identifier="card"><img class="papagaio" src="multimidia/front.png"><img class="img_verso" src="multimidia/unicornparrot.gif"></div>`;
        }
    }    
}



let vezes_clicadas = 0;
let id_anterior = 0;
let id_carta_atual = 0;
let numeroDeParesJaVirados = 0;

function mostrarverso(carta, id_atual){

    // se carta ja estiver mostrando verso, não contabiliza
    if(carta.classList.contains('revelar_verso')){ 

    // se carta estiver virada para baixo
    }else{
        // mostra seu verso
        carta.classList.add('revelar_verso')
        vezes_clicadas++;

        // se for a segunda carta revelada
        if(vezes_clicadas % 2 === 0){
            id_carta_atual = id_atual;
            if(((id_anterior % 2 === 0) && (id_atual % 2 !== 0) && (id_anterior - id_atual === 1)) || ((id_anterior % 2 !== 0) && (id_atual % 2 === 0) && (id_atual - id_anterior === 1))){ // se formar o par

                // se todas as cartas já foram viradas
                numeroDeParesJaVirados++;
                if(numeroDeParesJaVirados === qtdd_cartas/2){
                    alert(`Você ganhou em ${vezes_clicadas} jogadas!`)
                    reiniciarJogo()
                }
    
            }else{ // se não formar o par
                setTimeout(desvirarCarta, 1000);            
            }
    
        // se for a primeira carta revelada --> guarda seu id
        }else{
            id_anterior = id_atual;
        }
    }



    function desvirarCarta(){
        let primeira_carta = document.querySelector(".carta"+id_anterior)
        primeira_carta.classList.remove('revelar_verso')

        let segunda_carta = document.querySelector(".carta"+id_carta_atual)
        segunda_carta.classList.remove('revelar_verso')
    }

}

function comparador() { 
	return Math.random() - 0.5; 
}

function reiniciarJogo(){
    const resposta = prompt("Deseja recomeçar o jogo?")

    if(resposta === "sim"){
        // falta zerar tudo
        (document.querySelector('.container_cartas')).innerHTML = "";
        vezes_clicadas = 0;
        id_anterior = 0;
        id_carta_atual = 0;
        numeroDeParesJaVirados = 0;

        numeroDeCartas()
    }else{
        alert("Obrigada por jogar")
    }
}
