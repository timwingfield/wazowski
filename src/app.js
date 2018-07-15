import Strip from "./lib/strip"
import env from "../env.js"

const http = global.require('http')
const neopixel = global.require('neopixel')
const wifi = global.require('Wifi')

class Test {

  constructor() {
    this.bob = "sponge"
    this.strip = this.strip()

    this.chaserPos = 0
  }

  strip() {
    return new Strip(8)
  }

  init() {
    console.log("connecting to wifi...");
    wifi.connect(env.ssid, {password: env.password}, (err) => {
      if(err == null) console.log("connected")
      wifi.getIP((err, ipinfo) => {
        console.log("ip address: ", ipinfo.ip);
      });
    });

    wifi.stopAP();

    [0,1,2,3,4,5,6,7].forEach((i) => this.red(i))

    setTimeout(() => { [0,1,2,3,4,5,6,7].forEach((i) => this.green(i)) }, 2000)

    setTimeout(() => { [0,1,2,3,4,5,6,7].forEach((i) => this.blue(i)) }, 4000)

    setTimeout(() => { this.off() }, 8000)
  }

  wtf() {
    // setInterval(() => neopixel.write(B5, this.chaser(this.strip.buffer)), 50)
    //setInterval(() => neopixel.write(B5, this.rainbow(this.strip.buffer)), 100)

    console.log("el env", env)
    console.log("ssid: ", env.ssid)
    console.log("password: ", env.password)
  }

  canada() {
    http.get("http://restcountries.eu/rest/v2/alpha/ca", (res) => {
      res.on('data', (data) => {
        console.log(data)
      })
    })
  }

  // mkOpen() {
  //   Parks.mkOpeningTimes()
  // }

  chaser(rgb) {
    this.chaserPos = (this.chaserPos + 1) % 8

    rgb[this.chaserPos * 3 + 0] = 0  // g
    rgb[this.chaserPos * 3 + 1] = 17 // r
    rgb[this.chaserPos * 3 + 2] = 25 // b

    for(var i = 0; i < 8 * 3; i++)
      rgb[i] *= 0.9

    return rgb
  }

  rainbow(rgb) {
    this.chaserPos++;
    for (var i=0;i<rgb.length;) {
      rgb[i++] = (1 + Math.sin((i+this.chaserPos)*0.1324)) * 15;
      rgb[i++] = (1 + Math.sin((i+this.chaserPos)*0.1654)) * 15;
      rgb[i++] = (1 + Math.sin((i+this.chaserPos)*0.1)) * 15;
    }

    return rgb;
  }

  red(index) {
    if(!index) index = 0
    this.strip.setPixelColor(index, [0,25,0])
    neopixel.write(B5, this.strip.buffer)
  }

  green(index) {
    if(!index) index = 0
    this.strip.setPixelColor(index, [25,0,0])
    neopixel.write(B5, this.strip.buffer)
  }

  blue(index) {
    if(!index) index = 0
    this.strip.setPixelColor(index, [0,0,25])
    neopixel.write(B5, this.strip.buffer)
  }

  off() {
    this.strip.off()
    neopixel.write(B5, this.strip.buffer)
  }
}

global.test = new Test()
test.init()
