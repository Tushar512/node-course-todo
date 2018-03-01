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

  dbo.collection("Users").findOneAndUpdate({
    _id: new ObjectID("5a97e851665c37467593d164")
  }, {
    $set: {
      name: "Tushar"
    },
    $inc: {
      age: 1
    }
  }, {
    returnOriginal: false
  }).then((result) => {
    console.log(result);
  });

  db.close();
});
