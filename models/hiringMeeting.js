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
HiringMeeting.belongsTo(HiredFriend);
Client.hasMany(HiringMeeting);
HiringMeeting.belongsTo(Client);
Meeting.hasMany(HiringMeeting);
HiringMeeting.belongsTo(Meeting);

module.exports = HiringMeeting;
