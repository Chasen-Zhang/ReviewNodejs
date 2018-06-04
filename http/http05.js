let http = require('http');

let url = require('url');

let querystring = require('querystring');

//创建服务器
let server = http.createServer((req, res)=>{
    let urls = req.url;
    let muUrl = url.parse(urls,true);
    if(urls!="/favicon.ico"){
        if(req.url ==='/postMessage' && req.method.toLowerCase()==='post'){
            var allData = "";

            //接收小段数据
            req.on('data',(buf)=>{
                allData += buf;
            });
            //所有数据都接收完毕
            req.once("end",()=>{
                console.log(querystring.parse(allData));
            });

        }
        res.writeHead(200, {
            "Content-Type":"text/html;charset=utf-8"
        });
        res.end("hello world");
    }
});

//监听
console.log("服务监听中");
server.listen(8080,"127.0.0.1");