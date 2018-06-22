const test = require('ava');
const m = require('.');

test('oassign', t => {
    t.true(true);
    t.is(m, m);
});
