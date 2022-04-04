    import setup from "./setup.js";
    import screens from "./screens.js";

    setup.initSetup();
   

    let activeScreen = {}
    function alterScreen(newScreen){activeScreen = newScreen}

    function animate(){
        
        activeScreen.drawNow();

            
    requestAnimationFrame( animate )
    }
    
    addEventListener("click",()=>{
        if(activeScreen.click()){
            alterScreen(screens.PLAY)
        }
        
    });
    
    alterScreen(screens.INICIO);
    animate();






















    // window.addEventListener('click',()=>{
    //     if(screenActive.click){
    //         screenActive.click();
    //     }
    // });
    // alterScreen(screens.INICIO);
   



    //   // function collisionFlappy(fl,ch){
    // //     const pointOfColision = ch.onCanvasY - fl.onSpriteHeight

    // //     if(fl.onCanvasY == pointOfColision ){
    // //         return true
    // //     }else{
    // //         return false
    // //     }


    // // }


    // // contents 
  
  