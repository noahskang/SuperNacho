let Render = {
  init: function(data){
    Render.helpers.drawEntity(data.entities.background, data.canvas.bgCtx);
  },

  // we draw coins on update method because we need to re render any time our character runs through a coin. (dynamic update necessary)
  update: function(data){
    // we clear the WHOLE screen every time.( we could just do part)
    data.canvas.fgCtx.clearRect(0, 0, data.canvas.fgCanvas.width, data.canvas.fgCanvas.height);

    // make sure the second argument is WHERE i want to draw him
    Render.helpers.drawEntity(data.entities.nacho, data.canvas.fgCtx);

    data.entities.coinsArray.forEach(function(coin){
      Render.helpers.drawEntity(coin, data.canvas.fgCtx);
    });
  },

  helpers: {
    // now when we call image, we can just call drawEntity, and the image will be drawn.
    drawEntity: function(entity, ctx){
      // we set the spirte, and the source x,

      ctx.drawImage(entity.sprite.img,
                entity.sprite.srcX, entity.sprite.srcY,
                entity.sprite.srcW, entity.sprite.srcH,
                entity.x, entity.y,
                entity.w, entity.h);
    }
  }
};
