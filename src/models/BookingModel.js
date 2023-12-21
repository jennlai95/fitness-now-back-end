// import Mongoose
const mongoose = require('mongoose');
const Schema = mongoose.Schema;


// create booking schema 
const BookingSchema = new Schema({
    name: {
      type: String,
      required: true
    },

    date: {
        type: Date,
        required: true,
    },

    price: {
        type: String,
        required: true
    
    },

    // import Schedule model schema 
    schedule: {
        type: Schema.Types.ObjectId,
        ref: 'Schedule', 
        index: true
    },
    
});


const Booking =  mongoose.model('Booking', BookingSchema);

module.exports = { Booking } 