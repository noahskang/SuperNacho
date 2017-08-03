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
/******/ 	return __webpack_require__(__webpack_require__.s = 7);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
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
/* 1 */
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
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__entity__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__sprite__ = __webpack_require__(0);



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
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__entity__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__sprite__ = __webpack_require__(0);



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
      standLeft: new __WEBPACK_IMPORTED_MODULE_1__sprite__["a" /* default */](spritesheet, 76, 27, 24, 24),
      jumpLeft: new __WEBPACK_IMPORTED_MODULE_1__sprite__["a" /* default */](spritesheet, 99, 25, 24, 24),
      jumpRight: new __WEBPACK_IMPORTED_MODULE_1__sprite__["a" /* default */](spritesheet, 98, 0, 28, 24)
    };
    let self = this;
    this.states = {
      // clone node -- so that if we press it multiple times before the sound is finished, it will still create a new sound
      jumping: {
        movement: data => {
          if(this.velY === 0){
            var jumpSound = this.jumpSound.cloneNode();
            jumpSound.volume = 0.3;
            jumpSound.play();
            this.velY = -23;
            this.y += this.velY;
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
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
const Wall = (x, y, w, h) => ({
    type: "wall",
    x,
    y,
    w,
    h
});

/* unused harmony default export */ var _unused_webpack_default_export = (Wall);


/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__entity__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__sprite__ = __webpack_require__(0);



class Background extends __WEBPACK_IMPORTED_MODULE_0__entity__["a" /* default */]{
  constructor(type, spritesheet, x, y){
    let w = 768;
    let h = 600;

    let sprite =  new __WEBPACK_IMPORTED_MODULE_1__sprite__["a" /* default */](spritesheet, 72, 288, 432, 324);

    super(type, sprite, x, y, w, h);
  }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = Background;



/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
const Score = (x, y) => ({
  value: 0,
  size: "25px",
  font: "PixelEmulator",
  color: "red",
  x,
  y
});

/* harmony default export */ __webpack_exports__["a"] = (Score);


/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__util_input__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__util_render__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__util_movement__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__util_physics__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__util_animation__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__entities_entities__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__map_map_creator__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__map_levels__ = __webpack_require__(17);












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
      vX: 1.3,
      vY: 0,
    };


    // sound files are costly. to save loading time, instead of having a playlist, just have one song.

    let backgroundMusic = new Audio("audio/Desafinado.m4a");

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

    // add a listener to wait until spritesheet is loaded.
    spriteSheet.addEventListener("load", ()=>{
      // once it's loaded, then we can run the spritesheet.
      tileSet.addEventListener("load", ()=>{
        let data = {
          animationFrame: 0,
          mapCreator: new __WEBPACK_IMPORTED_MODULE_6__map_map_creator__["a" /* default */](__WEBPACK_IMPORTED_MODULE_7__map_levels__["a" /* One */](), tileSet, spriteSheet),
          tileSet,
          spriteSheet,
          entities: {},
          canvas,
          viewport
        };

        __WEBPACK_IMPORTED_MODULE_0__util_input__["a" /* default */].init(data);
        __WEBPACK_IMPORTED_MODULE_5__entities_entities__["a" /* default */].init(data);
        __WEBPACK_IMPORTED_MODULE_1__util_render__["a" /* default */].init(data);
        this.run(data);
      });
  });
}

  run (data){
    const loop = () => {
      // TODO: write game.updateview (to sidesscroll the viewport)
      // get input from user
      __WEBPACK_IMPORTED_MODULE_0__util_input__["a" /* default */].update(data);
      // animate character
      this.update(data);
      this.updateViewPort(data);
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

  updateViewPort(data){
    data.viewport.vX++;
  }

}

let game = new Game();
game.init();


/***/ }),
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__entities_ninja_star__ = __webpack_require__(9);


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

    // Spacebar
    if (Input.helpers.isDown(32)) {
      Object(__WEBPACK_IMPORTED_MODULE_0__entities_ninja_star__["a" /* default */])(data, nacho.x+20, nacho.y+5);
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
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__entity__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__sprite__ = __webpack_require__(0);



class NinjaStar extends __WEBPACK_IMPORTED_MODULE_0__entity__["a" /* default */]{
  constructor(type, data, x, y){
    let w = 15;
    let h = 15;

    let sprite =  new __WEBPACK_IMPORTED_MODULE_1__sprite__["a" /* default */](data.spriteSheet, 172, 22, 31, 23);

    super(type, sprite, x, y, w, h);

    this.sound = new Audio("audio/pitch.mp3");

    this.velX = -9;
    // if nacho is facing left, the ninjastar will fly left instead of right
    if(data.entities.nacho.direction === "left"){
      this.velX = 9;
    }
    this.x=x;
    this.w = w;
  }
  movement(data){
    this.x -= this.velX;
  }
}

const FireStar = (data, x, y) => {
  console.log("Is this getting hit?");
  let ninjastar = new NinjaStar("ninjastar", data, x, y);
  data.entities.ninjastars.push(ninjastar);
};
/* unused harmony export FireStar */


/* harmony default export */ __webpack_exports__["a"] = (FireStar);


/***/ }),
/* 10 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
const Render = {
  init: data =>{
    data.entities.map= [];
    data.entities.chipsArray = data.entities.chipsArray || [];
    data.mapCreator.create(data);
    Render.helpers.drawBackground(data.entities.background, data.canvas.bgCtx);
  },

  // we draw chips on update method because we need to re render any time our character runs through a chip. (dynamic update necessary)
  update: data=>{
    // we clear the WHOLE screen every time.( we could just do part)
    data.canvas.fgCtx.clearRect(0, 0, data.canvas.fgCanvas.width, data.canvas.fgCanvas.height);

    data.mapCreator.renderMap(data);

    Render.helpers.drawText(data.entities.score, data.canvas.fgCtx);

    // only draw elements that are in the viewport:

    Render.helpers.drawEntity(data.entities.nacho, data);

    data.entities.chipsArray.forEach((chip)=>{
      Render.helpers.drawEntity(chip, data);
    });

    data.entities.ninjastars.forEach((star)=>{
      Render.helpers.drawEntity(star, data);
    });
  },

  helpers: {
    // now when we call image, we can just call drawEntity, and the image will be drawn.
    drawEntity: (entity, data)=>{

// add logic so that the render ONLY draws object that are actually in the viewport screen.
      let viewport = data.viewport;
      const ctx = data.canvas.fgCtx;

      if(((entity.x + entity.w >= viewport.vX &&
          entity.x + entity.w <= viewport.vX + viewport.width)) &&
        ((entity.y + entity.h >= viewport.vY &&
          entity.y + entity.h <= viewport.vY + viewport.height))){
        ctx.drawImage(
          entity.sprite.img,
          entity.sprite.srcX, entity.sprite.srcY,
          entity.sprite.srcW, entity.sprite.srcH,
          entity.x - viewport.vX, entity.y - viewport.vY,
          entity.w, entity.h);
        }
      },

    drawText: (text, ctx)=>{
      ctx.font = text.size + " " + text.font;
      ctx.fillStyle = text.color;
      ctx.fillText("Chips:" + " " + text.value, text.x, text.y);
    },

    drawBackground: (entity, ctx)=>{
      ctx.drawImage(
        entity.sprite.img,
        entity.sprite.srcX, entity.sprite.srcY,
        entity.sprite.srcW, entity.sprite.srcH,
        entity.x, entity.y,
        entity.w, entity.h);
      }
    }
};

/* harmony default export */ __webpack_exports__["a"] = (Render);


/***/ }),
/* 11 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
const Movement = {
  update: data => {
    nacho(data);
    ninjastar(data);
  },
};

const nacho = data => {
  data.entities.nacho.currentState.movement(data);
};

const ninjastar = data => {
  // first, remove all the ninjastars that have gone off the edge of the screen.
  data.entities.ninjastars = data.entities.ninjastars.filter(star => {
    return star.x > data.viewport.vX && (star.x+star.w) < (data.viewport.vX + 768);
  });
  data.entities.ninjastars.forEach(star=>{
    star.movement(data);
  });
};

/* harmony default export */ __webpack_exports__["a"] = (Movement);


