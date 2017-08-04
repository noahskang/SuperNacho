import Input  from './util/input';
import Render from './util/render';
import Movement  from './util/movement';
import Physics  from './util/physics';
import Animation from './util/animation';

import Entities from './entities/entities';

import MapCreator from './map/map_creator';
import * as Levels from './map/levels';


class Game {
  // init gets called once at very beginning of game.
  init(){
    let bgCanvas = document.getElementById("bg-canvas");
    let fgCanvas = document.getElementById("fg-canvas");

    let canvas = {
      bgCanvas: bgCanvas,
      fgCanvas: fgCanvas,
      // context is what we actually draw to
      // canvas is what we draw on..
      bgCtx: bgCanvas.getContext("2d"),
      fgCtx: fgCanvas.getContext("2d")
    };

    const viewport = {
      width: 760,
      height: 600,
      vX: 1,
      vY: 0,
    };


    // sound files are costly. to save loading time, instead of having a playlist, just have one song.

    let backgroundMusic = new Audio("audio/Desafinado.m4a");
    // problem with audio tags -- they don't play well if they have to load every tine.

    let spriteSheet = new Image();
    spriteSheet.src = "img/sprite_sheet3.png";

    let tileSet = new Image();
    tileSet.src = "img/tileset.svg";

    document.getElementById('mute-sound').addEventListener('click', (e) => {
      if(backgroundMusic.muted){
        backgroundMusic.muted = false;
      } else {
        backgroundMusic.muted = true;
      }
    });

    backgroundMusic.play();
    const totalResources = 0;

    // this variable is used in the ninjastar method along with a set timeout to space out firing of ninjastars.
    const canFire = true;
    // keeps track of the number of ninjastars we have;
    // keeps track of whether or not nacho has died.
    let fatality = false;

    let ninjasound =
    // add a listener to wait until spritesheet is loaded.
    spriteSheet.addEventListener("load", ()=>{
      // once it's loaded, then we can run the spritesheet.
      tileSet.addEventListener("load", ()=>{
        let data = {
          animationFrame: 0,
          mapCreator: new MapCreator(Levels.One(), tileSet, spriteSheet),
          canFire,
          tileSet,
          spriteSheet,
          entities: {},
          canvas,
          viewport,
          fatality,
          sounds: {
            ninjaSound: new Audio("audio/pitch.mp3"),
            jumpSound: new Audio("audio/supernacho_jump.mp3"),
            chipSound: new Audio("audio/supernacho_chip.mp3"),
            smashSound: new Audio("audio/smashing.mp3")
          }
        };

        Input.init(data);
        Entities.init(data);
        Render.init(data);
        document.getElementById('start-game').addEventListener('click', (e) => {
          this.run(data);
        });
      });
    });
    this.id;
  }



  run (data){

    const loop = () => {
      // get input from user
      Input.update(data);
      // animate character
      this.update(data);
      this.updateViewPort(data);
      Render.update(data);

      // every time the loop runs, add a tick to the animation frame.
      data.animationFrame++;

      this.id = window.requestAnimationFrame(loop);

      if(this.gameOver(data)){
        window.cancelAnimationFrame(this.id);
        let ctx = data.canvas.fgCtx;
        ctx.fillText("YOU LOST!!!", 300, 300);
        setTimeout(this.reload, 3000);
      }else if(this.gameWon(data)){
        window.cancelAnimationFrame(this.id);
        let ctx = data.canvas.fgCtx;
        ctx.fillText("YOU WIN!!!", 300, 300);
      }
    };
    loop();

  }

  reload(){
    location.reload();
  }

  update(data){
    Animation.update(data);
    Movement.update(data);
    Physics.update(data);
  }

  updateViewPort(data){
    let nachox = data.entities.nacho.x;
    let viewx = data.viewport.vX;
    let midpt = viewx + 344;

    if(nachox >= midpt+50){
      data.viewport.vX += 4;
    }
    // data.viewport.vX +=1;

  }

  gameOver(data){
    if(data.entities.nacho.y > 600){
      data.fatality = true;
    }
    if(data.fatality===true){
      return true;
    }
    return false;
  }

  gameWon(data){
    if(data.entities.nacho.x > 5376){
      return true;
    }
    return false;
  }
}

// have an array of game objects.

let game = new Game();
game.init();
