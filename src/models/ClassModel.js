// import mongoose
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// create class Schema 
const ClassSchema = new Schema({
    Classname: {
      type: String,
      required: true
    },

    description: {
        type: String,
        required: true
    
    },

    username: {
        type: Schema.Types.ObjectId,
        ref: 'User', 
        index: true
    },
    
});


const Class =  mongoose.model('Class', ClassSchema);

module.exports = { Class } 