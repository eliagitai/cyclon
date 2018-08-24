# Setup with Leap Motion, Arduino using Cyclon and Node

## Installation
<<<<<<< HEAD

- Run these commands to setup Leap and Arduino using Node and Cyclon for integration.

### Leap Motion

=======
- Run these commands to setup Leap and Arduino using Node and Cyclon for integration.

### Leap Motion
>>>>>>> master
- Install Node.js [at this link](https://nodejs.org/en/download/).
- Download Leap Motion SDK v2.3.1 [at this link](https://developer-archive.leapmotion.com/downloads/external/skeletal-beta/linux?version=2.3.1.31549).

- In one terminal type to open and edit leapd.service file:

```bash
$ git clone https://github.com/eliagitai/cyclon.git
$ sudo nano /lib/systemd/system/leapd.service

# leapd.service file
[Unit]
Description=LeapMotion Daemon
After=syslog.target

[Service]
Type=simple
ExecStart=/usr/sbin/leapd

[Install]
WantedBy=multi-user.target
```

- Back in terminal, type:
<<<<<<< HEAD

```bash
=======
```
>>>>>>> master
$ sudo ln -s /lib/systemd/system/leapd.service /etc/systemd/system/leapd.service
$ sudo systemctl daemon-reload
$ sudo dpkg --install Leap-2.3.1+31549-x64.deb
$ cd cyclon/LeapDeveloperKit
~/cyclon/LeapDeveloperKit  $ LeapControlPanel
```

- In the LeapControlPanel, go to Troubleshooting tab and go to Recalibrate Device and run that test. Once that's done, right click on Leap Icon on screen and "Resume Tracking" on Leap Motion.

- Then back in terminal, type:

```bash
~/cyclon/LeapDeveloperKit $ service leapd restart
```
<<<<<<< HEAD

### Arduino

- Download Arduino software [at this link](https://www.arduino.cc/download_handler.php)

- Verify examples programs work such as Blink following [their official tutorial](https://www.arduino.cc/en/Tutorial/Blink)

### Setup repository for use

=======
### Arduino
- Download Arduino software [at this link](https://www.arduino.cc/download_handler.php)
- Verify examples programs work such as Blink following [their official tutorial](https://www.arduino.cc/en/Tutorial/Blink)
### Setup repository for use
>>>>>>> master
- Now open another terminal and type:

```bash
~/cyclon/LeapDeveloperKit $ cd ..
~/cyclon $ npm install cylon cylon-firmata cylon-gpio cylon-i2c
~/cyclon $ npm install
```

## Tests
<<<<<<< HEAD

- Cyclon

```bash
~/cyclon $ node cyclontest.js
```

- Leap Motion
  - Make sure you did the calibration in the LeapControlPanel.

```bash
=======
- Cyclon
```
~/cyclon $ node cyclontest.js
```
- Leap Motion
  - Make sure you did the calibration in the LeapControlPanel.
```
>>>>>>> master
~/cyclon $ node cycleap.js
```

- Arduino
  - Make sure Blink example program works before testing this.
<<<<<<< HEAD

```bash
=======
```
>>>>>>> master
~/cyclon $ node cyclard.js
```

- Leap Motion & Arduino
<<<<<<< HEAD

```bash
~/cyclon $ node ardleap.js
```

## References

=======
```
~/cyclon $ node ardleap.js
```
## References
>>>>>>> master
- [Leap Motion SDK](https://developer.leapmotion.com/sdk/v2)
- [Arduino documentation](https://www.arduino.cc/en/Tutorial/Blink)
- [Leap Motion Linux installation](https://support.leapmotion.com/hc/en-us/articles/223782608-Linux-Installation)
- [Leap Motion installation problems](https://askubuntu.com/questions/1008964/problems-installing-leap-motion-orion/1009297)
- [Leap & Arduino video tutorial](https://www.youtube.com/watch?v=LGHICw8Fxz0)