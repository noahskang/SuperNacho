import Entity from './entity';
import Sprite from './sprite';

export default class Nacho extends Entity {

  constructor(type, img, x, y, w, h){

    super(type, img, x, y, w, h);
    this.img = img;

    this.jumpSound = new Audio("audio/supernacho_jump.mp3");
    this.spriteAnimations = {
      walkRight: {
        frames: [new Sprite(img, 24, 0, 24, 24),
                new Sprite(img, 48, 0, 24, 24),
                new Sprite(img, 72, 0, 24, 24)],
        currentFrame: 0
      },
      walkLeft: {
          frames: [new Sprite(img, 51, 26, 24, 24),
                  new Sprite(img, 26, 25, 24, 24),
                  new Sprite(img, 0, 26, 24, 24)],
          currentFrame: 0
      },
      standRight: new Sprite(img, 0, 0, 24, 24),
      standLeft: new Sprite(img, 75, 27, 24, 24),
      jumpLeft: new Sprite(img, 99, 25, 24, 24),
      jumpRight: new Sprite(img, 98, 0, 28, 24)
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
