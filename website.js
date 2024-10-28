const http= require('http');
const fs=require('fs');

const port=process.env.PORT || 3000;

const server=http.createServer((req,res)=>{
    res.setHeader('Content-Type','text/html')
    console.log(req.url)
    if(req.url =='/'){
        res.statusCode=200;
        res.end('<h1>Ayush jaiswal</h1><p>hey this is the way to rock the world</p>');
    }else if(req.url=='/hello'){
        res.statusCode=200;
        const data=fs.readFileSync('index.html');
        res.end(data.toString());
    }else{
        res.statusCode=404;
    }
    
})
    

server.listen(port,()=>{

console.log(`server is listening on port ${port}`)

});