const express = require("express");
const {
  getAllUsers,
  createOrUpdateUser,
  deleteUser,
} = require("../controllers/leaderboard_controllers");

const api = express.Router();

api.route("/").get(getAllUsers).post(createOrUpdateUser);
api.route("/:id").delete(deleteUser);

module.exports = api;
