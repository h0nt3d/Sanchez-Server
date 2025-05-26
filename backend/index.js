const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = 3001;
const ROOT = '/data/data/com.termux/files/home';

const server = http.createServer((req, res) => {
	res.setHeader("Access-Control-Allow-Origin", "*");
	//res.setHeadr("Content-Disposition", `attachment; filename="${filename}"`)
	const requestedPath = path.join(ROOT, decodeURIComponent(req.url));
	fs.stat(requestedPath, (err, stats) => {
		if (err) {
			res.writeHead(404);
			res.end('Not Found');
		}
		else if (stats.isDirectory()) {
			fs.readdir(requestedPath, (err, files) => {
				if (err) {
					res.writeHead(500);
					res.end('Failed to read directory');
				}
				else {
					res.setHeader('Content-Type', 'application/json');
					res.end(JSON.stringify(files));
				}
			});
		}
		else if (stats.isFile()) {
			const stream = fs.createReadStream(requestedPath);
			res.setHeader("Content-Disposition", `attachment; filename="${path.basename(requestedPath)}"`);
			res.setHeader("Content-Type", "application/octet-stream");
			stream.pipe(res);
		}
		else {
			res.writeHead(400);
			res.end('Not a file or directory');
		}
	});
});

server.listen(PORT, () => {
	console.log(`Server running on ${PORT}`);
});
