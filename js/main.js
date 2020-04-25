/*Simulador de partículas - Cássio e Frederico
* o comentário //LOG AQUI é apenas para desenvolvimento
*/ 

const canvas = document.querySelector('canvas'); //Seleciona o objeto canvas

const contexto = canvas.getContext('2d'); //Diz para o canvas que é uma animação 2D

const width = canvas.width = 800; //Largura do canvas
const height = canvas.height = 480; //Altura do canvas

//Armazenando as particulas
let particulas = [];
let quantidade = document.getElementById("qtdParticulas").value;

//Popula o vetor de particulas com o tamanho digitado no formulário
while (particulas.length < quantidade) {
    const tamanho = 15;
    let particula = new Particula( random(0 + tamanho, width - tamanho), random(0 + tamanho, height - tamanho), 5, 5, 'white', tamanho, 0);
    particulas.push(particula);
}

//Função em loop para rodar a simulação
function simular() {
    contexto.fillStyle = 'grey';
    contexto.fillRect(0, 0, width, height);

    let particulasPretas = 0; //Varíavel para armazenar a quantidade de partículas que estão na cor preta

    for (let i = 0; i < particulas.length; i++) {
        particulas[i].desenhar();
        particulas[i].colisaoParede();
        particulas[i].colisaoParticula();
        if(particulas[i].color == 'black'){
            particulasPretas++;
        }
    }
    //Verifica se a contagem de particulas pretas não é igual ao tamanho da qtd de particulas
    if(particulasPretas < quantidade){
        //LOG AQUI
        console.log("rodando");
        //console.log("pretas: "+particulasPretas+" | tamanho: "+quantidade);
        requestAnimationFrame(simular);
    }
    else{
        //LOG AQUI
        console.log("FIM -> pretas: "+particulasPretas+" | tamanho: "+quantidade);
        alert("FIM DA SIMULAÇÃO! Particulas pretas: "+particulasPretas);
    }
}