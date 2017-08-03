const Movement = {
  update: data => {
    nacho(data);
  },
};

const nacho = data => {
  data.entities.nacho.currentState.movement(data);
};

export default Movement;
