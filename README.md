# SuperNacho
Side-scrolling Javascript game inspired by SuperMario with a Nacho-libre twist.

## Background

SuperNacho picks up nachos, destroys enemies with flaming nacho-stars, and tries to survive multiple levels. Hitting an obstacle (e.g. cactus) or an enemy luchador results in loss of life.

## CONTROLS:

| Action | Key Input |
|--------| ----------|
| Movement | Arrow keys |
| Fire nacho-star | Spacebar |

## Architecture and Technologies

- Javascript game logic and event handlers
- HTML 5 Canvas: animations, backgrounds, shape rendering
- Use minified version of jQuery to detect user input.
- Webpack to bundle and serve up scripts.

![landing page](http://res.cloudinary.com/noah-s-kang/image/upload/c_scale,w_667/v1501871321/Screen_Shot_2017-08-04_at_11.22.16_AM_tbmku3.png)

##Game Architecture

###Map Creator###
To randomly generate levels, I created a map-creating file that can read a double-nested "level" array. Each level was made up of screens, which I inserted in a random sequence into the level.

![level example](http://res.cloudinary.com/noah-s-kang/image/upload/c_scale,w_551/v1501871427/Screen_Shot_2017-08-04_at_11.30.20_AM_traaxs.png)

```Javascript
// rotate the array a random number of times to create unpredictable maps
const rotate = (array, count) => {
  while(count>0){
    let temp = array.shift();
    array.push(temp);
    count--;
  }
  return array;
};

export const One = () => {
  let screenorder = [screen_two, screen_three, screen_four, screen_five, screen_six, screen_seven];
  screenorder = rotate(screenorder, Math.floor(Math.random()*6));
  screenorder.unshift(screen_one);
  screenorder.push(screen_one);
  return screenorder;
};
```

The map creator reads through the string and then renders entities based on the string it reads.

```javascript
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
```
```Javascript
export class Ground extends Entity{
  constructor(type, spritesheet, x, y){
    let w = 24;
    let h = 35;
    let sprite =  new Sprite(spritesheet, 216, 72, 72, 72);

    super(type, sprite, x, y, w, h);

  }
}
```

## Bonus Features
- [ ] Add advanced styling - I used a temple runner sprite, but I eventually want to update this with original artwork.
- [ ] Add respawn points (e.g. http://playbiolab.com/)
- [ ] Mobile Portability
