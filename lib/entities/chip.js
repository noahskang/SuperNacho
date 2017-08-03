import Entity from './entity';
import Sprite from './sprite';

export default class Chip extends Entity{
  constructor(type, spritesheet, x, y, w, h){

    let sprite =  new Sprite(spritesheet, 172, 22, 31, 23);

    super(type, sprite, x, y, w, h);

    this.spriteAnimations = {
      spin: {
        frames: [new Sprite(spritesheet, 140, 22, 31, 23),
                new Sprite(spritesheet, 172, 22, 31, 23),
                new Sprite(spritesheet, 204, 22, 31, 23),
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
