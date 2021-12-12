const { Router } = require("express");
const Meeting = require("../models/meeting");
const router = Router();

router.get("/", async (req, res) => {
  const meetings = await Meeting.findAll({ raw: true });
  res.json(meetings);
});

router.post("/", async (req, res) => {
  const { name, date, address } = req.body;
  await Meeting.create({ name, date, address });
  res.json("success");
});

module.exports = router;
