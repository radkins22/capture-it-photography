const mongoose = require("mongoose");

const ccInfoSchema = new mongoose.Schema({
    fullName: {type: String, required: true},
    email: {type: String, required: true},
    address: {type: String, required: true},
    city: {type: String, required: true},
    state: {type: String, required: true},
    zipcode: {type: Number, required: true},
    isChecked: {type: Boolean, required: true},

    fullName2: String,
    email2: String,
    address2: String,
    city2: String,
    state2: String,
    zipcode2: Number, 

    cardName: {type: String, required: true},
    cardNumber:{type: Number, required: true},
    expMonth: {type: String, required: true},
    expYear:{type: Number, required: true},
    cardCVV: {type: Number, required: true},
    storeTotal: Number

});

module.exports = mongoose.model("CCInfo", ccInfoSchema);