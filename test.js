'use strict';
var test = require('ava');
var linuxBluetooth = require('./');

if (!process.env.CI) {
	test('should ', function (t) {
		t.plan(2);

		linuxBluetooth(function (err, state) {
			t.assert(!err, err);
			t.assert(typeof state === 'boolean', state);
		});
	});
}
