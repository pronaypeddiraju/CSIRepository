var http = require('http'),
io = require('socket.io'),
express = require('express'),
app = express();

http.createServer(app).listen(3000);

io.listen(http);

app.get('/', function(req, res){
	res.sendFile(__dirname+'/index.html');
});

io.socket.on('connection', function(socket){
	socket.on('timer')
});