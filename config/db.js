const mongoose = require("mongoose");
try {
  mongoose.connect("mongodb://localhost:27017/bostontravels", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  });
  console.log("Connected to database successfully");
} catch (err) {
  console.log("Error connecting to the database");
}