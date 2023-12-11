const mongoose = require('mongoose');

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