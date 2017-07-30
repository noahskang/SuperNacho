# SuperNacho
Accessible Javascript game inspired by Nacho Libre.

## Background

SuperNacho is a side-scrolling web game. Users control a "nacho" who tries to survive as long as possible, dodging enemy corn, firing chips, and powering-up with toast for as long as possible.

## Functionality & MVP

Basic gameplay:
- Nacho can JUMP and FIRE CHIPS.
- Collision with walking CORN results in game end
- CORN can be destroyed with CHIPS.
- Collision with TOAST results in temporary invulnerability

Project will also include:
- [ ] a production Readme
- [ ] landing page with "START GAME" button and game instructions.

## Wireframes
[landing page](http://res.cloudinary.com/noah-s-kang/image/upload/v1501450541/Screen_Shot_2017-07-30_at_2.33.32_PM_ugnkdn.png)

[game design inspiration](

  )

## Architecture and Technologies

- Vanilla Javascript: game logic and event handlers
- HTML 5 Canvas / EaselJs / tweenJS: animations, backgrounds, shape rendering
- Use minified version of jQuery to detect user input.
- Yuki-createJS - allows EaselJS to work with webpack bundler.
- Webpack to bundle and serve up scripts.

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

**Day 2:**

**Day 3:**

**Day 4:**

## Bonus Features

- [ ] Mobile Portability
- [ ] Multiple Levels?
- [ ] Bonus feature 3

## Basic Gameplay notes
- Firing Eggs to destroy corn
- Collision with walking corn results in game end
- Respawn Points (e.g. http://playbiolab.com/)
- Basic movements: Jump, shoot, arrow keys
