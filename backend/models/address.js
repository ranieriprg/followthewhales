const mongoose = require("mongoose");

const addressSchema = new mongoose.Schema({
  address: { type: String, required: true, unique: true },
  label: { type: String },
  createdAt: { type: Date, default: Date.now },
});

const Address = mongoose.model("Address", addressSchema);

module.exports = Address;