/***/ }),
/* 12 */
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

    data.entities.map.forEach(function(element){
      entityCollisionCheck(element);
    });

    // data.entities.wallsArray.forEach(function (wall) {
    //   entityCollisionCheck(wall);
    // });

    data.entities.chipsArray.forEach(function(chip){
      entityCollisionCheck(chip);
    });
  },

    handleCollision: function (data, entity) {
      let nacho = data.entities.nacho;

      if (["wall", "ground", "underground", "rightcorner", "leftcorner", "box", "floatleft", "floatright", "floatmiddle"].includes(entity.type)){
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
/* 13 */
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
/* 14 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__chip__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__nacho__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__walls__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__background__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__score__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__sprite__ = __webpack_require__(0);

// import Corn from "./corn";






// this class contains and initializes ALL of the entities for the game.
const Entities = {

  init(data){

    let background = new __WEBPACK_IMPORTED_MODULE_3__background__["a" /* default */]("bg", data.tileSet, 0, 0, 768, 600);

    let nacho = new __WEBPACK_IMPORTED_MODULE_1__nacho__["a" /* default */]("nacho", data.spriteSheet, 40, 10, 64, 64);

    // let wallLocations = [[data.viewport.vX, 0, 4, 600], [767+data.viewport.vX, 0, 4, 600]];

    let score = Object(__WEBPACK_IMPORTED_MODULE_4__score__["a" /* default */])(290, 70);

    let chipLocations = [[269, 120], [317, 120], [365, 120], [413, 120], [461, 120],
                             [221, 210], [269, 210], [317, 210], [365, 210], [413, 210], [461, 210], [509, 210],
                             [221, 300], [269, 300], [317, 300], [365, 300], [413, 300], [461, 300], [509, 300]];

    let ninjastars = [];

    data.entities.background = background;
    data.entities.nacho = nacho;
    // data.entities.wallsArray = [];
    data.entities.score = score;
    data.entities.ninjastars = ninjastars;
    data.entities.chipsArray = data.entities.chipsArray || [];

  // loop through locations to create a new coin for each location element
    chipLocations.forEach(function (location) {
      data.entities.chipsArray.push(new __WEBPACK_IMPORTED_MODULE_0__chip__["a" /* default */]("chip", data.spriteSheet, location[0], location[1], 30, 42));
    });

    // wallLocations.forEach(function (location) {
      // data.entities.wallsArray.push(Wall(location[0], location[1], location[2], location[3]));
    // });
  }
};

