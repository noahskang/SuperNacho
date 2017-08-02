/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
class Entity{
  constructor(type, sprite, x, y, w, h){
    this.type = type;
    this.sprite = sprite;
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
  }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = Entity;



/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
class Sprite{
  constructor(img, srcX, srcY, srcW, srcH){
    this.img = img;
    this.srcX = srcX;
    this.srcY = srcY;
    this.srcW = srcW;
    this.srcH = srcH;
  }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = Sprite;



/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__util_input__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__util_render__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__util_movement__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__util_physics__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__entities_entities__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__map_map_creator__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__map_levels__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__map_levels___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6__map_levels__);











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
    spriteSheet.src = "img/sprite_sheet2.png";

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
        mapCreator: new __WEBPACK_IMPORTED_MODULE_5__map_map_creator__["a" /* default */](__WEBPACK_IMPORTED_MODULE_6__map_levels__["one"], tileSet, spriteSheet),
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
      __WEBPACK_IMPORTED_MODULE_0__util_input__["a" /* default */].init(data);
      __WEBPACK_IMPORTED_MODULE_4__entities_entities__["a" /* default */].init(data);
      __WEBPACK_IMPORTED_MODULE_1__util_render__["a" /* default */].init(data);
      this.run(data);
    });
  }

  run(data){
    const loop = () => {
      // TODO: write game.updateview (to sidesscroll the viewport)
      // get input from user
      __WEBPACK_IMPORTED_MODULE_0__util_input__["a" /* default */].update(data);
      // animate character
      Game.update(data);
      __WEBPACK_IMPORTED_MODULE_1__util_render__["a" /* default */].update(data);
      // every time the loop runs, add a tick to the animation frame.
      data.aniationFrame++;
      window.requestAnimationFrame(loop);
    };
    loop();
  }

  update(data){
    Animation.update(data);
    __WEBPACK_IMPORTED_MODULE_2__util_movement__["a" /* default */].update(data);
    __WEBPACK_IMPORTED_MODULE_3__util_physics__["a" /* default */].update(data);
  }
  // write an update view method to sidescroll the viewport
}

let game = new Game();
game.init();


/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
const Input = {
  init(data){
    var self = this;

    $(window).on("keydown", function (event) {
      self.helpers.down[event.keyCode] = true;
    });

    $(window).on("keyup", function () {
      delete self.helpers.down[event.keyCode];
      delete self.helpers.pressed[event.keyCode];
    });
  },

  update(data) {
    var nacho = data.entities.nacho;

    //Left Arrow
    if (Input.helpers.isDown(37)) {
      if (nacho.velY === 0) {
        nacho.currentState = nacho.states.walking;
      } else {
        nacho.x -= nacho.velX;
      }

      nacho.direction = "left";
    }

    //Right Arrow
    if (Input.helpers.isDown(39)) {
      if (nacho.velY === 0) {
        nacho.currentState = nacho.states.walking;
      } else {
        nacho.x += nacho.velX;
      }

      nacho.direction = "right";
    }

    //Up Arrow
    if (Input.helpers.isDown(38)) {
      nacho.currentState = nacho.states.jumping;
    }
  },

  helpers: {
    isDown(code) {
      return Input.helpers.down[code];
    },

    isPressed(code) {
      if (Input.helpers.pressed[code]) {
        return false;
      } else if (Input.helpers.down[code]) {
        return (Input.helpers.pressed[code] = true);
      }

      return false;
    },

    down: {},
    pressed: {}
  }
};

/* harmony default export */ __webpack_exports__["a"] = (Input);


/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
const Render = {
  init: data =>{
    Render.helpers.drawEntity(data.entities.background, data.canvas.bgCtx);
  },

  // we draw chips on update method because we need to re render any time our character runs through a chip. (dynamic update necessary)
  update: data=>{
    // we clear the WHOLE screen every time.( we could just do part)
    data.canvas.fgCtx.clearRect(0, 0, data.canvas.fgCanvas.width, data.canvas.fgCanvas.height);
    Render.helpers.drawText(data.entities.score, data.canvas.fgCtx);

    // make sure the second argument is WHERE i want to draw him
    Render.helpers.drawEntity(data.entities.nacho, data.canvas.fgCtx);

    data.entities.chipsArray.forEach((chip)=>{
      Render.helpers.drawEntity(chip, data.canvas.fgCtx);
    });
  },

  helpers: {
    // now when we call image, we can just call drawEntity, and the image will be drawn.
    drawEntity: (entity, ctx)=>{
      // we set the sprite, and the source x,

      ctx.drawImage(entity.sprite.img,
                entity.sprite.srcX, entity.sprite.srcY,
                entity.sprite.srcW, entity.sprite.srcH,
                entity.x, entity.y,
                entity.w, entity.h);
    },

    drawText: (text, ctx)=>{
      ctx.font = text.size + " " + text.font;
      ctx.fillStyle = text.color;
      ctx.fillText("Chips:" + " " + text.value, text.x, text.y);
    }
  }
};

