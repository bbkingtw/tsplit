var argv=require('optimist').argv
var express=require('express')
var app=express()
var port=argv.port||8888
app.get('/:s', function(req,res){
	res.send(req.params.s+' on port='+port);
});
app.listen(port)
