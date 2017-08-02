let Entities = {
  init: function(data){
    // create background
    let background = {
      // requires x, y, width, height, and sprite image location
      // so we use a helper...
      // we need to calculate locations of image -- the starting point, and how wide and tall it is
      sprite: new Entities.helpers.Sprite(data.spriteSheet, 0, 52, 383, 300),
      x: 0,
      y: 0,
      w: 768,
      h: 600
    };

    var nacho = new Entities.helpers.Nacho(data.spriteSheet, 150, 10, 64, 64);

    var score = new Entities.helpers.Score(290, 70);

    let coinLocations = [[269, 120], [317, 120], [365, 120], [413, 120], [461, 120],
                             [221, 210], [269, 210], [317, 210], [365, 210], [413, 210], [461, 210], [509, 210],
                             [221, 300], [269, 300], [317, 300], [365, 300], [413, 300], [461, 300], [509, 300]];

    var wallLocations = [[0, 0, 4, 600], [0, 500, 768, 150],
   [225, 365, 336, 216], [767, 0, 4, 600]];

    data.entities = {};

// adding our new entities to our game object.
    data.entities.background = background;
    data.entities.nacho = nacho;
    data.entities.coinsArray = [];
    data.entities.wallsArray = [];
    data.entities.score = score;

    // loop through the locations to create a new coin for each location element.
    coinLocations.forEach(function(location){
        data.entities.coinsArray.push(new Entities.helpers.Coin(data.spriteSheet, location[0], location[1], 30, 42));
    });

    wallLocations.forEach(function (location) {
      data.entities.wallsArray.push(new Entities.helpers.Wall(location[0], location[1], location[2], location[3]));
    });
  },
  // we can use this helper repeatedly.
  helpers: {
    Sprite: function(img, srcX, srcY, srcW, srcH){
      this.img = img;
      this.srcX = srcX;
      this.srcY = srcY;
      this.srcW = srcW;
      this.srcH = srcH;
    },

    Nacho: function(img, x, y, w, h){
      var self = this;
      this.jumpSound = new Audio("audio/supernacho_jump.mp3");
      this.sprite = new Entities.helpers.Sprite(img, 0, 0, 24, 24);
      this.sprite = new Entities.helpers.Sprite(img, 0, 0, 24, 24);
      this.spriteAnimations = {
        walkRight: {
                  frames: [new Entities.helpers.Sprite(img, 24, 0, 24, 24), new Entities.helpers.Sprite(img, 48, 0, 24, 24),
                          new Entities.helpers.Sprite(img, 72, 0, 24, 24)],
                  currentFrame: 0
              },
        walkLeft: {
            frames: [new Entities.helpers.Sprite(img, 51, 26, 24, 24), new Entities.helpers.Sprite(img, 26, 25, 24, 24),
                    new Entities.helpers.Sprite(img, 0, 26, 24, 24)],
            currentFrame: 0
        },
        standRight: new Entities.helpers.Sprite(img, 0, 0, 24, 24),
        standLeft: new Entities.helpers.Sprite(img, 75, 27, 24, 24),
        jumpLeft: new Entities.helpers.Sprite(img, 99, 25, 24, 24),
        jumpRight: new Entities.helpers.Sprite(img, 98, 0, 28, 24)
      };
      this.states = {
        // clone node -- so that if we press it multiple times before the sound is finished, it will still create a new sound
        jumping: {
            movement: function (data) {
                if (self.velY === 0) {
                    var jumpSound = self.jumpSound.cloneNode();
                    jumpSound.play();
                    self.velY -= 23;
                }
            },
            animation: function (data) {
                if (self.direction === "right") {
                    self.sprite = self.spriteAnimations.jumpRight;
                } else {
                    self.sprite = self.spriteAnimations.jumpLeft;
                }
            }
        },
        standing: {
          movement: function (data) {
            return;
          },
          animation: function(data){
            if (self.direction === "right") {
                self.sprite = self.spriteAnimations.standRight;
            } else {
                self.sprite = self.spriteAnimations.standLeft;
            }
          }
        },
        walking: {
          movement: function (data) {
            if (self.direction === "right") {
                self.x += self.velX;
            } else {
                self.x -= self.velX;
            }
          },
          animation: function (data) {
            if (self.direction === "right") {
                if (data.animationFrame % 5 === 0) {
                    self.sprite = self.spriteAnimations.walkRight.frames[self.spriteAnimations.walkRight.currentFrame];
                    self.spriteAnimations.walkRight.currentFrame++;

                    if (self.spriteAnimations.walkRight.currentFrame > 2) {
                        self.spriteAnimations.walkRight.currentFrame = 0;
                    }
                }
            } else {
                if (data.animationFrame % 5 === 0) {
                    self.sprite = self.spriteAnimations.walkLeft.frames[self.spriteAnimations.walkLeft.currentFrame];
                    self.spriteAnimations.walkLeft.currentFrame++;

                    if (self.spriteAnimations.walkLeft.currentFrame > 2) {
                        self.spriteAnimations.walkLeft.currentFrame = 0;
                    }
                }
            }
          }
        }
      };

      this.currentState = self.states.standing;
      this.direction = "right";
      this.velY = 0;
      this.velX = 3.8;
      this.coins = 0;
      this.x = x;
      this.y = y;
      this.w = w;
      this.h = h;
    },

    Wall: function (x, y, w, h){
      this.type = "wall";
      this.x = x;
      this.y = y;
      this.w = w;
      this.h = h;
    },

    Score: function (x, y) {
      this.value = 0;
      this.x = x;
      this.y = y;
      this.size = "25px";
      this.font = "PixelEmulator";
      this.color = "white";
    },

// coin class that we can use to create multiple coins.
    Coin: function(img, x, y, w, h){
      let self = this;

      this.type = "coin";
      this.sound = new Audio("audio/supernacho_coin.mp3");
      this.sprite = new Entities.helpers.Sprite(img, 172, 22, 31, 23);
      this.spriteAnimations = {
        spin: {
            frames: [
              new Entities.helpers.Sprite(img, 140, 22, 31, 23),
              new Entities.helpers.Sprite(img, 172, 22, 31, 23),
              new Entities.helpers.Sprite(img, 204, 22, 31, 23),
            ],
            // currentFrame keeps track of which version of the nacho is currently bein displayed
            currentFrame: 0
        }
      };

      this.state = {
        spinning: {
          animation: function(data){
            // every 13 frames, run... change image.
            if(data.animationFrame % 23 === 0){
              // set the sprite to the version of the nacho at the index currentFrame
              self.sprite = self.spriteAnimations.spin.frames[self.spriteAnimations.spin.currentFrame];
              // increment currentFrame so that on the next call, we'll render the next version of the Nacho
              self.spriteAnimations.spin.currentFrame++;

              if(self.spriteAnimations.spin.currentFrame > 2){
                self.spriteAnimations.spin.currentFrame = 0;
              }
            }
          }
        }
      };

      this.currentState = self.state.spinning;
      this.x = x;
      this.y = y;
      this.w = w;
      this.h = h;
    }
  }
};
