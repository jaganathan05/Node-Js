const http = require('http');

const server = http.createServer((req, res) => {
    console.log(req.url , req.method ,req.headers );
    res.setHeader('Content-Type','text/html');
    res.write('<html>')
    res.write('<head><title>home</title></head>')
    res.write('<body><h1>Welcome to my Node js project!</h1>')
    res.write('</html>')
    res.end('')
})

server.listen(4000);