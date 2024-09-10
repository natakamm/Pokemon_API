const Leaderboard = require("../schemas/Leaderboard");

const createOrUpdateUser = async (req, res) => {
  //game result will be lose or win based on how the game goes and that will be sent to backend with username
  const { username, gameResult } = req.body;
  let win = 0;
  let lose = 0;

  if (gameResult === "won") {
    win = 1;
  } else if (gameResult === "lost") {
    lose = 1;
  } else {
    res
      .status(400)
      .json({ message: "Something went wrong. Invalid game result" });
  }

  try {
    //find user and update. If gameResult is "win", than win = 1, else if gameResult is "lost" than lose = 1
    // $inc increments a field by a specified value.
    //upsert creates a document with the requirements if it doesnt already exist
    const user = await Leaderboard.findOneAndUpdate(
      { username },
      { $inc: { won: win, lost: lose, battles: 1 } },
      { new: true, upsert: true }
    );
    res.status(200).json({ message: "User successfully updated", user });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getAllUsers = async (req, res) => {
  try {
    const users = await Leaderboard.find();
    if (!users.length) {
      return res.status(404).json({ message: "No users found in database" });
    }
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const deleteUser = async (req, res) => {
  const { id } = req.params;
  try {
    const user = await Leaderboard.findByIdAndDelete(id);
    if (!user) {
      res.status(404).json({ message: "Sorry, I coudlnt find this user" });
    } else {
      res.status(200).json({ message: "User successfullly deleted" });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = { getAllUsers, createOrUpdateUser, deleteUser };
