const { Sequelize, Model } = require("sequelize");
const HiredFriend = require("./hiredFriend");
const Client = require("./client");
const Meeting = require("./meeting");
const db = require("../db");

class HiringMeeting extends Model {}

HiringMeeting.init(
    {},
    {
        underscored: true,
        sequelize: db,
        modelName: "hiring_meeting",
    }
);

HiredFriend.hasMany(HiringMeeting);
Client.hasMany(HiringMeeting);
Meeting.hasMany(HiringMeeting);

module.exports = HiringMeeting;
