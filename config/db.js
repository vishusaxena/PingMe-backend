const mongoose = require("mongoose");

const connectDB = () => {
  try {
    const conn = mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("mongoDB connected");
  } catch (error) {
    console.log(`Error:${error.message}`);
    process.exit();
  }
};

module.exports = connectDB;
