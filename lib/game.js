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
      vX: 0,
      vY: 0,
    };

    let audio = new Audio();
    let backgroundMusic = [
      "audio/Manteca.m4a",
      "audio/Desafinado.m4a"
    ];

    let spriteSheet = new Image();
    spriteSheet.src = "img/sprite_sheet3.png";

    let tileSet = new Image();
    tileSet.src = "img/tileset.svg";


    document.getElementById('mute-sound').addEventListener('click', (e) => {
      if(audio.muted){
        audio.muted = false;
      } else {
        audio.muted = true;
      }
    });

    // add a listener to wait until spritesheet is loaded.
    spriteSheet.addEventListener("load", ()=>{
      // once it's loaded, then we can run the spritesheet.

      let data = {
        animationFrame: 0,
        mapCreator: new MapCreator(Levels.one, tileSet, spriteSheet),
        spriteSheet,
        entities: {},
        tileSet,
        canvas,
        viewport
      };

      let i = 0;
      audio.addEventListener('ended', function () {
        // when one song ends, play the next song in the playlist or loop back to the beginning.
          i = i++ < backgroundMusic.length ? i : 0;
          audio.src = backgroundMusic[i];
          audio.play();
      }, true);

      audio.volume = i===0 ? 0.3 : 0.5;
      audio.loop = false;
      audio.src = backgroundMusic[0];
      audio.play();
      //
      Input.init(data);
      Entities.init(data);
      Render.init(data);
      this.run(data);
    });
  }

  run (data){
    const loop = () => {
      // TODO: write game.updateview (to sidesscroll the viewport)
      // get input from user
      Input.update(data);
      // animate character
      this.update(data);
      Render.update(data);
      // every time the loop runs, add a tick to the animation frame.
      data.animationFrame++;

      window.requestAnimationFrame(loop);
    };
    loop();
  }

  update(data){
    Animation.update(data);
    Movement.update(data);
    Physics.update(data);
  }
  // write an update view method to sidescroll the viewport
}

let game = new Game();
game.init();
