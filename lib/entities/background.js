import Entity from './entity';
import Sprite from './sprite';

export default class Background extends Entity{
  constructor(type, spritesheet, x, y){
    let w = 24;
    let h = 24;
    let sprite =  new Sprite(spritesheet, 216, 72, 72, 72);

    super(type, sprite, x, y, w, h);
  }
}