/* harmony default export */ __webpack_exports__["a"] = (Entities);


/***/ }),
/* 15 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__entities_map_elements__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__entities_chip__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__entities_nacho__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__entities_walls__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__entities_background__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__entities_score__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__entities_sprite__ = __webpack_require__(0);


// import Corn from "./corn";






class Map{
  constructor(level, tileset, spritesheet){
    this.level = level;
    this.tileset = tileset;
    this.spritesheet = spritesheet;

    this.mapElements = [];

    this.chips = [];

    this.level.forEach((screen, i) => {
      // reverse the order of rows here...
      // so that rendering is done bottom to top

      screen.reverse().forEach((row, j) =>{
        let xScreenStart = i*768;

        // each entity is 24 pixels tall. 600/24 equals 24. So the starting 6 position of each entity will be calculated as follows:
        let yPos = (24-j)*24;
        row.split(" ").forEach((el, idx)=>{
          let xPos = xScreenStart + (idx * 24);
          switch(el) {
            case "GR":
              this.createGround(xPos, yPos);
              break;
            case "UG":
              this.createUnderground(xPos, yPos);
              break;
            case "RG":
              this.createRightCorner(xPos, yPos);
              break;
            case "LG":
              this.createLeftCorner(xPos, yPos);
              break;
            case "CA":
              this.createCactus(xPos, yPos);
              break;
            case "CH":
              this.createChip(xPos, yPos);
              break;
            case "SI":
              this.createSign(xPos, yPos);
              break;
            case "BX":
              this.createBox(xPos, yPos);
              break;
            case "FL":
              this.createFloatLeft(xPos, yPos);
              break;
            case "FR":
              this.createFloatRight(xPos, yPos);
              break;
            case "FM":
              this.createFloatMiddle(xPos, yPos);
              break;
            default:
              break;
          }
        });
      });
    });
  }

  createGround(x, y){
    this.mapElements.push(
      new __WEBPACK_IMPORTED_MODULE_0__entities_map_elements__["f" /* Ground */]("ground", this.tileset, x, y)
    );
  }

  createUnderground(x, y){
    this.mapElements.push(
      new __WEBPACK_IMPORTED_MODULE_0__entities_map_elements__["j" /* Underground */]("underground", this.tileset, x, y)
    );
  }

  createRightCorner(x, y){
    this.mapElements.push(
      new __WEBPACK_IMPORTED_MODULE_0__entities_map_elements__["h" /* RightCorner */]("rightcorner", this.tileset, x, y)
    );
  }

  createLeftCorner(x, y){
    this.mapElements.push(
      new __WEBPACK_IMPORTED_MODULE_0__entities_map_elements__["g" /* LeftCorner */]("leftcorner", this.tileset, x, y)
    );
  }

  createCactus(x, y){
    this.mapElements.push(
      new __WEBPACK_IMPORTED_MODULE_0__entities_map_elements__["b" /* Cactus */]("cactus", this.tileset, x, y)
    );
  }

  createChip(x, y){
    this.chips.push(
      new __WEBPACK_IMPORTED_MODULE_1__entities_chip__["a" /* default */]("chip", this.spritesheet, x, y-30, 30, 42)
    );
  }

  createSign(x, y){
    this.mapElements.push(
      new __WEBPACK_IMPORTED_MODULE_0__entities_map_elements__["i" /* Sign */]("sign", this.tileset, x, y)
    );
  }

  createBox(x, y){
    this.mapElements.push(
      new __WEBPACK_IMPORTED_MODULE_0__entities_map_elements__["a" /* Box */]("box", this.tileset, x, y)
    );
  }

  createFloatLeft(x, y){
    this.mapElements.push(
      new __WEBPACK_IMPORTED_MODULE_0__entities_map_elements__["c" /* FloatLeft */]("floatleft", this.tileset, x, y)
    );
  }

  createFloatRight(x, y){
    this.mapElements.push(
      new __WEBPACK_IMPORTED_MODULE_0__entities_map_elements__["e" /* FloatRight */]("floatright", this.tileset, x, y)
    );
  }

  createFloatMiddle(x, y){
    this.mapElements.push(
      new __WEBPACK_IMPORTED_MODULE_0__entities_map_elements__["d" /* FloatMiddle */]("floatmiddle", this.tileset, x, y)
    );
  }

  create(data){
    this.mapElements.forEach((element) =>{
      data.entities.map.push(element);
    });
    data.entities.chipsArray = data.entities.chipsArray.concat(this.chips);
  }

  renderMap(data){
    this.mapElements.forEach((element) =>{
      this.drawEntity(element, data);
    });
  }

  drawEntity(entity, data){
    const viewport = data.viewport;
    const ctx = data.canvas.fgCtx;

    if(((entity.x + entity.w >= viewport.vX && entity.x <= viewport.vX + viewport.width)) && ((entity.y + entity.h >= viewport.vY && entity.y + entity.h <= viewport.vY + viewport.height))){
      ctx.drawImage(
        entity.sprite.img,
        entity.sprite.srcX, entity.sprite.srcY,
        entity.sprite.srcW, entity.sprite.srcH,
        entity.x - viewport.vX, entity.y - viewport.vY,
        entity.w, entity.h);
    }
  }
}


