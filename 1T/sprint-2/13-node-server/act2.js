const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {

    res.writeHead(200, { 'Content-Type': 'text/html' });
    fs.createReadStream('./act2.html').pipe(res);

}).listen(process.env.PORT || 3000);