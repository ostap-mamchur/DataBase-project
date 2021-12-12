const { Router } = require("express");
const Holiday = require("../models/holiday");
const HiredFriend = require("../models/hiredFriend");

const router = Router();

router.get("/", async (req, res) => {
    const holidays = await Holiday.findAll();
    res.json(holidays);
});

router.post("/", async (req, res) => {
    const hiredFriend = await HiredFriend.create({
        firstName: "Ostap",
        lastName: "Mamchur",
    });
    const holiday = await Holiday.create({
        date: Date.now(),
    });

    hiredFriend.setHolidays([holiday]);

    res.json("ok");
});

module.exports = router;
