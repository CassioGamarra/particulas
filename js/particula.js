//Classe partícula

class Particula {
    //Construtor do objeto particula
    constructor(x, y, eixoX, eixoY, color, tamanho, colisoes) {
        this.x = x;
        this.y =  y;
        this.eixoX = eixoX;
        this.eixoY = eixoY;
        this.color = color;
        this.tamanho = tamanho; //Tamanho da particula
        this.colisoes = colisoes; //Contador para o número de colisões com outras partículas
    }

    //Método para desenhar
    desenhar() {
        contexto.beginPath();
        contexto.fillStyle = this.color;
        contexto.arc(this.x, this.y, this.tamanho, 0, 2 * Math.PI);
        contexto.fill();
    }

    //Para atualizar a posição da particula
    colisaoParede() {
        if ((this.x + this.tamanho) >= width) {
            this.eixoX = -(this.eixoX);
        }
    
        if ((this.x - this.tamanho) <= 0) {
            this.eixoX = -(this.eixoX);
        }
    
        if ((this.y + this.tamanho) >= height) {
            this.eixoY = -(this.eixoY);
        }
    
        if ((this.y - this.tamanho) <= 0) {
            this.eixoY = -(this.eixoY);
        }
    
        this.x += this.eixoX;
        this.y += this.eixoY;
    }

    //Detectando a colisão entre partículas
    colisaoParticula() {
        for (let j = 0; j < particulas.length; j++) {
            if (!(this === particulas[j])) {
                let dx = this.x - particulas[j].x;
                let dy = this.y - particulas[j].y;
                let distancia = Math.sqrt(dx * dx + dy * dy);
                if (distancia < this.tamanho + particulas[j].tamanho) {
                    this.eixoX = -(this.eixoX); //Muda a direção no eixo X
                    this.eixoY = -(this.eixoY); //Muda a direção no eixo Y
                    this.x += this.eixoX;
                    this.y += this.eixoY;
                    this.colisoes++; //Incrementa o contador

                    //Verifica o contador de colisões e muda a cor de acordo com o número armazenado
                    if(this.colisoes == 1){
                        this.color = 'yellow';
                    }
                    if(this.colisoes == 2){
                        this.color = 'orange';
                    }
                    if(this.colisoes == 3){
                        this.color = 'green';
                    }
                    if(this.colisoes == 4){
                        this.color = 'red';
                    }
                    if(this.colisoes == 5){
                        this.color = 'purple';
                    }
                    if(this.colisoes == 6){
                        this.color = 'violet';
                    }
                    if(this.colisoes >= 7){
                        this.color = 'black';
                    }

                    //LOG AQUI
                   // console.log("Particula "+j+" tem "+this.colisoes+" colisoes"); 
                }
            }
        }
    }
}