let Animation = {
  update: function(data){
    Animation.nacho(data);
    Animation.coins(data);
  },

  nacho: function(data){
    data.entities.nacho.currentState.animation(data);
  },

  coins: function(data){
    data.entities.coinsArray.forEach(function(coin){
      coin.currentState.animation(data);
    });
  }
};
