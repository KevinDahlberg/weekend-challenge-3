var express = require('express');
var app = express();
var path = require('path');
var bodyParser = require('body-parser');
var port = 4000;

//uses
app.use(express.static('server/public'));
app.use(bodyParser.urlencoded({extended: true}));
app.use('/', index);

//listening
app.listen(port, function(){
  console.log("Listening to: ", port);
});
