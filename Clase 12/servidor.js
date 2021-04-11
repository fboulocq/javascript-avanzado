/*
    En consola ejecuto este comando para ver los puertos en uso:    
        -netstat -ao : me dice que puerto están en uso y quién los está usando.
        -netstat -abo
    
    
*/

const http = require("http");

const server = http.createServer();
server.on("request", (req, res)=>{
    res.end("Hola mundo");
})
server.listen(8000);