//jshint strict: false
exports.config = {

  allScriptsTimeout: 11000,

  specs: [
    '*.js'
  ],

  capabilities: {
    'browserName': 'safari'
  },

  baseUrl: 'http://localhost:8000/',

  framework: 'mocha',

  // jasmineNodeOpts: {
  //   defaultTimeoutInterval: 30000
  // },

  onPrepare: () => {
    const chai = require('chai');
    chai.use(require('chai-as-promised'));
  }

};
