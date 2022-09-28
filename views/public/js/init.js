
export default {
    sprites(){const sprite = new Image(); sprite.src = './sprites.png';return sprite},
    canvas(){const canvas = document.querySelector("canvas");return canvas},
    context(){const context = document.querySelector("canvas").getContext('2d');return context},
}