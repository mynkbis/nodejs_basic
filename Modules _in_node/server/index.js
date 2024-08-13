const express = require('express')

const app = express();

app.get('/',(req, res)=>{
res.send("Hello from homepage")
})

app.get('/about',(req, res)=>{
    res.send("Hello from about")
    })
    
    app.get('*',(req, res)=>{
        res.send("not found 404")
        })

app.listen(8000, ()=>{console.log("Server is up")})