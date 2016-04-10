import test from 'ava';
import fn from './';

test(async t => process.env.CI ? t.pass() : t.is(typeof await fn(), 'boolean'));
