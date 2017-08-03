import Entity from './entity';
import Sprite from './sprite';

export default class Nacho extends Entity {

  constructor(type, spritesheet, x, y, w, h){

    let sprite = new Sprite(spritesheet, 0, 0, 24, 24);

    super(type, sprite, x, y, w, h);

    this.jumpSound = new Audio("audio/supernacho_jump.mp3");

    this.spriteAnimations = {
      walkRight: {
        frames: [new Sprite(spritesheet, 24, 0, 24, 24),
                new Sprite(spritesheet, 48, 0, 24, 24),
                new Sprite(spritesheet, 72, 0, 24, 24)],
        currentFrame: 0
      },
      walkLeft: {
          frames: [new Sprite(spritesheet, 51, 26, 24, 24),
                  new Sprite(spritesheet, 26, 25, 24, 24),
                  new Sprite(spritesheet, 0, 26, 24, 24)],
          currentFrame: 0
      },
      standRight: new Sprite(spritesheet, 0, 0, 24, 24),
      standLeft: new Sprite(spritesheet, 76, 27, 24, 24),
      jumpLeft: new Sprite(spritesheet, 99, 25, 24, 24),
      jumpRight: new Sprite(spritesheet, 98, 0, 28, 24)
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
