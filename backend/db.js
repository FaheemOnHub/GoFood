const mongoose = require("mongoose");

exports.mongoURI =
  "mongodb+srv://fami:faheem0987@cluster0.ahxdhzx.mongodb.net/goFood?retryWrites=true&w=majority&appName=Cluster0";

exports.connectDB = async (mongoURI) => {
  await mongoose.connect(mongoURI, {});
  console.log("MongoDB connection established");
  const fetchAllData = async () => {
    try {
      const collection = mongoose.connection.db.collection("food_items"); // replace 'yourCollectionName' with the name of your collection
      const data = await collection.find({}).toArray(); // fetch all documents in the collection
      //   console.log(data);
    } catch (error) {
      console.error(error);
    }
  };

  fetchAllData();
};
