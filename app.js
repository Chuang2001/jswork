const express = require('express')
const app = express()
const bobyParser = require("boby-parser")

app.use(express.static('.'))
app.use(bobyParser.json());
app.use(bobyParser.urlencoded({extended:false}));
app.post('/formBuilder', function(req,res){
    console.log(req.boby)
    res.send(req.boby)
})

app.listen(8080,()=> console.log('onde express 服务器已启动，监听端口：8080'))

const openDefaultBrowser = function(url){
    var exec = require('child_process').exec;
    switch(process.platform){
        case "darwin":
            exec('open' + url);
            break;
            case "win32":
                exec('start'+url);
                break;
                default:
                    exec('xdg-open' , [url]);
    }
}
openDefaultBrowser('http://localhost:80880')