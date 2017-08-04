import Entity from './entity';
import Sprite from './sprite';

class NinjaStar extends Entity{
  constructor(type, data, x, y){
    let w = 60;
    let h = 45;

    let sprite =  new Sprite(data.tileSet, 648, 504, 72, 45);

    super(type, sprite, x, y, w, h);

    this.velX;
    this.frames = [];
    // if nacho is facing left, the ninjastar will fly left instead of right
    if(data.entities.nacho.direction === "left"){
      this.velX = 9;
      this.frames = [new Sprite(data.tileSet, 570, 548, 72, 45), new Sprite(data.tileSet, 648, 548, 80, 45)];
    }else{
      this.velX = -9;
      this.frames = [new Sprite(data.tileSet, 648, 504, 72, 45),
              new Sprite(data.tileSet, 570, 504, 80, 45)];
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

export const FireStar = (data, x, y) => {
  let ninjastar = new NinjaStar("ninjastar", data, x, y);
  data.entities.starCounter.value -=1;
  var ninjaSound = data.sounds.ninjaSound.cloneNode();
  ninjaSound.volume = 0.3;
  ninjaSound.play();
  data.entities.ninjastars.push(ninjastar);
};

export default FireStar;
