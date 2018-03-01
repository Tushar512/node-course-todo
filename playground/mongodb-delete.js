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

  // dbo.collection("Users").deleteMany({name: "Tushar Agrawal"}).then((result) => {
  //   console.log(result);
  // });
  // dbo.collection("Users").deleteOne({name: "Kaveri Agrawal"}).then((result) => {
  //   console.log(result);
  // });

  // dbo.collection("Users").findOneAndDelete({name: "Ritu Agrawal"}).then((result) => {
  //   console.log(result);
  // });

  db.close();
});
