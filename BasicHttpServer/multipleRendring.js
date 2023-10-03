const http = require('http');
const fs = require('fs');

const myServer = http.createServer((req,res)=>{
    console.log(req.url);
    res.writeHead(200,{'content-type': 'text/html'});
    let filePath;
    switch(req.url){
        case '/':
            filePath ='./index.html';
            break;
        case '/profile':
            filePath = '/profile.html'
        case '/home':
            filePath = '/home.html'
        default:
            filePath = '/404.html';
    }
    fs.readFile(filePath,(error,data)=>{
        if(error){
            return res.end("error" ,error)
        }
        return res.end(data);
    })
});


myServer.listen(8000,()=>console.log(`Server Started at port : ${8000}`));