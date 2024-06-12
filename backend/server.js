const express = require("express");
const connectMongoDb = require('./db/mongoose');
const app = express();


require("dotenv").config();
connectMongoDb();
app.get("/", (req, res) => res.send("API Running"));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));


