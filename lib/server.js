var express = require('express')
var fs = require('fs')
var http = require('http')
var path = require('path')
var socketIO = require('socket.io')
var winston = require('winston')
var expressWinston = require('express-winston')


var app = express()
var server = http.Server(app)
var io = socketIO(server)


var logDir = path.resolve(__dirname,'../log')

winston.add(winston.transports.DailyRotateFile,{
  filename: logDir + '/access.log',
  level: 'info'
})
