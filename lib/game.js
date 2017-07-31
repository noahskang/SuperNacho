// imports utils and objects

var stage, w, h, loader;
var sky, grant, ground, hill, hill2;

class Game {
  init(){
    const canvasEl = document.getElementById('Main-Canvas');
    const ctx = canvasEl.getContext('2d');

    const stage = new createjs.Stage("testCanvas");

    w = stage.canvas.width;
    h = stage.canvas.height;
  }
  run(){

  }
  updateView(){

  }
  reset(){

  }
}
