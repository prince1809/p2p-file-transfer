var express = require('express')
var fs = require('fs')
var http = require('http')
var path = require('path')
var peer = require('peer')
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

winston.add(winston.transports.File,{
  filename: logDir + '/error.log',
  level: 'error',
  handleException: true,
  json: false
})

server.listen(process.env.PORT || 3000, function(){
  var host = server.address().address
  var port = server.address().port
  console.log('Server is listening on %s:%s',host,port)
})

app.use('/peer',peer.ExpressPeerServer(server))

app.use(expressWinston.logger({
  winstonInstance: winston,
  expressFormat: true
}))

//app.get('/js',require('./middleware/javascript'))
//app.get('css',require('./middleware/css'))
//app.use(require('./middleware/static'))
