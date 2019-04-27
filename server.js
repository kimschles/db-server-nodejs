const http = require('http');
const fs = require('fs');
const port = 4000;

const writeStream = fs.createWriteStream('output.txt');

// right now, this server only works with post requests that send data. How do
// you get info from the URL (like req.params)

const server = http.createServer((req, res) => {
    let body = '';
    req.setEncoding('utf8');

    req.on('data', (chunk) => {
        body += chunk;
        console.log(req.params)
    });

    req.on('end', () => {
        try {
            const data = JSON.parse(body);
            res.statusCode = 200;
            res.write(writeStream.write(data));
            writeStream.end();
            res.end();
        } catch (err) {
            res.statusCode = 400;
            return res.end(`error: ${err.message}`);
        }
    });
});

server.listen(port, console.log(`Listening on port ${port}!`));