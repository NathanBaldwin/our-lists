'use strict'

const express = require('express')
const app = express()
const server = require('http').createServer(app)
const ws = require('socket.io')(server)
const PORT = process.env.PORT || 3000

const path = require('path')
const bodyParser = require('body-parser')

const routes = require('./routes/')


//create paths to public directory:
app.use(express.static('public'));

//middleware:
app.use(bodyParser.urlencoded({
  extended:false
}))

//routes:
app.use(routes)


//tell server to listen on specified port:
server.listen(PORT, () => {
  console.log(`Server running on port: ${PORT}`);
})

//begin socket communication with server:
ws.on('connection', socket => {
  console.log('socket connected', socket.id);

  socket.on('createNewNote', newNote => {
    console.log("new note:", newNote);
    socket.broadcast.emit('receiveNote', newNote)
  })


})
