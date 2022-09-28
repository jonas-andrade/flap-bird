import screens from "./screens.js";


let telaAtual = {}
function alterTela(newtela){telaAtual = newtela}
function animate(){
   
    telaAtual.desenha();
    
    requestAnimationFrame(animate);
}
window.addEventListener('click',()=>{
    if(telaAtual.click()){
        alterTela(screens.PLAY);
        console.log("clicou")
    }
})

alterTela(screens.INICIO);
animate();




















