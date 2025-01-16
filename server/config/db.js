const mongoose = require('mongoose');
// require('dotenv').config();

const connectDB = async () => {
  try {
    await mongoose.connect();
    console.log('Product Service MongoDB Connected');
  } catch (err) {
    console.error('MongoDB connection error:', err);
    process.exit(1);
  }
};

module.exports = connectDB;
