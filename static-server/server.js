var http = require('http');
var url = require('url');
var fs = require('fs');
var path = require('path');

var server = http.createServer(function(req, res) {
	var urlData = url.parse(req.url, true);

	// 解析 req 以取得客戶端要求的檔案名稱
	var filename = url.parse(req.url).pathname;
	// 拼裝完整路徑，於程式所在目錄尋找該檔案
	var filepath = path.join(__dirname, filename);

	// 檢查目標檔案
	fs.exists(filepath, function(exists) {
		if (!exists) {
			res.writeHead(404, {'Content-Type': 'text/plain'});
			res.end('Not Found\n');
			return;
		}

		// 讀取檔案內容
		fs.readFile(filepath, function(err, content) {
			// 回傳檔案內容給網頁瀏覽器
			res.writeHead(200, {'Content-Type': 'text/plain'});
			res.end(content);
		});
	});
});

server.listen(process.env.PORT, function() {
	console.log('Server running at http://localhost:' + process.env.PORT + '/');
});
