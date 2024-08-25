const express = require('express');
const Post = require('../models/Post');


const router = express.Router();

router.post('/post', async (req, res) => {
  const { username, title, description, category, language, keyskills} = req.body;

  try {
    let postData = new Post({
      username,
      title,
      description,
      category,
      language,
      keyskills
    });

    // Save the user to the database
    await postData.save();
    console.log(postData);
    res.status(201).json({ message: "post uploaded sucessfully" });
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Server error");
  }
});

module.exports = router;