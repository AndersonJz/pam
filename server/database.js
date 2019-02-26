const MongoClient = require('mongodb').MongoClient;

const URI = 'mongodb+srv://kido:speed@cluster0-b2bso.mongodb.net/test?retryWrites=true';


const client = new MongoClient(URI, { useNewUrlParser: true });
client.connect(err => {
    const collection = client.db("pam").collection("devices");
    // perform actions on the collection object
    client.close();
});


MongoClient.connect(URI)
    .then(db => console.log('DB is connected'))
    .catch(err => console.error(err));

module.exports = MongoClient;