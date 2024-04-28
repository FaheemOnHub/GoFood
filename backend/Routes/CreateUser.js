const express = require("express");
const router = express.Router();
const User = require("../Models/User");
router.post("/createUser", async (req, res) => {
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
});
module.exports = router;
