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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__util_animation__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__entities_entities__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__map_map_creator__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__map_levels__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__map_levels___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7__map_levels__);












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
        mapCreator: new __WEBPACK_IMPORTED_MODULE_6__map_map_creator__["a" /* default */](__WEBPACK_IMPORTED_MODULE_7__map_levels__["one"], tileSet, spriteSheet),
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
      __WEBPACK_IMPORTED_MODULE_5__entities_entities__["a" /* default */].init(data);
      __WEBPACK_IMPORTED_MODULE_1__util_render__["a" /* default */].init(data);
      this.run(data);
    });
  }

  run (data){
    const loop = () => {
      // TODO: write game.updateview (to sidesscroll the viewport)
      // get input from user
      __WEBPACK_IMPORTED_MODULE_0__util_input__["a" /* default */].update(data);
      // animate character
      this.update(data);
      __WEBPACK_IMPORTED_MODULE_1__util_render__["a" /* default */].update(data);
      // every time the loop runs, add a tick to the animation frame.
      data.animationFrame++;

      window.requestAnimationFrame(loop);
    };
    loop();
  }

  update(data){
    __WEBPACK_IMPORTED_MODULE_4__util_animation__["a" /* default */].update(data);
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
      // these helpers are basic methods that tell us what key is pressed.
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
    // Render.helpers.drawText(data.entities.score, data.canvas.fgCtx);

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
  update: data => {
    nacho(data);
  },
};

const nacho = data => {
  data.entities.nacho.currentState.movement(data);
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
const Animation = {
  update: data => {
    nacho(data);
    chips(data);
  },
};

const nacho = data => {
  data.entities.nacho.currentState.animation(data);
};

const chips = data => {
  data.entities.chipsArray.forEach((chip)=>{
    chip.currentState.animation(data);
  });
};

/* harmony default export */ __webpack_exports__["a"] = (Animation);


/***/ }),
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__chip__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__nacho__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__walls__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__background__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__score__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__sprite__ = __webpack_require__(1);

// import Corn from "./corn";






// this class contains and initializes ALL of the entities for the game.
const Entities = {

  init(data){

    let bgSprite = new __WEBPACK_IMPORTED_MODULE_5__sprite__["a" /* default */](data.tileSet, 72, 288, 432, 324);
    let background = new __WEBPACK_IMPORTED_MODULE_3__background__["a" /* default */]("bg", bgSprite, 0, 0, 768, 600);

    let nacho = new __WEBPACK_IMPORTED_MODULE_1__nacho__["a" /* default */]("nacho", data.spriteSheet, 40, 10, 64, 64);

    let wallLocations = [[0, 0, 4, 600], [0, 500, 768, 150],
                      [225, 365, 336, 216], [767, 0, 4, 600]];

    let score = Object(__WEBPACK_IMPORTED_MODULE_4__score__["a" /* default */])(290, 70);

    let chipLocations = [[269, 120], [317, 120], [365, 120], [413, 120], [461, 120],
                             [221, 210], [269, 210], [317, 210], [365, 210], [413, 210], [461, 210], [509, 210],
                             [221, 300], [269, 300], [317, 300], [365, 300], [413, 300], [461, 300], [509, 300]];

    data.entities.background = background;
    data.entities.nacho = nacho;
    data.entities.chipsArray = [];
    data.entities.wallsArray = [];
     data.entities.score = score;

  // loop through locations to create a new coin for each location element
    chipLocations.forEach(function (location) {
      data.entities.chipsArray.push(new __WEBPACK_IMPORTED_MODULE_0__chip__["a" /* default */]("chip", data.spriteSheet, location[0], location[1], 30, 42));
    });

    wallLocations.forEach(function (location) {
      data.entities.wallsArray.push(Object(__WEBPACK_IMPORTED_MODULE_2__walls__["a" /* default */])(location[0], location[1], location[2], location[3]));
    });
  }
};

/* harmony default export */ __webpack_exports__["a"] = (Entities);


/***/ }),
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__entity__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__sprite__ = __webpack_require__(1);



