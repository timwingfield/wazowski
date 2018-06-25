let neopixel = require("neopixel");

var grb = new Uint8ClampedArray(8*3);

let lights = {
  one:   [0,0,0],
  two:   [0,0,0],
  three: [0,0,0],
  four:  [0,0,0],
  five:  [0,0,0],
  six:   [0,0,0],
  seven: [0,0,0],
  eight: [0,0,0],
};

let lightsArr = [
  [0,0,0],
  [0,0,0],
  [0,0,0],
  [0,0,0],
  [0,0,0],
  [0,0,0],
  [0,0,0],
  [0,0,0]
];

const createLightArray = (fullArray, currentArray) => fullArray.concat(currentArray);

function lightValues(){
  return Object.keys(lights).map((k) => lights[k]);
}