/* harmony default export */ __webpack_exports__["a"] = (Map);


/***/ }),
/* 16 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__entity__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__sprite__ = __webpack_require__(0);



class Ground extends __WEBPACK_IMPORTED_MODULE_0__entity__["a" /* default */]{
  constructor(type, spritesheet, x, y){
    let w = 24;
    let h = 35;
    let sprite =  new __WEBPACK_IMPORTED_MODULE_1__sprite__["a" /* default */](spritesheet, 216, 72, 72, 72);

    super(type, sprite, x, y, w, h);

  }
}
/* harmony export (immutable) */ __webpack_exports__["f"] = Ground;


class Underground extends __WEBPACK_IMPORTED_MODULE_0__entity__["a" /* default */]{
  constructor(type, spritesheet, x, y){
    let w = 24;
    let h = 24;
    let sprite =  new __WEBPACK_IMPORTED_MODULE_1__sprite__["a" /* default */](spritesheet, 504,  180, 71, 71);

    super(type, sprite, x, y, w, h);

  }
}
/* harmony export (immutable) */ __webpack_exports__["j"] = Underground;


class RightCorner extends __WEBPACK_IMPORTED_MODULE_0__entity__["a" /* default */]{
  constructor(type, spritesheet, x, y){
    let w = 24;
    let h = 24;
    let sprite =  new __WEBPACK_IMPORTED_MODULE_1__sprite__["a" /* default */](spritesheet, 360, 72, 72, 72);

    super(type, sprite, x, y, w, h);

  }
}
/* harmony export (immutable) */ __webpack_exports__["h"] = RightCorner;


