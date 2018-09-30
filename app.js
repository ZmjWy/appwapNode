var express = require("express");
var app = express();

app.use(express.static("public"));

app.get("/",function(req,res){
	res.send("hello");

});

app.listen(8888);
console.log("服务器启动成功！")