/* harmony default export */ __webpack_exports__["a"] = (Render);


/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
const Movement = {
  update: function (data) {
        Movement.nacho(data);
    },

    nacho: function (data) {
        data.entities.nacho.currentState.movement(data);
    }
};

/* harmony default export */ __webpack_exports__["a"] = (Movement);


/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
const Physics = {
  update: function(data){
    Physics.helpers.gravity(data.entities.nacho);
    Physics.collisionDetection(data);
  },

  collisionDetection: function (data) {
    let nacho = data.entities.nacho;

    let entityCollisionCheck = function (entity) {
      // check to see if nacho image intersects with the entity image.
      if (nacho.x < entity.x + entity.w &&
        nacho.x + nacho.w > entity.x &&
        nacho.y < entity.y + entity.h &&
        nacho.h + nacho.y > entity.y) {
        //Collision Occured
        Physics.handleCollision(data, entity);
      }
    };

    data.entities.wallsArray.forEach(function (wall) {
      entityCollisionCheck(wall);
    });

    data.entities.chipsArray.forEach(function(chip){
      entityCollisionCheck(chip);
    });
  },

    handleCollision: function (data, entity) {
      let nacho = data.entities.nacho;

      if (entity.type === "wall") {
        //Left Side Wall Collision
        if (nacho.x < entity.x && nacho.y >= entity.y) {
          nacho.x = entity.x - nacho.w;
        }

        //Right Side Wall Collision
        if (nacho.x > entity.x && nacho.y >= entity.y) {
          nacho.x = entity.x + entity.w;
        }

        //Top of Wall Collision
        if (nacho.y < entity.y && (nacho.x + nacho.w) > entity.x + 10 &&
          nacho.x < (entity.x + entity.w) - 10 && nacho.velY >= 0) {
         nacho.currentState = nacho.states.standing;
          nacho.y = entity.y - nacho.h;
          nacho.velY = 0;
        }
      }

      if (entity.type === "chip") {
        let chipsArray = data.entities.chipsArray;
        let chipSound = entity.sound.cloneNode();
        let index = chipsArray.indexOf(entity);

        data.entities.score.value += 1;

        chipSound.play();
        chipsArray.splice(index, 1);
      }
    },

  helpers: {
    gravity: function(entity){
      // this will give us acceleration downwards
      entity.velY += 1.2;
      entity.y += entity.velY;
    }
  }

};

/* harmony default export */ __webpack_exports__["a"] = (Physics);


/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__nacho__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__background__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__sprite__ = __webpack_require__(1);
// import Chip from "./chip";
// import Corn from "./corn";


// import Score from "./score";


// this class contains and initializes ALL of the entities for the game.
const Entities = {

  init(data){

    let bgSprite = new __WEBPACK_IMPORTED_MODULE_2__sprite__["a" /* default */](data.tileSet, 72, 288, 432, 324);
    let background = new __WEBPACK_IMPORTED_MODULE_1__background__["a" /* default */]("bg", bgSprite, 0, 0, 768, 600);

    let nachoSprite = new __WEBPACK_IMPORTED_MODULE_2__sprite__["a" /* default */](data.tileSet, 0, 0, 24, 24);
    let nacho = new __WEBPACK_IMPORTED_MODULE_0__nacho__["a" /* default */]("nacho", nachoSprite, 40, 10, 64, 64);

    data.entities.background = background;
    data.entities.nacho = nacho;
  }
};

/* harmony default export */ __webpack_exports__["a"] = (Entities);


/***/ }),
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__entity__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__sprite__ = __webpack_require__(1);



class Nacho extends __WEBPACK_IMPORTED_MODULE_0__entity__["a" /* default */] {

