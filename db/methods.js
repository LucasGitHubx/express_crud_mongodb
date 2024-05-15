require("./connection");
const Posts = require("./models/Post");

async function get(res) {
  try {
    const posts = await Posts.find();
    res.status(200).json({ posts });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

async function getOne(res, id) {
  try {
    const post = await Posts.findById(id);

    if (post === null) {
      return res.status(404).json({ message: "The id you gave doesn't exist" });
    }
    res.status(200).json({ post });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

async function post(res, document) {
  try {
    await Posts.create(document);
    res.status(201).json({ message: "Post created successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

async function put(res, id, document) {
  try {
    const post = await Posts.findByIdAndUpdate(id, document);

    if (post === null) {
      return res.status(404).json({ message: "The id you gave doesn't exist" });
    }
    res.status(200).json({ message: "Post updated successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

async function remove(res, id) {
  try {
    const post = await Posts.findOne({ _id: id });

    if (post === null) {
      return res.status(404).json({ message: "The id you gave doesn't exist" });
    } else {
      await Posts.deleteOne({ _id: id });
      res.status(200).json({ message: "Post deleted successfully" });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

module.exports = { get, getOne, post, put, remove };
