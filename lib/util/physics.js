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

    let nachoCollisionCheck = function (entity) {
      // check to see if nacho image intersects with the entity image.
      if (nacho.x < entity.x + entity.w &&
        nacho.x + nacho.w > entity.x &&
        nacho.y < entity.y + entity.h &&
        nacho.h + nacho.y > entity.y) {
        //Collision Occured
        Physics.handleNachoCollision(data, entity);
      }

    };

    let luchaCollisionCheck = function(entity){
      let luchaArray = data.entities.luchaArray;
      luchaArray.forEach((lucha) => {
        if (lucha.x < entity.x + entity.w &&
          lucha.x + lucha.w > entity.x &&
          lucha.y < entity.y + entity.h &&
          lucha.h + lucha.y > entity.y) {
          //Collision Occured
          Physics.handleLuchaCollision(data, entity, lucha);
        }
      });
    };

    data.entities.map.forEach(function(element){
      nachoCollisionCheck(element);
      luchaCollisionCheck(element);
    });

    data.entities.chipsArray.forEach(function(chip){
      nachoCollisionCheck(chip);
    });

    data.entities.ninjastars.forEach(function(star){
      luchaCollisionCheck(star);
    })

    data.entities.luchaArray.forEach(function(lucha){
      nachoCollisionCheck(lucha);
    });
  },

  handleLuchaCollision: function(data, entity, lucha){

    if (["ground", "underground", "rightcorner", "leftcorner", "box", "floatleft", "floatright", "floatmiddle", "nacho"].includes(entity.type)){
      //Left Side Entity Collision
      if (lucha.x < entity.x && lucha.y >= entity.y) {
        lucha.x = entity.x - lucha.w;
      }

      //Right Side Entity collision
      if (lucha.x > entity.x && lucha.y >= entity.y) {
        lucha.x = entity.x + entity.w;
      }

      //Top of Entity Collision
      if (lucha.y < entity.y && (lucha.x + lucha.w) > entity.x + 10 &&
        lucha.x < (entity.x + entity.w) - 10 && lucha.velY >= 0) {
        lucha.y = entity.y - lucha.h;
        lucha.velY = 0;
      }
    }

    if (entity.type === "ninjastar") {
      console.log("collision occurred!");
      let luchaIndex = data.entities.luchaArray.indexOf(lucha);
      let ninjastars = data.entities.ninjastars;
      let starindex = ninjastars.indexOf(entity);

      data.entities.score.value += 10;

      data.entities.luchaArray.splice(luchaIndex, 1);
      data.entities.ninjastars.splice(starindex, 1);
    }
  },

  handleNachoCollision: function (data, entity) {
    let nacho = data.entities.nacho;

    if (["ground", "underground", "rightcorner", "leftcorner", "box", "floatleft", "floatright", "floatmiddle", "lucha"].includes(entity.type)){
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
