
var http = require('http');
var fs = require('fs');

const fileName = 'index.html';
const fileContent = `<h1> Hello World </h1>
<p> This is Vidhi... </p>`;

fs.writeFile(fileName, fileContent, function (err) {
  if (err) throw err;
});
http.createServer(function (req, res) {
  fs.readFile(fileName, function(err, data) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(data);
    return res.end();
  });
}).listen(5000,()=>{ console.log("server started")});