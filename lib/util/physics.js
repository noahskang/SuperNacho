const Physics = {
  update: function(data){
    Physics.helpers.gravity(data.entities.nacho);

    data.entities.luchaArray.forEach(lucha=>{
      Physics.helpers.gravity(lucha);
    });

    Physics.collisionDetection(data);
  },

  collisionDetection: function (data) {
    let nacho = data.entities.nacho;

    let entityCollisionCheck = function (entity) {
      // check to see if nacho image intersects with the entity image.
      if (nacho.x < entity.x + entity.w &&
        nacho.x + nacho.w > entity.x &&
        nacho.y < entity.y + entity.h &&
        nacho.h + nacho.y > entity.y) {
        //Collision Occured
        Physics.handleCollision(data, entity);
      }

    };

    data.entities.map.forEach(function(element){
      entityCollisionCheck(element, data.entities.nacho);
    });

    data.entities.chipsArray.forEach(function(chip){
      entityCollisionCheck(chip);
    });

    data.entities.luchaArray.forEach(function(lucha){
      entityCollisionCheck(lucha);
    });
  },

    handleCollision: function (data, entity, character:

      if (["wall", "ground", "underground", "rightcorner", "leftcorner", "box", "floatleft", "floatright", "floatmiddle", "lucha"].includes(entity.type)){
        //Left Side Wall Collision
        if (character.x < entity.x && character.y >= entity.y) {
          character.x = entity.x - character.w;
        }

        //Right Side Wall Collision
        if (character.x > entity.x && character.y >= entity.y) {
          character.x = entity.x + entity.w;
        }

        //Top of Wall Collision
        if (character.y < entity.y && (character.x + character.w) > entity.x + 10 &&
          character.x < (entity.x + entity.w) - 10 && character.velY >= 0) {
         character.currentState = character.states.standing;
          character.y = entity.y - character.h;
          character.velY = 0;
        }
      }

      if (entity.type === "chip" && character.type="nacho") {
        let chipsArray = data.entities.chipsArray;
        let index = chipsArray.indexOf(entity);

        data.entities.score.value += 10;
        data.entities.starCounter.value +=1;

        let chipSound = data.sounds.chipSound.cloneNode();
        chipSound.play();
        chipsArray.splice(index, 1);
      }
    },

  helpers: {
    gravity: function(entity){
      // this will give us acceleration downwards
      entity.velY += 1.2;
      entity.y += entity.velY;
    }
  }

};

export default Physics;
