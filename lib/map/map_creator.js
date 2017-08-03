import * as MapEntities from '../entities/map_elements';
import Chip from "../entities/chip";
// import Corn from "./corn";
import Nacho from "../entities/nacho";
import Wall from "../entities/walls";
import Background from "../entities/background";
import Lucha from '../entities/lucha';
import Score from "../entities/score";
import Sprite from '../entities/sprite';

class Map{
  constructor(level, tileset, spritesheet){
    this.level = level;
    this.tileset = tileset;
    this.spritesheet = spritesheet;
    this.luchaArray = [];

    this.mapElements = [];

    this.chips = [];

    this.level.forEach((screen, i) => {
      // reverse the order of rows here...
      // so that rendering is done bottom to top

      screen.reverse().forEach((row, j) =>{
        let xScreenStart = i*768;

        // each entity is 24 pixels tall. 600/24 equals 24. So the starting 6 position of each entity will be calculated as follows:
        let yPos = (24-j)*24;
        row.split(" ").forEach((el, idx)=>{
          let xPos = xScreenStart + (idx * 24);
          switch(el) {
            case "GR":
              this.createGround(xPos, yPos);
              break;
            case "UG":
              this.createUnderground(xPos, yPos);
              break;
            case "RG":
              this.createRightCorner(xPos, yPos);
              break;
            case "LG":
              this.createLeftCorner(xPos, yPos);
              break;
            case "CA":
              this.createCactus(xPos, yPos);
              break;
            case "CH":
              this.createChip(xPos, yPos);
              break;
            case "SI":
              this.createSign(xPos, yPos);
              break;
            case "BX":
              this.createBox(xPos, yPos);
              break;
            case "FL":
              this.createFloatLeft(xPos, yPos);
              break;
            case "FR":
              this.createFloatRight(xPos, yPos);
              break;
            case "FM":
              this.createFloatMiddle(xPos, yPos);
              break;
            case "LU":
              this.createLucha(xPos, yPos);
              break;
            default:
              break;
          }
        });
      });
    });
  }

  createGround(x, y){
    this.mapElements.push(
      new MapEntities.Ground("ground", this.tileset, x, y)
    );
  }

  createUnderground(x, y){
    this.mapElements.push(
      new MapEntities.Underground("underground", this.tileset, x, y)
    );
  }

  createRightCorner(x, y){
    this.mapElements.push(
      new MapEntities.RightCorner("rightcorner", this.tileset, x, y)
    );
  }

  createLeftCorner(x, y){
    this.mapElements.push(
      new MapEntities.LeftCorner("leftcorner", this.tileset, x, y)
    );
  }

  createCactus(x, y){
    this.mapElements.push(
      new MapEntities.Cactus("cactus", this.tileset, x, y)
    );
  }

  createChip(x, y){
    this.chips.push(
      new Chip("chip", this.spritesheet, x, y-30, 30, 42)
    );
  }

  createSign(x, y){
    this.mapElements.push(
      new MapEntities.Sign("sign", this.tileset, x, y)
    );
  }

  createBox(x, y){
    this.mapElements.push(
      new MapEntities.Box("box", this.tileset, x, y)
    );
  }

  createFloatLeft(x, y){
    this.mapElements.push(
      new MapEntities.FloatLeft("floatleft", this.tileset, x, y)
    );
  }

  createFloatRight(x, y){
    this.mapElements.push(
      new MapEntities.FloatRight("floatright", this.tileset, x, y)
    );
  }

  createFloatMiddle(x, y){
    this.mapElements.push(
      new MapEntities.FloatMiddle("floatmiddle", this.tileset, x, y)
    );
  }

  createLucha(x, y){
    this.luchaArray.push(
      new Lucha("lucha", this.spritesheet, x, y)
    );
  }

  create(data){
    this.mapElements.forEach((element) =>{
      data.entities.map.push(element);
    });
    data.entities.chipsArray = data.entities.chipsArray.concat(this.chips);

    data.entities.luchaArray = data.entities.luchArray || [];
    data.entities.luchaArray = this.luchaArray;
  }

  renderMap(data){
    this.mapElements.forEach((element) =>{
      this.drawEntity(element, data);
    });
  }

  drawEntity(entity, data){
    const viewport = data.viewport;
    const ctx = data.canvas.fgCtx;

    if(((entity.x + entity.w >= viewport.vX && entity.x <= viewport.vX + viewport.width)) && ((entity.y + entity.h >= viewport.vY && entity.y + entity.h <= viewport.vY + viewport.height))){
      ctx.drawImage(
        entity.sprite.img,
        entity.sprite.srcX, entity.sprite.srcY,
        entity.sprite.srcW, entity.sprite.srcH,
        entity.x - viewport.vX, entity.y - viewport.vY,
        entity.w, entity.h);
    }
  }
}


export default Map;
