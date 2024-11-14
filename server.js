const http = require('http');
const port = 3001;
const fs = require('fs');

// Read File

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

// Create File
const data = "Hello Flurry Derivsh";

fs.writeFile('Newfile.txt', data, (err) =>{
    if(err){
        console.error('Error creating file:', err);
    }else{
        console.log("file has been created!!");
    }

});
//Update File

fs.appendFile("Newfile1.txt"," Flurry Devrish GO my COde", (err) =>{
    if(err){
        console.error('Error creating file:', err);
    }else{
        console.log("file has been updated!!");
    }
})

//Delete File
// fs.unlink('Newfile.txt',(err) =>{
//     if(err){
//         console.error("FIle not deleted", err);        
//     }else{
//         console.log("File Deleted Succesfully!!!");
//     }
// });

server.listen(port, function (err) {
    if (err) {
        console.log('Error starting server:', err);
    } else {
        console.log('Server is listening on port', port);
    }
});

const firstFile = 'note.txt';
