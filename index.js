const app = require('express')()
const http = require('http').createServer(app)
const io = require('socket.io')(http)

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html')
})

io.on('connection', (socket) => {
  console.log('a user connected')
  // server side listeners
  socket.on('chat', (msg, user) => {
    io.emit('chat', msg ,user)
  });
  io.emit('welcome')
})

http.listen(3000, () => {
  console.log('listening on *:3000')
})