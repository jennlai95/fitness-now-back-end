const mongoose = require('mongoose');

const ScheduleSchema = new Schema({
    class: {
        type: Schema.Types.ObjectId,
        ref: 'Class',
        index: true
      },
    
    startTime: {
        type: Number,
        required: true,
    },

    endTime: {
        type: Number,
        required: true,
    },

    timestamps: true
})

// const ModelName = mongoose.model('Name that appears in mongosh or Cloud Atlas GUI', SchemaThatModelIsBasedOn);
const Schedule = mongoose.model("Schedule", ScheduleSchema);

module.exports = { Schedule };