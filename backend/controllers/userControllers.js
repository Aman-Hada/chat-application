const asyncHandler = require("express-async-handler");
const User = require("../models/userModel");
const generateToken = require("../config/generateToken");

const registerUser = asyncHandler(async (req, res) => {
  const { name, email, username, password, pic } = req.body;

  if (!name || !email || !password || !username) {
    console.log("Please Enter all the fields");
    res.status(400);
    throw new Error("Please Enter all the fields");
  }

  const userExists = await User.findOne({ username });

  if (userExists) {
    console.log("User already exists");
    res.status(400);
    throw new Error("User Already Exists");
  }

  const user = await User.create({
    name,
    email,
    username,
    password,
    pic,
  });

  if (user) {
    console.log("done");
    res.send(201).json({
      _id: user._id,
      name: user.name,
      email: user.email,
      username: user.username,
      pic: user.pic,
      token: generateToken(user._id),
    });
  } else {
    console.log("Failed to create the user");
    res.status(400);
    throw new Error("Failed to create the user");
  }
});

const authUser = asyncHandler(async (req, res) => {
  const { username, password } = req.body;

  const user = await User.findOne({ username });

  if (user && (await user.matchPassword(password))) {
    res.json({
      _id: user._id,
      name: user.name,
      email: user.email,
      username: user.username,
      pic: user.pic,
      token: generateToken(user._id),
    });
  } else {
    res.status(401);
    throw new Error("Invalid Username or Password");
  }
});

module.exports = { registerUser, authUser };
