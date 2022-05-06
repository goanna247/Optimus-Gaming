const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Schema
const UserSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  // lastName: {
  //   type: String,
  //   required: false
  // },
  email: {
    type: String,
    required: true
  },
  // phone: {
  //   type: Number,
  //   required: true
  // },
  // streetNumber: {
  //   type: Number,
  //   required: true
  // },
  // streetName: {
  //   type: String, 
  //   required: true
  // },
  // suburb: {
  //   type: String,
  //   required: true
  // },
  // postCode: {
  //   type: Number,
  //   required: true
  // },
  // totalBookingCosts: {
  //   type: Number,
  //   default: 0.00
  // },
  // age: { 
  //   type: Number,
  //   required: true
  // },
  password: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  },
});

module.exports = User = mongoose.model("users", UserSchema);
