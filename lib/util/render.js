const Render = {
  init: data =>{
    data.entities.map= [];
    data.entities.bg = [];
    data.entities.chipsArray = data.entities.chipsArray || [];
    data.mapCreator.create(data);
  },

  // we draw chips on update method because we need to re render any time our character runs through a chip. (dynamic update necessary)
  update: data=>{
    // we clear the WHOLE screen every time.( we could just do part)
    data.canvas.fgCtx.clearRect(0, 0, data.canvas.fgCanvas.width, data.canvas.fgCanvas.height);

    data.mapCreator.renderMap(data);

    Render.helpers.drawText(data.entities.score, data.canvas.fgCtx);

    // only draw elements that are in the viewport:

    Render.helpers.drawEntity(data.entities.nacho, data);

    data.entities.chipsArray.forEach((chip)=>{
      Render.helpers.drawEntity(chip, data);
    });
  },

  helpers: {
    // now when we call image, we can just call drawEntity, and the image will be drawn.
    drawEntity: (entity, data)=>{

// add logic so that the render ONLY draws object that are actually in the viewport screen.
      let viewport = data.viewport;
      const ctx = data.canvas.fgCtx;

      if(((entity.x + entity.w >= viewport.vX &&
          entity.x + entity.w <= viewport.vX + viewport.width)) &&
        ((entity.y + entity.h >= viewport.vY &&
          entity.y + entity.h <= viewport.vY + viewport.height))){
        ctx.drawImage(
          entity.sprite.img,
          entity.sprite.srcX, entity.sprite.srcY,
          entity.sprite.srcW, entity.sprite.srcH,
          entity.x, entity.y,
          entity.w, entity.h);
        }
      },

    drawText: (text, ctx)=>{
      ctx.font = text.size + " " + text.font;
      ctx.fillStyle = text.color;
      ctx.fillText("Chips:" + " " + text.value, text.x, text.y);
    }
  }
};

export default Render;
