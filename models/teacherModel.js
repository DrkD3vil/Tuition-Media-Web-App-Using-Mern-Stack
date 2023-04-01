const mongoose = require("mongoose");
const teacherSchema = new mongoose.Schema(
  {
    userId: {
      type: String,
      required: true,
    },
    firstName: {
      type: String,
      required: true,
    },
    lastName: {
      type: String,
      required: true,
    },
    phoneNumber: {
      type: String,
      required: true,
    },
    university: {
      type: String,
      required: true,
    },
    address: {
      type: String,
      required: true,
    },
    specialization: {
      type: String,
      required: true,
    },
    experienceyear: {
      type: String,
      required: true,
    },
    tuitionfee: {
      type: Number,
      required: true,
    },
    timings : {
      type: Array,
      required: true,
    },
    status: {
      type: String,
      default: "pending",
    }
  },
  {
    timestamps: true,
  }
);

const teacherModel = mongoose.model("teachers", teacherSchema);
module.exports = teacherModel;
