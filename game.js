    console.log("[jonas-andrade] Flap Bird @2022");

    //setup
    const sprite = new Image();
    sprite.src = "./sprites.png";
    const canvas = document.querySelector("canvas");
    const contexto = canvas.getContext('2d');
    const wav = new Audio();
    wav.src = './audios/efeitos_hit.wav';





    function collisionFlappy(fl,ch){
        const pointOfColision = ch.onCanvasY - fl.onSpriteHeight

        if(fl.onCanvasY == pointOfColision ){
            return true
        }else{
            return false
        }


    }


function restFlappy(){
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
            if(collisionFlappy(flapBird,flapFloor)){
                setTimeout(()=>alterScreen(screen.INICIO),350)
                wav.play()
                return;
            }
            flapBird.velocity += flapBird.acceleration
            flapBird.onCanvasY += flapBird.velocity
        
        },
        drawNow(){
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
}



    // contents 
  
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





    
    let screenActive = {}//objetos que define a tela ativa
    let globais = {}//objeto que define variaveis globais
    function alterScreen(sc){screenActive = sc;}// função que alterna as telas
    
    const screen = {
        INICIO: {
            //define flappybird como variavel global no objeto globais && inicializa com a função que retorna o próprio flappybird
            initialFlappy(){
             globais.flapBird = restFlappy();
            },




            drawNow(){
                flapGarden.drawNow();
                flapFloor.drawNow();
                globais.flapBird.drawNow();
                screenStart.drawNow();
            },
            click(){
                alterScreen(screen.PLAY);
            },
            update(){
                this.initialFlappy();
            }

        },
        PLAY: {
            drawNow(){
                flapGarden.drawNow();
                flapFloor.drawNow();
                globais.flapBird.drawNow();

            },
            click(){
                
                flapBird.up();
                
            },
            update(){
                globais.flapBird.update();
                
            }

        }

    }







    function animate(){
            screenActive.update();
            screenActive.drawNow(); 

    requestAnimationFrame( animate )
    }
    window.addEventListener('click',()=>{
        if(screenActive.click){
            screenActive.click();
        }
    });
    alterScreen(screen.INICIO);
    animate();