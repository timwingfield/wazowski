## Project Wazowski
A project to upload modularized code to an Espurino ESP8266. The goal being to activate an 8 pixel strip of neopixels for various statuses pulled from the Internet.

### Spiked out and/or working
1. Webpack set up to build a bundle. (Borrowed heavily from [Andew Wakeling](https://github.com/andrewwakeling/espruino-webpack-babel-sample))
2. At least one module in place being pulled in and bundled.
3. Wifi is connecting.
4. Sample data being fetched from restcountries.eu 

### To Build
Create an `env.js` file in the root that looks like:
```
const env = {
  ssid: "[your wifi ssid]",
  password: "[your wifi password]",
};

export default env;
```
`yarn build`
