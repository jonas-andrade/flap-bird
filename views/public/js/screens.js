    import setup from "./setup.js";
        export default {


        INICIO: {
            drawNow(){

                setup.flapGarden.drawNow();
                setup.flapFloor.drawNow();
                setup.flapBird.drawNow();
                // setup.flapStart.drawNow();

            },
            click(){
                return true;
            }

        },
        PLAY: {
            drawNow(){
                console.log("koko")
                setup.flapGarden.drawNow();
                setup.flapFloor.drawNow();
                setup.flapBird.drawNow();
                // setup.flapStart.drawNow();

            }
        }

    }
