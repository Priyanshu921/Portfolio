const fs = require('fs');
let c = fs.readFileSync('src/portfolio.jsx', 'utf8');
c = c.replace(/require\((['"`])(.*?)\1\)/g, 'new URL($1$2$1, import.meta.url).href');
fs.writeFileSync('src/portfolio.jsx', c);
