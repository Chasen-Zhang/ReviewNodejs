let http = require('http');

let fs = require('fs');

//创建服务器
let server = http.createServer((req, res)=>{
    let urls = req.url;
    res.writeHead(200, {
        "Content-Type":"text/html;charset=utf-8"
    });
    if(urls=='/page1'){

        fs.readFile('./test1.html',(err, data)=>{
            if(!err){
                res.write(data.toString());
                res.end();
            }
        });
    }else if(urls=='/test2.html'){
        fs.readFile('./test2.html',(err, data)=>{
            if(!err){
                res.write(data.toString());
                res.end();
            }
        });
    }else if(urls=='/'){
        res.end("根目录");
    }else if(urls=='/css/index.css'){
        fs.readFile('./css/index.css',(err, data)=>{
            if(!err){
                res.writeHead(200, {
                    "Content-Type":"text/css"
                });
                res.end(data);
            }
        });
    }else{
        res.writeHead(404, {
            "Content-Type":"text/html;charset=utf-8"
        });
        res.end("访问的页面不存在")
    }


    console.log(req.urls);

});

//监听
console.log("服务监听中");
server.listen(82,"127.0.0.1");