var fs = require('fs');
var zlib = require('zlib');
// Read File
fs.createReadStream('/bin/hostname')
 // Compress
 .pipe(zlib.createGzip())
 // Write File
 .pipe(fs.createWriteStream('output.gz'));
