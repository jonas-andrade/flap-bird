console.log("[jonas-andrade] Flap Bird @2022");

//setup
const sprite = new Image();
sprite.src = "./sprites.png";
const canvas = document.querySelector("canvas");
const contexto = canvas.getContext('2d');


// contents 
const flapBird = {
    //onSprite
    onSpriteX: 0,
    onSpriteY: 0,
    onSpriteWidth: 34,
    onSpriteHeight: 24,
    //onCanvas     velocidade ( v = v° + a.t )
    onCanvasX: 10,
    onCancasY: 50,
    acceleration: 0.25,
    velocity: 0,
    
    update(){
        flapBird.velocity += flapBird.acceleration
        flapBird.onCancasY += flapBird.velocity
    },
    drawNow(){
        contexto.drawImage(
            sprite,
            this.onSpriteX, this.onSpriteY,
            this.onSpriteWidth, this.onSpriteHeight,
            this.onCanvasX ,this.onCancasY,
            this.onSpriteWidth, this.onSpriteHeight,
        );
    }


}
const flapFlor = {
    //onSprite
    onSpriteX: 0,
    onSpriteY: 611,
    onSpriteWidth: 224,
    onSpriteHeight: 112,
    //onCanvas
    onCanvasX: 0,
    onCancasY: canvas.height - 112,
    drawNow(){
        contexto.drawImage(
            sprite,
            this.onSpriteX, this.onSpriteY,
            this.onSpriteWidth, this.onSpriteHeight,
            this.onCanvasX ,this.onCancasY,
            this.onSpriteWidth, this.onSpriteHeight,
        ),
        contexto.drawImage(
            sprite,
            this.onSpriteX, this.onSpriteY,
            this.onSpriteWidth, this.onSpriteHeight,
            (this.onCanvasX + this.onSpriteWidth),this.onCancasY,
            this.onSpriteWidth, this.onSpriteHeight,
        );
    }


}
const flapGarden = {
    //onSprite
    onSpriteX: 390,
    onSpriteY: 3,
    onSpriteWidth: 276,
    onSpriteHeight: 200,
    //onCanvas
    onCanvasX: 0,
    onCancasY: canvas.height - flapFlor.onSpriteHeight,
    drawNow(){
        contexto.fillStyle = '#70c5ce';
        contexto.fillRect(0,0,canvas.width,canvas.height)
        contexto.drawImage(
            sprite,
            this.onSpriteX, this.onSpriteY,
            this.onSpriteWidth, this.onSpriteHeight,
            this.onCanvasX ,this.onCancasY - flapFlor.onSpriteHeight,
            this.onSpriteWidth, this.onSpriteHeight,
        ),
        contexto.drawImage(
            sprite,
            this.onSpriteX, this.onSpriteY,
            this.onSpriteWidth, this.onSpriteHeight,
            (this.onCanvasX + this.onSpriteWidth),this.onCancasY - flapFlor.onSpriteHeight,
            this.onSpriteWidth, this.onSpriteHeight,
        );
    }


}
const screenStart = {
    //onSprite
    onSpriteX: 131,
    onSpriteY: 0,
    onSpriteWidth: 188,
    onSpriteHeight: 151,
    //onCanvas
    onCanvasX: (canvas.width / 2 ) - 188 / 2,
    onCancasY: 150,
    drawNow(){
        contexto.drawImage(
            sprite,
            this.onSpriteX, this.onSpriteY,
            this.onSpriteWidth, this.onSpriteHeight,
            this.onCanvasX ,this.onCancasY - flapFlor.onSpriteHeight,
            this.onSpriteWidth, this.onSpriteHeight,
        )
    }


}

//telas
let screenActive = {}
function alterScreen(sc){
    screenActive = sc;
}
const screen = {
    INICIO: {
        drawNow(){
            flapGarden.drawNow();
            flapFlor.drawNow();
            flapBird.drawNow();
            screenStart.drawNow();
        },
        update(){
            
        }

    },
    PLAY: {
        drawNow(){
            flapGarden.drawNow();
            flapFlor.drawNow();
            flapBird.drawNow();

        },
        update(){
            flapBird.update();
            
        }

    }

}


function animate(){
        screenActive.update();
        screenActive.drawNow(); 

   requestAnimationFrame( animate )
}


window.addEventListener('click',()=>{
    alterScreen(screen.PLAY);
});


alterScreen(screen.INICIO);
animate();