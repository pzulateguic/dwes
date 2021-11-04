const http = require('http');

const server = http.createServer((req, res) => {
    res.end('Hola mu buenas!');
}).listen(4000);