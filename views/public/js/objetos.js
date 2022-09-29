import initial from "./init.js";
import screens from "./screens.js";
export default {

     background: {
        onSpriteX: 390,onSpriteY: 0,
        largura: 276,altura: 205,
        x: 0 ,y: 165,
    
        desenha(){  
            initial.context().fillStyle = '#70c5ce';
            initial.context().fillRect(0 , 0 , initial.canvas().width, initial.canvas().height);
            initial.context().drawImage(initial.sprites() , this.onSpriteX,this.onSpriteY,this.largura,this.altura,this.x,this.y,this.largura,this.altura);
            initial.context().drawImage(initial.sprites() , this.onSpriteX,this.onSpriteY,this.largura,this.altura,276,this.y,this.largura,this.altura);
    
        },   
    },

     flappy: {
        onSpriteX: 0,onSpriteY: 0,
        largura: 36,altura: 26,
        x: 20,y: 40, velocidade: 1, gravidade: 0.25,pulo_size: 4.6,
        
        colidio(){
            if(this.y >= 343.75){   
                initial.audio().play();this.velocidade= 0;this.gravidade=0;
                screens.INICIO.desenha();
                start().desenha();      
            } 


        },
        update(){ 
            this.colidio();

             this.velocidade += this.gravidade;
             
             this.y +=this.velocidade;

            },
        pulo(){ 
            console.log("pulou")
             this.velocidade =  - this.pulo_size
        },
        desenha(){  initial.context().drawImage(initial.sprites() , this.onSpriteX,this.onSpriteY,this.largura,this.altura,this.x,this.y,this.largura,this.altura);}
        
    },

     ground: {
        onSpriteX: 0,onSpriteY: 610,
        largura: 220,altura: 113,
        x: 0,y: initial.canvas().height - 110,
    
        desenha(){
            initial.context().drawImage(initial.sprites() , this.onSpriteX,this.onSpriteY,this.largura,this.altura,this.x,this.y,this.largura,this.altura);
            initial.context().drawImage(initial.sprites() , this.onSpriteX,this.onSpriteY,this.largura,this.altura,(this.x+this.largura),this.y,this.largura,this.altura);
    
        },
        atualiza() {
            const velocidade_do_movimento = 1;
            const movimento = this.x - velocidade_do_movimento;
            const ponto_de_repeticao = this.largura /2;


            this.x =( movimento % ponto_de_repeticao);
          }
        
         
        
    },
     start: {
        onSpriteX: 133,onSpriteY: 0,
        largura: 177,altura: 152,
        x: ((initial.canvas().width/2)/2)-5,y: 50,
    
        desenha(){
            initial.context().drawImage(initial.sprites() , this.onSpriteX,this.onSpriteY,this.largura,this.altura,this.x,this.y,this.largura,this.altura);
    
        }
    
    }
    
}