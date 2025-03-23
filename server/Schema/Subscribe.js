const mongoose = require("mongoose");

const subscribeSchema = new mongoose.Schema({
    subscriberEmail: {type: String, required: true},
    password: {type: String, required: true},
    repeatPassword: {type: String, required: true},
    rememberMe: Boolean, 
});

module.exports = mongoose.model("Subscribe", subscribeSchema);