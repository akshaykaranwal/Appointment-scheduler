const express = require("express");
const {
  loginController,
  registerController,
  authController,
  applyDoctorController,
  getAllNotificationController,
  deleteAllNotificationController,
  getAllDocotrsController,
  bookeAppointmnetController,
  bookingAvailabilityController,
  userAppointmentsController,
} = require("../controllers/userCtrl");
const authMiddlewares = require("../middlewares/authMiddlewares");

//router onject
const router = express.Router();

//routes
//LOGIN || POST
router.post("/login", loginController);

//REGISTER || POST
router.post("/register", registerController);

//Auth || POST
router.post("/getUserData", authMiddlewares, authController);

//APply Doctor || POST
router.post("/apply-doctor", authMiddlewares, applyDoctorController);

//Notifiaction  Doctor || POST
router.post(
  "/get-all-notification",
  authMiddlewares,
  getAllNotificationController
);
//Notifiaction  Doctor || POST
router.post(
  "/delete-all-notification",
  authMiddlewares,
  deleteAllNotificationController
);

//GET ALL DOC
router.get("/getAllDoctors", authMiddlewares, getAllDocotrsController);

//BOOK APPOINTMENT
router.post("/book-appointment", authMiddlewares, bookeAppointmnetController);

//Booking Avliability
router.post(
  "/booking-availbility",
  authMiddlewares,
  bookingAvailabilityController
);

//Appointments List
router.get("/user-appointments", authMiddlewares, userAppointmentsController);

module.exports = router;