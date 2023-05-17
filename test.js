"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var http = require("http");
var fs = require("fs");
var server = http.createServer(function (request, response) {
    if (request.url === '/') {
        fs.readFile('./test.html', function (err, data) {
            response.writeHead(200);
            response.end(data);
        });
    }
});
server.listen(3080, function () {
    console.log('server 작동 중 port : 3080');
});
