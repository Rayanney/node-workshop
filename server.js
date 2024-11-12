
const http = require('http')
const port = 3000
const fs =require('fs');
const server = http.createServer(function(req,res){
    fs.readFile('')
}
)
 server.listen(port,function(err){
    if(err){
        console.log('no',err)
    }
    else{
        console.log('yes',port)
    }
 })

const firstFile='note.txt'


