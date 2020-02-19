const fs = require('fs');


const read = fs.readFileSync('2.modules.txt','UTF-8');


fs.writeFileSync('text.txt',    `${read} I am writing`)