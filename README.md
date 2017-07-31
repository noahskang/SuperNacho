# SuperNacho
Side-scrolling Javascript game inspired by Nacho Libre.

## Background

SuperNacho is a side-scrolling web game. Users control a "nacho" who tries to survive as long as possible, dodging enemy corn, firing chips, and powering-up with toast for as long as possible.

## Functionality & MVP

Basic gameplay:
- Nacho can JUMP, move right nad left, and game Autoscrolls to the left.
- Collision with walking CORN results in game end. Nacho can FIRE CHIPS to destroy corn.
- Objects are animated to stimulate movement.
- Collision with TOAST results in temporary invulnerability

Project will also include:
- [ ] a production Readme
- [ ] landing page with "START GAME" button and game instructions.

## Wireframes
![landing page](http://res.cloudinary.com/noah-s-kang/image/upload/v1501450541/Screen_Shot_2017-07-30_at_2.33.32_PM_ugnkdn.png)


![game design inspiration](http://res.cloudinary.com/noah-s-kang/image/upload/v1501454727/screenshotmodified_jyrsis.jpg)

*I will replace the above with a screenshot of my own game*

## Architecture and Technologies

- Vanilla Javascript: game logic and event handlers
- HTML 5 Canvas / EaselJs / tweenJS: animations, backgrounds, shape rendering
- Use minified version of jQuery to detect user input.
- Yuki-createJS - allows EaselJS to work with webpack bundler.
- Webpack to bundle and serve up scripts.
- Potentially use TweenJS to facilitate animations

**basic game architecture**
- `map.js` this script will handle logic for rendering `easel.js` objects and rendering them to DOM as they come into the view screen.
- OOP structuring for individual elements:
  - `nacho.js`
  - `corn.js` (enemy)
  - `chip.js` (projectile weapon)
  - `toast.js` (powerup)
  - `cloud.js`

**Implementation Heads-Ups**
- Randomness: Use math.random() to generate enemies and objects with unpredictability.
- Garbage collection: After objects go out of sight of canvas to the left, delete them so that memory doesn't accrue unnecessary information. // Instead, I can just Render what is currently in the view port.
- OOP: nacho, corn, eggs, clouds, etc. are all separate objects.

## Implementation Timeline

**Day 1:**
Configure node modules, webpack.
Write basic html entry file.
render basic game board.
get png images/sprites for main avatar and background.

**Day 2:**
Create Nacho object, render Nacho to the canvas, and allow nacho to jump at user command.

**Day 3:**
Create CORN object.
Create collision logic.
Create chip projectile weapons and firing logic.
Collision with TOAST results in temporary invulnerability

**Day 4:**
Animate objects to stimulate movement use Sprite sheets.
Polish up game so that user can interact with it.
Style the frontend attractively.

## Bonus Features
- [ ] Add advanced sound effects (chip crunching, etc.)
- [ ] Add respawn points (e.g. http://playbiolab.com/)
- [ ] Mobile Portability
- [ ] Add advanced graphic styling.
