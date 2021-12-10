const express = require("express");
const cors = require("cors");
require ('dotenv').config();
const mongoose = require("mongoose");


// set port, listen for requests
const PORT = process.env.PORT || 8080;
const uri = process.env.ur;
mongoose.connect(uri);
const app = express();

app.use(cors());
app.use(express.json());

mongoose.connection.once('open',() => {
    console.log("connected");
})

const issueRouter = require("./router.issue");

app.use('/issue', issueRouter);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});