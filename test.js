const test = require('ava');
const m = require('.');

test('oassign', t => {
    t.deepEqual(m(), {});
    t.deepEqual(m('bad'), {});
    t.deepEqual(m(null, 'bad', 123), {});
    t.deepEqual(m({}), {});
    t.deepEqual(m({}, {}, null, 'bad', 123), {});
    t.deepEqual(m([1, 2], [3]), {0: 3, 1: 2});
    t.deepEqual(m({a: 1}), {a: 1});
    t.deepEqual(m({a: 1, b: 2}, {a: 3, c: 4}), {a: 3, b: 2, c: 4});
    t.deepEqual(m({}, {a: 1}), {a: 1});
    t.deepEqual(m({a: 1}, [2], 'bad', null), {a: 1, 0: 2});
});
