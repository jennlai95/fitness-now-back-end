// import mongoose
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// create class Schema 
const ClassSchema = new Schema({
    name: {
      type: String,
      required: true
    },

    description: {
        type: String,
        required: true
    
    },

    admin: {
        type: Schema.Types.ObjectId,
        ref: 'User', 
        index: true
    },
    
});


const Class =  mongoose.model('Class', ClassSchema);

module.exports = { Class } 