const mongoose = require("mongoose");

const postSchema = mongoose.Schema({
  author: {
    type: String,
    required: true,
  },
  post: {
    type: String,
    required: true,
    default: "",
  },
  date_published: {
    type: Date,
    default: Date.now(),
  },
});

const Posts = mongoose.model("posts", postSchema);
module.exports = Posts;