class LeftCorner extends __WEBPACK_IMPORTED_MODULE_0__entity__["a" /* default */]{
  constructor(type, spritesheet, x, y){
    let w = 24;
    let h = 24;
    let sprite =  new __WEBPACK_IMPORTED_MODULE_1__sprite__["a" /* default */](spritesheet, 72  , 22, 72, 72);

    super(type, sprite, x, y, w, h);

  }
}
/* harmony export (immutable) */ __webpack_exports__["g"] = LeftCorner;


class Cactus extends __WEBPACK_IMPORTED_MODULE_0__entity__["a" /* default */]{
  constructor(type, spritesheet, x, y){
    let w = 54;
    let h = 64;
    let sprite =  new __WEBPACK_IMPORTED_MODULE_1__sprite__["a" /* default */](spritesheet, 648, 180, 72, 72);

    super(type, sprite, x-20, y-40, w, h);

  }
}
/* harmony export (immutable) */ __webpack_exports__["b"] = Cactus;


class Box extends __WEBPACK_IMPORTED_MODULE_0__entity__["a" /* default */]{
  constructor(type, spritesheet, x, y){
    let w = 24;
    let h = 24;
    let sprite =  new __WEBPACK_IMPORTED_MODULE_1__sprite__["a" /* default */](spritesheet, 504, 72, 72, 72);

    super(type, sprite, x, y, w, h);

  }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = Box;


class FloatLeft extends __WEBPACK_IMPORTED_MODULE_0__entity__["a" /* default */]{
  constructor(type, spritesheet, x, y){
    let w = 24;
    let h = 24;
    let sprite =  new __WEBPACK_IMPORTED_MODULE_1__sprite__["a" /* default */](spritesheet, 72, 180, 72, 72);

    super(type, sprite, x, y, w, h);

  }
}
/* harmony export (immutable) */ __webpack_exports__["c"] = FloatLeft;


class FloatRight extends __WEBPACK_IMPORTED_MODULE_0__entity__["a" /* default */]{
  constructor(type, spritesheet, x, y){
    let w = 24;
    let h = 24;
    let sprite =  new __WEBPACK_IMPORTED_MODULE_1__sprite__["a" /* default */](spritesheet, 360, 180, 72, 72);

    super(type, sprite, x, y, w, h);

  }
}
/* harmony export (immutable) */ __webpack_exports__["e"] = FloatRight;


class FloatMiddle extends __WEBPACK_IMPORTED_MODULE_0__entity__["a" /* default */]{
  constructor(type, spritesheet, x, y){
    let w = 24;
    let h = 24;
    let sprite =  new __WEBPACK_IMPORTED_MODULE_1__sprite__["a" /* default */](spritesheet, 216, 180, 72, 72);

    super(type, sprite, x, y, w, h);

  }
}
/* harmony export (immutable) */ __webpack_exports__["d"] = FloatMiddle;


class Sign extends __WEBPACK_IMPORTED_MODULE_0__entity__["a" /* default */]{
  constructor(type, spritesheet, x, y){
    let w = 24;
    let h = 24;
    let sprite =  new __WEBPACK_IMPORTED_MODULE_1__sprite__["a" /* default */](spritesheet, 648, 72, 72, 72);

    super(type, sprite, x, y, w, h);

  }
}
/* harmony export (immutable) */ __webpack_exports__["i"] = Sign;



/***/ }),
/* 17 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// my game board is going to be... 15360 pixels across (that's 768 * 20).
// If I divide that by 24 (the default size of an entity), that means I need to provide logic for 640 squares.
// that's way too many to do manually... Instead... I'll build a couple of default 768 * 600 views. And then splice 24 of those together for a game map. In order to increase difficulty, I'll use Math.random to throw in a random number of enemies.

const One = () => {
  let screenorder = [screen_one, screen_two, screen_three, screen_four, screen_five, screen_six, screen_seven];
  return screenorder;
};
/* harmony export (immutable) */ __webpack_exports__["a"] = One;


