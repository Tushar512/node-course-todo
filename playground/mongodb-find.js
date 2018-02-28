// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require("mongodb");

MongoClient.connect('mongodb://localhost:27017/', (err, db) => {
  if(err) {
    return console.log("Unable to connect to MongoDB server");
  }
  console.log("Connected to MongoDB server");
  var dbo = db.db("TodoApp");

  // dbo.collection("Todos").find({
  //   _id: new ObjectID("5a96261f1521986468a12ea0")
  // }).toArray().then((docs) => {
  //   console.log("Success");
  //   console.log(JSON.stringify(docs, undefined, 2));
  // }, (err) => {
  //   console.log("Unable to find docs ", err);
  // });

  // dbo.collection("Todos").find().count().then((count) => {
  //   console.log(`Todos count: ${count}`);
  // }, (err) => {
  //   console.log("Unable to find docs ", err);
  // });
  dbo.collection("Users").find({name: "Tushar Agrawal"}).toArray().then((docs) => {
    console.log(JSON.stringify(docs, undefined, 2));
  }, (err) => {
    console.log("Unable to find users ",err);
  });


  // db.close();

});
