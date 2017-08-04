import Entity from './entity';
import Sprite from './sprite';

export class Ground extends Entity{
  constructor(type, spritesheet, x, y){
    let w = 24;
    let h = 35;
    let sprite =  new Sprite(spritesheet, 216, 72, 72, 72);

    super(type, sprite, x, y, w, h);

  }
}

export class Underground extends Entity{
  constructor(type, spritesheet, x, y){
    let w = 24;
    let h = 24;
    let sprite =  new Sprite(spritesheet, 504,  180, 71, 71);

    super(type, sprite, x, y, w, h);

  }
}

export class RightCorner extends Entity{
  constructor(type, spritesheet, x, y){
    let w = 24;
    let h = 24;
    let sprite =  new Sprite(spritesheet, 360, 72, 72, 72);

    super(type, sprite, x, y, w, h);

  }
}

export class LeftCorner extends Entity{
  constructor(type, spritesheet, x, y){
    let w = 24;
    let h = 24;
    let sprite =  new Sprite(spritesheet, 72  , 22, 72, 72);

    super(type, sprite, x, y, w, h);

  }
}

export class Cactus extends Entity{
  constructor(type, spritesheet, x, y){
    let w = 54;
    let h = 54;
    let sprite =  new Sprite(spritesheet, 648, 180, 72, 72);

    super(type, sprite, x-20, y-30, w, h);

  }
}

export class Box extends Entity{
  constructor(type, spritesheet, x, y){
    let w = 24;
    let h = 24;
    let sprite =  new Sprite(spritesheet, 504, 72, 72, 72);

    super(type, sprite, x, y, w, h);

  }
}

export class FloatLeft extends Entity{
  constructor(type, spritesheet, x, y){
    let w = 24;
    let h = 24;
    let sprite =  new Sprite(spritesheet, 72, 180, 72, 72);

    super(type, sprite, x, y, w, h);

  }
}

export class FloatRight extends Entity{
  constructor(type, spritesheet, x, y){
    let w = 24;
    let h = 24;
    let sprite =  new Sprite(spritesheet, 360, 180, 72, 72);

    super(type, sprite, x, y, w, h);

  }
}

export class FloatMiddle extends Entity{
  constructor(type, spritesheet, x, y){
    let w = 24;
    let h = 24;
    let sprite =  new Sprite(spritesheet, 216, 180, 72, 72);

    super(type, sprite, x, y, w, h);

  }
}

export class Sign extends Entity{
  constructor(type, spritesheet, x, y){
    let w = 24;
    let h = 24;
    let sprite =  new Sprite(spritesheet, 648, 72, 72, 72);

    super(type, sprite, x, y, w, h);

  }
}
