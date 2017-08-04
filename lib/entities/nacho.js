import Entity from './entity';
import Sprite from './sprite';

export default class Nacho extends Entity {

  constructor(type, spritesheet, x, y, w, h){

    let sprite = new Sprite(spritesheet, 72, 617, 42, 70);

    super(type, sprite, x, y, w, h);

    this.spriteAnimations = {
      walkRight: {
        frames: [new Sprite(spritesheet, 114, 617, 55, 70),
                new Sprite(spritesheet, 168, 617, 50, 70),
                new Sprite(spritesheet, 222, 617, 60, 70),
                new Sprite(spritesheet, 282, 617, 48, 70)],
        currentFrame: 0
      },
      walkLeft: {
          frames: [new Sprite(spritesheet, 116, 686, 52, 70),
                  new Sprite(spritesheet, 168, 686, 54, 70),
                  new Sprite(spritesheet, 222, 686, 60, 70),
                  new Sprite(spritesheet, 282, 686, 48, 70)],
          currentFrame: 0
      },
      standRight: new Sprite(spritesheet, 72, 617, 42, 70),
      standLeft: new Sprite(spritesheet, 378, 686, 42, 70),
      jumpLeft: new Sprite(spritesheet, 72, 688, 42, 70),
      jumpRight: new Sprite(spritesheet, 378, 617, 48, 70)
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
