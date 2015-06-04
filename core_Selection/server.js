var http = require('http'); 
var fs = require('fs');
var path = require('path');

function notFound(res){
	res.writeHead(404,{"Content-Type": "text/plain"});
	res.write("Not Found or Deleted");
	res.end();
}

var serv = http.createServer(function (req, res) {  
		console.log("A user has requested: " + req.url );
		if(req.method == 'GET' && req.url == '/'){
			res.writeHead(200,{"Content-Type": "text/html"});
			fs.createReadStream("./index.html").pipe(res);
		}
		else if(req.method == 'GET' && req.url == '/tech-test.pdf'){
			 var filePath = path.join(__dirname, 'myfile.pdf');
    	var stat = fs.statSync(filePath);

    	res.writeHead(200, {
        'Content-Type': 'application/pdf',
        'Content-Length': stat.size
    	});

    	fs.createReadStream(filePath).pipe(res);
		}
		else{
			notFound(res);
		}
		
	});


 serv.listen(3000);
 console.log("Server is now running");