const express = require('express');
const app = express();
const http = require('http').Server(app);
const io = require('socket.io')(http)

app.use(express.static('public'));

app.get('/', (req, res)=>{
	res.sendFile(__dirname + '/public/index.html');
})

http.listen(3000, ()=>{
	console.log('Start server');
})