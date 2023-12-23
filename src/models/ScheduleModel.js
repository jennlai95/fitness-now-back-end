const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ScheduleSchema = new Schema({
    classID: {
        type: Schema.Types.ObjectId,
        ref: 'Class',
        index: true
      },
    
      time: {
        start: {
            type: String,
            required: true,
        },
        end: {
            type: String,
            required: true,
        }
    },

    date: {
        type: Date,
        required: true,
    },
});

// const ModelName = mongoose.model('Name that appears in mongosh or Cloud Atlas GUI', SchemaThatModelIsBasedOn);
const Schedule = mongoose.model("Schedule", ScheduleSchema);

module.exports = { Schedule };