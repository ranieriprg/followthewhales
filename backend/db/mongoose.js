const mongoose = require("mongoose");

const mongoUri =
  process.env.MONGO_URI || "mongodb://admin:secret@localhost:27017/admin";

function connectMongoDb() {
  mongoose
    .connect(mongoUri, { dbName: "wallets" })
    .then(() => {
      console.log("Mongodb connected. ");
    })
    .catch((err) => {
      console.log("Erro ao conectar no banco", err);
    });
}
module.exports = connectMongoDb;