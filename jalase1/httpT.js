const http=require('http')
const server=http.createServer(function (req,res){
    if (req.url=="/"){res.write("<h1>salam in darmorede dore farawine</h1>");
    res.end();
    }
}
)
server.listen(3000,()=>{console.log("server is running")})