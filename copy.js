var fs = require('fs');
// Read File
fs.createReadStream('source.txt')
 // Write File
 .pipe(fs.createWriteStream('output.txt'));
