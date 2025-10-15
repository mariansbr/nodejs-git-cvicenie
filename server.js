const http = require('http');
const url = require('url');
const hostname = '127.0.0.1';
const port = 3000;
const server = http.createServer((req, res) => {
const parsedUrl = url.parse(req.url, true);
res.statusCode = 200;
res.setHeader('Content-Type', 'text/html; charset=utf-8');
if (parsedUrl.pathname === '/') {
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
.endpoint {
background: #f0f0f0;
padding: 10px;
margin: 10px 0;
border-radius: 4px;
}
.badge {
display: inline-block;
padding: 3px 8px;
border-radius: 3px;
font-size: 0.85em;
font-weight: bold;
margin-left: 10px;
}
.badge-new { background: #4CAF50; color: white; }
</style>
</head>
<body>
<div class="container">
<h1>🎉 Vitajte na Node.js serveri!</h1>
<p>Toto je základná verzia servera pre Git cvičenie.</p>
<p><strong>Dostupné endpointy:</strong></p>
<ul>
<li class="endpoint"><a href="/">/</a> - Hlavná stránka</li>
<li class="endpoint"><a href="/test">/test</a> - Testovací endpoint</li>
<li class="endpoint"><a href="/funkcia?a=5&b=3">/funkcia</a> - Kalkulačka</li>
<li class="endpoint"><a href="/dalsiafunkcia">/dalsiafunkcia</a> - Dátum a čas <span class="badge badge-new
</ul>
</div>
</body>
</html>
`);
} else if (parsedUrl.pathname === '/test') {
res.end(`
<!DOCTYPE html>
<html>
<head>
<title>Test Endpoint</title>
<style>
body {
font-family: Arial, sans-serif;
max-width: 800px;
margin: 50px auto;
padding: 20px;
background: #e8f4f8;
}
.container {
background: white;
padding: 30px;
border-radius: 8px;
box-shadow: 0 2px 4px rgba(0,0,0,0.1);
}
h1 { color: #2c7a9e; }
.info {
background: #d4edff;
padding: 15px;
border-left: 4px solid #2c7a9e;
margin: 20px 0;
}
</style>
</head>
<body>
<div class="container">
<h1>🧪 Test Endpoint</h1>
<div class="info">
<p><strong>Status:</strong> Funguje správne! ✅</p>
<p><strong>Metóda:</strong> ${req.method}</p>
<p><strong>URL:</strong> ${req.url}</p>
<p><strong>Čas:</strong> ${new Date().toLocaleString('sk-SK')}</p>
</div>
<p><a href="/">← Späť na hlavnú stránku</a></p>
</div>
</body>
</html>
`);
} else if (parsedUrl.pathname === '/funkcia') {
const a = parseFloat(parsedUrl.query.a) || 0;
const b = parseFloat(parsedUrl.query.b) || 0;
const vysledok = a + b;
res.end(`
<!DOCTYPE html>
<html>
<head>
<title>Funkcia - Kalkulačka</title>
<style>
body {
font-family: Arial, sans-serif;
max-width: 800px;
margin: 50px auto;
padding: 20px;
background: #f0f8e8;
}
.container {
background: white;
padding: 30px;
border-radius: 8px;
box-shadow: 0 2px 4px rgba(0,0,0,0.1);
}
h1 { color: #4a7c3e; }
.result {
background: #d4ffcc;
padding: 20px;
border-left: 4px solid #4a7c3e;
margin: 20px 0;
font-size: 1.2em;
}
.formula {
font-family: monospace;
font-size: 1.5em;
text-align: center;
margin: 20px 0;
}
input {
padding: 10px;
font-size: 1em;
border: 2px solid #4a7c3e;
border-radius: 4px;
width: 100px;
}
button {
padding: 10px 20px;
font-size: 1em;
background: #4a7c3e;
color: white;
border: none;
border-radius: 4px;
cursor: pointer;
}
button:hover {
background: #3d6633;
}
</style>
</head>
<body>
<div class="container">
<h1>🧮 Kalkulačka</h1>
<div class="formula">
${a} + ${b} = <strong>${vysledok}</strong>
</div>
<div class="result">
<p><strong>Výsledok:</strong> ${vysledok}</p>
<p><strong>Parameter a:</strong> ${a}</p>
<p><strong>Parameter b:</strong> ${b}</p>
</div>
<form action="/funkcia" method="get">
<p>
<label>Číslo A: <input type="number" name="a" value="${a}" step="0.01"></label>
</p>
<p>
<label>Číslo B: <input type="number" name="b" value="${b}" step="0.01"></label>
</p>
<p>
<button type="submit">Vypočítať</button>
</p>
</form>
<p><a href="/">← Späť na hlavnú stránku</a></p>
</div>
</body>
</html>
`);
} else if (parsedUrl.pathname === '/dalsiafunkcia') {
const teraz = new Date();
const den = teraz.toLocaleDateString('sk-SK', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });
const cas = teraz.toLocaleTimeString('sk-SK');
const timestamp = teraz.getTime();
const rok = teraz.getFullYear();
const denVRoku = Math.floor((teraz - new Date(rok, 0, 0)) / 1000 / 60 / 60 / 24);
res.end(`
<!DOCTYPE html>
<html>
<head>
<title>Dátum a Čas</title>
<meta http-equiv="refresh" content="1">
<style>
body {
font-family: Arial, sans-serif;
max-width: 800px;
margin: 50px auto;
padding: 20px;
background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
}
.container {
background: white;
padding: 30px;
border-radius: 8px;
box-shadow: 0 4px 6px rgba(0,0,0,0.2);
}
h1 { color: #667eea; text-align: center; }
.time-display {
font-size: 3em;
text-align: center;
color: #667eea;
font-weight: bold;
margin: 30px 0;
font-family: monospace;
}
.date-display {
font-size: 1.5em;
text-align: center;
color: #764ba2;
margin: 20px 0;
}
.info-grid {
display: grid;
grid-template-columns: 1fr 1fr;
gap: 15px;
margin: 30px 0;
}
.info-box {
background: #f5f5f5;
padding: 15px;
border-radius: 8px;
border-left: 4px solid #667eea;
}
.info-label {
font-size: 0.9em;
color: #666;
margin-bottom: 5px;
}
.info-value {
font-size: 1.3em;
color: #333;
font-weight: bold;
}
.refresh-note {
text-align: center;
color: #666;
font-size: 0.9em;
margin-top: 20px;
}
</style>
</head>
<body>
<div class="container">
<h1>🕐 Dátum a Čas</h1>
<div class="time-display">${cas}</div>
<div class="date-display">${den}</div>
<div class="info-grid">
<div class="info-box">
<div class="info-label">Unix Timestamp</div>
<div class="info-value">${timestamp}</div>
</div>
<div class="info-box">
<div class="info-label">Rok</div>
<div class="info-value">${rok}</div>
</div>
<div class="info-box">
<div class="info-label">Deň v roku</div>
<div class="info-value">${denVRoku}</div>
</div>
<div class="info-box">
<div class="info-label">Mesiac</div>
<div class="info-value">${teraz.getMonth() + 1}</div>
</div>
</div>
<div class="refresh-note">
⟳ Stránka sa automaticky obnovuje každú sekundu
</div>
<p style="text-align: center; margin-top: 30px;">
<a href="/" style="color: #667eea; text-decoration: none; font-weight: bold;">← Späť na hlavnú stránku</a>
</p>
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
console.log('\nDostupné endpointy:');
console.log(` http://${hostname}:${port}/`);
console.log(` http://${hostname}:${port}/test`);
console.log(` http://${hostname}:${port}/funkcia?a=5&b=3`);
console.log(` http://${hostname}:${port}/dalsiafunkcia`);
});