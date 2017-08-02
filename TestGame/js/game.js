// following modular js pattern

// only Game let will be available on the gloabl scope
let Game = {
  // init gets called once at very beginning of game.
  init: function(){
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

    // bg music is INSTANCE of the audio file.

    let audio = new Audio();
    let i = 0;
    let backgroundMusic = [
      "audio/Desafinado.m4a",
      "audio/Manteca.m4a"
    ];

    //
    // let backgroundMusic = new Audio("audio/Manteca.m4a");
    // backgroundMusic.loop = true;
    // let backgroundMusic2 = new Audio("audio/Desafinado.m4a");

    // load in the spritesheet
    let spriteSheet = new Image();
    spriteSheet.src = "img/sprite_sheet3.png";

    // add a listener to wait until spritesheet is loaded.
    spriteSheet.addEventListener("load", function(){
      // once it's loaded, then we can run the spritesheet.
      spriteSheet = this;

      let data = {
        animationFrame: 0,
        spriteSheet: spriteSheet,
        canvas: canvas
      };

      audio.addEventListener('ended', function () {
          i = ++i < backgroundMusic.length ? i : 0;
          audio.src = backgroundMusic[i];
          audio.play();
      }, true);
      audio.volume = i===0 ? 0.5 : 0.3;
      audio.loop = false;
      audio.src = backgroundMusic[0];
      audio.play();

      Input.init(data);
      Entities.init(data);
      Render.init(data);
      Game.run(data);
    });
    // TODO: what if i need to run multiple spritesheets?
  },


  // this is the game loop
  run: function(data) {
    let loop = function() {
      // get input from user
      Game.input(data);
      // then animate the character. -- along with physics engine. if we run into a wall, or something, we reverse step and don't hit render, so we don't have characters walking through walls.
      Game.update(data);
      // then render...
      Game.render(data);

      data.animationFrame++;
      // every time loop runs, we add a tick to our animation frame.

      window.requestAnimationFrame(loop);
    };

    loop();
  },

  render: function(data){
    Render.update(data);
  },

  input: function(data){
    Input.update(data);
  },

  update: function(data){
    Animation.update(data);
    Movement.update(data);
    Physics.update(data);
  }
};

Game.init();