const screen_one=[
".. .. .. .. .. .. .. .. .. .. .. CH .. CH .. CH .. CH .. CH .. CH .. .. .. .. .. .. .. .. .. ..",
".. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. ..",
".. .. SI .. .. .. CH .. .. CH CA CH .. CH .. CH .. CH .. CH .. CH .. .. .. .. .. .. .. .. .. ..",
"GR GR GR GR GR GR GR GR GR GR GR GR GR GR GR GR GR GR GR GR GR GR GR GR GR GR GR GR GR GR GR GR",
"UG UG UG UG UG UG UG UG UG UG UG UG UG UG UG UG UG UG UG UG UG UG UG UG UG UG UG UG UG UG UG UG"];

const screen_two=[
".. .. .. .. .. .. .. .. .. .. .. .. CH .. CH .. CH .. CH .. CH .. .. .. .. .. .. .. .. .. .. ..",
".. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. ..",
".. .. .. .. .. .. .. .. .. .. .. CH .. CH .. CH .. CH .. CH .. CH .. .. .. .. .. .. .. .. .. ..",
".. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. ..",
".. .. .. .. .. .. .. .. .. .. .. .. CH .. CH .. CH .. CH .. CH .. .. .. .. .. .. .. .. .. .. ..",
".. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. ..",
".. .. .. .. .. .. .. .. .. .. .. CH .. CH .. CH .. CH .. CH .. CH .. .. .. .. .. .. .. .. .. ..",
".. .. .. .. .. .. .. .. .. .. .. GR GR GR GR GR GR GR GR GR GR GR .. .. .. .. .. .. .. .. .. ..",
".. .. .. .. .. .. CA CA .. .. .. UG UG UG UG UG UG UG UG UG UG UG .. .. .. .. .. .. .. .. .. ..",
".. .. .. .. .. .. BX BX .. .. .. UG UG UG UG UG UG UG UG UG UG UG .. .. .. .. .. .. .. .. .. ..",
".. .. .. .. .. .. BX BX .. .. .. UG UG UG UG UG UG UG UG UG UG UG .. .. .. .. .. .. .. .. .. ..",
".. .. .. .. .. .. BX BX .. .. .. UG UG UG UG UG UG UG UG UG UG UG .. .. .. .. .. .. .. .. .. ..",
".. .. .. .. .. .. BX BX .. .. .. UG UG UG UG UG UG UG UG UG UG UG .. .. .. .. .. .. .. .. .. ..",
".. .. .. .. .. .. BX BX .. .. .. UG UG UG UG UG UG UG UG UG UG UG .. .. .. .. .. CA .. .. .. ..",
"GR GR GR GR GR GR GR GR GR GR GR UG UG UG UG UG UG UG UG UG UG UG GR GR GR GR GR GR GR GR GR GR",
"UG UG UG UG UG UG UG UG UG UG UG UG UG UG UG UG UG UG UG UG UG UG UG UG UG UG UG UG UG UG UG UG"];

