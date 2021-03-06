'use strict'
const merge = require('webpack-merge');
const devEnv = require('./dev.env');

module.exports = merge(devEnv, {
  NODE_ENV: '"testing"',//测试环境
  VUE_APP_FLAG: '"test"'
});
