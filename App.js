process.title = "note-my-strength-api";

const http = require("http");

const PORT = 8088;

http.createServer(function (req, res) {
    res.writeHead(200, {"Content-Type": "text/html"});
    res.write(`
<html>
<head>
<title>Note-My-Strength API Testing Page</title>
</head>
<body>
<h1>Hello Yingying!</h1>
</body>
</html>`
    );
    res.end();
}).listen(PORT, function (err) {
    if (err) {
        console.log(err);
    } else {
        console.log("Listening on port: " + PORT);
    }
});