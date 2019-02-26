const mongoose = require('mongoose');
const { Schema } = mongoose;

const PersonSchema = new Schema({
    name: { type: String, required: true },
    age: { type: Number, required: true },


});



module.exports = mongoose.model('Person', PersonSchema);