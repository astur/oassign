# oassign

Yes, it is just another Object.assign.

[![Build Status][travis-image]][travis-url]
[![NPM version][npm-image]][npm-url]

## Why?

Mostly because `Object.assign` changes first of merged objects. So it is boring to write everytime something like that:

```js
const newObj = Object.assign({}, firstObj, secondObj);
```

...instead of something like that:

```js
const newObj = oassign(ofirstObj, secondObj);
```

## Features

* don't changes source objects
* ignores all parameters except objects and arrays

## Install

```bash
npm i oassign
```

## Usage

```js
const oassign = require('oassign');
console.log(oassign({a: 1}, [2], 'bad', null));
// {a: 1, 0: 2}
console.log('bad'));
// {}
```

## License

MIT

[npm-url]: https://npmjs.org/package/oassign
[npm-image]: https://badge.fury.io/js/oassign.svg
[travis-url]: https://travis-ci.org/astur/oassign
[travis-image]: https://travis-ci.org/astur/oassign.svg?branch=master