const express = require("express");
const router = express.Router();
const Account = require("../Schema");

// Get all posts
router.get("/", async (req, res) => {
  try {
    const accounts = await Account.find();
    res.json(accounts);
  } catch (err) {
    res.json({ message: err });
  }
});

// Create a simple account
router.post("/", (req, res) => {
  const account = new Account({
    username: req.body.username,
    current_level: req.body.current_level,
    current_exp: req.body.current_exp,
    coins: req.body.coins,
    gold: req.body.gold,
  });

  post
    .save()
    .then((data) => {
      res.json(data);
    })
    .catch((err) => {
      res.json({ message: err });
    });
});

module.exports = router;
