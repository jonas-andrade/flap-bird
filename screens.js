
    export default {


        INICIO: {
            drawNow(){
                flapGarden.drawNow();
                globais.flapFloor.drawNow();
                globais.flapBird.drawNow();
                screenStart.drawNow();
            },
            click(){
                alterScreen(screen.PLAY);
            },
            update(){
                peaces.objects.flapBird();
                peaces.objects.flapFloor();
                peaces.objects.flapGarden();
                peaces.objects.flapStart();
                
            }

        },
        PLAY: {
            drawNow(){
                flapGarden.drawNow();
                globais.flapFloor.drawNow();
                globais.flapBird.drawNow();

            },
            click(){
                flapBird.up();
            },
            update(){
                globais.flapBird.update();
                globais.flapFloor.update();
                
            }

        }

    }
