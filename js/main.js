const canvas = document.querySelector('canvas'); //Seleciona o objeto canvas

const ctx = canvas.getContext('2d');

const width = canvas.width = 600;
const height = canvas.height = 300;

function random(min, max) {
    var num = Math.floor(Math.random() * (max - min + 1)) + min;
    return num;
}

//Criando o objeto particula
function Particula(x, y, velX, velY, color, size, count) {
    this.x = x;
    this.y =  y;
    this.velX = velX;
    this.velY = velY;
    this.color = color;
    this.size = size;
    this.count = count;
}

Particula.prototype.draw = function() {
    ctx.beginPath();
    ctx.fillStyle = this.color;
    ctx.arc(this.x, this.y, this.size, 0, 2 * Math.PI);
    ctx.fill();
}

//Para atualizar a posição da particula
Particula.prototype.update = function() {
    if ((this.x + this.size) >= width) {
        this.velX = -(this.velX);
    }
  
    if ((this.x - this.size) <= 0) {
        this.velX = -(this.velX);
    }
  
    if ((this.y + this.size) >= height) {
        this.velY = -(this.velY);
    }
  
    if ((this.y - this.size) <= 0) {
        this.velY = -(this.velY);
    }
  
    this.x += this.velX;
    this.y += this.velY;
}

//Detectando a colisão entre partículas
Particula.prototype.collisionDetect = function() {
    for (var j = 0; j < particulas.length; j++) {
      if (!(this === particulas[j])) {
        let dx = this.x - particulas[j].x;
        let dy = this.y - particulas[j].y;
        let distance = Math.sqrt(dx * dx + dy * dy);
        
        if (distance < this.size + particulas[j].size) {
            particulas[j].count++;
            if(particulas[j].count < 10){
                particulas[j].color = this.color = 'yellow';
            }
            if((particulas[j].count > 11)&&(particulas[j].count < 20)){
                particulas[j].color = this.color = 'orange';
            }
            if((particulas[j].countnt > 21)&&(particulas[j].count < 30)){
                particulas[j].color = this.color = 'green';
            }
            if((particulas[j].count > 31)&&(particulas[j].count < 40)){
                particulas[j].color = this.color = 'red';
            }
            if((particulas[j].count > 41)&&(particulas[j].count < 50)){
                particulas[j].color = this.color = 'purple';
            }
            if((particulas[j].count > 51)&&(particulas[j].count < 60)){
                particulas[j].color = this.color = 'violet';
            }
            if(particulas[j].count > 61){
                particulas[j].color = this.color = 'black';
            }
        }
        //alert(count);
      }
    }
}

//Armazenando as particulas
let particulas = [];
let tamanho = document.getElementById("qtdParticulas").value;

function loop() {
    ctx.fillStyle = 'grey';
    ctx.fillRect(0, 0, width, height);
    while (particulas.length < tamanho) {
        let size = 15;
        let particula = new Particula(
            random(0 + size,width - size),
            random(0 + size,height - size),
            5,
            5,
            'rgb(' + 255 + ',' + 255 + ',' + 255 +')',
            size,
            0
        );
        particulas.push(particula);
    }
    let countBlack = 0;
    for (let i = 0; i < particulas.length; i++) {
        particulas[i].draw();
        particulas[i].update();
        particulas[i].collisionDetect();
        if(particulas[i].color === 'black'){
            countBlack++;
        }
    }


    if(countBlack == particulas.length) {
        alert("Simulação Finalizada");
        ctx.clearRect(0, 0, canvas.width, canvas.height);
    }

    requestAnimationFrame(loop);
}

