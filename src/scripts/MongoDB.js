// Retrieve
var MongoClient = require('mongodb').MongoClient;

// Connect to the db
MongoClient.connect("mongodb://NectarineSnakeUser:ekans@ds027618.mongolab.com:27618/nectarine-snake", function(err, db) {
  if(!err) {
    console.log("We are connected");
  }
});