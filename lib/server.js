var express = require('express')
var fs = require('fs')
var http = require('http')
var socketIO = require('socket.io')


var app = express()
var server = http.Server(app)
var io = socketIO(server)
