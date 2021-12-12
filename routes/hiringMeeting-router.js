const { Router } = require("express");
const Client = require("../models/client");
const Meeting = require("../models/meeting");
const HiringMeeting = require("../models/hiringMeeting");
const HiredFriend = require("../models/hiredFriend");
const sequelize = require("sequelize");
const router = Router();

const { Op } = sequelize;

router.get("/", async (req, res) => {
  const { clientId, number, dateStart, dateEnd } = req.query;
  const clients = await HiringMeeting.findAll({
    raw: true,
    attributes: ["hired_friend.first_name"],
    include: [
      {
        model: HiredFriend,
        attributes: [],
      },
      {
        model: Meeting,
        attributes: [],
        where: {
          date: {
            [Op.between]: [dateStart, dateEnd],
          },
        },
      },
    ],
    where: {
      clientId,
    },
    group: ["hired_friend.first_name"],
    having: sequelize.literal(`COUNT(*) >= ${number}`),
  });
  res.json(clients);
});

router.post("/", async (req, res) => {
  const meeting = await Meeting.create({
    name: "Credence",
    address: "vul. Shevchenka",
    date: new Date().toISOString(),
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
