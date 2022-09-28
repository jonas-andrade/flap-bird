import initial from "./init.js";


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
        x: 20,y: 40,
        
    
        desenha(){
            initial.context().drawImage(initial.sprites() , this.onSpriteX,this.onSpriteY,this.largura,this.altura,this.x,this.y,this.largura,this.altura);
    
        },
        update(){
            // this.y += 3;
            // console.log(this.y)
            // if( this.y == ((initial.canvas().height - 113))-25){
            //     this.y -= 1
            // }
        }
    
    },
     ground: {
        onSpriteX: 0,onSpriteY: 610,
        largura: 225,altura: 113,
        x: 0,y: initial.canvas().height - 113,
    
        desenha(){
            initial.context().drawImage(initial.sprites() , this.onSpriteX,this.onSpriteY,this.largura,this.altura,this.x,this.y,this.largura,this.altura);
            initial.context().drawImage(initial.sprites() , this.onSpriteX,this.onSpriteY,this.largura,this.altura,224,this.y,this.largura,this.altura);
    
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