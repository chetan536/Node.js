const http = require('http')

const fs = require('fs');

const data = fs.readFileSync('./data/data.json','utf-8')

const overview = fs.readFileSync('./template/overview.html','utf-8')

const product = fs.readFileSync('./template/product.html','utf-8')

const server = http.createServer((req,res)=>{
    
    if(req.url == '/home'){
        res.writeHead(200 ,{
           'content-type':'text/html'
        })



        res.end(overview)
    }else if( req.url == '/product'){
        res.writeHead(200,{
            'content-type':'text/html'
        })

        res.end(product)
    }
    res.end(data)
})



server.listen(4000,'localHost',() => {
    console.log('4000');
    
})