const screen_three=[
".. .. .. .. .. .. .. .. .. .. .. .. .. .. .. CH CH CH CH CH CH CH .. .. .. .. .. .. .. .. .. ..",
".. .. .. .. .. .. .. .. .. .. .. .. .. .. .. FL FM FM FM FM FM FR .. .. .. .. .. .. .. .. .. ..",
".. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. ..",
".. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. ..",
".. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. ..",
".. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. ..",
".. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. ..",
".. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. ..",
".. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. ..",
".. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. ..",
".. .. .. .. .. .. .. .. .. .. CA .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. ..",
".. .. .. .. .. .. CH .. .. CA BX .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. CH .. .. ..",
".. .. .. .. FL FM FM FM FM FM FR .. .. .. .. .. .. .. .. .. .. .. .. .. FL FM FM FM FM FM FR ..",
".. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. ..",
".. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. ..",
".. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. ..",
".. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. ..",
".. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. ..",
".. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. ..",
".. .. CA .. .. .. .. .. .. .. .. .. .. .. .. .. CA .. .. .. .. .. .. .. .. .. .. .. .. .. .. ..",
"GR GR GR GR GR GR GR GR GR GR GR GR GR GR GR GR GR GR GR GR GR GR GR GR GR GR GR GR GR GR GR GR",
"UG UG UG UG UG UG UG UG UG UG UG UG UG UG UG UG UG UG UG UG UG UG UG UG UG UG UG UG UG UG UG UG"];

const screen_four=[
".. .. .. .. .. .. .. .. .. .. .. .. .. .. .. FL FM FM FM FM FM FR .. .. .. .. .. .. .. .. .. ..",
".. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. ..",
".. .. .. .. .. .. .. .. .. CA CA .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. ..",
".. .. .. .. .. .. FL FM FM FM FM FR FM .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. ..",
".. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. CA .. .. .. ..",
".. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. FL FM FM FM FM FM FR ..",
".. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. ..",
"GR GR GR GR RG .. .. .. .. .. .. .. LG GR GR GR GR GR GR GR GR GR GR GR GR GR GR GR GR GR GR GR",
"UG UG UG UG UG .. .. .. .. .. .. .. UG UG UG UG UG UG UG UG UG UG UG UG UG UG UG UG UG UG UG UG"];

const screen_five=[
".. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. BX .. CA .. .. .. .. .. .. .. .. .. .. ..",
".. .. .. .. .. .. .. .. .. .. .. .. .. .. .. FL FM FM FM FM FM FR .. .. CH CH .. .. .. .. .. ..",
".. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. ..",
".. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. ..",
".. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. ..",
".. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. ..",
".. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. ..",
".. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. ..",
".. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. ..",
".. .. .. .. .. .. .. CH .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. CH CH .. .. .. .. .. ..",
".. .. .. .. .. BX BX BX BX .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. ..",
".. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. CH CH .. .. .. .. .. ..",
".. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. BX BX BX .. .. .. .. ..",
".. .. .. .. .. .. .. .. .. .. CH CH CH CH .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. ..",
".. CA .. .. .. .. .. .. BX BX BX BX BX BX BX .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. ..",
"GR GR GR GR GR GR GR GR GR .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. ..",
"UG UG UG UG UG UG UG UG UG .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .."];

