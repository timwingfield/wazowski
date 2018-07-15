const wifi = require('Wifi');

function connect() {
  console.log("connecting to wifi...");
  wifi.connect("endor", {password: "J@keV0r@cek"}, (ap) => {
    console.log("connected: ", ap);
  });

  wifi.stopAP();

  return "Not undefined";
}

function myIp() {
  wifi.getIP((err, ipinfo) => {
    console.log("error: ", err);
    console.log("ip info: ", ipinfo);
  });
}
