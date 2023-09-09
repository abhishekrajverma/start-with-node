const http = require('http');
const fs = require('fs');
const { error } = require('console');
const { data } = require('jquery');

const myServer = http.createServer((req,res)=>{
    console.log(req.url);
    res.writeHead(200,{'content-type': 'text/html'});
    fs.readFile('./index.html',(error,data)=>{
        if(error){
            return res.end('<h1>Error</h1>');
        }
        return res.end(data);
    })
});

myServer.listen(8000,()=>console.log(`Server Started`));