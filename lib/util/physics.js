const Physics = {
  update: function(data){
    Physics.helpers.gravity(data.entities.nacho);
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
      entityCollisionCheck(element);
    });

    data.entities.wallsArray.forEach(function (wall) {
      entityCollisionCheck(wall);
    });

    data.entities.chipsArray.forEach(function(chip){
      entityCollisionCheck(chip);
    });
  },

    handleCollision: function (data, entity) {
      let nacho = data.entities.nacho;

      if (["wall", "gound", "underground", "rightcorner", "leftcorner", "box", "floatleft", "floatright", "floatmiddle"].includes(entity.type)){
        //Left Side Wall Collision
        if (nacho.x < entity.x && nacho.y >= entity.y) {
          nacho.x = entity.x - nacho.w;
        }

        //Right Side Wall Collision
        if (nacho.x > entity.x && nacho.y >= entity.y) {
          nacho.x = entity.x + entity.w;
        }

        //Top of Wall Collision
        if (nacho.y < entity.y && (nacho.x + nacho.w) > entity.x + 10 &&
          nacho.x < (entity.x + entity.w) - 10 && nacho.velY >= 0) {
         nacho.currentState = nacho.states.standing;
          nacho.y = entity.y - nacho.h;
          nacho.velY = 0;
        }
      }

      if (entity.type === "chip") {
        let chipsArray = data.entities.chipsArray;
        let chipSound = entity.sound.cloneNode();
        let index = chipsArray.indexOf(entity);

        data.entities.score.value += 1;

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
