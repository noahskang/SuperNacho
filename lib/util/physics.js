const Physics = {
  update: function(data){
    Physics.helpers.gravity(data.entities.nacho);

    data.entities.luchaArray.forEach(lucha=>{
      Physics.helpers.gravity(lucha);
    });

    Physics.wallDetection(data);
    Physics.collisionDetection(data);
  },

  wallDetection(data){
    if(data.entities.nacho.x < data.viewport.vX+5){
      data.entities.nacho.x+=4;
    }
    if(data.entities.nacho.x+10 > data.viewport.vX+768){
      data.viewport.vX+2;
      data.entities.nacho.x-=3;
    }
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
        if (lucha.x < entity.x + entity.w - 10 &&
          lucha.x + lucha.w - 10 > entity.x &&
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
    });

    data.entities.luchaArray.forEach(function(lucha){
      nachoCollisionCheck(lucha);
    });
  },

  handleLuchaCollision: function(data, entity, lucha){

    if (["ground", "underground", "rightcorner", "leftcorner", "box", "floatleft", "floatright", "floatmiddle", "nacho"].includes(entity.type)){
      //Left Side Entity Collision
      if (lucha.x < entity.x && lucha.y >= entity.y) {
        if(entity.type==="nacho"){
          data.fatality = true;
        } else {
          lucha.x = entity.x - lucha.w;
        }
      }

      //Right Side Entity collision
      if (lucha.x > entity.x && lucha.y >= entity.y) {
        if(entity.type==="nacho"){
          data.fatality = true;
        } else {
          lucha.x = entity.x + entity.w;
        }
      }

      //Top of Entity Collision
      if (lucha.y < entity.y && (lucha.x + lucha.w) > entity.x + 10 &&
        lucha.x < (entity.x + entity.w) - 10 && lucha.velY >= 0) {
        lucha.y = entity.y - lucha.h;
        lucha.velY = 0;
      }
    }

    if (entity.type === "ninjastar") {
      let luchaIndex = data.entities.luchaArray.indexOf(lucha);
      let ninjastars = data.entities.ninjastars;
      let starindex = ninjastars.indexOf(entity);
      let smashSound = data.sounds.smashSound.cloneNode();
      smashSound.volume = 0.4;
      smashSound.play();

      data.entities.score.value += 10;

      data.entities.luchaArray.splice(luchaIndex, 1);
      data.entities.ninjastars.splice(starindex, 1);
    }
  },

  handleNachoCollision: function (data, entity) {
    let nacho = data.entities.nacho;

    if (["ground", "underground", "rightcorner", "leftcorner", "box", "floatleft", "floatright", "floatmiddle", "lucha", "cactus"].includes(entity.type)){
      //collide with left side of entity
      if (nacho.x < entity.x && nacho.y >= entity.y-10) {
        if(["lucha", "cactus"].includes(entity.type)){
          data.fatality = true;
        } else {
          nacho.x = entity.x - nacho.w;
        }
      }

      //collide with right side of entity
      if (nacho.x > entity.x && nacho.y >= entity.y-10) {
        if(["lucha", "cactus"].includes(entity.type)){
          data.fatality = true;
        } else {
          nacho.x = entity.x + entity.w;
        }
      }

      //Top Collision
      if (nacho.y < entity.y && (nacho.x + nacho.w) > entity.x + 10 &&
        nacho.x < (entity.x + entity.w) - 10 && nacho.velY >= 0) {
        if(entity.type === "lucha"){
          nacho.currentState = nacho.states.jumping;
          nacho.velY = -20;
        }
        else if(entity.type === "cactus"){
          data.fatality = true;
        }else {
          nacho.currentState = nacho.states.standing;
          nacho.y = entity.y - nacho.h;
          nacho.velY = 0;
        }
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
      entity.velY += 1.4;
      entity.y += entity.velY;
    }
  }

};

export default Physics;