const screen_six=[
".. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. BX BX .. .. .. .. .. ..",
".. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. BX BX .. .. .. .. .. ..",
".. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. BX BX .. .. .. .. .. ..",
".. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. BX BX .. .. .. .. .. ..",
".. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. BX BX .. .. .. .. .. ..",
".. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. BX BX .. .. .. .. .. ..",
".. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. BX BX .. .. .. .. .. ..",
".. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. BX BX .. .. .. .. .. ..",
".. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. BX BX .. .. .. .. .. ..",
".. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. CH CH .. .. .. .. .. ..",
".. .. .. .. .. .. .. .. .. CH CH .. .. .. .. .. .. .. .. .. .. .. .. .. CH CH .. .. .. .. .. ..",
".. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. CH CH .. .. .. .. .. ..",
".. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. CH CH .. .. .. .. .. ..",
".. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. CH CH .. .. .. .. .. ..",
".. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. CH CH .. .. .. .. .. ..",
".. .. .. .. .. .. .. .. .. CH CH .. .. .. .. .. .. .. .. .. .. .. .. .. CH CH .. .. .. .. .. ..",
".. .. .. .. .. .. .. CH .. .. .. .. CH .. .. .. .. .. .. .. .. .. .. .. CH CH .. .. .. .. .. ..",
".. .. .. .. .. .. .. .. BX BX BX BX .. .. .. .. .. .. .. .. .. .. .. .. CH CH .. .. .. .. .. ..",
".. .. .. .. .. CH .. BX .. .. .. .. BX .. CH .. .. .. .. .. .. .. .. .. CA CA .. .. .. .. .. ..",
".. .. .. .. .. .. BX .. .. .. .. .. .. BX .. .. .. .. .. .. .. .. .. .. BX BX .. .. .. .. .. ..",
".. .. .. .. .. BX .. .. .. .. .. .. .. .. BX .. .. .. .. .. .. .. .. .. BX BX .. .. .. .. .. ..",
".. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. BX BX .. .. .. .. .. ..",
".. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. BX BX .. .. .. .. .. ..",
".. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. CA CA CA CA CA .. .. .. BX BX .. .. CH CH .. ..",
"GR GR GR GR GR GR GR GR GR GR GR GR GR GR GR GR GR GR GR GR GR GR GR GR GR GR GR GR GR GR GR GR",
"UG UG UG UG UG UG UG UG UG UG UG UG UG UG UG UG UG UG UG UG UG UG UG UG UG UG UG UG UG UG UG UG"];

const screen_seven=[
".. .. .. .. .. .. .. .. CH CH .. .. .. CA CA .. .. .. CH CH .. .. .. .. .. .. .. .. .. .. .. ..",
".. .. .. .. .. .. .. LG GR GR GR GR GR GR GR GR GR GR GR GR GR RG .. .. .. .. .. .. .. .. .. ..",
".. .. .. .. .. .. .. UG UG UG UG UG UG UG UG UG UG UG UG UG UG UG .. .. .. .. .. .. .. .. .. ..",
".. .. CH CH .. .. .. UG UG UG UG UG UG UG UG UG UG UG UG UG UG UG .. .. .. .. .. .. .. .. .. ..",
".. .. BX BX .. .. .. UG UG UG UG UG UG UG UG UG UG UG UG UG UG UG .. .. .. .. .. .. .. .. .. ..",
".. .. BX BX .. .. .. UG UG UG UG UG UG UG UG UG UG UG UG UG UG UG .. .. .. .. .. .. .. .. .. ..",
".. .. .. .. .. .. .. UG UG UG UG UG UG UG UG UG UG UG UG UG UG UG .. .. .. .. .. .. .. .. .. ..",
".. .. .. .. .. .. .. UG UG UG UG UG UG UG UG UG UG UG UG UG UG UG .. .. .. .. .. .. .. .. .. ..",
".. .. .. .. .. .. .. UG UG UG UG UG UG UG UG UG UG UG UG UG UG UG .. .. .. .. .. .. .. .. .. ..",
".. .. .. .. .. .. .. UG UG UG UG UG UG UG UG UG UG UG UG UG UG UG .. .. .. .. .. .. .. .. .. ..",
".. .. .. .. .. .. .. UG UG UG UG UG UG UG UG UG UG UG UG UG UG UG .. .. .. .. .. .. .. .. .. ..",
".. .. .. .. .. .. .. UG UG UG UG UG UG UG UG UG UG UG UG UG UG UG .. .. .. .. .. .. CA .. .. ..",
"GR GR GR GR GR GR GR UG UG UG UG UG UG UG UG UG UG UG UG UG UG UG GR GR GR GR GR GR GR GR GR GR",
"UG UG UG UG UG UG UG UG UG UG UG UG UG UG UG UG UG UG UG UG UG UG UG UG UG UG UG UG UG UG UG UG"];


/***/ })
/******/ ]);
//# sourceMappingURL=bundle.js.map