const express = require("express");
const router = express.Router();
const User = require("../Models/User");
const { body, validationResult } = require("express-validator");
router.post(
  "/createUser",
  [
    body("name")
      .isLength({ min: 3 })
      .withMessage("Name must be at least 3 characters long"),
    body("password")
      .isLength({ min: 8 })
      .withMessage("Password must be at least 8 characters long"),
    body("email").isEmail().withMessage("Email is not valid"),
  ],
  async (req, res) => {
    const result = validationResult(req);
    if (!result.isEmpty()) {
      return res.status(400).json({
        errors: result.array(),
      });
    }

    try {
      const user = await User.create(req.body);
      res.json({
        data: user,
      });
    } catch (error) {
      res.status(403).json({
        error,
      });
    }
  }
);
module.exports = router;
