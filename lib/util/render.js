const Render = {
  init: data =>{
    Render.helpers.drawEntity(data.entities.background, data.canvas.bgCtx);
  },

  // we draw chips on update method because we need to re render any time our character runs through a chip. (dynamic update necessary)
  update: data=>{
    // we clear the WHOLE screen every time.( we could just do part)
    data.canvas.fgCtx.clearRect(0, 0, data.canvas.fgCanvas.width, data.canvas.fgCanvas.height);
    // Render.helpers.drawText(data.entities.score, data.canvas.fgCtx);

    // make sure the second argument is WHERE i want to draw him
    Render.helpers.drawEntity(data.entities.nacho, data.canvas.fgCtx);

    data.entities.chipsArray.forEach((chip)=>{
      Render.helpers.drawEntity(chip, data.canvas.fgCtx);
    });
  },

  helpers: {
    // now when we call image, we can just call drawEntity, and the image will be drawn.
    drawEntity: (entity, ctx)=>{

// add logic so that the render ONLY draws object that are actually in the viewport screen.
// The default width of my game itself will be like.... 15500px. a little bit more than 20 * the width of teh viewport.
// objects will have an x position on the game.
// the viewport is moving right at a vX of 0.5... so the viewport's x position will be 1. then 1.5. then 1.2.
// the viewport isn't really a square. it's better to think of it as a set of coordinates that are scrolling across our map, telling us what we want to render at the given moment.

      // we set the sprite, and the source x,
      ctx.drawImage(entity.sprite.img,
                entity.sprite.srcX, entity.sprite.srcY,
                entity.sprite.srcW, entity.sprite.srcH,
                entity.x, entity.y,
                entity.w, entity.h);
    },

    drawText: (text, ctx)=>{
      ctx.font = text.size + " " + text.font;
      ctx.fillStyle = text.color;
      ctx.fillText("Chips:" + " " + text.value, text.x, text.y);
    }
  }
};

export default Render;
