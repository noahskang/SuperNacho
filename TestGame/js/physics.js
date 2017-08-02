var Physics = {
  update: function(data){
    Physics.helpers.gravity(data.entities.nacho);
    Physics.collisionDetection(data);
  },

  collisionDetection: function (data) {
        var nacho = data.entities.nacho;

        var entityCollisionCheck = function (entity) {
          // check to see if nacho image intersects with the entity image.
            if (nacho.x < entity.x + entity.w &&
                nacho.x + nacho.w > entity.x &&
                nacho.y < entity.y + entity.h &&
                nacho.h + nacho.y > entity.y) {
                //Collision Occured
                Physics.handleCollision(data, entity);
            }
        };

        data.entities.wallsArray.forEach(function (wall) {
            entityCollisionCheck(wall);
        });

        data.entities.coinsArray.forEach(function(coin){
          entityCollisionCheck(coin);
        });
    },

    handleCollision: function (data, entity) {
        var nacho = data.entities.nacho;

        if (entity.type === "wall") {
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

        if (entity.type === "coin") {
          var coinsArray = data.entities.coinsArray;
          var coinSound = entity.sound.cloneNode();
          var index = coinsArray.indexOf(entity);

          data.entities.score.value += 1;

          coinSound.play();
          coinsArray.splice(index, 1);
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
