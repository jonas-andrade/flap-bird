    import setup from "./setup.js";
    import peaces from "./audios/objects.js";
    // import screens from "./screens.js";
   

    setup.initSetup();
    const flapBird = peaces.createFlappy();



    function animate(){
            
            
    requestAnimationFrame( animate )
    }

    window.addEventListener('click',()=>{
        if(screenActive.click){
            screenActive.click();
        }
    });
    // alterScreen(screens.INICIO);
    animate();




















      // function collisionFlappy(fl,ch){
    //     const pointOfColision = ch.onCanvasY - fl.onSpriteHeight

    //     if(fl.onCanvasY == pointOfColision ){
    //         return true
    //     }else{
    //         return false
    //     }


    // }


    // contents 
  
  