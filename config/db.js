const mongoose = require('mongoose')

const conn = async ()=> {

  try {
    //connect to db
     mongoose.connect(process.env.MONGO_URI)
    mongoose.connection.once("open", () => {
      console.log("connected to mongodb");
    })
  } catch (e) {
    console.log(`Connection Error: ${e.message}`);
  }
};

module.exports = conn;