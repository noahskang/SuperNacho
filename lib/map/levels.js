// my game board is going to be... 15360 pixels across (that's 768 * 20).
// If I divide that by 24 (the default size of an entity), that means I need to provide logic for 640 squares.
// that's way too many to do manually... Instead... I'll build a couple of default 768 * 600 views. And then splice 24 of those together for a game map. In order to increase difficulty, I'll use Math.random to throw in a random number of enemies.

export const ONE = [

];

const flatground = () => {
  // add a row of flat ground
  let array = [];
  for(let i=0; i<32; i++){
    array.push("UG");
  }
  return array;
};

const middlehill = () => {
  // start the map with flatground
  let array = [[flatground]];
  // add a mountain that is 5 levels high
  // cover the bare dirt with the topsoil tile
  for(let i=0; i<5; i++){
    let row = [];
    for(let j=0; j<32; j++){
      if(j>10&& j < 18){
        row.push("UG");
      }else{
        if(i===0){
          row.push("GR");
        } else {
          row.push(" ");
        }
      }
    }
    array.unshift(row);
  }
  let row = [];
  // add the top of the mountain
  for(let i=0; i<32; i++){
    if(i===11){
      row.push("LG");
    }
    else if(i>11&& i < 17){
      row.push("RG");
    }
    else if(i===17){
      row.push("LG");
    }
    else{
      row.push(" ");
    }
  }
  array.unshift(row);
  return array;
};
