 https://pokemon-api-2j5r.onrender.com

The backend is built using Node.js, MongoDB, and Mongoose. It follows a simple MVC (Model-View-Controller) pattern, and its main function is to store and manage the game's leaderboard data. It uses Mongoose to define the schema for the leaderboard, where each player's username (which must be unique) is tracked, along with the number of battles they’ve fought, and their win/loss record.

The leaderboard schema has the following fields:

- username: A unique identifier for each player, with a minimum length of 2 characters and a maximum of 100.
- battles: The total number of battles the player has participated in.
- won: The number of battles the player has won.
- lost: The number of battles the player has lost.

This backend ensures that every player's game statistics are saved and can be retrieved when needed for displaying on the leaderboard. 
