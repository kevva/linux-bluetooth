'use strict';
const execa = require('execa');

module.exports = () => {
	if (process.platform !== 'linux') {
		return Promise.reject(new TypeError('Only Linux systems are supported'));
	}

	return execa('hcitool', ['dev']).then(res => res.stdout.trim().replace('Devices:', '').length !== 0);
};
