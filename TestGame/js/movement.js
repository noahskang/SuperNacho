var Movement = {
  update: function(data){
    Movement.nacho(data);
  },
  nacho: function(data){
    data.entities.nacho.currentState.movement(data);
  }
};
