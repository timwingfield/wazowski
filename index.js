// maybe this goes here? We'll see...
let neopixel = require("neopixel");
let strip = require("./lib/strip").Strip(8);
//let lights = require("./lib/lights").Lights;

function test() {
  strip.setPixelColor(0, [0,25,0]);
  neopixel.write(B5, strip.buffer);
}
