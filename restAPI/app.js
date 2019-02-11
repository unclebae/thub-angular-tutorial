// http 를 이용할 수 있도록 설정합니다. 
const http = require('http');

// 호스트 주소와, 포트를 지정합니다. 
const hostname = '127.0.0.1';
const port = 4900;

// 사용자 정보를 내려줄 간단한 JSON Object 를 생성합니다. 
// userId, userName, email, role 등이 있습니다. 
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

// 이제 서버를 생성하겠습니다. 
// http.createServer 을 하면 서버 객체를 하나 생성합니다. 
// server 는 요청 req, 응답 res 가 있기 때문에 (req, res) 로 지정하였습니다. 
// => 는 lambda 함수를 의미합니다. 익명 함수입니다. 
const server = http.createServer((req, res) => {
    try {
        res.statusCode = 200;   // 응답 상태코드는 200 을 반환합니다. (OK)
        res.setHeader('Content-Type', 'text/plain'); // 응답 컨텐츠 타입을 지정합니다. 여기서는 단순 텍스트로 지정하였습니다. 
        res.setHeader('Access-Control-Allow-Origin', '*');
        res.setHeader('Access-Control-Allow-Credentials', 'true');
        // JSON 객체를 스트링 형태로 반환합니다. JSON.stringify 함수를 이용하면 JSON 객체를 스트링으로 변경이 가능합니다. 
        res.end(JSON.stringify(userInfos));    
    } catch (error) {
        console.error("ERROR: " + error);
    }
    
});

// 이제 서버를 호스트이름과 포트를 이용하여 기동하고, 클라이언트 접속을 기다리도록 만들어 줍니다. 
server.listen(port, hostname, () => {
    console.log('Started server http://${hostname}:${port}/');
});