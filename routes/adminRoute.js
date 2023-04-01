const express = require("express");
const router = express.Router();
const User = require("../models/userModel");
const Teacher = require("../models/teacherModel");
const authMiddleware = require("../middlewares/authMiddleware");

router.get("/get-all-teachers", authMiddleware, async (req, res) => {
  try {
    const teachers = await Teacher.find({});
    res.status(200).send({
      message: "Teachers fetched successfully",
      success: true,
      data: teachers,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      message: "Error applying teacher account",
      success: false,
      error,
    });
  }
});

router.get("/get-all-users", authMiddleware, async (req, res) => {
  try {
    const users = await User.find({});
    res.status(200).send({
      message: "Users fetched successfully",
      success: true,
      data: users,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      message: "Error applying teacher account",
      success: false,
      error,
    });
  }
});

router.post(
  "/change-teacher-account-status",
  authMiddleware,
  async (req, res) => {
    try {
      const { teacherId, status } = req.body;
      const teacher = await Teacher.findByIdAndUpdate(teacherId, {
        status,
      });

      const user = await User.findOne({ _id: teacher.userId });
      const unseenNotifications = user.unseenNotifications;
      unseenNotifications.push({
        type: "new-teacher-request-changed",
        message: `Your teacher account has been ${status}`,
        onClickPath: "/notifications",
      });
      user.isTeacher = status === "approved" ? true : false;
      await user.save();

      res.status(200).send({
        message: "Teacher status updated successfully",
        success: true,
        data: teacher,
      });
    } catch (error) {
      console.log(error);
      res.status(500).send({
        message: "Error applying teacher account",
        success: false,
        error,
      });
    }
  }
);



module.exports = router;