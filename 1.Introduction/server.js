const http = require('http');



const server = http.createServer((req,res)=>{


    res.end('HELLO WORLD')
    
    });


server.listen(4000, 'localhost', ()=>{
console.log('server up and running 4000');

})