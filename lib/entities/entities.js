import Chip from "./chip";
// import Corn from "./corn";
import Nacho from "./nacho";
import Wall from "./walls";
import Background from "./background";
import Score from "./score";
import Sprite from './sprite';

// this class contains and initializes ALL of the entities for the game.
const Entities = {

  init(data){

    let background = new Background("bg", data.tileSet, 0, 0, 768, 600);

    let nacho = new Nacho("nacho", data.spriteSheet, 40, 10, 64, 64);

    // let wallLocations = [[data.viewport.vX, 0, 4, 600], [767+data.viewport.vX, 0, 4, 600]];

    let score = Score(290, 70);

    let chipLocations = [[269, 120], [317, 120], [365, 120], [413, 120], [461, 120],
                             [221, 210], [269, 210], [317, 210], [365, 210], [413, 210], [461, 210], [509, 210],
                             [221, 300], [269, 300], [317, 300], [365, 300], [413, 300], [461, 300], [509, 300]];

    data.entities.background = background;
    data.entities.nacho = nacho;
    // data.entities.wallsArray = [];
    data.entities.score = score;
    data.entities.chipsArray = data.entities.chipsArray || [];

  // loop through locations to create a new coin for each location element
    chipLocations.forEach(function (location) {
      data.entities.chipsArray.push(new Chip("chip", data.spriteSheet, location[0], location[1], 30, 42));
    });

    // wallLocations.forEach(function (location) {
      // data.entities.wallsArray.push(Wall(location[0], location[1], location[2], location[3]));
    // });
  }
};

export default Entities;
