var express = require('express');
var router = express.Router();
var pg = require('pg');

var config = {
  database: "chi", //DB name
  host: 'localhost', //host for the DB
  port: 5432, // port for the database
  max: 10, // how many connections at one time
  idleTimeoutMillis: 30000 // 30 seconds to try to connect
};

var pool = new pg.Pool(config); //allows us to have more than one connection at a time

router.get('/', function(req, res){
  // SELECT * From "list";
  pool.connect(function(errorConnectingToDatabase, client, done){
    if(errorConnectingToDatabase) {
      console.log("Error connecting to DB");
      res.send(500);
    } else {
      console.log("connected");
      client.query('SELECT * From "list";', function(queryError, result){
        done();
        if(queryError){
          console.log("Error making query.");
          res.sendStatus(500);
        } else {
          console.log("list sent");
          res.send(result.rows);
        }
      });
    }
  });
});

//post function to add list item to database
router.post('/newItem', function(req, res){
  console.log(req.body);
  var description = req.body.description;
  pool.connect(function(errorConnectingToDatabase, client, done){
    if(errorConnectingToDatabase) {
      console.log("Error connecting to DB");
      res.send(500);
    } else {
      console.log("connected");
      client.query("INSERT INTO list (description) VALUES ($1);", [description], function(queryError, result){
        done();
        if(queryError){
          console.log("Error making query.");
          res.send(500);
        } else {
          res.sendStatus(201);
        }
      });
    }
  });
});// end post function

//DELETE function to delete from search database
router.delete('/delete/:listId', function(req, res){
  console.log("in the delete function: ", req.params);
  var id = req.params.listId;
pool.connect(function(errorConnectingToDatabase, client, done){
  if(errorConnectingToDatabase) {
    console.log("Error connecting to DB");
    res.send(500);
  } else {
    console.log("connected");
    client.query('DELETE FROM list WHERE "id" = $1', [id], function(queryError, result){
      done();
      if(queryError){
        console.log("Error making query.");
        res.send(500);
      } else {
        res.sendStatus(201);
      }
    });
  }
});
});// end delete function

module.exports = router;
