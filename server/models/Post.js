const mongoose = require('mongoose');


// username, title, description, category, language, keyskills
const postSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  language: {
    type: String,
    required: true,
  },
  keyskills: {
    type: String,
    required: true,
  }
}, { timestamps: true });

const Post = mongoose.model('Post', postSchema);

module.exports = Post;



