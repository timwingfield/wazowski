let strip = require("./lib/strip").Strip(8);

/*
 * mk: 0
 * ep: 1
 * hs: 2
 * ak: 3
 * dl: 4
 * ca: 5
 * dlp: 6
 * dlt: 7
 */

let lights = {
  mkOpen: () => {
    strip.setPixelColor(0, [0,25,0]);
  },

  buffer: () => {
    return strip.buffer;
  },

  blahBlah: () => {
    return strip.getPixelColor(0);
  }
}

exports.Lights = lights;
