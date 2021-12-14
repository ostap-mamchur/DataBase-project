const { Router } = require("express");
const Client = require("../models/client");
const Festival = require("../models/festival");
const HiringFestival = require("../models/hiringFestival");
const HiredFriend = require("../models/hiredFriend");
const Group = require("../models/group");
const router = Router();

router.get("/", async (req, res) => {
    const hiringFestivals = await HiringFestival.findAll();
    res.json(hiringFestivals);
});

router.post("/", async (req, res) => {
    const festival = await Festival.create({
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
    const group = await Group.create({ name: "Dream Team" });

    group.addHired_friends([hiredFriend]);

    // for (let key in group) {
    //     console.log(key, group[key]);
    // }

    const hiringFestival = await HiringFestival.create({});

    festival.setHiring_festivals([hiringFestival]);
    client.setHiring_festivals([hiringFestival]);
    group.setHiring_festivals([hiringFestival]);
    res.json("ok");
});

module.exports = router;
