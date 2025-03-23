const mongoose = require("mongoose");

const cartSchema = new mongoose.Schema({
   itemId: Number,

});

module.exports = mongoose.model("Cart", cartSchema);