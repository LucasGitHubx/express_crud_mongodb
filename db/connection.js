const mongoose = require("mongoose");

const uri =
  "mongodb+srv://lucasdarosa450:root@cluster0.h8yijlf.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

const db = mongoose.connection;

async function connect() {
  try {
    await mongoose.connect(uri);
    console.log("Connected succesfully");
  } catch (err) {
    console.error(err);
  }
}

module.exports = { connect, db };
