const mongoose = require("mongoose");

exports.mongoURI =
  "mongodb+srv://fami:faheem0987@cluster0.ahxdhzx.mongodb.net/goFood?retryWrites=true&w=majority&appName=Cluster0";

exports.connectDB = async (mongoURI) => {
  await mongoose.connect(mongoURI, {});
};
