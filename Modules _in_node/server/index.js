const http = require("http");
const fs = require("fs")

//creating a server/ initialisation
const myServer = http.createServer((req, res)=>{
    if(req.url === "/favicon.ico") return res.end(); // will stop req log of favicon
    const log = `${Date.now()}: ${req.url} new req received \n`;
    // fs.appendFileSync("log.txt", log)
    fs.appendFile("log.txt", log,()=>{
        switch(req.url){
            case"/": res.end("homePage");
            break;
            case"/about": res.end("About Page is here");
            break;
            default: res.end("404")
        }
    })
} );


// server need to listin to a port or it need a port to run at.
myServer.listen(8000,()=>{
    console.log("server started")
})


// once the server is up you may check you localhost with port 8000, you will get 
// a msj as req recrd