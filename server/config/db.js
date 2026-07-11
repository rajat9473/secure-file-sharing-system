const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    const connection = await mongoose.connect(process.env.MONGO_URI);

    console.log("=====================================");
    console.log("MongoDB Connected Successfully");
    console.log("Database:", connection.connection.name);
    console.log("Host:", connection.connection.host);
    console.log("Created by RAJAT CHITRANSH");
    console.log("=====================================");
  } catch (error) {
    console.log("MongoDB Connection Failed");
    console.log(error.message);
    process.exit(1);
  }
};

module.exports = connectDB;