  constructor(type, img, x, y, w, h){

    super(type, img, x, y, w, h);
    this.img = img;

    this.jumpSound = new Audio("audio/supernacho_jump.mp3");
    this.spriteAnimations = {
      walkRight: {
        frames: [new __WEBPACK_IMPORTED_MODULE_1__sprite__["a" /* default */](img, 24, 0, 24, 24),
                new __WEBPACK_IMPORTED_MODULE_1__sprite__["a" /* default */](img, 48, 0, 24, 24),
                new __WEBPACK_IMPORTED_MODULE_1__sprite__["a" /* default */](img, 72, 0, 24, 24)],
        currentFrame: 0
      },
      walkLeft: {
          frames: [new __WEBPACK_IMPORTED_MODULE_1__sprite__["a" /* default */](img, 51, 26, 24, 24),
                  new __WEBPACK_IMPORTED_MODULE_1__sprite__["a" /* default */](img, 26, 25, 24, 24),
                  new __WEBPACK_IMPORTED_MODULE_1__sprite__["a" /* default */](img, 0, 26, 24, 24)],
          currentFrame: 0
      },
      standRight: new __WEBPACK_IMPORTED_MODULE_1__sprite__["a" /* default */](img, 0, 0, 24, 24),
      standLeft: new __WEBPACK_IMPORTED_MODULE_1__sprite__["a" /* default */](img, 75, 27, 24, 24),
      jumpLeft: new __WEBPACK_IMPORTED_MODULE_1__sprite__["a" /* default */](img, 99, 25, 24, 24),
      jumpRight: new __WEBPACK_IMPORTED_MODULE_1__sprite__["a" /* default */](img, 98, 0, 28, 24)
    };

    this.states = {
      // clone node -- so that if we press it multiple times before the sound is finished, it will still create a new sound
      jumping: {
        movement: data => {
          if (this.velY === 0) {
            var jumpSound = this.jumpSound.cloneNode();
            jumpSound.volume = 0.3;
            jumpSound.play();
            this.velY -= 23;
          }
        },
        animation: data => {
          if (this.direction === "right") {
              this.sprite = this.spriteAnimations.jumpRight;
          } else {
              this.sprite = this.spriteAnimations.jumpLeft;
          }
        }
      },
      standing: {
        movement: data => {
          return;
        },
        animation: function(data){
          if (this.direction === "right") {
              this.sprite = this.spriteAnimations.standRight;
          } else {
              this.sprite = this.spriteAnimations.standLeft;
          }
        }
      },
      walking: {
        movement: data => {
          if (this.direction === "right") {
              this.x += this.velX;
          } else {
              this.x -= this.velX;
          }
        },
        animation: data => {
          if (this.direction === "right") {
            if (data.animationFrame % 5 === 0) {
              this.sprite = this.spriteAnimations.walkRight.frames[this.spriteAnimations.walkRight.currentFrame];
              this.spriteAnimations.walkRight.currentFrame++;

              if (this.spriteAnimations.walkRight.currentFrame > 2) {
                this.spriteAnimations.walkRight.currentFrame = 0;
              }
            }
          } else {
            if (data.animationFrame % 5 === 0) {
              this.sprite = this.spriteAnimations.walkLeft.frames[this.spriteAnimations.walkLeft.currentFrame];
              this.spriteAnimations.walkLeft.currentFrame++;

              if (this.spriteAnimations.walkLeft.currentFrame > 2) {
                this.spriteAnimations.walkLeft.currentFrame = 0;
              }
            }
          }
        }
      }
    };

    this.currentState = this.states.standing;
    this.direction = "right";
    this.velY = 0;
    this.velX = 3.8;
    this.chips = 0;
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
  }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = Nacho;



/***/ }),
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__entity__ = __webpack_require__(0);


class Background extends __WEBPACK_IMPORTED_MODULE_0__entity__["a" /* default */]{
}
/* harmony export (immutable) */ __webpack_exports__["a"] = Background;



/***/ }),
/* 10 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

class Map{
  constructor(level, tiles, sprites){
    this.level = level;
    this.tiles = tiles;
    this.sprites = sprites;
  }
}

/* harmony default export */ __webpack_exports__["a"] = (Map);


/***/ }),
/* 11 */
/***/ (function(module, exports) {



/***/ })
/******/ ]);
//# sourceMappingURL=bundle.js.map