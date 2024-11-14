const http = require('http');
const port = 3001;
const fs = require('fs');

const server = http.createServer(function (req, res) {
    fs.readFile('note.txt', (err, data) => {
        if (err) {
            res.writeHead(500, { 'Content-Type': 'text/plain' });
            res.write('Internal Server Error');
            res.end();
            console.error('Error reading file:', err);
        } else {
            res.writeHead(200, { 'Content-Type': 'text/plain' });
            res.write(data);
            res.end();
        }
    });
});

server.listen(port, function (err) {
    if (err) {
        console.log('Error starting server:', err);
    } else {
        console.log('Server is listening on port', port);
    }
});

const firstFile = 'note.txt';
