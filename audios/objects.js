export default {

    createFlappy: ()=>{
        const flapBird = {
            //onSprite
            onSpriteX: 0,
            onSpriteY: 0,
            onSpriteWidth: 34,
            onSpriteHeight: 24,
            //onCanvas     velocidade ( v = v° + a.t )
            onCanvasX: 10,
            onCanvasY: 50,
            acceleration: 0.25,
            velocity: 0,
            salt: 4.6,
            up(){
                
                flapBird.velocity = - flapBird.salt;
                
            },
            
            update(){
                // if(collisionFlappy(flapBird,flapFloor)){
                //     setTimeout(()=>alterScreen(screen.INICIO),250)
                //     wav.play()
                //     return;
                // }
                // flapBird.velocity += flapBird.acceleration
                // flapBird.onCanvasY += flapBird.velocity
            
            },
            drawNow(contexto){
                contexto.drawImage(
                    sprite,
                    this.onSpriteX, this.onSpriteY,
                    this.onSpriteWidth, this.onSpriteHeight,
                    this.onCanvasX ,this.onCanvasY,
                    this.onSpriteWidth, this.onSpriteHeight,
                );
            }
    
    
        }
        return flapBird;
    },
    createFloor: ()=>{
        const flapFloor = {
            //onSprite
            onSpriteX: 0,
            onSpriteY: 610,
            onSpriteWidth: 224,
            onSpriteHeight: 112,
            //onCanvas
            onCanvasX: 0,
            onCanvasY: canvas.height - 112,
            drawNow(){
                contexto.drawImage(
                    sprite,
                    this.onSpriteX, this.onSpriteY,
                    this.onSpriteWidth, this.onSpriteHeight,
                    this.onCanvasX ,this.onCanvasY,
                    this.onSpriteWidth, this.onSpriteHeight,
                ),
                contexto.drawImage(
                    sprite,
                    this.onSpriteX, this.onSpriteY,
                    this.onSpriteWidth, this.onSpriteHeight,
                    (this.onCanvasX + this.onSpriteWidth),this.onCanvasY,
                    this.onSpriteWidth, this.onSpriteHeight,
                );
            }
    
    
        }
        return flapFloor;
    
    },
    createGarden: ()=>{
        const flapGarden = {
            //onSprite
            onSpriteX: 390,
            onSpriteY: 3,
            onSpriteWidth: 276,
            onSpriteHeight: 200,
            //onCanvas
            onCanvasX: 0,
            onCanvasY: canvas.height - flapFloor.onSpriteHeight,
            drawNow(){
                contexto.fillStyle = '#70c5ce';
                contexto.fillRect(0,0,canvas.width,canvas.height)
                contexto.drawImage(
                    sprite,
                    this.onSpriteX, this.onSpriteY,
                    this.onSpriteWidth, this.onSpriteHeight,
                    this.onCanvasX ,this.onCanvasY - flapFloor.onSpriteHeight,
                    this.onSpriteWidth, this.onSpriteHeight,
                ),
                contexto.drawImage(
                    sprite,
                    this.onSpriteX, this.onSpriteY,
                    this.onSpriteWidth, this.onSpriteHeight,
                    (this.onCanvasX + this.onSpriteWidth),this.onCanvasY - flapFloor.onSpriteHeight,
                    this.onSpriteWidth, this.onSpriteHeight,
                )
            }
        }
        return flapGarden
    },
    createScreenStart: ()=>{
        const screenStart = {
            //onSprite
            onSpriteX: 131,
            onSpriteY: 0,
            onSpriteWidth: 188,
            onSpriteHeight: 151,
            //onCanvas
            onCanvasX: (canvas.width / 2 ) - 188 / 2,
            onCanvasY: 150,
            drawNow(){
                contexto.drawImage(
                    sprite,
                    this.onSpriteX, this.onSpriteY,
                    this.onSpriteWidth, this.onSpriteHeight,
                    this.onCanvasX ,this.onCanvasY - flapFloor.onSpriteHeight,
                    this.onSpriteWidth, this.onSpriteHeight,
                )
            }
    
    
        }
        return screenStart
    
    }
    
}



