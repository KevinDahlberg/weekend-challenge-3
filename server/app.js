var express = require('express');
var app = express();
var path = require('path');
var bodyParser = require('body-parser');
var list = require('./routes/list.js');
var port = 4000;

//uses
app.use(express.static('server/public', {
  index: 'views/index.html'}));
app.use(bodyParser.urlencoded({extended: true}));
app.use('/list', list);

//listening
app.listen(port, function(){
  console.log("Listening to: ", port);
});
