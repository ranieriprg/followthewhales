const { Address, Transaction } = require("../models");

const addAddress = async (req, res) => {
  try {
    const address = new Address(req.body);
    await address.save();
    res.status(201).send(address);
  } catch (error) {
    res.status(400).send(error);
  }
};

const getTransactions = async (req, res) => {
  const address = req.params.address;
  try {
    const transactions = await Transaction.find({
      $or: [{ from: address }, { to: address }],
    });
    res.send(transactions);
  } catch (error) {
    res.status(500).send(error);
  }
};

const analyzeAddress = async (req, res) => {
  const address = req.params.address;
  try {
    const transactions = await Transaction.find({
      $or: [{ from: address }, { to: address }],
    });
    res.send({ message: "Análise feita" });
  } catch (error) {
    res.status(500).send(error);
  }
};

module.exports = {
  addAddress,
  getTransactions,
  analyzeAddress,
};
