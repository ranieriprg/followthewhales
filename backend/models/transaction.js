const mongoose = require("mongoose");

const transactionSchema = new mongoose.Schema({
  from: { type: String, required: true },
  to: { type: String, required: true },
  value: { type: Number, required: true },
  timestamp: { type: Date, required: true },
  token: { type: String },
});

const Transaction = mongoose.model("Transaction", transactionSchema);

module.exports = Transaction;
