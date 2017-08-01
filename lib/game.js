var myCircle;



class Game {
  init(){
    const canvasEl = document.getElementById("canvas");
    const ctx = canvasEl.getContext('2d');

    const canvas = {
      canvas: canvasEl,
      ctx,
    };

    const viewport = {
      width: 760,
      height: 600,
      vX: 0,
      vY: 0,
    };

    const ninjaSheet = new Image();
    ninjaSheet.src = '../images/adventurer_tilesheet.png';

    ninjaSheet.addEventListener('load', ()=>{
      const data = {
        ninaSheet,
        canvas,
        viewport,
        animationFrame: 0,
        map
      }
    })
  }
}

const game = new Game();
function component(width, height, color, x, y) {
    this.width = width;
    this.height = height;
    this.x = x;
    this.y = y;
    ctx = game.context;
    ctx.fillStyle = color;
    ctx.fillRect(this.x, this.y, this.width, this.height);
}

game.init();
myCircle = new component(30, 30, "red", 10, 120);
