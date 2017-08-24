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

    let nacho = new Nacho("nacho", data.tileSet, 40, 10, 64, 64);

    let score = Score(55, 60);
    let starCounter = Score(200, 60);

    let ninjastars = [];

    data.entities.background = background;
    data.entities.nacho = nacho;
    // data.entities.wallsArray = [];
    data.entities.score = score;
    data.entities.starCounter = starCounter;
    data.entities.ninjastars = ninjastars;
    data.entities.chipsArray = data.entities.chipsArray || [];

  }
};

export default Entities;
