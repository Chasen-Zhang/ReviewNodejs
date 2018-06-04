let http = require('http');

//创建服务器
let server = http.createServer((req, res)=>{
    console.log(req.url);
    res.writeHead(200, {
        "Content-Type":"text/html;charset=utf-8"
   });
    res.write('hello');
    res.write('world');
    res.end()
});

//监听
console.log("服务监听中");
server.listen(80,"127.0.0.1");