class Chip extends __WEBPACK_IMPORTED_MODULE_0__entity__["a" /* default */]{
  constructor(type, spritesheet, x, y, w, h){

    let sprite =  new __WEBPACK_IMPORTED_MODULE_1__sprite__["a" /* default */](spritesheet, 172, 22, 31, 23);

    super(type, sprite, x, y, w, h);

    this.sound = new Audio("audio/supernacho_chip.mp3");

    this.spriteAnimations = {
      spin: {
        frames: [new __WEBPACK_IMPORTED_MODULE_1__sprite__["a" /* default */](spritesheet, 140, 22, 31, 23),
                new __WEBPACK_IMPORTED_MODULE_1__sprite__["a" /* default */](spritesheet, 172, 22, 31, 23),
                new __WEBPACK_IMPORTED_MODULE_1__sprite__["a" /* default */](spritesheet, 204, 22, 31, 23),
                ],
        currentFrame: 0
      }
    };

    let self = this;

    this.states = {
      spinning: {
        animation: data => {
          if (data.animationFrame % 13 === 0) {
            // console.log("self: ", self);
            self.sprite = self.spriteAnimations.spin.frames[self.spriteAnimations.spin.currentFrame];
            self.spriteAnimations.spin.currentFrame++;

            if (self.spriteAnimations.spin.currentFrame > 2) {
              self.spriteAnimations.spin.currentFrame = 0;
            }
          }
        }
      }
    };
    this.currentState = self.states.spinning;
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
  }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = Chip;



/***/ }),
/* 10 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__entity__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__sprite__ = __webpack_require__(1);



class Nacho extends __WEBPACK_IMPORTED_MODULE_0__entity__["a" /* default */] {

  constructor(type, spritesheet, x, y, w, h){

    let sprite = new __WEBPACK_IMPORTED_MODULE_1__sprite__["a" /* default */](spritesheet, 0, 0, 24, 24);

    super(type, sprite, x, y, w, h);

    this.jumpSound = new Audio("audio/supernacho_jump.mp3");

    this.spriteAnimations = {
      walkRight: {
        frames: [new __WEBPACK_IMPORTED_MODULE_1__sprite__["a" /* default */](spritesheet, 24, 0, 24, 24),
                new __WEBPACK_IMPORTED_MODULE_1__sprite__["a" /* default */](spritesheet, 48, 0, 24, 24),
                new __WEBPACK_IMPORTED_MODULE_1__sprite__["a" /* default */](spritesheet, 72, 0, 24, 24)],
        currentFrame: 0
      },
      walkLeft: {
          frames: [new __WEBPACK_IMPORTED_MODULE_1__sprite__["a" /* default */](spritesheet, 51, 26, 24, 24),
                  new __WEBPACK_IMPORTED_MODULE_1__sprite__["a" /* default */](spritesheet, 26, 25, 24, 24),
                  new __WEBPACK_IMPORTED_MODULE_1__sprite__["a" /* default */](spritesheet, 0, 26, 24, 24)],
          currentFrame: 0
      },
      standRight: new __WEBPACK_IMPORTED_MODULE_1__sprite__["a" /* default */](spritesheet, 0, 0, 24, 24),
      standLeft: new __WEBPACK_IMPORTED_MODULE_1__sprite__["a" /* default */](spritesheet, 75, 27, 24, 24),
      jumpLeft: new __WEBPACK_IMPORTED_MODULE_1__sprite__["a" /* default */](spritesheet, 99, 25, 24, 24),
      jumpRight: new __WEBPACK_IMPORTED_MODULE_1__sprite__["a" /* default */](spritesheet, 98, 0, 28, 24)
    };
    let self = this;
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
            this.sprite = self.spriteAnimations.jumpRight;
          } else {
            this.sprite = self.spriteAnimations.jumpLeft;
          }
        }
      },
      standing: {
        movement: data => {
          return;
        },
        animation: function(data){
          if (this.direction === "right") {
            this.sprite = self.spriteAnimations.standRight;
          } else {
            this.sprite = self.spriteAnimations.standLeft;
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
              this.sprite = self.spriteAnimations.walkRight.frames[self.spriteAnimations.walkRight.currentFrame];
              self.spriteAnimations.walkRight.currentFrame++;

              if (self.spriteAnimations.walkRight.currentFrame > 2) {
                self.spriteAnimations.walkRight.currentFrame = 0;
              }
            }
          } else {
            if (data.animationFrame % 5 === 0) {
              this.sprite = self.spriteAnimations.walkLeft.frames[self.spriteAnimations.walkLeft.currentFrame];
              self.spriteAnimations.walkLeft.currentFrame++;

              if (self.spriteAnimations.walkLeft.currentFrame > 2) {
                self.spriteAnimations.walkLeft.currentFrame = 0;
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
/* 11 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
const Wall = (x, y, w, h) => ({
    type: "wall",
    x,
    y,
    w,
    h
});

/* harmony default export */ __webpack_exports__["a"] = (Wall);


/***/ }),
/* 12 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__entity__ = __webpack_require__(0);


class Background extends __WEBPACK_IMPORTED_MODULE_0__entity__["a" /* default */]{
}
/* harmony export (immutable) */ __webpack_exports__["a"] = Background;



/***/ }),
/* 13 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
const Score = (x, y) => ({
  value: 0,
  size: "25px",
  font: "PixelEmulator",
  color: "white",
  x,
  y
});

/* harmony default export */ __webpack_exports__["a"] = (Score);


/***/ }),
/* 14 */
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
/* 15 */
/***/ (function(module, exports) {



/***/ })
/******/ ]);
//# sourceMappingURL=bundle.js.map