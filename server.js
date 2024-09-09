const express = require("express");
const app = express();
require("dotenv").config();
require("colors");
const cors = require("cors");
const connectDB = require("./dbinit");
connectDB();

const port = process.env.PORT || 8081;

//middlewares
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Welcome to our eCommerce API !");
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
