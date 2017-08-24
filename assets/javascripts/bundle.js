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

    let sprite = new __WEBPACK_IMPORTED_MODULE_1__sprite__["a" /* default */](spritesheet, 72, 617, 42, 70);

    super(type, sprite, x, y, w, h);

    this.spriteAnimations = {
      walkRight: {
        frames: [new __WEBPACK_IMPORTED_MODULE_1__sprite__["a" /* default */](spritesheet, 114, 617, 55, 70),
                new __WEBPACK_IMPORTED_MODULE_1__sprite__["a" /* default */](spritesheet, 168, 617, 50, 70),
                new __WEBPACK_IMPORTED_MODULE_1__sprite__["a" /* default */](spritesheet, 222, 617, 60, 70),
                new __WEBPACK_IMPORTED_MODULE_1__sprite__["a" /* default */](spritesheet, 282, 617, 48, 70)],
        currentFrame: 0
      },
      walkLeft: {
          frames: [new __WEBPACK_IMPORTED_MODULE_1__sprite__["a" /* default */](spritesheet, 116, 686, 52, 70),
                  new __WEBPACK_IMPORTED_MODULE_1__sprite__["a" /* default */](spritesheet, 168, 686, 54, 70),
                  new __WEBPACK_IMPORTED_MODULE_1__sprite__["a" /* default */](spritesheet, 222, 686, 60, 70),
                  new __WEBPACK_IMPORTED_MODULE_1__sprite__["a" /* default */](spritesheet, 282, 686, 48, 70)],
          currentFrame: 0
      },
      standRight: new __WEBPACK_IMPORTED_MODULE_1__sprite__["a" /* default */](spritesheet, 72, 617, 42, 70),
      standLeft: new __WEBPACK_IMPORTED_MODULE_1__sprite__["a" /* default */](spritesheet, 378, 686, 42, 70),
      jumpLeft: new __WEBPACK_IMPORTED_MODULE_1__sprite__["a" /* default */](spritesheet, 72, 688, 42, 70),
      jumpRight: new __WEBPACK_IMPORTED_MODULE_1__sprite__["a" /* default */](spritesheet, 378, 617, 48, 70)
    };
    let self = this;
    this.states = {
      // clone node -- so that if we press it multiple times before the sound is finished, it will still create a new sound
      jumping: {
        movement: data => {
          if(this.velY === 0){
            let jumpSound = data.sounds.jumpSound.cloneNode();
            jumpSound.volume = 0.3;
            jumpSound.play();
            this.velY = -32;
            this.velX = 5;
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

              if (self.spriteAnimations.walkRight.currentFrame > 3) {
                self.spriteAnimations.walkRight.currentFrame = 0;
              }
            }
          } else {
            if (data.animationFrame % 5 === 0) {
              this.sprite = self.spriteAnimations.walkLeft.frames[self.spriteAnimations.walkLeft.currentFrame];
              self.spriteAnimations.walkLeft.currentFrame++;

              if (self.spriteAnimations.walkLeft.currentFrame > 3) {
                self.spriteAnimations.walkLeft.currentFrame = 0;
              }
            }
          }
        }
      }
    };

    this.currentState = this.states.walking;
    this.direction = "right";
    this.velY = 0;
    this.velX = 4.1;
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
  size: "20px",
  font: "Montserrat",
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__map_levels__ = __webpack_require__(18);












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

    // let ninjasound =
    // add a listener to wait until spritesheet is loaded.
    spriteSheet.addEventListener("load", ()=>{
      // once it's loaded, then we can run the spritesheet.
      tileSet.addEventListener("load", ()=>{
        let data = {
          animationFrame: 0,
          mapCreator: new __WEBPACK_IMPORTED_MODULE_6__map_map_creator__["a" /* default */](__WEBPACK_IMPORTED_MODULE_7__map_levels__["a" /* One */](), tileSet, spriteSheet),
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

        __WEBPACK_IMPORTED_MODULE_0__util_input__["a" /* default */].init(data);
        __WEBPACK_IMPORTED_MODULE_5__entities_entities__["a" /* default */].init(data);
        __WEBPACK_IMPORTED_MODULE_1__util_render__["a" /* default */].init(data);
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
      __WEBPACK_IMPORTED_MODULE_0__util_input__["a" /* default */].update(data);
      // animate character
      this.update(data);
      this.updateViewPort(data);
      __WEBPACK_IMPORTED_MODULE_1__util_render__["a" /* default */].update(data);

      // every time the loop runs, add a tick to the animation frame.
      data.animationFrame++;

      this.id = window.requestAnimationFrame(loop);

      if(this.gameOver(data)){
        window.cancelAnimationFrame(this.id);
        let ctx = data.canvas.fgCtx;
        ctx.fillText("YOU LOST!!!", 300, 300);
        setTimeout(this.reload, 2000);
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
    __WEBPACK_IMPORTED_MODULE_4__util_animation__["a" /* default */].update(data);
    __WEBPACK_IMPORTED_MODULE_2__util_movement__["a" /* default */].update(data);
    __WEBPACK_IMPORTED_MODULE_3__util_physics__["a" /* default */].update(data);
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
      if(data.canFire && data.entities.starCounter.value >0){
        Object(__WEBPACK_IMPORTED_MODULE_0__entities_ninja_star__["a" /* default */])(data, nacho.x+20, nacho.y+10);
        data.canFire = false;
        // using a time out to space out firing of ninjastars
        setTimeout(()=>{data.canFire = true;}, 300);
      }
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
    let w = 60;
    let h = 45;

    let sprite =  new __WEBPACK_IMPORTED_MODULE_1__sprite__["a" /* default */](data.tileSet, 648, 504, 72, 45);

    super(type, sprite, x, y, w, h);

    this.velX;
    this.frames = [];
    // if nacho is facing left, the ninjastar will fly left instead of right
    if(data.entities.nacho.direction === "left"){
      this.velX = 9;
      this.frames = [new __WEBPACK_IMPORTED_MODULE_1__sprite__["a" /* default */](data.tileSet, 570, 548, 72, 45), new __WEBPACK_IMPORTED_MODULE_1__sprite__["a" /* default */](data.tileSet, 648, 548, 80, 45)];
    }else{
      this.velX = -9;
      this.frames = [new __WEBPACK_IMPORTED_MODULE_1__sprite__["a" /* default */](data.tileSet, 648, 504, 72, 45),
              new __WEBPACK_IMPORTED_MODULE_1__sprite__["a" /* default */](data.tileSet, 570, 504, 80, 45)];
    }

    this.currentFrame = 0;
    this.x=x;
  }

  movement(){
    this.x -= this.velX;
  }

  animation(data){
    if(data.animationFrame % 4===0){
      this.sprite = this.frames[this.currentFrame];
      this.currentFrame++;
      if(this.currentFrame>1){
        this.currentFrame = 0;
      }
    }
  }
}

const FireStar = (data, x, y) => {
  let ninjastar = new NinjaStar("ninjastar", data, x, y);
  data.entities.starCounter.value -=1;
  var ninjaSound = data.sounds.ninjaSound.cloneNode();
  ninjaSound.volume = 0.3;
  ninjaSound.play();
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

    Render.helpers.drawText(data.entities.score, data.canvas.fgCtx, "Score: ");
    Render.helpers.drawText(data.entities.starCounter, data.canvas.fgCtx, "NachoStars: ");

    // only draw elements that are in the viewport:

    Render.helpers.drawEntity(data.entities.nacho, data);

    data.entities.chipsArray.forEach((chip)=>{
      if(((chip.x + chip.w >= data.viewport.vX && chip.x <= data.viewport.vX + data.viewport.width)) && ((chip.y + chip.h >= data.viewport.vY && chip.y + chip.h <= data.viewport.vY + data.viewport.height))){
        Render.helpers.drawEntity(chip, data);
      }
    });

    data.entities.ninjastars.forEach((star)=>{
      Render.helpers.drawEntity(star, data);
    });

    data.entities.luchaArray.forEach((lucha)=>{
      Render.helpers.drawEntity(lucha, data);
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

          // initiate walking animation for luchas only when they get onto the screen.
          if(entity.type==="lucha"){
            entity.currentState = entity.states.walking;
          }
        }
      },

    drawText: (text, ctx, category)=>{
      ctx.font = text.size + " " + text.font;
      ctx.fillStyle = text.color;
      ctx.fillText(category + " " + text.value, text.x, text.y);
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
    luchas(data);
  },
};

const nacho = data => {
  data.entities.nacho.currentState.movement(data);
};

const luchas = data => {
  data.entities.luchaArray.forEach(lucha=>{
    lucha.currentState.movement(data);
  });
};

const ninjastar = data => {
  // first, remove all the ninjastars that have gone off the edge of the screen.
  data.entities.ninjastars = data.entities.ninjastars.filter(star => {
    return star.x > data.viewport.vX && (star.x+star.w) < (data.viewport.vX + 768);
  });
  data.entities.ninjastars.forEach(star=>{
    star.movement();
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

    data.entities.luchaArray.forEach(lucha=>{
      Physics.helpers.gravity(lucha);
    });

    Physics.wallDetection(data);
    Physics.collisionDetection(data);
  },

  wallDetection(data){
    if(data.entities.nacho.x < data.viewport.vX+5){
      data.entities.nacho.x+=4;
    }
    if(data.entities.nacho.x+10 > data.viewport.vX+768){
      data.viewport.vX+2;
      data.entities.nacho.x-=3;
    }
  },

  collisionDetection: function (data) {
    let nacho = data.entities.nacho;

    let nachoCollisionCheck = function (entity) {
      // check to see if nacho image intersects with the entity image.
      if (nacho.x < entity.x + entity.w &&
        nacho.x + nacho.w > entity.x &&
        nacho.y < entity.y + entity.h &&
        nacho.h + nacho.y > entity.y) {
        //Collision Occured
        Physics.handleNachoCollision(data, entity);
      }

    };

    let luchaCollisionCheck = function(entity){
      let luchaArray = data.entities.luchaArray;
      luchaArray.forEach((lucha) => {
        if (lucha.x < entity.x + entity.w - 10 &&
          lucha.x + lucha.w - 10 > entity.x &&
          lucha.y < entity.y + entity.h &&
          lucha.h + lucha.y > entity.y) {
          //Collision Occured
          Physics.handleLuchaCollision(data, entity, lucha);
        }
      });
    };

    data.entities.map.forEach(function(element){
      nachoCollisionCheck(element);
      luchaCollisionCheck(element);
    });

    data.entities.chipsArray.forEach(function(chip){
      nachoCollisionCheck(chip);
    });

    data.entities.ninjastars.forEach(function(star){
      luchaCollisionCheck(star);
    });

    data.entities.luchaArray.forEach(function(lucha){
      nachoCollisionCheck(lucha);
    });
  },

  handleLuchaCollision: function(data, entity, lucha){

    if (["ground", "underground", "rightcorner", "leftcorner", "box", "floatleft", "floatright", "floatmiddle", "nacho"].includes(entity.type)){
      //Left Side Entity Collision
      if (lucha.x < entity.x && lucha.y >= entity.y) {
        if(entity.type==="nacho"){
          data.fatality = true;
        } else {
          lucha.x = entity.x - lucha.w;
        }
      }

      //Right Side Entity collision
      if (lucha.x > entity.x && lucha.y >= entity.y) {
        if(entity.type==="nacho"){
          data.fatality = true;
        } else {
          lucha.x = entity.x + entity.w;
        }
      }

      //Top of Entity Collision
      if (lucha.y < entity.y && (lucha.x + lucha.w) > entity.x + 10 &&
        lucha.x < (entity.x + entity.w) - 10 && lucha.velY >= 0) {
        lucha.y = entity.y - lucha.h;
        lucha.velY = 0;
      }
    }

    if (entity.type === "ninjastar") {
      let luchaIndex = data.entities.luchaArray.indexOf(lucha);
      let ninjastars = data.entities.ninjastars;
      let starindex = ninjastars.indexOf(entity);
      let smashSound = data.sounds.smashSound.cloneNode();
      smashSound.volume = 0.4;
      smashSound.play();

      data.entities.score.value += 10;

      data.entities.luchaArray.splice(luchaIndex, 1);
      data.entities.ninjastars.splice(starindex, 1);
    }
  },

  handleNachoCollision: function (data, entity) {
    let nacho = data.entities.nacho;

    if (["ground", "underground", "rightcorner", "leftcorner", "box", "floatleft", "floatright", "floatmiddle", "lucha", "cactus"].includes(entity.type)){
      //collide with left side of entity
      if (nacho.x < entity.x && nacho.y >= entity.y-10) {
        if(["lucha", "cactus"].includes(entity.type)){
          data.fatality = true;
        } else {
          nacho.x = entity.x - nacho.w;
        }
      }

      //collide with right side of entity
      if (nacho.x > entity.x && nacho.y >= entity.y-10) {
        if(["lucha", "cactus"].includes(entity.type)){
          data.fatality = true;
        } else {
          nacho.x = entity.x + entity.w;
        }
      }

      //Top Collision
      if (nacho.y < entity.y && (nacho.x + nacho.w) > entity.x + 10 &&
        nacho.x < (entity.x + entity.w) - 10 && nacho.velY >= 0) {
        if(entity.type === "lucha"){
          nacho.currentState = nacho.states.jumping;
          nacho.velY = -20;
        }
        else if(entity.type === "cactus"){
          data.fatality = true;
        }else {
          nacho.currentState = nacho.states.standing;
          nacho.y = entity.y - nacho.h;
          nacho.velY = 0;
        }
      }
    }

    if (entity.type === "chip") {
      let chipsArray = data.entities.chipsArray;
      let index = chipsArray.indexOf(entity);

      data.entities.score.value += 10;
      data.entities.starCounter.value +=1;

      let chipSound = data.sounds.chipSound.cloneNode();
      chipSound.play();
      chipsArray.splice(index, 1);
    }
  },

  helpers: {
    gravity: function(entity){
      // this will give us acceleration downwards
      entity.velY += 1.4;
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
    luchas(data);
    ninjastars(data);
  },
};

const nacho = data => {
  data.entities.nacho.currentState.animation(data);
};

const chips = data => {
  data.entities.chipsArray.forEach((chip)=>{
    if(((chip.x + chip.w >= data.viewport.vX && chip.x <= data.viewport.vX + data.viewport.width)) && ((chip.y + chip.h >= data.viewport.vY && chip.y + chip.h <= data.viewport.vY + data.viewport.height))){
      chip.currentState.animation(data);
    }
  });

};

const luchas = data => {
  data.entities.luchaArray.forEach((lucha)=>{
    lucha.currentState.animation(data);
  });
};

const ninjastars = data => {
  data.entities.ninjastars.forEach((star)=>{
    star.animation(data);
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

    let nacho = new __WEBPACK_IMPORTED_MODULE_1__nacho__["a" /* default */]("nacho", data.tileSet, 40, 10, 64, 64);

    let score = Object(__WEBPACK_IMPORTED_MODULE_4__score__["a" /* default */])(55, 60);
    let starCounter = Object(__WEBPACK_IMPORTED_MODULE_4__score__["a" /* default */])(200, 60);

    let ninjastars = [];

    data.entities.background = background;
    data.entities.nacho = nacho;
    // data.entities.wallsArray = [];
    data.entities.score = score;
    data.entities.starCounter = starCounter;
    data.entities.ninjastars = ninjastars;
    data.entities.chipsArray = data.entities.chipsArray || [];

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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__entities_lucha__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__entities_score__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__entities_sprite__ = __webpack_require__(0);


// import Corn from "./corn";







class Map{
  constructor(level, tileset, spritesheet){
    this.level = level;
    this.tileset = tileset;
    this.spritesheet = spritesheet;
    this.luchaArray = [];

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
            case "LU":
              this.createLucha(xPos, yPos);
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

  createLucha(x, y){
    this.luchaArray.push(
      new __WEBPACK_IMPORTED_MODULE_5__entities_lucha__["a" /* default */]("lucha", this.spritesheet, x, y)
    );
  }

  create(data){
    this.mapElements.forEach((element) =>{
      data.entities.map.push(element);
    });
    data.entities.chipsArray = data.entities.chipsArray.concat(this.chips);

    data.entities.luchaArray = data.entities.luchArray || [];
    data.entities.luchaArray = this.luchaArray;
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
    let h = 54;
    let sprite =  new __WEBPACK_IMPORTED_MODULE_1__sprite__["a" /* default */](spritesheet, 648, 180, 72, 72);

    super(type, sprite, x-20, y-30, w, h);

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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__entity__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__sprite__ = __webpack_require__(0);



class Lucha extends __WEBPACK_IMPORTED_MODULE_0__entity__["a" /* default */] {

  constructor(type, spritesheet, x, y){

    let w = 60;
    let h = 60;

    let sprite = new __WEBPACK_IMPORTED_MODULE_1__sprite__["a" /* default */](spritesheet, 243, 7, 39, 45);

    super(type, sprite, x, y-80, w, h);

    this.spriteAnimations = {
      walkLeft: {
        frames: [new __WEBPACK_IMPORTED_MODULE_1__sprite__["a" /* default */](spritesheet, 243, 7, 39, 45),
                new __WEBPACK_IMPORTED_MODULE_1__sprite__["a" /* default */](spritesheet, 279, 7, 38, 45)],
        currentFrame: 0
      },
      walkRight: {
        frames: [new __WEBPACK_IMPORTED_MODULE_1__sprite__["a" /* default */](spritesheet, 314, 7, 39, 45),
                new __WEBPACK_IMPORTED_MODULE_1__sprite__["a" /* default */](spritesheet, 350, 7, 40, 45)],
        currentFrame: 0
      }
    };

    this.animationRandomizer = (Math.floor(Math.random()*50)+100);
    let self = this;

    this.states = {
      // clone node -- so that if we press it multiple times before the sound is finished, it will still create a new sound
      standing: {
        movement: data=>{
        },
        animation: data=>{
        }
      },
      walking: {
        movement: data => {
          if (this.direction === "right") {
            this.x += this.velX-1;
          } else {
            this.x -= this.velX;
          }
        },
        animation: data => {
          if(data.animationFrame % this.animationRandomizer === 0){
            this.turn();
          }
          if (this.direction === "right") {
            if (data.animationFrame % 8 === 0) {
              this.sprite = self.spriteAnimations.walkRight.frames[self.spriteAnimations.walkRight.currentFrame];
              self.spriteAnimations.walkRight.currentFrame++;

              if (self.spriteAnimations.walkRight.currentFrame > 1) {
                self.spriteAnimations.walkRight.currentFrame = 0;
              }
            }
          } else {
            if (data.animationFrame % 8 === 0) {
              this.sprite = self.spriteAnimations.walkLeft.frames[self.spriteAnimations.walkLeft.currentFrame];
              self.spriteAnimations.walkLeft.currentFrame++;

              if (self.spriteAnimations.walkLeft.currentFrame > 1) {
                self.spriteAnimations.walkLeft.currentFrame = 0;
              }
            }
          }
        }
      }
    };

    this.currentState = this.states.standing;
    this.direction = "left";
    this.velY = 0;
    this.velX = 2.4;
    this.chips = 0;
    this.x = x;
    this.y = y-34;
    this.w = w;
    this.h = h;
  }

  turn(){
    if(this.direction === "right"){
      this.direction = "left";
    } else {
      this.direction = "right";
    }
  }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = Lucha;



/***/ }),
/* 18 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// my game board is going to be... 15360 pixels across (that's 768 * 20).
// If I divide that by 24 (the default size of an entity), that means I need to provide logic for 640 squares.
// that's way too many to do manually... Instead... I'll build a couple of default 768 * 600 views. And then splice 24 of those together for a game map. In order to increase difficulty, I'll use Math.random to throw in a random number of enemies.

const rotate = (array, count) => {
  while(count>0){
    let temp = array.shift();
    array.push(temp);
    count--;
  }
  return array;
};

const One = () => {
  let screenorder = [screen_two, screen_three, screen_four, screen_five, screen_six, screen_seven];
  screenorder = rotate(screenorder, Math.floor(Math.random()*6));
  screenorder.unshift(screen_one);
  screenorder.push(screen_one);
  return screenorder;
};
/* harmony export (immutable) */ __webpack_exports__["a"] = One;


const screen_one=[
".. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. ..",
".. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. ..",
".. .. SI .. .. .. CH .. .. CH .. CH .. CH .. CH .. CH .. .. .. .. .. .. .. .. .. .. .. .. .. ..",
"GR GR GR GR GR GR GR GR GR GR GR GR GR GR GR GR GR GR GR GR GR GR GR GR GR GR GR GR GR GR GR GR",
"UG UG UG UG UG UG UG UG UG UG UG UG UG UG UG UG UG UG UG UG UG UG UG UG UG UG UG UG UG UG UG UG"];

const screen_two=[
".. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. ..",
".. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. ..",
".. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. ..",
".. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. ..",
".. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. ..",
".. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. ..",
".. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. ..",
".. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. ..",
".. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. ..",
".. .. .. .. .. .. BX BX .. .. .. CH .. CH .. CH LU CH LU CH .. CH .. .. .. .. .. .. .. .. .. ..",
".. .. .. .. .. .. BX BX .. .. .. GR GR GR GR GR GR GR GR GR GR GR .. .. .. .. .. .. .. .. .. ..",
".. .. .. .. .. .. BX BX .. .. .. UG UG UG UG UG UG UG UG UG UG UG .. .. .. .. .. .. .. .. .. ..",
".. .. .. .. .. .. BX BX .. .. .. UG UG UG UG UG UG UG UG UG UG UG .. .. .. .. .. .. .. .. .. ..",
".. .. .. .. .. .. BX BX LU .. .. UG UG UG UG UG UG UG UG UG UG UG .. .. .. .. .. .. .. .. .. ..",
"GR GR GR GR GR GR GR GR GR GR GR UG UG UG UG UG UG UG UG UG UG UG GR GR GR GR GR GR GR GR GR GR",
"UG UG UG UG UG UG UG UG UG UG UG UG UG UG UG UG UG UG UG UG UG UG UG UG UG UG UG UG UG UG UG UG"];

const screen_three=[
".. .. .. .. .. .. .. .. .. .. .. .. .. .. .. CH .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. ..",
".. .. .. .. .. .. .. .. .. .. .. .. .. .. .. FL FM FM FM FM FM FR .. .. .. .. .. .. .. .. .. ..",
".. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. ..",
".. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. ..",
".. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. ..",
".. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. ..",
".. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. ..",
".. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. ..",
".. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. ..",
".. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. ..",
".. .. .. .. .. .. .. .. .. .. BX .. .. .. .. .. .. .. LU .. .. .. .. .. .. .. .. .. .. .. .. ..",
".. .. .. .. .. .. CH .. .. BX BX .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. CH .. .. ..",
".. .. .. .. FL FM FM FM FM FM FR .. .. .. .. .. .. .. .. .. .. .. .. .. FL FM FM FM FM FM FR ..",
".. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. ..",
".. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. ..",
".. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. ..",
".. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. ..",
".. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. ..",
".. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. ..",
".. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. CA .. .. .. .. .. .. .. .. .. .. .. .. .. .. ..",
"GR GR GR GR GR GR GR GR GR GR GR GR GR GR GR GR GR GR GR GR GR GR GR GR GR GR GR GR GR GR GR GR",
"UG UG UG UG UG UG UG UG UG UG UG UG UG UG UG UG UG UG UG UG UG UG UG UG UG UG UG UG UG UG UG UG"];

const screen_four=[
".. .. .. .. .. .. .. .. .. .. .. .. .. .. .. FL FM FM FM FM FM FR .. .. .. .. .. .. .. .. .. ..",
".. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. ..",
".. .. .. .. .. .. .. .. .. CA .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. ..",
".. .. .. .. .. .. FL FM FM FM FM FR FM .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. ..",
".. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. ..",
".. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. FL FM FM FM FM FM FR ..",
".. .. .. .. LU .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. ..",
"GR GR GR GR RG .. .. .. .. .. .. .. LG GR GR GR GR GR GR GR GR GR GR GR GR GR GR GR GR GR GR GR",
"UG UG UG UG UG .. .. .. .. .. .. .. UG UG UG UG UG UG UG UG UG UG UG UG UG UG UG UG UG UG UG UG"];

const screen_five=[
".. .. .. .. .. .. .. LU .. .. .. .. .. .. .. .. .. .. BX .. CA .. .. .. .. .. .. .. .. .. .. ..",
".. .. .. .. .. .. .. .. .. .. .. .. .. .. .. FL FM FM FM FM FM FR .. .. CH CH .. .. .. .. .. ..",
".. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. ..",
".. .. .. .. .. .. .. .. .. LU .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. ..",
".. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. ..",
".. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. ..",
".. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. ..",
".. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. ..",
".. .. .. .. .. .. .. CH .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. ..",
".. .. .. .. .. BX BX BX BX LU .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. ..",
".. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. ..",
".. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. BX BX BX .. .. .. .. ..",
".. .. .. .. .. .. .. .. .. LU CH CH CH .. .. .. .. .. .. .. .. .. .. BX .. .. .. .. .. .. .. ..",
".. .. .. .. .. .. .. .. BX BX BX BX BX BX BX .. .. .. .. .. .. .. BX .. .. .. .. .. .. .. .. ..",
"GR GR GR GR GR GR GR GR GR .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. ..",
"UG UG UG UG UG UG UG UG UG .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .."];

const screen_six=[
".. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. BX BX .. .. .. .. .. ..",
".. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. BX BX .. .. .. .. .. ..",
".. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. BX BX .. .. .. .. .. ..",
".. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. BX BX .. .. .. .. .. ..",
".. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. ..",
".. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. ..",
".. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. ..",
".. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. ..",
".. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. ..",
".. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. ..",
".. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. ..",
".. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. CH CH .. .. .. .. .. ..",
".. .. .. .. .. .. .. .. .. .. .. .. .. .. LU .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. ..",
".. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. CH CH .. .. .. .. .. ..",
".. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. ..",
".. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. CH CH .. .. .. .. .. ..",
".. .. .. .. .. .. .. CH .. .. .. .. CH .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. ..",
".. .. .. .. .. .. .. .. BX BX BX BX .. .. .. .. .. .. .. .. .. .. .. .. CH CH .. .. .. .. .. ..",
".. .. .. .. .. CH .. BX .. .. .. .. BX .. CH .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. ..",
".. .. .. .. .. .. BX .. .. .. .. .. .. BX .. .. .. .. .. .. .. .. .. .. BX BX .. .. .. .. .. ..",
".. .. .. .. .. BX .. .. .. .. .. .. .. .. BX .. .. .. .. .. .. .. .. .. BX BX .. .. .. .. .. ..",
".. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. BX BX .. .. .. .. .. ..",
".. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. BX BX .. .. .. .. .. ..",
".. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. BX BX .. .. CH CH .. ..",
"GR GR GR GR GR GR GR GR GR GR GR GR GR GR GR GR GR GR GR GR GR GR GR GR GR GR GR GR GR GR GR GR",
"UG UG UG UG UG UG UG UG UG UG UG UG UG UG UG UG UG UG UG UG UG UG UG UG UG UG UG UG UG UG UG UG"];

const screen_seven=[
".. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. CH CH .. LU .. .. .. .. .. .. .. .. .. ..",
".. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. ..",
".. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. ..",
".. .. CH CH .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. ..",
".. .. BX BX .. .. .. .. .. .. .. .. .. CA .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. ..",
".. .. BX BX .. .. .. LG GR GR GR GR GR GR GR GR GR GR GR GR GR RG .. .. .. .. .. .. .. .. .. ..",
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