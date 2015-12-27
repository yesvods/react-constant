var webpack = require('webpack');
var devConfig = require('./webpack.config.base');

module.exports = function (config) {
  config.set({

    // browsers: [ process.env.CONTINUOUS_INTEGRATION ? 'Firefox' : 'Chrome' ],
    browsers: ['PhantomJS'],

    frameworks: [ 'mocha', 'phantomjs-shim' ],

    reporters: [ 'dots' ],

    files: [
      "src/**/__test__/*.js"
    ],

    preprocessors: {
      'src/**/__test__/*.js': [ 'webpack', 'sourcemap' ]
    },

    webpack: devConfig,
  });
};
