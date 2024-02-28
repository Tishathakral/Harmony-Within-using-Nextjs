// This file contains the methods to handle the user routes, basically contains all the required functions

import User from "../models/users.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const createUser = async (req, res) => {
  const { name, email, password } = req.body;
  if (!name || !email || !password) {
    return res.status(400).send("Please fill all the fields");
  }
  const existingUser = await User.findOne({ email });
  if (existingUser) {
    return res.status(400).send("User already exists");
  }
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);
  const user = await User.create({ name, email, password: hashedPassword });
  res.json(user);
};

const loginUser = async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return res.status(400).send("Please fill all the fields");
  }
  const user = await User.findOne({ email });
  if (!user) {
    return res.status(400).send("User not found");
  }
  const validPassword = await bcrypt.compare(password, user.password);
  if (!validPassword) {
    return res.status(400).send("Invalid password");
  }
  const token = jwt.sign({ _id: user._id }, 'secret');
  res.json({ token, msg: "Logged in" });
};

const getUser = async (req, res) => {
  const users = await User.find();
  const data = users.map((user) => {
    return {
      id: user._id,
      name: user.name,
      email: user.email,
    };
  });
  res.send(data);
};

const getUserById = async (req, res) => {
  const { id } = req.params;
  if (!id) {
    return res.status(400).send("Please provide user id");
  }
  const user = await User.findById(id);
    if (!user) {
        return res.status(400).send("User not found");
    }
  const data = {
    id: user._id,
    name: user.name,
    email: user.email,
  };
  res.send(data);
};

const updateUser = async (req, res) => {
  const { id } = req.params;
  if (!id) {
    return res.status(400).send("Please provide user id");
  }
  const { name, email, password } = req.body;
  const existingEmail = await User.findOne({ email });
  if (existingEmail) {
    return res.status(400).send("Email already exists");
  }
  await User.findByIdAndUpdate(id, { name, email, password });
  res.send("User updated");
};

const deleteUser = async (req, res) => {
  const { id } = req.params;
  if (!id) {
    return res.status(400).send("Please provide user id");
  }
  await User.findByIdAndDelete(id);
  res.send("User deleted");
};

export { createUser, getUser, getUserById, updateUser, deleteUser, loginUser };
