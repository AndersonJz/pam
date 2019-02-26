const mongoose = require('mongoose');
const URI = 'mongodb+srv://kido:speed@db-jjmjv.mongodb.net/test?retryWrites=true';

mongoose.connect(URI)
    .then(db => console.log('db is connected'))
    .catch(err => console.error(err));

module.exports = mongoose;