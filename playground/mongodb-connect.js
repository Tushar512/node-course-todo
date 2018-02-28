// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require("mongodb");

var obj = new ObjectID();
console.log(obj);
MongoClient.connect('mongodb://localhost:27017/', (err, db) => {
  if(err) {
    return console.log("Unable to connect to MongoDB server");
  }
  console.log("Connected to MongoDB server");
  var dbo = db.db("TodoApp");

  // dbo.collection("Todos").insertOne({
  //   text: "Something to do",
  //   completed: false
  // }, (err, result) => {
  //   if(err) {
  //     return console.log("Unable to insert todo ",err);
  //   }
  //   console.log(result.ops[0]._id.getTimestamp());
  // });
  dbo.collection("Users").insertOne({
    name: "Tushar Agrawal",
    age: 22,
    location: "India"
  }, (err, results) => {
    if(err) {
      return console.log("Unable to insert user ",err);
    }
    console.log(JSON.stringify(results.ops, undefined, 2));
  });
  db.close();
});
