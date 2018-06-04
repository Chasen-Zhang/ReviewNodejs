let http = require('http');

let url = require('url');

//创建服务器
let server = http.createServer((req, res)=>{
    let urls = req.url;
    let muUrl = url.parse(urls);
    if(urls!="/favicon.ico"){
        console.log(muUrl);
        res.writeHead(200, {
            "Content-Type":"text/html;charset=utf-8"
        });
        res.end("hello world");
    }
});

//监听
console.log("服务监听中");
server.listen(84,"127.0.0.1");