var http=require('http');
var fs=require('fs');
var port=3000;

const todos=[
    {id:'1',text:'hello'},
    {id:'2',text:'this'},
    {id:'3',text:'is cool'},
]

const server=http.createServer((req,res)=>{
    // res.statusCode=404;
    // res.setHeader('Content-Type','application/json');
    // res.setHeader('X-Powered-By','Node.js');
    let body=[]
    
    req.on('data',chuck=>{
        body.push(chuck);
    }).on('end',()=>{
        body=Buffer.concat(body);
        console.log(body);
    });

    res.writeHead(200,{
        'Content-Type':'application/json',
        'X-Powered-By':'Node.js'
    });
    res.write(JSON.stringify(todos)); 
    res.end();
    console.log(req.headers.authorization);
});
server.listen(port,()=>console.log('RUNNING'));