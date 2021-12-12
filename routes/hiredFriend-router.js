const { Router } = require("express");
const HiredFriend = require("../models/hiredFriend");
const router = Router();

router.get("/", async (req, res) => {
  const hiredFriends = await HiredFriend.findAll({ raw: true });
  res.json(hiredFriends);
});

router.post("/", async (req, res) => {
  const { firstName, lastName } = req.body;
  const hiredFriend = await HiredFriend.create({ firstName, lastName });
  res.json("success");
});

module.exports = router;
