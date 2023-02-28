const mongoose = require("mongoose");

const options = {
    useNewUrlParser: true,
    useUnifiedTopology: true
  };

const connectDB = async () => {
    mongoose.connect(process.env.MONGO_URI, options).then(() => {
        console.log('MongoDB Connected');
      }).catch((err) => {
        console.log(err);
      });
}

module.exports = connectDB;