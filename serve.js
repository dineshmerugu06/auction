// BidHouse local dev server — zero dependencies, Node only.
// Serves this folder under the site's real prefix (/<repo name>/),
// exactly like GitHub Pages, so absolute paths work locally.
const http = require('http');
const fs = require('fs');
const path = require('path');

const ROOT = __dirname;
const PREFIX = '/' + require('./package.json').name;
const PORT = process.env.PORT || 3000;
const MIME = { '.html':'text/html', '.css':'text/css', '.js':'text/javascript', '.json':'application/json', '.png':'image/png', '.jpg':'image/jpeg', '.jpeg':'image/jpeg', '.gif':'image/gif', '.svg':'image/svg+xml', '.webp':'image/webp', '.ico':'image/x-icon', '.mp4':'video/mp4', '.webm':'video/webm', '.woff':'font/woff', '.woff2':'font/woff2', '.ttf':'font/ttf', '.txt':'text/plain', '.xml':'application/xml', '.pdf':'application/pdf' };

http.createServer((req, res) => {
  let url = decodeURIComponent(req.url.split('?')[0]);
  if (url === '/') { res.writeHead(302, { Location: PREFIX + '/' }); return res.end(); }
  if (!url.startsWith(PREFIX)) { res.writeHead(404); return res.end('Not found'); }
  let file = path.join(ROOT, url.slice(PREFIX.length));
  if (!file.startsWith(ROOT)) { res.writeHead(403); return res.end(); }
  if (fs.existsSync(file) && fs.statSync(file).isDirectory()) file = path.join(file, 'index.html');
  fs.readFile(file, (err, data) => {
    if (err) { res.writeHead(404); return res.end('Not found'); }
    res.writeHead(200, { 'Content-Type': MIME[path.extname(file).toLowerCase()] || 'application/octet-stream' });
    res.end(data);
  });
}).listen(PORT, () => console.log(`BidHouse dev: http://localhost:${PORT}${PREFIX}/`));
