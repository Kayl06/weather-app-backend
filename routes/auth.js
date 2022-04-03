const express = require("express");

const { body } = require("express-validator");

const router = express.Router();

const User = require("../models/user");

const authController = require("../controller/auth");

router.post(
  "/signup",
  [
    body("username")
      .isEmail()
      .withMessage("Please enter a valid email username.")
      .custom(async (username) => {
        const user = await User.find(username);
        if (user[0].length > 0) {
          return Promise.reject("Username already exist.");
        }
      }),
    body("password").trim().isLength({ min: 7 }),
  ],
  authController.signup
);

router.post(
  "/login",
  authController.login
)

module.exports = router;
