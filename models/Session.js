const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const SessionSchema = new Schema({
  date: {
    type: Date,
    required: true
  },
  lengt: { //you cant have something called length because thats a method
    type: Number,
    required: true
  },
});

module.exports = Session = mongoose.model("session", SessionSchema);