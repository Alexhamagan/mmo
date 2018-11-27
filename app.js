const express = require('express');
const app = express();
const http = require('http').Server(app);
const io = require('socket.io')(http);
const port = process.env.PORT || 3000;

app.use(express.static('public'));

app.get('/', (req, res)=>{
	res.sendFile(__dirname + '/public/index.html');
})

io.on('connection', socket => {
	//console.log('a user connected');
socket.on('pos', data =>{
	//console.log("Nick:" + data.nick +"- msg: " + data.msg);
	io.emit('res', data);
})
socket.on('disconnect', () => {
	//console.log('user disconnected');
  });
});

http.listen(port);
