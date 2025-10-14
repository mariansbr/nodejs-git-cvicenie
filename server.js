const http = require("http");
const hostname = "127.0.0.1";
const port = 3000;
const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/html; charset=utf-8");
  if (req.url === "/") {
    res.end(`
<!DOCTYPE html>
<html>
<head>
<title>Node.js Server</title>
<style>
body {
font-family: Arial, sans-serif;
max-width: 800px;
margin: 50px auto;
padding: 20px;
background: #f5f5f5;
}
.container {
background: white;
padding: 30px;
border-radius: 8px;
box-shadow: 0 2px 4px rgba(0,0,0,0.1);
}
h1 { color: #333; }
p { color: #666; line-height: 1.6; }
</style>
</head>
<body>
<div class="container">
<h1>🎉 Vitajte na Node.js serveri!</h1>
<p>Toto je základná verzia servera pre Git cvičenie.</p>
<p><strong>Dostupné endpointy:</strong></p>
<ul>
<li><a href="/">/</a> - Hlavná stránka (táto stránka)</li>
</ul>
</div>
</body>
</html>
`);
  } else {
    res.statusCode = 404;
    res.end(`
<!DOCTYPE html>
<html>
<head>
<title>404 - Stránka nenájdená</title>
</head>
<body>
<h1>404 - Stránka nenájdená</h1>
<p>Endpoint <code>${req.url}</code> neexistuje.</p>
<a href="/">Späť na hlavnú stránku</a>
</body>
</html>
`);
  }
});
server.listen(port, hostname, () => {
  console.log(`🚀 Server beží na http://${hostname}:${port}/`);
});
