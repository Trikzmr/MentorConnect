const express = require('express');
const bcrypt = require('bcryptjs');
const User = require('../models/RegistrationSchema');
const jwt = require('jsonwebtoken'); // For token-based authentication

const router = express.Router();

router.post('/register', async (req, res) => {
  const { firstName, lastName, dateOfBirth, email, username, password } = req.body;

  try {
    // Check if the user already exists
    let user = await User.findOne({ email });
    if (user) {
      return res.status(400).json({ message: "User already exists" });
    }

    // Hash the password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // Create a new user
    user = new User({
      firstName,
      lastName,
      dateOfBirth,
      email,
      username,
      password: hashedPassword,
    });

    // Save the user to the database
    await user.save();
    console.log(user);
    res.status(201).json({ message: "User registered successfully" });
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Server error");
  }
});




//Login Route
// Login route
router.post('/login', async (req, res) => {
    const { email, password } = req.body;
  
    try {
      // Check if user exists
      const user = await User.findOne({ email });
      if (!user) {
        return res.status(400).json({ message: "Invalid credentials" });
      }
  
      // Compare the provided password with the stored hashed password
      const isMatch = await bcrypt.compare(password, user.password);
      if (!isMatch) {
        return res.status(400).json({ message: "Invalid credentials" });
      }
  
      // Generate a JWT token
      const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });
  
      // Respond with the token and user info (excluding password)
      res.json({
        token,
        user: {
          id: user._id,
          firstName: user.firstName,
          lastName: user.lastName,
          email: user.email,
          username: user.username,
        }
      });
    } catch (error) {
      console.error(error.message);
      res.status(500).send("Server error");
    }
  });

module.exports = router;
