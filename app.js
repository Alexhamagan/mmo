const express = require('express');
const app = express();
const http = require('http').Server(app);
const io = require('socket.io')(http);
const port = process.env.PORT || 3000;

app.use(express.static('public'));

app.get('/', (req, res)=>{
	res.sendFile(__dirname + '/public/index.html');
})

http.listen(port, ()=>{
	console.log('Start server');
})
