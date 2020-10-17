const express = require('express');
const app = express();
const http = require('http').Server(app);
const io = require('socket.io')(http);
const port = process.env.PORT || 3000;

app.use(express.static('public'));

app.get('/', (req, res)=>{
	res.sendFile(__dirname + '/public/index.html');
})

io.on('connection', function(socket){
  socket.on('chat message', function(msg){
    io.emit('chat message', msg);
	console.log(msg);
  });
});

http.listen(port);
