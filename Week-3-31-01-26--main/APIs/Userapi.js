import exp from "express";
import { UserModel } from "../Models/UserModel.js";
import { hash, compare } from "bcryptjs";
import jwt from "jsonwebtoken";
import { verifyToken } from "../Middlewares/verifyToken.js";

export const userApp = exp.Router();

// CREATE user
userApp.post("/users", async (req, res) => {
  const newUser = req.body;

  newUser.password = await hash(newUser.password, 5);

  const newUserDoc = new UserModel(newUser);
  await newUserDoc.save();

  res.status(201).json({ message: "user created" });
});

// LOGIN
userApp.post("/auth", async (req, res) => {
  const userCred = req.body;

  const userOfDB = await UserModel.findOne({ username: userCred.username });
  if (!userOfDB) {
    return res.status(401).json({ message: "Invalid username" });
  }

  const isPasswordValid = await compare(
    userCred.password,
    userOfDB.password
  );

  if (!isPasswordValid) {
    return res.status(401).json({ message: "Invalid password" });
  }

  const signedToken = jwt.sign(
    { username: userOfDB.username },
    "abcd",
    { expiresIn: "10m" }
  );

  res.status(200).json({ message: "login success", token: signedToken });
});

// GET all users
userApp.get("/users", async (req, res) => {
  const users = await UserModel.find();
  res.status(200).json({ message: "users", payload: users });
});

// GET user by id
userApp.get("/users/:id", async (req, res) => {
  const user = await UserModel.findById(req.params.id);
  res.status(200).json({ message: "user", payload: user });
});

// UPDATE user
userApp.put("/users/:id", async (req, res) => {
  const latestUser = await UserModel.findByIdAndUpdate(
    req.params.id,
    { $set: req.body },
    { new: true }
  );

  res.status(200).json({ message: "user modified", payload: latestUser });
});

// DELETE user
userApp.delete("/users/:id", async (req, res) => {
  const deletedUser = await UserModel.findByIdAndDelete(req.params.id);
  res
    .status(200)
    .json({ message: "user deleted successfully", payload: deletedUser });
});

// TEST protected route
userApp.get("/test", verifyToken, (req, res) => {
  res.json({ message: "test route", user: req.user });
});
