import Entity from './entity';
import Sprite from './sprite';

export default class Lucha extends Entity {

  constructor(type, spritesheet, x, y){

    let w = 60;
    let h = 60;

    let sprite = new Sprite(spritesheet, 243, 7, 39, 45);

    super(type, sprite, x, y-80, w, h);

    this.spriteAnimations = {
      walkLeft: {
        frames: [new Sprite(spritesheet, 243, 7, 39, 45),
                new Sprite(spritesheet, 279, 7, 38, 45)],
        currentFrame: 0
      },
      walkRight: {
        frames: [new Sprite(spritesheet, 314, 7, 39, 45),
                new Sprite(spritesheet, 350, 7, 40, 45)],
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
