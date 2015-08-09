#!/usr/bin/env node

/*
try {
  require(./newrelic)
  require('newrelic')
} catch (e) {
  // Don't load New Relic if the configuration file does't exist.
}
*/
/*
require('babel/register')({
  only: new RegExp(__dirname + '/lib' + '|' +
                   __dirname + '/node_modules/p2p-file-transfer')
})
*/
module.exports = require('./lib/server')
