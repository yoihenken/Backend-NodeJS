const express = require("express");
const bodyParser = require("body-parser");
const authRouter = require("./app/controllers/auth.route");

const app = express();

const mongoose = require("mongoose");

mongoose.connect(
    "mongodb://localhost:27017/sosmed_api"
).then(() => {
    console.log("Connected to database");
})

app.use(authRouter);

app.use("/", (req, res) => {
    res.send({status : true, message : "domoo"});
})

app.listen(3000, () => {
    console.log("Server Started");
});