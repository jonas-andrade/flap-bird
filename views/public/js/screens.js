import objetos from "./objetos.js";

import initial from "./init.js";

export default {
    INICIO: {
        desenha(){
            objetos.background.desenha();
            objetos.ground.desenha();
            objetos.flappy.desenha();
            objetos.start.desenha();
            
        },
        click(){ return true}
    },
    PLAY: {
        desenha(){
            // objetos.flappy.update();

            objetos.background.desenha();
            objetos.ground.desenha();
            objetos.flappy.desenha();

           
        //  objetos.start.desenha();
        }
    }

}