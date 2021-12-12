const { Router } = require("express");
const Client = require("../models/client");
const Meeting = require("../models/meeting");
const HiringMeeting = require("../models/hiringMeeting");
const HiredFriend = require("../models/hiredFriend");
const sequelize = require("sequelize");
const router = Router();

router.get("/", async (req, res) => {
    const clients = await Client.findAll({
        attributes: [
            "first_name",
            [sequelize.fn("COUNT", "first_name"), "count"],
        ],
        group: ["first_name"],
    });
    res.json(clients);
});

router.post("/", async (req, res) => {
    const meeting = await Meeting.create({
        name: "Credence",
        address: "vul. Shevchenka",
        date: Date.now(),
    });
    const hiredFriend = await HiredFriend.create({
        firstName: "Ostap",
        lastName: "Mamchur",
    });
    const client = await Client.create({
        firstName: "Iryna",
        lastName: "Maselko",
    });

    const hiringMeeting = await HiringMeeting.create({});

    meeting.setHiring_meetings([hiringMeeting]);
    client.setHiring_meetings([hiringMeeting]);
    hiredFriend.setHiring_meetings([hiringMeeting]);
    res.json("ok");
});

module.exports = router;
