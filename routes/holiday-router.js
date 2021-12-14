const { Router } = require("express");
const Holiday = require("../models/holiday");
const HiredFriend = require("../models/hiredFriend");
const { Op } = require("sequelize");

const router = Router();

router.get("/", async (req, res) => {
    const holidays = await Holiday.findAll();
    res.json(holidays);
});

router.post("/", async (req, res) => {
    const { hiredFriendId, date } = req.body;

    const hiredFriend = await HiredFriend.findByPk(hiredFriendId);
    const holiday = await Holiday.create({ date });

    hiredFriend.addHolidays([holiday]);

    res.json("ok");
});

router.get("/func6", async (req, res) => {
    const { startHiredFriendId, endHiredFriendId } = req.body;

    const holidays = await Holiday.findAll({
        raw: true,
        attributes: ["hired_friend.first_name", "date"],
        where: {
            hiredFriendId: {
                [Op.between]: [startHiredFriendId, endHiredFriendId],
            },
        },
        include: [
            {
                model: HiredFriend,
                attributes: [],
            },
        ],
    });
    res.json(holidays);
});

module.exports = router;
