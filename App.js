process.title = "note-my-strength-api";

const http = require("http");

const PORT = 8088;

http.createServer(function (req, res) {
    res.writeHead(200, {"Content-Type": "text/html"});
    res.write("<html><body><h1>Hello Yingying!</h1></body></html>");
    res.end();
}).listen(PORT, function (err) {
    if (err) {
        console.log(err);
    } else {
        console.log("Listening on port: " + PORT);
    }
});