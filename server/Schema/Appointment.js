const mongoose = require("mongoose");

const appointmentSchema = new mongoose.Schema({
    firstName: {type: String, required: true},
    lastName: {type: String, required: true},
    email: {type: String, required: true},
    phone: {type: String, required: true},
    eventType: {type: String, required: true},
    location: {type: String, required: true},
    date: { type: String, default: Date.now, required: true}
});

module.exports = mongoose.model("Appointment", appointmentSchema);