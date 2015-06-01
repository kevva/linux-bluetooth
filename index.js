'use strict';
var execFile = require('child_process').execFile;

module.exports = function (cb) {
	if (process.platform !== 'linux') {
		throw new TypeError('Only Linux systems are supported');
	}

	execFile('hcitool', ['dev'], function (err, stdout) {
		if (err) {
			cb(err);
			return;
		}

		stdout = stdout.trim().replace('Devices:', '');
		cb(null, stdout.length ? true : false);
	});
};
