console.log('Hello World');

const fs = require('fs');

const read = fs.readFileSync('1.intro.txt', 'UTF-8')

console.log(read);
