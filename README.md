# react-constant
Fuck off constants.js and golobal constants in react/flux/redux/wateva.

## Feature
* Drop all of your files about constants, react-constant will take care for you.
* Namespaced constants, never worry about conflict with other component in your project.
* 2.2KB minified, extreme slim.

[![build status](https://api.travis-ci.org/yesvods/react-constant.svg?branch=master)](https://travis-ci.org/yesvods/react-constant)
[![npm version](https://img.shields.io/npm/v/react-constant.svg?style=flat-square)](https://www.npmjs.com/package/react-constant)

## Usage

### Install 
```Javascript
npm install react-constant --save
```
### Import & Instance

#### Webpack/Browserify

```Javascript
//ES5 version
var Constant = require('react-constant').Constant;
var constants = Constant('mynamespace');

//ES6 version
import { Constant } from 'react-constant';
let constants = Constant('mynamespace');

```

#### browser
```html
<script src="dist/constant.min.js"></script>
```

### Just do it

reducer.js

```Javascript
function reducer(state, action){
  switch(action.type){
  case constants.of('ON'):
    //TODO
    break;
  case constants.of('OFF'):
    //TODO
    break;
  default: 
    return state;
  }
}
```

action.js

```Javascript
function toggleLight(flag){
  return {
    type: constants.ON,
    flag: flag
  }
}
```

### Thanks

* [Redux](https://github.com/rackt/redux) for build and test template

### License

MIT

