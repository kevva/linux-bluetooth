# linux-bluetooth [![Build Status](https://travis-ci.org/kevva/linux-bluetooth.svg?branch=master)](https://travis-ci.org/kevva/linux-bluetooth)

> Get bluetooth state on Linux


## Install

```
$ npm install --save linux-bluetooth
```


## Usage

```js
var linuxBluetooth = require('linux-bluetooth');

linuxBluetooth(function (err, state) {
	console.log(state);
	//=> true
});
```


## License

MIT © [Kevin Martensson](http://github.com/kevva)
