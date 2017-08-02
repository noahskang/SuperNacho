// import Chip from "./chip";
// import Corn from "./corn";
import Nacho from "./nacho";
import Background from "./background";
// import Score from "./score";
import Sprite from './sprite';

// this class contains and initializes ALL of the entities for the game.
const Entities = {

  init(data){

    let bgSprite = new Sprite(data.tileSet, 72, 288, 432, 324);
    let background = new Background("bg", bgSprite, 0, 0, 768, 600);

    let nachoSprite = new Sprite(data.tileSet, 0, 0, 24, 24);
    let nacho = new Nacho("nacho", nachoSprite, 40, 10, 64, 64);

    data.entities.background = background;
    data.entities.nacho = nacho;
  }
};

export default Entities;
