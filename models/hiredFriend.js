const { Sequelize, Model } = require("sequelize");
const db = require("../db");
const Group = require("./group");

class HiredFriend extends Model {}

HiredFriend.init(
    {
        firstName: {
            type: Sequelize.STRING,
            allowNull: true,
        },
        lastName: {
            type: Sequelize.STRING,
            allowNull: true,
        },
    },
    {
        underscored: true,
        sequelize: db,
        modelName: "hired_friend",
    }
);

Group.hasMany(HiredFriend);

module.exports = HiredFriend;
