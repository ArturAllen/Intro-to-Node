var http = require('http');
var fs   = require('fs');
var url  = require('url')

const port = 8080;

http.createServer(function (req, res) {

	var q = url.parse(req.url, true);
	var filename = '.' + q.pathname;

	if (filename == './') {
		filename = './index';
	}

	filename += '.html'



	fs.readFile(filename, function(err, data){

		if (err) {
			res.writeHead(404, {'Content-type': 'text/html'})
			return res.end('404 not found');
		}

		res.writeHead(200, {'Content-type': 'text/html'});
		res.write(data);

		console.log('...Incoming request: ' + req.url);
		
		return res.end();
	});
}).listen(port)

console.log('Server listening on port ' + port + '...');