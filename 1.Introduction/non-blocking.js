const fs = require('fs');





 fs.readFile('text.txt', 'UTF-8', (err,data)=>{
    console.log('done reading',data);

    
});

fs.writeFile('text.txt',  'writen async way', (err)=>{
    console.log('done writing...');
    
})


console.log('hello world');
console.log('hello world');