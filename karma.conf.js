var webpack = require('webpack');
var devConfig = require('./webpack.config.base');

module.exports = function (config) {
  config.set({

    // browsers: [ process.env.CONTINUOUS_INTEGRATION ? 'Firefox' : 'Chrome' ],
    browsers: ['PhantomJS'],

    frameworks: [ 'mocha', 'phantomjs-shim' ],

    reporters: [ 'dots' ],

    files: [
      "test/**/*.js"
    ],

    preprocessors: {
      'test/**/*.js': [ 'webpack', 'sourcemap' ]
    },

    webpack: devConfig,
  });
};
