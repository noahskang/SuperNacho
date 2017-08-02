let Input =  {
  init: function(data) {
    // get information on what key is pressed
      var self = this;

      // we only want to create ONE of these jquery objects. we don't need to recreate these on every update.
      $(window).on("keydown", function (event) {
          self.helpers.down[event.keyCode] = true;
          // delete self.helpers.pressed[event.keyCode];
      });

      $(window).on("keyup", function () {
          delete self.helpers.down[event.keyCode];
          delete self.helpers.pressed[event.keyCode];
      });
    },
    update: function(data){
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
    },
    helpers: {
      // these helpers are basic methods that tell us what key is pressed.
      isDown: function(code){
        return Input.helpers.down[code];
      },

      isPressed: function(code) {
        if(Input.helpers.pressed[code]){
          return false;
        } else if (Input.helpers.down[code]) {
          return (Input.helpers.pressed[code] ===true);
        }

        return false;
      },

      down: {},
      pressed: {}
    }
};

// all of our modules have an init and update function
// init gets called one time at beginning...
// update gets called at every tick.
