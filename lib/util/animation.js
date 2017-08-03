const Animation = {
  update: data => {
    nacho(data);
    chips(data);
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

export default Animation;
