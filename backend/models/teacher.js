const mongoose  = require('mongoose');
const Schema    = mongoose.Schema;
/*
    When creating a schema see the data specs in data/users
*/

var teacherSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    username: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        trim: true
    },
    password: {
        type: String,
        required: true,
        trim: true,
        minlength: 7
    },
    phone: {
        type: String,
        required: true,
        trim: true,
        minlength: 10,
        maxlength: 10
    },
    location: {
        type: String,
        required: true,
    },
    educationLevel: {
        type: String,
        required: true,
    },
    specialization: {
        type: String,
        required: true,
    },
    bio: {
        type: String,
        required: true,
    },
    educationHistory: {
        type: String,
        required: true,
    },
    subjectsOffered: {
        type: String,
        required: true,
    },
    availability: {
        type: String,
        required: true,
    },
    avgHourlyRate: {
        type: String,
        required: true,
    },
    imgUrl: {
        type: String
    }
});


var Teacher        = mongoose.model('Teacher', teacherSchema);
module.exports = Teacher