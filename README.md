# Pokemon Backend API
The backend is built using Node.js, MongoDB, and Mongoose. It follows a simple MVC (Model-View-Controller) pattern and serves as an Express-powered API. Its primary function is to store and manage the game's leaderboard data, allowing for efficient retrieval and storage of player statistics.

### Project Structure
The backend adheres to a well-defined project structure, ensuring that the codebase remains organized and maintainable. Mongoose is used to define the schema for the leaderboard, where each player's username (which must be unique) is tracked, along with the number of battles they’ve fought and their win/loss record.

### Leaderboard Schema
#### The leaderboard schema includes the following fields:

- username: A unique identifier for each player, with a minimum length of 2 characters and a maximum of 100.
- battles: The total number of battles the player has participated in.
- won: The number of battles the player has won.
- lost: The number of battles the player has lost.

This backend ensures that every player's game statistics are saved and can be retrieved when needed for displaying on the leaderboard. 
