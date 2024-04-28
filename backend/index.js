const express = require("express");
const app = express();
const port = 6000;
const { connectDB, mongoURI } = require("./db");
app.get("/", (req, res) => {
  res.send("Hello World!");
});

connectDB(mongoURI);
console.log("😍 DB SUCCESSFULLY CONNECTED\n----------------------------");
app.listen(port, () => {
  console.log(`🤩 App is running on port ${port}`);
});
