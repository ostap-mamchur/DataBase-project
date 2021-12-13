const { Router } = require("express");
const Client = require("../models/client");
const Meeting = require("../models/meeting");
const HiringMeeting = require("../models/hiringMeeting");
const HiredFriend = require("../models/hiredFriend");
const sequelize = require("sequelize");
const router = Router();

const { Op } = sequelize;

router.get("/func1", async (req, res) => {
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

router.get("/func3", async (req, res) => {
  const { hiredFriendId, number, dateStart, dateEnd } = req.query;
  const meetings = await HiringMeeting.findAll({
    raw: true,
    attributes: ["meeting.name"],
    include: [
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
      hiredFriendId,
    },
    group: ["meeting.name"],
    having: sequelize.literal(`COUNT(*) >= ${number}`),
  });
  res.json(meetings);
});

router.get("/func2", async (req, res) => {
  const { hiredFriendId, number, dateStart, dateEnd } = req.query;
  const clients = await HiringMeeting.findAll({
    raw: true,
    attributes: ["client.first_name"],
    include: [
      {
        model: Client,
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
      hiredFriendId,
    },
    group: ["client.first_name"],
    having: sequelize.literal(`COUNT(*) >= ${number}`),
  });
  res.json(clients);
});

router.post("/", async (req, res) => {
  const { meetingId, hiredFriendId, clientId } = req.body;

  const meeting = await Meeting.findByPk(meetingId);
  const hiredFriend = await HiredFriend.findByPk(hiredFriendId);
  const client = await Client.findByPk(clientId);

  const hiringMeeting = await HiringMeeting.create({});

  meeting.addHiring_meetings([hiringMeeting]);
  client.addHiring_meetings([hiringMeeting]);
  hiredFriend.addHiring_meetings([hiringMeeting]);
  res.json("Success");
});

router.get("/func4", async (req, res) => {
  const festivals = await HiringMeeting.findAll({
    raw: true,
    attributes: [
      [
        sequelize.fn("DATE_TRUNC", "MONTH", sequelize.col("meeting.date")),
        "month",
      ],
      [sequelize.fn("COUNT", "month"), "count"],
    ],
    include: [
      {
        model: Meeting,
        attributes: [],
      },
    ],
    group: [
      "month" /* sequelize.fn("DATE_TRUNC", "MONTH", sequelize.col("meeting.date")) */,
    ],
  });
  res.json(festivals);
});

router.get("/all", async (req, res) => {
  const hiringMeetings = await HiringMeeting.findAll({ raw: true });
  res.json(hiringMeetings);
});

module.exports = router;
