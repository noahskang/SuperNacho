import FireStar from '../entities/ninja_star';

const Input = {
  init(data){
    var self = this;

    $(window).on("keydown", function (event) {
      self.helpers.down[event.keyCode] = true;
    });

    $(window).on("keyup", function () {
      delete self.helpers.down[event.keyCode];
      delete self.helpers.pressed[event.keyCode];
    });
  },

  update(data) {
    var nacho = data.entities.nacho;

    //Left Arrow
    if (Input.helpers.isDown(37)) {
      if (nacho.velY === 0) {
        nacho.currentState = nacho.states.walking;
      } else {
        nacho.x -= nacho.velX;
      }

      nacho.direction = "left";
    }

    //Right Arrow
    if (Input.helpers.isDown(39)) {
      if (nacho.velY === 0) {
        nacho.currentState = nacho.states.walking;
      } else {
        nacho.x += nacho.velX;
      }

      nacho.direction = "right";
    }

    //Up Arrow
    if (Input.helpers.isDown(38)) {
      nacho.currentState = nacho.states.jumping;
    }

    // Spacebar
    if (Input.helpers.isDown(32)) {
      if(data.canFire && data.entities.starCounter.value >0){
        FireStar(data, nacho.x+20, nacho.y+10);
        data.canFire = false;
        // using a time out to space out firing of ninjastars
        setTimeout(()=>{data.canFire = true;}, 300);
      }
    }
  },

  helpers: {
    isDown(code) {
      return Input.helpers.down[code];
    },

    isPressed(code) {
      // these helpers are basic methods that tell us what key is pressed.
      if (Input.helpers.pressed[code]) {
        return false;
      } else if (Input.helpers.down[code]) {
        return (Input.helpers.pressed[code] = true);
      }

      return false;
    },

    down: {},
    pressed: {}
  }
};

export default Input;
