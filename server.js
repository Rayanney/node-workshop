// 



const http = require('http')
const port = 3000
const fs =require('fs');
const { error } = require('console');
const server = http.createServer(function(req,res){
    fs.readFile('index.html',(err,data) =>{   
        res.writeHead(200, {'Content-Type' : 'text/html'});
        res.write(data);
        return res.end();        
    });
})
server.listen(port,function(err){
    if(err){
        console.log('no',err)
    }
    else{
        console.log('yes',port)
    }
 })

const firstFile='note.txt'


