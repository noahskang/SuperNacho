const Animation = {
  update: data => {
    nacho(data);
    chips(data);
    luchas(data);
  },
};

const nacho = data => {
  data.entities.nacho.currentState.animation(data);
};

const chips = data => {
  data.entities.chipsArray.forEach((chip)=>{
    chip.currentState.animation(data);
  });
};

const luchas = data => {
  data.entities.luchaArray.forEach((lucha)=>{
    lucha.currentState.animation(data);
  });
};

export default Animation;
