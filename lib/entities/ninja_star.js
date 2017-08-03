import Entity from './entity';
import Sprite from './sprite';

class NinjaStar extends Entity{
  constructor(type, data, x, y){
    let w = 15;
    let h = 15;

    let sprite =  new Sprite(data.spriteSheet, 172, 22, 31, 23);

    super(type, sprite, x, y, w, h);

    this.sound = new Audio("audio/pitch.mp3");

    this.velX = -9;
    // if nacho is facing left, the ninjastar will fly left instead of right
    if(data.entities.nacho.direction === "left"){
      this.velX = 9;
    }
    this.x=x;
    this.w = w;
  }
  movement(data){
    this.x -= this.velX;
  }
}

export const FireStar = (data, x, y) => {
  console.log("Is this getting hit?");
  let ninjastar = new NinjaStar("ninjastar", data, x, y);
  data.entities.ninjastars.push(ninjastar);
};

export default FireStar;
