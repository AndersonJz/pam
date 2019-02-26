const mongoose = require('mongoose');
const URI = 'mongodb+srv://kido:speed@db-jjmjv.mongodb.net/test?retryWrites=true';

mongoose.connect(URI)
    .then(db => console.log('db is connected'))
    .catch(err => console.error(err));

module.exports = mongoose;

/*const MongoClient = require('mongodb').MongoClient;

const URI = 'mongodb+srv://kido:speed@db-jjmjv.mongodb.net/admin';


const client = new MongoClient(URI, { useNewUrlParser: true });
client.connect(err => {
    const collection = client.db("test").collection("devices");
    // perform actions on the collection object
    client.close();
});


MongoClient.connect(URI)
    .then(db => console.log('DB is connected'))
    .catch(err => console.error(err));

module.exports = MongoClient; */