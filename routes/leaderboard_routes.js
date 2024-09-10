const express = require("express");
const {
  getAllUsers,
  createOrUpdateUser,
} = require("../controllers/leaderboard_controllers");

const api = express.Router();

api.route("/").get(getAllUsers).post(createOrUpdateUser);

module.exports = api;
