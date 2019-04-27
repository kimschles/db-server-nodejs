const fs = require('fs');
const writeStream = fs.createWriteStream('output.txt');
writeStream.write('Hello world!\n');
writeStream.write('Line 2, bebe\n');
writeStream.end();