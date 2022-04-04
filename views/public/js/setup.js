import peaces from "./objects.js";

export default {
    canvas: document.querySelector("canvas").getContext('2d'),
    sprite: new Image(),
    audio: new Audio(),
    
    
    initSetup(){
        this.flapBird = peaces.createFlappy();
        this.flapFloor = peaces.createFloor(this.canvas);
        this.flapGarden = peaces.createGarden(this.canvas);
        this.flapStart = peaces.createScreenStart(this.canvas);
        this.sprite.src = "./sprites.png";
        this.audio.src = './audios/efeitos_hit.wav';
        this.canvas.fillStyle = '#70c5ce';
        this.canvas.fillRect(0, 0, document.querySelector("canvas").width, document.querySelector("canvas").height);
}
}


