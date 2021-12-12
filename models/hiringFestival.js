const { Sequelize, Model } = require("sequelize");
const Group = require("./group");
const Client = require("./client");
const Festival = require("./festival");
const db = require("../db");

class HiringFestival extends Model {}

HiringFestival.init(
    {},
    {
        underscored: true,
        sequelize: db,
        modelName: "hiring_festival",
    }
);

Group.hasMany(HiringFestival);
Client.hasMany(HiringFestival);
Festival.hasMany(HiringFestival);

module.exports = HiringFestival;
