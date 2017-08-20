const Animation = {
  update: data => {
    nacho(data);
    chips(data);
    luchas(data);
    ninjastars(data);
  },
};

const nacho = data => {
  data.entities.nacho.currentState.animation(data);
};

const chips = data => {
  data.entities.chipsArray.forEach((chip)=>{
    if(((chip.x + chip.w >= data.viewport.vX && chip.x <= data.viewport.vX + data.viewport.width)) && ((chip.y + chip.h >= data.viewport.vY && chip.y + chip.h <= data.viewport.vY + data.viewport.height))){
      chip.currentState.animation(data);
    }
  });

};

const luchas = data => {
  data.entities.luchaArray.forEach((lucha)=>{
    lucha.currentState.animation(data);
  });
};

const ninjastars = data => {
  data.entities.ninjastars.forEach((star)=>{
    star.animation(data);
  });
};

export default Animation;
