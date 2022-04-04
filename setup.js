export default {
    canvas: document.querySelector("canvas"),
    contexto: canvas.getContext('2d'),
    sprite: new Image(),
    audio: new Audio(),
    
    initSetup(){
    this.sprite.src = "./sprites.png";
    this.audio.src = './audios/efeitos_hit.wav';
}
}


