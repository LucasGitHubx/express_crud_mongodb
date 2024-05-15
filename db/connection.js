const mongoose = require("mongoose");
const { USERNAME, PASSWORD } = require("../constants");

const uri = `mongodb+srv://${USERNAME}:${PASSWORD}@cluster0.h8yijlf.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;

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
