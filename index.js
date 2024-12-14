const http = require('http');
const fs = require('fs');
const path = require('path');
const mimeTypes = {
    '.html': 'text/html',
    '.js': 'text/javascript',
    '.css': 'text/css',
    '.json': 'application/json',
    '.png': 'image/png',
    '.jpg': 'image/jpg',
    '.gif': 'image/gif',
    '.svg': 'image/svg+xml',
    '.wav': 'audio/wav',
    '.mp4': 'video/mp4',
    '.woff': 'application/font-woff',
    '.ttf': 'application/font-ttf',
    '.eot': 'application/vnd.ms-fontobject',
    '.otf': 'application/font-otf',
    '.wasm': 'application/wasm'
};


function loadEnv() {

    const envFile = fs.readFileSync('.env', 'utf-8');
    const envLines = envFile.split('\n');
    const envVariables = {};
    envLines.forEach(line => {
        // Ignora linhas vazias e comentários
        if (line && !line.startsWith('#')) {
            const [key, value] = line.split('=');
            envVariables[key.trim()] = value.trim();
        }

    });
    return envVariables;
}

const env = loadEnv();


const server = http.createServer((req, res) => {
    let filePath = '.' + req.url;
    switch(filePath) {
        case "./":
            filePath = './index.html';
            break;
    }

    const extname = String(path.extname(filePath)).toLowerCase();
    const contentType = mimeTypes[extname] || 'application/octet-stream';

    fs.readFile(filePath, (error, content) => {
        if (error) {
            if (error.code == 'ENOENT') {
                res.writeHead(404, {'Content-Type': 'text/html'});
                res.end(`<h1>Erro ao carregar a pagina</h1><p>${error.message}</p><br><a href="/">voltar</a>`, 'utf-8');
            } else {
                res.writeHead(500,{'Content-Type': 'text/html'});
                res.end(`<h1>Erro ao carregar a pagina</h1><p>${error.message}</p><br><a href="/">voltar</a>`, 'utf-8');
            }
        } else {
            res.writeHead(200, { 'Content-Type': contentType });
            res.end(content, 'utf-8');
        }
    });
});

server.listen(env.PORT, () => {
    console.log(`Servidor rodando em http://localhost:${env.PORT}`);
});