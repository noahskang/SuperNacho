const Movement = {
  update: function (data) {
        Movement.nacho(data);
    },

    nacho: function (data) {
        data.entities.nacho.currentState.movement(data);
    }
};

export default Movement;
