var http = require("http");

const httpServer = http.createServer(handleServer);


function handleServer(req, res) {
  
  if(req.url == "/welcome"){
    res.writeHead(200, { "Content-type" : "text/plain"});
    res.write("Welcome to Dominos!");
    res.end();
  }
  else if(req.url == "/contact"){
    res.writeHead(200, { "Content-type" : "application/json"});
    res.write(JSON.stringify({
        phone: '18602100000', 
        email: 'guestcaredominos@jublfood.com' 
    }));
    res.end();
  }
  else{
    res.writeHead(404, { "Content-type" : "text/plain"});
    res.write("Page Not Found");
    res.end();
  }
}
httpServer.listen(8081,() => console.log("Server is running") );

module.exports = httpServer;