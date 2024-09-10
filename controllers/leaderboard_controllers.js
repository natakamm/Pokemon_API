const Leaderboard = require("../schemas/Leaderboard");

const createOrUpdateUser = async (req, res) => {
  //game result will be lose or win based on how the game goes and that will be sent to backend with username
  const { username, gameResult } = req.body;
  let won = 0;
  let lost = 0;

  if (gameResult === "win") {
    win = 1;
  } else if (gameResult === "lost ") {
    lose = 1;
  } else {
    res
      .status(400)
      .json({ message: "Something went wrong. Invalid game result" });
  }

  try {
    //find user and update. $inc increments a field by a specified value. If gameResult is win, than won = 1, else 0 = 1
    const user = await Leaderboard.findOneAndUpdate(
      { username },
      { $inc: { won: won, lost: lost, battle: 1 } },
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

module.exports = { getAllUsers, createOrUpdateUser };
