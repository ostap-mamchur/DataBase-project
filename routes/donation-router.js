const { Router } = require("express");
const Client = require("../models/client");
const Gift = require("../models/gift");
const Donation = require("../models/donation");
const HiredFriend = require("../models/hiredFriend");

const router = Router();

router.get("/", async (req, res) => {
    const donations = await Donation.findAll();
    res.json(donations);
});

router.post("/", async (req, res) => {
    const gift = await Gift.create({
        name: "Car",
    });
    const hiredFriend = await HiredFriend.create({
        firstName: "Ostap",
        lastName: "Mamchur",
    });
    const client = await Client.create({
        firstName: "Iryna",
        lastName: "Maselko",
    });

    for (let key in gift) {
        console.log(key, gift[key]);
    }

    const donation = await Donation.create({});

    hiredFriend.setDonations([donation]);
    client.setDonations([donation]);
    gift.setDonations([donation]);
    res.json("ok");
});

module.exports = router;
