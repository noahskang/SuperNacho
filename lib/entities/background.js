import Entity from './entity';
import Sprite from './sprite';

export default class Background extends Entity{
  constructor(type, spritesheet, x, y){
    let w = 768;
    let h = 600;

    let sprite =  new Sprite(spritesheet, 72, 288, 432, 324);

    super(type, sprite, x, y, w, h);
  }
}
