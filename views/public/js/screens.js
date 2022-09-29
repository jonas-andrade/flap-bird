import objetos from "./objetos.js";


export default {
    INICIO: {
        desenha(){
            objetos.flappy.y = 50;
            objetos.background.desenha();
            objetos.ground.desenha();
            objetos.flappy.desenha();
            objetos.start.desenha();
 
            
        },
        click(){ return true}
    },
    PLAY: {
        desenha(){
            objetos.flappy.update();
            objetos.background.desenha();
            objetos.ground.desenha();objetos.ground.atualiza();
            objetos.flappy.desenha();

           
        //  objetos.start.desenha();
        },
        click(){ 

            objetos.flappy.pulo();
        }
    }

}