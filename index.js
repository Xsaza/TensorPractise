var express = require('express');
var app = express();
var port = 3000;

var mongoClient = require("mongodb").MongoClient;
var url = 'mongodb+srv://PinkInk:XpinkQ321C@cluster0-yg51d.mongodb.net/test?retryWrites=true';

app.get('/', function(req, res){
  mongoClient.connect(url, function(err, client){
    if (err) return;

    client.db("database_testname").collection("collection_testname").find({}).toArray(function(err, goods){
      res.send(goods);
    });
    
    client.close();
    
  }); 
});

app.listen(port, function(){
  console.log(`port ${port} listening`);
});