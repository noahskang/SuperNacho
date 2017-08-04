const Movement = {
  update: data => {
    nacho(data);
    ninjastar(data);
    luchas(data);
  },
};

const nacho = data => {
  data.entities.nacho.currentState.movement(data);
};

const luchas = data => {
  data.entities.luchaArray.forEach(lucha=>{
    lucha.currentState.movement(data);
  });
};

const ninjastar = data => {
  // first, remove all the ninjastars that have gone off the edge of the screen.
  data.entities.ninjastars = data.entities.ninjastars.filter(star => {
    return star.x > data.viewport.vX && (star.x+star.w) < (data.viewport.vX + 768);
  });
  data.entities.ninjastars.forEach(star=>{
    star.movement();
  });
};

export default Movement;
