const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
    console.log('URL страницы: ' + req.url)
    res.writeHead(200, {
        'Content-Type': 'text/html; charset=utf-8'
    });
    const myReadShort = fs.createReadStream(__dirname + '/index.html', 'utf-8');
    myReadShort.pipe(res)
});

server.listen(3002, '127.0.0.1');
console.log('Порт 3002')