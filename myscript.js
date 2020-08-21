window.addEventListener("load", ()=>{
    const canvas = document.querySelector("#myCanvas");
    const ctx = canvas.getContext('2d');

    canvas.height = window.innerHeight;
    canvas.width = window.innerWidth;
    
    ctx.fillStyle ="rgba(255, 255, 255, 0.2)"
    ctx.font = "14px Roboto";
    ctx.fillText("Square 375 x 375", 340,112);
    ctx.fillText("Vertical 375 x 576", 740,112);
    ctx.fillText("Horizontal 375 x 165", 340,520);
    
    
    ctx.fillStyle ="rgb(66 133 244 / 0.1)"
    ctx.fillRect(340,120,375,375);
    ctx.fillRect(730,120,375,576);
    ctx.fillRect(340,530,375,165);
})