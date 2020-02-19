/*
const http = require('http');

const server = http.createServer((req,res)=>{

if(req.url == '/home'){

res.writeHead(200, {
    "content-type":"text/html",
    "my-head":"chetan"
})

    res.end('<h1>ROUTING</h1>');
    
}


res.end('nothing')


});


server.listen(4000, '127.0.0.1', ()=>{
    console.log('running 4000');
    
})
*/

const http = require("http");

const server = http.createServer((req, res) => {
  let urlTag = req.url;

  if (urlTag == "/" || urlTag == "/hello") {
    res.end("Hello World");
  } else {
    res.writeHead(404, {
      "content-type": "text/html",
      "my-own-header": "Hello People"
    });
    res.end("<h3> Page Not Found </h3>");
  }
});

server.listen(4000, 'localhost', ()=>{
    console.log('4000');
    
})