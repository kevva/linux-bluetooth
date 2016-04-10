# linux-bluetooth [![Build Status](https://travis-ci.org/kevva/linux-bluetooth.svg?branch=master)](https://travis-ci.org/kevva/linux-bluetooth)

> Get bluetooth state on Linux


## Install

```
$ npm install --save linux-bluetooth
```


## Usage

```js
const linuxBluetooth = require('linux-bluetooth');

linuxBluetooth().then(state => {
	console.log(state);
	//=> true
});
```


## License

MIT © [Kevin Martensson](http://github.com/kevva)
