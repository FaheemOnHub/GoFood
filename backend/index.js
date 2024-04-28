const express = require("express");
const app = express();
const port = 6000;
const createUser = require("./Routes/CreateUser");
const { connectDB, mongoURI } = require("./db");
app.get("/", (req, res) => {
  res.send("Hello World!");
});

// connectDB(mongoURI);

// app.listen(port, () => {
//   console.log(`🤩 App is running on port ${port}`);
// });
app.use(express.json());
app.use("/api", createUser);
const start = async () => {
  try {
    await connectDB(mongoURI);
    console.log("😍 DB SUCCESSFULLY CONNECTED\n----------------------------");
    app.listen(port, () => {
      console.log(`🤩 App is running on port ${port}`);
    });
  } catch (error) {
    console.log(error);
  }
};
start();
