const { Router } = require("express");
const Client = require("../models/client");
const router = Router();

router.get("/", async (req, res) => {
  const clients = await Client.findAll({ raw: true });
  res.json(clients);
});

router.post("/", async (req, res) => {
  const { firstName, lastName } = req.body;
  await Client.create({ firstName, lastName });
  res.json("success");
});

module.exports = router;
