// "use strict";

var Cylon = require("cylon");

Cylon.robot({
  connections: {
    leap: { adaptor: "leapmotion" },
    arduino: { adaptor: "firmata", port: "/dev/ttyACM1" }
  },

  devices: {
    led: { driver: "led", pin: 13, connection: "arduino" },
    leapmotion: { driver: 'leapmotion' }
  },

  work: function(my) {
    my.leapmotion.on("frame", function(frame) {
      if (frame.hands.length > 0) {
        console.log("LED ON");  
        my.led.turnOn();
      } else {
        console.log("LED off");    
        my.led.turnOff();
      }
    });
  },

}).start();

