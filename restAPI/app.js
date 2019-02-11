const http = require('http');

const hostname = '127.0.0.1';
const port = 4900;

var userInfos = [
    {
        "userId":"ID1100",
        "userName":"KIDO",
        "email":"kido.bae@sk.com",
        "role":"MASTER"
    },
    {
        "userId":"ID1101",
        "userName":"YOU",
        "email":"you@sk.com",
        "role":"MASTER"
    },
    {
        "userId":"ID1102",
        "userName":"MEME",
        "email":"meme@sk.com",
        "role":"VISITOR"
    },
    {
        "userId":"ID1103",
        "userName":"ADMIN",
        "email":"admin@sk.com",
        "role":"ADMIN"
    }
];

const server = http.createServer((req, res) => {
    try {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/plain');
        res.end(JSON.stringify(userInfos));    
    } catch (error) {
        console.error("ERROR: " + error);
    }
    
});

server.listen(port, hostname, () => {
    console.log('Started server http://${hostname}:${port}/');
});