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
    //onCanvas
    onCanvasX: 10,
    onCancasY: 50,
    update(){
        flapBird.onCancasY = flapBird.onCancasY + 1
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



function animate(){
   flapBird.update();
   flapGarden.drawNow();
   flapFlor.drawNow();
   flapBird.drawNow();
   
   
   requestAnimationFrame( animate )
}

animate();